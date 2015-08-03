(ns rente.client.app
  (:require
     cljs.reader
    [datascript :as d]
    [rum :include-macros true]
    [rente.client.dom :as dom :refer [by-id]]
    [rente.client.routes :as routes]
    [rente.client.views.main :refer [canvas]]
    [rente.client.state :refer [state get-state figgen]]
    [rente.client.util :as u :refer [log-transactions load-fixtures]])
  (:require-macros
   [rente.macros :refer [profile]]))

(declare render persist)

(defonce conn
  (d/create-conn (:schema @state)))

(defn reset-conn! [db]
  (reset! conn db)
  (render db))

;; mount page to html body
(defn render
  ([] (render @conn))
  ([db]
   (profile "render"
     (rum/mount (canvas db) (by-id "app")))))

(defn fig []
  (swap! figgen dec)
  ;(println "fig" @figgen)
  ;(u/toggle-fig conn @figgen 3)
  (render)
)

;; re-render on every DB change
(d/listen! conn :render
  (fn [tx-report]
    (render (:db-after tx-report))))

(defn ^:export main []
  (routes/app-routes)
  (load-fixtures conn)
  (log-transactions conn)
  )
