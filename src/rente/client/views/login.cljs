(ns rente.client.views.login
  (:require [rum :as rum]
            [rente.client.state :refer [figgen]]))

(rum/defc login_v [db]
  [:div
   [:h3 "Logga in"]
   ;[:b (rum/react figgen)]
   ])
