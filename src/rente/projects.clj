(ns rente.projects
  (:refer-clojure :exclude [read])
  (:require [rente.db :as db]
            [clj-json.core :as json]))

(defn create!
  ([]  (db/create! {:type :project}))
  ([m] (db/create! (assoc m :type :project))))

(defn read
  ([]    (db/read :type :project))
  ([id]  (db/read id))
  ([k v] (db/read k v)))

(defn update! [id m]
  (db/update! id m))

(defn delete! [id]
  (db/delete! id))

(defn getjson []
  (json/generate-string (map db/expand (read))))

(defn getedn []
  (map db/expand (read)))

(defn init []
  (do
    (create! {:project/name "Baker Tilly"
              :project/description  "Första"})

    (create! {:project/name "nytt projekt"
              :project/description ""})
    "skapat projects"
    ))
