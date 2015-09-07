(ns rente.client.views.companyedit
  (:require [rum :as r]
            [rente.client.views.material :refer [button ikon link-button my-input save-button]]
            [rente.client.views.company :refer [active-project]]
            [rente.client.views.companyform :refer [company-form]]
            [rente.client.state :refer [state get-state get-moduleid conn get-currententity]]
            [rente.client.transactions :as trans]))


(r/defc changeproject-field [id domid db]
  [:.input-field
    [:i.material-icons.prefix "code"]
    (my-input {:id domid :on-save #(trans/move-company id conn db)})
    [:label {:for domid :class "active"} "Flytta till projekt"]])

(r/defc companyedit_v < rum/reactive [db]
  [:div
    (active-project)
    (company-form db (get-currententity db))
    [:.row
      (let [moduleid (get-moduleid)]
        [:.col.s2 (save-button #(trans/update-company moduleid conn))])
     [:.col.offset-s3.s2 (changeproject-field (get-moduleid) "company-project" db)]
     [:.col.offset-s3.s2 (link-button "#company" "Tillbaka " "info")]]])

(r/defc companynew_v < rum/reactive [db]
  [:div
   (active-project)
    [:h2 "Nytt företag"]
    (company-form db (get-state :newcompany))
   [:.row
    [:.col.s2 (let [activeproject (get-state :activeproject)]
                (save-button #(trans/add-company activeproject conn)))]
    [:.col.offset-s8.s2 (link-button "#company" "Tillbaka " "info")]]])
