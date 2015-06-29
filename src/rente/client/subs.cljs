(ns rente.client.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame :refer [register-sub]]))


(register-sub
 :hela-db
 (fn [db _]
   (reaction @db)))

(register-sub
 :active-panel
 (fn [db _]
   (reaction (:active-panel @db))))

(register-sub
 :rentemsg
 (fn [db]
   (reaction (:rentemsg @db))))

(register-sub
 :messages
 (fn [db]
   (reaction (:messages @db))))

(register-sub
 :flippen
 (fn [db]
   (reaction (:re-render-flip @db))))
