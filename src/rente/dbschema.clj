(ns rente.dbschema
  (:require [datomic-schema.schema :as s]))


(def parts [(s/part "frejm")])

(def schema
  [(s/fields
     [type        :keyword :indexed])

;; --- SNI ---
   (s/schema sni (s/fields
     [code        :long :unique-value]
     [name        :string :indexed]))

;; -- Sortiment --
   (s/schema product (s/fields
     [artnr       :long :unique-value]
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
     [name        :string :indexed]
     [desc        :string :indexed]))

   (s/schema company (s/fields
     [project      :ref]
     [name         :string :indexed]
     [orgnr        :string :indexed]
     [phone        :string :indexed]
     [email        :string :indexed]
     [vd           :string :indexed]
     [oms          :string :indexed]
     [employees    :string :indexed]
     [othercontact :string :indexed]
     [snikod       :string :indexed]
     [snitext      :string :indexed]

     [salesman     :string :indexed] ;FC Försäljningschef
     [marketingdir :string :indexed] ;MC (marknadschef)
     [adr          :string :indexed]
     [postnr       :string :indexed]
     [ort          :string :indexed]))

   ;(s/schema aktivitet (s/fields
   ;                 [status   :long :indexed]
   ;                 [project  :ref]
   ;                 [company  :ref]))
                    ;; note
                    ;; datum
  ])

(defn get-schema []
  (concat (s/generate-parts parts)
          (s/generate-schema schema)))
