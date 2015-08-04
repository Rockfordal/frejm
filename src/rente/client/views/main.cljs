(ns rente.client.views.main
  (:require
    [rente.client.views.layout    :refer [navbar]]
    [rente.client.views.login     :refer [login_v]]
    [rente.client.views.company   :refer [company_v]]
    [rente.client.views.sortiment :refer [sortiment_v]]
    [rente.client.state           :refer [state get-state]]
    [rum :include-macros true]))


(defmulti  panels identity)
(defmethod panels :sortiment [i db] (sortiment_v db))
(defmethod panels :company   [i db] (company_v db))
(defmethod panels :login     [i db] (login_v db))

;; navbar and currentpage
(rum/defc canvas < rum/reactive [db]
  [:div
   (navbar
     (:module       (get-state))
     (:modules      (get-state)))
   (panels (:module (get-state)) db)])


;(defn notfound-panel [data]
;  (let [active-panel (subscribe [:active-panel])]
;  [:div [navbar] [:div.container
;    [:div.card.blue-grey.darken-1
;     [:div.card-content.white-text
;;       [:span.card-title "Sorry!"]
;;       [:p "Sidan " (clj->js @active-panel) " kunde inte hittas"]
;;       [:div.card-action
;;        [:a {:href "#"} "Gå Hem"]]]]]]))

;; (defn boxx [id label]
;;   [:div
;;    [:input.toggle {:id id
;;                    :type "checkbox"
;;                    ;:on-change #(js/alert "Tjena")
;;                    }]
;;     [:label {:for id} label]
;;   [:br]])

;; (defn home-panel []
;;   (fn [data]
;;     [:div
;;      [navbar]
;;        [:div.container
;;         [:h1 "Utveckling Q3"]
;;         [:p "Under Q3 kommer appen att utvecklas följande steg"]
;;         [boxx 1 "Projekt"]
;;         [boxx 2 "Företag"]
;;         [boxx 3 "Användare"]
;;         [:br]]]))

;; ;; --------------------
;; (defmulti  panels identity)
;; (defmethod panels :home-panel        [] [home-panel])
;; (defmethod panels :companyedit-panel [] [companyedit/companyedit-panel])

;; (defn create-my-routes []
;;   (let [routes (subscribe [:routes])]
;;     (doseq [route @routes]
;;        (let [panel (:panel route)
;;              run   (:run route)]
;;          (defmethod panels panel [] run)))))

;; (defmethod panels :default [] [notfound-panel])

;; (defn main-panel []
;;   (let [active-panel (subscribe [:active-panel])]
;;     (panels @active-panel)))
