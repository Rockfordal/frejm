(ns frejm.views
    (:require [re-frame.core :as re-frame :refer [subscribe dispatch]]))

;; --------------------
(defn home-panel []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [:div
       [:h2 (str "Hej från " @name ".")]
       [:div [:a {:href "#/about"} "Kontakt"]]])))

(defn about-panel []
  (let [test (subscribe [:test])]
  (fn []
    [:div
     [:h2 "Kontakt"]
     [:div [:a {:href "#/"} "Hem"]]
     [:br]
     ;[:p (str @test)]
     [:b "Namn"] [:div (@test :name)] [:br]
     [:b "Beskrivning"] [:div (@test :desc)] 
     [:br]
     [:button { :on-click #(dispatch [:getjs])}      "Hämta js"]
     [:button { :on-click #(dispatch [:getclojure])} "Hämta clj"]
     [:button { :on-click #(dispatch [:getcourses])} "Hämta kurser"]
 ])))


;; --------------------
(defmulti  panels identity)
(defmethod panels :home-panel  [] [home-panel])
(defmethod panels :about-panel [] [about-panel])
(defmethod panels :default     [] [:div])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      (panels @active-panel))))
