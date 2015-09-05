(ns rente.client.views.sortiment
  (:require
    [datascript :as d]
    [rum :as r]
    [rente.client.dom :as dom :refer [by-id]]
    [rente.client.views.material :refer [ikon button save-button my-input]]
    [rente.client.transactions :as trans]
    [rente.client.actions :refer [add-item]]
    [rente.client.state :refer [state get-state conn]]
    [rente.client.routehelper :refer [Product productroute newproductroute]]))

;(r/defc kolla < r/reactive []
;        [:.kollaprod
;         (str (get-state :activeproduct))
;         (str (get-state :activeshelf))])

(defn select-product [product]
  (let [activeproduct (:activeproduct @state)]
    (if (= activeproduct product)
      (swap! state assoc :activeproduct nil)
      (swap! state assoc :activeproduct product))))

(defn select-shelf [shelf]
  (let [activeshelf (:activeshelf @state)]
    (if (= activeshelf shelf)
      (swap! state assoc :activeshelf nil)
      (swap! state assoc :activeshelf shelf))))

(r/defc shelf_v < r/static [shelf db activeshelf]
  [:.product
    [:span.name (:shelf/name shelf)]
    [:span.delete [:a {:href "#sortiment"
                       :on-click #(trans/delete shelf conn)}
                       (ikon "delete")]]
   [:a {:href "#sortiment"
        :class (if (= activeshelf shelf) "yellow" "")
        :on-click #(select-shelf shelf)}
    (ikon "play_for_work")]])

(r/defc item_v [item product shelf]
  [:div
    [:span (:item/quantity item)]
    [:span (:product/name product)]
    [:span (:shelf/name shelf)]
    [:span.delete [:a {:href "#sortiment"
                       :on-click #(trans/delete item conn)}
                       (ikon "delete")]]])

(r/defc product_v [product db activeproduct]
  [:.product
   [:span.artnr (:product/artnr product)]
   [:span.name  (:product/name product)]
   [:span.delete [:a {:href "#sortiment"
                      :on-click #(trans/delete product conn)}
                      (ikon "delete")]]
   [:a {:href (productroute product)}
     (ikon "view_headline")]
   [:a {:href "#sortiment"
        :class (if (= activeproduct product) "yellow" "")
        :on-click #(select-product product)}
    (ikon "play_for_work")]])

(r/defc visa-alla-produkter [db activeproduct]
  [:div
    (for [[eid] (sort (d/q '[:find ?e :where [?e :product/name]] db))]
      (-> (product_v (d/entity db eid) db activeproduct)
          (r/with-key [eid])))])

(r/defc visa-alla-hyllor [db activeshelf]
  [:div
   (for [[eid] (sort (d/q '[:find ?e :where [?e :shelf/name]] db))]
     (-> (shelf_v (d/entity db eid) db activeshelf)
         (r/with-key [eid])))])

(r/defc visa-sortiment [db]
  [:div
   (for [[item product shelf]
         (d/q '[:find ?item ?product ?shelf
                :in $ ?shelfname :where
                      [?shelf :shelf/name   ?shelfname]
                      [?item  :item/shelf   ?shelf]
                      [?item  :item/product ?product]]
                      db "C1")]
     (-> (item_v (d/entity db item) (d/entity db product) (d/entity db shelf))
         (r/with-key [item])))])

(r/defc sortiment_v < r/reactive [db]
  [:.sortiment
    [:.main-view.row
      [:.col.s3
        [:.card.blue-grey.darken-1
         [:.card-content.white-text
          [:span.card-title "Produkter"]
          (visa-alla-produkter db (get-state :activeproduct)) [:br]
          [:.card-action [:a {:href "#" :on-click #(println "get")} "Hämta"]]]]]
      [:.col.s3
        [:.card.blue-grey.darken-1
         [:.card-content.white-text
          [:span.card-title "Sortiment"]
          (visa-sortiment db)
         [:br]
          [:.card-action [:a {:href "#"} "ok"] ]]]]
      [:.col.s3
        [:.card.blue-grey.darken-1
         [:.card-content.white-text
          [:span.card-title "Hyllor"]
          (visa-alla-hyllor db (get-state :activeshelf)) [:br]
          [:.card-action [:a {:href "#"} "ok"] ]]]]]
   (save-button #(add-item))])
