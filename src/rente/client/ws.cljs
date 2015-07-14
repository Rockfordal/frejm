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
    #(js/console.log (str "vi fick : " %))))
;--------------------------------------------------

(defn get-animals []
  (chsk-send!
    [:rente/get-animals {:message "vill hämta animals"}]
    2000
    #(dispatch [:get-animals-success (second %)])))

(defn del-animal [id]
  (chsk-send!
    [:rente/del-animal
     {:message "vill radera animal" :id id}]
     2000
     #(dispatch [:del-animal-success (second %)])))
     ;first %   :rente/del-animal
     ;second %  

(defn add-animal [animal]
  (chsk-send!
    [:rente/add-animal
     {:message "vill skapa animal" :animal animal}]
     2000
  #(dispatch [:add-animal-success (second %)])
))
 ;first %   :rente/del-animal

(defn add-todo [todo]
  (chsk-send!
    [:rente/add-todo {:todo todo}]
    2000
    #(dispatch [:add-todo-success (second %)]))
    ;(println "add-todo: " todo)
    ;#(dispatch [:add-todo-success todo])
)

(defn get-projects []
  (chsk-send!
    [:rente/get-projects {:message "vill hämta projekt"}]
    2000
    #(dispatch [:get-projects-success (second %)])))

(defn get-companies []
  (println "hämtar företag!")
  (chsk-send!
    [:rente/get-companies {:message "vill hämta företag"}]
    2000
    ;(println "ws get-companies: " (second %))
    #(dispatch [:get-companies-success (second %)])))

(defn add-project [project]
  (chsk-send!
    [:rente/add-project {:project project}]
    2000
    ;#(dispatch [:add-project-success (second %)]))
    ;#(dispatch [:add-todo-success project])
    (println "add-project reply: " project)))

(defn add-company [company]
  ;(println "add-company" company)
  (chsk-send!
    [:rente/add-company {:company {:company/name company :company/orgnr "010"}}]
    2000
    #(dispatch [:add-company-success (second %)])))

(defn del-company [id]
  (chsk-send!
    [:rente/del-company {:id id}]
    2000
    ;#(println "del-company reply: " id)))
    #(dispatch [:del-company-success (:id (second %))])))
