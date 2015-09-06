(ns rente.projects
  (:require [rente.db :as db :refer [conn]]
            [rente.queries :as q]))


(defn create!
  ([]  (db/create!         {:type :project}))
  ([m] (db/create! (assoc m :type :project))))

(defn by-name [name]
  (q/by-name :project/name name))

(defn get-by-name [name]
  (q/get-by-name :project/name name))

(defn get-all []
  (q/get-all :project))

(defn delete-all []
  (for [entity (get-all)]
    (db/delete-entity (:db/id entity))))
