(ns rente.ws
  (:require [clojure.tools.logging :as log]
            [com.stuartsierra.component :as component]
            [clojure.core.async :as async]
            [datomic.api :as d]
            [rente.db :as db]
            [rente.queries :as q]
            [rente.products :as products]
            [rente.projects :as projects]
            [rente.companies :as companies]
            [taoensso.sente.server-adapters.http-kit :as sente-http]
            [taoensso.sente :as sente]
            [taoensso.sente.packers.transit :as sente-transit]))

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

;------------ gamla ------------------------------------
;(Defmethod event-msg-handler :rente/get-companies
;  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn]}]
;    (?reply-fn [:rente/get-companies (db/expand (companies/get-all))]))

;(defmethod event-msg-handler :rente/add-project
;  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn]}]
;  (if-let [id (projects/create! (:project ?data))]
;      (?reply-fn [:rente/add-project {:id id :project (:project ?data)}])
;      (?reply-fn [:rente/add-project {:message (str "misslyckades adda")}])))

;------------ nya --------------------------------------
;(defn create-for-project-name [company-name project-name]

(comment
  (defmethod event-msg-handler :rente/add-company2project
    [{:as ev-msg :keys [event id ?data ring-req ?reply-fn]}]
    ;(if-let [id (companies/create! (:company ?data))]
    ;(if-let [id (companies/create-for-project-name "yahoo" "ica")]
    (if-let [id (companies/create-for-project-name (:company/name ?data) "ica")]
    ;(if-let [id (companies/create-for-project-name (:company/name (:company ?data)) (:project/name ?data))]
        ;(?reply-fn [:rente/add-company2project {:id id :company (:company ?data)}])
        (?reply-fn [:rente/add-company2project {:id id}])
        (?reply-fn [:rente/add-company2project {:message (str "misslyckades adda")}])))
)

;------------ generella --------------------------------
(defmethod event-msg-handler :rente/get
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn]}]
  (let [data (map d/touch (db/read :type (:type ?data)))]
    (?reply-fn [:rente/get data])))

(defmethod event-msg-handler :rente/delete
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn]}]
    ;(if (db/delete! (:id ?data))
    (if (db/delete-entity (:db/id ?data))
      (?reply-fn [:rente/delete {:db/id (:db/id ?data)}])
      (?reply-fn [:rente/delete {:message (str "misslyckades radera")}])))

(defmethod event-msg-handler :rente/add-name
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn]}]
  (let [kw (keyword (:key ?data))
        typ (keyword (:type ?data))
        dat (:data ?data)
        id (db/create-entity {:type typ kw dat})]  ; {:type :company :company/name "ica" }
   (if id
     (?reply-fn [:rente/add-name {:db/id id :data (:data ?data)}])
     (?reply-fn [:rente/add-name {:message "misslyckades adda"}]))))

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
