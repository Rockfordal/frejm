// Compiled by ClojureScript 0.0-3308 {}
goog.provide('rente.client.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('rente.client.handlers');
goog.require('rente.client.views');
goog.require('rente.client.subs');
goog.require('rente.client.routes');
goog.require('rente.client.ws');
goog.require('jayq.core');
goog.require('re_frame.core');
rente.client.app.parseinit = (function rente$client$app$parseinit(){
return Parse.initialize("mWR3FuLC0MB5Q1gm9rtKEfXeKoC6zuk4R7Ds66XG","0csWP1KiUZEwfZeearVtfp9gfnChIDGBoxozln9P");
});
if(typeof rente.client.app.state !== 'undefined'){
} else {
rente.client.app.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"RENTE",new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"re-render-flip","re-render-flip",1682025136),false], null));
}
if(typeof rente.client.app.handle_event !== 'undefined'){
} else {
rente.client.app.handle_event = (function (){var method_table__24319__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24320__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24321__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24322__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24323__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"rente.client.app","handle-event"),((function (method_table__24319__auto__,prefer_table__24320__auto__,method_cache__24321__auto__,cached_hierarchy__24322__auto__,hierarchy__24323__auto__){
return (function (data,p__32027){
var vec__32028 = p__32027;
var ev_id = cljs.core.nth.call(null,vec__32028,(0),null);
var ev_data = cljs.core.nth.call(null,vec__32028,(1),null);
return ev_id;
});})(method_table__24319__auto__,prefer_table__24320__auto__,method_cache__24321__auto__,cached_hierarchy__24322__auto__,hierarchy__24323__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24323__auto__,method_table__24319__auto__,prefer_table__24320__auto__,method_cache__24321__auto__,cached_hierarchy__24322__auto__));
})();
}
cljs.core._add_method.call(null,rente.client.app.handle_event,new cljs.core.Keyword(null,"default","default",-1987822328),(function (data,p__32030){
var vec__32031 = p__32030;
var _ = cljs.core.nth.call(null,vec__32031,(0),null);
var msg = cljs.core.nth.call(null,vec__32031,(1),null);
return cljs.core.swap_BANG_.call(null,data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages","messages",345434482)], null),((function (vec__32031,_,msg){
return (function (p1__32029_SHARP_){
return cljs.core.conj.call(null,p1__32029_SHARP_,msg);
});})(vec__32031,_,msg))
);
}));
rente.client.app.app = (function rente$client$app$app(data){
new cljs.core.Keyword(null,"re-render-flip","re-render-flip",1682025136).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.main_panel,data], null);
});
rente.client.app.mount_root = (function rente$client$app$mount_root(){
var temp__4423__auto__ = document.getElementById("main");
if(cljs.core.truth_(temp__4423__auto__)){
var root = temp__4423__auto__;
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.app.app,rente.client.app.state], null),root);
} else {
return null;
}
});
rente.client.app.$body = jayq.core.$.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
rente.client.app.main = (function rente$client$app$main(){
rente.client.app.parseinit.call(null);

rente.client.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return rente.client.app.mount_root.call(null);
});
goog.exportSymbol('rente.client.app.main', rente.client.app.main);

//# sourceMappingURL=app.js.map