(ns rente.config
  (:require [environ.core :refer [env]]))

(defn get-config []
  {:port (Integer/parseInt (or (env :port) "8080"))
   :dburi (str (or (env :dburi)
                 "datomic:free://localhost:4334/frejm"))})
