(ns rente.client.views.project
  (:require [reagent.core  :as reagent :refer [atom]]
            [rente.client.views.layout :as layout :refer [navbar]]
            [cljs.pprint :refer [pprint]]
            [rente.client.ws :as ws]
            [re-frame.core :refer [subscribe dispatch]]))


(defn project-input [{:keys [title on-save on-stop]}]
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

(def project-edit (with-meta project-input
  {:component-did-mount #(.focus (reagent/dom-node %))}))

(defn project-item []
  (let [editing (atom false)]
    (fn [{:keys [id name]}]
      [:tr
      [:td id]
      [:td {:class (str (if @editing "editing"))}
       (if @editing
         [project-edit {:class "edit"
                        :title name
                        :on-save #(dispatch [:save-project id %])
                        :on-stop #(reset! editing false)}]
         [:div {:for id :on-double-click #(reset! editing true)} name])]
       [:td
        [:a {:href "/#project" :on-click #(dispatch [:delete-project id])} [:i.material-icons "delete"]]]])))
;[:td (:startdate project)]
;[:td (:status project)]
;[:td [:button.btn.btn-xs.btn-success { :on-click #(select-project (:name project))} "Välj"]]

(defn project-list [projects]
  (let [namn (atom "")]
    (fn []
      [:table
       [:tr
        [:th "Id"]
        [:th "Namn"]
        ;[:th "Startdatum"]
        ;[:th "Status"]
        ;[:th]
       ]
       (for [project @projects]
           ^{:key (:id project)} [project-item project])
       ;[:button.btn.btn-primary { :on-click #(dispatch [:add-project @namn])} "Lägg till projekt"]
       [:span " "
        ]
       ;[atom-input namn]
       ])))

;(defn company-component [company]
;  [:tr
;    [:td (:name company)]
;    [:td (:orgnr company)]
;    [:td (:note company)]
;    [:td [:button.btn.btn-xs.btn-success "Välj"]]
;    [:td [:button.btn.btn-xs.btn-danger "Radera"]]])

;(defn companies-component []
;  (let [companies (subscribe [:companies])]
;    (fn []
;      [:table.table
;       [:tr
;        [:th "Namn"]
;        [:th "Orgnr"]
;        [:th "Info"]
;        [:th]
;        [:th]]
;        (for [company (->> @companies)]
;          ^{:key (:name company)} [company-component company])])))

(defn project-panel []
 (let [projects (subscribe [:projects])]
  [:div
   [navbar]
   [:div.container
    [:header#header
        [:h2 "Projekt"]
        [project-input {:id "new-todo"
                        :placeholder "Nytt projekt?"
                        :on-save #(dispatch [:add-project %])}]]
    [:div.row
     [project-list projects]]
    [:a.btn {:on-click ws/get-projects} "Hämta data"]
    ;[:a.collection-item {:on-click #(dispatch [:get-projects])} "Hämta data"]
    ]
   ]))
