(ns rente.server
  (:require [clojure.tools.logging :as log]
            [com.stuartsierra.component :as component]
            [ring.middleware.edn :refer [wrap-edn-params]]
            [compojure.core :refer [routes GET POST PUT DELETE]]
            [compojure.route :as route]
            ;[ring.util.response :as resp]
            [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
            [ring.middleware.resource :refer (wrap-resource)]
            [org.httpkit.server :refer (run-server)]
            [rente.db :as db]
            [rente.ws :as ws]))


(defn edn-res [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn"}
   :body (pr-str data)})

(defn handler [ajax-post-fn ajax-get-or-ws-handshake-fn]
  (routes
   (GET  "/"     _   (clojure.java.io/resource "index.html"))
   (GET  "/chsk" req (ajax-get-or-ws-handshake-fn req))
   (POST "/chsk" req (ajax-post-fn req))
   (GET "/getstate" _ (edn-res (db/get-state)))
   (route/not-found "<h1>Sidan kan tyvärr inte hittas</h1>")))

(defn wrap-dir-index [handler]
  (fn [req]
    (handler
     (update-in req [:uri]
       #(if (= "/" %) "/index.html" %)))))

(defn app [handler]
  (let [ring-defaults-config
        (-> site-defaults
            (assoc-in
             [:security :anti-forgery]
             {:read-token (fn [req] (-> req :params :csrf-token))})
            (assoc-in [:static :resources] "public"))]
    (-> handler
        (wrap-defaults ring-defaults-config)
        (wrap-dir-index)
        (wrap-resource "/META-INF/resources")
        (wrap-edn-params))))

(defrecord HttpServer [port ws-conn server-stop]
  component/Lifecycle
  (start [component]
    (if server-stop
      component
      (let [component (component/stop component)
            {:keys [ajax-post-fn ajax-get-or-ws-handshake-fn]}
            (ws/ring-handlers ws-conn)
            handler (handler ajax-post-fn ajax-get-or-ws-handshake-fn)
            server-stop (run-server (app handler) {:port port})]
        (log/debug "HTTP server startad")
        (assoc component :server-stop server-stop))))
  (stop [component]
    (when server-stop (server-stop))
    (log/debug "HTTP server stoppad")
    (assoc component :server-stop nil)))

(defn new-http-server [port]
  (map->HttpServer {:port port}))
