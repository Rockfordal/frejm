(ns rente.client.views.layout
  (:require [re-frame.core :as re-frame :refer [subscribe dispatch]]))

(defn route-item [route panel]
  [:li {:class (if (= panel (:panel route)) "active" "")}
    [:a {:href (:url route)} (:label route)]])

(defn navbar-items [panel]
  (let [routes (subscribe [:routes])]
    [:div
     (for [route @routes]
       [route-item route panel])]))

(defn navbar []
  (let [active-panel (subscribe [:active-panel])]
  [:nav.light-blue.lighten-1 {:role "navigation"}
    ;(js/Parse.initialize "mWR3FuLC0MB5Q1gm9rtKEfXeKoC6zuk4R7Ds66XG" "0csWP1KiUZEwfZeearVtfp9gfnChIDGBoxozln9P")
    [:div.nav-wrapper.container
      [:a#logo-container.brand-logo {:href "#"} "SolidCall"]
      [:ul.right.hide-on-med-and-down
        [navbar-items @active-panel]]
      [:ul#nav-mobile.side-nav
        [navbar-items @active-panel]]
      [:a.button-collapse {:href "#" "data-activates" "nav-mobile"}
       [:i.mdi-navigation-menu]]]]))
;       [:li [:a [:div (@state :current-project)]]]]
;         [:button.btn.btn-success {:type "submit"} "Logga in"]]]]
;       [:a.dropdown-button.btn {"data-beloworigin" "true", :href "#", "data-activates" "dropdown1"} "Drop me"]
