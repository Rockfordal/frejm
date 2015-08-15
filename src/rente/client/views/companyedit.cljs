(ns rente.client.views.companyedit
  (:require [datascript :as d]
            [rente.client.views.global :as gv :refer [ikon]]
            [rente.client.views.company :as companyview]
            [rente.client.state :refer [state get-state conn]]
            [rum :as r]))


(r/defc company-field [id icon label data]
  [:div.input-field.col.s6
    [:i.material-icons.prefix icon]
   (gv/component-input {:id id
                   :defval data
                   :on-save #(do (js/console.log "sparar " %))} )
    [:label {:for id :class "active"} label]])

(r/defc company-form [db company]
 [:form
  [:div.row
   (company-field "company-name"  "person_pin" "Namn" (:company/name company))
   (company-field "company-orgnr" "account_circle" "Orgnr" (:company/orgnr company))]
  [:div.row
   (company-field "company-phone" "phone" "Telefon" (:company/phone company))
   (company-field "company-email" "email" "E-post" (:company/email company))]
  [:div.row
   [:div.col.s2
    [:a.btn.waves-effect.waves-light
     {:type "submit" :name "action"
      ;:on-click #(trans/add conn)
      } "Spara " (ikon "send")]]

   [:div.col.offset-s8.s2
    [:a.btn.waves-effect.waves-light
     {:href "#company"}
     "Tillbaka " (ikon "info")]]]])

(r/defc companyedit_v < rum/reactive [db]
  [:div
    [:h2 "Redigera företag"]
    ;(get-state :moduleid)

   (company-form db
     (d/touch (d/entity db (get-state :moduleid))))
    [:br]])
