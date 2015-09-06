(ns rente.dbschema
  (:require [datomic-schema.schema :as s]))


(def parts [(s/part "frejm")])

(def schema
  [(s/fields
     [type        :keyword :indexed])

;; --- SNI ---
   (s/schema sni (s/fields
     [code        :long   :unique-value]
     [name        :string :unique-value]))

;; -- Sortiment --
   (s/schema product (s/fields
     [artnr       :long   :unique-value]
     [name        :string :indexed]
     [price       :string :indexed]))

   (s/schema item (s/fields
      [quantity   :long :indexed]
      [shelf      :ref]
      [product    :ref]))

   (s/schema shelf (s/fields
     [name        :string :indexed]
     [location    :string :indexed]))

;; --- Callcenter ---
   (s/schema project (s/fields
     [name        :string :unique-value]
     [desc        :string :indexed]))

   (s/schema company (s/fields
     [project      :ref]
     [sni          :ref]
     [orgnr        :long   :unique-value]
     [name         :string :unique-value]
     [phone        :string :indexed]
     [email        :string :indexed]
     [employees    :long   :indexed]
     [contact      :string :indexed]
     [contacttype  :string :indexed]

     [homepage     :string :indexed]
     [visitadr     :string]
     [zipcode      :long]
     [postal       :string]

     [info         :string :indexed]
     [workphone    :string :indexed]
     [oms          :string :indexed]
     [othercontact :string :indexed]

     [salesman     :string :indexed] ; FC Försäljningschef
     [marketingdir :string :indexed] ; MC (marknadschef)
     [vd           :string :indexed] ; behövs?
     [snicode      :long]))

   (s/schema aktivitet (s/fields
     [status  :enum [:pending :active :inactive :cancelled]]
     [project :ref]
     [company :ref]))
     ;; note
     ;; datum
  ])

(defn get-schema []
  (concat (s/generate-parts parts)
          (s/generate-schema schema)))
