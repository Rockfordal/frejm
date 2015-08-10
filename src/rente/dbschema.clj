(ns rente.dbschema
  (:require [datomic-schema.schema :as s]))

(def parts [(s/part "frejm")])

(def schema
  [(s/fields
     [type        :keyword :indexed])

;; Sortiment
;; --------------------------------
   (s/schema product (s/fields
     [name        :string :indexed]
     [price       :string :indexed]))

   (s/schema item (s/fields
      [quantity   :long :indexed]
      [shelf      :ref]
      [product    :ref]))

   (s/schema shelf (s/fields
     [name        :string :indexed]
     [location    :string :indexed]))

;; Callcenter
;; --------------------------------
   (s/schema project (s/fields
     [name        :string :indexed]
     [description :string :indexed]))

   (s/schema company (s/fields
     [name        :string :indexed]
     [orgnr       :string :indexed]
     [phone       :string :indexed]))
  ])

(defn get-schema []
  (concat (s/generate-parts parts)
          (s/generate-schema schema)))
