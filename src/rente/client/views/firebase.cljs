(ns rente.client.views.firebase
  (:require [re-frame.core :as re-frame :refer [subscribe dispatch]]
            [rente.client.views.layout :as layout :refer [navbar]]
            [rente.client.ws :as socket]
            [matchbox.core :as m]
            [cljs.core.async :as async]))

(def prn-chan (async/chan))

(defn safe-prn [& msgs]
  (async/put! prn-chan msgs))

;(m/auth-anon r)
;(m/auth-anon r (fn [err auth-data]
;                 (safe-prn auth-data (m/auth-info r))))
;(m/unauth)

(def r (m/connect "https://innercore.firebaseio.com"))
(m/auth r "lundstrom123@gmail.com" "tyvärr.." safe-prn)
(def mikes-friends (m/get-in r [:deep :route]))

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
        setkids (m/reset! mikes-friends [{:name "Kid A"} {:name "Kid B"}])
        getkids (m/deref mikes-friends safe-prn)]
    (fn []
      [:div
       [navbar]
       [:div.container
        [:h1 "Firebase"]
        [:br]
        [:p "Messages:" (clj->js @messages)]
        [:button { :on-click getkids } "get kids"]
        [:button { :on-click setkids } "reset kids"]
        ;[:button { :on-click #(dispatch [:fire-reset (:name "Billy") ])} "Radera"]
        ]])))
