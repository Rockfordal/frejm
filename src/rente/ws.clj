(ns rente.ws
  (:require [clojure.tools.logging :as log]
            [com.stuartsierra.component :as component]
            [clojure.core.async :as async]
            [rente.animals :as animals]
            [rente.todos :as todos]
            [rente.db :as db]
            [taoensso.sente.server-adapters.http-kit :as sente-http]
            [taoensso.sente :as sente]
            [taoensso.sente.packers.transit :as sente-transit]))

(def ping-counts (atom 0))

(defmulti event-msg-handler :id) ; Dispatch on event-id

(defn event-msg-handler* [{:as ev-msg :keys [id ?data event]}] ;; Wrap for logging, catching, etc.:
  (event-msg-handler ev-msg))

(defmethod event-msg-handler :chsk/ws-ping [_]
    (swap! ping-counts inc)
    (when (= 0 (mod @ping-counts 10))
      (println "ping counts: " @ping-counts)))

(defmethod event-msg-handler :rente/testevent
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (if ?reply-fn
    (?reply-fn [:rente/testevent {:message (str "Server Callback fick: " ?data)}])
    (send-fn :sente/all-users-without-uid [:rente/testevent {:message (str "Server Event fick: " ?data)}])))
;-------------------------------------------------------

(defmethod event-msg-handler :rente/get-animals
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn]}]
    (?reply-fn [:rente/get-animals (db/expand (animals/getedn))]))

(defmethod event-msg-handler :rente/del-animal
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn]}]
    (if (animals/delete! (:id ?data))
      (?reply-fn [:rente/del-animal {:message (str "lyckades radera") :id (:id ?data) :animal ?data }])
      (?reply-fn [:rente/del-animal {:message (str "misslyckades radera")}])))

(defmethod event-msg-handler :rente/add-animal
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn]}]
  (if-let [id (animals/create! (:animal ?data))]
      (?reply-fn [:rente/add-animal {:message (str "lyckades adda") :id id :animal (:animal ?data)}])
      (?reply-fn [:rente/add-animal {:message (str "misslyckades adda")}])))


(defmethod event-msg-handler :rente/add-todo
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn]}]
  (if-let [id (todos/create! (:todo ?data))]
      (?reply-fn [:rente/add-todo {:message (str "lyckades adda") :id id :todo (:todo ?data)}])
      (?reply-fn [:rente/add-todo {:message (str "misslyckades adda")}])))


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
            packer (sente-transit/get-flexi-packer :edn)
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

(defn send! [ws-connection user-id event]
  ((:send-fn ws-connection) user-id event))

(defn broadcast! [ws-connection event]
  (let [uids (ws-connection :connected-uids )]
    (doseq [uid (:any @uids)] (send! ws-connection uid event))))

(defn ring-handlers [ws-connection]
  (:ring-handlers ws-connection))

(defn new-ws-connection []
  (map->WSConnection {}))
