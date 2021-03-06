(ns rente.client.views.material
  (:require [rente.client.dom :as dom :refer [by-id]]
            [rum.core :as r]))


(r/defc ikon < r/static [namn]
  [:i.material-icons namn])

(r/defc button [opts name icontext]
  [:a.btn.waves-effect.waves-light opts (str name " ")(ikon icontext)])

(r/defc link-button [href text icon]
  (button {:href href} text icon))

(r/defc save-button [save]
  (button {:on-click save} "Spara " "info"))

(r/defc my-input [{:keys [id title on-save on-stop defval]}]
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
