(ns rente.client.app
  (:import goog.History)
  (:require
    [secretary.core :as secretary :refer-macros [defroute]]
    [clojure.set :as set]
    [clojure.string :as str]
     cljs.reader
    [datascript :as d]
    [rum :include-macros true]
    [goog.events :as events]
    [goog.history.EventType :as EventType]
    [cognitect.transit :as transit]
    [rente.client.queries :as q]
    [rente.client.dom :as dom]
    [rente.client.views.html2ts   :refer [html2ts]]
    [rente.client.views.sortiment :refer [shelf_v item_v product_v visa-alla-produkter visa-alla-hyllor visa-sortiment sortiment_v]]
    [rente.client.util :as u])
  (:require-macros
    [rente.macros :refer [profile]]))

(def schema  {:item/shelf   {:db/valueType :db.type/ref}
              :item/product {:db/valueType :db.type/ref}})

(defonce conn (d/create-conn schema))

(defonce app-state
  (atom {:current-module :html2ts
         :modules [{:key :html2ts   :title "html2ts"   :url "#html2ts"}
                   {:key :sortiment :title "Sortiment" :url "#sortiment"}
                   ;{:key :company   :url "#company"   :title "Företag"}
                   ]}))

(declare render persist)

(defroute module-path "/:module" {module :module}
  (let [module-keys (set (map :key (:modules @app-state)))
        module-key (or (module-keys (keyword module)) :html2ts)]
    (swap! app-state
           assoc :current-module module-key)))

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn reset-conn! [db]
  (reset! conn db)
  (render db)
  (persist db))

;; Entity with id=0 is used for storing auxilary view information
;; like filter value and selected group

;; (defn set-system-attrs! [& args]
;;   (d/transact! conn 
;;     (for [[attr value] (partition 2 args)]
;;       (if value
;;         [:db/add 0 attr value]
;;         [:db.fn/retractAttribute 0 attr]))))

;; (defn system-attr
;;   ([db attr]
;;     (get (d/entity db 0) attr))
;;   ([db attr & attrs]
;;     (mapv #(system-attr db %) (concat [attr] attrs))))

;; History
;; (defonce history (atom []))
;; (def ^:const history-limit 10)

;; Keyword filter
;; (rum/defc filter-pane [db]
;;   [:.filter-pane
;;     [:input.filter {:type "text"
;;                     :value (or (system-attr db :system/filter) "")
;;                     :on-change (fn [_]
;;                                  (set-system-attrs! :system/filter (dom/value (dom/q ".filter"))))
;;                     :placeholder "Sök"}]])

;; (defn items-by-filter [db terms]
;;   (d/q '[:find   [?e ...]
;;          :in $ % [?term ...]
;;          :where  [?e :item/quantity]
;;                  (match ?e ?term)]
;;     db q/item-filter-rule terms))

;; (defn filter-terms [db]
;;   (not-empty
;;     (str/split (system-attr db :system/filter) #"\s+")))

;; (defn filtered-db [db]
;;   (if-let [terms   (filter-terms db)]
;;     (let [whitelist (set (items-by-filter db terms))
;;          pred      (fn [db datom]
;;                      (or (not= "item" (namespace (.-a datom)))
;;                          (contains? whitelist (.-e datom))))]
;;       (d/filter db pred))
;;     db))

(rum/defc navbar-item [route panel]
  [:li {:class (if (= panel (:key route)) "active" "")}
    [:a {:href (:url route)} (:title route)]])

(rum/defc navbar-items [panel routes]
  [:div
   (for [route routes]
     ;(navbar-item route panel)
     (rum/with-props navbar-item route panel :rum/key route) ; tills rum fixat bug
     )])

(rum/defc navbar < rum/reactive []
  ;(let [{:keys [current-module modules]} (rum/react app-state)]
    [:nav.light-blue.lighten-1 {:role "navigation"}
      [:div.nav-wrapper.container
        [:a#logo-container.brand-logo {:href "#"} "Frejm"]
        [:ul.right.hide-on-med-and-down
         ;(navbar-items current-module modules)]
         (navbar-items (:current-module (rum/react app-state))
                       (:modules (rum/react app-state)))]
        ;[:ul#nav-mobile.side-nav
        ;  (navbar-items current-module modules)]
        [:a.button-collapse {:href "#" "data-activates" "nav-mobile"}
         [:i.mdi-navigation-menu]]]])
;)

 ;       [:li [:a [:div (@state :current-project)]]]]
 ;         [:button.btn.btn-success {:type "submit"} "Logga in"]]]]
 ;       [:a.dropdown-button.btn {"data-beloworigin" "true", :href "#", "data-activates" "dropdown1"} "Drop me"]


;; Grupper

;; This transaction function swaps the value of :todo/done attribute.
;; Transaction funs are handy in situations when to decide what to do
;; you need to analyse db first. They deliver atomicity and linearizeability
;; to such calculations

;; (defn toggle-todo-tx [db eid]
;;   (let [done? (:todo/done (d/entity db eid))]
;;     [[:db/add eid :todo/done (not done?)]]))

;; (defn toggle-todo [eid]
;;   (d/transact! conn [[:db.fn/call toggle-todo-tx eid]]))

;; (rum/defc todo-pane [db]
;;   [:.todo-pane
;;     (let [todos (let [[group item] (system-attr db :system/group :system/group-item)]
;;                   (todos-by-group db group item))]
;;       (for [eid (sort todos)
;;             :let [td (d/entity db eid)]]
;;         [:.todo {:class (if (:todo/done td) "todo_done" "")}
;;           [:.todo-checkbox {:on-click #(toggle-todo eid)} "✔︎"]
;;           [:.todo-text (:todo/text td)]
;;           [:.todo-subtext
;;             (when-let [due (:todo/due td)]
;;               [:span (.toDateString due)])
;;             ;; here we’re using entity ref navigation, going from
;;             ;; todo (td) to project to project/name
;;             (when-let [project (:todo/project td)]
;;               [:span (:project/name project)])
;;             (for [tag (:todo/tags td)]
;;               [:span tag])]
;;          [:.todo-editaction
;;           [:a {:href (str "#/company/" (:db/id td))} "Redigera"]
;;           ]]))])

;; (defn extract-todo []
;;   (when-let [text (dom/value (dom/q ".add-text"))]
;;     {:text    text
;;      :project (dom/value (dom/q ".add-project"))
;;      :due     (dom/date-value  (dom/q ".add-due"))
;;      :tags    (dom/array-value (dom/q ".add-tags"))}))

;; (defn clean-todo []
;;   (dom/set-value! (dom/q ".add-text") nil)
;;   (dom/set-value! (dom/q ".add-project") nil)
;;   (dom/set-value! (dom/q ".add-due") nil)
;;   (dom/set-value! (dom/q ".add-tags") nil))

;; (defn add-todo []
;;   (when-let [todo (extract-todo)]
;;     ;; This is slightly complicated logic where we need to identify
;;     ;; if a project with such name already exist. If yes, we need its
;;     ;; id to reference from entity, if not, we need to create it first
;;     ;; and then use its id to reference. We’re doing both in a single
;;     ;; transaction to avoid inconsistencies
;;     (let [project    (:project todo)
;;           project-id (when project (u/e-by-av @conn :project/name project))
;;           project-tx (when (and project (nil? project-id))
;;                        [[:db/add -1 :project/name project]])
;;           entity (->> {:todo/text (:text todo)
;;                        :todo/done false
;;                        :todo/project (when project (or project-id -1)) 
;;                        :todo/due  (:due todo)
;;                        :todo/tags (:tags todo)}
;;                       (u/remove-vals nil?))]
;;       (d/transact! conn (concat project-tx [entity])))
;;     (clean-todo)))

;; (rum/defc add-view []
;;   [:form.add-view {:on-submit (fn [_] (add-todo) false)}
;;     [:input.add-text    {:type "text" :placeholder "Nytt företag"}]
;;     [:input.add-project {:type "text" :placeholder "Projekt"}]
;;     [:input.add-tags    {:type "text" :placeholder "Taggar"}]
;;     [:input.add-due     {:type "text" :placeholder "Förfallodag"}]
;;     [:input.add-submit  {:type "submit" :value "Skapa"}]])

;; (rum/defc edit-view [db]
;;   (let [todos (d/q '[:find [?todo ...]
;;                      :where [?todo :todo/done true]] db)
;;         td (d/entity db (ffirst todos))
;;         todo (:todo/text td)
;;         ;a (for [eid (sort todos)
;;         ;    :let [td (d/entity db eid)]
;;        ]
;;   [:form.add-view {:on-submit (fn [_] (add-todo) false)}
;;     [:input.add-text    {:type "text" :value todo}]
;;     [:input.add-project {:type "text" :placeholder "Projekt"}]
;;     [:input.add-tags    {:type "text" :placeholder "Taggar"}]
;;     [:input.add-due     {:type "text" :placeholder "Förfallodag"}]
;;     [:input.add-submit  {:type "submit" :value "Skapa"}]]))

;; (rum/defc history-view [db]
;;   [:.history-view
;;     (for [state @history]
;;       [:.history-state 
;;        {:class (when (identical? state db) "history-selected")
;;         :on-click (fn [_] (reset-conn! state)) }])
;;     (if-let [prev (u/find-prev @history #(identical? db %))]
;;       [:button.history-btn {:on-click (fn [_] (reset-conn! prev))} "‹ ångra"]
;;       [:button.history-btn {:disabled true} "‹ ångra"])
;;     (if-let [next (u/find-next @history #(identical? db %))]
;;       [:button.history-btn {:on-click (fn [_] (reset-conn! next))} "gör om ›"]
;;       [:button.history-btn {:disabled true} "gör om ›"])])

(def module-map
  {:html2ts html2ts
   :sortiment sortiment_v})

(rum/defc content [current-module db]
  (let [module-comp (current-module module-map)]
    [:div.content
      (module-comp db)]))

(rum/defc canvas < rum/reactive [db]
  [:div
   (navbar)
   (content (:current-module (rum/react app-state)) db)])

(defn render
  ([] (render @conn))
  ([db]
    (profile "render"
      (rum/mount (canvas db) js/document.body))))

;; re-render on every DB change
(d/listen! conn :render
  (fn [tx-report]
    (render (:db-after tx-report))))

;; history
;; (d/listen! conn :history
;;   (fn [tx-report]
;;     (let [{:keys [db-before db-after]} tx-report]
;;       (when (and db-before db-after)
;;         (swap! history (fn [h]
;;           (-> h
;;             (u/drop-tail #(identical? % db-before))
;;             (conj db-after)
;;             (u/trim-head history-limit))))))))

;; transit serialization
;; (deftype DatomHandler []
;;   Object
;;   (tag [_ _] "datascript/Datom")
;;   (rep [_ d] #js [(.-e d) (.-a d) (.-v d) (.-tx d)])
;;   (stringRep [_ _] nil))

;(def transit-writer
;  (transit/writer :json
;    { :handlers
;      { datascript.core/Datom (DatomHandler.)
;        datascript.btset/BTSetIter (transit/VectorHandler.) }}))

;(def transit-reader
;  (transit/reader :json
;    { :handlers
;      { "datascript/Datom" (fn [[e a v tx]] (d/datom e a v tx)) }}))

;(defn db->string [db]
;  (profile "db serialization"
;    (transit/write transit-writer (d/datoms db :eavt))))

;(defn string->db [s]
;  (profile "db deserialization"
;    (let [datoms (transit/read transit-reader s)]
;      (d/init-db datoms schema))))

;; persisting DB between page reloads
;; (defn persist [db]
;;   (js/localStorage.setItem "datascript-todo/db" (db->string db)))

;(d/listen! conn :persistence
;  (fn [tx-report] ;; FIXME do not notify with nil as db-report
;                  ;; FIXME do not notify if tx-data is empty
;    (when-let [db (:db-after tx-report)]
;      (js/setTimeout #(persist db) 0))))

;; restoring once persisted DB on page load
;(if-let [stored (js/localStorage.getItem "datascript-todo/db")]
;  (do
;    (reset-conn! (string->db stored))
;    (swap! history conj @conn))

;; (defn rensa_ls []
;;   #_(js/localStorage.clear))

(defn fixturer []
  (d/transact! conn u/fixtures))

(secretary/set-config! :prefix "#")

;(defroute "/company/:id" {:as params}
;  (swap! app-state assoc :currentmodule :company)
;  (println "vi är på route company id: " (:id params))
;  (render))

(hook-browser-navigation!)

;; log all transactions (prettified)
(defn logga []
  (d/listen! conn :log
    (fn [tx-report]
      (let [tx-id  (get-in tx-report [:tempids :db/current-tx])
            datoms (:tx-data tx-report)
            datom->str (fn [d] (str (if (.-added d) "+" "−")
                                 "[" (.-e d) " " (.-a d) " " (pr-str (.-v d)) "]"))]
        (println
          (str/join "\n" (concat [(str "tx " tx-id ":")] (map datom->str datoms))))))))

(defn ^:export main []
  ;(rensa_ls)
  (fixturer)
  (logga))
