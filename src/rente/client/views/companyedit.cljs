(ns rente.client.views.companyedit
  (:require [rum :as r]
            [rente.client.views.material :refer [ikon button my-input save-button]]
            [rente.client.views.company :refer [active-project]]
            [rente.client.state :refer [state get-state get-moduleid conn get-currententity]]
            [rente.client.transactions :as trans]))


(r/defc company-field [id icon label data]
  [:.input-field.col.s6
    [:i.material-icons.prefix icon]
   (my-input {:id id :defval data})
    [:label {:for id :class "active"} label]])

(r/defc company-form [db company]
  [:form
   [:.row (company-field "company-name"      "person_pin"     "Namn"            (:company/name company))
          (company-field "company-orgnr"     "account_circle" "Orgnr"           (:company/orgnr company))
          (company-field "company-email"     "email"          "E-post"          (:company/email company))]

   [:.row (company-field "company-phone"     "phone"          "Telefon"         (:company/phone company))
          (company-field "company-contact"   "account_circle" "Kontaktperson"   (:company/contact company))
          (company-field "company-homepage"  "email"          "Hemsida"         (:company/homepage company))]
    
   [:.row (company-field "company-vd"        "phone"          "VD"              (:company/vd company))
          (company-field "company-oms"       "phone"          "Omsättning"      (:company/oms company))
          (company-field "company-employees" "phone"          "Antal anställda" (:company/employees company))]

   [:.row (company-field "company-othercontact" "phone"       "Övrig kontakt"   (:company/othercontact company))
          (company-field "company-snikod"    "phone"          "SNI-kod"         (:company/snikod company))
          (company-field "company-snitext"   "phone"          "SNI-text"        (:company/snitext company))]

   [:.row (company-field "company-visitadr"   "phone"         "Besöksadress"    (:company/visitadr company))
          (company-field "company-zipcode"    "phone"         "Postnr"          (:company/zipcode company))
          (company-field "company-postal"     "phone"         "Ort"             (:company/postal company))]

   [:.row (company-field "company-contacttype" "phone"        "KontaktTyp"      (:company/contacttype company))]
   ])

(r/defc changeproject-field [id domid db]
  [:.input-field.col.s6
    [:i.material-icons.prefix "code"]
    (my-input {:id domid :on-save #(trans/move-company id conn db)})
    [:label {:for domid :class "active"} "Flytta till projekt"]])

(r/defc back-button []
  (button {:href "#company"} "Tillbaka " "info"))

(r/defc companyedit_v < rum/reactive [db]
  [:div
    [:h2 "Redigera företag"]
    (company-form db (get-currententity db))
    [:.row
      (let [moduleid (get-moduleid)]
        [:.col.s2 (save-button #(trans/update-company moduleid conn))])
      [:.col.s4 (changeproject-field (get-moduleid) "company-project" db)]
      [:.col.offset-s1.s2 (back-button)]]])

(r/defc companynew_v < rum/reactive [db]
  [:div
   (active-project)
    [:h2 "Nytt företag"]
    (company-form db (get-state :newcompany))
   [:.row
    [:.col.s2 (let [activeproject (get-state :activeproject)]
                (save-button #(trans/add-company activeproject conn)))]
     [:.col.offset-s8.s2 (back-button)]]])
