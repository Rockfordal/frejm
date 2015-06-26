(ns rente.system
  (:require [com.stuartsierra.component :as component]
            [rente.ws :as ws]
            [rente.server :as server]
            [rente.core :as core]))

(defn system [config]
  (component/system-map
   :ws-connection
   (ws/new-ws-connection)
   :http-server
   (component/using (server/new-http-server (:port config)) [:ws-connection])
   :app
   (component/using (core/new-app) [:ws-connection])))
