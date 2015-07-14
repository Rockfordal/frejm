(ns rente.client.appstate)


(def default-value            ;; -- Default app-db 
  {:todos   (sorted-map)      ;; use the (int) :id as the key
   :projects []
   :companies []
   :animals []
   :showing :all
   :active-panel :home-panel
   :re-render-flip false
   :routes [
            {:url "#rente"    :panel :rente-panel    :label "Rente"}
            {:url "#todo"     :panel :todo-panel     :label "Att göra"}
            {:url "#project"  :panel :project-panel  :label "Projekt"}
            {:url "#company"  :panel :company-panel  :label "Företag"}
            {:url "#parse"    :panel :parse-panel    :label "Parse"}
            ;{:url "#firebase" :panel :firebase-panel :label "Firebase"}
            ]})
