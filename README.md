## Development Mode

```
lein clean
lein figwheel
```

Kör startfig om du använder Linux / Mac
Vänta ett tag, och surfa till http://localhost:3000/
Figwheel kommer automatiskt skicka clojurescript-ändringar till din webläsare.

Starta fin favorit-editor (Emacs, IntelliJ, Lighttable, Atom, Vim) och anslut till nREPL på port 7888
skriv (run) och surfa till http://localhost:3001/
clojure-servern startar nu med Databas, Sente Websocket kanaler, Compojure router

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

OBS! Det verkar som om pluginet i sig tar upp en helt egen JAVA process inklusive RAM
Så det kanske är klokare att köra startdb scriptet istället
Dessutom ser du inte felmeddelanden, så om din dators hostname inte mappar mot en giltig ip
, då kommer det se ut som den startat, fast inget kommer funka


Gör anlu-datomic pluginnet tillgängligt så här

```
cd plugins/anlu-datomic
lein install
cd ../../
lein datomic start
```

Ange i lein profilen att det ska användas
Samt ange var datomic är


Gör så här i din ~/.lein/profiles.clj för att använda pluginnet:

```
{:user {
  :plugins [      [cider/cider-nrepl "0.10.0-SNAPSHOT"]
                  [lein-ancient "0.6.7"]  ; check for outdated dependencies
                  [lein-vanity "0.2.0"]   ; lines of code statistics
                  [anlu-datomic "0.2.0"]] ; lein datomic start

  :dependencies [ [org.clojure/tools.nrepl "0.2.10"] ]

  :datomic {      :config "/opt/datomic-pro/lowmem-transactor.properties"
                  :install-location "/opt/datomic-pro"
                  :env {"JAVA_OPTS" "-Xms128m -Xmx128m"}}
}}
```


## Production Build (ejklar)

```
lein clean
lein cljsbuild once min
./startprod
```

## Tips

På osx, mac
Trampoline kan eventuellt göra att den startar snabbare
Men jag vet inte om det är så stor skillnad

``` rlwrap lein figwheel ```

``` rlwrap lein trampoline figwheel ```
