(ns rente.client.transactions
  (:require
    [rente.client.ws :as ws]
    [rente.client.queries :refer [find-by-projectname]]
    [rente.client.dom :as dom :refer [q by-id toast]]
    [datascript :as d]))


(defn extract-company []
  (when-let [name (dom/value (by-id "company-name"))]
    {:name   name
     :orgnr (dom/value (by-id "company-orgnr"))
     :phone (dom/value (by-id "company-phone"))
     :email (dom/value (by-id "company-email"))
     :vd    (dom/value (by-id "company-vd"))
     :oms   (dom/value (by-id "company-oms"))}))

(defn db-company []
  (let [company (extract-company)]
  {:type :company
   :company/name  (:name  company)
   :company/orgnr (:orgnr company)
   :company/phone (:phone company)
   :company/email (:email company)
   :company/vd    (:vd    company)
   :company/oms   (:oms   company)}))

(defn extract-project []
  (when-let [name (dom/value (by-id "project-name"))]
    {:name   name
     :desc (dom/value (by-id "project-desc"))}))

(defn db-project []
  (let [project (extract-project)]
  {:type :project
   :project/name (:name project)
   :project/desc (:desc project)}))

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
          inkproj {:entity fullcompany}
          exproj  {:entity company}]
  (if activeproject
    (ws/add inkproj add-cb conn)
    (ws/add exproj  add-cb conn))))

(defn move-company-cb [msg conn]
  (let [entity (:entity msg)
        project (:company/project entity)
        name (:company/name entity)]
  (if (= project nil)
    (do
      (toast "Kunde inte sätta projekt!")
      (println "fel vid projektflytt: " msg))
    (do
      (d/transact! @conn [entity])
      (toast (str "Företaget " name " flyttades" ))))))

(defn move-company [id conn db]
  (when-let [projname (dom/value (by-id "company-project"))]
    (let [projid (find-by-projectname projname db)
          data {:entity (merge (db-company)
                               {:db/id id
                                :company/project projid})}]
      (ws/upd data move-company-cb conn))))

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
