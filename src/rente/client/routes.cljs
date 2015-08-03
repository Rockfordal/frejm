(ns rente.client.routes
  (:import goog.History)
  (:require
    [goog.events :as events]
    [goog.history.EventType :as EventType]
    [secretary.core :as secretary :refer-macros [defroute]]
    [rente.client.state :refer [state]]))

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn app-routes []
  (secretary/set-config! :prefix "#")
  (hook-browser-navigation!))

(defroute module-path "/:module" {module :module}
  (let [module-keys (set (map :key (:modules @state)))
        module-key (or (module-keys (keyword module)) :html2ts)]
    (swap! state
           assoc :module module-key)))
