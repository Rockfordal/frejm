(ns rente.sortiment
  (:require [rente.shelfs :as shelfs]
            [rente.items :as items]
            [rente.products :as products]))


(defn delete-all []
  (shelfs/delete-all)
  (products/delete-all))
