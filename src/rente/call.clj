(ns rente.call
  (:require [rente.companies :as companies]
            [rente.projects :as projects]
            [rente.sni :as sni]))


(defn delete-all []
  (companies/delete-all)
  (projects/delete-all)
  (sni/delete-all))
