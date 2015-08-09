(ns rente.client.ws
  (:require [taoensso.sente :as sente]
            [taoensso.sente.packers.transit :as sente-transit]
            [cognitect.transit :as t]
            [rente.client.util :as u]))

; Dispatch on event key which is 1st elem in vector
(defmulti push-msg-handler (fn [[id _]] id))

(defmethod push-msg-handler :rente/testevent [[_ event]]
  (println "PUSHed :rente/testevent from server: %s " (pr-str event)))

;; Dispatch on event-id
(defmulti event-msg-handler :id)

(defmethod event-msg-handler :default ; Fallback
    [{:as ev-msg :keys [event]}]
    (println "Okänt event: %s" (pr-str event)))

(defmethod event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (if (= ?data {:first-open? true})
    (println "Channel socket successfully established!")
    (println "Channel socket state change: %s" (pr-str ?data))))

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

;(sente/start-chsk-router! ch-chsk event-msg-handler*)

;; ;------------ test -------------------------------------
;; (defn test-socket-event []
;;   (chsk-send! [:rente/testevent {:message "Hello socket Event!"}]))

;; (defn test-socket-callback []
;;   (chsk-send!
;;     [:rente/testevent {:message "klienten säger Callback!"}]
;;     2000
;;     ;#(dispatch [:get-message (second %)])
;;     #(importdata (second %))))

;; ;--------------------------------------------------
;; (defn get-products []
;;   (chsk-send!
;;     [:rente/get-products]
;;     2000 #(u/got-products (second %))))

;; ;(defn add-project [project]
;; ;  (chsk-send!
;; ;    [:rente/add-project {:project {:project/name project}}]
;; ;    2000
;; ;    #(dispatch [:add-project-success (second %)])))

;; (defn add-company2project [companyname projectname]
;;   (chsk-send!
;;     [:rente/add-company2project {:company/name companyname :project/name projectname}]
;;     2000
;;     #(println "mja:" %)
;;     ;#(dispatch [:add-company2project-success "jultomte"])
;;     ))

;; ;(defmethod event-msg-handler :rente/add-company-for-project

;; ;; Polymorfiska

;; (defn get-all [type types]
;;   (chsk-send!
;;     [:rente/get {:type type}]
;;     2000
;;     #(dispatch [:get-success (second %) types])))

;; (defn delete [id type]
;;   (chsk-send!
;;     [:rente/delete {:db/id id :type type}]
;;     2000
;;     #(dispatch [:delete-success (:db/id (second %)) type])))

;; (defn add-name [item key type types]
;;   (chsk-send!
;;     [:rente/add-name {:data item :key key :type type}]
;;     2000
;;     #(let [data (second %)
;;            r    {:data data :key key :type type :types types}]
;;       (dispatch [:add-name-success r]))))
