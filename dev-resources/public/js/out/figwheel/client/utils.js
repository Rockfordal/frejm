// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_();
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !(((goog["nodeGlobalRequire"]) == null));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"html","html",-998796897);
} else {
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);

}
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(){
var G__34772 = arguments.length;
switch (G__34772) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__34773 = cljs.core._EQ_;
var expr__34774 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__34773.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__34774))){
return ((function (pred__34773,expr__34774){
return (function (p1__34767_SHARP_){
return console.warn(p1__34767_SHARP_);
});
;})(pred__34773,expr__34774))
} else {
if(cljs.core.truth_(pred__34773.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__34774))){
return ((function (pred__34773,expr__34774){
return (function (p1__34768_SHARP_){
return console.debug(p1__34768_SHARP_);
});
;})(pred__34773,expr__34774))
} else {
if(cljs.core.truth_(pred__34773.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__34774))){
return ((function (pred__34773,expr__34774){
return (function (p1__34769_SHARP_){
return console.error(p1__34769_SHARP_);
});
;})(pred__34773,expr__34774))
} else {
return ((function (pred__34773,expr__34774){
return (function (p1__34770_SHARP_){
return console.log(p1__34770_SHARP_);
});
;})(pred__34773,expr__34774))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=utils.js.map