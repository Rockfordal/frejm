(ns rente.client.views.project
  (:require [reagent.core  :as reagent :refer [atom]]
            [rente.client.views.layout :as layout :refer [navbar]]
            [rente.client.ws :as ws]
            [re-frame.core :refer [subscribe dispatch]]))

(defn noob [] [:div])

(def hasmounted (atom false))

(def getprojects
  (with-meta noob
    {:component-did-mount
     (fn [_]
       (when-not @hasmounted
         (ws/get-projects)
         (reset! hasmounted true)))}))

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
    (fn [project]
      [:tr
      [:td (:id project)]
      [:td (:project/name project)]
     ; [:td {:class (str (if @editing "editing"))}
     ;  (if @editing
     ;    [project-edit {:class "edit"
     ;                ;   :title name
     ;                   :on-save #(dispatch [:save-project id %])
     ;                   :on-stop #(reset! editing false)}]
     ;    [:div {:for id :on-double-click #(reset! editing true)} name])]
       [:td [:a {:href "/#project" :on-click #(ws/del-project (:id project))} [:i.material-icons "delete"]]]
       ]
      )))

(defn project-list []
  (let [namn (atom "")]
    (fn [projects]
      [:table
       [:tr
        [:th "Id"]
        [:th "Namn"]
        [:th]
       ]

       (for [project @projects]
         ^{:key (:id project)} [project-item project])
       
       [:span " "]
       ])))

(defn project-panel []
  (let [projects (subscribe [:projects])]
  [:div
   [navbar]
   [:div.container
    [getprojects]
    [:header#header
     [:h2 "Projekt"]
         [project-input {:id "new-todo"
                         :placeholder "Nytt projekt?"
                         :on-save #(ws/add-project %)}]]
    [:div.row
      [project-list projects]]]
   ]))
