(ns rente.client.ws
  (:require [taoensso.sente :as sente]
            [taoensso.sente.packers.transit :as sente-transit]
            [re-frame.core :as re-frame :refer [subscribe dispatch]]))

(defmulti push-msg-handler (fn [[id _]] id)) ; Dispatch on event key which is 1st elem in vector

(defmethod push-msg-handler :rente/testevent
  [[_ event]]
  (js/console.log "PUSHed :rente/testevent from server: %s " (pr-str event)))

(defmulti event-msg-handler :id) ; Dispatch on event-id
;; Wrap for logging, catching, etc.:

(defmethod event-msg-handler :default ; Fallback
    [{:as ev-msg :keys [event]}]
    (js/console.log "Unhandled event: %s" (pr-str event)))

(defmethod event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (if (= ?data {:first-open? true})
    (js/console.log "Channel socket successfully established!")
    (js/console.log "Channel socket state change: %s" (pr-str ?data))))

(defmethod event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data]}]
  (push-msg-handler ?data))

(defn event-msg-handler* [{:as ev-msg :keys [id ?data event]}]
  (event-msg-handler ev-msg))

(let [packer (sente-transit/get-flexi-packer :edn)
      {:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk" {:type :auto :packer packer})]
  (def chsk       chsk)
  (def ch-chsk    ch-recv)
  (def chsk-send! send-fn)
  (def chsk-state state))

(sente/start-chsk-router! ch-chsk event-msg-handler*)

(defn test-socket-callback []
  (chsk-send!
    [:rente/testevent {:message "klienten säger Callback!"}]
    2000
      ;#(js/console.log "CALLBACK from server: " (pr-str %))
      #(dispatch [:get-courses [(str (:message (second %)))]])
    ))

(defn test-socket-event []
  (chsk-send! [:rente/testevent {:message "Hello socket Event!"}]))
