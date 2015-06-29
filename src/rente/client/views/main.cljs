(ns rente.client.views.main
  (:require [rente.client.views.layout :as layout :refer [navbar]]
            [rente.client.views.demo :as demo]
            [re-frame.core   :as re-frame :refer [subscribe dispatch]]
            [reagent.core    :as reagent  :refer [atom]]
            [clojure.string  :refer [join]]
            [rente.client.db :as db]
            [rente.client.ws :as socket]
            [rente.client.db :refer [state put! get-value set-value!]]))

(defn jslog [& data]
  (js/console.log (clj->js (join " " data))))

(defn home-panel [data]
  (fn []
    [:div [navbar] [:div.container
      [:h1 (str "Hajj från Reagent, Re-frame")] [:br]]]))

;; --------------------
(defmulti  panels identity)
(defmethod panels :home-panel    [] [home-panel])
(defmethod panels :rente-panel   [] [demo/rente-panel])
(defmethod panels :test-panel    [] [demo/test-panel])
(defmethod panels :default       [] [home-panel])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])] ; reaction
    (fn []
      (if (= nil @active-panel)
        (do
        (jslog "main-panel är nil")
        (panels :default))
        (do
          ;(jslog "main-panel: " @active-panel)
          (panels @active-panel)
          ;(demo/rente-panel (:re-render-flip db/state))
          )))))
