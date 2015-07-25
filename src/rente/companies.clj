(ns rente.companies
  (:refer-clojure :exclude [read])
  (:require [rente.db :as db :refer [conn]]
            [clojure.tools.namespace.repl :refer [refresh refresh-all]]
            [datomic.api :as d]))

(defn create!
  ([]  (db/create! {:type :company}))
  ([m] (db/create! (assoc m :type :company))))

(defn read
  ([]  (db/read :type :company)))

(defn getall []
  (map d/touch (read)))

(comment
  (d/pull (db) '[*] 17592186045647)) ; pull all

(defn find-with-eid []
  (d/touch (d/entity (db/db) (ffirst (d/q '[:find ?e :in $ ?project/name
                                            :where [?e :project/name ?name]]
                                            (db/db) "ica")))))

(defn find-project-eid-by-name [project-name]
  (ffirst (d/q '[:find ?eid
         :in $ ?project-name
         :where [?eid :project/name ?project-name]]
       (db/db)
       project-name)))

(defn create-for-project-name [company-name project-name]
  (let [company-id (d/tempid :db.part/user)]
  @(d/transact (db/conn) [{:db/id company-id
                           :company/name company-name
                           :type :company}
                          {:db/id (find-project-eid-by-name project-name)
                           :project/companies company-id}])))

(defn init []
  (do
    (create! {:company/name    "Baker Tilly"
              :company/orgnr   "483938-1134"
              :company/phone   "08-42424"})

    (create! {:company/name    "Yellow-backed duiker"
              :company/orgnr   "483838-2424"
              :company/phone   "08-48398"})
    
     "Skapat företag"
    ))
