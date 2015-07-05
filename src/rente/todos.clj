(ns rente.todos
  (:refer-clojure :exclude [read])
  (:require [rente.db :as db]
            [clj-json.core :as json]))

(defn create!
  ([]
     (db/create! {:type :todo}))
  ([m]
   666
  ; (db/create! (assoc m :type :todo))
  )
  )

(defn read
  ([]
     (db/read :type :todo))
  ([id]
     (db/read id))
  ([k v]
     (db/read k v)))

(defn update! [id m]
  (db/update! id m))

(defn delete! [id]
  (db/delete! id))

(defn getanimalsjson []
  (json/generate-string (map db/expand (read))))

(defn getedn []
  (map db/expand (read)))

(defn init []
  (do
    (create! {:title "Painted-snipe"
              :done  true})

    (create! {:title "Atlantic salmon"
              :done  false})))
