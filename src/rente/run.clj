(ns rente.run
  (:gen-class)
  (:require [clojure.tools.logging :as log]
            [com.stuartsierra.component :as component]
            [rente.config :as config]
            [rente.system :as system]))

(defn -main [& args]
  (let [config (config/get-config)]
    (component/start (system/vanlig config))
    (log/info "Frejm har startats")))
