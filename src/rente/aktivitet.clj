(ns rente.aktivitet
  (:require [rente.db :as db :refer [conn]]
            [rente.queries :as q]))


(defn create!
  ([]  (db/create!         {:type :aktivitet}))
  ([m] (db/create! (assoc m :type :aktivitet))))

(defn by-status [q]
  (q/by-name :aktivitet/status q))

(defn get-by-status [q]
  (q/get-by-name :aktivitet/status q))

(defn get-all []
  (q/get-all :aktivitet))
