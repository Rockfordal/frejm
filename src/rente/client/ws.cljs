(ns rente.client.ws
  (:require [taoensso.sente :as sente]
            [taoensso.sente.packers.transit :as sente-transit]
            [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
            [cognitect.transit :as t]
            [rente.client.util :as u]))

;; Dispatch on event-id
(defmulti event-msg-handler :id)

(defmethod event-msg-handler :default ; Fallback
    [{:as ev-msg :keys [event]}]
    (debugf "Okänd event: %s" event))

(defmethod event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (if (= ?data {:first-open? true})
    (debugf "Channel socket successfully established!")
    (debugf "Channel socket state change: %s" ?data)))

(defmethod event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data]}]
  (debugf "PUSH event from server: %s " ?data))

(defn event-msg-handler* [{:as ev-msg :keys [id ?data event]}]
  (event-msg-handler ev-msg))
  (let [packer (sente-transit/get-flexi-packer :edn)
      {:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk" {:type :auto :packer packer})]
  (def chsk       chsk)
  (def ch-chsk    ch-recv)
  (def chsk-send! send-fn)
  (def chsk-state state))

;(sente/start-chsk-router! ch-chsk event-msg-handler*)

;; ;------------ test -------------------------------------
;; (defn test-socket-event []
;;   (chsk-send! [:rente/testevent {:message "Hello socket Event!"}]))

;; (defn test-socket-callback []
;;   (chsk-send! [:rente/testevent {:message "klienten säger Callback!"}]
;;     2000 #(dispatch [:get-message (second %)])

;; ;--------------------------------------------------
;; (defn add-company2project [companyname projectname]
;;   (chsk-send!
;;     [:rente/add-company2project {:company/name companyname :project/name projectname}]
;;     2000 ;#(dispatch [:add-company2project-success "jultomte"])))

;; ;------------ polymorfiska ------morf-----------------------
;; (defn get-all [type types]
;;   (chsk-send!
;;     [:rente/get {:type type}]
;;     2000
;;     #(dispatch [:get-success (second %) types])))

(defn edit [data callback conn]
  (chsk-send! [:rente/edit data] 2000
              #(callback (second %) conn)))

(defn add [data callback conn]
  (chsk-send! [:rente/add data] 2000
    #(callback (second %) conn)))

(defn del [id type callback conn]
  (chsk-send! [:rente/delete {:db/id id :type type}] 2000
    #(callback (second %) conn)))

;; (defn add-name [item key type types]
;;   (chsk-send!
;;     [:rente/add-name {:data item :key key :type type}]
;;     2000
;;     #(let [data (second %)
;;            r    {:data data :key key :type type :types types}]
;;       (dispatch [:add-name-success r]))))
