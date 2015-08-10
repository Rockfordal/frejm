(ns rente.system
  (:require [com.stuartsierra.component :as component :refer [system-map using]]
            [rente.ws :refer [new-ws]]
            [rente.server :refer [new-http-server]]
            [rente.db :refer [new-datomic]]
            [rente.core :refer [new-app]]))

(defn vanlig [config]
  (let [{:keys [port dburi]} config]
    (system-map
     :datomic       (new-datomic dburi)
     :ws-conn       (new-ws)
     :http-server   (using (new-http-server port) [:ws-conn])
     ;:app           (using (new-app)              [:ws-conn])
     :app           (new-app)
     )))

(defn light [config]
  (let [{:keys [port dburi]} config]
    (system-map
     :datomic       (new-datomic dburi)
     ;:ws-conn       (new-ws)
     ;:http-server   (using (new-http-server port) [:ws-conn])
     :app           (new-app)
     )))
