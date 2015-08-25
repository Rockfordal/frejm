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
     :email (dom/value (by-id "company-email"))
     :vd    (dom/value (by-id "company-vd"))}))

(defn db-company []
  (let [company (extract-company)]
  {:type :company
   :company/name  (:name  company)
   :company/orgnr (:orgnr company)
   :company/phone (:phone company)
   :company/email (:email company)
   :company/vd    (:vd    company)}))

(defn extract-project []
  (when-let [name (dom/value (by-id "project-name"))]
    {:name   name
     :desc (dom/value (by-id "project-desc"))}))

(defn db-project []
  (let [project (extract-project)]
  {:type :project
   :project/name  (:name project)
   :project/desc  (:desc project)}))

(defn add-cb [data conn]
  (let [id (:db/id data)
        entity (:entity data)
        query  (into {:db/id id} entity)]
    (if id (d/transact! @conn [query])
    (toast (str "kunde inte lägga till" data)))))

(defn add-company [activeproject conn]
  (let [activepid (js/parseInt (:db/id activeproject))
        company (db-company)
        fullcompany (merge company {:company/project activepid})
        data {:entity fullcompany}]
    (ws/add data add-cb conn)))

(defn move-company [conn]
;  (when-let [projectname (dom/value (by-id "company-project"))]
 )

(defn add-project [conn]
  (let [data {:entity (db-project)}]
  (ws/add data add-cb conn)))

(defn update-cb [data conn]
  (let [entity (:entity data)
        msg (:message data)]
    (if msg
      (toast (str "kunde inte lägga till" data msg))
      (d/transact! @conn [entity]))))

(defn update-company [id conn]
  (let [entity {:entity (assoc (db-company) :db/id id)}]
  (ws/upd entity update-cb conn)))

(defn update-project [id conn]
  (let [entity {:entity (assoc (db-project) :db/id id)}]
    (println "uppdaterar projekt")
  (ws/upd entity update-cb conn)))

(defn del-success [data conn]
  (let [id (:db/id data)]
    (if id (do
      (d/transact! @conn [[:db.fn/retractEntity id]])
      (toast "post raderad!"))
    (toast (str "kunde inte radera" id)))))

(defn delete [object conn]
  (let [eid (:db/id object)]
   (ws/del eid :company del-success conn)))
