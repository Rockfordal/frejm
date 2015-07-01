(ns rente.client.app
    (:require-macros [cljs.core.async.macros :refer [go-loop]])
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame :refer [dispatch-sync]]
              ;[jayq.core :refer [$ delegate]] ; :append data
              [rente.client.handlers]
              [rente.client.subs]
              [rente.client.appstate :refer [state]]
              [rente.client.views.main :as views :refer [main-panel]]
              [rente.client.routes :as routes :refer [app-routes]]
              [rente.client.ws :as ws]))

;(def $body ($ :body)) ; jayq

(defmulti handle-event (fn [data [ev-id ev-data]] ev-id))

(defmethod handle-event :default
  [data [_ msg]]
  (swap! data update-in [:messages] #(conj % msg)))

(defn app [data]
  ; här hade vi nå re-render flip som vi inte verkar behöva
  [main-panel])

(defn mount-root []
  (let [root (.getElementById js/document "main")]
    (reagent/render [app state] root)))

(defn ^:export main []
  (app-routes)                           ; lyssnar på webläsarn och dispatchar :set-active-panel handler
  (dispatch-sync [:initialize-db state]) ; populera databasen med seed-data
  (mount-root))
