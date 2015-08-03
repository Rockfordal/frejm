(ns rente.client.views.sortiment
  (:require
    [datascript :as d]
    [clojure.string :as str]
    ;[rente.client.queries :as q]
    [rum :include-macros true]))


(rum/defc shelf_v [shelf]
  [:.product
    [:span.id   (:db/id shelf)]
    [:span.name (:shelf/name shelf)]])

(rum/defc item_v [item product shelf]
  [:div
    [:span (:db/id item)]           [:span " "]
    [:span (:item/quantity item)]   [:span " "]
    [:span (:product/name product)] [:span " "]
    [:span (:shelf/name shelf)]])

(rum/defc product_v [product]
  [:.product
    [:span.id   (:db/id product)]
    [:span.name (:product/name product)]])

(rum/defc visa-alla-produkter [db]
  [:div
    (for [[eid] (sort (d/q '[:find ?e
                             :where [?e :product/name]]
                             db))]
      (rum/with-props product_v (d/entity db eid) :rum/key [eid]))]) ; tills rum fixat bug

(rum/defc visa-alla-hyllor [db]
  [:div
   (for [[eid] (sort (d/q '[:find ?e
                            :where [?e :shelf/name]]
                            db))]
      (rum/with-props shelf_v (d/entity db eid) :rum/key [eid]))]) ; tills rum fixat bug

(rum/defc visa-sortiment [db]
  [:div
   (for [[item product shelf]
         (d/q '[:find ?item ?product ?shelf
                :in $ ?shelfname :where
                      [?shelf :shelf/name   ?shelfname]
                      [?item  :item/shelf   ?shelf]
                      [?item  :item/product ?product]]
                      db "C1")]
       (rum/with-props item_v (d/entity db item) (d/entity db product) (d/entity db shelf) ; tills rum fixat bug
       :rum/key [item]))])

(rum/defc sortiment_v [db]
  [:div.sortiment
    [:.main-view.row
      [:div.col.s3
        [:div.card.blue-grey.darken-1
         [:div.card-content.white-text
          [:span.card-title "Produkter"]
          (visa-alla-produkter db) [:br]
          [:div.card-action [:a {:href "#"} "ok"] ]]]]
      [:div.col.s3
        [:div.card.blue-grey.darken-1
         [:div.card-content.white-text
          [:span.card-title "Sortiment"]

            ;(let [db (filtered-db db)]
          (visa-sortiment db)
          ;)
         [:br]
          [:div.card-action [:a {:href "#"} "ok"] ]]]]
      [:div.col.s3
        [:div.card.blue-grey.darken-1
         [:div.card-content.white-text
          [:span.card-title "Hyllor"]
          (visa-alla-hyllor db) [:br]
          [:div.card-action [:a {:href "#"} "ok"] ]]]]
      ]
      ;(filter-pane db)
      ;(let [db (filtered-db db)]
       ; (list
          ;(overview-pane db)
          ;(todo-pane db) ;   ) ;  )
   ;(if (= @page :home) ;(add-view) ;)
   ;(if (= @page :company) (edit-view))
     ;(history-view db)
     ])
