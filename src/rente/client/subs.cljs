(ns rente.client.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :refer [register-sub]]))

;; Projekt
(register-sub
  :projects
  (fn [db _]
    (reaction (:projects @db))))

;; Företag
(register-sub
  :companies
  (fn [db _]
    (reaction (:companies @db))))

(register-sub
  :active-project
  (fn [db _]
    (reaction (:active-project @db))))

;; Firebase
(register-sub
 :messages
 (fn [db _]
   (reaction (:messages @db))))

;; Aktuell sida
(register-sub
  :active-panel
  (fn [db _]
     (reaction (:active-panel @db))))

;; Dynamiska routes
(register-sub
  :routes
  (fn [db _]
     (reaction (:routes @db))))


;; Todo
(defn filter-fn-for
      [showing-kw]
      (case showing-kw
            :active (complement :done)
            :done   :done
            :all    identity))

(defn completed-count
      "return the count of todos for which :done is true"
      [todos]
      (count (filter :done (vals todos))))


(register-sub
  :todos                ;; usage:  (subscribe [:todos])
  (fn [db _]
      (reaction (vals (:todos @db)))))

(register-sub
  :visible-todos
  (fn [db _]
      (reaction (let [filter-fn (filter-fn-for (:showing @db))
                      todos     (vals (:todos @db))]
                     (filter filter-fn todos)))))

(register-sub
  :completed-count
  (fn [db _]
      (reaction (completed-count (:todos @db)))))

(register-sub
  :footer-stats
  (fn [db _]
      (reaction
        (let [todos (:todos @db)
              completed-count (completed-count todos)
              active-count    (- (count todos) completed-count)
              showing         (:showing @db)]
             [active-count completed-count showing]))))  ;; tuple
