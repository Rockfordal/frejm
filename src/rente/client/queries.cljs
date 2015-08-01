(ns rente.client.queries
  (:require
   [datascript :as d]))

;; Rules are used to implement OR semantic of a filter
;; ?term must match either :project/name OR :todo/tags
(def todo-filter-rule
 '[[(match ?todo ?term)
    [?todo :todo/project ?p]
    [?p :project/name ?term]]
   [(match ?todo ?term)
    [?todo :todo/tags ?term]]])

(def item-filter-rule
 '[[(match ?item ?term)
    [?item :item/product ?p]
    [?p :product/name ?term]]
   [(match ?item ?term)
    [?item :item/shelf ?term]]])

;; terms are passed as a collection to query,
;; each term futher interpreted with OR semantic
(defn todos-by-filter [db terms]
  (d/q '[:find   [?e ...]
         :in $ % [?term ...]
         :where  [?e :todo/text]
                 (match ?e ?term)]
    db todo-filter-rule terms))

(defn items-by-filter [db terms]
  (d/q '[:find   [?e ...]
         :in $ % [?term ...]
         :where  [?e :item/quantity]
                 (match ?e ?term)]
    db item-filter-rule terms))
