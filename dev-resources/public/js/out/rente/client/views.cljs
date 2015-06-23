(ns rente.client.views
  (:require [rente.client.ws :as socket]
            [re-frame.core :as re-frame :refer [subscribe dispatch]]
            [reagent.core  :as reagent :refer [atom]]
            [rente.client.db :refer [state put! get-value set-value!]]))

(defn list-item [id k v selections]
  (letfn [(handle-click! []
            (swap! selections update-in [k] not)
            (set-value! id (->> @selections (filter second) (map first))))]
    [:li {:class (str "list-group-item" (if (k @selections) " active"))
          :on-click handle-click!}
      v]))


(defn selection-list [id label & items]
  (let [selections (->> items (map (fn [[k]] [k false])) (into {}) atom)]
    (fn []
      [:div.row
       [:div.col-md-2 [:span label]]
       [:div.col-md-5
        [:div.row
         (for [[k v] items]
          [list-item id k v selections])]]])))

(defn row [label & body]
  [:div.row
   [:div.col-md-2 [:span label]]
   [:div.col-md-3 body]])

(defn text-input [id label]
  [row label
   [:input.form-control {:type "text"
                         :value (get-value id)
                         :key (str get-value id)
                         :on-change #(set-value! id (-> % .-target .-value))}]])

(defn show-currentpage []
  [:div (@state :currentpage)])

(defn loginform []
  [:form.navbar-form.navbar-right
    [:div.form-group
      [:input.form-control {:type "text", :placeholder "Användare" }]]
    [:div.form-group
      [:input.form-control {:type "password", :placeholder "Lösenord"}]]
    [:button.btn.btn-success {:type "submit"} "Logga in"]])

(defn navbar []
  (let [active-panel (re-frame/subscribe [:active-panel])]
  [:nav.light-blue.lighten-1 {:role "navigation"}
   [:div.nav-wrapper.container
    [:a#logo-container.brand-logo {:href "#"} "Frejm"]
    [:ul.right.hide-on-med-and-down
     [:li {:class (if (= (clj->js @active-panel) "parse-panel") "active" "")}   [:a {:href "#parse"} "Parse"]]
     [:li {:class (if (= (clj->js @active-panel) "project-panel") "active" "")} [:a {:href "#projekt"} "Projekt"]]
     ]
    [:ul#nav-mobile.side-nav
     [:li {:class (if (= (clj->js @active-panel) "parse-panel") "active" "")}   [:a {:href "#parse"} "Parse"]]
     [:li {:class (if (= (clj->js @active-panel) "project-panel") "active" "")} [:a {:href "#projekt"} "Projekt"]]
     ]
     [:a.button-collapse {:href "#" "data-activates" "nav-mobile"}
      [:i.mdi-navigation-menu]]
    ]]))
;       [:li {:class (if (= (@state :currentpage) "Företag") "active" "")} [:a {:href "#companies"} "Företag"]]
;       [:li {:class (if (= (@state :currentpage) "Samtal") "active" "")} [:a {:href "#samtal"} "Samtal"]]
;       [:li {:class (if (= (@state :currentpage) "Test") "active" "")} [:a {:href "#test"} "Test"]]
;       [:li [:a [:div (@state :current-project)]]]]
;        [:button.btn.btn-success {:type "submit"} "Logga in"]]]]
     ;[:a.dropdown-button.btn {"data-beloworigin" "true", :href "#", "data-activates" "dropdown1"} "Drop me"]

(defn atom-input [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn select-project [name]
  (put! :current-project name))

(defn project-component [project]
  [:tr
    [:td (:id project)]
    [:td (:name project)]
    [:td (:startdate project)]
    [:td (:status project)]
    ;[:td [:button.btn.btn-xs.btn-success { :on-click #(select-project (:name project))} "Välj"]]
    ;[:td [:button.btn.btn-xs.btn-danger { :on-click #(dispatch [:delete-project (:id project) ])} "Radera"]]
   ])

(defn projects-component []
  (let [projects (subscribe [:projects])
         namn (atom "")]
    (fn []
      [:div
      [:table.table
       [:tr
        [:th "Id"]
        [:th "Namn"]
        [:th "Startdatum"]
        [:th "Status"]
        [:th]
        [:th]]
        (for [project (->> @projects)]
          ^{:key (:id project)} [project-component project])]
       ;[:button.btn.btn-primary { :on-click #(dispatch [:add-project @namn])} "Lägg till projekt"]
       [:span " "]
       [atom-input namn]
      ])))

(defn company-component [company]
  [:tr
    [:td (:name company)]
    [:td (:orgnr company)]
    [:td (:note company)]
    [:td [:button.btn.btn-xs.btn-success "Välj"]]
    [:td [:button.btn.btn-xs.btn-danger "Radera"]]])

(defn companies-component []
  (let [companies (subscribe [:companies])]
    (fn []
      [:table.table
       [:tr
        [:th "Namn"]
        [:th "Orgnr"]
        [:th "Info"]
        [:th]
        [:th]]
        (for [company (->> @companies)]
          ^{:key (:name company)} [company-component company])])))

(defn call-component [company]
  [:div
    ;; Status
    [text-input :name "Namn"]
    [text-input :orgnr "Orgnummer"]
    [text-input :telefon "Telefon"]
    [text-input :verksamhet "Verksamhet"]
    [text-input :stad "Stad"]
    [text-input :anteckning "Anteckning"]])

(defn project-panel []
  [:div [navbar] [:div.container
   [:h2 "Projekt"]
    [:div]
    [:div {:class "col-md-10"}
     [projects-component]]]])

(defn call-panel []
  [:div [navbar] [:div.container
    [:h2 "Samtal"]
    (call-component [(@state :current-company)])]])

(defn test-page []
  (let [messages (subscribe [:messages])]
    (fn []
      [:div [navbar]
       [:div.container
        [:h1 (:title @state)]
        [:br]
        [:div @messages]
        [:div (str(:counter @state))]
        [:br]
        [:button {:on-click #(dispatch [:test-socket-event "Test"]) } "Test Event"]
        [:br] [:br]
        [:button {:on-click #(dispatch [:test-get-projects "vill ha projekt"]) } "Hämta Projekt"]
        [:br] [:br]
        [:button {:on-click #(dispatch [:load-companies "vill ha företag"]) } "Hämta Företag"]]])))

(defn company-panel []
  [:div [navbar] [:div.container
   [:h2 "Företag"]
    [:div {:class "col-md-10"}
     [companies-component]]]])

(defn phone-component [phone]
  [:li {:class "thumbnail phone-listing"}
   [:a {:href (str "#/phones/" (:id phone))
        :class "thumb"}
    [:img {:src (:imageUrl phone)}]]
   [:a {:href (str "#/phones/" (:id phone))} (:name phone)]
   [:p (:snippet phone)]])

(defn matches-query?
  [search-input phone]
  (if (= "" search-input)
    true
    (boolean (or
              (re-find (re-pattern search-input) (:name phone))
              (re-find (re-pattern search-input) (:snippet phone))))))

(defn phones-component []
  (let [phones (subscribe [:phones])
        search-input (subscribe [:search-input])
        order-prop (subscribe [:order-prop])]
    (fn []
      [:ul {:class "phones"}
       (for [phone (->> @phones
                        (filter (partial matches-query? @search-input))
                        (sort-by (keyword @order-prop)))]
         ^{:key (:name phone)} [phone-component phone])])))

(defn search-component []
  (let [search-input (subscribe [:search-input])])
  (fn []
    ;[:input {:on-change #(dispatch [:search-input-entered (-> % .-target .-value)])}]
    ))

(defn mark-selected
  [props order-prop current-prop-value]
  (if (= order-prop current-prop-value)
    (reagent/merge-props props {:selected "selected"})
    props))

(defn order-by-component []
  (let [order-prop (subscribe [:order-prop])]
    (fn []
      [:div "Sortera efter: "
       ;[:select {:on-change #(dispatch [:order-prop-changed (-> % .-target .-value)])}
       ; [:option (mark-selected {:value "name"} @order-prop "name") "Alfabetiskt"]
       ; [:option (mark-selected {:value "age"} @order-prop "age") "Nyast"]]
       ])))

(defn parse-panel []
  (let [test (subscribe [:test])]
  (fn []
    [:div [navbar] [:div.container
      [:h2 "Parse"]
      [:br]
      [:b "Namn"] [:div (@test :name)] [:br]
      [:b "Beskrivning"] [:div (@test :desc)] 
      [:br]
      [:button { :on-click #(dispatch [:getjs])}      "Hämta js"]
      [:button { :on-click #(dispatch [:getclojure])} "Hämta clj"]
      [:button { :on-click #(dispatch [:getcourses])} "Hämta kurser"]]])))

(defn home-panel [data]
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [:div
       [navbar] [:div.container
        [:h1 (str "Hej från " @name)]
       [search-component]
       [order-by-component]
       [:br]
       [phones-component]
                 ]])))

;; --------------------
(defmulti  panels identity)
(defmethod panels :home-panel    [] [home-panel])
(defmethod panels :parse-panel   [] [parse-panel])
(defmethod panels :project-panel [] [project-panel])
(defmethod panels :default       [] [:div])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      ;(js/console.log "aktivpanel"  (clj->js @active-panel))
      (panels @active-panel))))

(defn main [data]
  [:div
   [:h1 (:title @data)]
   [:span "Hello world! This is reagent!"]
   [:br]
   [:span "And sente seems to work too.."]
   [:br]
   [:span "And figwheel.. w00t!"]
   [:br]
   [:button {:on-click socket/test-socket-callback} "Send Message Callback"]
   [:br]
   [:button {:on-click socket/test-socket-event} "Send Message Event"]])
