(ns rente.client.handlers
  (:require [re-frame.core :as re-frame :refer [register-handler path trim-v after]]
            [rente.client.appstate :refer [default-value]]
            [rente.client.ls :refer [ls->todos todos->ls! ls->projects projects->ls!]]
            [rente.client.ws :as ws]))
            ;[clojure.string  :refer [join]]
; (:require-macros [my.macros :as my])
; (defmacro unless [& args] `(when-not ~@args))


;; -- Middleware för todo -----------------------------------------------------
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

;; -- Helpers för todo --------------------------------------------------------

(defn next-id [todos]
  ((fnil inc 0) (last (keys todos))))

(defn next-project-id [todos]
  ((fnil inc 0) (last (keys todos))))

;; -- Handlers ----------------------------------------------------------------

(register-handler
  :initialize-db
  (fn [_ [_  default]]
    (merge default (ls->todos))
    ))

(register-handler
  :set-active-panel          ; "routern triggar denna"
  (fn [db [_ active-panel]]
    (assoc db :active-panel active-panel)))


; test för att sköta val av filter i handler istället för via url:
(register-handler
  :set-filter
  (fn [todos t]
    (assoc todos :showing (second t))))

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


;; Företag

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

;; Projekt

(register-handler
  :get-projects-success
  (fn [db [_ projects]]
    ;(assoc db :projects projects)
    ;(println "get project success antal: " (count projects))
    ;(println "get project success: " projects)
    (assoc db :projects projects)
    ;db
    )) 

(register-handler
  :add-project-success
  (fn [db [_ data]]
    (let [project (assoc (:project data) :id (:id data))]
    (assoc db :projects (merge (:projects db) project)))))

(register-handler
  :del-project-success
  (fn [db [_ id]]
    (let [old (:projects db)
          new (remove #(when (= id (:id %)) %) old)]
    (assoc db :projects new))))


;; Parse.com

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
