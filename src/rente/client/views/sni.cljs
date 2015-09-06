(ns rente.client.views.sni
  (:require [rum :as r]
            [datascript :as d]))


(r/defc sni-item [sni db]
  [:tr.project
   [:td.code  (:sni/code sni)]
   [:td.name  (:sni/name sni)]])

(r/defc sni-list [db]
  [:table
   [:thead
     [:tr
       [:th "Kod"]
       [:th "Namn"]
       [:th ""]]
   [:tbody
     (for [[eid] (sort (d/q '[:find ?e :where [?e :sni/code]] db))]
       (-> (sni-item (d/entity db eid) db)
         (r/with-key [eid])))]]])

(r/defc sni_v < rum/reactive [db]
  [:div
   (sni-list db) [:br]])
