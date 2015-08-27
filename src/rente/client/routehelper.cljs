(ns rente.client.routehelper
  (:require
    [secretary.core :refer [IRenderRoute render-route encode-query-params]]))


(defn go-route [this params]
  (str (render-route this) "?"
    (encode-query-params params)))

(defrecord Company [id]
  IRenderRoute
  (render-route [_]           (str "#company/" id))
  (render-route [this params] (go-route this params)))

(defrecord Project [id]
  IRenderRoute
  (render-route [_]           (str "#project/" id))
  (render-route [this params] (go-route this params)))

(defn companyroute [company]
  (render-route (Company. (:db/id company))))

(defn projectroute [project]
  (render-route (Project. (:db/id project))))

(defn newprojectroute []
  (render-route "/newproject"))

(defn newcompanyroute []
  (render-route "/newcompany"))
