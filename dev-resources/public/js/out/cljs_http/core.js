// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 * with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4423__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4423__auto__)){
var xhr = temp__4423__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

return xhr.abort();
} else {
return null;
}
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__26647){
var map__26650 = p__26647;
var map__26650__$1 = ((cljs.core.seq_QMARK_.call(null,map__26650))?cljs.core.apply.call(null,cljs.core.hash_map,map__26650):map__26650);
var request__$1 = map__26650__$1;
var request_method = cljs.core.get.call(null,map__26650__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__26650__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__26650__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__26650__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request__$1);
var method = cljs.core.name.call(null,(function (){var or__23424__auto__ = request_method;
if(cljs.core.truth_(or__23424__auto__)){
return or__23424__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var timeout = (function (){var or__23424__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__23424__auto__)){
return or__23424__auto__;
} else {
return (0);
}
})();
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var xhr = (function (){var G__26651 = (new goog.net.XhrIo());
G__26651.setTimeoutInterval(timeout);

G__26651.setWithCredentials(send_credentials);

return G__26651;
})();
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__26650,map__26650__$1,request__$1,request_method,headers,body,with_credentials_QMARK_){
return (function (p1__26646_SHARP_){
var target = p1__26646_SHARP_.target;
cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponseText(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null)], null));

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__26650,map__26650__$1,request__$1,request_method,headers,body,with_credentials_QMARK_))
);

xhr.send(request_url,method,body,headers__$1);

return channel;
});

//# sourceMappingURL=core.js.map