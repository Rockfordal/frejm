(ns rente.start
  (:require [reagent.core    :as reagent :refer [force-update-all]]
            [figwheel.client :as fw]
            [rente.client.app :as app]))

(enable-console-print!)

(fw/watch-and-reload
 :websocket-url "ws://localhost:3449/figwheel-ws"
 :jsload-callback #(force-update-all))

(app/main)
