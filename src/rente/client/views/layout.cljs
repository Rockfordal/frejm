(ns rente.client.views.layout
  (:require [rum :include-macros true]))


(rum/defc navbar-item < rum/static [route panel]
  [:li {:class (if (= panel (:key route)) "active" "")}
    [:a {:href (:url route)} (:title route)]])

(rum/defc navbar-items < rum/static [panel routes]
  [:div (for [route routes]
     (rum/with-props navbar-item route panel :rum/key route))])

(rum/defc navbar < rum/static [route modules]
  [:nav.light-blue.lighten-1 {:role "navigation"}
    [:div.nav-wrapper.container
      [:a#logo-container.brand-logo {:href "#"} "Frejm"]
      [:ul.right.hide-on-med-and-down
        (navbar-items route modules)]
      [:ul#nav-mobile.side-nav
        (navbar-items route modules)]
      [:a.button-collapse {:href "#" :data-activates "nav-mobile"}
        [:i.mdi-navigation-menu]]]])

;; ;       [:li [:a [:div (@state :current-project)]]]]
;; ;         [:button.btn.btn-success {:type "submit"} "Logga in"]]]]
;; ;       [:a.dropdown-button.btn {"data-beloworigin" "true", :href "#", "data-activates" "dropdown1"} "Drop me"]
