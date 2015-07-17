(ns rente.client.ws
  (:require [taoensso.sente :as sente]
            [taoensso.sente.packers.transit :as sente-transit]
            [cognitect.transit :as t]
            [re-frame.core :as re-frame :refer [subscribe dispatch]]))

(def j (t/reader :json))

(defn jsonreader [data]
  (js->clj
  (t/read j data)
  :keywordize-keys true))

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

(defn test-socket-event []
  (chsk-send! [:rente/testevent {:message "Hello socket Event!"}]))

(defn test-socket-callback []
  (chsk-send!
    [:rente/testevent {:message "klienten säger Callback!"}]
    2000
    ;#(js/console.log (str "vi fick : " %))
    #(dispatch [:get-message (second %)])))

;--------------------------------------------------


;(defn get-projects []
;  (chsk-send!
;    [:rente/get-projects {:message "vill hämta projekt"}]
;    2000
;    #(dispatch [:get-projects-success (second %)])))

;(defn add-project [project]
;  (chsk-send!
;    [:rente/add-project {:project {:project/name project}}]
;    2000
;    #(dispatch [:add-project-success (second %)])))


(defn add-company2project [companyname projectname]
  (chsk-send!
    [:rente/add-company2project {:company/name companyname :project/name projectname}]
    2000
    #(println "mja:" %)
    ;#(dispatch [:add-company2project-success "jultomte"])
    ))

;(defmethod event-msg-handler :rente/add-company-for-project


;; Polymorfiska

(defn get-all [type types]
  (chsk-send!
    [:rente/get {:type type}]
    2000
    #(dispatch [:get-success (second %) types])))

(defn delete [id type]
  (chsk-send!
    [:rente/delete {:db/id id :type type}]
    2000
    #(dispatch [:delete-success (:db/id (second %)) type])))

(defn add-name [item key type types]
  (chsk-send!
    [:rente/add-name {:data item :key key :type type}]
    2000
    #(let [data (second %)
            id   (:db/id data)
            dat (:data data)
            r    {:data data :key key :type type :types types}]
       (do
         (println "ws:" data id dat r)
         (dispatch [:add-name-success r])
         )
        )))
