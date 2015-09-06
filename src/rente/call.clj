(ns rente.call
  (:require [datomic.api :as d]
            [rente.db :refer [conn]]
            [rente.dbseed :refer [callcenter]]
            [rente.projects :as projects]
            [rente.companies :as companies]
            [rente.activities :as activities]
            [rente.sni :as sni]))


(defn seed []
  (d/transact (conn) callcenter))

(defn delete-all []
  (activities/delete-all)
  (companies/delete-all)
  (projects/delete-all)
  (sni/delete-all))
