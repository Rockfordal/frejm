(ns frejm.handlers
  (:require [re-frame.core :as re-frame]
            [frejm.db :as db]
            [cljs-http.client :as http]
            [cljs.core.async :as async :refer [chan close! put! alts! <! >! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:refer-clojure :exclude [find count]))

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

;(re-frame/register-handler
;  :getposts
;    (fn [db _]
;      (go (let [url "http://jsonplaceholder.typicode.com/posts/1"
;                opts {:with-credentials? false}
;                res (<! (http/get url opts))]
;        (re-frame/dispatch [:process-getcourses-response (str (:title (:body res)))])))
;    db))

(def Query (.-Query js/Parse))

;(defn map->Course [map]
;  (let [course (Course.)]
;    (doseq [[key value] map]
;      (.set course (name key) value))
;    course))

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
  :getclojure
  (fn [db _]
    (let [Course (.extend (.-Object js/Parse) "course")
        query  (Query. Course)]
        (.get query "W8uc91QYJL" (clj->js {
            "success" (fn [kurs] (re-frame/dispatch [:process-getcourse-response (js->clj kurs)]))
            "error"   (fn [obj err] (js/console.log (str "Fel i :getclojure!" err)))})))
  db))

(re-frame/register-handler
  :getjs
  (fn [db _]
    (let [Course (.extend (.-Object js/Parse) "course")
        query  (Query. Course)]
        (.get query "NXp23QnLVW" (clj->js {
            "success" (fn [kurs] (re-frame/dispatch [:process-getcourse-response (js->clj kurs)]))
            "error"   (fn [obj err] (js/console.log (str "Fel i :getjs!" err)))})))
  db))

(re-frame/register-handler
  :getcourses
  (fn [db _]
    (let [Course (.extend (.-Object js/Parse) "course")
        query (Query. Course)]
        (.find query (clj->js {
            "success" (fn [kurser] (re-frame/dispatch [:process-getcourses-response kurser]))
            "error"   (fn [obj err] (js/console.log (str "Fel i :getcourses!" err)))})))
  db))

(re-frame/register-handler
 :process-getcourse-response
 (fn [db [_ res]]
   (if res
     (assoc db :test (js->clj res.attributes))
     (js/alert "fick ingen kurs"))))

(re-frame/register-handler
 :process-getcourses-response
 (fn [db [_ res]]
   (if res
     (do 
     ;(assoc db :test (js->clj res.attributes))
     ;.forEach(function(n) { console.log(n.attributes) })
     (js/console.log (first (js->clj res )))
     db)
     (js/alert "fick inga kurser"))))

;(defn getstart []
;  (let [txt "http://textfiles.com/100/914bbs.txt"
;        git "https://api.github.com/users"
;        fake "http://jsonplaceholder.typicode.com/posts/1"
;        url fake]
;    (go (let [response (<! (http/get url {:with-credentials? false}))]
;      (js/console.log (str (:body response)))
;     ;(js/console.log (:status response))
;      ))))
