(ns rente.client.views.main
  (:require [rente.client.views.layout :as layout :refer [navbar]]
            [rente.client.views.demo :as demo]
            [rente.client.views.todo :as todo]
            [rente.client.views.project :as project]
            [rente.client.views.company :as company]
            [rente.client.views.firebase :as firebase]
            [re-frame.core   :as re-frame :refer [subscribe dispatch]]
            [reagent.core    :as reagent  :refer [atom]]))

(defn notfound-panel [data]
  (let [active-panel (subscribe [:active-panel])]
  [:div [navbar] [:div.container
    [:div.card.blue-grey.darken-1
     [:div.card-content.white-text
      [:span.card-title "Sorry!"]
      [:p "Sidan " (clj->js @active-panel) " kunde inte hittas"]
      [:div.card-action
       [:a {:href "#"} "Gå Hem"]]]]]]))

(defn boxx [id label]
  [:div
   [:input.toggle {:id id
                   :type "checkbox"
                   ;:on-change #(js/alert "Tjena")
                   }]
    [:label {:for id} label]
  [:br]])

(defn home-panel []
  (fn [data]
    [:div
     [navbar]
       [:div.container
        [:h1 "Utveckling Q3"]
        [:p "Under Q3 kommer appen att utvecklas följande steg"]
        [boxx 1 "Projekt"]
        [boxx 2 "Företag"]
        [boxx 3 "Användare"]
        [:br]]]))

;; --------------------
(defmulti  panels identity)
(defmethod panels :home-panel     [] [home-panel])
(defmethod panels :rente-panel    [] [demo/rente-panel])
;(defmethod panels :todo-panel      [] [todo/todo-panel])
(defmethod panels :project-panel   [] [project/project-panel])
(defmethod panels :company-panel   [] [company/company-panel])
;(defmethod panels :test-panel     [] [demo/test-panel])
(defmethod panels :firebase-panel [] [firebase/firebase-panel])
(defmethod panels :default         [] [notfound-panel])

(defn main-panel []
  (let [active-panel (subscribe [:active-panel])]
    (panels @active-panel)))
