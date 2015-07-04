(defproject rente "1.0.0"
  :description "A barebones Reagent+Sente app deployable to Heroku. Uses Figwheel (for development build) and Component (lifecycle management)."
  :url "http://enterlab.com"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.5.1"
  :jvm-opts ["-Xms256m" "-Xmx384m"]

  :dependencies [[org.clojure/clojure "1.7.0-RC1"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 ;[com.tvachon/core.async "0.2.0"]
                 [com.stuartsierra/component "0.2.3"]
                 [environ "1.0.0"]
                 [ch.qos.logback/logback-classic "1.1.3"]
                 [org.clojure/tools.logging "0.3.1"]

                 ; Server
                 [ring/ring-core "1.3.2"]
                 [ring/ring-defaults "0.1.5"]
                 [compojure "1.3.4"]
                 [http-kit "2.1.19"]
                 ;[liberator "0.12.0"]
                 ;[fogus/ring-edn "0.2.0"]
                 ;[clj-json "0.5.3"]

                 [com.datomic/datomic-free "0.9.5153"
                  :exclusions [joda-time
                               org.slf4j/jul-to-slf4j
                               org.slf4j/slf4j-nop]]

                 [com.taoensso/sente "1.5.0" :exclusions [org.clojure/tools.reader]]
                 [com.cognitect/transit-clj "0.8.275" :exclusions [commons-codec]]
                 [com.cognitect/transit-cljs "0.8.220"]

                 ; Klient
                 [reagent "0.5.0"]
                 [re-frame "0.4.1"]
                 [secretary "1.2.3"]
                 [cljs-http "0.1.14"]
                 [clj-json "0.5.3"]
                 [jayq "2.5.4"]
                 [cljsjs/highlight "8.4-0"]
                 [org.webjars.bower/jquery "2.1.3"]
                 [org.webjars.bower/materialize "0.96.1" :exclusions [org.webjars.bower/jquery]]
                 [org.webjars.bower/highlightjs "8.5.0"]
                 ;[cljsjs/jquery "2.1.4-0"]
                 ;[cljsjs/jquery-ui "1.11.3-1"]
                 ;[org.webjars.bower/jquery-ui "1.11.4"]
                 [matchbox "0.0.6"]
                 ]

  :plugins [[lein-cljsbuild "1.0.5"]]

  :source-paths ["src"]
  :resource-paths ["resources" "resources-index/prod"]
  :target-path "target/%s"

  :main ^:skip-aot rente.run

  :datomic {:schemas ["resources" ["schema.edn"]]
            :install-location "/opt/datomic"}

  :cljsbuild
  {:builds
   {:client {:source-paths ["src/rente/client"]
             :compiler
             {:output-to "resources/public/js/app.js"
              :output-dir "dev-resources/public/js/out"}}}}


  :profiles {
             ;:dev-config {}
             :dev {
                   :datomic {:config "resources/free-transactor.properties"
                             :db-uri "datomic:free://localhost:4334/frejm"}

                   ;:dev-config {
                    :dependencies [[org.clojure/tools.namespace "0.2.7"]
                                   [figwheel "0.2.5"]]

                    :plugins [[cider/cider-nrepl "0.9.1"]
                              [lein-datomic "0.2.0"]
                              [lein-figwheel "0.3.5" :exclusions [org.clojure/tools.reader org.clojure/clojurescript clj-stacktrace]]
                              [lein-environ "1.0.0"]]

                    :source-paths ["dev"]
                    :resource-paths ^:replace
                    ["resources" "dev-resources" "resources-index/dev"]

                    :cljsbuild
                    {:builds
                     {:client {:source-paths ["dev"]
                               :compiler
                               {:optimizations :none
                                :source-map true}}}}

                    :figwheel {:http-server-root "public"
                               :port 3449
                               :nrepl-port 7888
                               :repl true
                               :css-dirs ["resources/public/css"]}
                    ; }
                   }

             :prod {:cljsbuild
                    {:builds
                     {:client {:compiler
                               {:optimizations :advanced
                                :pretty-print false}}}}}}

  :aliases {"package"
            ["with-profile" "prod" "do"
             "clean" ["cljsbuild" "once"]]})
