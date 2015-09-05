(defproject rente "1.0.0"
  :description "Datomic, Component, Sente, Rum, Datascript"
  :url "http://enterlab.com"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.5.1"

  :dependencies [[environ "1.0.0"]
                 [org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122" :scope "provided"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/algo.generic "0.1.2" :only [fmap]] ; massera data för datascript
                 [org.clojure/tools.logging "0.3.1"]

                 ;; Framtida
                 ; [com.taoensso/timbre "4.1.1"] ; mkt kraftfullare än tools.logging
                 ; [dire "0.5.3"]                ; hantera exceptions erlang style (se theatralia github)
                 ; [liberator "0.12.0"]          ; REST style a'la powerhouse+webgui

                 ;; Server
                 [ring/ring-core "1.4.0"]
                 [ring/ring-defaults "0.1.5"]
                 [fogus/ring-edn "0.3.0"]
                 [compojure "1.4.0"]
                 [http-kit "2.1.19"]
                 [datomic-schema "1.3.0"]

                 [com.stuartsierra/component "0.2.3"]
                 [com.datomic/datomic-pro "0.9.5206"
                  :exclusions [joda-time
                               ;org.slf4j/jul-to-slf4j
                               ;org.slf4j/slf4j-nop
                               ]]

                 [com.taoensso/sente "1.6.0" :exclusions [org.clojure/tools.reader]]
                 [com.cognitect/transit-clj  "0.8.281" :exclusions [commons-codec]]
                 [com.cognitect/transit-cljs "0.8.225"]

                 ;; Klient
                 [rum "0.3.0"]
                 [datascript "0.11.6"]
                 [secretary "1.2.3"]
                 [jayq "2.5.4"]
                 [cljs-http "0.1.37"]
                 ;[clj-json "0.5.3"]
                 ;[cljsjs/highlight "8.4-0"]
                 ;[org.webjars.bower/jquery "2.1.4"]
                 ;[org.webjars.bower/materialize "0.97.0" :exclusions [org.webjars.bower/jquery]]
                 ;[org.webjars.bower/highlightjs "8.5.0"]
                 ;[cljsjs/jquery "2.1.4-0"]
                 ;[cljsjs/jquery-ui "1.11.3-1"]
                 ;[org.webjars.bower/jquery-ui "1.11.4"]
                 ;[matchbox "0.0.6"]
                 ]

  :plugins [[lein-environ "1.0.0"]
            ;[lein-bin "0.3.4"]      ; kör uberjars enklare!  target/runs -h  (istället för java -jar target/..)
            [lein-cljsbuild "1.0.6"]]

  :source-paths ["src"]
  :resource-paths ["resources" "resources-index/prod"]
  :target-path "target/%s"
  :main ^:skip-aot rente.run

  :cljsbuild
  {:builds
     {:client {:source-paths ["src/rente/client"]
               :compiler {
                :warnings {:single-segment-namespace false} ; för rum
                :output-to "resources/public/js/app.js"
                :output-dir "dev-resources/public/js/out"}}}

      ;; :deploy {:source-paths ["src/cljs"]
      ;;           ;:jar true ; DON'T DO THIS
      ;;           :compiler
      ;;           {:output-to "dev-resources/public/js/deploy.js"
      ;;            :optimizations :none
      ;;            :pretty-print false}}
  }

  :profiles {
             :dev {
                    :source-paths ["dev"]
                    :resource-paths ^:replace ; Replace instead of merge
                    ["resources" "dev-resources" "resources-index/dev"]

                   :dependencies [[org.clojure/tools.namespace "0.2.10"]
                                  [org.clojure/tools.nrepl "0.2.10"]]

                   :plugins [[lein-figwheel "0.3.7" :exclusions [org.clojure/tools.reader
                                                                 org.clojure/clojurescript clj-stacktrace]]]

                    :cljsbuild
                    {:builds
                      {:client {:source-paths ["dev"]
                                :compiler
                                  {:optimizations :none
                                   :source-map true}}}
                     }
             }
             :prod {:cljsbuild
                    {:builds
                     {:client {:compiler
                               {;output-to "dev-resources/pub/js/prod_client.js"
                                :optimizations :advanced
                                :pretty-print false}}}}}
             :uberjar {:aot :all}
             }

  :figwheel {:nrepl-port 7888
             :server-port 3000}

  :uberjar-name "frejm.jar"

  :aliases {"package" ["with-profile" "prod" "do"
                       "clean" ["cljsbuild" "once"]]}
)
