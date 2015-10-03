(defproject rente "1.0.0"
  :description "Datomic, Component, Sente, Rum, Datascript"
  :min-lein-version "2.5.1"

  :dependencies [[environ "1.0.1"]
                 [org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.107" :scope "provided"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/algo.generic "0.1.2" :only [fmap]] ; massera data
                 [org.clojure/tools.logging "0.3.1"]

                 ;; Server
                 [ring/ring-core "1.4.0"]
                 [ring/ring-defaults "0.1.5"]
                 [fogus/ring-edn "0.3.0"]
                 [compojure "1.4.0"]
                 [http-kit "2.1.19"]
                 [com.stuartsierra/component "0.3.0"]
                 [com.datomic/datomic-pro "0.9.5206" :exclusions [joda-time]]
                 [datomic-schema "1.3.0"]
                 [clj-http "2.0.0"]
                 [com.taoensso/sente "1.6.0" :exclusions [org.clojure/tools.reader]]
                 [com.cognitect/transit-clj  "0.8.281" :exclusions [commons-codec]]
                 [com.cognitect/transit-cljs "0.8.225"]

                 ;; Klient
                 [rum "0.4.2"]
                 [datascript "0.13.1"]
                 [secretary "1.2.3"]
                 [prismatic/schema "1.0.1"]
                 [cljs-http "0.1.37"]]

  :plugins [[lein-environ "1.0.1"]
            [lein-cljsbuild "1.0.6"]]

  :source-paths ["src"]
  :resource-paths ["resources" "resources-index/prod"]
  :target-path "target/%s"
  :main ^:skip-aot rente.run
  :figwheel {:nrepl-port 7888
             :server-port 3000}

  :cljsbuild {:builds {
      :client {:source-paths ["src/rente/client"]
               :compiler {
                ;:main rente.client.app
                ;:asset-path "/js/out" ; Base URL for JS requests from browser.
                ;:recompile-dependents true ; Speed doesn't matter right now.
                ;:cache-analysis true
                :source-map true
                :optimizations :none
                :output-to "resources/public/js/app.js"
                          :output-dir "dev-resources/public/js/out"}}

      :deploy {:source-paths ["src/rente/client"]
                :compiler {:output-to "prod-resources/public/js/deploy.min.js"
                           :output-dir "prod-resources/public/js/out"
                           :optimizations :advanced
                           :pretty-print false}}}
  }
  :profiles {:dev {
                    :source-paths ["dev"]
                    :resource-paths ^:replace ; Replace instead of merge
                    ["resources" "dev-resources" "resources-index/dev"]

                   :dependencies [[org.clojure/tools.namespace "0.2.10"]
                                  [org.clojure/tools.nrepl "0.2.11"]]

                   :plugins [[lein-figwheel "0.3.7" :exclusions [org.clojure/tools.reader
                                                                 org.clojure/clojurescript clj-stacktrace]]]
                   :cljsbuild {:builds
                      {:client {:source-paths ["dev"]
                                :compiler
                                  {:optimizations :none
                                   :source-map true}}}}}

             :prod {
                    :resource-paths ^:replace ; Replace instead of merge
                    ["resources" "prod-resources" "resources-index/prod"]

                    ;; :cljsbuild {:builds {
                    ;;   :client {:compiler
                    ;;            {:optimizations :advanced
                    ;;             :output-to "dev-resources/pub/js/prod_client.js"
                    ;;             :pretty-print false}}}}
                    }

             :uberjar {
               :resource-paths ^:replace ; Replace instead of merge
               ["resources" "dev-resources" "resources-index/prod"]
   
               ;; :cljsbuild {:builds {
               ;;                 :client {:compiler {
               ;;                 ;:optimizations :advanced
               ;;                 :optimizations :none
               ;;                 :output-to "dev-resources/pub/js/prod_client.js"
               ;;                 :pretty-print false}}}}
                    :aot :none
               }
             }

  :uberjar-name "frejm.jar"
  :aliases {"package" ["with-profile" "prod" "do" "clean" ["cljsbuild" "once"]]}
)
