(ns rente.client.views.company
  (:require [rum :as r]
            [datascript :as d]
            [rente.client.dom :as dom :refer [by-id]]
            [rente.client.views.global :as gv :refer [ikon]]
            [rente.client.transactions :as trans]
            [rente.client.state :refer [state get-state conn]]
            [secretary.core :refer [IRenderRoute render-route encode-query-params]]))


(defrecord Company [id]
  IRenderRoute
  (render-route [_]
    (str "#company/" id))
  (render-route [this params]
    (str (render-route this) "?"
         (encode-query-params params))))

(r/defc company_item [company db]
  [:tr.company
   [:td.name  (:company/name  company)]
   [:td.orgnr (:company/orgnr company)]
   [:td.name  (:company/phone company)]
   [:td.email (:company/email company)]
   [:td.vd    (:company/vd    company)]
   [:td
    [:a {:href "#company"
         :on-click #(trans/delete (:db/id company) conn)}
         (ikon "delete")]
    [:a {:href (render-route (Company. (:db/id company)))}
     (ikon "view_headline")]]])
; [:a {:href (render-route (Company. (:db/id company)))} [:i.material-icons "view_headline"]]

(r/defc company-list [db]
 [:table
  [:thead
    [:tr
      [:th "Namn"]
      [:th "Orgnr"]
      [:th "Telefon"]
      [:th "E-post"]
      [:th "VD"]
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

(r/defc company-form [db newcompany]
 [:form.col_s12
  [:div.row (company-field "company-name"  "person_pin" "Namn" nil)
            (company-field "company-orgnr" "account_circle" "Orgnr" nil)]
  [:div.row (company-field "company-phone" "phone" "Telefon" nil)
            (company-field "company-email" "email" "E-post" nil)]
  [:div.row (company-field "company-vd" "phone" "VD" nil)]
  [:a.btn.waves-effect.waves-light
   {:type "submit"
    :on-click #(trans/add conn)}
   "Lägg till " (ikon "send")]])

(r/defc company_v < rum/reactive [db]
  [:div
    (company-list db) [:br]
    (company-form db (get-state :newcompany)) [:br]
    ;[:div "Valt Projekt: " (str (get-state :activeproject))]
     ])
