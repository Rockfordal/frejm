(ns rente.client.views.companyedit
;;   (:require [reagent.core  :as reagent]
;;             [rente.client.views.layout :as layout :refer [navbar]]
;;             ;[rente.client.views.global :as global]
;;             [rente.client.ws :as ws]
;;             [secretary.core :as secretary]
  ;;             [re-frame.core :refer [subscribe dispatch]])
)


;; (def getcompanies
;;   (memoize #((ws/get-all :company :companies)
;;     nil)))

;; (defn inputt [{:keys [title on-save on-stop]}]
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

;; (defn company-edit [company]
;;   [:div
;;   ;[:h3 "Edit"]
;;    ;[:div.row
;;     ;[:form.col.s12
;;      ;[:input-field.col.s6 {:placeholder "Namn" :type "text" :value (:company/name company)}]
;;        [inputt                 {:id "company-id"
;;                                 :placeholder "Id..."
;;                                 ;:title (:db/id company)
;;                                 ;:on-save #(ws/add-name % :company/name :company :companies)
;;                                 }]
;; ;       [global/input-component {:id "company-name"
;; ;                                :placeholder "Name..."
;; ;                                :title (:company/name company)
;;                                 ;:on-save #(ws/add-name % :company/name :company :companies)
;; ;                                }]

;;     ; ]
;;     ;]
;;   [:b "Namn "] (:company/name company)
;;   ;[:b "Orgnr "] (:company/orgnr company)
;;   ])

;; (defn companyedit-panel []
;;   (let [a 1
;;         companies (subscribe [:companies])
;;         ;active-project (subscribe [:active-project])
;;         active-panel (subscribe [:active-panel])
;;         panelid (subscribe [:active-panel-id])]

;;   [:div
;;    [navbar]
;;    [:div.container
;;     (getcompanies)
;;     [:header#header
;;      [:h2 "Redigera Företag"]
;;      @panelid
;;       ;"Valt Projekt: " (:project/name @active-project)
;;      ]
;;     [:div.row
;;      [:br]
;;       [company-edit (first @companies)]
;;      ]]]))
