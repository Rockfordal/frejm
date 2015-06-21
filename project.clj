(defproject frejm "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3211"]
                 [com.tvachon/core.async "0.2.0"]
                 ;[org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 ;[org.clojure/tools.namespace "0.2.11-SNAPSHOT"]
                 [environ "1.0.0"]

                 ; Klient
                 [cljs-http "0.1.14"]
                 [reagent "0.5.0"]
                 [re-frame "0.4.1"]
                 [secretary "1.2.3"]

                 ; Server
                 [ring/ring-core "1.3.1"]
                 [ring/ring-jetty-adapter "1.3.1"]
                 [cljs-http "0.1.14"]
                 [compojure "1.1.8"]
                 [liberator "0.12.0"]
                 [fogus/ring-edn "0.2.0"]
                 [clj-json "0.5.3"]
                 [com.datomic/datomic-free "0.9.4899"]]

  :min-lein-version "2.5.0"
  :env {:is-dev true}
  :source-paths ["src/clj"]

  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-figwheel "0.3.3"]
            [lein-ring "0.8.10"]]
            ; :exclusions [cider/cider-nrepl]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]

                        :figwheel {:on-jsload "frejm.core/mount-root"
                                   :nrepl-port  7888
                                   ;:repl false
                                   :websocket-host "localhost"}

                        :repl-options {
                                       :init-ns "frejm.core"
                                       ;:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl{{{nrepl-middleware}}}]
                                       }

                        :compiler {:main frejm.core
                                   :output-to  "resources/public/js/compiled/app.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :asset-path "js/compiled/out"
                                   :source-map-timestamp true}}

                       {:id "min"
                        :source-paths ["src/cljs"]
                        :compiler {:main frejm.core
                                   :output-to "resources/public/js/compiled/app.js"
                                   :optimizations :advanced
                                   :pretty-print false}}]}

:figwheel {  :http-server-root "public" ;; default and assumes "resources" 
             :server-port 3449
             ;:css-dirs ["resources/public/css"]
             ;:open-file-command "emacsclient"
             :nrepl-port 7888
             ;; :repl false
             ;; :server-logfile "tmp/logs/test-server-logfile.log"
             ;:ring-handler frejm.api/handler
             }

; :ring {:handler frejm.api/handler
;        :init frejm.api/init
;        :nrepl {:start? false :port 4500}
;        :port 8090}

; :main frejm.core
 :global-vars {*print-length* 20})
 :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]
