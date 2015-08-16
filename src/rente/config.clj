(ns rente.config
  (:require [environ.core :refer [env]]))

(defn get-config []
  {:port   (Integer/parseInt (or (env :port) "3001"))
   :dburi  (or (env :dburi) "datomic:dev://localhost:4334/frejm")})

(defn hitta [x]
  (env x))
