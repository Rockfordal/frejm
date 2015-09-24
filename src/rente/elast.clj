(ns rente.elast
  (:require
   [clojurewerkz.elastisch.native :as es]
   ;[clojurewerkz.elastisch.rest :as esr]
   ;[clojurewerkz.elastisch.rest.document :as esd]
   ))


(defonce connection (atom nil))

(defn conn []
  (if (nil? @connection)
    (throw (RuntimeException. "Ingen elastic."))
    @connection))

(defn init []
  (let [esopts {"cluster.name" "elasticsearch_anders"}
        conn (es/connect  [["127.0.0.1" 9300]] esopts)]
    (reset! connection conn)
    true
    @connection
    ))
        
(defn create-index []
  (esi/create conn "frejm_dev")
  ;(esi/create conn "frejm_dev" :settings {"number_of_shards" 1})))
  )

