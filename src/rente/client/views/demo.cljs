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

(def fakedata
    [{:id 1
      :name "klättermus"
      :species "mus"}])

(defn rente-panel [data]
  (let [animals (subscribe [:animals])]
   (fn []
      (.setTimeout js/window init-highlight 100)
      [:div
       [navbar]
       [:div.container
        [:h1 "Sente"]
        [:p [:code.clojure "(defn adder [a b] \r\n (+ a b))"]]
        ;[:p (str "djur: " @animals)]

        [:div.row
         [:div.col.s8
        [:table
         [:thead
          [:tr
           ;[:th "Id"]
           [:th "Namn"]
           [:th "Art"]]]
         (map
           (fn [animal]
             [:tr {:key (:id animal)}
              ;[:td (:id animal)]
              [:td (:name animal)]
              [:td (:species animal)]])
           @animals)]
          [:input {:value "" :placeholder "Namn på nytt djur"}]]

        [:div.col.s4
        [:div.collection.with-header
        [:div.collection-header "Actions"]
        [:a.collection-item {:on-click socket/test-socket-callback} "Hämta edn (ws)"]
        [:a.collection-item {:on-click #(dispatch [:get-animals fakedata])} "Fakedata (handler)"]
        [:a.collection-item {:on-click socket/test-socket-event}    "Skicka Event (ws)"]
        ]]]]])))
