(ns rente.client.views.demo
  (:require [re-frame.core :as re-frame :refer [subscribe dispatch]]
            [rente.client.views.layout :as layout :refer [navbar]]
            ;[cljsjs.jquery-ui]
            [cljsjs.highlight :as highlight]
            [cljsjs.highlight.langs.clojure] ; clojure-repl javascript css less dart elixir nginx bash
            [rente.client.ws :as socket]))

;; --------- highlight --------- 
(extend-type js/NodeList
    ISeqable
      (-seq [array] (array-seq array 0)))

(defn qsa [selector]
  (.querySelectorAll js/document selector))

(defn init-highlight []
  (doseq [node (qsa "code")]
    (.highlightBlock js/hljs node)))
;; ----------------------------- 

(defn test-panel [data]
    (fn [data]
       [:div
        [navbar]
        [:div.container
           [:h1 (str "Huula! från Test panelen")]
           [:br]]]))

(defn int-val [e]
  (let [num (js/parseInt (.. e -target -value))]
  (if (js/isNaN num) 0 num)))

(defn knapp [& a]
  [:a.waves-effect.waves-light.btn a])

(defn rente-panel [data]
  (let [animals (subscribe [:animals])
        ;messages (subscribe [:messages])
        ;counter (subscribe [:counter])
        ]
   (fn []
      (.setTimeout js/window init-highlight 100)
      [:div
       [navbar]
       [:div.container
        [:h1 "Sente"] [:br]
        [:p [:code.clojure "(defn adder [a b] \r\n (+ a b))"]]
        ;[:div "Meddelanden: " (count @messages) ": " (str @messages)]
        ;[:p (str "djur: " @animals)]
        [:div (map (fn [animal] @animals))
         [:p (str "djur: " animal)]
        ]
        ;[:table
        ; [:tr
        ;  [:td ]]]
        [:input {:value "" :placeholder "Namn på nytt djur"}]
        [:p [:a.waves-effect.waves-light.btn {:on-click socket/test-socket-callback} "Skicka Meddelande Callback"]]
        [:p [:a.waves-effect.waves-light.btn {:on-click socket/test-socket-event}    "Skicka Meddelande Event"]]
        [:p [:a.waves-effect.waves-light.btn {:on-click #(dispatch [:get-animals ["hej" "hoj"]])} "Skicka Meddelande"]]
        ;[:p [:a.waves-effect.waves-light.btn {:on-click #(dispatch [:get-courses])} "Hämta Kurser"]]
        ]])))
