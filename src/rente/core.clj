(ns rente.core
  (:require [clojure.tools.logging :as log]
            [com.stuartsierra.component :as component]))

(defrecord App [ws-connection]
  component/Lifecycle
  (start [component]
    (log/debug "Application logic started")
    component)
  (stop [component]
    (log/debug "Application logic stopped")
    component))

(defn new-app []
  (map->App {}))

