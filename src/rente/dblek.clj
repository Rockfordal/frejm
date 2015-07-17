(ns rente.query
  (:refer-clojure :exclude [read])
  (:require [datomic.api :as d]
            [rente.db :as db]
           ;[rente.animals :as animals]
            ))


;; Mailing.clj för pedestal:
(defn find-by-serial-number [db serial-number]
  (some->> serial-number
    (d/q
      [:find ?mailing
       :in $ ?serial-number
       :where [?mailing :mailing/serial-number ?serial-number]]
      db)
    ffirst
    (d/entity db)))

(i/defbefore lookup [ctx]
  (let [db (get-in ctx [:request :db])
        serial-number (get-in ctx [:request :path-params :serial-number])
        mailing (find-by-serial-number db serial-number)]
    (if mailing
      (assoc-in ctx [:request :mailing] mailing)
      (assoc ctx :response (ring-resp/not-found "Mailing not found")))))

(defn mailing-events [event-chan ctx]
  (async/put! event-chan {:name "start"
                          :data (get-in ctx [:request])})
  (async/go-loop [update (sync/<! updates-channel)]
    (when (async/>! event-chan {:name "update" :data (pr-str update)})
      (recur (async/<! updates-channel)))))

;service.clj:
(defroutes routes
  [[[
   ^:interceptors [aquire-db]
  ["/ping" {:get pong}]
    ["/mailings/:serial-number"
      ^:interceptoros [m/lookup]
      {:get [:mailing-events
           (sse/start-event-stream mailing-events)]}]]]])
