(ns rente.client.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame :refer [register-sub]]))


(register-sub
 :active-panel
 (fn [db _]
   (reaction (:active-panel @db))))

(register-sub
 :messages
 (fn [db _]
   (reaction (:messages @db))))

(register-sub
 :animals
 (fn [db _]
   (reaction (:animals @db))))

(register-sub
 :flippen
 (fn [db]
   (reaction (:re-render-flip @db))))
