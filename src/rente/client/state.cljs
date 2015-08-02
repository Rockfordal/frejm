(ns rente.client.state
  (:require
    [rum :include-macros true]))

(defonce ^:private state
  (atom {:module :html2ts
         :modules [{:key :html2ts   :title "html2ts"   :url "#html2ts"}
                   {:key :sortiment :title "Sortiment" :url "#sortiment"}
                   ;{:key :company   :url "#company"   :title "Företag"}
                   ]}))

(def schema  {:item/shelf   {:db/valueType :db.type/ref}
              :item/product {:db/valueType :db.type/ref}})


(defn get-state [] (rum/react state))

(defn reset-state! [] (reset! state nil))

(defn update-state! [k v & kvs]
 (swap! state assoc k v kvs))
