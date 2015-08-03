(ns rente.client.state
  (:require
    [rum :include-macros true]))

;(defonce ^:private state
(defonce state
  (atom {:schema  {:item/shelf   {:db/valueType :db.type/ref}
                   :item/product {:db/valueType :db.type/ref}}
         :module :sortiment
         :modules [{:key :sortiment :title "Sortiment" :url "#sortiment"}
                   {:key :company   :title "Företag"   :url "#company"}
                   {:key :login     :title "Logga in"  :url "#login"}
                  ]}))


(def figgen (atom -70))

(defn reset-state! [] (reset! state nil))

(defn get-state
  ([] (rum/react state))
  ([key] (key (rum/react state))))

(defn update-state! [k v & kvs]
 (swap! state assoc k v kvs))
