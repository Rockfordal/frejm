(ns rente.client.appstate
  (:require 
    [rente.client.views.demo :as demo]
    [rente.client.views.todo :as todo]
    [rente.client.views.project :as project]
    [rente.client.views.company :as company]
    [rente.client.views.firebase :as firebase]))

(def default-value            ;; -- Default app-db 
  {:todos   (sorted-map)      ;; use the (int) :id as the key
   :projects []
   :companies []
   :animals []
   :showing :all
   :active-panel :home-panel
   :current-project nil
   ;:message ""
   :routes [
            {:url "#rente"    :panel :rente-panel    :label "Rente"    :run [demo/rente-panel]}
            {:url "#todo"     :panel :todo-panel     :label "Att göra" :run [todo/todo-panel]}
            {:url "#project"  :panel :project-panel  :label "Projekt"  :run [project/project-panel]}
            {:url "#company"  :panel :company-panel  :label "Företag"  :run [company/company-panel]}
            ;{:url "#firebase" :panel :firebase-panel :label "Firebase" :run [firebase/firebase-panel]}
            ;{:url "#parse"    :panel :parse-panel    :label "Parse"}
            ]})
