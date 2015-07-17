(ns rente.client.views.project
  (:require [reagent.core  :as reagent :refer [atom]]
            [rente.client.views.layout :as layout :refer [navbar]]
            [rente.client.ws :as ws]
            [re-frame.core :refer [subscribe dispatch]]))

(def getprojects
  (memoize #((ws/get-all :project :projects)
    nil)))

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

(defn project-item [project] ; obs vet inte om vi ska ta emot projekt här eller i fn []
  (let [editing (atom false)
        id (:db/id project)]
    (fn []
      [:tr
      [:td id]
      [:td (:project/name project)]
     ; [:td {:class (str (if @editing "editing"))}
     ;  (if @editing
     ;    [project-edit {:class "edit"
     ;                ;   :title name
     ;                   :on-save #(dispatch [:save-project id %])
     ;                   :on-stop #(reset! editing false)}]
     ;    [:div {:for id :on-double-click #(reset! editing true)} name])]
       [:td
        [:a {:href "/#project" :on-click #(ws/delete (:db/id project) :projects)} [:i.material-icons "delete"]]
        [:span " "] [:span " "]
        [:a {:href "/#project" :on-click #(dispatch [:select-project project])} [:i.material-icons "airplay"]]]])))

(defn project-list []
  (let [namn (atom "")]
    (fn [projects]
      [:table
       [:tbody
        [:tr
            [:th "Id"]
            [:th "Namn"]
            [:th]
        ]
        (for [project @projects]
            ^{:key (:db/id project)} [project-item project])
        [:span " "]]])))

(defn project-panel []
  (let [projects (subscribe [:projects])
        active-project (subscribe [:active-project])]
  [:div
   [navbar]
   [:div.container
    (getprojects)
    [:header#header
     [:h2 "Projekt"]
       "Valt Projekt: " (:project/name @active-project)
         [project-input {:id "new-todo"
                         :placeholder "Nytt projekt?"
                         :on-save #(ws/add-name % :project/name :project :projects)}]]
    [:div.row
      [project-list projects]]]
   ]))
