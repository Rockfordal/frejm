// Compiled by ClojureScript 0.0-3308 {}
goog.provide('rente.client.ws');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('taoensso.sente.packers.transit');
if(typeof rente.client.ws.push_msg_handler !== 'undefined'){
} else {
rente.client.ws.push_msg_handler = (function (){var method_table__24131__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24132__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24133__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24134__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24135__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"rente.client.ws","push-msg-handler"),((function (method_table__24131__auto__,prefer_table__24132__auto__,method_cache__24133__auto__,cached_hierarchy__24134__auto__,hierarchy__24135__auto__){
return (function (p__28184){
var vec__28185 = p__28184;
var id = cljs.core.nth.call(null,vec__28185,(0),null);
var _ = cljs.core.nth.call(null,vec__28185,(1),null);
return id;
});})(method_table__24131__auto__,prefer_table__24132__auto__,method_cache__24133__auto__,cached_hierarchy__24134__auto__,hierarchy__24135__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24135__auto__,method_table__24131__auto__,prefer_table__24132__auto__,method_cache__24133__auto__,cached_hierarchy__24134__auto__));
})();
}
cljs.core._add_method.call(null,rente.client.ws.push_msg_handler,new cljs.core.Keyword("rente","testevent","rente/testevent",2124003394),(function (p__28186){
var vec__28187 = p__28186;
var _ = cljs.core.nth.call(null,vec__28187,(0),null);
var event = cljs.core.nth.call(null,vec__28187,(1),null);
return console.log("PUSHed :rente/testevent from server: %s ",cljs.core.pr_str.call(null,event));
}));
if(typeof rente.client.ws.event_msg_handler !== 'undefined'){
} else {
rente.client.ws.event_msg_handler = (function (){var method_table__24131__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24132__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24133__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24134__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24135__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"rente.client.ws","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24135__auto__,method_table__24131__auto__,prefer_table__24132__auto__,method_cache__24133__auto__,cached_hierarchy__24134__auto__));
})();
}
cljs.core._add_method.call(null,rente.client.ws.event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28188){
var map__28189 = p__28188;
var map__28189__$1 = ((cljs.core.seq_QMARK_.call(null,map__28189))?cljs.core.apply.call(null,cljs.core.hash_map,map__28189):map__28189);
var ev_msg = map__28189__$1;
var event = cljs.core.get.call(null,map__28189__$1,new cljs.core.Keyword(null,"event","event",301435442));
return console.log("Unhandled event: %s",cljs.core.pr_str.call(null,event));
}));
cljs.core._add_method.call(null,rente.client.ws.event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__28190){
var map__28191 = p__28190;
var map__28191__$1 = ((cljs.core.seq_QMARK_.call(null,map__28191))?cljs.core.apply.call(null,cljs.core.hash_map,map__28191):map__28191);
var ev_msg = map__28191__$1;
var _QMARK_data = cljs.core.get.call(null,map__28191__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core._EQ_.call(null,_QMARK_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true], null))){
return console.log("Channel socket successfully established!");
} else {
return console.log("Channel socket state change: %s",cljs.core.pr_str.call(null,_QMARK_data));
}
}));
cljs.core._add_method.call(null,rente.client.ws.event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__28192){
var map__28193 = p__28192;
var map__28193__$1 = ((cljs.core.seq_QMARK_.call(null,map__28193))?cljs.core.apply.call(null,cljs.core.hash_map,map__28193):map__28193);
var ev_msg = map__28193__$1;
var _QMARK_data = cljs.core.get.call(null,map__28193__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return rente.client.ws.push_msg_handler.call(null,_QMARK_data);
}));
rente.client.ws.event_msg_handler_STAR_ = (function rente$client$ws$event_msg_handler_STAR_(p__28194){
var map__28196 = p__28194;
var map__28196__$1 = ((cljs.core.seq_QMARK_.call(null,map__28196))?cljs.core.apply.call(null,cljs.core.hash_map,map__28196):map__28196);
var ev_msg = map__28196__$1;
var id = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"event","event",301435442));
return rente.client.ws.event_msg_handler.call(null,ev_msg);
});
var packer_28198 = taoensso.sente.packers.transit.get_flexi_packer.call(null,new cljs.core.Keyword(null,"edn","edn",1317840885));
var map__28197_28199 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"packer","packer",66077544),packer_28198], null));
var map__28197_28200__$1 = ((cljs.core.seq_QMARK_.call(null,map__28197_28199))?cljs.core.apply.call(null,cljs.core.hash_map,map__28197_28199):map__28197_28199);
var chsk_28201 = cljs.core.get.call(null,map__28197_28200__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_28202 = cljs.core.get.call(null,map__28197_28200__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_28203 = cljs.core.get.call(null,map__28197_28200__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_28204 = cljs.core.get.call(null,map__28197_28200__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rente.client.ws.chsk = chsk_28201;

rente.client.ws.ch_chsk = ch_recv_28202;

rente.client.ws.chsk_send_BANG_ = send_fn_28203;

rente.client.ws.chsk_state = state_28204;
taoensso.sente.start_chsk_router_BANG_.call(null,rente.client.ws.ch_chsk,rente.client.ws.event_msg_handler_STAR_);
rente.client.ws.test_socket_callback = (function rente$client$ws$test_socket_callback(){
return rente.client.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rente","testevent","rente/testevent",2124003394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello socket Callback!"], null)], null),(2000),(function (p1__28205_SHARP_){
return console.log("CALLBACK from server: ",cljs.core.pr_str.call(null,p1__28205_SHARP_));
}));
});
rente.client.ws.test_socket_event = (function rente$client$ws$test_socket_event(){
return rente.client.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rente","testevent","rente/testevent",2124003394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello socket Event!"], null)], null));
});

//# sourceMappingURL=ws.js.map