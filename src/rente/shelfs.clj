(ns rente.shelfs
  (:require [rente.db :as db :refer [conn]]
            [datomic-schema.schema :as s]
            [datomic.api :as d]))

(def parts [(s/part "frejm")])

(def dbschema                                             ; istället för schema.edn
  [(s/schema shelf
    (s/fields
     [name  :string :indexed]
     [location :string :indexed]))])

(defn create!
  ([]  (db/create! {:type :shelf}))
  ([m] (db/create! (assoc m :type :shelf))))

(defn getall []
  (map d/touch (db/read :type :shelf)))

(defn find-shelf-by-name [name]
  (d/touch (d/entity (db/db) (ffirst
    (d/q '[:find ?e
           :in $
           :where [?e :shelf/name ?name]]
           (db/db) name)))))

(defn find-eid-by-name [project-name]
  (ffirst (d/q '[:find ?eid
                 :in $ ?pn
                 :where [?eid :project/name ?pn]]
                 (db/db)
                 project-name)))

(defn setup-db []
  (d/transact
    (db/conn)
   (concat
    (s/generate-parts parts)
    (s/generate-schema dbschema))))

(defn init []
  (do
    (setup-db)
    (create! {:shelf/name    "C01"
              :shelf/location   "Rum 1"})

    (create! {:shelf/name    "B01"
              :shelf/location   "Rum 27"})
     "Skapat några så små hyllor"))
