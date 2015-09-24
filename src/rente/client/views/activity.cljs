(ns rente.client.views.activity
  (:require [rum.core :as r]
            [datascript.core :as d]))


(r/defc activity-item [activity db]
  [:tr.project
   [:td.datum   (:activity/datum activity)]
   [:td.note    (:activity/note activity)]
   [:td.status]
   [:td.project [:a {:href (str "#project/" (:activity/project activity))} (:activity/project activity)]]
   [:td.company [:a {:href (str "#company/" (:activity/company activity))} (:activity/company activity)]]])

(r/defc activity-list [db]
  [:table
   [:thead
     [:tr
       [:th "Datum"]
       [:th "Anteckning"]
       [:th "Status"]
       [:th "Projekt"]
       [:th "Företag"]
       [:th ""]]
   [:tbody
     (for [[eid] (sort (d/q '[:find ?e :where [?e :activity/note]] db))]
       (-> (activity-item (d/entity db eid) db)
         (r/with-key [eid])))]]])

(r/defc activity_v < r/reactive [db]
  [:div
   (activity-list db) [:br]])
