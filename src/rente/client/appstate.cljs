(ns rente.client.appstate
  (:require [reagent.core :as reagent]
            [cljs.reader]))

;; -- Default app-db Value  ---------------------------------------------------

(def default-value            ;; what gets put into app-db by default.
  {:todos   (sorted-map)      ;; use the (int) :id as the key
   :showing :all
   :active-panel :home-panel
   :re-render-flip false
   }) ;; one of :all :done :completed

;(def state (reagent/atom {
;                      :active-panel :home-panel
;                      :messages []
;                      :animals {}
;                      :counter 0

;                      :routes [{:url "/"
;                                :panel :home-panel
;                                :label "Hem"}
;                                {:url "/demo"
;                                :panel :demo-panel
;                                :label "Rente"}]

;                      :doc {} :saved? false
;                      :re-render-flip false}))

;; -- Local Storage  ----------------------------------------------------------

(def lsk "todos-reframe")     ;; local store key

(defn ls->todos
  "Read in todos from LS, and process into a form we can merge into app-db."
  []
  (some->> (.getItem js/localStorage lsk)
           (cljs.reader/read-string)
           (into (sorted-map))         ;; map -> sorted-map
           (hash-map :todos)))

(defn todos->ls!
  [todos]
  (.setItem js/localStorage lsk (str todos)))   ;; sorted-map writen as a map

;(defn set-value! [id value]
;  (swap! state assoc :saved? false)
;  (swap! state assoc-in [:doc id] value))

;(defn get-value [id]
;  (get-in @state [:doc id]))

;(defn put! [k v]
;  (swap! state assoc k v))
