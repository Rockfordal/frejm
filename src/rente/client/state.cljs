(ns rente.client.state
  (:require [rum :as r]
            [datascript :as d]))

(defonce ^:private state
  (atom {:schema  {:item/shelf   {:db/valueType :db.type/ref}
                   :item/product {:db/valueType :db.type/ref}}
         :companies [{:db/id 1 :company/name "ica"  :company/phone "0910-12345"}
                     {:db/id 2 :company/name "coop" :company/phone "0910-54321"}]
         :module :sortiment
         :modules [{:key :sortiment :title "Sortiment" :url "#sortiment"}
                   {:key :company   :title "Företag"   :url "#company"}
                   {:key :login     :title "Logga in"  :url "#login"}]}))

(def conn
  (atom (d/create-conn (:schema @state))))

(defn reset-state! [] (reset! state nil))

(defn get-state
  ([] (r/react state))
  ([key] (key (r/react state))))

(defn update-state! [k v & kvs]
 (swap! state assoc k v kvs))
