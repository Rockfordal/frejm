(ns rente.projects
  (:refer-clojure :exclude [read])
  (:require [rente.db :as db]))

(defn create!
  ([]  (db/create! {:type :project}))
  ([m] (db/create! (assoc m :type :project))))

(defn read
  ([] (db/read :type :project)))

(defn getall []
  (map db/expand (read)))

(defn init []
  (do
    (create! {:project/name "Baker Tilly"
              :project/description  "Första"})

    (create! {:project/name "nytt projekt"
              :project/description ""})
    "skapat projects"
    ))
