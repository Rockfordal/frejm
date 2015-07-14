(ns rente.client.ds
  (:require [datascript :as d]
            [cljs.reader]))

;; -- Datascript ---------------------------------------------------

(def dsschema {:aka {:db/cardinality :db.cardinality/many}})
(def conn (d/create-conn dsschema))

(d/transact! conn [ {:db/id -1
                     :name  "Rex"
                     :age   45
                     :aka   ["Maks Otto von Stirlitz", "Jack Ryan"]}
                    {:db/id -2
                     :name  "Spex"
                     :age   32
                     :aka   ["moo", "Jones"]}])

(def q-unique-dogs '[:find ?n ?e :where [?e :name ?n]])

(def q-some '[:find  ?n ?a
              :where [?e :aka "Maks Otto von Stirlitz"]
                     [?e :name ?n]
                     [?e :age  ?a]])

(comment
  (d/q q-some))

(defn get-dogs []
  "funkar ej"
  (map
    (fn [n] (println (str (n 0)))
      (d/q q-unique-dogs @conn))))
