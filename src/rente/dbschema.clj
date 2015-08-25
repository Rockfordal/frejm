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
     [desc        :string :indexed]))

   (s/schema company (s/fields
     [project      :ref]
     [name         :string :indexed]
     [orgnr        :string :indexed]
     [phone        :string :indexed]
     [email        :string :indexed]
     [vd           :string :indexed]

     [employees    :string :indexed]
     [snikod       :string :indexed]
     [snitext      :string :indexed]
     [adr          :string :indexed]
     [postnr       :string :indexed]
     [ort          :string :indexed]
     [oms          :string :indexed]
     [salesman     :string :indexed] ;FC Försäljningschef
     [marketingdir :string :indexed] ;MC (marknadschef)
     [othercontact :string :indexed]))

   (s/schema aktivitet (s/fields
                    [status   :long :indexed]
                    [project  :ref]
                    [company  :ref]))
                    ;; note
                    ;; datum
  ])

(defn get-schema []
  (concat (s/generate-parts parts)
          (s/generate-schema schema)))
