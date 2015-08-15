(ns rente.client.views.company
  (:require [rum :as r]
            [datascript :as d]
            [rente.client.dom :as dom :refer [by-id]]
            [rente.client.transactions :as trans]
            [rente.client.state :refer [state get-state conn]]
;             [rente.client.ws :as ws]
;             [secretary.core :refer [IRenderRoute render-route encode-query-params]]
))

;; (defrecord Company [id]
;;   IRenderRoute
;;   (render-route [_]
;;     (str "/#companies/" id))
;;   (render-route [this params]
;;     (str (render-route this) "?"
;;          (encode-query-params params))))

  
(r/defc company_item [company db]
  [:tr.company
   [:td.name  (:company/name  company)]
   [:td.orgnr (:company/orgnr company)]
   [:td.name  (:company/phone company)]
   [:td.email (:company/email company)]
   [:td
    [:a {:href "#company" :on-click #(trans/delete (:db/id company) conn)}
     [:i.material-icons "delete"]]
    ]])
; [:a {:href (render-route (Company. (:db/id company)))} [:i.material-icons "view_headline"]]

(r/defc company-list [db]
 [:table
  [:thead
    [:tr
    [:th "Namn"]
    [:th "Orgnr"]
    [:th "Telefon"]
    [:th "E-post"]
    [:th "Åtgärd"]]
  [:tbody
    (for [[eid] (sort (d/q '[:find ?e :where [?e :company/name]] db))]
      (r/with-props company_item (d/entity db eid) db :rum/key [eid])) ; todo: rum react 13 key bug
    ]]])

(rum/defc company-input [{:keys [id title on-save on-stop]}]
  (let [val (atom title)
        stop #(do (reset! val "")
                  (.blur (by-id id))
                  (if on-stop (on-stop)))
        save #(let [v (-> @val str clojure.string/trim)]
               (if-not (empty? v) (on-save v))
               (stop))]
    [:input#icon_telephone.validate
                {:type "tel"
                :id id
                :value @val
                ;:on-blur save
                :on-change #(reset! val (-> % .-target .-value))
                :on-key-down #(case (.-which %)
                                13 (save)
                                27 (stop)
                                nil)}]))

(r/defc company-field [id icon label]
  [:div.input-field.col.s6
    [:i.material-icons.prefix icon]
   (company-input {:id id
                   :on-save #(js/console.log "sparar " %)})
    [:label {:for id} label]])

(r/defc company-form [db]
 [:form.col_s12
   ;[:b "Nytt företag"]
  [:div.row
   (company-field "company-name"  "person_pin" "Namn")
   (company-field "company-orgnr" "account_circle" "Orgnr")]
  [:div.row
   (company-field "company-phone" "phone" "Telefon")
   (company-field "company-email" "email" "E-post")]

  [:a.btn.waves-effect.waves-light
   {:type "submit"
    :name "action"
    :on-click #(trans/add conn)}
   "Lägg till " [:i.material-icons "send"]]])

(r/defc company_v < rum/reactive [db]
  [:div
    ;[:h2 "Företag"]
    [:div.row
      ;[:div "Valt Projekt: " (str (get-state :activeproject))]
      (company-list db) [:br]
      (company-form db)]]) 
