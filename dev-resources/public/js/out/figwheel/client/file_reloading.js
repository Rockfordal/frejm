// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__34779_SHARP_,p2__34780_SHARP_){
var and__23224__auto__ = p1__34779_SHARP_;
if(cljs.core.truth_(and__23224__auto__)){
return p2__34780_SHARP_;
} else {
return and__23224__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__23236__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__23236__auto__){
return or__23236__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__34782_SHARP_,p2__34781_SHARP_){
return [cljs.core.str(p2__34781_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__23236__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__23236__auto__){
return or__23236__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__23236__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__23236__auto__)){
return or__23236__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__24131__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24132__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24133__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24134__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24135__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24135__auto__,method_table__24131__auto__,prefer_table__24132__auto__,method_cache__24133__auto__,cached_hierarchy__24134__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__34783){
var map__34784 = p__34783;
var map__34784__$1 = ((cljs.core.seq_QMARK_.call(null,map__34784))?cljs.core.apply.call(null,cljs.core.hash_map,map__34784):map__34784);
var file = cljs.core.get.call(null,map__34784__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__34785){
var map__34786 = p__34785;
var map__34786__$1 = ((cljs.core.seq_QMARK_.call(null,map__34786))?cljs.core.apply.call(null,cljs.core.hash_map,map__34786):map__34786);
var namespace = cljs.core.get.call(null,map__34786__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__24131__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24132__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24133__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24134__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24135__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24135__auto__,method_table__24131__auto__,prefer_table__24132__auto__,method_cache__24133__auto__,cached_hierarchy__24134__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e34787){if((e34787 instanceof Error)){
var e = e34787;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34787;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__34789 = arguments.length;
switch (G__34789) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34791,callback){
var map__34793 = p__34791;
var map__34793__$1 = ((cljs.core.seq_QMARK_.call(null,map__34793))?cljs.core.apply.call(null,cljs.core.hash_map,map__34793):map__34793);
var file_msg = map__34793__$1;
var request_url = cljs.core.get.call(null,map__34793__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34793,map__34793__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34793,map__34793__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34794){
var map__34796 = p__34794;
var map__34796__$1 = ((cljs.core.seq_QMARK_.call(null,map__34796))?cljs.core.apply.call(null,cljs.core.hash_map,map__34796):map__34796);
var file_msg = map__34796__$1;
var namespace = cljs.core.get.call(null,map__34796__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__34796__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__23236__auto__ = meta_data;
if(cljs.core.truth_(or__23236__auto__)){
return or__23236__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__23224__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__23224__auto__){
var or__23236__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__23236__auto__)){
return or__23236__auto__;
} else {
var or__23236__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__23236__auto____$1)){
return or__23236__auto____$1;
} else {
var and__23224__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__23224__auto____$1){
var or__23236__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__23236__auto____$2){
return or__23236__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__23224__auto____$1;
}
}
}
} else {
return and__23224__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34797,callback){
var map__34799 = p__34797;
var map__34799__$1 = ((cljs.core.seq_QMARK_.call(null,map__34799))?cljs.core.apply.call(null,cljs.core.hash_map,map__34799):map__34799);
var file_msg = map__34799__$1;
var request_url = cljs.core.get.call(null,map__34799__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34799__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25333__auto___34886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto___34886,out){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto___34886,out){
return (function (state_34868){
var state_val_34869 = (state_34868[(1)]);
if((state_val_34869 === (1))){
var inst_34846 = cljs.core.nth.call(null,files,(0),null);
var inst_34847 = cljs.core.nthnext.call(null,files,(1));
var inst_34848 = files;
var state_34868__$1 = (function (){var statearr_34870 = state_34868;
(statearr_34870[(7)] = inst_34848);

(statearr_34870[(8)] = inst_34846);

(statearr_34870[(9)] = inst_34847);

return statearr_34870;
})();
var statearr_34871_34887 = state_34868__$1;
(statearr_34871_34887[(2)] = null);

(statearr_34871_34887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (2))){
var inst_34848 = (state_34868[(7)]);
var inst_34851 = (state_34868[(10)]);
var inst_34851__$1 = cljs.core.nth.call(null,inst_34848,(0),null);
var inst_34852 = cljs.core.nthnext.call(null,inst_34848,(1));
var inst_34853 = (inst_34851__$1 == null);
var inst_34854 = cljs.core.not.call(null,inst_34853);
var state_34868__$1 = (function (){var statearr_34872 = state_34868;
(statearr_34872[(11)] = inst_34852);

(statearr_34872[(10)] = inst_34851__$1);

return statearr_34872;
})();
if(inst_34854){
var statearr_34873_34888 = state_34868__$1;
(statearr_34873_34888[(1)] = (4));

} else {
var statearr_34874_34889 = state_34868__$1;
(statearr_34874_34889[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (3))){
var inst_34866 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34868__$1,inst_34866);
} else {
if((state_val_34869 === (4))){
var inst_34851 = (state_34868[(10)]);
var inst_34856 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34851);
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34868__$1,(7),inst_34856);
} else {
if((state_val_34869 === (5))){
var inst_34862 = cljs.core.async.close_BANG_.call(null,out);
var state_34868__$1 = state_34868;
var statearr_34875_34890 = state_34868__$1;
(statearr_34875_34890[(2)] = inst_34862);

(statearr_34875_34890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (6))){
var inst_34864 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
var statearr_34876_34891 = state_34868__$1;
(statearr_34876_34891[(2)] = inst_34864);

(statearr_34876_34891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (7))){
var inst_34852 = (state_34868[(11)]);
var inst_34858 = (state_34868[(2)]);
var inst_34859 = cljs.core.async.put_BANG_.call(null,out,inst_34858);
var inst_34848 = inst_34852;
var state_34868__$1 = (function (){var statearr_34877 = state_34868;
(statearr_34877[(7)] = inst_34848);

(statearr_34877[(12)] = inst_34859);

return statearr_34877;
})();
var statearr_34878_34892 = state_34868__$1;
(statearr_34878_34892[(2)] = null);

(statearr_34878_34892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__25333__auto___34886,out))
;
return ((function (switch__25271__auto__,c__25333__auto___34886,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25272__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25272__auto____0 = (function (){
var statearr_34882 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34882[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25272__auto__);

(statearr_34882[(1)] = (1));

return statearr_34882;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25272__auto____1 = (function (state_34868){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_34868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e34883){if((e34883 instanceof Object)){
var ex__25275__auto__ = e34883;
var statearr_34884_34893 = state_34868;
(statearr_34884_34893[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34894 = state_34868;
state_34868 = G__34894;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25272__auto__ = function(state_34868){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25272__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25272__auto____1.call(this,state_34868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25272__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25272__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto___34886,out))
})();
var state__25335__auto__ = (function (){var statearr_34885 = f__25334__auto__.call(null);
(statearr_34885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___34886);

return statearr_34885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto___34886,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__34895,p__34896){
var map__34899 = p__34895;
var map__34899__$1 = ((cljs.core.seq_QMARK_.call(null,map__34899))?cljs.core.apply.call(null,cljs.core.hash_map,map__34899):map__34899);
var opts = map__34899__$1;
var url_rewriter = cljs.core.get.call(null,map__34899__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__34900 = p__34896;
var map__34900__$1 = ((cljs.core.seq_QMARK_.call(null,map__34900))?cljs.core.apply.call(null,cljs.core.hash_map,map__34900):map__34900);
var file_msg = map__34900__$1;
var file = cljs.core.get.call(null,map__34900__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34901){
var map__34904 = p__34901;
var map__34904__$1 = ((cljs.core.seq_QMARK_.call(null,map__34904))?cljs.core.apply.call(null,cljs.core.hash_map,map__34904):map__34904);
var eval_body__$1 = cljs.core.get.call(null,map__34904__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34904__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__23224__auto__ = eval_body__$1;
if(cljs.core.truth_(and__23224__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__23224__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e34905){var e = e34905;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34910,p__34911){
var map__35112 = p__34910;
var map__35112__$1 = ((cljs.core.seq_QMARK_.call(null,map__35112))?cljs.core.apply.call(null,cljs.core.hash_map,map__35112):map__35112);
var opts = map__35112__$1;
var before_jsload = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__35113 = p__34911;
var map__35113__$1 = ((cljs.core.seq_QMARK_.call(null,map__35113))?cljs.core.apply.call(null,cljs.core.hash_map,map__35113):map__35113);
var msg = map__35113__$1;
var files = cljs.core.get.call(null,map__35113__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__25333__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto__,map__35112,map__35112__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35113,map__35113__$1,msg,files){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto__,map__35112,map__35112__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35113,map__35113__$1,msg,files){
return (function (state_35237){
var state_val_35238 = (state_35237[(1)]);
if((state_val_35238 === (7))){
var inst_35126 = (state_35237[(7)]);
var inst_35127 = (state_35237[(8)]);
var inst_35124 = (state_35237[(9)]);
var inst_35125 = (state_35237[(10)]);
var inst_35132 = cljs.core._nth.call(null,inst_35125,inst_35127);
var inst_35133 = figwheel.client.file_reloading.eval_body.call(null,inst_35132);
var inst_35134 = (inst_35127 + (1));
var tmp35239 = inst_35126;
var tmp35240 = inst_35124;
var tmp35241 = inst_35125;
var inst_35124__$1 = tmp35240;
var inst_35125__$1 = tmp35241;
var inst_35126__$1 = tmp35239;
var inst_35127__$1 = inst_35134;
var state_35237__$1 = (function (){var statearr_35242 = state_35237;
(statearr_35242[(7)] = inst_35126__$1);

(statearr_35242[(8)] = inst_35127__$1);

(statearr_35242[(9)] = inst_35124__$1);

(statearr_35242[(11)] = inst_35133);

(statearr_35242[(10)] = inst_35125__$1);

return statearr_35242;
})();
var statearr_35243_35312 = state_35237__$1;
(statearr_35243_35312[(2)] = null);

(statearr_35243_35312[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (20))){
var inst_35170 = (state_35237[(12)]);
var inst_35174 = (state_35237[(13)]);
var inst_35176 = (state_35237[(14)]);
var inst_35169 = (state_35237[(15)]);
var inst_35173 = (state_35237[(16)]);
var inst_35179 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35181 = (function (){var all_files = inst_35169;
var files_SINGLEQUOTE_ = inst_35170;
var res_SINGLEQUOTE_ = inst_35173;
var res = inst_35174;
var files_not_loaded = inst_35176;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35170,inst_35174,inst_35176,inst_35169,inst_35173,inst_35179,state_val_35238,c__25333__auto__,map__35112,map__35112__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35113,map__35113__$1,msg,files){
return (function (p__35180){
var map__35244 = p__35180;
var map__35244__$1 = ((cljs.core.seq_QMARK_.call(null,map__35244))?cljs.core.apply.call(null,cljs.core.hash_map,map__35244):map__35244);
var namespace = cljs.core.get.call(null,map__35244__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35244__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35170,inst_35174,inst_35176,inst_35169,inst_35173,inst_35179,state_val_35238,c__25333__auto__,map__35112,map__35112__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35113,map__35113__$1,msg,files))
})();
var inst_35182 = cljs.core.map.call(null,inst_35181,inst_35174);
var inst_35183 = cljs.core.pr_str.call(null,inst_35182);
var inst_35184 = figwheel.client.utils.log.call(null,inst_35183);
var inst_35185 = (function (){var all_files = inst_35169;
var files_SINGLEQUOTE_ = inst_35170;
var res_SINGLEQUOTE_ = inst_35173;
var res = inst_35174;
var files_not_loaded = inst_35176;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35170,inst_35174,inst_35176,inst_35169,inst_35173,inst_35179,inst_35181,inst_35182,inst_35183,inst_35184,state_val_35238,c__25333__auto__,map__35112,map__35112__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35113,map__35113__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35170,inst_35174,inst_35176,inst_35169,inst_35173,inst_35179,inst_35181,inst_35182,inst_35183,inst_35184,state_val_35238,c__25333__auto__,map__35112,map__35112__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35113,map__35113__$1,msg,files))
})();
var inst_35186 = setTimeout(inst_35185,(10));
var state_35237__$1 = (function (){var statearr_35245 = state_35237;
(statearr_35245[(17)] = inst_35179);

(statearr_35245[(18)] = inst_35184);

return statearr_35245;
})();
var statearr_35246_35313 = state_35237__$1;
(statearr_35246_35313[(2)] = inst_35186);

(statearr_35246_35313[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (27))){
var inst_35196 = (state_35237[(19)]);
var state_35237__$1 = state_35237;
var statearr_35247_35314 = state_35237__$1;
(statearr_35247_35314[(2)] = inst_35196);

(statearr_35247_35314[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (1))){
var inst_35116 = (state_35237[(20)]);
var inst_35114 = before_jsload.call(null,files);
var inst_35115 = (function (){return ((function (inst_35116,inst_35114,state_val_35238,c__25333__auto__,map__35112,map__35112__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35113,map__35113__$1,msg,files){
return (function (p1__34906_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34906_SHARP_);
});
;})(inst_35116,inst_35114,state_val_35238,c__25333__auto__,map__35112,map__35112__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35113,map__35113__$1,msg,files))
})();
var inst_35116__$1 = cljs.core.filter.call(null,inst_35115,files);
var inst_35117 = cljs.core.not_empty.call(null,inst_35116__$1);
var state_35237__$1 = (function (){var statearr_35248 = state_35237;
(statearr_35248[(20)] = inst_35116__$1);

(statearr_35248[(21)] = inst_35114);

return statearr_35248;
})();
if(cljs.core.truth_(inst_35117)){
var statearr_35249_35315 = state_35237__$1;
(statearr_35249_35315[(1)] = (2));

} else {
var statearr_35250_35316 = state_35237__$1;
(statearr_35250_35316[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (24))){
var state_35237__$1 = state_35237;
var statearr_35251_35317 = state_35237__$1;
(statearr_35251_35317[(2)] = null);

(statearr_35251_35317[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (4))){
var inst_35161 = (state_35237[(2)]);
var inst_35162 = (function (){return ((function (inst_35161,state_val_35238,c__25333__auto__,map__35112,map__35112__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35113,map__35113__$1,msg,files){
return (function (p1__34907_SHARP_){
var and__23224__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34907_SHARP_);
if(cljs.core.truth_(and__23224__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34907_SHARP_));
} else {
return and__23224__auto__;
}
});
;})(inst_35161,state_val_35238,c__25333__auto__,map__35112,map__35112__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35113,map__35113__$1,msg,files))
})();
var inst_35163 = cljs.core.filter.call(null,inst_35162,files);
var state_35237__$1 = (function (){var statearr_35252 = state_35237;
(statearr_35252[(22)] = inst_35163);

(statearr_35252[(23)] = inst_35161);

return statearr_35252;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_35253_35318 = state_35237__$1;
(statearr_35253_35318[(1)] = (16));

} else {
var statearr_35254_35319 = state_35237__$1;
(statearr_35254_35319[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (15))){
var inst_35151 = (state_35237[(2)]);
var state_35237__$1 = state_35237;
var statearr_35255_35320 = state_35237__$1;
(statearr_35255_35320[(2)] = inst_35151);

(statearr_35255_35320[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (21))){
var state_35237__$1 = state_35237;
var statearr_35256_35321 = state_35237__$1;
(statearr_35256_35321[(2)] = null);

(statearr_35256_35321[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (31))){
var inst_35204 = (state_35237[(24)]);
var inst_35214 = (state_35237[(2)]);
var inst_35215 = cljs.core.not_empty.call(null,inst_35204);
var state_35237__$1 = (function (){var statearr_35257 = state_35237;
(statearr_35257[(25)] = inst_35214);

return statearr_35257;
})();
if(cljs.core.truth_(inst_35215)){
var statearr_35258_35322 = state_35237__$1;
(statearr_35258_35322[(1)] = (32));

} else {
var statearr_35259_35323 = state_35237__$1;
(statearr_35259_35323[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (32))){
var inst_35204 = (state_35237[(24)]);
var inst_35217 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35204);
var inst_35218 = cljs.core.pr_str.call(null,inst_35217);
var inst_35219 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_35218)].join('');
var inst_35220 = figwheel.client.utils.log.call(null,inst_35219);
var state_35237__$1 = state_35237;
var statearr_35260_35324 = state_35237__$1;
(statearr_35260_35324[(2)] = inst_35220);

(statearr_35260_35324[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (33))){
var state_35237__$1 = state_35237;
var statearr_35261_35325 = state_35237__$1;
(statearr_35261_35325[(2)] = null);

(statearr_35261_35325[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (13))){
var inst_35137 = (state_35237[(26)]);
var inst_35141 = cljs.core.chunk_first.call(null,inst_35137);
var inst_35142 = cljs.core.chunk_rest.call(null,inst_35137);
var inst_35143 = cljs.core.count.call(null,inst_35141);
var inst_35124 = inst_35142;
var inst_35125 = inst_35141;
var inst_35126 = inst_35143;
var inst_35127 = (0);
var state_35237__$1 = (function (){var statearr_35262 = state_35237;
(statearr_35262[(7)] = inst_35126);

(statearr_35262[(8)] = inst_35127);

(statearr_35262[(9)] = inst_35124);

(statearr_35262[(10)] = inst_35125);

return statearr_35262;
})();
var statearr_35263_35326 = state_35237__$1;
(statearr_35263_35326[(2)] = null);

(statearr_35263_35326[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (22))){
var inst_35176 = (state_35237[(14)]);
var inst_35189 = (state_35237[(2)]);
var inst_35190 = cljs.core.not_empty.call(null,inst_35176);
var state_35237__$1 = (function (){var statearr_35264 = state_35237;
(statearr_35264[(27)] = inst_35189);

return statearr_35264;
})();
if(cljs.core.truth_(inst_35190)){
var statearr_35265_35327 = state_35237__$1;
(statearr_35265_35327[(1)] = (23));

} else {
var statearr_35266_35328 = state_35237__$1;
(statearr_35266_35328[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (36))){
var state_35237__$1 = state_35237;
var statearr_35267_35329 = state_35237__$1;
(statearr_35267_35329[(2)] = null);

(statearr_35267_35329[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (29))){
var inst_35203 = (state_35237[(28)]);
var inst_35208 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35203);
var inst_35209 = cljs.core.pr_str.call(null,inst_35208);
var inst_35210 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35209)].join('');
var inst_35211 = figwheel.client.utils.log.call(null,inst_35210);
var state_35237__$1 = state_35237;
var statearr_35268_35330 = state_35237__$1;
(statearr_35268_35330[(2)] = inst_35211);

(statearr_35268_35330[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (6))){
var inst_35158 = (state_35237[(2)]);
var state_35237__$1 = state_35237;
var statearr_35269_35331 = state_35237__$1;
(statearr_35269_35331[(2)] = inst_35158);

(statearr_35269_35331[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (28))){
var inst_35203 = (state_35237[(28)]);
var inst_35202 = (state_35237[(2)]);
var inst_35203__$1 = cljs.core.get.call(null,inst_35202,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35204 = cljs.core.get.call(null,inst_35202,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_35205 = cljs.core.get.call(null,inst_35202,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35206 = cljs.core.not_empty.call(null,inst_35203__$1);
var state_35237__$1 = (function (){var statearr_35270 = state_35237;
(statearr_35270[(29)] = inst_35205);

(statearr_35270[(28)] = inst_35203__$1);

(statearr_35270[(24)] = inst_35204);

return statearr_35270;
})();
if(cljs.core.truth_(inst_35206)){
var statearr_35271_35332 = state_35237__$1;
(statearr_35271_35332[(1)] = (29));

} else {
var statearr_35272_35333 = state_35237__$1;
(statearr_35272_35333[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (25))){
var inst_35235 = (state_35237[(2)]);
var state_35237__$1 = state_35237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35237__$1,inst_35235);
} else {
if((state_val_35238 === (34))){
var inst_35205 = (state_35237[(29)]);
var inst_35223 = (state_35237[(2)]);
var inst_35224 = cljs.core.not_empty.call(null,inst_35205);
var state_35237__$1 = (function (){var statearr_35273 = state_35237;
(statearr_35273[(30)] = inst_35223);

return statearr_35273;
})();
if(cljs.core.truth_(inst_35224)){
var statearr_35274_35334 = state_35237__$1;
(statearr_35274_35334[(1)] = (35));

} else {
var statearr_35275_35335 = state_35237__$1;
(statearr_35275_35335[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (17))){
var inst_35163 = (state_35237[(22)]);
var state_35237__$1 = state_35237;
var statearr_35276_35336 = state_35237__$1;
(statearr_35276_35336[(2)] = inst_35163);

(statearr_35276_35336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (3))){
var state_35237__$1 = state_35237;
var statearr_35277_35337 = state_35237__$1;
(statearr_35277_35337[(2)] = null);

(statearr_35277_35337[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (12))){
var inst_35154 = (state_35237[(2)]);
var state_35237__$1 = state_35237;
var statearr_35278_35338 = state_35237__$1;
(statearr_35278_35338[(2)] = inst_35154);

(statearr_35278_35338[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (2))){
var inst_35116 = (state_35237[(20)]);
var inst_35123 = cljs.core.seq.call(null,inst_35116);
var inst_35124 = inst_35123;
var inst_35125 = null;
var inst_35126 = (0);
var inst_35127 = (0);
var state_35237__$1 = (function (){var statearr_35279 = state_35237;
(statearr_35279[(7)] = inst_35126);

(statearr_35279[(8)] = inst_35127);

(statearr_35279[(9)] = inst_35124);

(statearr_35279[(10)] = inst_35125);

return statearr_35279;
})();
var statearr_35280_35339 = state_35237__$1;
(statearr_35280_35339[(2)] = null);

(statearr_35280_35339[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (23))){
var inst_35170 = (state_35237[(12)]);
var inst_35196 = (state_35237[(19)]);
var inst_35174 = (state_35237[(13)]);
var inst_35176 = (state_35237[(14)]);
var inst_35169 = (state_35237[(15)]);
var inst_35173 = (state_35237[(16)]);
var inst_35192 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35195 = (function (){var all_files = inst_35169;
var files_SINGLEQUOTE_ = inst_35170;
var res_SINGLEQUOTE_ = inst_35173;
var res = inst_35174;
var files_not_loaded = inst_35176;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35170,inst_35196,inst_35174,inst_35176,inst_35169,inst_35173,inst_35192,state_val_35238,c__25333__auto__,map__35112,map__35112__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35113,map__35113__$1,msg,files){
return (function (p__35194){
var map__35281 = p__35194;
var map__35281__$1 = ((cljs.core.seq_QMARK_.call(null,map__35281))?cljs.core.apply.call(null,cljs.core.hash_map,map__35281):map__35281);
var meta_data = cljs.core.get.call(null,map__35281__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35170,inst_35196,inst_35174,inst_35176,inst_35169,inst_35173,inst_35192,state_val_35238,c__25333__auto__,map__35112,map__35112__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35113,map__35113__$1,msg,files))
})();
var inst_35196__$1 = cljs.core.group_by.call(null,inst_35195,inst_35176);
var inst_35197 = cljs.core.seq_QMARK_.call(null,inst_35196__$1);
var state_35237__$1 = (function (){var statearr_35282 = state_35237;
(statearr_35282[(19)] = inst_35196__$1);

(statearr_35282[(31)] = inst_35192);

return statearr_35282;
})();
if(inst_35197){
var statearr_35283_35340 = state_35237__$1;
(statearr_35283_35340[(1)] = (26));

} else {
var statearr_35284_35341 = state_35237__$1;
(statearr_35284_35341[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (35))){
var inst_35205 = (state_35237[(29)]);
var inst_35226 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35205);
var inst_35227 = cljs.core.pr_str.call(null,inst_35226);
var inst_35228 = [cljs.core.str("not required: "),cljs.core.str(inst_35227)].join('');
var inst_35229 = figwheel.client.utils.log.call(null,inst_35228);
var state_35237__$1 = state_35237;
var statearr_35285_35342 = state_35237__$1;
(statearr_35285_35342[(2)] = inst_35229);

(statearr_35285_35342[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (19))){
var inst_35170 = (state_35237[(12)]);
var inst_35174 = (state_35237[(13)]);
var inst_35169 = (state_35237[(15)]);
var inst_35173 = (state_35237[(16)]);
var inst_35173__$1 = (state_35237[(2)]);
var inst_35174__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35173__$1);
var inst_35175 = (function (){var all_files = inst_35169;
var files_SINGLEQUOTE_ = inst_35170;
var res_SINGLEQUOTE_ = inst_35173__$1;
var res = inst_35174__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_35170,inst_35174,inst_35169,inst_35173,inst_35173__$1,inst_35174__$1,state_val_35238,c__25333__auto__,map__35112,map__35112__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35113,map__35113__$1,msg,files){
return (function (p1__34909_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34909_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_35170,inst_35174,inst_35169,inst_35173,inst_35173__$1,inst_35174__$1,state_val_35238,c__25333__auto__,map__35112,map__35112__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35113,map__35113__$1,msg,files))
})();
var inst_35176 = cljs.core.filter.call(null,inst_35175,inst_35173__$1);
var inst_35177 = cljs.core.not_empty.call(null,inst_35174__$1);
var state_35237__$1 = (function (){var statearr_35286 = state_35237;
(statearr_35286[(13)] = inst_35174__$1);

(statearr_35286[(14)] = inst_35176);

(statearr_35286[(16)] = inst_35173__$1);

return statearr_35286;
})();
if(cljs.core.truth_(inst_35177)){
var statearr_35287_35343 = state_35237__$1;
(statearr_35287_35343[(1)] = (20));

} else {
var statearr_35288_35344 = state_35237__$1;
(statearr_35288_35344[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (11))){
var state_35237__$1 = state_35237;
var statearr_35289_35345 = state_35237__$1;
(statearr_35289_35345[(2)] = null);

(statearr_35289_35345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (9))){
var inst_35156 = (state_35237[(2)]);
var state_35237__$1 = state_35237;
var statearr_35290_35346 = state_35237__$1;
(statearr_35290_35346[(2)] = inst_35156);

(statearr_35290_35346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (5))){
var inst_35126 = (state_35237[(7)]);
var inst_35127 = (state_35237[(8)]);
var inst_35129 = (inst_35127 < inst_35126);
var inst_35130 = inst_35129;
var state_35237__$1 = state_35237;
if(cljs.core.truth_(inst_35130)){
var statearr_35291_35347 = state_35237__$1;
(statearr_35291_35347[(1)] = (7));

} else {
var statearr_35292_35348 = state_35237__$1;
(statearr_35292_35348[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (14))){
var inst_35137 = (state_35237[(26)]);
var inst_35146 = cljs.core.first.call(null,inst_35137);
var inst_35147 = figwheel.client.file_reloading.eval_body.call(null,inst_35146);
var inst_35148 = cljs.core.next.call(null,inst_35137);
var inst_35124 = inst_35148;
var inst_35125 = null;
var inst_35126 = (0);
var inst_35127 = (0);
var state_35237__$1 = (function (){var statearr_35293 = state_35237;
(statearr_35293[(7)] = inst_35126);

(statearr_35293[(8)] = inst_35127);

(statearr_35293[(9)] = inst_35124);

(statearr_35293[(10)] = inst_35125);

(statearr_35293[(32)] = inst_35147);

return statearr_35293;
})();
var statearr_35294_35349 = state_35237__$1;
(statearr_35294_35349[(2)] = null);

(statearr_35294_35349[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (26))){
var inst_35196 = (state_35237[(19)]);
var inst_35199 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35196);
var state_35237__$1 = state_35237;
var statearr_35295_35350 = state_35237__$1;
(statearr_35295_35350[(2)] = inst_35199);

(statearr_35295_35350[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (16))){
var inst_35163 = (state_35237[(22)]);
var inst_35165 = (function (){var all_files = inst_35163;
return ((function (all_files,inst_35163,state_val_35238,c__25333__auto__,map__35112,map__35112__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35113,map__35113__$1,msg,files){
return (function (p1__34908_SHARP_){
return cljs.core.update_in.call(null,p1__34908_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_35163,state_val_35238,c__25333__auto__,map__35112,map__35112__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35113,map__35113__$1,msg,files))
})();
var inst_35166 = cljs.core.map.call(null,inst_35165,inst_35163);
var state_35237__$1 = state_35237;
var statearr_35296_35351 = state_35237__$1;
(statearr_35296_35351[(2)] = inst_35166);

(statearr_35296_35351[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (30))){
var state_35237__$1 = state_35237;
var statearr_35297_35352 = state_35237__$1;
(statearr_35297_35352[(2)] = null);

(statearr_35297_35352[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (10))){
var inst_35137 = (state_35237[(26)]);
var inst_35139 = cljs.core.chunked_seq_QMARK_.call(null,inst_35137);
var state_35237__$1 = state_35237;
if(inst_35139){
var statearr_35298_35353 = state_35237__$1;
(statearr_35298_35353[(1)] = (13));

} else {
var statearr_35299_35354 = state_35237__$1;
(statearr_35299_35354[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (18))){
var inst_35170 = (state_35237[(12)]);
var inst_35169 = (state_35237[(15)]);
var inst_35169__$1 = (state_35237[(2)]);
var inst_35170__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_35169__$1);
var inst_35171 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35170__$1);
var state_35237__$1 = (function (){var statearr_35300 = state_35237;
(statearr_35300[(12)] = inst_35170__$1);

(statearr_35300[(15)] = inst_35169__$1);

return statearr_35300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35237__$1,(19),inst_35171);
} else {
if((state_val_35238 === (37))){
var inst_35232 = (state_35237[(2)]);
var state_35237__$1 = state_35237;
var statearr_35301_35355 = state_35237__$1;
(statearr_35301_35355[(2)] = inst_35232);

(statearr_35301_35355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (8))){
var inst_35124 = (state_35237[(9)]);
var inst_35137 = (state_35237[(26)]);
var inst_35137__$1 = cljs.core.seq.call(null,inst_35124);
var state_35237__$1 = (function (){var statearr_35302 = state_35237;
(statearr_35302[(26)] = inst_35137__$1);

return statearr_35302;
})();
if(inst_35137__$1){
var statearr_35303_35356 = state_35237__$1;
(statearr_35303_35356[(1)] = (10));

} else {
var statearr_35304_35357 = state_35237__$1;
(statearr_35304_35357[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25333__auto__,map__35112,map__35112__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35113,map__35113__$1,msg,files))
;
return ((function (switch__25271__auto__,c__25333__auto__,map__35112,map__35112__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35113,map__35113__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25272__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25272__auto____0 = (function (){
var statearr_35308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35308[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25272__auto__);

(statearr_35308[(1)] = (1));

return statearr_35308;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25272__auto____1 = (function (state_35237){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_35237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e35309){if((e35309 instanceof Object)){
var ex__25275__auto__ = e35309;
var statearr_35310_35358 = state_35237;
(statearr_35310_35358[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35359 = state_35237;
state_35237 = G__35359;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25272__auto__ = function(state_35237){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25272__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25272__auto____1.call(this,state_35237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25272__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25272__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto__,map__35112,map__35112__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35113,map__35113__$1,msg,files))
})();
var state__25335__auto__ = (function (){var statearr_35311 = f__25334__auto__.call(null);
(statearr_35311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto__);

return statearr_35311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto__,map__35112,map__35112__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35113,map__35113__$1,msg,files))
);

return c__25333__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35362,link){
var map__35364 = p__35362;
var map__35364__$1 = ((cljs.core.seq_QMARK_.call(null,map__35364))?cljs.core.apply.call(null,cljs.core.hash_map,map__35364):map__35364);
var file = cljs.core.get.call(null,map__35364__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__35364,map__35364__$1,file){
return (function (p1__35360_SHARP_,p2__35361_SHARP_){
if(cljs.core._EQ_.call(null,p1__35360_SHARP_,p2__35361_SHARP_)){
return p1__35360_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__35364,map__35364__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35368){
var map__35369 = p__35368;
var map__35369__$1 = ((cljs.core.seq_QMARK_.call(null,map__35369))?cljs.core.apply.call(null,cljs.core.hash_map,map__35369):map__35369);
var match_length = cljs.core.get.call(null,map__35369__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35369__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35365_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35365_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__35371 = arguments.length;
switch (G__35371) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35373){
var map__35375 = p__35373;
var map__35375__$1 = ((cljs.core.seq_QMARK_.call(null,map__35375))?cljs.core.apply.call(null,cljs.core.hash_map,map__35375):map__35375);
var f_data = map__35375__$1;
var file = cljs.core.get.call(null,map__35375__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__35375__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4421__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4421__auto__)){
var link = temp__4421__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__23236__auto__ = request_url;
if(cljs.core.truth_(or__23236__auto__)){
return or__23236__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35376,files_msg){
var map__35398 = p__35376;
var map__35398__$1 = ((cljs.core.seq_QMARK_.call(null,map__35398))?cljs.core.apply.call(null,cljs.core.hash_map,map__35398):map__35398);
var opts = map__35398__$1;
var on_cssload = cljs.core.get.call(null,map__35398__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35399_35419 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35400_35420 = null;
var count__35401_35421 = (0);
var i__35402_35422 = (0);
while(true){
if((i__35402_35422 < count__35401_35421)){
var f_35423 = cljs.core._nth.call(null,chunk__35400_35420,i__35402_35422);
figwheel.client.file_reloading.reload_css_file.call(null,f_35423);

var G__35424 = seq__35399_35419;
var G__35425 = chunk__35400_35420;
var G__35426 = count__35401_35421;
var G__35427 = (i__35402_35422 + (1));
seq__35399_35419 = G__35424;
chunk__35400_35420 = G__35425;
count__35401_35421 = G__35426;
i__35402_35422 = G__35427;
continue;
} else {
var temp__4423__auto___35428 = cljs.core.seq.call(null,seq__35399_35419);
if(temp__4423__auto___35428){
var seq__35399_35429__$1 = temp__4423__auto___35428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35399_35429__$1)){
var c__24021__auto___35430 = cljs.core.chunk_first.call(null,seq__35399_35429__$1);
var G__35431 = cljs.core.chunk_rest.call(null,seq__35399_35429__$1);
var G__35432 = c__24021__auto___35430;
var G__35433 = cljs.core.count.call(null,c__24021__auto___35430);
var G__35434 = (0);
seq__35399_35419 = G__35431;
chunk__35400_35420 = G__35432;
count__35401_35421 = G__35433;
i__35402_35422 = G__35434;
continue;
} else {
var f_35435 = cljs.core.first.call(null,seq__35399_35429__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35435);

var G__35436 = cljs.core.next.call(null,seq__35399_35429__$1);
var G__35437 = null;
var G__35438 = (0);
var G__35439 = (0);
seq__35399_35419 = G__35436;
chunk__35400_35420 = G__35437;
count__35401_35421 = G__35438;
i__35402_35422 = G__35439;
continue;
}
} else {
}
}
break;
}

var c__25333__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto__,map__35398,map__35398__$1,opts,on_cssload){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto__,map__35398,map__35398__$1,opts,on_cssload){
return (function (state_35409){
var state_val_35410 = (state_35409[(1)]);
if((state_val_35410 === (1))){
var inst_35403 = cljs.core.async.timeout.call(null,(100));
var state_35409__$1 = state_35409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35409__$1,(2),inst_35403);
} else {
if((state_val_35410 === (2))){
var inst_35405 = (state_35409[(2)]);
var inst_35406 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_35407 = on_cssload.call(null,inst_35406);
var state_35409__$1 = (function (){var statearr_35411 = state_35409;
(statearr_35411[(7)] = inst_35405);

return statearr_35411;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35409__$1,inst_35407);
} else {
return null;
}
}
});})(c__25333__auto__,map__35398,map__35398__$1,opts,on_cssload))
;
return ((function (switch__25271__auto__,c__25333__auto__,map__35398,map__35398__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__25272__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__25272__auto____0 = (function (){
var statearr_35415 = [null,null,null,null,null,null,null,null];
(statearr_35415[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__25272__auto__);

(statearr_35415[(1)] = (1));

return statearr_35415;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__25272__auto____1 = (function (state_35409){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_35409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e35416){if((e35416 instanceof Object)){
var ex__25275__auto__ = e35416;
var statearr_35417_35440 = state_35409;
(statearr_35417_35440[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35441 = state_35409;
state_35409 = G__35441;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__25272__auto__ = function(state_35409){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__25272__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__25272__auto____1.call(this,state_35409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__25272__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__25272__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto__,map__35398,map__35398__$1,opts,on_cssload))
})();
var state__25335__auto__ = (function (){var statearr_35418 = f__25334__auto__.call(null);
(statearr_35418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto__);

return statearr_35418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto__,map__35398,map__35398__$1,opts,on_cssload))
);

return c__25333__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map