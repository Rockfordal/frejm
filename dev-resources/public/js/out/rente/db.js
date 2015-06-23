// Compiled by ClojureScript 0.0-3308 {}
goog.provide('rente.db');
goog.require('cljs.core');
rente.db.default_db = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"re-frame",new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"000",new cljs.core.Keyword(null,"desc","desc",2093485764),"noll"], null),new cljs.core.Keyword(null,"people","people",1443537404),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"firstname","firstname",1659984849),"Nils",new cljs.core.Keyword(null,"lastname","lastname",-265181465),"Ohlsson",new cljs.core.Keyword(null,"age","age",-604307804),(45)], null)], null);
if(typeof rente.db.state !== 'undefined'){
} else {
rente.db.state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"currentpage","currentpage",-480118203),new cljs.core.Keyword(null,"saved?","saved?",-2027163192),new cljs.core.Keyword(null,"search-input","search-input",-576916149),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"re-render-flip","re-render-flip",1682025136),new cljs.core.Keyword(null,"counter","counter",804008177),new cljs.core.Keyword(null,"current-company","current-company",769850934),new cljs.core.Keyword(null,"order-prop","order-prop",-1545508264),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"current-project","current-project",903630396),new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"a","a",-2123407586)],["-",false,"","Bas",false,(0),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Test AB",new cljs.core.Keyword(null,"orgnr","orgnr",566375899),"12345-6789",new cljs.core.Keyword(null,"note","note",1426297904),"Mja"], null),"name",cljs.core.PersistentArrayMap.EMPTY,"Bagar Troll",new cljs.core.Keyword(null,"nil","nil",99600501),(1)]));
}
rente.db.set_value_BANG_ = (function rente$db$set_value_BANG_(id,value){
cljs.core.swap_BANG_.call(null,rente.db.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false);

return cljs.core.swap_BANG_.call(null,rente.db.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null),value);
});
rente.db.get_value = (function rente$db$get_value(id){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,rente.db.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null));
});
rente.db.put_BANG_ = (function rente$db$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,rente.db.state,cljs.core.assoc,k,v);
});

//# sourceMappingURL=db.js.map