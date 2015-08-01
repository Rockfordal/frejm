(ns rente.client.views.layout
  ;;   (:require [re-frame.core :as re-frame :refer [subscribe dispatch]])
 )

;; (defn navbar-item [route panel]
;;   [:li {:class (if (= panel (:panel route)) "active" "")}
;;     [:a {:href (:url route)} (:label route)]])

;; (defn navbar-items [panel routes]
;;     [:div
;;     ; [:li {:class (if (= panel :project-panel) "active" "")} [:a {:href "#project"} "Projekt"]]
;;      (for [route @routes]
;;        ^{:key (:panel route)} [navbar-item route panel])])

;; (defn navbar []
;;   (let [active-panel (subscribe [:active-panel])
;;         routes (subscribe [:routes])]
;;   [:nav.light-blue.lighten-1 {:role "navigation"}
;;     [:div.nav-wrapper.container
;;       [:a#logo-container.brand-logo {:href "#"} "SolidCall"]
;;       [:ul.right.hide-on-med-and-down
;;         [navbar-items @active-panel routes]]

;;       [:ul#nav-mobile.side-nav
;;         [navbar-items @active-panel routes]]
;;       [:a.button-collapse {:href "#" "data-activates" "nav-mobile"}
;;        [:i.mdi-navigation-menu]]]]))
;; ;       [:li [:a [:div (@state :current-project)]]]]
;; ;         [:button.btn.btn-success {:type "submit"} "Logga in"]]]]
;; ;       [:a.dropdown-button.btn {"data-beloworigin" "true", :href "#", "data-activates" "dropdown1"} "Drop me"]
