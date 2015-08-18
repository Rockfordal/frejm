(ns rente.client.fixtures)

(def blank
  [[:db/add 0 :system/group :all]])

(def data [
  [:db/add 0 :system/group :all]
  {:db/id -1 :product/name "Mjölk"}
  {:db/id -2 :product/name "Ost"}
  {:db/id -3 :product/name "Korv"}

  {:db/id -1 :shelf/name "C1"}
  {:db/id -2 :shelf/name "C2"}

  {:db/id -1
   :item/quantity 10
   :item/shelf -1
   :item/product -1}

  {:db/id -2
   :item/quantity 20
   :item/shelf -1
   :item/product -2}

  {:db/id -4
   :item/quantity 15
   :item/shelf -2
   :item/product -3}

  {:db/id -4
   :item/quantity 5
   :item/shelf -1
   :item/product -3}
  ])
