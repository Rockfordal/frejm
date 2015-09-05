(ns rente.db
  (:refer-clojure :exclude [read])
  (:require [datomic.api :as d]
            [clojure.tools.logging :as log]
            [com.stuartsierra.component :as component]
            [clojure.algo.generic.functor :refer [fmap]]
            ;[clojure.java.io :refer (resource)]
            [rente.dbschema :refer [get-schema]]
            [rente.dbseed :refer [seed-data]]
            [rente.config :refer [get-config]]))


(defonce connection (atom nil))

(defn conn []
  (if (nil? @connection)
    (throw (RuntimeException. "Ingen databasanslutning."))
    @connection))

(defn init []
  (let [uri (:dburi (get-config))]
    (d/create-database uri)
    (reset! connection (d/connect uri))
    (d/transact (conn) (get-schema))
    true))

(defn db []
  (d/db (conn)))

(defn create! [m]
  (let [dbid (d/tempid :db.part/user)]
    @(d/transact (conn) (list (assoc m :db/id dbid)))
    dbid))

(defn create-entity [m]
  (let [temp-id (d/tempid :db.part/user)
        tx @(d/transact (conn) (list (assoc m :db/id temp-id)))]
    (d/resolve-tempid (db) (:tempids tx) temp-id)))

(defn update-entity [entity]
  (d/transact (conn) (list entity))
  true)

(defn seed []
  (for [entry (seed-data)]
    (create! entry)))

(defn read
  ([k v]
   (let [found (d/q '[:find ?e :in $ ?k ?v :where [?e ?k ?v]] (db) k v)]
     (map (comp (partial d/entity (db)) first) found))))

(defn delete-entity [eid]
  (do @(d/transact (conn) [[:db.fn/retractEntity eid]])
      true))

(defn expand
  ([e]
   (if (instance? datomic.query.EntityMap e)
     (let [m (into {} (d/touch e))]
       (expand m (keys m)))
     e))
  ([e ks]
   (if-not (empty? ks)
     (let [val (get e (first ks))]
       (cond
         (instance? datomic.query.EntityMap val)
         (expand (assoc e (first ks) (expand val)) (rest ks))
         (and (set? val) (instance? datomic.query.EntityMap (first val)))
         (expand (assoc e (first ks) (set (map expand val))) (rest ks))
         :else (expand e (rest ks))))
     e)))

(defn visible-entities []
  (d/q '[:find ?e :in $ %
         :where (visible ?e)]
       (db)
       '[[(visible ?pj) (?pj :project/name)]
         [(visible ?co) (?co :company/name)]
         [(visible ?pr) (?pr :product/name)]
         [(visible ?sn) (?sn :sni/code)]
         [(visible ?sh) (?sh :shelf/name)]
         [(visible ?it) (?it :item/quantity)]]))

(defn load-entity
  "Loads an entity and its attributes. Keep in the db/id
  and replace references with ids (for use by DataScript)"
  [db entity]
  (as->
    (d/entity db entity) e
    (d/touch e)
    (into {:db/id (:db/id e)} e)                            ; needs to be a hash-map, not an entity map
    (fmap (fn [v]
            (cond (set? v) (mapv #(if (instance? datomic.query.EntityMap %) (:db/id %) %) v)
                  (instance? datomic.query.EntityMap v) (:db/id v)
                  :else v)) e)))

(defn get-state []
  (map
    (comp (partial load-entity (db))
          first)
    (visible-entities)))

(defn close []
  (d/release (conn))
  (reset! connection nil))

(defrecord Db []
  component/Lifecycle
  (start [component]
    (init)
    (log/info "Datomic ansluten")
    component)
  (stop [component]
    (close)
    (log/info "Datomic nerkopplad")
    component))

(defn new-datomic []
  (map->Db {}))
