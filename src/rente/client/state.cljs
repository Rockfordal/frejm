(ns rente.client.state
  (:require [rum.core :as r]
            [datascript.core :as d]))


(defonce ^:private state
  (atom {:schema  {:item/shelf   {:db/valueType :db.type/ref}
                   :item/product {:db/valueType :db.type/ref}}
         :module :sortiment
         :moduleid nil
         :activeproject nil
         :activecompany nil
         :activeproduct nil
         :activeshelf nil
         ;:new-company {:company/name "1" :company/orgnr "2" :company/phone "3" :company/email "4"}
         :modules [{:key :sortiment   :title "Sortiment" :url "#sortiment"}
                   {:key :project     :title "Projekt"   :url "#project"}
                   {:key :company     :title "Företag"   :url "#company"}
                   {:key :call        :title "Samtal"    :url "#call"}
                   {:key :activity    :title "Aktivitet" :url "#activity"}
                   {:key :login       :title "Logga in"  :url "#login"}]}))

(def conn
  (atom (d/create-conn (:schema @state))))

(defn reset-state! []
  (reset! state nil))

(defn get-state
  ([]         (r/react state))
  ([key] (key (r/react state))))

(defn get-currententity [db]
  (d/touch (d/entity db (get-state :moduleid))))

(defn get-moduleid []
  (get-state :moduleid))

(defn update-state! [k v & kvs]
 (swap! state assoc k v kvs))

(defn find-first-project [db]
  (let [id (ffirst (d/q '[:find ?p :where [?p :project/name]] db))]
    (if id
     (d/touch (d/entity db id)))))

(defn find-first-company [db]
  (let [id (ffirst (d/q '[:find ?p :where [?p :company/name]] db))]
    (if id
     (d/touch (d/entity db id)))))

(defn set-project [db]
  (let [project (find-first-project db)]
    (swap! state assoc :activeproject project)))

(defn set-company [db]
  (let [company (find-first-company db)]
    (swap! state assoc :activecompany company)))
