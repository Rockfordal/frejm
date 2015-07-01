(ns rente.client.views.main
  (:require [rente.client.views.layout :as layout :refer [navbar]]
            [rente.client.views.demo :as demo]
            [rente.client.views.firebase :as firebase]
            [re-frame.core   :as re-frame :refer [subscribe dispatch]]
            [reagent.core    :as reagent  :refer [atom]]
            [clojure.string  :refer [join]]
            [rente.client.ws :as socket]
            [rente.client.db :refer [state put! get-value set-value!]]))

(defn jslog [& data]
  (js/console.log (clj->js (join " " data))))

(defn notfound-panel [data]
  [:div [navbar] [:div.container
    [:div.card.blue-grey.darken-1
     [:div.card-content.white-text
      [:span.card-title "Sorry!"]
      [:p "Sidan kunde inte hittas"]
      [:div.card-action
       [:a {:href "#"} "Gå Hem"]]]]]])

(defn home-panel [data]
  (fn []
    [:div [navbar] [:div.container
        [:h1 "Hej från Reagent"]
        [:br]]]))

;; --------------------
(defmulti  panels identity)
(defmethod panels :home-panel     [] [home-panel])
(defmethod panels :rente-panel    [] [demo/rente-panel])
(defmethod panels :test-panel     [] [demo/test-panel])
(defmethod panels :firebase-panel [] [firebase/firebase-panel])
(defmethod panels :default        [] [notfound-panel])

(defn main-panel []
  (let [active-panel (subscribe [:active-panel])]
    (panels @active-panel)
))
