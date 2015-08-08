(ns rente.products
  (:require [rente.db :as db :refer [conn]]
            [datomic-schema.schema :as s]
            [datomic.api :as d]))

(def parts [(s/part "frejm")])

(def dbschema          ; istället för schema.edn
  [(s/schema product
    (s/fields
     [name  :string :indexed]
     [price :string :indexed]))])

(defn create!
  ([]  (db/create! {:type :product}))
  ([m] (db/create! (assoc m :type :product))))

(defn find-by-name [name]
  (d/q '[:find   ?e :in $ ?name
         :where [?e :product/name ?name]]
         (db/db) name))

(defn get-by-name [name]
  (d/touch (d/entity (db/db) (ffirst (find-by-name)))))

(defn getall []
  (map d/touch (db/read :type :product)))

(defn setup-db []
  (d/transact (db/conn)
    (concat (s/generate-parts parts)
            (s/generate-schema dbschema))))

(defn init []
  (do (setup-db)
      (create! {:product/name    "Filmjölk"
              :product/price     "49.90"})

      (create! {:product/name    "Prickig Korv"
              :product/price     "25"})
       "Skapat produkter"))
