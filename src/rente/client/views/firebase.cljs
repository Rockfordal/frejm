(ns rente.client.views.firebase
  (:require [re-frame.core :as re-frame :refer [subscribe dispatch]]
            [rente.client.views.layout :as layout :refer [navbar]]
            [rente.client.ws :as socket]
            [matchbox.core :as m]
            [cljs.core.async :as async]))

(def prn-chan (async/chan))

(defn safe-prn [& msgs]
  (async/put! prn-chan msgs))

(def r (atom nil))

;; --------- anonym login -----------
;(m/auth-anon r)
;(m/auth-anon r (fn [err auth-data]
;                 (safe-prn auth-data (m/auth-info r))))
;(m/unauth)

;; --------- vanlig login -----------
(defn loggain []
  (let [email "lundstrom123@gmail.com"
        password "hemligt"
        conn (m/connect "https://innercore.firebaseio.com")]
    (m/auth conn email password safe-prn)
    (reset! r conn)
    r))

(defn get-mikes-friends []
  (m/get-in @r [:deep :route]))

;; --------- prenumerera på data -----------
;(m/listen-children
;  r [:deep]
;  (fn [event-type data] (js/console.log "data: " data)))

;(m/deref
;  mikes-friends
;  (fn [key value]
;    (m/reset-in! r [:users :mike :num-friends]
;                 (count value))))

(defn firebase-panel [data]
  (let [messages (subscribe [:messages])
        alert (js/console.log "pang")
        ;setkids (m/reset! (get-mikes-friends) [{:name "Kid A"} {:name "Kid B"}])
        ;getkids (m/deref (get-mikes-friends) safe-prn)
        ]
    (fn []
      [:div
       [navbar]
       [:div.container
        [:h1 "Firebase"]
        [:br]
        [:p "Messages:" (clj->js @messages)]
        ;[:button { :on-click getkids } "get kids"]
        ;[:button { :on-click setkids } "reset kids"]
        ;[:button { :on-click #(dispatch [:fire-reset (:name "Billy") ])} "Radera"]
        ]])))
