(ns rente.sni
  (:require [rente.db :as db :refer [conn]]
            [rente.queries :as q]))


(defn create!
  ([]  (db/create!         {:type :sni}))
  ([m] (db/create! (assoc m :type :sni))))

(defn by-code [q]
  (q/by-name :sni/code q))

(defn get-by-code [q]
  (q/get-by-name :sni/code q))

(defn get-all []
  (q/get-all :sni))

(defn delete-all []
  (for [entity (get-all)]
    (db/delete-entity (:db/id entity))))
