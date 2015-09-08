(ns rente.client.struct
  (:require
   [schema.core :as s :include-macros true]
   [cljs.reader :as reader :refer [read-string]]
   [rente.client.dom :as dom :refer [get-value]]))


(def Company
  {:company/name         s/Str
   :company/orgnr        s/Int
   :company/email        s/Str
   :company/phone        s/Str
   :company/vd           s/Str
   :company/contact      s/Str
   :company/contacttype  s/Str
   :company/homepage     s/Str
   :company/visitadr     s/Str
   :company/zipcode      s/Int
   :company/postal       s/Str
   :company/oms          s/Str
   :company/employees    s/Int
   :company/othercontact s/Str
   ;:company/snicode      s/Str
   ;:company/snitext      s/Str
   :type                 s/Keyword}) ; s/Num

(defn extract-project []
  (when-let [name (get-value "project-name")]
    {:name   name
     :desc (get-value "project-desc")}))

(defn extract-company []
  (when-let [name  (get-value "company-name")]
    {:name   name
     :orgnr        (get-value "company-orgnr")
     :email        (get-value "company-email")
     :phone        (get-value "company-phone")
     :vd           (get-value "company-vd")
     :contact      (get-value "company-contact")
     :contacttype  (get-value "company-contacttype")
     :homepage     (get-value "company-homepage")
     :visitadr     (get-value "company-visitadr")
     :zipcode      (get-value "company-zipcode")
     :postal       (get-value "company-postal")
     :oms          (get-value "company-oms")
     :employees    (get-value "company-employees")
     :othercontact (get-value "company-othercontact")
     :snicode      (get-value "company-snicode")
     :snitext      (get-value "company-snitext")
     }))

(defn db-project []
  (let [project (extract-project)]
  {:type :project
   :project/name (:name project)
   :project/desc (:desc project)}))

(defn db-item [itemdata]
  {:type :item
    :item/shelf    (:shelfid   itemdata)
    :item/product  (:productid itemdata)
    :item/quantity (:quantity  itemdata)})

(defn db-company []
  (let [company (extract-company)]
    {:type :company
    :company/name         (:name         company)
    :company/orgnr        (read-string (:orgnr company))
    :company/email        (:email        company)
    :company/phone        (:phone        company)
    :company/vd           (:vd           company)
    :company/contact      (:contact      company)
    :company/contacttype  (:contacttype  company)
    :company/homepage     (:homepage     company)
    :company/visitadr     (:visitadr     company)
    :company/zipcode      (read-string (:zipcode company))
    :company/postal       (:postal       company)
    :company/oms          (:oms          company)
    :company/employees    (read-string (:employees company))
    :company/othercontact (:othercontact company)
    :company/snicode      (:snicode      company)
    :company/snitext      (:snitext      company)}))

(defn filtered-company [c]
  (let [company (atom c)]
    ;(println (:company/zipcode company))
    ;(println (number? (:company/employees company)))
    (when-not (number? (:company/employees c))
      (swap! company assoc :company/employees 0))
    (when-not (number? (:company/orgnr c))
      (swap! company assoc :company/orgnr 0))
    (when-not (number? (:company/zipcode c))
      (swap! company assoc :company/zipcode 0))
    (swap! company dissoc :company/snitext :company/snicode)
    @company))

(defn safe-company []
  (let [company (db-company)
        entity  (filtered-company company)
        emp     (:company/employees company)]
    (println "val: " emp)
    (println "num? " (number? emp))
    (println "NaN?" (js/isNaN emp))
    (println "contains? " (contains? company :company/employees))
    ;(s/validate Company entity)
    entity))

(defn db-move-company [db-company id projid]
  {:entity (merge (db-company)
                  {:db/id id
                  :company/project projid})})
