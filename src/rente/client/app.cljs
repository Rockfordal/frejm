(ns rente.client.app
    (:import goog.History)
    (:require
    [secretary.core :as secretary :refer-macros [defroute]]
    [clojure.set :as set]
    [clojure.string :as str]
     cljs.reader
    [datascript :as d]
    [rum :include-macros true]
    [figwheel.client :as fw]
    [goog.events :as events]
    [goog.history.EventType :as EventType]
    [cognitect.transit :as transit]
    [rente.client.queries :as q]
    [rente.client.dom :as dom]
    [rente.client.util :as u])
  (:require-macros
    [rente.macros :refer [profile]]))

(enable-console-print!)

(def schema  {:item/shelf   {:db/valueType :db.type/ref}
              :item/product {:db/valueType :db.type/ref}})

(defonce conn (d/create-conn schema))

(declare render persist)

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(def page (atom :home))

(defn reset-conn! [db]
  (reset! conn db)
  (render db)
  (persist db))

;; Entity with id=0 is used for storing auxilary view information
;; like filter value and selected group

(defn set-system-attrs! [& args]
  (d/transact! conn 
    (for [[attr value] (partition 2 args)]
      (if value
        [:db/add 0 attr value]
        [:db.fn/retractAttribute 0 attr]))))

(defn system-attr
  ([db attr]
    (get (d/entity db 0) attr))
  ([db attr & attrs]
    (mapv #(system-attr db %) (concat [attr] attrs))))

;; History

(defonce history (atom []))
(def ^:const history-limit 10)

;; Keyword filter

(rum/defc filter-pane [db]
  [:.filter-pane
    [:input.filter {:type "text"
                    :value (or (system-attr db :system/filter) "")
                    :on-change (fn [_]
                                 (set-system-attrs! :system/filter (dom/value (dom/q ".filter"))))
                    :placeholder "Sök"}]])

(defn items-by-filter [db terms]
  (d/q '[:find   [?e ...]
         :in $ % [?term ...]
         :where  [?e :item/quantity]
                 (match ?e ?term)]
    db q/item-filter-rule terms))

(defn filter-terms [db]
  (not-empty
    (str/split (system-attr db :system/filter) #"\s+")))

(defn filtered-db [db]
  (if-let [terms   (filter-terms db)]
    ;(let[whitelist (set (todos-by-filter db terms))
    (let[whitelist (set (items-by-filter db terms))
         pred      (fn [db datom]
                     (or (not= "item" (namespace (.-a datom)))
                         (contains? whitelist (.-e datom))))]
      (d/filter db pred))
    db))

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

(rum/defc history-view [db]
  [:.history-view
    (for [state @history]
      [:.history-state 
       { :class (when (identical? state db) "history-selected")
         :on-click (fn [_] (reset-conn! state)) }])
    (if-let [prev (u/find-prev @history #(identical? db %))]
      [:button.history-btn {:on-click (fn [_] (reset-conn! prev))} "‹ ångra"]
      [:button.history-btn {:disabled true} "‹ ångra"])
    (if-let [next (u/find-next @history #(identical? db %))]
      [:button.history-btn {:on-click (fn [_] (reset-conn! next))} "gör om ›"]
      [:button.history-btn {:disabled true} "gör om ›"])])

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

(rum/defc product [product]
  [:.product
    [:span.id   (:db/id product)]
    [:span.name (:product/name product)]])

(rum/defc visa-alla-produkter [db]
  [:div
    (for [[eid] (sort (d/q '[:find ?e :where [?e :product/name]] db))]
    (product (d/entity db eid)))])

(rum/defc shelf_v [shelf]
  [:.product
    [:span.id   (:db/id shelf)]
    [:span.name (:shelf/name shelf)]])

(rum/defc item_v [item product shelf]
  [:div
    [:span (:db/id item)] [:span " "]
    [:span (:item/quantity item)] [:span " "]
    [:span (:product/name product)] [:span " "]
    [:span (:shelf/name shelf)]])

(rum/defc visa-alla-hyllor [db]
  [:div
    (for [[eid] (sort (d/q '[:find ?e :where [?e :shelf/name]] db))]
    (shelf_v (d/entity db eid)))])

(rum/defc visa-sortiment [db]
  [:div
   (for [[item product shelf] (d/q '[:find ?item ?product ?shelf
                        :in $ ?shelfname :where
                        [?shelf :shelf/name ?shelfname]
                        [?item :item/shelf ?shelf]
                        [?item :item/product ?product]]
                   db "C1")]
     (item_v (d/entity db item)
       (d/entity db product)
       (d/entity db shelf)))])

(rum/defc canvas [db]
  [:.canvas
   [:h3 [:a {:href "#/"} "Inventarie"]]
    [:.main-view
     [:div.row
      [:div.col.s3
        [:div.card.blue-grey.darken-1
         [:div.card-content.white-text
          [:span.card-title "Produkter"]
          (visa-alla-produkter db) [:br]
          [:div.card-action [:a {:href "#"} "ok"] ]]]]
      [:div.col.s3
        [:div.card.blue-grey.darken-1
         [:div.card-content.white-text
          [:span.card-title "Sortiment"]

            (let [db (filtered-db db)]
              (visa-sortiment db)) [:br]
          [:div.card-action [:a {:href "#"} "ok"] ]]]]
      [:div.col.s3
        [:div.card.blue-grey.darken-1
         [:div.card-content.white-text
          [:span.card-title "Hyllor"]
          (visa-alla-hyllor db) [:br]
          [:div.card-action [:a {:href "#"} "ok"] ]]]]
      ]
      (filter-pane db)
      ;(let [db (filtered-db db)]
       ; (list
          ;(overview-pane db)
          ;(todo-pane db) ;   ) ;  )
   ;(if (= @page :home) ;(add-view) ;)
   ;(if (= @page :company) (edit-view))
     (history-view db)
     ]])

(defn render
  ([] (render @conn))
  ([db]
    (profile "render"
      (rum/mount (canvas db) js/document.body))))

;; re-render on every DB change
(d/listen! conn :render
  (fn [tx-report]
    (render (:db-after tx-report))))

;; logging of all transactions (prettified)
(d/listen! conn :log
  (fn [tx-report]
    (let [tx-id  (get-in tx-report [:tempids :db/current-tx])
          datoms (:tx-data tx-report)
          datom->str (fn [d] (str (if (.-added d) "+" "−")
                               "[" (.-e d) " " (.-a d) " " (pr-str (.-v d)) "]"))]
      (println
        (str/join "\n" (concat [(str "tx " tx-id ":")] (map datom->str datoms)))))))

;; history

(d/listen! conn :history
  (fn [tx-report]
    (let [{:keys [db-before db-after]} tx-report]
      (when (and db-before db-after)
        (swap! history (fn [h]
          (-> h
            (u/drop-tail #(identical? % db-before))
            (conj db-after)
            (u/trim-head history-limit))))))))

;; transit serialization

(deftype DatomHandler []
  Object
  (tag [_ _] "datascript/Datom")
  (rep [_ d] #js [(.-e d) (.-a d) (.-v d) (.-tx d)])
  (stringRep [_ _] nil))

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
(defn persist [db]
  ;(js/localStorage.setItem "datascript-todo/db" (db->string db))
)

(defn rensa_ls []
  #_(js/localStorage.clear))

(defn fixturer []
  (d/transact! conn u/fixtures))

(d/listen! conn :persistence
  (fn [tx-report] ;; FIXME do not notify with nil as db-report
                  ;; FIXME do not notify if tx-data is empty
    (when-let [db (:db-after tx-report)]
      (js/setTimeout #(persist db) 0))))

;; restoring once persisted DB on page load
;(if-let [stored (js/localStorage.getItem "datascript-todo/db")]
;  (do
;    (reset-conn! (string->db stored))
;    (swap! history conj @conn))

(secretary/set-config! :prefix "#")

(defroute home-path "/" []
  (reset! page :home)
  ;(println "route HEM!")
  (render))

(defroute "/company/:id" {:as params}
  (reset! page :company)
  ;(println "route company " (:id params))
  (render))

(hook-browser-navigation!)
;(render) ;; for interactive re-evaluation

(defn ^:export main []
  (rensa_ls)
  (fixturer)
  ;(dispatch-sync [:initialize-db default-value]) ; populera appstate med seed-data
  ;(app-routes)                                   ; lyssna på webläsare, dispatcha :set-active-panel
  ;(main/create-my-routes)
  ;(mount-root)
  )
