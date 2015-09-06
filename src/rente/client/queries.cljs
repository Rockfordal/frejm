(ns rente.client.queries
  (:require [datascript :as d]))


(defn getsni [company db]
  (if (contains? company :company/sni)
    (let [id (:company/sni company)
            sni (d/touch (d/entity db id))]
        sni)
  ""))

(defn find-by-projectname [name db]
  (ffirst (d/q '[:find ?e :in $ ?name
                 :where [?e :project/name ?name]]
                 db name)))

(defn find-by-snicode [code db]
  (ffirst (d/q '[:find ?e :in $ ?code
                 :where [?e :sni/code ?code]]
                 db code)))

(defn find-companies [projectid db]
 (when-not (or (= nil projectid) (= "" projectid))
  (d/q '[:find   ?c :in $ ?pn
         :where [?c :company/project ?p]
                [?p :project/name ?pn]]
       db projectid)
  (d/q '[:find   ?c
         :where [?c :company/name _]
                [(get-else $ ?c :company/project nil) ?p]
                [(nil? ?p)]]
       db)))
