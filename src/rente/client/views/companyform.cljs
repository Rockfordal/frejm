(ns rente.client.views.companyform
  (:require [rum :as r]
            [rente.client.views.material :refer [my-input]]
            [rente.client.queries :refer [getsni]]))


(r/defc c-field [id icon label data]
  [:.input-field.col.s4
    [:i.material-icons.prefix icon]
   (my-input {:id (str "company-" id) :defval data})
    [:label {:for (str "company-" id) :class "active"} label]])

(r/defc company-form [db company]
  [:form
   [:.row
    (c-field "name"      "person_pin"     "Namn"            (:company/name company))
    (c-field "orgnr"     "account_circle" "Orgnr"           (:company/orgnr company))
    (c-field "email"     "email"          "E-post"          (:company/email company))]

   [:.row
    (c-field "phone"     "phone"          "Telefon"         (:company/phone company))
    (c-field "contact"   "account_circle" "Kontaktperson"   (:company/contact company))
    (c-field "homepage"  "email"          "Hemsida"         (:company/homepage company))]
    
   [:.row
    (c-field "vd"        "phone"          "VD"              (:company/vd company))
    (c-field "oms"       "phone"          "Omsättning"      (:company/oms company))
    (c-field "employees" "phone"          "Antal anställda" (:company/employees company))]

   [:.row
    (c-field "othercontact" "phone"       "Övrig kontakt"   (:company/othercontact company))
    (c-field "snikod"    "phone"          "SNI-kod"         (:sni/code (getsni company db)))
    (c-field "snitext"   "phone"          "SNI-text"        (:sni/name (getsni company db)))]

   [:.row
    (c-field "visitadr"   "phone"         "Besöksadress"    (:company/visitadr company))
    (c-field "zipcode"    "phone"         "Postnr"          (:company/zipcode company))
    (c-field "postal"     "phone"         "Ort"             (:company/postal company))]

   [:.row
    (c-field "contacttype" "phone"        "KontaktTyp"      (:company/contacttype company))]
   ])
