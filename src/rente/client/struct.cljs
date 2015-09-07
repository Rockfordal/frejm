(ns rente.client.struct
  (:require
    [rente.client.dom :as dom :refer [get-value]]))


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
     :snicode       (get-value "company-snikod")
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
   :company/name         (:name    company)
   :company/orgnr        (:orgnr   company)
   :company/email        (:email   company)
   :company/phone        (:phone   company)
   :company/vd           (:vd      company)
   :company/contact      (:contact company)
   :company/contacttype  (:contacttype company)
   :company/homepage     (:homepage company)
   :company/visitadr     (:visitadr company)
   :company/zipcode      (js/parseInt (:zipcode company))
   :company/postal       (:postal company)
   :company/oms          (:oms     company)
   :company/employees    (:employees company)
   :company/othercontact (:othercontact company)
   :company/snicode      (:snicode company)
   :company/snitext      (:snitext company)
   }))

(defn db-move-company [db-company id projid]
  {:entity (merge (db-company)
                  {:db/id id
                  :company/project projid})})
