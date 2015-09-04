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
     :phone        (get-value  "company-phone")
     :email        (get-value  "company-email")
     :vd           (get-value  "company-vd")
     :oms          (get-value  "company-oms")
     :employees    (get-value  "company-employees")
     :othercontact (get-value  "company-othercontact")
     :snikod       (get-value  "company-snikod")
     :snitext      (get-value  "company-snitext")}))

(defn db-project []
  (let [project (extract-project)]
  {:type :project
   :project/name (:name project)
   :project/desc (:desc project)}))

(defn db-item [shelfid productid quantity]
  {:type :item
    :item/shelf    shelfid
    :item/product  productid
    :item/quantity quantity})

(defn db-company []
  (let [company (extract-company)]
  {:type :company
   :company/name         (:name  company)
   :company/orgnr        (:orgnr company)
   :company/phone        (:phone company)
   :company/email        (:email company)
   :company/vd           (:vd    company)
   :company/oms          (:oms   company)
   :company/employees    (:employees company)
   :company/othercontact (:othercontact company)
   :company/snikod       (:snikod company)
   :company/snitext      (:snitext company)}))

(defn db-move-company [db-company id projid]
  {:entity (merge (db-company)
                  {:db/id id
                  :company/project projid})})
