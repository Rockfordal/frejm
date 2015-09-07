(ns user
  (:require
   [clojure.java.io :as io]
   ;[clojure.java.javadoc :refer [javadoc]]
   ;[clojure.reflect :refer [reflect]]
   ;[clojure.repl :refer [apropos dir doc find-doc pst source]]
   ;[clojure.set :as set]
   ;[clojure.string :as str]
   ;[clojure.test :as test]
   [com.stuartsierra.component :as component]
   [clojure.tools.namespace.repl :refer [refresh refresh-all]]
   [rente.config :as config]
   [rente.run]
   [rente.companyimport :as import]
   [rente.system]))

(def system nil)

(defn init
  ;([] (alter-var-root #'system (fn [_] (system/vanlig (config/get-config)))))
  ([]        (init rente.system/vanlig))
  ([makesys] (alter-var-root #'system (fn [_] (makesys (config/get-config))))))

(defn start []
  (alter-var-root #'system
    component/start))

(defn stop []
  (alter-var-root #'system
    component/stop))

(defn stop []
  (alter-var-root #'system
    (fn [s] (when s (component/stop s)))))

(defn run []
  (init)
  (start))

;(defn reset []
;   (stop)
;   (refresh :after 'user/run))
