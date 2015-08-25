(ns rente.client.views.company
  (:require [rum :as r]
            [datascript :as d]
            [rente.client.dom :as dom :refer [by-id]]
            [rente.client.views.global :as gv :refer [ikon button go-route]]
            [rente.client.transactions :as trans]
            [rente.client.state :refer [state get-state conn]]
            [secretary.core :refer [IRenderRoute render-route encode-query-params]]))

(defrecord Company [id]
  IRenderRoute
  (render-route [_]           (str "#company/" id))
  (render-route [this params] (go-route this params)))

(r/defc company_item [company db]
  [:tr.company
   [:td.name    (:company/name  company)]
   [:td.orgnr   (:company/orgnr company)]
   [:td.name    (:company/phone company)]
   [:td.email   (:company/email company)]
   [:td.vd      (:company/vd    company)]
   [:td.project (:company/project company)]
   [:td
     [:a {:href "#company"
          :on-click #(trans/delete company conn)}
          (ikon "delete")]
     [:a {:href (render-route (Company. (:db/id company)))}
      (ikon "view_headline")]]])

(r/defc company-list [db]
 [:table
  [:thead
    [:tr
      [:th "Namn"]
      [:th "Orgnr"]
      [:th "Telefon"]
      [:th "E-post"]
      [:th "VD"]
      [:th "Projekt"]
      [:th "Åtgärd"]]
  [:tbody
    (for [[eid] (sort (d/q '[:find ?e :where [?e :company/name]] db))]
      (-> (company_item (d/entity db eid) db)
          (r/with-key [eid])))]]])

(r/defc company-field [id icon label data]
  [:div.input-field.col.s6
    [:i.material-icons.prefix icon]
   (gv/component-input {:id id :on-save #(do (println "sparar " %))})
    [:label {:for id} label]])

(r/defc active-project < rum/reactive []
  [:div
   [:a#droppi.dropdown-button.btn {:href "#company"
                            ;:data-activates "dropdown1"
                            :on-click #(
                                        println (by-id "#dropdown1")
                                        )
                            }
   (str (:project/name (get-state :activeproject)))]
   [:ul#dropdown1.dropdown-content
    [:li
     [:a {:href "#!"} "one"]
     [:a {:href "#!"} "two"]
     ]
    ]
   ]
  )

(r/defc company_v < rum/reactive [db]
  [:div
    (active-project)
    (company-list db)
    (button {:href (render-route "/newcompany")} "Ny" "send")])
