(ns rente.client.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))

(re-frame/register-sub
  :rentemsg
  (fn [db]
    (reaction (:rentemsg @db))))

(re-frame/register-sub
 :active-panel
 (fn [db _]
   (reaction (:active-panel @db))))

(re-frame/register-sub
 :phones                       ;; usage (subscribe [:phones])
 (fn [db]
   (reaction (:phones @db))))  ;; pulls out :phones

(re-frame/register-sub
 :search-input
 (fn [db]
   (reaction (:search-input @db))))

(re-frame/register-sub
 :projects
 (fn [db]
   (reaction (:projects @db))))

(re-frame/register-sub
 :companies
 (fn [db]
   (reaction (:companies @db))))

(re-frame/register-sub
 :messages
 (fn [db]
   (reaction (:messages @db))))

(re-frame/register-sub
 :order-prop
 (fn [db]
   (reaction (:order-prop @db))))
