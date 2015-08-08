(ns rente.client.app
  (:require
     cljs.reader
    [datascript :as d]
    [rum :as r]
    [rente.client.dom :as dom :refer [by-id]]
    [rente.client.routes :as routes]
    [rente.client.views.main :refer [canvas]]
    [rente.client.state :refer [conn state get-state]]
    [rente.client.util :as u :refer [log-transactions load-fixtures]])
  (:require-macros
    [rente.macros :refer [profile]]))

(declare render persist)

(defn initdb []
  (reset! conn (d/create-conn (:schema @state))))

;(defn reset-conn! [db]
;  (reset! conn db)
;  (render db))

(defn render
  ([] (render @conn))
  ([db]
     (r/mount (canvas db) (by-id "app"))))

(defn fig []
  (u/toggle-fig @conn))

;; re-render on every DB change
(d/listen! @conn :render
  (fn [tx-report]
    (render (:db-after tx-report))))

;; Starting point
(defn ^:export main []
  (routes/app-routes)
  (load-fixtures @conn)
  (log-transactions @conn))
