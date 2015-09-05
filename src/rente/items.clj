(ns rente.items
  (:require [rente.db :as db :refer [conn]]
            [rente.queries :as q]))


(defn create!
  ([]  (db/create!         {:type :item}))
  ([m] (db/create! (assoc m :type :item))))

(defn by-quantity [q]
  (q/by-name :item/quantity q))

(defn get-by-quantity [q]
  (q/get-by-name :item/quantity q))

(defn get-all []
  (q/get-all :item))

(defn delete-all []
  (for [entity (get-all)]
    (db/delete-entity (:db/id entity))))
