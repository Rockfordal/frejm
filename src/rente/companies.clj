(ns rente.companies
  (:require [rente.db :as db :refer [conn]]
            [rente.queries :as q]
            [datomic.api :as d]))

(defn create!
  ([]  (db/create! {:type :company}))
  ([m] (db/create! (assoc m :type :company))))

(defn find-by-name [name]
  (q/by-name :company/name name))

(defn get-by-name [name]
  (q/get-by-name :company/name name))

(defn get-all []
  (q/get-all :product))

(defn create-for-project-name [company-name project-name]
  (let [company-id (d/tempid :db.part/user)]
  @(d/transact (db/conn) [{:db/id company-id
                           :company/name company-name
                           :type :company}
                          {:db/id (q/by-name :project/name project-name)
                           :project/companies company-id}])))

(comment
  (instance? datomic.query.EntityMap found) ; false
  (d/pull (db) '[*] 17592186045647)) ; pull all
