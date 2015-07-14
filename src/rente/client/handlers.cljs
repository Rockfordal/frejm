(ns rente.client.handlers
  (:require [re-frame.core :as re-frame :refer [register-handler path trim-v after]]
            ;[rente.client.appstate :refer [default-value ]]
            [rente.client.appstate :refer [default-value ls->todos todos->ls! ls->projects projects->ls!]]
            [clojure.string  :refer [join]]
            [rente.client.ws :as ws]))
; (:require-macros [my.macros :as my])
; (defmacro unless [& args] `(when-not ~@args))


;; -- Middleware --------------------------------------------------------------
;;

(def ->ls (after todos->ls!))    ;; middleware to store todos into local storage

; middleware for any handler that manipulates todos
(def todo-middleware [(path :todos)   ;; 1st param to handler will be value from this path
                      (after todos->ls!)            ;; write to localstore each time
                     ;->ls            ;; write to localstore each time
                     trim-v])        ;; remove event id from event vec

(def project-middleware [(path :projects)
                         (after projects->ls!)
                         trim-v])

;; -- Helpers -----------------------------------------------------------------

(defn next-id [todos]
  ((fnil inc 0) (last (keys todos))))

(defn next-project-id [todos]
  ((fnil inc 0) (last (keys todos))))

;; -- Handlers ----------------------------------------------------------------

(def companydata
 [{:company/name "Ika"
   :type :company
   :id 2
   :company/orgnr "12-3"}
  {:company/name "Kop"
   :type :company
   :id 1
   :company/orgnr "123-4"}])

(re-frame/register-handler
  :initialize-db
  (fn [_ [_  default]]
    ;(assoc default :companies companydata)
    default
    ))

;; usage:  (dispatch [:initialise-db])
;(register-handler ;; On app startup, ceate initial state
;  :initialize-db  ;; event id being handled
;  (fn [_ _]       ;; the handler being registered
    ;(merge default-value (ls->todos))
    ;(merge default-value (ls->projects))
    ;db
                                        ;(merge default-value {:id "apa"})
                                        ;(todos->ls!)
                                        ;(println "ls->todos: " (ls->todos))
;    ))                                  ;; all hail the new state


; test för att sköta val av filter i handler istället för via url:
(register-handler
  :set-filter
  (fn [todos t]
    ;(println "filter:" (second t))
    ;(println (:showing todos))
    ;(update-in todos [id :done] not)
    ;(println (:showing todos))
    ;(update-in todos [:showing] :done)
    ;(println (assoc todos :showing :apa))
    (assoc todos :showing (second t))
    ;todos
    ))


(register-handler                 ;; this handler changes the footer filter
  :set-showing                    ;; event-id
  [(path :showing) trim-v]        ;; middleware  (wraps the handler)

  ;; Because of the path middleware above, the 1st parameter to
  ;; the handler below won't be the entire 'db', and instead will
  ;; be the value at a certain path within db.
  ;; Also, the use of the 'trim-v' middleware means we can omit
  ;; the leading underscore from the 2nd parameter (event vector).
  (fn [old-kw [new-filter-kw]]    ;; handler
    new-filter-kw))               ;; return new state for the path


(register-handler                  ;; given the text, create a new todo
  :add-todo
  todo-middleware
  (fn [todos [text]]               ;; "path" middlware means we are given :todo
    (let [id  (next-id todos)
          nytodo {:id id :title text :done false}]
      ;(ws/add-todo nytodo)
      ;(println "todos: " todos)  {1 {:id :title "hej" :done false} 2 {:id 2 :title "hur" :done false}}
      ;(println "nytodo: " nytodo)   {:id 5 :title "mango" :done false}
      (assoc todos id nytodo))))

(register-handler   
  :add-todo-success
  (fn [todos [todo]]
    (let [id (:id todo)]
      (assoc todos id todo))))

(register-handler
  :toggle-done
  todo-middleware
  (fn [todos [id]]
    (update-in todos [id :done] not)))

(register-handler
  :save-todo
  todo-middleware
  (fn [todos [id title]]
    (assoc-in todos [id :title] title)))

(register-handler
  :delete-todo
  todo-middleware
  (fn [todos [id]]
    (dissoc todos id)))

(register-handler
  :clear-completed
  todo-middleware
  (fn [todos _]
    (->> (vals todos)                ;; remove all todos where :done is true
         (filter :done)
         (map :id)
         (reduce dissoc todos))))    ;; returns the new version of todos

(register-handler
  :complete-all-toggle
  todo-middleware
  (fn [todos]
    (let [new-done (not-every? :done (vals todos))]   ;; toggle true or false?
      (reduce #(assoc-in %1 [%2 :donE] new-done)
              todos
              (keys todos)))))


;; --- testar nya handlers -------

(register-handler
  :get-companies-success
  (fn [db [_ companies]]
    ;(println "företag:" companies)
    (assoc db :companies companies)
    ;db
    )) 

(register-handler
  :add-company-success
  (fn [db [_ data]]
    (let [company (assoc (:company data) :id (:id data))]
    (assoc db :companies (merge (:companies db) company)))))

(register-handler
  :del-company-success
  (fn [db [_ id]]
    (let [old (:companies db)
          new (remove #(when (= id (:id %)) %) old)]
    (assoc db :companies new))))

;(register-handler
;  :add-company
;  ;project-middleware
;  (fn [db [_ name]]
;    (ws/add-company {:company/name name})
;    ;(let [id (next-project-id projects)
;         ;newproj {:id id :name name}
;     ;     ]
;      ;(assoc db :companies {:id 1 :name name})
;    ;(println "db:" db)
;    (println "name:" name)
;      db
;     ; )
;))

;(register-handler
;  :save-project
;  ;project-middleware
;  (fn [companies [id name]]
;    (println "id:" id "name: " name)
;    (println "projects: " companies)
;    ;(assoc-in companies [id :name] name)
;    companies
;    ))

;(register-handler
;  :add-company
;  todo-middleware
;  (fn [companies [text]]
;    (let [id  (next-id todos)]
;      (assoc todos id {:id id :title text :done false}))))

(register-handler                  ;; given the text, create a new todo
  :add-project
  ;project-middleware
  (fn [projects [_ name]]            ;; "path" middlware means we are given :todo
    (ws/add-project {:name name :description ""})
    (let [id (next-project-id projects)
          newproj {:id id :name name}]
      (assoc projects id newproj)
      ;projects
     )))

(register-handler
  :get-projects-success
  (fn [db [_ projects]]
    ;(js/console.log (clj->js (str "animals success: " animals)))
    ;(assoc db :animals [{"class" "sdfsfd"} {"class" "123"}])
    (println "projects:" projects)
    (println "db:" db)
    ;(assoc db :projects projects)
     ;(assoc projects id nytodo)
    db)) 

(register-handler   
  :add-project-success
  (fn [projects [project]]
    (let [id (:id project)]
      (assoc projects id project))))

(register-handler
  :delete-project
  project-middleware
  (fn [projects [id]]
    (dissoc projects id)))

(register-handler
  :save-project
  project-middleware
  (fn [projects [id name]]
    ;(println "id:" id "name: " name)
    (println projects)
    (assoc-in projects [id :name] name)
    ))

;; --- våra gamla handlers -------

(register-handler
  :set-active-panel          ; "routern triggar denna"
  (fn [db [_ active-panel]]
    (assoc db :active-panel active-panel)))

(register-handler
  :get-animals
  (fn [db [_ msgs]]
    (assoc db :animals msgs)))

(register-handler         ;; given the text, create a new todo
  :add-animal
  ;todo-middleware
  (fn [todos [text]]               ;; "path" middlware means we are given :todo
    (let [id  (next-id todos)]
      (assoc todos id {:id id :title text :done false}))))

(register-handler
  :get-animals-success
  (fn [db [_ animals]]
    ;(js/console.log (clj->js (str "animals success: " animals)))
    ;(assoc db :animals [{"class" "sdfsfd"} {"class" "123"}])
    (assoc db :animals animals))) 

(register-handler
  :del-animal-success
  (fn [db [_ data]]
    (println "del animal success: " (:id data))
    ;(assoc db (disj (:animals db) animal))
    ;(println (type db))
    (println "returdata: " data)
    (def db {:animals [{:id 1 :name "katt"} {:id 2 :name "hund"}]})
    (dissoc db :animals ())
    ;db
    )) 

(register-handler
  :add-animal-success
  (fn [db [_ data]]
    (let [animal {:id (:id data) :name (:name(:animal data)) :species (:species(:animal data))}]
    (println "add animal success: " animal)
    (assoc db :animals (merge (:animals db) animal))
    ))) 

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
