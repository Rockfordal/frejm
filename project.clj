(defproject rente "1.0.0"
  :description "Datomic, Component, Sente, Rum, Datascript"
  :url "http://enterlab.com"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.5.1"

  :dependencies [[environ "1.0.0"]
                 [org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.28" :scope "provided"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/tools.logging "0.3.1"]
                 [ch.qos.logback/logback-classic "1.1.3"]
                 [org.clojure/algo.generic "0.1.2"]

                 ; Server
                 [ring/ring-core "1.4.0"]
                 [ring/ring-defaults "0.1.5"]
                 [fogus/ring-edn "0.3.0"]
                 [compojure "1.4.0"]
                 [http-kit "2.1.19"]
                 [datomic-schema "1.3.0"]
                 ;[liberator "0.12.0"]

                 [com.stuartsierra/component "0.2.3"]
                 [com.datomic/datomic-pro "0.9.5201"
                  :exclusions [joda-time
                               org.slf4j/jul-to-slf4j
                               org.slf4j/slf4j-nop]]

                 [com.taoensso/sente "1.6.0" :exclusions [org.clojure/tools.reader]]
                 [com.cognitect/transit-clj  "0.8.281" :exclusions [commons-codec]]
                 [com.cognitect/transit-cljs "0.8.220"]

                 ; Klient
                 [rum "0.2.7"]
                 [datascript "0.11.5"]
                 [secretary "1.2.3"]
                 ;[clj-json "0.5.3"]
                 [cljs-http "0.1.36"]
                 ;[cljsjs/highlight "8.4-0"]
                 ;[jayq "2.5.4"]
                 ;[org.webjars.bower/jquery "2.1.4"]
                 ;[org.webjars.bower/materialize "0.97.0" :exclusions [org.webjars.bower/jquery]]
                 ;[org.webjars.bower/highlightjs "8.5.0"]
                 ;[cljsjs/jquery "2.1.4-0"]
                 ;[cljsjs/jquery-ui "1.11.3-1"]
                 ;[org.webjars.bower/jquery-ui "1.11.4"]
                 ;[matchbox "0.0.6"]
                 ]

  :plugins [[lein-environ "1.0.0"]
            [lein-cljsbuild "1.0.6"] ;
            ;[lein-bin "0.3.4"]      ; kör uberjars enklare!  target/runs -h  (istället för java -jar target/..)
            ]

  ;:bin { :name "runs" })

  :source-paths ["src"]
  :resource-paths ["resources" "resources-index/prod"]
  :target-path "target/%s"

  :main ^:skip-aot rente.run
  ;:main rente.run

  :cljsbuild
  {:builds
     {:client {:source-paths ["src/rente/client"]
               :compiler {
                :warnings {:single-segment-namespace false} ; för rum
                :output-to "resources/public/js/app.js"
                :output-dir "dev-resources/public/js/out"}}}

      :deploy {:source-paths ["src/cljs"]
                ;:jar true ; DON'T DO THIS
                :compiler
                {:output-to "dev-resources/public/js/deploy.js"
                 :optimizations :none
                 :pretty-print false}}
  }

  :profiles {
             :dev {
                    :source-paths ["dev"]
                    :resource-paths ^:replace
                    ["resources" "dev-resources" "resources-index/dev"]

                   :dependencies [[org.clojure/tools.namespace "0.2.7"]
                                  [org.clojure/tools.nrepl "0.2.10"]]

                   :plugins [[lein-figwheel "0.3.7" :exclusions [org.clojure/tools.reader org.clojure/clojurescript clj-stacktrace]]]

                    :cljsbuild
                    {:builds
                     {:client {:source-paths ["dev"]
                               :compiler
                                 {:optimizations :none
                                  :source-map true}}}

                    :advanced {:source-paths ["src/cljs" "test/cljs"]
                              :compiler
                              {:output-to "dev-resources/public/js/advanced.js"
                               :optimizations :advanced
                               :pretty-print false}}}
                    ; } ;}
             }
             :prod {:cljsbuild
                    {:builds
                     {:client {:compiler
                               {;output-to "dev-resources/pub/js/sanitized.js"
                                :optimizations :advanced
                                :pretty-print false}}}}}
             :uberjar {:aot :all}
             }

  :figwheel {:nrepl-port 7888
             :port 3449}

  :uberjar-name "frejm.jar"

  :aliases {"package"
            ["with-profile" "prod" "do"
             "clean" ["cljsbuild" "once"]]}
  )
