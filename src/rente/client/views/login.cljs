(ns rente.client.views.login
  (:require [rum.core :as r]))


(r/defc login_v [db]
  [:div
   [:h3 "Logga in"]
   [:br]
   [:a.btn {:href "#sni"} "Sni"]])
