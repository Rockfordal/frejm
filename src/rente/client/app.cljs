(ns rente.client.app
  (:require
    ;[clojure.set :as set]
    [clojure.string :as str]
     cljs.reader
    [datascript :as d]
    [rum :include-macros true]
    [cognitect.transit :as transit]
    [rente.client.state :as state :refer [app-state schema]]
    [rente.client.routes :as routes]
    [rente.client.queries :as q]
    [rente.client.dom :as dom]
    [rente.client.views.layout    :refer [navbar]]
    [rente.client.views.html2ts   :refer [html2ts]]
    [rente.client.views.sortiment :refer [shelf_v item_v product_v visa-alla-produkter visa-alla-hyllor visa-sortiment sortiment_v]]
    [rente.client.util :as u])
  (:require-macros
   [rente.macros :refer [profile]]))

(declare render persist)

(defonce conn (d/create-conn schema))

(defn reset-conn! [db]
  (reset! conn db)
  (render db))

(defn fixturer []
  (d/transact! conn u/fixtures))

(def module-map
  {:html2ts   html2ts
   :sortiment sortiment_v})

(rum/defc content [module db]
  (let [module-comp (module module-map)]
    [:div.content
      (module-comp db)]))

(rum/defc canvas < rum/reactive [db]
  [:div
   (navbar
     (:module        (rum/react app-state))
     (:modules       (rum/react app-state)))
   (content (:module (rum/react app-state)) db)])

(defn render
  ([] (render @conn))
  ([db]
   (profile "render"
     (rum/mount (canvas db) (dom/by-id "app")))))

;; re-render on every DB change
(d/listen! conn :render
  (fn [tx-report]
    (render (:db-after tx-report))))

;; log all transactions (prettified)
(defn logga []
  (d/listen! conn :log
    (fn [tx-report]
      (let [tx-id  (get-in tx-report [:tempids :db/current-tx])
            datoms (:tx-data tx-report)
            datom->str (fn [d] (str (if (.-added d) "+" "−")
                                 "[" (.-e d) " " (.-a d) " " (pr-str (.-v d)) "]"))]
        (println
          (str/join "\n" (concat [(str "tx " tx-id ":")] (map datom->str datoms))))))))

(defn ^:export main []
  ;(rensa_ls)
  (routes/app-routes)
  (fixturer)
  (logga))
