(ns rente.client.transactions
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require
    [rente.client.ws :as ws]
    [rente.client.dom :as dom :refer [q by-id]]
    ;[cljs-http.client :as http]
    ;[cljs.core.async :refer [<!]]
    [rente.client.dom :refer [toast]]
    [datascript :as d]))

(defn extract-company []
  (when-let [name (dom/value (by-id "company-name"))]
    {:name   name
     :orgnr (dom/value (by-id "company-orgnr"))
     :phone (dom/value (by-id "company-phone"))
     :email (dom/value (by-id "company-email"))}))

(defn reset-company []
  )

(defn db-company []
  {:type :company
   :company/name  (:name  (extract-company))
   :company/orgnr (:orgnr (extract-company))
   :company/phone (:phone (extract-company))
   :company/email (:email (extract-company))})

(defn add-success [result]
  (toast "företag lagt till!")
  (println result)
  (reset-company)
  )

(defn add []
  (let [result (ws/add {:entity (db-company)})
        msg (:message result)]
    (if (= nil msg)
      (add-success result)
      (println "fel vid add:")))
  )

(defn delete [eid conn]
   (ws/delete eid :company)

  ;(println "e:" e)
  ;(ws/delete eid :company)
  ;; (let [result (ws/delete eid :company)]
  ;;  (if (result)
  ;;   (do
  ;;     (d/transact! @conn [[:db.fn/retractEntity eid]])
  ;;     (toast "post raderad!"))
  ;;   ;(toast "kunde inte radera " eid)
  ;;   (println "kunde inte radera" eid)
  ;;   )
  )

 ;; (defn delete [eid conn]
 ;;  (go (let [response (<! (http/delete "/companies" {}))
 ;;            body     (:body response)
 ;;            status   (:status response)]
 ;;        (if (= 200 status) 
 ;;          (do
 ;;            (d/transact! @conn [[:db.fn/retractEntity eid]])
 ;;            (println "body: " body)
 ;;            (toast "post raderad!"))
 ;;          (do
 ;;            (toast (str "kunde inte radera:" status)))
 ;;          ))))
