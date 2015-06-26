(ns rente.client.views.company)

;(defn project-component [project]
;  [:tr
;    [:td (:id project)]
;    [:td (:name project)]
;    [:td (:startdate project)]
;    [:td (:status project)]
;    [:td [:button.btn.btn-xs.btn-success { :on-click #(select-project (:name project))} "Välj"]]
;    [:td [:button.btn.btn-xs.btn-danger { :on-click #(dispatch [:delete-project (:id project) ])} "Radera"]]])

;(defn projects-component []
;  (let [projects (subscribe [:projects])
;        namn (atom "")
;        ]
;    (fn []
;      [:div
;      [:table.table
;       [:tr
;        [:th "Id"]
;        [:th "Namn"]
;        [:th "Startdatum"]
;        [:th "Status"]
;        [:th]
;        [:th]]
;        (for [project (->> @projects)]
;                                        ;          ^{:key (:id project)} [project-component project])
;       ]
;       ;[:button.btn.btn-primary { :on-click #(dispatch [:add-project @namn])} "Lägg till projekt"]
;       [:span " "]
;       [atom-input namn]
;       ])))

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

;(defn project-panel []
;  [:div
;   [navbar] [:div.container
;   [:h2 "Projekt"]
;    [:div]
;    [:div {:class "col-md-10"}  ;bläää bootstrap funkar ju inte här!
;     ;[projects-component]
;     ]]])
