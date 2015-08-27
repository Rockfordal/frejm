(ns rente.client.views.companyedit
  (:require [rum :as r]
            [rente.client.views.material :refer [ikon button my-input save-button]]
            [rente.client.views.company :refer [active-project]]
            [rente.client.state :refer [state get-state get-moduleid conn get-currententity]]
            [rente.client.transactions :as trans]))


(r/defc company-field [id icon label data]
  [:div.input-field.col.s6
    [:i.material-icons.prefix icon]
   (my-input {:id id :defval data})
    [:label {:for id :class "active"} label]])

(r/defc company-form [db company]
  [:form
   [:div.row (company-field "company-name"      "person_pin"     "Namn"            (:company/name company))
             (company-field "company-orgnr"     "account_circle" "Orgnr"           (:company/orgnr company))]
   [:div.row (company-field "company-phone"     "phone"          "Telefon"         (:company/phone company))
             (company-field "company-email"     "email"          "E-post"          (:company/email company))]
   [:div.row (company-field "company-vd"        "phone"          "VD"              (:company/vd company))
             (company-field "company-oms"       "phone"          "Omsättning"      (:company/oms company))]
   [:div.row (company-field "company-employees" "phone"          "Antal anställda" (:company/employees company))
             (company-field "company-othercontact" "phone"       "Övrig kontakt"   (:company/othercontact company))]
   [:div.row (company-field "company-snikod"    "phone"          "SNI-kod"         (:company/snikod company))
             (company-field "company-snitext"   "phone"          "SNI-text"        (:company/snitext company))]])

(r/defc changeproject-field [id domid db]
  [:div.input-field.col.s6
    [:i.material-icons.prefix "code"]
    (my-input {:id domid :on-save #(trans/move-company id conn db)})
    [:label {:for domid :class "active"} "Flytta till projekt"]])

(r/defc back-button []
  (button {:href "#company"} "Tillbaka " "info"))

(r/defc companyedit_v < rum/reactive [db]
  [:div
    [:h2 "Redigera företag"]
    (company-form db (get-currententity db))
    [:div.row
      (let [moduleid (get-moduleid)]
        [:div.col.s2 (save-button #(trans/update-company moduleid conn))])
      [:div.col.s4 (changeproject-field (get-moduleid) "company-project" db)]
      [:div.col.offset-s1.s2 (back-button)]]])

(r/defc companynew_v < rum/reactive [db]
  [:div
   (active-project)
    [:h2 "Nytt företag"]
    (company-form db (get-state :newcompany))
   [:div.row
    [:.col.s2 (let [activeproject (get-state :activeproject)]
                   (save-button #(trans/add-company activeproject conn)))]
     [:div.col.offset-s8.s2 (back-button)]]])
