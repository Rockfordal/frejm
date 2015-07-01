(ns rente.client.views.phone
  (:require [rente.client.appstate :as appstate :refer [state put! get-value set-value!]]))


;(defn list-item [id k v selections]
;  (letfn [(handle-click! []
;            (swap! selections update-in [k] not)
;            (set-value! id (->> @selections (filter second) (map first))))]
;    [:li {:class (str "list-group-item" (if (k @selections) " active"))
;          :on-click handle-click!}
;      v]))

;(defn selection-list [id label & items]
;  (let [selections (->> items (map (fn [[k]] [k false])) (into {}) atom)]
;    (fn []
;      [:div.row
;       [:div.col-md-2 [:span label]]
;       [:div.col-md-5
;        [:div.row
;         (for [[k v] items]
;          [list-item id k v selections])]]])))

;(defn row [label & body]
;  [:div.row
;   [:div.col-md-2 [:span label]]
;   [:div.col-md-3 body]])

;(defn text-input [id label]
;  [row label
;   [:input.form-control {:type "text"
;                         :value (get-value id)
;                         :key (str get-value id)
;                         :on-change #(set-value! id (-> % .-target .-value))}]])

;(defn show-currentpage [active-panel]
;  [:div (@state :currentpage)])

;(defn loginform [active-panel]
;  [:form.navbar-form.navbar-right
;    [:div.form-group
;      [:input.form-control {:type "text", :placeholder "Användare" }]]
;    [:div.form-group
;      [:input.form-control {:type "password", :placeholder "Lösenord"}]]
;    [:button.btn.btn-success {:type "submit"} "Logga in"]])

;(defn atom-input [value]
;  [:input {:type "text"
;           :value @value
;           :on-change #(reset! value (-> % .-target .-value))}])

;(defn select-project [name]
;  (put! :current-project name))

;(defn company-panel []
;  [:div [navbar] [:div.container
;   [:h2 "Företag"]
;    [:div {:class "col-md-10"}
;     [companies-component]]]])

;(defn phone-component [phone]
;  [:li {:class "thumbnail phone-listing"}
;   [:a {:href (str "#/phones/" (:id phone))
;        :class "thumb"}
;    [:img {:src (:imageUrl phone)}]]
;   [:a {:href (str "#/phones/" (:id phone))} (:name phone)]
;   [:p (:snippet phone)]])

;(defn matches-query?
;  [search-input phone]
;  (if (= "" search-input)
;    true
;    (boolean (or
;              (re-find (re-pattern search-input) (:name phone))
;              (re-find (re-pattern search-input) (:snippet phone))))))

;(defn phones-component []
;  (let [phones (subscribe [:phones])
;        search-input (subscribe [:search-input])
;        order-prop (subscribe [:order-prop])]
;    (fn []
;      [:ul {:class "phones"}
;       (for [phone (->> @phones
;                        (filter (partial matches-query? @search-input))
;                        (sort-by (keyword @order-prop)))]
;         ^{:key (:name phone)} [phone-component phone])])))

;(defn search-component []
;  (let [search-input (subscribe [:search-input])])
;  (fn []
;    [:input {:on-change #(dispatch [:search-input-entered (-> % .-target .-value)])}]
;    ))

;(defn mark-selected
;  [props order-prop current-prop-value]
;  (if (= order-prop current-prop-value)
;    (reagent/merge-props props {:selected "selected"})
;    props))

;(defn order-by-component []
;  (let [order-prop (subscribe [:order-prop])]
;    (fn []
;      [:div "Sortera efter: "
       ;[:select {:on-change #(dispatch [:order-prop-changed (-> % .-target .-value)])}
       ; [:option (mark-selected {:value "name"} @order-prop "name") "Alfabetiskt"]
       ; [:option (mark-selected {:value "age"} @order-prop "age") "Nyast"]]
;       ])))

;(defn phone-panel [data]
;  (fn []
;    [:div
;     [navbar] [:div.container
;      [:h1 (str "Hej från Reagent, Re-frame")]
;      [search-component]
;      [order-by-component]
;      [:br]
;      [phones-component]
;]]))
