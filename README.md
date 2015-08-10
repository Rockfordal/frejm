# frejm

A [re-frame](https://github.com/Day8/re-frame) application designed to ... well, that part is up to you.

## Development Mode

```
lein clean
lein figwheel
```

Figwheel will automatically push cljs changes to the browser.

Wait a bit, then browse to [http://localhost:3449](http://localhost:3449).

## Production Build

```
lein clean
lein cljsbuild once min
```


## Installing Datomic Pro

Kopiera resources/lowmem-transactor.properties till katalogen där datomic är
Klistra in din licens någonstans i den filen
Se till att protocol=dev
Samt att det står datomic:dev:// i config.clj

## Starting Datomic manually

```
cd <datomic-pro folder>
bin/transactor -Xms128m -Xmx256m lowmem-transactor.properties
```

Kom ihåg att även justera transactor-filens minnes-inställningar om du ändrar Xms, Xmx
Jag föreslår att göra en start.bat eller start.sh, eller att starta med plugin istället

## Starting Datomic with plugin

Gör anlu-datomic pluginnet tillgängligt så här

```
cd plugins/anlu-datomic
lein install
cd ../../
lein datomic start
```

Ange i lein profilen att det ska användas
Samt ange var datomic är


## ~/.lein/profiles.clj
{:user {
  :plugins [      [cider/cider-nrepl "0.10.0-SNAPSHOT"]
                  [lein-ancient "0.6.7"]  ; check for outdated dependencies
                  [lein-vanity "0.2.0"]   ; lines of code statistics
                  [anlu-datomic "0.2.0"]] ; lein datomic start

  :dependencies [
                  [org.clojure/tools.nrepl "0.2.10"]
                ]

  :datomic {
                  :config "/opt/datomic-pro/lowmem-transactor.properties"
                  :install-location "/opt/datomic-pro"
                  :env {"JAVA_OPTS" "-Xms128m -Xmx128m"}}
}}
