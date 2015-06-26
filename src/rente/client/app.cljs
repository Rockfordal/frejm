(ns rente.client.app
    (:require-macros [cljs.core.async.macros :refer [go-loop]])
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [jayq.core :refer [$ delegate]] ; :append data
              [rente.client.handlers]
              [rente.client.subs]
              [rente.client.db :refer [state]]
              [rente.client.views.main :as views]
              [rente.client.routes :as routes]
              [rente.client.ws :as ws]))

(defn parseinit []
    (js/Parse.initialize "mWR3FuLC0MB5Q1gm9rtKEfXeKoC6zuk4R7Ds66XG"
                         "0csWP1KiUZEwfZeearVtfp9gfnChIDGBoxozln9P"))

(defmulti handle-event (fn [data [ev-id ev-data]] ev-id))

(defmethod handle-event :default
  [data [_ msg]]
  (swap! data update-in [:messages] #(conj % msg)))

(defn app [data]
  (:re-render-flip @data)
  ;(js/console.log "denna körs två gånger!")
  [views/main-panel])

(defn mount-root []
  (when-let [root (.getElementById js/document "main")]
    (reagent/render [app state] root)))

(def $body ($ :body))

(defn ^:export main []
  (parseinit)
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db state])
  (mount-root)
  ;(.sideNav (js/$ ".button-collapse"))
  )
