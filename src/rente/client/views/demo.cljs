(ns rente.client.views.demo
  (:require [re-frame.core :as re-frame :refer [subscribe dispatch]]
            [rente.client.views.layout :as layout :refer [navbar]]
            [cljsjs.highlight :as highlight]
            [cljsjs.highlight.langs.clojure] ; clojure-repl javascript css less dart elixir nginx bash
            [rente.client.ws :as socket]))

(extend-type js/NodeList
    ISeqable
      (-seq [array] (array-seq array 0)))

(defn qsa [selector]
  (.querySelectorAll js/document selector))

(defn init-highlight []
  (doseq [node (qsa "code")]
    (.highlightBlock js/hljs node)))

(defn rente-panel [data]
  (let [messages (subscribe [:messages])]
    (fn []
      (.setTimeout js/window init-highlight 100)
      [:div
       [navbar]
       [:div.container
        [:h1 "Rente"] [:br]
        [:p
         [:code.clojure "(defn adder [a b] \r\n (+ a b))"]]
        ;[:div @messages]
        ;[:div (str (:counter @state))] [:br]
        ;[:button {:on-click #(dispatch [:test-get-projects "vill ha projekt"]) } "Hämta Projekt"] [:br] [:br]
        [:p [:button {:on-click socket/test-socket-callback} "Send Message Callback"]]
        [:p [:button {:on-click socket/test-socket-event}    "Send Message Event"]]
        ]])))
