(ns rente.client.app
    (:require-macros [cljs.core.async.macros :refer [go-loop]])
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame :refer [dispatch-sync]]
              [rente.client.handlers]
              [rente.client.subs]
              [rente.client.appstate :refer [default-value]]
              [rente.client.views.main :as main :refer [main-panel]]
              [rente.client.routes :as routes :refer [app-routes]]
              [rente.client.ws :as ws])


(defmulti handle-event (fn [data [ev-id ev-data]] ev-id))

(defmethod handle-event :default
  [data [_ msg]]
  (swap! data update-in [:messages] #(conj % msg)))

(defn app [data]
  [main-panel])

(defn mount-root []
  (let [root (.getElementById js/document "main")]
    (reagent/render [app nil] root)))

(defn ^:export main []
  (dispatch-sync [:initialize-db default-value]) ; populera appstate med seed-data
  (app-routes)                                   ; lyssna på webläsare, dispatcha :set-active-panel
  (main/create-my-routes)
  (mount-root))
