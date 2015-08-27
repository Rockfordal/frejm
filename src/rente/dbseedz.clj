(ns rente.dbseedz
  (:require [datomic.api :as d]))


(defn seedz [conn]
  (d/transact conn
    [;; produkt
     {:db/id #db/id [:db.part/user -100]
      :product/name "Ägg 6p"}

     ; shelf
     {:db/id #db/id [:db.part/user -200]
      :shelf/name "C1"}

     ; item
     {:db/id #db/id [:db.part/user -300]
      :item/quantity 10
      :item/product #db/id [:db.part/user -100]
      :item/shelf #db/id [:db.part/user -200]}
     ]))