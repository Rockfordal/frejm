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
    (re-frame/dispatch [:set-active-panel :home-panel]))

  (defroute "/parse" []
    (re-frame/dispatch [:set-active-panel :parse-panel]))

  (defroute "/companies" []
    (re-frame/dispatch [:set-active-panel :about-panel]))

  (defroute "/samtal" []
    (re-frame/dispatch [:set-active-panel :call-panel]))

  (defroute "/projekt" []
    (re-frame/dispatch [:set-active-panel :project-panel]))

  ;; --------------------
  (hook-browser-navigation!))
