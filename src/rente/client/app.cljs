(ns rente.client.app
  (:require-macros
    [rente.macros :refer [profile]])
  (:require
    [datascript.core :as d]
    [rum.core :as r]
    [rente.client.ws :as ws]
    [rente.client.util :as u :refer [log-transactions load-state]]
    [rente.client.state :refer [conn state]]
    [rente.client.routes :refer [app-routes]]
    [rente.client.views.main :refer [canvas]]
    [rente.client.dom :refer [by-id]]))


(declare render persist)

(defn initdb []
  (reset! conn (d/create-conn (:schema @state))))

(defn render
  ([]   (render @conn))
  ([db] (r/mount (canvas db) (by-id "app"))))

;; re-render on DB change
(d/listen! @conn :render
  (fn [tx-report]
    (render (:db-after tx-report))))

;; Starting point
(defn ^:export main []
  (app-routes)
  (load-state))
