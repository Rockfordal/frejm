(ns rente.client.views.demo
  (:require [re-frame.core :as re-frame :refer [subscribe dispatch]]
            [rente.client.views.layout :as layout :refer [navbar]]
            [reagent.core :as reagent :refer [atom]]
            ;[cljsjs.jquery-ui]
            ;[jayq.core :refer [$ delegate]] ; :append data
            [cljsjs.highlight :as highlight]
            [cljsjs.highlight.langs.clojure] ; clojure-repl javascript css less dart elixir nginx bash
            [rente.client.ws :as ws]))

;; jayq
(comment
  (def $body ($ :body)))

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

;(defn test-panel [data]
;    (fn [data]
;       [:div
;        [navbar]
;        [:div.container
;           [:h1 (str "Huula! från Test panelen")]
;           [:br]]]))

;(defn int-val [e]
;  (let [num (js/parseInt (.. e -target -value))]
;  (if (js/isNaN num) 0 num)))

;(defn knapp [& a]
;  [:a.waves-effect.waves-light.btn a])

(defn atom-input [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn rente-panel []
   (fn []
      (.setTimeout js/window init-highlight 100)
      [:div
       [navbar]
       [:div.container
        [:h1 "Sente"]
        [:p [:code.clojure "(defn adder [a b] \r\n (+ a b))"]]

        [:div.row
         [:div.col.s8
          ;[atom-input name]
          ;[atom-input species]
        [:div.col.s4
        [:div.collection.with-header
        [:div.collection-header "Åtgärder"]
        [:a.collection-item {:on-click ws/test-socket-callback} "Testa CB (ws)"]
        [:a.collection-item {:on-click ws/test-socket-event}    "Testa Event (ws)"]
        ]]]]]]))
