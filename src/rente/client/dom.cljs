(ns rente.client.dom
  (:require
    [clojure.string :as str]))

(defn q [selector]
  (js/document.querySelector selector))

(defn by-id [id]
  (.getElementById js/document (name id)))

(defn toast
  ([msg]      (.toast js/Materialize msg 3000))
  ([msg time] (.toast js/Materialize msg time)))

(defn set-value! [el value]
  (set! (.-value el) value))

(defn value [el]
  (let [val (.-value el)]
    (when-not (str/blank? val)
      (str/trim val))))

(defn get-value [id]
  (str (value (by-id id))))

(defn array-value [el]
  (when-let [val (value el)]
    (str/split val #"\s+")))
