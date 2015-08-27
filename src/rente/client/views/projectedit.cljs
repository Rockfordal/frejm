(ns rente.client.views.projectedit
  (:require [rum :as r]
            [rente.client.views.material :refer [ikon button save-button my-input]]
            [rente.client.state :refer [state get-state get-moduleid conn get-currententity]]
            [rente.client.transactions :as trans]))


(r/defc project-field [id icon label data]
  [:.input-field.col.s6
    [:i.material-icons.prefix icon]
   ;(let [moduleid (get-moduleid)]
   (my-input {:id id
              :defval data
              ;:on-save #(trans/update-project moduleid conn)
              })
    [:label {:for id :class "active"} label]])

(r/defc project-form [db project]
  [:form
    [:.row
      (project-field "project-name" "person_pin"     "Namn"        (:project/name project))
      (project-field "project-desc" "account_circle" "Beskrivning" (:project/desc project))]])

(r/defc back-button []
  (button {:href "#project"} "Tillbaka " "info"))

(r/defc projectedit_v < rum/reactive [db]
  [:div
    [:h2 "Redigera projekt"]
    (project-form db (get-currententity db))
    [:.row
      [:.col.s2 (back-button)]
        [:.col.offset-s8.s2
          (let [moduleid (get-moduleid)]
            (save-button #(trans/update-project moduleid conn)))]]])

(r/defc projectnew_v < rum/reactive [db]
  [:div
    [:h2 "Nytt projekt"]
    (project-form db (get-state :newproject))
  [:.row
    [:.col.offset-s8.s2 (back-button)]
    [:.col.s2 (save-button #(trans/add-project conn))]]])
