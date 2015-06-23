(ns rente.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))

(re-frame/register-sub
 :name
 (fn [db]
   (reaction (:name @db))))

(re-frame/register-sub
  :test
  (fn [db]
    (reaction (:test @db))))

(re-frame/register-sub
 :active-panel
 (fn [db _]
   (reaction (:active-panel @db))))

(register-sub
 :phones                       ;; usage (subscribe [:phones])
 (fn [db]
   (reaction (:phones @db))))  ;; pulls out :phones

(register-sub
 :search-input
 (fn [db]
   (reaction (:search-input @db))))

(register-sub
 :projects
 (fn [db]
   (reaction (:projects @db))))

(register-sub
 :companies
 (fn [db]
   (reaction (:companies @db))))

(register-sub
 :messages
 (fn [db]
   (reaction (:messages @db))))

(register-sub
 :order-prop
 (fn [db]
   (reaction (:order-prop @db))))
