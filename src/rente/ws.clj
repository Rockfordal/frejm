(ns rente.ws
  (:require [clojure.tools.logging :as log]
            [com.stuartsierra.component :as component]
            [clojure.core.async :as async]
            [datomic.api :as d]
            [rente.db :as db]
            [rente.queries :as q]
            [taoensso.sente.server-adapters.http-kit :as sente-http]
            [taoensso.sente :as sente]
            [taoensso.sente.packers.transit :refer [get-flexi-packer]]))

(def ping-counts (atom 0))
(defmulti event-msg-handler :id) ; Dispatch on event-id
(defn event-msg-handler* [{:as ev-msg :keys [id ?data event]}] ;; Wrap for logging, catching, etc.:
  (event-msg-handler ev-msg))

;------------- test ------------------------------------
(defmethod event-msg-handler :chsk/ws-ping [_]
    (swap! ping-counts inc)
    (when (= 0 (mod @ping-counts 10))
      (println "ping counts: " @ping-counts)))

(defmethod event-msg-handler :rente/testevent
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (if ?reply-fn
    (?reply-fn [:rente/testevent {:message (str "Server Callback fick: " ?data)}])
    (send-fn :sente/all-users-without-uid [:rente/testevent {:message (str "Server Event fick: " ?data)}])))

;------------ nya --------------------------------------
(defmethod event-msg-handler :rente/get-data
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn]}]
    (?reply-fn [:rente/get-data (db/get-state)]))

;------------ generella --------------------------------
(defmethod event-msg-handler :rente/get
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn]}]
  (let [data (map d/touch (db/read :type (:type ?data)))]
    (?reply-fn [:rente/get data])))

(defmethod event-msg-handler :rente/delete
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn]}]
    (if (db/delete-entity (:db/id ?data))
      (?reply-fn [:rente/delete {:db/id (:db/id ?data)}])
      (?reply-fn [:rente/delete {:message "misslyckades radera"}])))

(defmethod event-msg-handler :rente/add
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn]}]
  (let [entity (:entity ?data)
        id     (db/create-entity entity)]
    (if id
      (?reply-fn [:rente/add {:db/id id :entity entity}])
      (?reply-fn [:rente/add {:message (str "misslyckades adda" ?data entity)}]))))

(defmethod event-msg-handler :rente/update
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn]}]
  (let [entity (:entity ?data)
        ok     (db/update-entity entity)]
    (if ok
      (?reply-fn [:rente/update {:entity entity}])
      (?reply-fn [:rente/update {:message (str "misslyckades upd" ?data entity)}]))))

;-------------------------------------------------------

(defmethod event-msg-handler :default ; Fallback
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]
    (println "Ej hanterbar event: %s" event)
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-from-server event}))))

(defrecord WSRingHandlers [ajax-post-fn ajax-get-or-ws-handshake-fn])

(defrecord WSConnection [ch-recv connected-uids send-fn ring-handlers]
  component/Lifecycle
  (start [component]
    (if (and ch-recv connected-uids send-fn ring-handlers)
      component
      (let [component (component/stop component)
            packer (get-flexi-packer :edn)
            {:keys [ch-recv send-fn connected-uids
                    ajax-post-fn ajax-get-or-ws-handshake-fn]}
            (sente/make-channel-socket! sente-http/http-kit-adapter {:packer packer})]
        (log/debug "WebSocket anslutning startad")
        (assoc component
          :ch-recv ch-recv
          :connected-uids connected-uids
          :send-fn send-fn
          :stop-the-thing (sente/start-chsk-router! ch-recv event-msg-handler*)
          :ring-handlers
          (->WSRingHandlers ajax-post-fn ajax-get-or-ws-handshake-fn)))))
  (stop [component]
    (when ch-recv (async/close! ch-recv))
    (log/debug "WebSocket anslutning stoppad")
    (:stop-the-thing component)
    (assoc component
      :ch-recv nil :connected-uids nil :send-fn nil :ring-handlers nil)))

(defn send! [ws-conn user-id event]
  ((:send-fn ws-conn) user-id event))

(defn broadcast! [ws-conn event]
  (let [uids (ws-conn :connected-uids )]
    (doseq [uid (:any @uids)] (send! ws-conn uid event))))

(defn ring-handlers [ws-conn]
  (:ring-handlers ws-conn))

(defn new-ws []
  (map->WSConnection {}))
