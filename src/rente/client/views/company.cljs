(ns rente.client.views.company
  (:require [reagent.core  :as reagent :refer [atom]]
            [rente.client.views.layout :as layout :refer [navbar]]
            [rente.client.ws :as ws]
            [re-frame.core :refer [subscribe dispatch]]))

(def getcompanies
  (memoize #((ws/get-all :company :companies)
    ;(println "getcompanies")
    nil)))

(defn company-input [{:keys [title on-save on-stop]}]
  (let [val (atom title)
        stop #(do (reset! val "")
                  (if on-stop (on-stop)))
        save #(let [v (-> @val str clojure.string/trim)]
               (if-not (empty? v) (on-save v))
               (stop))]
    (fn [props]
      [:input (merge props
                     {:type "text"
                      :value @val
                      :on-blur save
                      :on-change #(reset! val (-> % .-target .-value))
                      :on-key-down #(case (.-which %)
                                     13 (save)
                                     27 (stop)
                                     nil)})])))

(def company-edit (with-meta company-input
  {:component-did-mount #(.focus (reagent/dom-node %))}))

(defn company-item []
  (let [editing (atom false)]
    (fn [company]
      [:tr
      [:td (:db/id company)]
      [:td (:company/name company)]
       [:td [:a {:href "/#company" :on-click #(ws/delete (:db/id company) :companies)} [:i.material-icons "delete"]]]])))

(defn company-list []
  (let [namn (atom "")]
    (fn [companies]
      [:table
       [:tbody
       [:tr
        [:th "Id"]
        [:th "Namn"]
;        [:th "Orgnr"]
;        [:th "Info"]
        [:th]]
       (for [company @companies]
           ^{:key (:db/id company)} [company-item company])
       ;[:button.btn.btn-primary { :on-click #(dispatch [:add-project @namn])} "Lägg till projekt"]
       [:span " "]]])))

(defn company-panel []
  (let [companies (subscribe [:companies])
        active-project (subscribe [:active-project])]
  [:div
   [navbar]
   [:div.container
    (getcompanies)
    [:header#header
     [:h2 "Företag"]
       "Valt Projekt: " (:project/name @active-project)
       [company-input {:id "new-todo"
                       :placeholder "Nytt företag?"
                       :on-save #(ws/add-name % :company/name :company :companies)}]]
                       ;:on-save #(ws/add-company2project % "ica")}]]

    [:div.row
      [company-list companies]
      ;(clj->js (first @companies))
     ]
    ;[:a.btn {:on-click #(println (count @companies))} "antal"]
    ;[:a.btn {:on-click #(js/alert "tjo")} "Alert"]
    ;[:a.btn {:on-click #(js/console.log "tjo")} "Log"]
    ]
   ]))
