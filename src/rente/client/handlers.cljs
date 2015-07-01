(ns rente.client.handlers
  (:require [re-frame.core :as re-frame]))


(re-frame/register-handler
  :initialize-db
  (fn [_ [_  state]]
    @state))

(re-frame/register-handler
  :set-active-panel          ; "routern triggar denna"
  (fn [db [_ active-panel]]
    (assoc db :active-panel active-panel)))

(re-frame/register-handler
  :get-animals
  (fn [db [_ msgs]]
    (assoc db :animals msgs)))

(re-frame/register-handler
  :get-animals-success
  (fn [db [_ animals]]
    ;(js/console.log (clj->js (str "animals success: " animals)))
    (assoc db :animals animals)))

;(re-frame/register-handler
;  :fire-reset
;  (fn [db [_ person]]
    ;(js/console.log (str "test: " (:test db)))
;  db))

;(re-frame/register-handler
;  :getclojure
;  (fn [db _]
;    (let [Course (.extend (.-Object js/Parse) "course")
;        query (Query. Course)]
;        (.get query "W8uc91QYJL" (clj->js {
;            "success" (fn [kurs]    (re-frame/dispatch [:process-getcourse-response (js->clj kurs)]))
;            "error"   (fn [obj err] (js/console.log (str "Fel i :getclojure!" err)))})))
;  db))

;(re-frame/register-handler
;  :getjs
;  (fn [db _]
;    (let [Course (.extend (.-Object js/Parse) "course")
;        query (Query. Course)]
;        (.get query "NXp23QnLVW" (clj->js {
;            "success" (fn [kurs]    (re-frame/dispatch [:process-getcourse-response (js->clj kurs)]))
;            "error"   (fn [obj err] (js/console.log (str "Fel i :getjs!" err)))})))
;  db))

;(re-frame/register-handler
;  :getcourses
;  (fn [db _]
;    (let [Course (.extend (.-Object js/Parse) "course")
;        query (Query. Course)]
;        (.find query (clj->js {
;            "success" (fn [kurser]  (re-frame/dispatch [:process-getcourses-response kurser]))
;            "error"   (fn [obj err] (js/console.log (str "Fel i :getcourses!" err)))})))
;  db))

;(re-frame/register-handler
; :process-getcourse-response
; (fn [db [_ res]]
;   (if res
;     (assoc db :rentemsg (js->clj res.attributes :keywordize-keys true))
;     ;(assoc db :rentemsg {:name "kurser" :desc "mja"})
;     ;(js/console.log res.attributes)
;     (js/alert "fick ingen kurs"))))

;(re-frame/register-handler
;  :getkurssnabb
;  (fn [db [_] nyakurser]
;    (assoc db :kurser nyakurser)))

;(re-frame/register-handler
; :process-getcourses-response
; (fn [db [_ res]]
;   (if res
;    (let [kurser (js->clj res :keywordize-keys true)]
;     (js/console.log (.-length (clj->js kurser)))
;     (js/console.log (clj->js kurser))
;     ;(js/console.log (into {} (for [k (.keys js/Object kurser)]
     ;                        [(keyfn k) (thisfn (aget kurser k))])))

     ;(js/console.log (.keys js/Object kurser))
     ;(js/console.log (for [k (.keys js/Object kurser)]
     ;                  (js/console.log (k))))

     ;(js/console.log kurser)
     ;(for )
     ;(js/console.log ((js->clj (.toJSON (kurs)) :keywordize-keys true) :desc))
     ;(assoc db :rentemsg {:name "kurser" :desc "mja"})
;     )
;     (js/alert "fick inga kurser"))
;   db))

;(defn getstart []
;  (let [txt "http://textfiles.com/100/914bbs.txt"
;        git "https://api.github.com/users"
;        fake "http://jsonplaceholder.typicode.com/posts/1"
;        url fake]
;    (go (let [response (<! (http/get url {:with-credentials? false}))]
;      (js/console.log (str (:body response)))
;     ;(js/console.log (:status response))
;      ))))
