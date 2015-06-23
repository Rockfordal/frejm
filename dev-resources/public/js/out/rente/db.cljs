(ns rente.db)

(def default-db
  { :name "re-frame"
   :test {
          :name "000"
          :desc "noll"}
    :people {
             :firstname "Nils"
             :lastname  "Ohlsson"
             :age 45}})

(defonce state (atom {:title "Bas",
                                   :counter 0,
                                   :re-render-flip false,
                                   :doc {} :saved? false,
                                   :current-page :nil,
                                   :currentpage "-",
                                   :current-project "Bagar Troll",
                                   :current-company {:id 1,
                                                                 :name "Test AB",
                                                                 :orgnr "12345-6789",
                                                                 :note "Mja"}
                                   :search-input "",
                                   :order-prop "name",
                                   :a 1 }))

(defn set-value! [id value]
  (swap! state assoc :saved? false)
  (swap! state assoc-in [:doc id] value))

(defn get-value [id]
  (get-in @state [:doc id]))

(defn put! [k v]
  (swap! state assoc k v))
