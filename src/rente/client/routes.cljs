(ns rente.client.routes
  (:import goog.History)
  (:require
    [goog.events :as events]
    [goog.history.EventType :as EventType]
    [secretary.core :as secretary :refer-macros [defroute]]
    [rente.client.state :refer [state]]))

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn app-routes []
  (secretary/set-config! :prefix "#")
  (hook-browser-navigation!))

;; Företag
(defroute "/company/:id" {:as params}
  (swap! state assoc :module :companyedit)
  (swap! state assoc :moduleid (js/parseInt (:id params))))

(defroute "/newcompany" {:as params}
  (swap! state assoc :module :companynew))

;; Projekt
(defroute "/project/:id" {:as params}
  (swap! state assoc :module :projectedit)
  (swap! state assoc :moduleid (js/parseInt (:id params))))

(defroute "/newproject" {:as params}
  (swap! state assoc :module :projectnew))

(defroute module-path "/:module" {module :module}
  (let [module-keys (set (map :key (:modules @state)))
        module-key (or (module-keys (keyword module)) :notfound)]
    (swap! state assoc :module module-key)))

;; Produkt
(defroute "/product/:id" {:as params}
          (swap! state assoc :module :productedit)
          (swap! state assoc :moduleid (js/parseInt (:id params))))

(defroute "/newproduct" {:as params}
          (swap! state assoc :module :productnew))

