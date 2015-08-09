(ns rente.dbseed)

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

(def companies
  [{:type :company
          :company/name    "Baker Tilly"
          :company/orgnr   "483938-1134"
          :company/phone   "08-42424"}

   {:type :company
          :company/name    "Yellow-backed duiker"
          :company/orgnr   "483838-2424"
          :company/phone   "08-48398"}])

(def projects
  [{:type :project
          :project/name    "Baker Tilly"
          :project/description  "Första"}

   {:type :project
          :project/name    "nytt projekt"
          :project/description ""}])

(defn seed-data []
  (concat
    products shelfs
    projects companies))
