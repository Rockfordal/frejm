(ns rente.client.views.project
  (:require [rum :as r]
            [datascript :as d]
            [rente.client.dom :as dom :refer [by-id]]
            [rente.client.views.global :as gv :refer [ikon button go-route]]
            [rente.client.transactions :as trans]
            [rente.client.state :refer [state get-state conn]]
            [secretary.core :refer [IRenderRoute render-route encode-query-params]]))


(defrecord Project [id]
  IRenderRoute
  (render-route [_]           (str "#project/" id))
  (render-route [this params] (go-route this params)))

(defn select-project [project]
  (swap! state assoc :activeproject project))

(r/defc project-item [project db]
  [:tr.project
   [:td.name  (:project/name project)]
   [:td.desc  (:project/desc project)]
   [:td
     [:a {:href "#project"
          :on-click #(trans/delete project conn)}
          (ikon "delete")]
     [:a {:href (render-route (Project. (:db/id project)))}
          (ikon "view_headline")]
     [:a {:href "#project"
          :on-click #(select-project project)}
          (ikon "play_for_work")]]])

(r/defc project-list [db]
 [:table
  [:thead
    [:tr
      [:th "Namn"]
      [:th "Beskrivning"]
      [:th "Åtgärd"]]
  [:tbody
      (for [[eid] (sort (d/q '[:find ?e :where [?e :project/name]] db))]
      (-> (project-item (d/entity db eid) db)
          (r/with-key [eid])))]]])

(r/defc project_v < rum/reactive [db]
  [:div
    (project-list db) [:br]
    (button {:href (render-route "/newproject")} "Ny" "send")])
