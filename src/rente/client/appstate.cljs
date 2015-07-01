(ns rente.client.appstate
  (:require [reagent.core :as reagent]))

(def state (reagent/atom {
                      :active-panel :home-panel
                      :messages []
                      :animals []
                      :counter 0

;                      :routes [{:url "/"
;                                :panel :home-panel
;                                :label "Hem"}
;                                {:url "/demo"
;                                :panel :demo-panel
;                                :label "Rente"}]

                      :doc {} :saved? false
                      :re-render-flip false}))

(defn set-value! [id value]
  (swap! state assoc :saved? false)
  (swap! state assoc-in [:doc id] value))

(defn get-value [id]
  (get-in @state [:doc id]))

(defn put! [k v]
  (swap! state assoc k v))
