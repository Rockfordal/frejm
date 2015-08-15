(ns rente.client.transactions
  (:require
    [rente.client.ws :as ws]
    [rente.client.dom :as dom :refer [q by-id toast]]
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

(defn add-success [data conn]
  (let [id (:db/id data)
        entity (:entity data)
        query  (into {:db/add id} entity)]
    (if id
    (do
      (d/transact! @conn [query])
      (toast "post har lagts till!")
      (reset-company))
    (toast (str "kunde inte lägga till" data)))))

(defn add [conn]
  (let [data {:entity (db-company)}]
    (ws/add data add-success conn)))

(defn del-success [data conn]
  (let [id (:db/id data)]
    (if id (do
      (d/transact! @conn [[:db.fn/retractEntity id]])
      (toast "post raderad!"))
    (toast (str "kunde inte radera" id)))))

(defn delete [eid conn]
   (ws/del eid :company del-success conn))
