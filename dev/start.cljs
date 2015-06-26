(ns rente.start
  (:require [figwheel.client :as fw]
            [rente.client.db :as db]
            [rente.client.app :as app]))

(enable-console-print!)

(fw/watch-and-reload
 :websocket-url "ws://localhost:3449/figwheel-ws"
 :jsload-callback #(swap! db/state update-in [:re-render-flip] not))

(app/main)
