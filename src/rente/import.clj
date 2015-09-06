(ns rente.import
  (:require [rente.db :as db :refer [conn]]
            [rente.queries :as q]
            [datomic.api :as d]
            [clojure.data.csv :as csv]
            [clojure.java.io :as io]))


(defn findsni [sni]
  (ffirst (rente.sni/by-code sni)))

(defn findproject [sni]
  (ffirst (rente.projects/by-name sni)))

(defn get-data []
  (with-open [in-file (io/reader "tomaslarsson.csv")]
    (doall (csv/read-csv in-file))))

(def rubriker
  [:company/orgnr       :company/name        :company/phone
   :company/email       :company/employees   :company/snicode
   :company/snitext     :company/contact     :company/contacttype
   :company/visitadr    :company/zipcode     :company/postal])
  ;homepage snicode info workphone oms othercontact salesman marketingdir vd project

(defn rubrik [] (first (get-data)))
(defn enrad [] (second (get-data)))
(defn rowmap [rad] (zipmap rubriker rad))

(defn datatypes [indata]
  (assoc indata
    :company/zipcode   (read-string (:company/zipcode   indata))
    :company/orgnr     (read-string (:company/orgnr     indata))
    :company/employees (read-string (:company/employees indata))
    :company/snicode   (read-string (:company/snicode   indata))))

(defn datarefs [indata]
  (assoc indata
    :company/sni     (findsni  (:company/snicode indata))
    :company/project (findproject "ibm")))

(defn filterdata [indata]
  (dissoc indata
    :company/snitext :company/snicode :company/contact :company/contacttype :company/email))

(defn importcompany [rad]
  (-> rad
      (datatypes)
      (datarefs)
      (filterdata)
      (rente.companies/create!)))

(defn import-companies []
  (let [rows (rest (get-data))]
    (doseq [row rows]
      (do
      ;(print (rowmap row))
      (print ".")
      (importcompany (rowmap row))
      ))))

(defn importera []
  ;(rente.companies/delete-all)
  ;(Thread/sleep 5000)
  ;(import-companies)
  (count (rente.companies/get-all)))

