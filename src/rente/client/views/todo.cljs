(ns rente.client.views.todo
  (:require [reagent.core  :as reagent :refer [atom]]
            [rente.client.views.layout :as layout :refer [navbar]]
            [re-frame.core :refer [subscribe dispatch]]))


(defn todo-input [{:keys [title on-save on-stop]}]
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

(def todo-edit (with-meta todo-input
                          {:component-did-mount #(.focus (reagent/dom-node %))}))

(defn stats-footer []
  (let [footer-stats (subscribe [:footer-stats])]
    (fn []
      (let [[active done filter] @footer-stats
            props-for (fn [filter-kw txt]
                        [:a.collection-item {:href "#/todo"
                                             :class (if (= filter-kw filter) "active")
                                             :on-click #(dispatch [:set-filter filter-kw])}
                          txt])]
        [:footer#footer
         [:div
          [:span#todo-count
           [:strong active] " föremål kvar"]
          [:div.row
          [:div#filters.collection
           [:div.col.s3 (props-for :all "Alla")]
           [:div.col.s3 (props-for :active "Aktiva")]
           [:div.col.s3 (props-for :done "Klara")]]]
          (when (pos? done)
            [:a#clear-completed.btn.brown.lighten-2 {:on-click #(dispatch [:clear-completed])}
             "Arkivera färdiga uppgifter " done])]]))))

(defn todo-item []
  (let [editing (atom false)]
    (fn [{:keys [id done title]}]
      [:li {:class (str (if done "completed ")
                        (if @editing "editing"))}
       [:div.view
        [:input.toggle {:id id
                        :type "checkbox"
                        :checked done
                        :on-change #(dispatch [:toggle-done id])}]
        [:label {:for id :on-double-click #(reset! editing true)} title]

        [:a {:on-click #(dispatch [:delete-todo id])} [:i.material-icons "delete"]]
        ]
       (when @editing
         [todo-edit {:class "edit"
                     :title title
                     :on-save #(dispatch [:save id %])
                     :on-stop #(reset! editing false)}])])))

(defn todo-list [visible-todos]
  [:ul#todo-list
   (for [todo  @visible-todos]
     ^{:key (:id todo)} [todo-item todo])])

(defn todo-panel []
  (let [todos           (subscribe [:todos])
        visible-todos   (subscribe [:visible-todos])
        completed-count (subscribe [:completed-count])]
    (fn []
      [:div
       [navbar]
       [:div.container
        [:header#header
         [:h1 "Uppgifter"]
         [todo-input {:id "new-todo"
                      :placeholder "Vad behöver göras?"
                      :on-save #(dispatch [:add-todo %])}]]
        (when-not (empty? @todos)
          [:div
           [:section#main
            [:input#toggle-all
             {:type "checkbox"
              :checked (= (count @visible-todos) @completed-count)
              :on-change #(dispatch [:complete-all-toggle])}]
            [:label {:for "toggle-all"} "Marka alla som klara"]
            [todo-list visible-todos]]
           [stats-footer]])
       [:footer#info
        [:p "Dubbelklicka för att redigera en"]]]])))
