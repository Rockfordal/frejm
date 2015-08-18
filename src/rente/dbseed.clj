(ns rente.dbseed)

;; Sortiment
;; --------------------------------
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
    }

   {:type :company
          :company/name    "Yellow-backed duiker"
          :company/orgnr   "483838-2424"
          :company/phone   "08-48398"
          :company/email   "yo@do.lab"
    }])

(def projects
  [{:type :project
          :project/name    "Baker Tilly"
          :project/description  "Första"}

   {:type :project
          :project/name    "nytt projekt"
          :project/description ""}])

(defn seed-data []
  (concat
    products shelfs items
    projects companies))
