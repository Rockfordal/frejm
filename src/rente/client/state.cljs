(ns rente.client.state
  (:require [rum :as r]))

(defonce ^:private state
  (atom {:schema  {:item/shelf   {:db/valueType :db.type/ref}
                   :item/product {:db/valueType :db.type/ref}}
         :module :sortiment
         :modules [{:key :sortiment :title "Sortiment" :url "#sortiment"}
                   {:key :company   :title "Företag"   :url "#company"}
                   {:key :login     :title "Logga in"  :url "#login"}]}))

(defn reset-state! [] (reset! state nil))

(defn get-state
  ([] (r/react state))
  ([key] (key (r/react state))))

(defn update-state! [k v & kvs]
 (swap! state assoc k v kvs))
