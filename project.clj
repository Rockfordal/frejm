(def JVMOPTS
  "Per os jvm options. Options common to all cases go under
  `:any`. Options specific to one OS go under the key returned by
  `leiningen.core.eval/get-os` for that system. Temporarily disabled
  options can be kept under `:disabled`."
  {:any
   [
    ;"-server"                     ; -server = optimized for speed ;  client = optimized for launch time
    "-Xms512m" "-Xmx1g"           ; Minimum and maximum sizes of the heap
    "-XX:+UseParNewGC"            ; Use the new parallel GC in conjunction with
    "-XX:+UseConcMarkSweepGC"     ;  the concurrent garbage collector
    "-XX:+CMSConcurrentMTEnabled" ; Enable multi-threaded concurrent gc work (ParNewGC)
    "-XX:MaxGCPauseMillis=20"     ; Specify a target of 20ms for max gc pauses
    ;"-XX:+CMSIncrementalMode"     ; Do many small GC cycles to minimize pauses  #depecated i senaste jvm
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
  :description "Datomic, Component, Sente, Rum, Datascript"
  :url "http://enterlab.com"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.5.1"

  :dependencies [[environ "1.0.0"]
                 [org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.28"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/tools.logging "0.3.1"]
                 [ch.qos.logback/logback-classic "1.1.3"]
                 [org.clojure/algo.generic "0.1.2"]

                 ; Server
                 [ring/ring-core "1.3.2"]
                 [ring/ring-defaults "0.1.5"]
                 [fogus/ring-edn "0.3.0"]
                 [compojure "1.3.4"]
                 [http-kit "2.1.19"]
                 [datomic-schema "1.3.0"]
                 ;[liberator "0.12.0"]

                 [com.stuartsierra/component "0.2.3"]
                 [com.datomic/datomic-pro "0.9.5201"
                  :exclusions [joda-time
                               org.slf4j/jul-to-slf4j
                               org.slf4j/slf4j-nop]]

                 [com.taoensso/sente "1.5.0" :exclusions [org.clojure/tools.reader]]
                 [com.cognitect/transit-clj  "0.8.275" :exclusions [commons-codec]]
                 [com.cognitect/transit-cljs "0.8.220"]

                 ; Klient
                 [rum "0.2.7"]
                 [datascript "0.11.5"]
                 [secretary "1.2.3"]
                 [clj-json "0.5.3"]
                 [cljs-http "0.1.36"]
                 ;[cljsjs/highlight "8.4-0"]
                 ;[jayq "2.5.4"]
                 [org.webjars.bower/jquery "2.1.3"]
                 [org.webjars.bower/materialize "0.96.1" :exclusions [org.webjars.bower/jquery]]
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

  ;:main ^:skip-aot rente.run
  :main rente.run

  :datomic {:config "../../../../../../opt/datomic-pro/lowmem-transactor.properties"
            :install-location "/opt/datomic-pro"
            :env {"JAVA_OPTS" "-Xms128m -Xmx128m"}}

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

                    :plugins [[cider/cider-nrepl "0.10.0-SNAPSHOT"]
                              [anlu-datomic "0.2.0"]
                              [lein-figwheel "0.3.7" :exclusions [org.clojure/tools.reader org.clojure/clojurescript clj-stacktrace]]]

                    :cljsbuild
                    {:builds
                     {:client {:source-paths ["dev"]
                               :compiler
                                 {:optimizations :none
                                  :source-map true}}}

                    :whitespace {:source-paths ["src/cljs" "test/cljs" "src/brepl"]
                                :compiler
                                {:output-to "dev-resources/public/js/whitespace.js"
                                 :optimizations :whitespace
                                 :pretty-print true}}

                    :simple {:source-paths ["src/cljs" "test/cljs"]
                              :compiler
                              {:output-to "dev-resources/public/js/simple.js"
                               :optimizations :simple
                               :pretty-print false}}

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

  :jvm-opts ^:replace ~(jvm-opts)
  )
