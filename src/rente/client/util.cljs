(ns rente.client.util
  (:require [datascript :as d]
            [rente.client.fixtures :refer [data tomdata]]
            [clojure.string :as str]))
   ;[cognitect.transit :as transit]

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

;; log all transactions (prettified)
(defn log-transactions [conn]
  (d/listen! conn :log
    (fn [tx-report]
      (let [tx-id  (get-in tx-report [:tempids :db/current-tx])
            datoms (:tx-data tx-report)
            datom->str (fn [d] (str (if (.-added d) "+" "−")
                                 "[" (.-e d) " " (.-a d) " " (pr-str (.-v d)) "]"))]
        (println
          (str/join "\n" (concat [(str "tx " tx-id ":")] (map datom->str datoms))))))))

(defn load-fixtures [conn]
  (println "ladda fixturer")
  (d/transact! conn data))

(defn importdata [data]
  (println "importdata: " data)
  ;(d/transact! conn data))
  )

;(defn toggle-fig-tx [db eid]
;  (let [done? (:fig/done (d/entity db eid))]
;    [[:db/add eid :fig/done (not done?)]]))

;(defn toggle-fig [eid]
;  (d/transact! conn [[:db.fn/call toggle-fig-tx eid]]))

(defn toggle-fig [conn id n]
  (d/transact! conn
     ;[:db/add 1 :system/group :all]
     [{:db/id id :figwheel/name "yo"}]

     ;{:figwheel/id n}
     )
  (println "id" id "n" n)
)
