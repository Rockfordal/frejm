(ns rente.client.transactions
  (:require
    [rente.client.ws :as ws]
    [rente.client.queries :refer [find-by-projectname]]
    [rente.client.dom :as dom :refer [q by-id toast get-value]]
    [rente.client.struct :refer [db-move-company db-company db-project db-item]]
    [datascript :as d]))


(defn add-cb [data conn]
  (let [id (:db/id data)
        entity (:entity data)
        query  (into {:db/id id} entity)]
    (if id
      (d/transact! @conn [query])
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
  (when-let [projname (get-value "company-project")]
    (let [projid (find-by-projectname projname db)
          data (db-move-company db-company id projid)]
      (ws/upd data move-company-cb conn))))

(defn add-project [conn]
  (let [data {:entity (db-project)}]
  (ws/add data add-cb conn)))

(defn add-item [conn shelfid productid quantity]
  (let [data {:entity (db-item shelfid productid quantity)}]
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
