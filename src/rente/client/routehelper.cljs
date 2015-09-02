(ns rente.client.routehelper
  (:require
    [secretary.core :refer [IRenderRoute render-route encode-query-params]]))


(defn go-route [this params]
  (str (render-route this) "?"
    (encode-query-params params)))


;; --- Company ---
(defrecord Company [id]
  IRenderRoute
  (render-route [_]           (str "#company/" id))
  (render-route [this params] (go-route this params)))

(defn companyroute [company]
  (render-route (Company. (:db/id company))))

(defn newcompanyroute []
  (render-route "/newcompany"))


;; --- Projekt ---
(defrecord Project [id]
  IRenderRoute
  (render-route [_]           (str "#project/" id))
  (render-route [this params] (go-route this params)))

(defn projectroute [project]
  (render-route (Project. (:db/id project))))

(defn newprojectroute []
  (render-route "/newproject"))


;; --- Product ---
(defrecord Product [id]
  IRenderRoute
  (render-route [_]           (str "#product/" id))
  (render-route [this params] (go-route this params)))

(defn productroute [product]
  (render-route (Product. (:db/id product))))

(defn newproductroute []
  (render-route "/newproduct"))
