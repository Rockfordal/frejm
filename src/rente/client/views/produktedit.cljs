(ns rente.client.views.produktedit
  (:require [rum :as r]
            [rente.client.views.material :refer [ikon button my-input save-button]]
            [rente.client.views.company :refer [active-project]]
            [rente.client.state :refer [state get-state get-moduleid conn get-currententity]]
            [rente.client.transactions :as trans]))


(r/defc product-field [id icon label data]
        [:.input-field.col.s6
         [:i.material-icons.prefix icon]
         (my-input {:id id :defval data})
         [:label {:for id :class "active"} label]])

(r/defc product-form [db product]
        [:form
         [:.row (product-field "product-name" "person_pin" "Namn" (:product/name product))
          (product-field "product-id" "account_circle" "Orgnr"    (:db/id product))]])

(r/defc changeproduct-field [id domid db]
        [:.input-field.col.s6
         [:i.material-icons.prefix "code"]
         (my-input {:id domid :on-save #(trans/move-company id conn db)})
         [:label {:for domid :class "active"} "Flytta till projekt"]])

(r/defc back-button []
        (button {:href "#sortiment"} "Tillbaka " "info"))

(r/defc productedit_v < rum/reactive [db]
        [:div
         [:h2 "Redigera Produkt"]
         (product-form db (get-currententity db))
         [:.row
          (let [moduleid (get-moduleid)]
            [:.col.s2 (save-button #(trans/update-company moduleid conn))])
          ;[:.col.s4 (changeproject-field (get-moduleid) "company-project" db)]
          [:.col.offset-s1.s2 (back-button)]]])

(r/defc productnew_v < rum/reactive [db]
        [:div
         (active-project)
         [:h2 "Nytt företag"]
         (product-form db (get-state :newproduct))
         [:.row
          [:.col.s2 (let [activeproject (get-state :activeproject)]
                      (save-button #(trans/add-company activeproject conn)))]
          [:.col.offset-s8.s2 (back-button)]]])
