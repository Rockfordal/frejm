(ns frejm.chanlab
  (:require [re-frame.core :as re-frame]
            [frejm.db :as db]
            [cljs-http.client :as http]
            [cljs.core.async :as async :refer [chan close! put! alts! <! >! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go alt!]]))

(defn upper-caser [in]
(let [out (chan)]
    (go (while true (>! out (clojure.string/upper-case (<! in)))))
    out))

(defn reverser [in]
(let [out (chan)]
    (go (while true (>! out (clojure.string/reverse (<! in)))))
    out))

(defn printer [in]
  (go (while true (println (<! in)))))

;(def in-chan (chan))
;(def upper-caser-out (upper-caser in-chan))
;(def reverser-out (reverser upper-caser-out))

; (printer reverser-out)
; (>!! in-chan "redrum") ; => MURDER
; (>!! in-chan "repaid") ; => DIAPER

;(go (let [response
;          (<! (http/get "/books"))
;          data (:body response)]
;      (reset! books-state (set data))))

(defn getstart []
  (let [txt "http://textfiles.com/100/914bbs.txt"
        git "https://api.github.com/users"
        fake "http://jsonplaceholder.typicode.com/posts/1"
        url fake]
    (go (let [response (<! (http/get url {:with-credentials? false}))]
      ;(js/console.log (str (:title (:body response))))
      (js/console.log (str (:body response)))
     ;(js/console.log (:status response))
      ))))

(defn getfake []
  (let [url "http://jsonplaceholder.typicode.com/posts/1"
        options  {:with-credentials? false}]
    (go (let [response (<! (http/get url options))]
      (js/console.log (str (:body response)))))))

(defn kanal []
  (def ch (chan 1)))

(defn hej []
  (js/console.log "Hejja"))
