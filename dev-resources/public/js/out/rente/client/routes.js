// Compiled by ClojureScript 0.0-3308 {}
goog.provide('rente.client.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
rente.client.routes.hook_browser_navigation_BANG_ = (function rente$client$routes$hook_browser_navigation_BANG_(){
var G__31371 = (new goog.History());
goog.events.listen(G__31371,goog.history.EventType.NAVIGATE,((function (G__31371){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__31371))
);

G__31371.setEnabled(true);

return G__31371;
});
rente.client.routes.app_routes = (function rente$client$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__29752__auto___31392 = (function (params__29753__auto__){
if(cljs.core.map_QMARK_.call(null,params__29753__auto__)){
var map__31382 = params__29753__auto__;
var map__31382__$1 = ((cljs.core.seq_QMARK_.call(null,map__31382))?cljs.core.apply.call(null,cljs.core.hash_map,map__31382):map__31382);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29753__auto__)){
var vec__31383 = params__29753__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__29752__auto___31392);


var action__29752__auto___31393 = (function (params__29753__auto__){
if(cljs.core.map_QMARK_.call(null,params__29753__auto__)){
var map__31384 = params__29753__auto__;
var map__31384__$1 = ((cljs.core.seq_QMARK_.call(null,map__31384))?cljs.core.apply.call(null,cljs.core.hash_map,map__31384):map__31384);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"parse-panel","parse-panel",194625166)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29753__auto__)){
var vec__31385 = params__29753__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"parse-panel","parse-panel",194625166)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/parse",action__29752__auto___31393);


var action__29752__auto___31394 = (function (params__29753__auto__){
if(cljs.core.map_QMARK_.call(null,params__29753__auto__)){
var map__31386 = params__29753__auto__;
var map__31386__$1 = ((cljs.core.seq_QMARK_.call(null,map__31386))?cljs.core.apply.call(null,cljs.core.hash_map,map__31386):map__31386);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29753__auto__)){
var vec__31387 = params__29753__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/companies",action__29752__auto___31394);


var action__29752__auto___31395 = (function (params__29753__auto__){
if(cljs.core.map_QMARK_.call(null,params__29753__auto__)){
var map__31388 = params__29753__auto__;
var map__31388__$1 = ((cljs.core.seq_QMARK_.call(null,map__31388))?cljs.core.apply.call(null,cljs.core.hash_map,map__31388):map__31388);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"call-panel","call-panel",949755051)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29753__auto__)){
var vec__31389 = params__29753__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"call-panel","call-panel",949755051)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/samtal",action__29752__auto___31395);


var action__29752__auto___31396 = (function (params__29753__auto__){
if(cljs.core.map_QMARK_.call(null,params__29753__auto__)){
var map__31390 = params__29753__auto__;
var map__31390__$1 = ((cljs.core.seq_QMARK_.call(null,map__31390))?cljs.core.apply.call(null,cljs.core.hash_map,map__31390):map__31390);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"project-panel","project-panel",-1020549326)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29753__auto__)){
var vec__31391 = params__29753__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"project-panel","project-panel",-1020549326)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/projekt",action__29752__auto___31396);


return rente.client.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map