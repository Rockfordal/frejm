(ns rente.client.views.projectedit
  (:require [datascript :as d]
            [rum :as r]
            [rente.client.views.global :as gv :refer [ikon button save-button]]
            [rente.client.state :refer [state get-state get-moduleid conn get-currententity]]
            [rente.client.transactions :as trans]))

(r/defc project-field [id icon label data]
  [:div.input-field.col.s6
    [:i.material-icons.prefix icon]
   ;(let [moduleid (get-moduleid)]
   (gv/component-input {:id id
                        :defval data
                        ;:on-save #(trans/update-project moduleid conn)
                        })
    [:label {:for id :class "active"} label]])

(r/defc back-button []
  (button {:href "#project"} "Tillbaka " "info"))

(r/defc project-form [db project]
 [:form
  [:div.row
   (project-field "project-name" "person_pin"     "Namn"        (:project/name project))
   (project-field "project-desc" "account_circle" "Beskrivning" (:project/desc project))]])

(r/defc projectedit_v < rum/reactive [db]
  [:div
    [:h2 "Redigera projekt"]
    (project-form db (get-currententity db))
    [:div.row
     [:div.col.s2 (back-button)]
      [:div.col.offset-s8.s2
       (let [moduleid (get-moduleid)]
         (save-button #(trans/update-project moduleid conn)))]]])

(r/defc projectnew_v < rum/reactive [db]
  [:div
    [:h2 "Nytt projekt"]
    (project-form db (get-state :newproject))
  [:div.row
    [:div.col.offset-s8.s2 (back-button)]
    [:div.col.s2 (save-button #(trans/add-project conn))]]])
