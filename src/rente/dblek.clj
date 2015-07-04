(ns rente.query
  (:refer-clojure :exclude [read])
  (:require [datomic.api :as d]
            [rente.db :as db]
            [rente.animals :as animals]))

(defn find-by-serial-number [db serial-number]
  (some->> serial-number
    (d/q
      [:find ?mailing
       :in $ ?serial-number
       :where [?mailing :mailing/serial-number ?serial-number]]
      db)
    ffirst))
