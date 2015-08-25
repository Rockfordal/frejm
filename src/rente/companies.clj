(ns rente.companies
  (:require [rente.db :as db :refer [conn]]
            [rente.queries :as q]
            [datomic.api :as d]))

(defn create!
  ([]  (db/create! {:type :company}))
  ([m] (db/create! (assoc m :type :company))))

(defn get-all []
  (q/get-all :company))

(defn by-name [name]
  (q/by-name :company/name name))

(defn get-by-name [name]
  (q/show-entity (by-name name)))

(defn add-field [eid field value]
  (d/transact (db/conn) [{:db/id eid field value}]))

(defn add-field-to-name [name field value]
  (let [eid (ffirst (by-name name))]
    (d/transact (db/conn) [{:db/id eid field value}])))

(defn create-for-project-name [company-name project-name]
  (let [company-id (d/tempid :db.part/user)]
  @(d/transact (db/conn) [{:db/id company-id
                           :company/name company-name
                           :type :company
                           :company/project (ffirst (q/by-name :project/name project-name))
                          }])))

                          ;{:db/id (q/by-name :project/name project-name)
                          ; :project/companies company-id}])))