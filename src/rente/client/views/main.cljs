(ns rente.client.views.main
  (:require
    [rente.client.views.layout      :refer [navbar]]
    [rente.client.views.login       :refer [login_v]]
    [rente.client.views.sni         :refer [sni_v]]
    [rente.client.views.project     :refer [project_v]]
    [rente.client.views.projectedit :refer [projectedit_v projectnew_v]]
    [rente.client.views.company     :refer [company_v]]
    [rente.client.views.companyedit :refer [companyedit_v companynew_v]]
    [rente.client.views.sortiment   :refer [sortiment_v]]
    [rente.client.views.produktedit :refer [productedit_v productnew_v]]
    [rente.client.state             :refer [state get-state]]
    [rum :as r :include-macros true]))


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

;; Vy väljare baserat på aktuell modul
(defn panels [i db]
  (case i
    :sortiment   (sortiment_v db)
    :productedit (productedit_v db)
    :company     (company_v db)
    :companyedit (companyedit_v db)
    :companynew  (companynew_v db)
    :project     (project_v db)
    :projectedit (projectedit_v db)
    :projectnew  (projectnew_v db)
    :sni         (sni_v db)
    :login       (login_v db)
    :notfound    (notfound_v)))

;; Huvud vy med navbar
(r/defc canvas < rum/reactive [db]
  [:div
   (navbar
     (:module  (get-state))
     (:modules (get-state)))
   (panels
     (:module (get-state)) db)])
