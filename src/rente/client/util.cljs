(ns rente.client.util
  (:require
    [datascript :as d]))

(defn remove-vals [f m]
  (reduce-kv (fn [m k v] (if (f v) m (assoc m k v))) (empty m) m))

(defn find-prev [xs pred]
  (last (take-while #(not (pred %)) xs)))

(defn find-next [xs pred]
  (fnext (drop-while #(not (pred %)) xs)))

(defn drop-tail [xs pred]
  (loop [acc []
         xs  xs]
    (let [x (first xs)]
      (cond
        (nil? x) acc
        (pred x) (conj acc x)
        :else  (recur (conj acc x) (next xs))))))

(defn trim-head [xs n]
  (vec (drop (- (count xs) n) xs)))

(defn index [xs]
  (map vector xs (range)))

(defn e-by-av [db a v]
  (-> (d/datoms db :avet a v) first :e))

(def fixtures [
  [:db/add 0 :system/group :all]
  {:db/id -1 :product/name "Mjölk"}
  {:db/id -2 :product/name "Ost"}
  {:db/id -3 :product/name "Korv"}

  {:db/id -1 :shelf/name "C1"}
  {:db/id -2 :shelf/name "C2"}

  {:db/id -1
   :item/quantity 10
   :item/shelf -1
   :item/product -1}

  {:db/id -2
   :item/quantity 20
   :item/shelf -1
   :item/product -2}

  {:db/id -4
   :item/quantity 15
   :item/shelf -2
   :item/product -3}

  {:db/id -4
   :item/quantity 5
   :item/shelf -1
   :item/product -3}
  ])
