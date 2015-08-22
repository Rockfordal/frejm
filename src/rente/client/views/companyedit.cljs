(ns rente.client.views.companyedit
  (:require [datascript :as d]
            [rente.client.views.global :as gv :refer [ikon button save-button]]
            [rente.client.views.company :as companyview]
            [rente.client.transactions :as trans]
            [rente.client.state :refer [state get-state conn]]
            [rente.client.transactions :as trans]
            [rum :as r]))


(r/defc company-field [id icon label data]
  [:div.input-field.col.s6
    [:i.material-icons.prefix icon]
   (gv/component-input {:id id
                   :defval data
                   :on-save #(do (js/console.log "sparar " %))} )
    [:label {:for id :class "active"} label]])

(r/defc back-button []
  (button {:href "#company"} "Tillbaka " "info"))

(r/defc company-form [db company]
 [:form
  [:div.row
   (company-field "company-name"  "person_pin" "Namn" (:company/name company))
   (company-field "company-orgnr" "account_circle" "Orgnr" (:company/orgnr company))]
  [:div.row
   (company-field "company-phone" "phone" "Telefon" (:company/phone company))
   (company-field "company-email" "email" "E-post" (:company/email company))]
  [:div.row
   (company-field "company-vd" "phone" "VD" (:company/vd company))]
])

(r/defc companyedit_v < rum/reactive [db]
  [:div
    [:h2 "Redigera företag"]
    (company-form db
      (d/touch (d/entity db (get-state :moduleid))))
    [:div.row
      [:div.col.s2
       (let [moduleid (get-state :moduleid)]
        (save-button #(trans/update-company moduleid conn)))]
      [:div.col.offset-s8.s2 (back-button)]]])

(r/defc companynew_v < rum/reactive [db]
  [:div
    [:h2 "Nytt företag"]
    (company-form db (get-state :newcompany))
  [:div.row
    [:div.col.s2 (save-button #(trans/add-company conn) )]
    [:div.col.offset-s8.s2 (back-button)]]])
