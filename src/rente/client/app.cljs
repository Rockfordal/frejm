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
  (let [flipp (re-frame/subscribe [:flippen])]
     ;(js/console.log @flipp)
     (js/console.log "app data:" (clj->js @data))
      ;@flipp
     ;(:re-render-flip @data) ;utan den så uppdateras inte vyn
     ;(js/console.log "denna körs två gånger!")
     [views/main-panel]))

(defn mount-root []
  (let [root (.getElementById js/document "main")
        state (re-frame/subscribe [:hela-db])]
    ;(js/console.log "mount-root") ; körs bara en gång
    ;(reagent/render [app state] root)
    (reagent/render [app state] root)
))

(def $body ($ :body))

(defn ^:export main []
  ;(parseinit)
  (routes/app-routes) ; lyssnar på webläsarn och dispatchar set-active-panel handlern
  (re-frame/dispatch-sync [:initialize-db state]) ; populera databasen med seed-data
  (mount-root)
  ;(.sideNav (js/$ ".button-collapse"))
  )
