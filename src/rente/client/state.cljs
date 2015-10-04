(ns rente.client.state
  (:require [rum.core :as r]
            [datascript.core :as d]))


(defonce ^:private state
  (atom {:module :login
         :moduleid nil
         :modules [{:key :user         :title "User"       :url "#user"}
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
