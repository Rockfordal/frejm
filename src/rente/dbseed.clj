(ns rente.dbseed)

;    [;; produkt
;     {:db/id #db/id [:db.part/user -100]
;      :product/name "Ägg 6p"}

;     ; shelf
;     {:db/id #db/id [:db.part/user -200]
;      :shelf/name "C1"}

     ; item
;     {:db/id #db/id [:db.part/user -300]
;      :item/quantity 10
;      :item/product #db/id [:db.part/user -100]
;      :item/shelf #db/id [:db.part/user -200]}
;    ]

;; --- Sortiment ---
(def products
  [{:type :product
          :product/artnr 112390
          :product/name "Filmjölk"
          :product/price "49.90"}
  {:type  :product

          :product/name    "Prickig Korv"
          :product/price   "25"}])

(def shelfs
  [{:type :shelf
          :shelf/name      "C01"
          :shelf/location  "Rum 1"}
   {:type :shelf
          :shelf/name      "B01"
          :shelf/location  "Rum 27"}])

(def items
  [{:type :item
          :item/quantity 25}
   {:type :item
          :item/quantity 15}])

;; --- Callcenter ---

(def companies
  [{:type :company
          :company/name    "Baker Tilly"
          :company/orgnr   "483938-1134"
          :company/phone   "08-42424"
          :company/email   "tilly@billy.lab"
          :company/vd      "Johanesburg freidricht"}

   {:type :company
          :company/name    "Yellow-backed duiker"
          :company/orgnr   "483838-2424"
          :company/phone   "08-48398"
          :company/email   "yo@do.lab"
          :company/vd      "Greiger Wolfenstein"}])

(def projects
  [{:type :project
          :project/name  "Baker Tilly"
          :project/desc  "Första"}

   {:type :project
          :project/name  "nytt projekt"
          :project/desc  ""}])

(def aktiviteter
  [{:type :aktivitet
    :aktivitet/status 1}
   {:type :aktivitet
    :aktivitet/status 15}])

(def sni
  [{:type :sni :sni/code 10710 :sni/name "Tillverkning av mjukt matbröd och färska bakverk"}
   {:type :sni :sni/code 11010 :sni/name "Destillering, rening och tillblandning av spritdrycker"}
   {:type :sni :sni/code 18122 :sni/name "Tryckning av böcker och övriga trycksaker"}
   {:type :sni :sni/code 35210 :sni/name "Framställning av gas"}
   {:type :sni :sni/code 43320 :sni/name "Byggnadssnickeriarbeten"}
   {:type :sni :sni/code 43341 :sni/name "Måleriarbeten"}
   {:type :sni :sni/code 45201 :sni/name "Allmän service och reparation av motorfordon utom motorcyklar"}
   {:type :sni :sni/code 46750 :sni/name "Partihandel med kemiska produkter"}
   {:type :sni :sni/code 47641 :sni/name "Specialiserad butikshandel med sport- och fritidsartiklar utom cyklar och båtar"}
   {:type :sni :sni/code 47916 :sni/name "Postorderhandel och detaljhandel på Internet med bosättningsvaror"}
   {:type :sni :sni/code 50202 :sni/name "Icke reguljär sjötrafik över hav och kust av gods"}
   {:type :sni :sni/code 56210 :sni/name "Cateringverksamhet vid enskilda evenemang"}
   {:type :sni :sni/code 58190 :sni/name "Annan förlagsverksamhet"}
   {:type :sni :sni/code 58290 :sni/name "Utgivning av annan programvara"}
   {:type :sni :sni/code 59200 :sni/name "Ljudinspelning och fonogramutgivning"}
   {:type :sni :sni/code 61900 :sni/name "Annan telekommunikation"}
   {:type :sni :sni/code 62010 :sni/name "Dataprogrammering"}
   {:type :sni :sni/code 62020 :sni/name "Datakonsultverksamhet"}
   {:type :sni :sni/code 63110 :sni/name "Databehandling, hosting o.d."}
   {:type :sni :sni/code 64992 :sni/name "Handel med och förvaltning av värdepapper, för egen räkning"}
   {:type :sni :sni/code 66220 :sni/name "Verksamhet utförd av försäkringsombud och försäkringsmäklare"}
   {:type :sni :sni/code 69102 :sni/name "Juridiska byråers verksamhet m.m."}
   {:type :sni :sni/code 70210 :sni/name "PR och kommunikation"}
   {:type :sni :sni/code 70220 :sni/name "Konsultverksamhet avseende företags organisation"}
   {:type :sni :sni/code 71110 :sni/name "Arkitektverksamhet"}
   {:type :sni :sni/code 71121 :sni/name "Teknisk konsultverksamhet inom bygg- och anläggningsteknik"}
   {:type :sni :sni/code 71123 :sni/name "Teknisk konsultverksamhet inom elteknik"}
   {:type :sni :sni/code 71124 :sni/name "Teknisk konsultverksamhet inom energi-, miljö- och VVS-teknik"}
   {:type :sni :sni/code 73111 :sni/name "Reklambyråverksamhet"}
   {:type :sni :sni/code 73119 :sni/name "Övrig reklamverksamhet"}
   {:type :sni :sni/code 73120 :sni/name "Mediebyråverksamhet och annonsförsäljning"}
   {:type :sni :sni/code 74102 :sni/name "Grafisk designverksamhet"}
   {:type :sni :sni/code 74900 :sni/name "Övrig verksamhet inom juridik, ekonomi, vetenskap och teknik"}
   {:type :sni :sni/code 78100 :sni/name "Arbetsförmedling och rekrytering"}
   {:type :sni :sni/code 78200 :sni/name "Personaluthyrning"}
   {:type :sni :sni/code 79120 :sni/name "Researrangemang"}
   {:type :sni :sni/code 81100 :sni/name "Fastighetsrelaterade stödtjänster"}
   {:type :sni :sni/code 81210 :sni/name "Lokalvård"}
   {:type :sni :sni/code 82300 :sni/name "Arrangemang av kongresser och mässor"}
   {:type :sni :sni/code 85594 :sni/name "Personalutbildning"}
   {:type :sni :sni/code 90020 :sni/name "Stödtjänster till artistisk verksamhet"}
   {:type :sni :sni/code 96090 :sni/name "Övriga konsumenttjänster"}])

(defn seed-data []
  (concat
    products shelfs items
    projects companies aktiviteter))
