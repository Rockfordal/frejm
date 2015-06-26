(ns rente.client.views.demo
  (:require [re-frame.core :as re-frame :refer [subscribe dispatch]]
            [rente.client.views.layout :as layout :refer [navbar]]
            [rente.client.ws :as socket]))

(defn rente-panel [data]
  (let [messages (subscribe [:messages])]
    (fn []
      [:div
       [navbar] [:div.container
        [:h1 "Rente"] [:br]
        ;[:div @messages]
        ;[:div (str (:counter @state))] [:br]
        ;[:button {:on-click #(dispatch [:test-get-projects "vill ha projekt"]) } "Hämta Projekt"] [:br] [:br]
        [:button {:on-click socket/test-socket-callback} "Send Message Callback"] [:br]
        [:button {:on-click socket/test-socket-event}    "Send Message Event"]]])))
