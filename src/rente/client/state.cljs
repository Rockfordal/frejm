(ns rente.client.state)

(defonce app-state
  (atom {:module :html2ts
         :modules [{:key :html2ts   :title "html2ts"   :url "#html2ts"}
                   {:key :sortiment :title "Sortiment" :url "#sortiment"}
                   ;{:key :company   :url "#company"   :title "Företag"}
                   ]}))

(def schema  {:item/shelf   {:db/valueType :db.type/ref}
              :item/product {:db/valueType :db.type/ref}})
