(def JVMOPTS
  "Per os jvm options. Options common to all cases go under
  `:any`. Options specific to one OS go under the key returned by
  `leiningen.core.eval/get-os` for that system. Temporarily disabled
  options can be kept under `:disabled`."
  {:any
   [
    ;"-server"                     ; -server = optimized for speed ;  client = optimized for startup time
    "-Xms512m" "-Xmx1g"           ; Minimum and maximum sizes of the heap
    "-XX:+UseParNewGC"            ; Use the new parallel GC in conjunction with
    "-XX:+UseConcMarkSweepGC"     ;  the concurrent garbage collector
    "-XX:+CMSConcurrentMTEnabled" ; Enable multi-threaded concurrent gc work (ParNewGC)
    "-XX:MaxGCPauseMillis=20"     ; Specify a target of 20ms for max gc pauses
    "-XX:+CMSIncrementalMode"     ; Do many small GC cycles to minimize pauses
    "-XX:MaxNewSize=257m"         ; Specify the max and min size of the new
    "-XX:NewSize=256m"            ;  generation to be small
    "-XX:+UseTLAB"                ; Uses thread-local object allocation blocks. This
                                  ;  improves concurrency by reducing contention on
                                  ;  the shared heap lock.
    "-XX:MaxTenuringThreshold=0"] ; Makes the full NewSize available to every NewGC
                                  ;  cycle, and reduces the pause time by not
                                  ;  evaluating tenured objects. Technically, this
                                  ;  setting promotes all live objects to the older
                                  ;  generation, rather than copying them.
   :macosx
   ["-Xdock:name=Frejm"]
   :disabled
   ["-XX:ConcGCThreads=2"         ; Use 2 threads with concurrent gc collections
    "-XX:TieredCompilation"       ; JVM7 - combine both client and server compilation
                                  ;  strategies
    "-XX:CompileThreshold=1"      ; JIT each function after one execution
    "-XX:+PrintGC"                ; Print GC info to stdout
    "-XX:+PrintGCDetails"         ;  - with details
    "-XX:+PrintGCTimeStamps"]})   ;  - and timestamps

(defn jvm-opts
  "Return a complete vector of jvm-opts for the current os."
  [] (let [os (leiningen.core.utils/get-os)]
       (vec (set (concat (get JVMOPTS :any)
                         (get JVMOPTS os)))))) 

(defproject rente "1.0.0"
  :description "A barebones Reagent+Sente app deployable to Heroku. Uses Figwheel (for development build) and Component (lifecycle management)."
  :url "http://enterlab.com"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.5.1"

  :dependencies [[org.clojure/clojure "1.7.0-RC1"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 ;[com.tvachon/core.async "0.2.0"]
                 [com.stuartsierra/component "0.2.3"]
                 [environ "1.0.0"]
                 [ch.qos.logback/logback-classic "1.1.3"]
                 [org.clojure/tools.logging "0.3.1"]
                 [org.clojure/tools.nrepl "0.2.10"]

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

                 [com.taoensso/sente "1.5.0"          :exclusions [org.clojure/tools.reader]]
                 [com.cognitect/transit-clj "0.8.275" :exclusions [commons-codec]]
                 [com.cognitect/transit-cljs "0.8.220"]

                 ; Klient
                 [reagent "0.5.0"]
                 [re-frame "0.4.1"]
                 [secretary "1.2.3"]
                 [cljs-http "0.1.14"]
                 [clj-json "0.5.3"]
                 [jayq "2.5.4"]
                 [datascript "0.11.5"]
                 [cljsjs/highlight "8.4-0"]
                 [org.webjars.bower/jquery "2.1.3"]
                 [org.webjars.bower/materialize "0.96.1" :exclusions [org.webjars.bower/jquery]]
                 [org.webjars.bower/highlightjs "8.5.0"]
                 ;[cljsjs/jquery "2.1.4-0"]
                 ;[cljsjs/jquery-ui "1.11.3-1"]
                 ;[org.webjars.bower/jquery-ui "1.11.4"]
                 [matchbox "0.0.6"]]

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
                   :dependencies [
                                   [org.clojure/tools.namespace "0.2.7"]
                                   [org.clojure/tools.nrepl "0.2.10"]
                                   ;[figwheel "0.2.5"]
                                   [datascript "0.11.5"]
                                   ]

                    :plugins [[cider/cider-nrepl "0.10.0-SNAPSHOT"]
                              [lein-datomic "0.2.0"]
                              [lein-figwheel "0.3.7" :exclusions [org.clojure/tools.reader org.clojure/clojurescript clj-stacktrace]]
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
             "clean" ["cljsbuild" "once"]]}

  :jvm-opts ^:replace ~(jvm-opts)
  )
