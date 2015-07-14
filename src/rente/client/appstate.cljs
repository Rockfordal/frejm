(ns rente.client.appstate
  (:require 
    [rente.client.views.demo :as demo]
    [rente.client.views.todo :as todo]
    [rente.client.views.project :as project]
    [rente.client.views.company :as company]
    [rente.client.views.firebase :as firebase]
    )
  )

(def default-value            ;; -- Default app-db 
  {:todos   (sorted-map)      ;; use the (int) :id as the key
   :projects []
   :companies []
   :animals []
   ;:message ""
   :showing :all
   :active-panel :home-panel
   :re-render-flip false
   :routes [
            {:url "#rente"    :panel :rente-panel    :label "Rente"    :run [demo/rente-panel]}
            {:url "#todo"     :panel :todo-panel     :label "Att göra" :run [todo/todo-panel]}
            {:url "#project"  :panel :project-panel  :label "Projekt"  :run [project/project-panel]}
            {:url "#company"  :panel :company-panel  :label "Företag"  :run [company/company-panel]}
            {:url "#firebase" :panel :firebase-panel :label "Firebase" :run [firebase/firebase-panel]}
            ;{:url "#parse"    :panel :parse-panel    :label "Parse"}
            ;{:url "#rente"    :panel :rente-panel    :label "Rente"    :run [rente.client.views.demo/rente-panel]}
            ;{:url "#todo"     :panel :todo-panel     :label "Att göra" :run [rente.client.views.todo/todo-panel]}
            ;{:url "#project"  :panel :project-panel  :label "Projekt"  :run [rente.client.views.project/project-panel]}
            ;{:url "#company"  :panel :company-panel  :label "Företag"  :run [rente.client.views.company/company-panel]}
            ;{:url "#firebase" :panel :firebase-panel :label "Firebase" :run [rente.client.views.firebase/firebase-panel]}
            ]})

;(let [routes (atom [{:url "#rente" :panel :rente-panel :label "Rente"    :run [demo/rente-panel]}
;                    {:url "#todo"  :panel :todo-panel  :label "Att göra" :run [todo/todo-panel]}])]
