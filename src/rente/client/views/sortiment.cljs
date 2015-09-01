(ns rente.client.views.sortiment
  (:require
    [datascript :as d]
    [rum :as r]
    [rente.client.dom :as dom :refer [by-id]]
    [rente.client.views.material :refer [ikon button my-input]]
    [rente.client.transactions :as trans]
    [rente.client.state :refer [state get-state conn]]
    [rente.client.routehelper :refer [Product productroute newproductroute]]
    ))


(r/defc shelf_v < r/static [shelf]
  [:.product
    [:span.name (:shelf/name shelf)]
   ])

(r/defc item_v [item product shelf]
  [:div
    [:span (:item/quantity item)]   [:span " "]
    [:span (:product/name product)] [:span " "]
    [:span (:shelf/name shelf)]
   ])

(r/defc product_v [product]
  [:.product
    [:span.name (:product/name product)]
   [:td [:a {:href "#sortiment"
             :on-click #(trans/delete product conn)}
         (ikon "delete")]
    [:a {:href (productroute product)}
     (ikon "view_headline")]]
   ])

(r/defc visa-alla-produkter [db]
  [:div
    (for [[eid] (sort (d/q '[:find ?e :where [?e :product/name]] db))]
      (-> (product_v (d/entity db eid))
          (r/with-key [eid])))])

(r/defc visa-alla-hyllor [db]
  [:div
   (for [[eid] (sort (d/q '[:find ?e :where [?e :shelf/name]] db))]
     (-> (shelf_v (d/entity db eid))
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

(r/defc sortiment_v [db]
  [:.sortiment
    [:.main-view.row
      [:.col.s3
        [:.card.blue-grey.darken-1
         [:.card-content.white-text
          [:span.card-title "Produkter"]
          (visa-alla-produkter db) [:br]
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
          (visa-alla-hyllor db) [:br]
          [:.card-action [:a {:href "#"} "ok"] ]]]]]])
