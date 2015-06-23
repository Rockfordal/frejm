// Compiled by ClojureScript 0.0-3308 {}
goog.provide('rente.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
rente.routes.hook_browser_navigation_BANG_ = (function rente$routes$hook_browser_navigation_BANG_(){
var G__31232 = (new goog.History());
goog.events.listen(G__31232,goog.history.EventType.NAVIGATE,((function (G__31232){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__31232))
);

G__31232.setEnabled(true);

return G__31232;
});
rente.routes.app_routes = (function rente$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__30959__auto___31253 = (function (params__30960__auto__){
if(cljs.core.map_QMARK_.call(null,params__30960__auto__)){
var map__31243 = params__30960__auto__;
var map__31243__$1 = ((cljs.core.seq_QMARK_.call(null,map__31243))?cljs.core.apply.call(null,cljs.core.hash_map,map__31243):map__31243);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__30960__auto__)){
var vec__31244 = params__30960__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__30959__auto___31253);


var action__30959__auto___31254 = (function (params__30960__auto__){
if(cljs.core.map_QMARK_.call(null,params__30960__auto__)){
var map__31245 = params__30960__auto__;
var map__31245__$1 = ((cljs.core.seq_QMARK_.call(null,map__31245))?cljs.core.apply.call(null,cljs.core.hash_map,map__31245):map__31245);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"parse-panel","parse-panel",194625166)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__30960__auto__)){
var vec__31246 = params__30960__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"parse-panel","parse-panel",194625166)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/parse",action__30959__auto___31254);


var action__30959__auto___31255 = (function (params__30960__auto__){
if(cljs.core.map_QMARK_.call(null,params__30960__auto__)){
var map__31247 = params__30960__auto__;
var map__31247__$1 = ((cljs.core.seq_QMARK_.call(null,map__31247))?cljs.core.apply.call(null,cljs.core.hash_map,map__31247):map__31247);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__30960__auto__)){
var vec__31248 = params__30960__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/companies",action__30959__auto___31255);


var action__30959__auto___31256 = (function (params__30960__auto__){
if(cljs.core.map_QMARK_.call(null,params__30960__auto__)){
var map__31249 = params__30960__auto__;
var map__31249__$1 = ((cljs.core.seq_QMARK_.call(null,map__31249))?cljs.core.apply.call(null,cljs.core.hash_map,map__31249):map__31249);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"call-panel","call-panel",949755051)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__30960__auto__)){
var vec__31250 = params__30960__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"call-panel","call-panel",949755051)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/samtal",action__30959__auto___31256);


var action__30959__auto___31257 = (function (params__30960__auto__){
if(cljs.core.map_QMARK_.call(null,params__30960__auto__)){
var map__31251 = params__30960__auto__;
var map__31251__$1 = ((cljs.core.seq_QMARK_.call(null,map__31251))?cljs.core.apply.call(null,cljs.core.hash_map,map__31251):map__31251);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"project-panel","project-panel",-1020549326)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__30960__auto__)){
var vec__31252 = params__30960__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"project-panel","project-panel",-1020549326)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/projekt",action__30959__auto___31257);


return rente.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map