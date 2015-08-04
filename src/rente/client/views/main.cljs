(ns rente.client.views.main
  (:require
    [rente.client.views.layout    :refer [navbar]]
    [rente.client.views.login     :refer [login_v]]
    [rente.client.views.company   :refer [company_v]]
    [rente.client.views.sortiment :refer [sortiment_v]]
    [rente.client.state           :refer [state get-state]]
    [rum :include-macros true]))

(rum/defc notfound_v []
  [:div.row
   [:div.col.s4
  [:div.card.blue-grey.darken-1
   [:div.card-content.white-text
     [:span.card-title "Sorry!"]
     [:p "Sidan kunde inte hittas"]
     [:div.card-action
      [:a {:href "#"} "Gå Hem"]]]]]])

(defn panels [i db]
  (case i
    :sortiment (sortiment_v db)
    :company   (company_v db)
    :login     (login_v db)
    :notfound  (notfound_v)))

;; navbar and currentpage
(rum/defc canvas < rum/reactive [db]
  [:div
   (navbar
     (:module  (get-state))
     (:modules (get-state)))
   (panels
     (:module (get-state)) db)])
