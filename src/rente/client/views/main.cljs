(ns rente.client.views.main
  (:require
    [rente.client.views.layout      :refer [navbar]]
    [rente.client.views.login       :refer [login_v]]
    [rente.client.state             :refer [state get-state]]
    [rum.core :as r :include-macros true]))


;; Sidan finns inte
(r/defc notfound_v []
  [:.row
    [:.col.s4
      [:.card.blue-grey.darken-1
        [:.card-content.white-text
          [:span.card-title "Sorry!"]
          [:p "Sidan kunde inte hittas"]
          [:.card-action
            [:a {:href "#"} "Gå Hem"]]]]]])

(r/defc sni_v []
  [:div
    [:h1 "SNI sidan"]])

;; Vy väljare baserat på aktuell modul
(defn panels [i db]
  (case i
    :login       (login_v db)
    :sni         (sni_v)
    :notfound    (notfound_v)))

;; Huvud vy med navbar
(r/defc canvas < r/reactive [db]
  [:div
   ;(setproject-memo db)
   (navbar
     (:module  (get-state))
     (:modules (get-state)))
   (panels
     (:module (get-state)) db)])
