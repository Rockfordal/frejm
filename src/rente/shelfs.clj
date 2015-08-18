(ns rente.shelfs
  (:require [rente.db :as db :refer [conn]]
            [rente.queries :as q]))

(defn create!
  ([]  (db/create! {:type :shelf}))
  ([m] (db/create! (assoc m :type :shelf))))

(defn by-name [name]
  (q/by-name :shelf/name name))

(defn get-by-name [name]
  (q/get-by-name :shelf/name name))

(defn get-all []
  (q/get-all :shelf))
