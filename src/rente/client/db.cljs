(ns rente.client.db
    (:require [reagent.core :as reagent]))

(def state (reagent/atom {
                      :active-panel :home-panel
                      :messages []
                      :doc {} :saved? false
                      :re-render-flip false}))

(defn set-value! [id value]
  (swap! state assoc :saved? false)
  (swap! state assoc-in [:doc id] value))

(defn get-value [id]
  (get-in @state [:doc id]))

(defn put! [k v]
  (swap! state assoc k v))
