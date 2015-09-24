(ns rente.client.views.call
  (:require [rum.core :as r]
            [rente.client.views.company :refer [active-project]]
            [rente.client.state :refer [state get-state get-moduleid conn get-currententity
                                        find-first-company set-company]]
            [datascript.core :as d]))


(r/defc company_v [company]
  [:div
    (:company/name  company)
    [:br] [:b "Telefon "] (:company/phone company)
    [:br] [:b "Kontakt "] (:company/contact company) " (" (:company/contacttype company) ")"
    ;(:company/email company)
    ;(:company/vd company)
    ;(:company/homepage company)
    ;(:company/oms  company)
    ;(:company/employees  company)
    ;(:company/othercontact  company)
    [:br][:b "Adress"] [:br]
    (:company/visitadr company)
    [:br]
    (:company/zipcode company) [:span " "] (:company/postal company)
    ])

(r/defc call_v < r/reactive [db]
  [:div
   (active-project)
   [:h4 "Företag"]
   (when-not (nil? (get-state :activecompany))
     (company_v (get-state :activecompany)))
   [:h4 "Aktiviteter"]
   [:form
    [:div.input-field
     [:textarea#textarea1.materialize-textarea { :value "rad ett\nrad två\nrad tre" }]
     [:label {:for "textarea1"} "Anteckning"]
     ]]
   [:br]
   [:a.btn {:on-click #(set-company db)} "Nästa"]])
