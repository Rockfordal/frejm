(ns rente.dbseed)

;    [;; produkt
;     {:db/id #db/id [:db.part/user -100]
;      :product/name "Ägg 6p"}

;     ; shelf
;     {:db/id #db/id [:db.part/user -200]
;      :shelf/name "C1"}

     ; item
;     {:db/id #db/id [:db.part/user -300]
;      :item/quantity 10
;      :item/product #db/id [:db.part/user -100]
;      :item/shelf #db/id [:db.part/user -200]}
;     ]

;; --- Sortiment ---
(def products
  [{:type :product
          :product/name    "Filmjölk"
          :product/price   "49.90"}
  {:type  :product
          :product/name    "Prickig Korv"
          :product/price   "25"}])

(def shelfs
  [{:type :shelf
          :shelf/name      "C01"
          :shelf/location  "Rum 1"}
   {:type :shelf
          :shelf/name      "B01"
          :shelf/location  "Rum 27"}])

(def items
  [{:type :item
          :item/quantity 25}
   {:type :item
          :item/quantity 15}])

;; Callcenter
;; --------------------------------
(def companies
  [{:type :company
          :company/name    "Baker Tilly"
          :company/orgnr   "483938-1134"
          :company/phone   "08-42424"
          :company/email   "tilly@billy.lab"
          :company/vd      "Johanesburg freidricht"}

   {:type :company
          :company/name    "Yellow-backed duiker"
          :company/orgnr   "483838-2424"
          :company/phone   "08-48398"
          :company/email   "yo@do.lab"
          :company/vd      "Greiger Wolfenstein"}])

(def projects
  [{:type :project
          :project/name  "Baker Tilly"
          :project/desc  "Första"}

   {:type :project
          :project/name  "nytt projekt"
          :project/desc  ""}])

(def aktiviteter
  [{:type :aktivitet
    :aktivitet/status 1}
   {:type :aktivitet
    :aktivitet/status 15}])

(defn seed-data []
  (concat
    products shelfs items
    projects companies aktiviteter))
