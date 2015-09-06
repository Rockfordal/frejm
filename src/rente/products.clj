(ns rente.products
  (:require [rente.db :as db :refer [conn]]
            [rente.queries :as q]))


(defn create!
  ([]  (db/create!         {:type :product}))
  ([m] (db/create! (assoc m :type :product))))

(defn by-name [name]
  (q/by-name :product/name name))

(defn get-by-name [name]
  (q/get-by-name :product/name name))

(defn get-all []
  (q/get-all :product))

(defn delete-all []
  (for [entity (get-all)]
    (db/delete-entity (:db/id entity))))
