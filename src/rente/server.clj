(ns rente.server
  (:require [clojure.tools.logging :as log]
            [com.stuartsierra.component :as component]
            [compojure.core :refer [routes GET POST]]
            [compojure.route :as route]
            [ring.util.response :as resp]
            [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
            [ring.middleware.resource :refer (wrap-resource)]
            [org.httpkit.server :refer (run-server)]
            [rente.db :as db]
            [rente.projects :as projects]
            [rente.products :as products]
            [clj-json.core :as json]
            [rente.ws :as ws]))

(defn handler [ajax-post-fn ajax-get-or-ws-handshake-fn]
  (routes
   (GET  "/"     _   (clojure.java.io/resource "index.html"))
   (GET  "/chsk" req (ajax-get-or-ws-handshake-fn req))
   (POST "/chsk" req (ajax-post-fn req))
   ; Test
   (GET "/createproducts" req (products/init))
   (GET "/createprojects" req (projects/init))
   (GET "/getprojects" _ (json/generate-string projects/getall))
   (route/not-found "<h1>Sidan kan tyvärr inte hittas</h1>")))

(defn app [handler]
  (let [ring-defaults-config
        (-> site-defaults
            (assoc-in
             [:security :anti-forgery]
             {:read-token (fn [req] (-> req :params :csrf-token))})
            (assoc-in [:static :resources] "public"))]
    (-> handler
        (wrap-defaults ring-defaults-config)
        (wrap-resource "/META-INF/resources"))))
        ;wrap-edn-params  ; vi använder ju sente å transit via ws

(defrecord HttpServer [port ws-connection server-stop]
  component/Lifecycle
  (start [component]
    (if server-stop
      component
      (let [component (component/stop component)

            {:keys [ajax-post-fn ajax-get-or-ws-handshake-fn]}
            (ws/ring-handlers ws-connection)

            handler (handler ajax-post-fn ajax-get-or-ws-handshake-fn)

            server-stop (run-server (app handler) {:port port})]
        (log/debug "HTTP server started")
        (assoc component :server-stop server-stop))))
  (stop [component]
    (when server-stop (server-stop))
    (log/debug "HTTP server stopped")
    (assoc component :server-stop nil)))

(defn new-http-server [port]
  (map->HttpServer {:port port}))
