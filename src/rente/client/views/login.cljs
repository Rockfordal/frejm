(ns rente.client.views.login
  (:require [rum :as rum]
            [rente.client.state :refer [figgen]]))

(rum/defc login_v [db]
  [:div
   [:h3 "login"]
   ;[:b (rum/react figgen)]
   ])
