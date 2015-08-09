(ns rente.dbschema
  (:require [datomic-schema.schema :as s]))

(def parts [(s/part "frejm")])

(def schema
  [(s/fields
     [type     :keyword :indexed])

   (s/schema product
    (s/fields
     [name     :string :indexed]
     [price    :string :indexed]))

   (s/schema shelf
    (s/fields
     [name     :string :indexed]
     [location :string :indexed]))

   (s/schema project
    (s/fields
     [name        :string :indexed]
     [description :string :indexed]))

   (s/schema company
    (s/fields
     [name     :string :indexed]
     [orgnr    :string :indexed]
     [phone    :string :indexed]))
  ])

(defn get-schema []
  (concat (s/generate-parts parts)
          (s/generate-schema schema)))
