(ns rente.client.routes
    (:require-macros [secretary.core :refer [defroute]])
    (:import goog.History)
    (:require [secretary.core :as secretary]
              [goog.events :as events]
              [goog.history.EventType :as EventType]
              [clojure.string :refer [replace]]
              [re-frame.core :as re-frame :refer [dispatch subscribe]]))

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn app-routes []
  (secretary/set-config! :prefix "#")

  (defroute "/" []
    (dispatch [:set-active-panel :home-panel]))

  (defroute "/companies/:id" {:as params}
    ;(println "Företag: " (:id params))
    (dispatch [:set-active-panel :companyedit-panel (:id params)]))

  (let [routes (subscribe [:routes])]
    (doseq [route @routes]
      (let [panel   (:panel route)
            hashurl (:url route)
            url     (replace hashurl "#" "/")]
      (defroute [url] [] (dispatch [:set-active-panel panel])))))

  (hook-browser-navigation!))
