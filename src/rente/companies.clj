(ns rente.companies
  (:refer-clojure :exclude [read])
  (:require [rente.db :as db]
            [clj-json.core :as json]))

(defn create!
  ([]
     (db/create! {:type :company}))
  ([m]
     (db/create! (assoc m :type :company))))

(defn read
  ([]
     (db/read :type :company))
  ([id]
     (db/read id))
  ([k v]
     (db/read k v)))

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
    (create! {:name    "Baker Tilly"
              :orgnr   "483938-1134"
              :phone   "08-42424"})

    (create! {:name    "Yellow-backed duiker"
              :orgnr   "483838-2424"
              :phone   "08-48398"})
    
     "Skapat företag"
    ))
