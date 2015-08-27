(ns rente.client.views.project
  (:require [rum :as r]
            [datascript :as d]
            [rente.client.dom :as dom :refer [by-id]]
            [rente.client.views.material :refer [ikon button]]
            [rente.client.transactions :as trans]
            [rente.client.state :refer [state get-state conn]]
            [rente.client.routehelper :refer [Project projectroute newprojectroute]]))


(defn select-project [project]
  (let [activeproject (:activeproject @state)]
    (if (= activeproject project)
      (swap! state assoc :activeproject nil)
      (swap! state assoc :activeproject project))))

(r/defc project-item [project db activeproject]
  [:tr.project
   [:td.name  (:project/name project)]
   [:td.desc  (:project/desc project)]
   [:td
     [:a {:href "#project"
          :on-click #(trans/delete project conn)}
          (ikon "delete")]
     [:a {:href (projectroute project)}
          (ikon "view_headline")]
     [:a {:href "#project"
          :class (if (= activeproject project) "yellow" "")
          :on-click #(select-project project)}
      (ikon "play_for_work")]]])

(r/defc project-list [db activeproject]
  [:table
   [:thead
     [:tr
       [:th "Namn"]
       [:th "Beskrivning"]
       [:th "Åtgärd"]]
   [:tbody
     (for [[eid] (sort (d/q '[:find ?e :where [?e :project/name]] db))]
       (-> (project-item (d/entity db eid) db activeproject)
         (r/with-key [eid])))]]])

(r/defc project_v < rum/reactive [db]
  [:div
    (project-list db (get-state :activeproject) ) [:br]
    (button {:href newprojectroute} "Ny" "send")])
