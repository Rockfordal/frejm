(ns rente.handlers
  (:require [re-frame.core :as re-frame]
            ;[taoensso.sente :as sente]
            ;[taoensso.sente.packers.transit :as sente-transit]
            [rente.db :as db]
            ;[cljs-http.client :as http]
                                        ;[cljs.core.async :as async :refer [chan close! put! alts! <! >! timeout]]
)
  ;(:require-macros [cljs.core.async.macros :refer [go alt!]])
                                          ;(:refer-clojure :exclude [find count])
)

(re-frame/register-handler
  :initialize-db
  (fn [_ _]
    db/default-db))

(re-frame/register-handler
 :initialise-db             ;; usage: (dispatch [:initialise-db])
 (fn [_ _]                   ;; Ignore both params (db and v).
   {:phones []
    :projects []
    :search-input ""
    :order-prop "name"
    :messages "inga"}))
