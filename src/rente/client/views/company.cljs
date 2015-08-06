(ns rente.client.views.company
  (:require [rum :as r]
            [rente.client.dom :as dom :refer [by-id]]
            [rente.client.state :refer [state get-state]]
;             [rente.client.ws :as ws]
;             [secretary.core :refer [IRenderRoute render-route encode-query-params]]
))

;; (def getcompanies
;;   (memoize #((ws/get-all :company :companies)
;;     ;(println "getcompanies")
;;     nil)))

;; (defrecord Company [id]
;;   IRenderRoute
;;   (render-route [_]
;;     (str "/#companies/" id))
;;   (render-route [this params]
;;     (str (render-route this) "?"
;;          (encode-query-params params))))

;; (defn company-input [{:keys [title on-save on-stop]}]
;;   (let [val (atom title)
;;         stop #(do (reset! val "")
;;                   (if on-stop (on-stop)))
;;         save #(let [v (-> @val str clojure.string/trim)]
;;                (if-not (empty? v) (on-save v))
;;                (stop))]
;;     (fn [props]
;;       [:input (merge props
;;                      {:type "text"
;;                       :value @val
;;                       :on-blur save
;;                       :on-change #(reset! val (-> % .-target .-value))
;;                       :on-key-down #(case (.-which %)
;;                                      13 (save)
;;                                      27 (stop)
;;                                      nil)})])))

;; ;(def company-edit (with-meta company-input
;; ;  {:component-did-mount #(.focus (reagent/dom-node %))}))


(r/defc company-item [company]
;;   (let [editing (atom false)]
    [:tr
      ;[:td "företag"]
      [:td (:db/id company)]
      [:td (:company/name company)]
      [:td (:company/phone company)]
;;        [:td
;;         [:a {:href "/#company" :on-click #(ws/delete (:db/id company) :companies)} [:i.material-icons "delete"]]
;;         [:a {:href (render-route (Company. (:db/id company)))} [:i.material-icons "view_headline"]]
;;         ;[:P (:db/id company)]
         ])
  
(r/defc company-list [companies]
  [:table
   [:thead
    [:tr
    [:th "Id"]
    [:th "Namn"]
    [:th "Telefon"]
    [:th ""]]
    [:tbody
      (for [company companies]
        ;(company-item company)) ; kommer nog funka sen
         (r/with-props company-item company :rum/key company))]]])

(rum/defc company-input [{:keys [id title on-save on-stop]}]
  (let [val (atom title)
        stop #(do (reset! val "")
                  (if on-stop (on-stop)
                  ))
        save #(let [v (-> @val str clojure.string/trim)]
               (if-not (empty? v) (on-save v))
               (stop))]
;    (fn [props]
    [:input
     ;(merge props
                {:type "text"
                :id id
                :value @val
                :on-blur save
                :on-change #(reset! val (-> % .-target .-value))
                :on-key-down #(case (.-which %)
                                13 (save)
                                27 (stop)
                                nil)}
   ;  )
    ]))
;)

(r/defc company_v < rum/reactive [db]
  [:div
    [:h3 "Företag"]
      [:div.row
       (company-list (get-state :companies))
       [:button.btn {:on-click #(js/alert "yo")} "Lägg till"]
   ;[:div "Valt Projekt: " (str (get-state :activeproject))]
       (company-input {:id "new-todo"
       ;;                 :placeholder "Nytt företag?"
       ;;                 :on-save #(ws/add-name % :company/name :company :companies)
                       ;:on-save #(ws/add-company2project % "ica")}]]
                        :title "Nytt företag"
                        :on-save #(js/console.log "sparar")
                        :on-stop #(js/console.log "slut")
        })
       [:button.btn {:on-click #(.focus (by-id "new-todo"))} "Fokus"]
       [:button.btn {:on-click #(.blur (by-id "new-todo"))} "Blur"]
       ]]) 
;;    [:div.container
;;     (getcompanies)
;;     [:header#header
;;      [:h2 "Företag"]
;;        [company-input {:id "new-todo"
;;                        :placeholder "Nytt företag?"
;;                        :on-save #(ws/add-name % :company/name :company :companies)}]]
;;                        ;:on-save #(ws/add-company2project % "ica")}]]

;;     [:div.row
;;       [company-list companies]
;;       ;(clj->js (first @companies))
;;      ]
;;     ;[:a.btn {:on-click #(println (count @companies))} "antal"]   
;;     ;[:a.btn {:on-click #(js/alert "tjo")} "Alert"]
;;     ;[:a.btn {:on-click #(js/console.log "tjo")} "Log"]
;;     ]]))
