(ns rente.core
  (:require [clojure.tools.logging :as log]
            [com.stuartsierra.component :as component]
            [rente.db :as db]))

(defrecord App [ws-connection]
  component/Lifecycle
  (start [component]
    (log/debug "Application logic started")
    component)
  (stop [component]
    (log/debug "Application logic stopped")
    component))

(defrecord Db []
  component/Lifecycle
  (start [component]
    (db/init)
    (log/info "Datomic ansluten")
    component)
  (stop [component]
    (db/close) 
    (log/info "Datomic nerkopplad")
    component))

(defn new-app []
  (map->App {}))

(defn new-datomic []
  (map->Db {}))
