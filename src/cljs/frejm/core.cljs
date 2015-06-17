(ns frejm.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [frejm.handlers]
              [frejm.subs]
              [frejm.lab]
              [frejm.routes :as routes]
              [frejm.views :as views]))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn parseinit []
    (js/Parse.initialize "mWR3FuLC0MB5Q1gm9rtKEfXeKoC6zuk4R7Ds66XG"
                         "0csWP1KiUZEwfZeearVtfp9gfnChIDGBoxozln9P"))

; (defn getcourses []
;   (let [Course (.extend (.-Object js/Parse) "course")
;         query  (Query. Course)]
;     (js/console.log
;       (.get query "W8uc91QYJL" (clj->js {
;         "success" (fn [kurs] (js/console.log "Success" kurs.attributes ))
;         "error"   (fn [obj err] (js/console.log "Error!!"))})))) )

(defn ^:export init []
  (parseinit)
  ;(getcourses)
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root)
)
