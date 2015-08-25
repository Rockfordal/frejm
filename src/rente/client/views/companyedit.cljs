(ns rente.client.views.companyedit
  (:require [datascript :as d]
            [rente.client.views.global :as gv :refer [ikon button]]
            [rente.client.views.company :as companyview :refer [active-project]]
            [rente.client.state :refer [state get-state get-moduleid conn get-currententity]]
            [rente.client.transactions :as trans]
            [rente.client.dom :as dom :refer [q by-id toast]]
            [rum :as r]))


(r/defc company-field [id icon label data]
  [:div.input-field.col.s6
    [:i.material-icons.prefix icon]
   (gv/component-input {:id id :defval data})
    [:label {:for id :class "active"} label]])

(r/defc back-button []
  (button {:href "#company"} "Tillbaka " "info"))

(r/defc save-button [save]
  (button {:on-click save} "Spara " "info"))

(r/defc company-form [db company]
 [:form
  [:div.row
   (company-field "company-name"  "person_pin" "Namn" (:company/name company))
   (company-field "company-orgnr" "account_circle" "Orgnr" (:company/orgnr company))]
  [:div.row
   (company-field "company-phone" "phone" "Telefon" (:company/phone company))
   (company-field "company-email" "email" "E-post" (:company/email company))]
  [:div.row
   (company-field "company-vd" "phone" "VD" (:company/vd company))]])

(r/defc changeproject-field [id domid db]
  [:div.input-field.col.s6
    [:i.material-icons.prefix "code"]
   (gv/component-input {:id domid
                        :on-save #(trans/move-company id conn db)})
   [:label {:for domid :class "active"} "Flytta till projekt"]])

(r/defc companyedit_v < rum/reactive [db]
  [:div
    [:h2 "Redigera företag"]
    (company-form db (get-currententity db))
    [:div.row
      [:div.col.s2 (save-button #(trans/update-company (get-moduleid) conn))]
      [:div.col.s4 (changeproject-field (get-moduleid) "company-project" db)]
      [:div.col.offset-s1.s2 (back-button)]]])

(r/defc companynew_v < rum/reactive [db]
  [:div
   (active-project)
    [:h2 "Nytt företag"]
    (company-form db (get-state :newcompany))
  [:div.row
   [:div.col.s2 (let [activeproject (get-state :activeproject)]
                   (save-button #(trans/add-company activeproject conn)))]
    [:div.col.offset-s8.s2 (back-button)]]])

