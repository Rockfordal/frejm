(ns rente.client.actions
  (:require
    [rente.client.transactions :as trans]
    [rente.client.state :refer [state conn]]))


(defn add-item []
  (let [itemdata {:shelfid   (:db/id (:activeshelf @state))
                  :productid (:db/id (:activeproduct @state))
                  :quantity  5 }]
  (trans/add-item conn itemdata)))
