(ns rente.client.views.global)

;; (defn input-component [{:keys [title on-save on-stop]}]
;;   (let [val (atom title)
;;         stop #(do (reset! val "")
;;                   (if on-stop (on-stop)))
;;         save #(let [v (-> @val str clojure.string/trim)]
;;                (if-not (empty? v) (on-save v))
;;                (stop))]
;;     (fn [props]
;;       [:input (merge props
;;                      {:type "text"
;;                       :value @val
;;                       :on-blur save
;;                       :on-change #(reset! val (-> % .-target .-value))
;;                       :on-key-down #(case (.-which %)
;;                                      13 (save)
;;                                      27 (stop)
;;                                      nil)})])))
