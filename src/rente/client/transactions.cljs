(ns rente.client.transactions
  (:require
    [rente.client.ws :as ws]
    [rente.client.queries :refer [find-by-projectname find-by-snicode]]
    [rente.client.dom :as dom :refer [q by-id toast get-value]]
    [rente.client.struct :refer [db-move-company db-company db-project db-item safe-company]]
    [datascript.core :as d]))


(defn update-cb [data conn]
  (let [entity (:entity data)
        msg (:message data)]
    (if msg
      (toast (str "kunde inte lägga till" data msg))
      (d/transact! @conn [entity]))))

(defn add-cb [data conn]
  (let [id (:db/id data)
        entity (:entity data)
        query  (into {:db/id id} entity)]
    (if id
      (d/transact! @conn [query])
      (toast (str "kunde inte lägga till" data)))))

(defn add-project [conn]
  (let [data {:entity (db-project)}]
  (ws/add data add-cb conn)))

(defn add-item [conn itemdata]
  (let [data {:entity (db-item itemdata)}]
    (println "ws/add data: " data)
    (ws/add data add-cb conn)))

(defn update-project [id conn]
  (let [entity {:entity (assoc (db-project) :db/id id)}]
    (println "uppdaterar projekt:" entity)
  (ws/upd entity update-cb conn)))

(defn del-success [data conn]
  (let [id (:db/id data)]
    (if id (do
      (d/transact! @conn [[:db.fn/retractEntity id]])
      (toast "post raderad!"))
    (toast (str "kunde inte radera" id)))))

(defn delete-id [id conn]
  (ws/del id :company del-success conn))

(defn delete [object conn]
  (let [id (:db/id object)]
    (delete-id id conn)))
