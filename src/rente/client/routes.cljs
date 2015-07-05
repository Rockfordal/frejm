(ns rente.client.routes
    (:require-macros [secretary.core :refer [defroute]])
    (:import goog.History)
    (:require [secretary.core :as secretary]
              [goog.events :as events]
              [goog.history.EventType :as EventType]
              [re-frame.core :as re-frame]))

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn app-routes []
  (secretary/set-config! :prefix "#")

  ;; client routes
  ;; --------------------

  (defroute "/" []
    ;(js/console.log "route dispatch home-panel")
    (re-frame/dispatch [:set-active-panel :home-panel]))

  (defroute "/rente" []
    (re-frame/dispatch [:set-active-panel :rente-panel]))

  (defroute "/todo" []
    (re-frame/dispatch [:set-active-panel :todo-panel]))

  (defroute "/parse" []
    (re-frame/dispatch [:set-active-panel :parse-panel]))

  (defroute "/test" []
    (re-frame/dispatch [:set-active-panel :test-panel]))

  (defroute "/firebase" []
    (re-frame/dispatch [:set-active-panel :firebase-panel]))

  ;; --------------------
  (hook-browser-navigation!))
