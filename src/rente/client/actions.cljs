(ns rente.client.actions
  (:require
    [rente.client.transactions :as trans]
    [rente.client.state :refer [state conn]]))

  (defn add-item []
    (let [
          shelfid   (:db/id (:activeshelf @state))
          productid (:db/id (:activeproduct @state))
          quantity 5]
      (println "hej från action additem" shelfid productid)
      (trans/add-item conn shelfid productid quantity)
      ))
