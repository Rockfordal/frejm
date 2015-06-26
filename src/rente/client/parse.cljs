(ns rente.client.views.parse
  (:require [cljs-http.client :as http]
            [cljs.core.async  :as async :refer [chan close! put! alts! <! >! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:refer-clojure :exclude [find count]))

;(def Query (.-Query js/Parse))

; (defn fix-arguments
;   "Fix an arguments object, turning it into a normal javascript array"
;   [args]
;   (.call (.-slice (.-prototype js/Array)) args))

;(defn find [query]
;  (let [ch (chan 1)]
;    (.find query (clj->js {"success" (fn [objects]
;                                         (put! ch (first (fix-arguments objects)))
;                                         (close! ch))
;                           "error" (fn [error]
;                                       (put! ch "error")
;                                       (close! ch))}))
;    ch))

;(defn count [query]
;  (let [ch (chan 1)]
;    (.count query (clj->js {"success" (fn [count]
;                                        (put! ch count)
;                                        (close! ch))
;                            "error" (fn [error]
;                                      (put! ch error)
;                                      (close! ch))}))
;    ch))

;(defn count-all [cls]
;  (count (Query. cls)))

;(defn find-all [cls]
;  (find (Query. cls)))

;(defn parse-panel []
;  (let [rentemsg (subscribe [:rentemsg])]
;  (fn []
;    [:div
;     [navbar] [:div.container
;      [:h2 "Parse"]
;      [:br]
;      [:b "Namn"] [:div (:name @rentemsg)] [:br]
;      [:b "Beskrivning"] [:div (:desc @rentemsg)] 
;      [:br]
      ;[:button { :on-click #(dispatch [:getjs])}      "Hämta js"]
      ;[:button { :on-click #(dispatch [:getclojure])} "Hämta clj"]
                                        ;[:button { :on-click #(dispatch [:getcourses])} "Hämta kurser"]
;]])))
