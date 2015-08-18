(ns rente.client.views.global
  (:require [rente.client.dom :as dom :refer [by-id]]
            [rum :as r]))

;; Egna materialize funktioner
(r/defc ikon < rum/static [namn]
 [:i.material-icons namn])

(rum/defc component-input [{:keys [id title on-save on-stop defval]}]
  (let [val (atom defval)
        stop #(do (reset! val "")
                  (.blur (by-id id))
                  (if on-stop (on-stop)))
        save #(let [v (-> @val str clojure.string/trim)]
               (if-not (empty? v) (on-save v))
               (stop))]
    [:input.validate
                {:type "tel"
                :id id
                :value @val
                ;:on-blur save
                :on-change #(reset! val (-> % .-target .-value))
                :on-key-down #(case (.-which %)
                                13 (save)
                                27 (stop)
                                nil)}]))
