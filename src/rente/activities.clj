(ns rente.activities
  (:require [rente.db :as db :refer [conn]]
            [rente.queries :as q]
            [datomic.api :as d]))


(defn create!
  ([]  (db/create! {:type :activity}))
  ([m] (db/create! (assoc m :type :activity))))

(defn get-all []
  (q/get-all :activity))

(defn by-name [name]
  (q/by-name :activity/name name))

(defn get-by-name [name]
  (q/show-entity (by-name name)))

(defn by-project [name]
  (d/q '[:find   ?a :in $ ?name
         :where [?a :activity/project ?p
                 ?p :project/name ?name]]
         (db/db) name))

(defn by-company [name]
  (d/q '[:find   ?a :in $ ?code
         :where [?a :activity/company ?c]
                [?c :company/name ?name]]
         (db/db) name))

;; (defn create-for-project-name [company-name project-name]
;;   (let [company-id (d/tempid :db.part/user)]
;;   @(d/transact (db/conn) [{:db/id company-id
;;                            :company/name company-name
;;                            :type :company
;;                            :company/project (ffirst (q/by-name :project/name project-name))}])))

(defn delete-all []
  (for [entity (get-all)]
    (db/delete-entity (:db/id entity))))
