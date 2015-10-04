(ns rente.client.views.login
  (:require [rum.core :as r]
            [rente.client.views.material :refer [ikon button my-input save-button]]
            ))

(r/defc login-field [id icon label data]
        [:.input-field.col.s4
         [:i-material-icons.prefix icon]
         (my-input {:id id :defval data})
         [:label {:for id :class "active"} label]])

(r/defc login-form [db user]
        [:form
         [:.row
          (login-field "user-username" "account_circle" "username" (:user/username user))
          (login-field "user-password" "person_pin" "password"     (:user/password user))]])

(r/defc login_v [db]
  [:div
   [:h3 "Logga in"]
   (login-form db)
   ])
