(ns rente.client.ls
  (:require [reagent.core :as reagent]
            [cljs.reader]))

;; -- Local Storage  ----------------------------------------------------------

(def lsk "todos-reframe")     ;; local store key

(defn ls->todos
  "Read in todos from LS, and process into a form we can merge into app-db."
  []
  (some->> (.getItem js/localStorage lsk)
           (cljs.reader/read-string)
           (into (sorted-map))         ;; map -> sorted-map
           (hash-map :todos)))

(defn ls->projects []
  (some->> (.getItem js/localStorage lsk)
           (cljs.reader/read-string)
           (into (sorted-map))
           (hash-map :projects)))

(defn todos->ls!
  [todos]
  (.setItem js/localStorage lsk (str todos)))   ;; sorted-map writen as a map

(defn projects->ls! [projects]
  (js/console.log "tjong: " (str projects))
  (.setItem js/localStorage lsk (str projects))   ;; sorted-map writen as a map
  ;projects
)
