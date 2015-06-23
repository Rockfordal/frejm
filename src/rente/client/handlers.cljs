(ns rente.client.handlers
  (:require [re-frame.core :as re-frame]
            ;[taoensso.sente :as sente]
            ;[taoensso.sente.packers.transit :as sente-transit]
            [rente.client.db :as db]
            [cljs-http.client :as http]
            [cljs.core.async :as async :refer [chan close! put! alts! <! >! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:refer-clojure :exclude [find count])) 

(def Query (.-Query js/Parse))

 (defn fix-arguments
   "Fix an arguments object, turning it into a normal javascript array"
   [args]
   (.call (.-slice (.-prototype js/Array)) args))

(defn find [query]
  (let [ch (chan 1)]
    (.find query (clj->js {"success" (fn [objects]
                                         (put! ch (first (fix-arguments objects)))
                                         (close! ch))
                           "error" (fn [error]
                                       (put! ch "error")
                                       (close! ch))}))
    ch))

(defn count [query]
  (let [ch (chan 1)]
    (.count query (clj->js {"success" (fn [count]
                                        (put! ch count)
                                        (close! ch))
                            "error" (fn [error]
                                      (put! ch error)
                                      (close! ch))}))
    ch))

(defn count-all [cls]
  (count (Query. cls)))

(defn find-all [cls]
  (find (Query. cls)))


(re-frame/register-handler
  :initialize-db
  (fn [_ _]
    db/default-db))

(re-frame/register-handler
  :set-active-panel
  (fn [db [_ active-panel]]
    (assoc db :active-panel active-panel)))

(re-frame/register-handler
  :testa
  (fn [db [_ test]]
    (js/console.log (str "test: " (:test db)))
  db))

(re-frame/register-handler
  :getclojure
  (fn [db _]
    (let [Course (.extend (.-Object js/Parse) "course")
        query (Query. Course)]
        (.get query "W8uc91QYJL" (clj->js {
            "success" (fn [kurs]    (re-frame/dispatch [:process-getcourse-response (js->clj kurs)]))
            "error"   (fn [obj err] (js/console.log (str "Fel i :getclojure!" err)))})))
  db))

(re-frame/register-handler
  :getjs
  (fn [db _]
    (let [Course (.extend (.-Object js/Parse) "course")
        query (Query. Course)]
        (.get query "NXp23QnLVW" (clj->js {
            "success" (fn [kurs]    (re-frame/dispatch [:process-getcourse-response (js->clj kurs)]))
            "error"   (fn [obj err] (js/console.log (str "Fel i :getjs!" err)))})))
  db))

(re-frame/register-handler
  :getcourses
  (fn [db _]
    (let [Course (.extend (.-Object js/Parse) "course")
        query (Query. Course)]
        (.find query (clj->js {
            "success" (fn [kurser]  (re-frame/dispatch [:process-getcourses-response kurser]))
            "error"   (fn [obj err] (js/console.log (str "Fel i :getcourses!" err)))})))
  db))

(re-frame/register-handler
 :process-getcourse-response
 (fn [db [_ res]]
   (if res
     (assoc db :test (js->clj res.attributes :keywordize-keys true))
     ;(assoc db :test {:name "kurser" :desc "mja"})
     ;(js/console.log res.attributes)
     (js/alert "fick ingen kurs"))))

(re-frame/register-handler
  :getkurssnabb
  (fn [db [_] nyakurser]
    (assoc db :kurser nyakurser)))

(re-frame/register-handler
 :process-getcourses-response
 (fn [db [_ res]]
   (if res
    (let [kurser (js->clj res :keywordize-keys true)]
     (js/console.log (.-length (clj->js kurser)))
     (js/console.log (clj->js kurser))
     ;(js/console.log (into {} (for [k (.keys js/Object kurser)]
     ;                        [(keyfn k) (thisfn (aget kurser k))])))

     ;(js/console.log (.keys js/Object kurser))
     ;(js/console.log (for [k (.keys js/Object kurser)]
     ;                  (js/console.log (k))))

     ;(js/console.log kurser)
     ;(for )
     ;(js/console.log ((js->clj (.toJSON (kurs)) :keywordize-keys true) :desc))
     ;(assoc db :test {:name "kurser" :desc "mja"})
     )
     (js/alert "fick inga kurser"))
   db))

;(defn getstart []
;  (let [txt "http://textfiles.com/100/914bbs.txt"
;        git "https://api.github.com/users"
;        fake "http://jsonplaceholder.typicode.com/posts/1"
;        url fake]
;    (go (let [response (<! (http/get url {:with-credentials? false}))]
;      (js/console.log (str (:body response)))
;     ;(js/console.log (:status response))
;      ))))

