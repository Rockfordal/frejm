// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33824__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33824 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33825__i = 0, G__33825__a = new Array(arguments.length -  0);
while (G__33825__i < G__33825__a.length) {G__33825__a[G__33825__i] = arguments[G__33825__i + 0]; ++G__33825__i;}
  args = new cljs.core.IndexedSeq(G__33825__a,0);
} 
return G__33824__delegate.call(this,args);};
G__33824.cljs$lang$maxFixedArity = 0;
G__33824.cljs$lang$applyTo = (function (arglist__33826){
var args = cljs.core.seq(arglist__33826);
return G__33824__delegate(args);
});
G__33824.cljs$core$IFn$_invoke$arity$variadic = G__33824__delegate;
return G__33824;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33827){
var map__33829 = p__33827;
var map__33829__$1 = ((cljs.core.seq_QMARK_.call(null,map__33829))?cljs.core.apply.call(null,cljs.core.hash_map,map__33829):map__33829);
var message = cljs.core.get.call(null,map__33829__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33829__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__23236__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__23236__auto__)){
return or__23236__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__23224__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__23224__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__23224__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__25333__auto___33958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto___33958,ch){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto___33958,ch){
return (function (state_33932){
var state_val_33933 = (state_33932[(1)]);
if((state_val_33933 === (7))){
var inst_33928 = (state_33932[(2)]);
var state_33932__$1 = state_33932;
var statearr_33934_33959 = state_33932__$1;
(statearr_33934_33959[(2)] = inst_33928);

(statearr_33934_33959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33933 === (1))){
var state_33932__$1 = state_33932;
var statearr_33935_33960 = state_33932__$1;
(statearr_33935_33960[(2)] = null);

(statearr_33935_33960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33933 === (4))){
var inst_33896 = (state_33932[(7)]);
var inst_33896__$1 = (state_33932[(2)]);
var state_33932__$1 = (function (){var statearr_33936 = state_33932;
(statearr_33936[(7)] = inst_33896__$1);

return statearr_33936;
})();
if(cljs.core.truth_(inst_33896__$1)){
var statearr_33937_33961 = state_33932__$1;
(statearr_33937_33961[(1)] = (5));

} else {
var statearr_33938_33962 = state_33932__$1;
(statearr_33938_33962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33933 === (13))){
var state_33932__$1 = state_33932;
var statearr_33939_33963 = state_33932__$1;
(statearr_33939_33963[(2)] = null);

(statearr_33939_33963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33933 === (6))){
var state_33932__$1 = state_33932;
var statearr_33940_33964 = state_33932__$1;
(statearr_33940_33964[(2)] = null);

(statearr_33940_33964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33933 === (3))){
var inst_33930 = (state_33932[(2)]);
var state_33932__$1 = state_33932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33932__$1,inst_33930);
} else {
if((state_val_33933 === (12))){
var inst_33903 = (state_33932[(8)]);
var inst_33916 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33903);
var inst_33917 = cljs.core.first.call(null,inst_33916);
var inst_33918 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33917);
var inst_33919 = console.warn("Figwheel: Not loading code with warnings - ",inst_33918);
var state_33932__$1 = state_33932;
var statearr_33941_33965 = state_33932__$1;
(statearr_33941_33965[(2)] = inst_33919);

(statearr_33941_33965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33933 === (2))){
var state_33932__$1 = state_33932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33932__$1,(4),ch);
} else {
if((state_val_33933 === (11))){
var inst_33912 = (state_33932[(2)]);
var state_33932__$1 = state_33932;
var statearr_33942_33966 = state_33932__$1;
(statearr_33942_33966[(2)] = inst_33912);

(statearr_33942_33966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33933 === (9))){
var inst_33902 = (state_33932[(9)]);
var inst_33914 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33902,opts);
var state_33932__$1 = state_33932;
if(cljs.core.truth_(inst_33914)){
var statearr_33943_33967 = state_33932__$1;
(statearr_33943_33967[(1)] = (12));

} else {
var statearr_33944_33968 = state_33932__$1;
(statearr_33944_33968[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33933 === (5))){
var inst_33902 = (state_33932[(9)]);
var inst_33896 = (state_33932[(7)]);
var inst_33898 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33899 = (new cljs.core.PersistentArrayMap(null,2,inst_33898,null));
var inst_33900 = (new cljs.core.PersistentHashSet(null,inst_33899,null));
var inst_33901 = figwheel.client.focus_msgs.call(null,inst_33900,inst_33896);
var inst_33902__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33901);
var inst_33903 = cljs.core.first.call(null,inst_33901);
var inst_33904 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33902__$1,opts);
var state_33932__$1 = (function (){var statearr_33945 = state_33932;
(statearr_33945[(9)] = inst_33902__$1);

(statearr_33945[(8)] = inst_33903);

return statearr_33945;
})();
if(cljs.core.truth_(inst_33904)){
var statearr_33946_33969 = state_33932__$1;
(statearr_33946_33969[(1)] = (8));

} else {
var statearr_33947_33970 = state_33932__$1;
(statearr_33947_33970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33933 === (14))){
var inst_33922 = (state_33932[(2)]);
var state_33932__$1 = state_33932;
var statearr_33948_33971 = state_33932__$1;
(statearr_33948_33971[(2)] = inst_33922);

(statearr_33948_33971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33933 === (10))){
var inst_33924 = (state_33932[(2)]);
var state_33932__$1 = (function (){var statearr_33949 = state_33932;
(statearr_33949[(10)] = inst_33924);

return statearr_33949;
})();
var statearr_33950_33972 = state_33932__$1;
(statearr_33950_33972[(2)] = null);

(statearr_33950_33972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33933 === (8))){
var inst_33903 = (state_33932[(8)]);
var inst_33906 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33907 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33903);
var inst_33908 = cljs.core.async.timeout.call(null,(1000));
var inst_33909 = [inst_33907,inst_33908];
var inst_33910 = (new cljs.core.PersistentVector(null,2,(5),inst_33906,inst_33909,null));
var state_33932__$1 = state_33932;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33932__$1,(11),inst_33910);
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
});})(c__25333__auto___33958,ch))
;
return ((function (switch__25271__auto__,c__25333__auto___33958,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25272__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25272__auto____0 = (function (){
var statearr_33954 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33954[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25272__auto__);

(statearr_33954[(1)] = (1));

return statearr_33954;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25272__auto____1 = (function (state_33932){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_33932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e33955){if((e33955 instanceof Object)){
var ex__25275__auto__ = e33955;
var statearr_33956_33973 = state_33932;
(statearr_33956_33973[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33974 = state_33932;
state_33932 = G__33974;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25272__auto__ = function(state_33932){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25272__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25272__auto____1.call(this,state_33932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25272__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25272__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto___33958,ch))
})();
var state__25335__auto__ = (function (){var statearr_33957 = f__25334__auto__.call(null);
(statearr_33957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___33958);

return statearr_33957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto___33958,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33975_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33975_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_33984 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__33977_SHARP_,p2__33976_SHARP_){
return [cljs.core.str(p2__33976_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33984){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_33982 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_33983 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_33982,_STAR_print_newline_STAR_33983,base_path_33984){
return (function() { 
var G__33985__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33986__i = 0, G__33986__a = new Array(arguments.length -  0);
while (G__33986__i < G__33986__a.length) {G__33986__a[G__33986__i] = arguments[G__33986__i + 0]; ++G__33986__i;}
  args = new cljs.core.IndexedSeq(G__33986__a,0);
} 
return G__33985__delegate.call(this,args);};
G__33985.cljs$lang$maxFixedArity = 0;
G__33985.cljs$lang$applyTo = (function (arglist__33987){
var args = cljs.core.seq(arglist__33987);
return G__33985__delegate(args);
});
G__33985.cljs$core$IFn$_invoke$arity$variadic = G__33985__delegate;
return G__33985;
})()
;})(_STAR_print_fn_STAR_33982,_STAR_print_newline_STAR_33983,base_path_33984))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33983;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33982;
}}catch (e33981){if((e33981 instanceof Error)){
var e = e33981;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33984], null));
} else {
var e = e33981;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33984))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33988){
var map__33993 = p__33988;
var map__33993__$1 = ((cljs.core.seq_QMARK_.call(null,map__33993))?cljs.core.apply.call(null,cljs.core.hash_map,map__33993):map__33993);
var opts = map__33993__$1;
var build_id = cljs.core.get.call(null,map__33993__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33993,map__33993__$1,opts,build_id){
return (function (p__33994){
var vec__33995 = p__33994;
var map__33996 = cljs.core.nth.call(null,vec__33995,(0),null);
var map__33996__$1 = ((cljs.core.seq_QMARK_.call(null,map__33996))?cljs.core.apply.call(null,cljs.core.hash_map,map__33996):map__33996);
var msg = map__33996__$1;
var msg_name = cljs.core.get.call(null,map__33996__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33995,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__33995,map__33996,map__33996__$1,msg,msg_name,_,map__33993,map__33993__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33995,map__33996,map__33996__$1,msg,msg_name,_,map__33993,map__33993__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33993,map__33993__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34000){
var vec__34001 = p__34000;
var map__34002 = cljs.core.nth.call(null,vec__34001,(0),null);
var map__34002__$1 = ((cljs.core.seq_QMARK_.call(null,map__34002))?cljs.core.apply.call(null,cljs.core.hash_map,map__34002):map__34002);
var msg = map__34002__$1;
var msg_name = cljs.core.get.call(null,map__34002__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34001,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34003){
var map__34011 = p__34003;
var map__34011__$1 = ((cljs.core.seq_QMARK_.call(null,map__34011))?cljs.core.apply.call(null,cljs.core.hash_map,map__34011):map__34011);
var on_compile_warning = cljs.core.get.call(null,map__34011__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34011__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34011,map__34011__$1,on_compile_warning,on_compile_fail){
return (function (p__34012){
var vec__34013 = p__34012;
var map__34014 = cljs.core.nth.call(null,vec__34013,(0),null);
var map__34014__$1 = ((cljs.core.seq_QMARK_.call(null,map__34014))?cljs.core.apply.call(null,cljs.core.hash_map,map__34014):map__34014);
var msg = map__34014__$1;
var msg_name = cljs.core.get.call(null,map__34014__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34013,(1));
var pred__34015 = cljs.core._EQ_;
var expr__34016 = msg_name;
if(cljs.core.truth_(pred__34015.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34016))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34015.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34016))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34011,map__34011__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25333__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto__,msg_hist,msg_names,msg){
return (function (state_34213){
var state_val_34214 = (state_34213[(1)]);
if((state_val_34214 === (7))){
var inst_34149 = (state_34213[(2)]);
var state_34213__$1 = state_34213;
var statearr_34215_34256 = state_34213__$1;
(statearr_34215_34256[(2)] = inst_34149);

(statearr_34215_34256[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (20))){
var inst_34175 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34213__$1 = state_34213;
if(cljs.core.truth_(inst_34175)){
var statearr_34216_34257 = state_34213__$1;
(statearr_34216_34257[(1)] = (22));

} else {
var statearr_34217_34258 = state_34213__$1;
(statearr_34217_34258[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (27))){
var inst_34187 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34188 = figwheel.client.heads_up.display_warning.call(null,inst_34187);
var state_34213__$1 = state_34213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34213__$1,(30),inst_34188);
} else {
if((state_val_34214 === (1))){
var inst_34137 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34213__$1 = state_34213;
if(cljs.core.truth_(inst_34137)){
var statearr_34218_34259 = state_34213__$1;
(statearr_34218_34259[(1)] = (2));

} else {
var statearr_34219_34260 = state_34213__$1;
(statearr_34219_34260[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (24))){
var inst_34203 = (state_34213[(2)]);
var state_34213__$1 = state_34213;
var statearr_34220_34261 = state_34213__$1;
(statearr_34220_34261[(2)] = inst_34203);

(statearr_34220_34261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (4))){
var inst_34211 = (state_34213[(2)]);
var state_34213__$1 = state_34213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34213__$1,inst_34211);
} else {
if((state_val_34214 === (15))){
var inst_34164 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34165 = figwheel.client.format_messages.call(null,inst_34164);
var inst_34166 = figwheel.client.heads_up.display_error.call(null,inst_34165);
var state_34213__$1 = state_34213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34213__$1,(18),inst_34166);
} else {
if((state_val_34214 === (21))){
var inst_34205 = (state_34213[(2)]);
var state_34213__$1 = state_34213;
var statearr_34221_34262 = state_34213__$1;
(statearr_34221_34262[(2)] = inst_34205);

(statearr_34221_34262[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (31))){
var inst_34194 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34213__$1 = state_34213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34213__$1,(34),inst_34194);
} else {
if((state_val_34214 === (32))){
var state_34213__$1 = state_34213;
var statearr_34222_34263 = state_34213__$1;
(statearr_34222_34263[(2)] = null);

(statearr_34222_34263[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (33))){
var inst_34199 = (state_34213[(2)]);
var state_34213__$1 = state_34213;
var statearr_34223_34264 = state_34213__$1;
(statearr_34223_34264[(2)] = inst_34199);

(statearr_34223_34264[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (13))){
var inst_34155 = (state_34213[(2)]);
var inst_34156 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34157 = figwheel.client.format_messages.call(null,inst_34156);
var inst_34158 = figwheel.client.heads_up.display_error.call(null,inst_34157);
var state_34213__$1 = (function (){var statearr_34224 = state_34213;
(statearr_34224[(7)] = inst_34155);

return statearr_34224;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34213__$1,(14),inst_34158);
} else {
if((state_val_34214 === (22))){
var inst_34177 = figwheel.client.heads_up.clear.call(null);
var state_34213__$1 = state_34213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34213__$1,(25),inst_34177);
} else {
if((state_val_34214 === (29))){
var inst_34201 = (state_34213[(2)]);
var state_34213__$1 = state_34213;
var statearr_34225_34265 = state_34213__$1;
(statearr_34225_34265[(2)] = inst_34201);

(statearr_34225_34265[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (6))){
var inst_34145 = figwheel.client.heads_up.clear.call(null);
var state_34213__$1 = state_34213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34213__$1,(9),inst_34145);
} else {
if((state_val_34214 === (28))){
var inst_34192 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34213__$1 = state_34213;
if(cljs.core.truth_(inst_34192)){
var statearr_34226_34266 = state_34213__$1;
(statearr_34226_34266[(1)] = (31));

} else {
var statearr_34227_34267 = state_34213__$1;
(statearr_34227_34267[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (25))){
var inst_34179 = (state_34213[(2)]);
var inst_34180 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34181 = figwheel.client.heads_up.display_warning.call(null,inst_34180);
var state_34213__$1 = (function (){var statearr_34228 = state_34213;
(statearr_34228[(8)] = inst_34179);

return statearr_34228;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34213__$1,(26),inst_34181);
} else {
if((state_val_34214 === (34))){
var inst_34196 = (state_34213[(2)]);
var state_34213__$1 = state_34213;
var statearr_34229_34268 = state_34213__$1;
(statearr_34229_34268[(2)] = inst_34196);

(statearr_34229_34268[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (17))){
var inst_34207 = (state_34213[(2)]);
var state_34213__$1 = state_34213;
var statearr_34230_34269 = state_34213__$1;
(statearr_34230_34269[(2)] = inst_34207);

(statearr_34230_34269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (3))){
var inst_34151 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34213__$1 = state_34213;
if(cljs.core.truth_(inst_34151)){
var statearr_34231_34270 = state_34213__$1;
(statearr_34231_34270[(1)] = (10));

} else {
var statearr_34232_34271 = state_34213__$1;
(statearr_34232_34271[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (12))){
var inst_34209 = (state_34213[(2)]);
var state_34213__$1 = state_34213;
var statearr_34233_34272 = state_34213__$1;
(statearr_34233_34272[(2)] = inst_34209);

(statearr_34233_34272[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (2))){
var inst_34139 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34213__$1 = state_34213;
if(cljs.core.truth_(inst_34139)){
var statearr_34234_34273 = state_34213__$1;
(statearr_34234_34273[(1)] = (5));

} else {
var statearr_34235_34274 = state_34213__$1;
(statearr_34235_34274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (23))){
var inst_34185 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34213__$1 = state_34213;
if(cljs.core.truth_(inst_34185)){
var statearr_34236_34275 = state_34213__$1;
(statearr_34236_34275[(1)] = (27));

} else {
var statearr_34237_34276 = state_34213__$1;
(statearr_34237_34276[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (19))){
var inst_34172 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34173 = figwheel.client.heads_up.append_message.call(null,inst_34172);
var state_34213__$1 = state_34213;
var statearr_34238_34277 = state_34213__$1;
(statearr_34238_34277[(2)] = inst_34173);

(statearr_34238_34277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (11))){
var inst_34162 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34213__$1 = state_34213;
if(cljs.core.truth_(inst_34162)){
var statearr_34239_34278 = state_34213__$1;
(statearr_34239_34278[(1)] = (15));

} else {
var statearr_34240_34279 = state_34213__$1;
(statearr_34240_34279[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (9))){
var inst_34147 = (state_34213[(2)]);
var state_34213__$1 = state_34213;
var statearr_34241_34280 = state_34213__$1;
(statearr_34241_34280[(2)] = inst_34147);

(statearr_34241_34280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (5))){
var inst_34141 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34213__$1 = state_34213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34213__$1,(8),inst_34141);
} else {
if((state_val_34214 === (14))){
var inst_34160 = (state_34213[(2)]);
var state_34213__$1 = state_34213;
var statearr_34242_34281 = state_34213__$1;
(statearr_34242_34281[(2)] = inst_34160);

(statearr_34242_34281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (26))){
var inst_34183 = (state_34213[(2)]);
var state_34213__$1 = state_34213;
var statearr_34243_34282 = state_34213__$1;
(statearr_34243_34282[(2)] = inst_34183);

(statearr_34243_34282[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (16))){
var inst_34170 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34213__$1 = state_34213;
if(cljs.core.truth_(inst_34170)){
var statearr_34244_34283 = state_34213__$1;
(statearr_34244_34283[(1)] = (19));

} else {
var statearr_34245_34284 = state_34213__$1;
(statearr_34245_34284[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (30))){
var inst_34190 = (state_34213[(2)]);
var state_34213__$1 = state_34213;
var statearr_34246_34285 = state_34213__$1;
(statearr_34246_34285[(2)] = inst_34190);

(statearr_34246_34285[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (10))){
var inst_34153 = figwheel.client.heads_up.clear.call(null);
var state_34213__$1 = state_34213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34213__$1,(13),inst_34153);
} else {
if((state_val_34214 === (18))){
var inst_34168 = (state_34213[(2)]);
var state_34213__$1 = state_34213;
var statearr_34247_34286 = state_34213__$1;
(statearr_34247_34286[(2)] = inst_34168);

(statearr_34247_34286[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (8))){
var inst_34143 = (state_34213[(2)]);
var state_34213__$1 = state_34213;
var statearr_34248_34287 = state_34213__$1;
(statearr_34248_34287[(2)] = inst_34143);

(statearr_34248_34287[(1)] = (7));


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
});})(c__25333__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25271__auto__,c__25333__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25272__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25272__auto____0 = (function (){
var statearr_34252 = [null,null,null,null,null,null,null,null,null];
(statearr_34252[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25272__auto__);

(statearr_34252[(1)] = (1));

return statearr_34252;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25272__auto____1 = (function (state_34213){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_34213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e34253){if((e34253 instanceof Object)){
var ex__25275__auto__ = e34253;
var statearr_34254_34288 = state_34213;
(statearr_34254_34288[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34289 = state_34213;
state_34213 = G__34289;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25272__auto__ = function(state_34213){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25272__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25272__auto____1.call(this,state_34213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25272__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25272__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto__,msg_hist,msg_names,msg))
})();
var state__25335__auto__ = (function (){var statearr_34255 = f__25334__auto__.call(null);
(statearr_34255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto__);

return statearr_34255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto__,msg_hist,msg_names,msg))
);

return c__25333__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25333__auto___34352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto___34352,ch){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto___34352,ch){
return (function (state_34335){
var state_val_34336 = (state_34335[(1)]);
if((state_val_34336 === (1))){
var state_34335__$1 = state_34335;
var statearr_34337_34353 = state_34335__$1;
(statearr_34337_34353[(2)] = null);

(statearr_34337_34353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (2))){
var state_34335__$1 = state_34335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34335__$1,(4),ch);
} else {
if((state_val_34336 === (3))){
var inst_34333 = (state_34335[(2)]);
var state_34335__$1 = state_34335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34335__$1,inst_34333);
} else {
if((state_val_34336 === (4))){
var inst_34323 = (state_34335[(7)]);
var inst_34323__$1 = (state_34335[(2)]);
var state_34335__$1 = (function (){var statearr_34338 = state_34335;
(statearr_34338[(7)] = inst_34323__$1);

return statearr_34338;
})();
if(cljs.core.truth_(inst_34323__$1)){
var statearr_34339_34354 = state_34335__$1;
(statearr_34339_34354[(1)] = (5));

} else {
var statearr_34340_34355 = state_34335__$1;
(statearr_34340_34355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (5))){
var inst_34323 = (state_34335[(7)]);
var inst_34325 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34323);
var state_34335__$1 = state_34335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34335__$1,(8),inst_34325);
} else {
if((state_val_34336 === (6))){
var state_34335__$1 = state_34335;
var statearr_34341_34356 = state_34335__$1;
(statearr_34341_34356[(2)] = null);

(statearr_34341_34356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (7))){
var inst_34331 = (state_34335[(2)]);
var state_34335__$1 = state_34335;
var statearr_34342_34357 = state_34335__$1;
(statearr_34342_34357[(2)] = inst_34331);

(statearr_34342_34357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (8))){
var inst_34327 = (state_34335[(2)]);
var state_34335__$1 = (function (){var statearr_34343 = state_34335;
(statearr_34343[(8)] = inst_34327);

return statearr_34343;
})();
var statearr_34344_34358 = state_34335__$1;
(statearr_34344_34358[(2)] = null);

(statearr_34344_34358[(1)] = (2));


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
});})(c__25333__auto___34352,ch))
;
return ((function (switch__25271__auto__,c__25333__auto___34352,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25272__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25272__auto____0 = (function (){
var statearr_34348 = [null,null,null,null,null,null,null,null,null];
(statearr_34348[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25272__auto__);

(statearr_34348[(1)] = (1));

return statearr_34348;
});
var figwheel$client$heads_up_plugin_$_state_machine__25272__auto____1 = (function (state_34335){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_34335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e34349){if((e34349 instanceof Object)){
var ex__25275__auto__ = e34349;
var statearr_34350_34359 = state_34335;
(statearr_34350_34359[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34360 = state_34335;
state_34335 = G__34360;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25272__auto__ = function(state_34335){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25272__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25272__auto____1.call(this,state_34335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25272__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25272__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto___34352,ch))
})();
var state__25335__auto__ = (function (){var statearr_34351 = f__25334__auto__.call(null);
(statearr_34351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___34352);

return statearr_34351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto___34352,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25333__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto__){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto__){
return (function (state_34381){
var state_val_34382 = (state_34381[(1)]);
if((state_val_34382 === (1))){
var inst_34376 = cljs.core.async.timeout.call(null,(3000));
var state_34381__$1 = state_34381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34381__$1,(2),inst_34376);
} else {
if((state_val_34382 === (2))){
var inst_34378 = (state_34381[(2)]);
var inst_34379 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34381__$1 = (function (){var statearr_34383 = state_34381;
(statearr_34383[(7)] = inst_34378);

return statearr_34383;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34381__$1,inst_34379);
} else {
return null;
}
}
});})(c__25333__auto__))
;
return ((function (switch__25271__auto__,c__25333__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25272__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25272__auto____0 = (function (){
var statearr_34387 = [null,null,null,null,null,null,null,null];
(statearr_34387[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25272__auto__);

(statearr_34387[(1)] = (1));

return statearr_34387;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25272__auto____1 = (function (state_34381){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_34381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e34388){if((e34388 instanceof Object)){
var ex__25275__auto__ = e34388;
var statearr_34389_34391 = state_34381;
(statearr_34389_34391[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34392 = state_34381;
state_34381 = G__34392;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25272__auto__ = function(state_34381){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25272__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25272__auto____1.call(this,state_34381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25272__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25272__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto__))
})();
var state__25335__auto__ = (function (){var statearr_34390 = f__25334__auto__.call(null);
(statearr_34390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto__);

return statearr_34390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto__))
);

return c__25333__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__23224__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__23224__auto__)){
return ("CustomEvent" in window);
} else {
return and__23224__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj34396 = {"detail":url};
return obj34396;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34397){
var map__34403 = p__34397;
var map__34403__$1 = ((cljs.core.seq_QMARK_.call(null,map__34403))?cljs.core.apply.call(null,cljs.core.hash_map,map__34403):map__34403);
var ed = map__34403__$1;
var formatted_exception = cljs.core.get.call(null,map__34403__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34403__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34404_34408 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34405_34409 = null;
var count__34406_34410 = (0);
var i__34407_34411 = (0);
while(true){
if((i__34407_34411 < count__34406_34410)){
var msg_34412 = cljs.core._nth.call(null,chunk__34405_34409,i__34407_34411);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34412);

var G__34413 = seq__34404_34408;
var G__34414 = chunk__34405_34409;
var G__34415 = count__34406_34410;
var G__34416 = (i__34407_34411 + (1));
seq__34404_34408 = G__34413;
chunk__34405_34409 = G__34414;
count__34406_34410 = G__34415;
i__34407_34411 = G__34416;
continue;
} else {
var temp__4423__auto___34417 = cljs.core.seq.call(null,seq__34404_34408);
if(temp__4423__auto___34417){
var seq__34404_34418__$1 = temp__4423__auto___34417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34404_34418__$1)){
var c__24021__auto___34419 = cljs.core.chunk_first.call(null,seq__34404_34418__$1);
var G__34420 = cljs.core.chunk_rest.call(null,seq__34404_34418__$1);
var G__34421 = c__24021__auto___34419;
var G__34422 = cljs.core.count.call(null,c__24021__auto___34419);
var G__34423 = (0);
seq__34404_34408 = G__34420;
chunk__34405_34409 = G__34421;
count__34406_34410 = G__34422;
i__34407_34411 = G__34423;
continue;
} else {
var msg_34424 = cljs.core.first.call(null,seq__34404_34418__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34424);

var G__34425 = cljs.core.next.call(null,seq__34404_34418__$1);
var G__34426 = null;
var G__34427 = (0);
var G__34428 = (0);
seq__34404_34408 = G__34425;
chunk__34405_34409 = G__34426;
count__34406_34410 = G__34427;
i__34407_34411 = G__34428;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34429){
var map__34431 = p__34429;
var map__34431__$1 = ((cljs.core.seq_QMARK_.call(null,map__34431))?cljs.core.apply.call(null,cljs.core.hash_map,map__34431):map__34431);
var w = map__34431__$1;
var message = cljs.core.get.call(null,map__34431__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__23224__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__23224__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__23224__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34438 = cljs.core.seq.call(null,plugins);
var chunk__34439 = null;
var count__34440 = (0);
var i__34441 = (0);
while(true){
if((i__34441 < count__34440)){
var vec__34442 = cljs.core._nth.call(null,chunk__34439,i__34441);
var k = cljs.core.nth.call(null,vec__34442,(0),null);
var plugin = cljs.core.nth.call(null,vec__34442,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34444 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34438,chunk__34439,count__34440,i__34441,pl_34444,vec__34442,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34444.call(null,msg_hist);
});})(seq__34438,chunk__34439,count__34440,i__34441,pl_34444,vec__34442,k,plugin))
);
} else {
}

var G__34445 = seq__34438;
var G__34446 = chunk__34439;
var G__34447 = count__34440;
var G__34448 = (i__34441 + (1));
seq__34438 = G__34445;
chunk__34439 = G__34446;
count__34440 = G__34447;
i__34441 = G__34448;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__34438);
if(temp__4423__auto__){
var seq__34438__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34438__$1)){
var c__24021__auto__ = cljs.core.chunk_first.call(null,seq__34438__$1);
var G__34449 = cljs.core.chunk_rest.call(null,seq__34438__$1);
var G__34450 = c__24021__auto__;
var G__34451 = cljs.core.count.call(null,c__24021__auto__);
var G__34452 = (0);
seq__34438 = G__34449;
chunk__34439 = G__34450;
count__34440 = G__34451;
i__34441 = G__34452;
continue;
} else {
var vec__34443 = cljs.core.first.call(null,seq__34438__$1);
var k = cljs.core.nth.call(null,vec__34443,(0),null);
var plugin = cljs.core.nth.call(null,vec__34443,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34453 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34438,chunk__34439,count__34440,i__34441,pl_34453,vec__34443,k,plugin,seq__34438__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34453.call(null,msg_hist);
});})(seq__34438,chunk__34439,count__34440,i__34441,pl_34453,vec__34443,k,plugin,seq__34438__$1,temp__4423__auto__))
);
} else {
}

var G__34454 = cljs.core.next.call(null,seq__34438__$1);
var G__34455 = null;
var G__34456 = (0);
var G__34457 = (0);
seq__34438 = G__34454;
chunk__34439 = G__34455;
count__34440 = G__34456;
i__34441 = G__34457;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__34459 = arguments.length;
switch (G__34459) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__24276__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__24276__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34462){
var map__34463 = p__34462;
var map__34463__$1 = ((cljs.core.seq_QMARK_.call(null,map__34463))?cljs.core.apply.call(null,cljs.core.hash_map,map__34463):map__34463);
var opts = map__34463__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34461){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34461));
});

//# sourceMappingURL=client.js.map