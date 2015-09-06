(ns rente.client.views.company
  (:require [rum :as r]
            [datascript :as d]
            [rente.client.dom :as dom :refer [by-id]]
            [rente.client.views.material :refer [ikon button my-input]]
            [rente.client.transactions :as trans]
            [rente.client.state :refer [state get-state conn]]
            [rente.client.queries :refer [find-companies]]
            [rente.client.routehelper :refer [Company companyroute newcompanyroute]]))


(defn projnamn [projektid db]
  (d/q '[:find ?name :in $ ?e :where
         [?e :project/name ?name]]
          db (js/parseInt projektid)))

(r/defc company_item [company db]
  [:tr.company
   [:td.name    (:company/name  company)]
   [:td.orgnr   (:company/orgnr company)]
   [:td.name    (:company/phone company)]
   [:td.typ     (:company/contacttype company)]
   [:td.contact (:company/contact company)]
   [:td.antal   (:company/employees company)]
   ;[:td.email   (:company/email company)]
   ;[:td.project (projnamn (:company/project company) db)]
   [:td [:a {:href "#company"
             :on-click #(trans/delete company conn)}
            (ikon "delete")]
        [:a {:href (companyroute company)}
            (ikon "view_headline")]]])

(r/defc company-list [db projectid]
 [:table
  [:thead
    [:tr
      [:th "Namn"]
      [:th "Orgnr"]
      [:th "Telefon"]
      [:th "Titel"]
      [:th "Kontakt"]
      [:th "Anställda"]
      ;[:th "Projekt"]
     [:th ""]]
  [:tbody
   (for [[eid] (sort (find-companies projectid db))]
      (-> (company_item (d/entity db eid) db)
          (r/with-key [eid])))]]])

(r/defc company-field [id icon label data]
  [:.input-field.col.s6
    [:i.material-icons.prefix icon]
   (my-input {:id id :on-save #(do (println "sparar " %))})
    [:label {:for id} label]])

(r/defc active-project < rum/reactive []
  [:div
   [:a#droppi.dropdown-button.btn {:href "#company"
                            :data-activates "dropdown1"
                            :on-click #(println (by-id "#dropdown1"))}
   (str (:project/name (get-state :activeproject)))]
   [:ul#dropdown1.dropdown-content
    [:li
     [:a {:href "#!"} "one"]
     [:a {:href "#!"} "two"]]]])

(r/defc company_v < rum/reactive [db]
  [:div
    (active-project)
    (company-list db (str (:project/name (get-state :activeproject))))
    (button {:href (newcompanyroute)} "Ny" "send")])
