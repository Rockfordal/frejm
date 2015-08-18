(ns rente.skema
  (:use
   [datomic-schema.schema :only [fields part schema]])
  (:require
   [datomic.api :as d]
   [datomic-schema.schema :as s])
  (:gen-class))
  
(defonce db-url "datomic:mem://testdb")
(def parts [(s/part "app")])

(defonce connection (atom nil))

(defn conn []
  (if (nil? @connection)
    (throw (RuntimeException. "Ingen databasanslutning."))
    @connection))

(defn db []
  (d/db (conn)))

(defn init []
  (reset! connection (d/connect db-url)))

(defn create! [m]
  (let [dbid (d/tempid :db.part/user)]
    @(d/transact (conn) (list (assoc m :db/id dbid)))
    dbid))

(def dbschema
  [(s/schema user
    (s/fields
     [username :string :indexed]
     [pwd :string "Hashed password string"]
     [email :string :indexed]
     [status :enum [:pending :active :inactive :cancelled]]
     [group :ref :many]))
   (s/schema group
    (s/fields
     [name :string]
     [permission :string :many]))])

(defn setup-db [url]
  (d/create-database url)
  (d/transact
   ;(d/connect url)
   (init)
   (concat
    (s/generate-parts parts)
    (s/generate-schema dbschema))))

;; Attributes defined in db
(defn read-db [url]
  (map (comp :db/ident (partial d/entity (db))) first)
    (d/q '[:find ?e :where [_ :db.install/attribute ?e]] (conn))))))

(defn un [username]
  (d/q '[:find ?e :in $ ?un :where [?e :user/username ?un]] (db) username))

(comment
  (create! {:user/username "anders"})
  (un "anders")
)

(defn -main [& args]
  (setup-db db-url)
  (read-db db-url))
