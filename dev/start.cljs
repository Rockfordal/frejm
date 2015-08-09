(ns rente.start
  (:require
    [figwheel.client :as fw]
    [rente.client.util :refer [toggle-fig]]
    [rente.client.app :as app]))

(enable-console-print!)

(fw/watch-and-reload
 :websocket-url "ws://localhost:3449/figwheel-ws"
 :jsload-callback #(toggle-fig))

(app/main)
