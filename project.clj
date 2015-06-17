(defproject frejm "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3211"]
                 [org.clojure/tools.namespace "0.2.11-SNAPSHOT"]
                 ;[org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [com.tvachon/core.async "0.2.0"]
                 [cljs-http "0.1.14"]
                 [reagent "0.5.0"]
                 [re-frame "0.4.1"]
                 [secretary "1.2.3"]]

  :source-paths ["src/clj"]

  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-figwheel "0.3.3"
            ; :exclusions [cider/cider-nrepl]
             ]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]

                        :figwheel {:on-jsload "frejm.core/mount-root"
                                   :server-port 3449
                                   :nrepl-port 7888
                                   ;:repl false
                                   ;:ring-handler example.server/handler
                                   }

                        :compiler {:main frejm.core
                                   :output-to "resources/public/js/compiled/app.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :asset-path "js/compiled/out"
                                   :source-map-timestamp true}}

                       {:id "min"
                        :source-paths ["src/cljs"]
                        :compiler {:main frejm.core
                                   :output-to "resources/public/js/compiled/app.js"
                                   :optimizations :advanced
                                   :pretty-print false}}]})
