(ns rente.client.views.company
  (:require [reagent.core  :as reagent :refer [atom]]
            [rente.client.views.layout :as layout :refer [navbar]]
            [cljs.pprint :refer [pprint]]
            [rente.client.ws :as ws]
            [re-frame.core :refer [subscribe dispatch]]))

(defn noob [] [:div])

(def hasmounted (atom false))

(def getdata
  (with-meta noob
    {:component-did-mount
     (fn [_]
       (when-not @hasmounted
         (ws/get-companies)
         (reset! hasmounted true)))}))

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
    ;(fn [{:keys [id name]}]
;    (fn [{:keys [name type id orgnr]}]
    (fn [company]
      [:tr
      [:td (:id company)]
      [:td (:company/name company)]
;    [:td (:orgnr company)]
;    [:td (:note company)]
     ; [:td {:class (str (if @editing "editing"))}
     ;  (if @editing
     ;    [company-edit {:class "edit"
     ;                ;   :title name
     ;                   :on-save #(dispatch [:save-project id %])
     ;                   :on-stop #(reset! editing false)}]
     ;    [:div {:for id :on-double-click #(reset! editing true)} name])]
       [:td [:a {:href "/#company" :on-click #(ws/del-company (:id company))} [:i.material-icons "delete"]]]
       ]
      )))

(defn company-list [companies]
  (let [namn (atom "")]
    (fn []
      [:table
       [:tr
        [:th "Id"]
        [:th "Namn"]
;        [:th "Orgnr"]
;        [:th "Info"]
        [:th]
       ]
       (for [company @companies]
           ^{:key (:id company)} [company-item company])
       ;[:button.btn.btn-primary { :on-click #(dispatch [:add-project @namn])} "Lägg till projekt"]
       [:span " "
        ]
       ;[atom-input namn]
       ])))

(defn company-panel []
  (let [companies (subscribe [:companies])]
  [:div
   [navbar]
   [:div.container
    [getdata]
    [:header#header
     [:h2 "Företag"]
     ;[:b (count @companies) " st"]
         [company-input {:id "new-todo"
                        :placeholder "Nytt företag?"
                        :on-save #(ws/add-company %)}]]
    [:div.row
      [company-list companies]
      ;(clj->js (first @companies))
     ]
    ;[:a.btn {:on-click #(println (count @companies))} "antal"]
    ;[:a.btn {:on-click #(js/alert "tjo")} "Alert"]
    ;[:a.btn {:on-click #(js/console.log "tjo")} "Log"]
    ]
   ]))
