(ns rente.client.app
    (:require-macros [cljs.core.async.macros :refer [go-loop]])
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [jayq.core :refer [$ delegate]] ; :only [$ append delegate data]])
              [rente.client.handlers]
              [rente.client.subs]
              [rente.client.views :as views]
              [rente.client.routes :as routes]
              [rente.client.ws :as ws]))

(defn parseinit []
    (js/Parse.initialize "mWR3FuLC0MB5Q1gm9rtKEfXeKoC6zuk4R7Ds66XG"
                         "0csWP1KiUZEwfZeearVtfp9gfnChIDGBoxozln9P"))

(defonce state (reagent/atom {:title "RENTE"
                              :messages []
                              :re-render-flip false}))

(defmulti handle-event (fn [data [ev-id ev-data]] ev-id))

(defmethod handle-event :default
  [data [_ msg]]
  (swap! data update-in [:messages] #(conj % msg)))

(defn app [data]
  (:re-render-flip @data)
  [views/main-panel data])

(defn mount-root []
  (when-let [root (.getElementById js/document "main")]
    (reagent/render [app state] root)))

(def $body ($ :body))

(defn ^:export main []
  (parseinit)
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root)
  ;(.sideNav (js/$ ".button-collapse"))
  )
