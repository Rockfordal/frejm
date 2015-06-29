(ns rente.client.views.demo
  (:require [re-frame.core :as re-frame :refer [subscribe dispatch]]
            [rente.client.views.layout :as layout :refer [navbar]]
            [rente.client.db :as db]
            [cljsjs.jquery-ui]
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

(defn test-panel [data]
    (fn [data]
       [:div
        [navbar]
        [:div.container
           [:h1 (str "Huula! från Test panel")]
           [:br]
        ]]))

(defn int-val
  [e]
  (let [num (js/parseInt (.. e -target -value))]
  (if (js/isNaN num) 0 num)))

(defn knapp [& a]
  [:a.waves-effect.waves-light.btn a])

(defn rente-panel [data]
  (let [messages (subscribe [:messages])
        flipp (subscribe [:flippen])
        swappa (fn []
                 #(swap! db/state update-in [:re-render-flip] true)
                 (js/console.log "swappa!"))]
   (fn []
      (.setTimeout js/window init-highlight 100)
      [:div
       [navbar]
       [:div.container
        [:h1 "Pjr"] [:br]
        [:b (str "flipp: " @flipp)]
        [:p
         [:code.clojure "(defn adder [a b] \r\n (+ a b))"]]
        ;[:div @messages]
        ;[:div (str (:counter @state))] [:br]
        ;[:button {:on-click #(dispatch [:test-get-projects "vill ha projekt"]) } "Hämta Projekt"] [:br] [:br]
        [:p [:button {:on-click socket/test-socket-callback} "Send Message Callback"]]
        [:p [:button {:on-click socket/test-socket-event}    "Send Message Event"]]
        [:p [:button {:on-click #(dispatch [:test-flipp ])} "Flippa"]]
        [:p [:a.waves-effect.waves-light.btn {:on-click #(dispatch [:get-flipp])} "GetFlip"]]
        [:a.waves-effect.waves-light.btn {:on-click swappa} "swappa"]
        ;[:knapp {:on-click swappa} "swappa"]
        ]])))
