(ns rente.start
  (:require
    [figwheel.client :as fw]
    [rente.client.util :refer [toggle-fig]]
    [rente.client.app :as app]))

(enable-console-print!)

(fw/watch-and-reload
 :websocket-url (str "ws://localhost:3000/figwheel-ws")
 :jsload-callback #(toggle-fig))

(app/main)
