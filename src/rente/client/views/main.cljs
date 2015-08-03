(ns rente.client.views.main
  (:require
    [rente.client.views.layout    :refer [navbar]]
    [rente.client.views.login     :refer [login_v]]
    [rente.client.views.company   :refer [company_v]]
    [rente.client.views.sortiment :refer [sortiment_v]]
    [rente.client.state           :refer [state get-state]]
    [rum :include-macros true])
)

;; where are page views
(def module-map
  {:company   company_v
   :sortiment sortiment_v
   :login     login_v})

(defmulti  panels identity)
;(defmulti  panels (fn ([db & xs])
;                       (mapv identity (into [db] xs))))

(defmethod panels :sortiment [db] (sortiment_v db))
;(defmethod panels :company   [db] (company_v db))
;(defmethod panels :login     [db] (login_v db))

;; select current page
(rum/defc content [current-module db] 
  (let [module-comp (current-module module-map)]
    [:div.content
      (module-comp db)]))

(defn main-panel [panel db]
  (panels panel db)
)

;; navbar and currentpage
(rum/defc canvas < rum/reactive [db]
  [:div
   (navbar
     (:module        (get-state))
     (:modules       (get-state)))
   ;(content (:module (get-state)) db)
   ;(main-panel (:module (get-state)) db)
   (panels (:module (get-state)) db)
   ])


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
