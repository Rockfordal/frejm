(ns rente.products
  (:refer-clojure :exclude [read])
  (:require [rente.db :as db :refer [conn]]
            [datomic-schema.schema :as s]
            [datomic.api :as d]))

(def parts [(s/part "frejm")])

(def dbschema
  [(s/schema product
    (s/fields
     [name  :string :indexed]
     [price :string :indexed]))])

(defn create!
  ([]  (db/create! {:type :product}))
  ([m] (db/create! (assoc m :type :product))))

(defn read
  ([]  (db/read :type :product)))

(defn getall []
  (map d/touch (read)))

(defn find-product-by-name []
  (d/touch (d/entity (db/db) (ffirst
    (d/q '[:find ?e :in $ ?product/name
           :where [?e :product/name ?name]]
           (db/db) "ica")))))

(defn find-eid-by-name [project-name]
  (ffirst (d/q '[:find ?eid
                 :in $ ?pn
                 :where [?eid :project/name ?pn]]
                 (db/db)
                 project-name)))

(defn setup-db []
  (d/transact
   (db/db)
   (concat
    (s/generate-parts parts)
    (s/generate-schema dbschema))))

(defn init []
  (do
    (setup-db)
    (create! {:product/name    "Filmjölk"
              :product/price   "49.90"})

    (create! {:product/name    "Prickig Korv"
              :product/price   "25"})
    
     "Skapat produkter"))
