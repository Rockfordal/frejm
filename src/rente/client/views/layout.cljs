(ns rente.client.views.layout
  (:require [rum :as r]))


(r/defc navbar-item < rum/static [currentmodule module]
  [:li {:class
        (if (or (= currentmodule (:key module))
                (and (= currentmodule :companyedit)
                     (= (:key module) :company))) "active" "")}
    [:a {:href (:url module)} (:title module)]])

(r/defc navbar-items < rum/static [currentmodule modules]
  [:div
    (for [module modules]
     (rum/with-props navbar-item currentmodule module :rum/key module))])

(r/defc navbar < rum/static [currentmodule modules]
  [:nav.light-blue.lighten-1 {:role "navigation"}
    [:.nav-wrapper.container
      [:a#logo-container.brand-logo {:href "#"} "Frejm"]
      [:ul.right.hide-on-med-and-down
        (navbar-items currentmodule modules)]
      [:ul#nav-mobile.side-nav
        (navbar-items currentmodule modules)]
      [:a.button-collapse {:href "#" :data-activates "nav-mobile"}
        [:i.mdi-navigation-menu]]]])
