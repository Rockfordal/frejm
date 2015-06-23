(ns rente.client.db)

(def hardcodedphones
  [{   :age "0",
        :id "motorola-xoom-with-wi-fi",
        :imageUrl "img/phones/motorola-xoom-with-wi-fi.0.jpg",
        :name "Motorola XOOM\u2122 with Wi-Fi",
        :snippet "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
    },
    {
        :age "1",
        :id "motorola-xoom",
        :imageUrl "img/phones/motorola-xoom.0.jpg",
        :name "MOTOROLA XOOM\u2122",
        :snippet "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
    }])

(def default-db
  { :name "re-frame"
   :test {
          :name "000"
          :desc "noll"}
    :people {
             :firstname "Nils"
             :lastname  "Ohlsson"
             :age 45}
})

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
