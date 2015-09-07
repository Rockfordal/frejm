(ns rente.call
  (:require [datomic.api :as d]
            [rente.db :refer [conn create!]]
            [rente.dbseed :refer [calldata snidata]]
            [rente.projects :as projects]
            [rente.companies :as companies]
            [rente.activities :as activities]
            [rente.sni :as sni]))


(defn seed []
  (for [entry snidata]
    (create! entry))
  (d/transact (conn) calldata))

(defn delete-all []
  (activities/delete-all)
  (companies/delete-all)
  (projects/delete-all)
  (sni/delete-all))
