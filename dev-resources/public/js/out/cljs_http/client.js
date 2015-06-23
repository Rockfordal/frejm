// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__23412__auto__ = v;
if(cljs.core.truth_(and__23412__auto__)){
return (v > (0));
} else {
return and__23412__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__26457_SHARP_,p2__26456_SHARP_){
var vec__26459 = clojure.string.split.call(null,p2__26456_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__26459,(0),null);
var v = cljs.core.nth.call(null,vec__26459,(1),null);
return cljs.core.assoc.call(null,p1__26457_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__26460_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__26460_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__26461){
var vec__26463 = p__26461;
var k = cljs.core.nth.call(null,vec__26463,(0),null);
var v = cljs.core.nth.call(null,vec__26463,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__23412__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__23412__auto__){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(content_type)].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__23412__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 * Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4421__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4421__auto__)){
var params = temp__4421__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
var channel = cljs.core.async.chan.call(null);
var c__26405__auto___26500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26405__auto___26500,channel){
return (function (){
var f__26406__auto__ = (function (){var switch__26384__auto__ = ((function (c__26405__auto___26500,channel){
return (function (state_26490){
var state_val_26491 = (state_26490[(1)]);
if((state_val_26491 === (1))){
var inst_26482 = client.call(null,request);
var state_26490__$1 = state_26490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26490__$1,(2),inst_26482);
} else {
if((state_val_26491 === (2))){
var inst_26484 = (state_26490[(2)]);
var inst_26485 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);
var inst_26486 = cljs_http.client.decode_body.call(null,inst_26484,cljs.reader.read_string,"application/edn",inst_26485);
var inst_26487 = cljs.core.async.put_BANG_.call(null,channel,inst_26486);
var inst_26488 = cljs.core.async.close_BANG_.call(null,channel);
var state_26490__$1 = (function (){var statearr_26492 = state_26490;
(statearr_26492[(7)] = inst_26487);

return statearr_26492;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26490__$1,inst_26488);
} else {
return null;
}
}
});})(c__26405__auto___26500,channel))
;
return ((function (switch__26384__auto__,c__26405__auto___26500,channel){
return (function() {
var cljs_http$client$wrap_edn_response_$_state_machine__26385__auto__ = null;
var cljs_http$client$wrap_edn_response_$_state_machine__26385__auto____0 = (function (){
var statearr_26496 = [null,null,null,null,null,null,null,null];
(statearr_26496[(0)] = cljs_http$client$wrap_edn_response_$_state_machine__26385__auto__);

(statearr_26496[(1)] = (1));

return statearr_26496;
});
var cljs_http$client$wrap_edn_response_$_state_machine__26385__auto____1 = (function (state_26490){
while(true){
var ret_value__26386__auto__ = (function (){try{while(true){
var result__26387__auto__ = switch__26384__auto__.call(null,state_26490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26387__auto__;
}
break;
}
}catch (e26497){if((e26497 instanceof Object)){
var ex__26388__auto__ = e26497;
var statearr_26498_26501 = state_26490;
(statearr_26498_26501[(5)] = ex__26388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26502 = state_26490;
state_26490 = G__26502;
continue;
} else {
return ret_value__26386__auto__;
}
break;
}
});
cljs_http$client$wrap_edn_response_$_state_machine__26385__auto__ = function(state_26490){
switch(arguments.length){
case 0:
return cljs_http$client$wrap_edn_response_$_state_machine__26385__auto____0.call(this);
case 1:
return cljs_http$client$wrap_edn_response_$_state_machine__26385__auto____1.call(this,state_26490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$client$wrap_edn_response_$_state_machine__26385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$client$wrap_edn_response_$_state_machine__26385__auto____0;
cljs_http$client$wrap_edn_response_$_state_machine__26385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$client$wrap_edn_response_$_state_machine__26385__auto____1;
return cljs_http$client$wrap_edn_response_$_state_machine__26385__auto__;
})()
;})(switch__26384__auto__,c__26405__auto___26500,channel))
})();
var state__26407__auto__ = (function (){var statearr_26499 = f__26406__auto__.call(null);
(statearr_26499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26405__auto___26500);

return statearr_26499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26407__auto__);
});})(c__26405__auto___26500,channel))
);


return channel;
});
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(){
var argseq__24464__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24464__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__26505){
var vec__26506 = p__26505;
var accept = cljs.core.nth.call(null,vec__26506,(0),null);
return ((function (vec__26506,accept){
return (function (request){
var temp__4421__auto__ = (function (){var or__23424__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__23424__auto__)){
return or__23424__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4421__auto__)){
var accept__$1 = temp__4421__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__26506,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq26503){
var G__26504 = cljs.core.first.call(null,seq26503);
var seq26503__$1 = cljs.core.next.call(null,seq26503);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__26504,seq26503__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(){
var argseq__24464__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24464__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__26509){
var vec__26510 = p__26509;
var content_type = cljs.core.nth.call(null,vec__26510,(0),null);
return ((function (vec__26510,content_type){
return (function (request){
var temp__4421__auto__ = (function (){var or__23424__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__23424__auto__)){
return or__23424__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4421__auto__)){
var content_type__$1 = temp__4421__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__26510,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq26507){
var G__26508 = cljs.core.first.call(null,seq26507);
var seq26507__$1 = cljs.core.next.call(null,seq26507);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__26508,seq26507__$1);
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 * Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4421__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4421__auto__)){
var params = temp__4421__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
var channel = cljs.core.async.chan.call(null);
var c__26405__auto___26547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26405__auto___26547,channel){
return (function (){
var f__26406__auto__ = (function (){var switch__26384__auto__ = ((function (c__26405__auto___26547,channel){
return (function (state_26537){
var state_val_26538 = (state_26537[(1)]);
if((state_val_26538 === (1))){
var inst_26529 = client.call(null,request);
var state_26537__$1 = state_26537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26537__$1,(2),inst_26529);
} else {
if((state_val_26538 === (2))){
var inst_26531 = (state_26537[(2)]);
var inst_26532 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);
var inst_26533 = cljs_http.client.decode_body.call(null,inst_26531,cljs_http.util.json_decode,"application/json",inst_26532);
var inst_26534 = cljs.core.async.put_BANG_.call(null,channel,inst_26533);
var inst_26535 = cljs.core.async.close_BANG_.call(null,channel);
var state_26537__$1 = (function (){var statearr_26539 = state_26537;
(statearr_26539[(7)] = inst_26534);

return statearr_26539;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26537__$1,inst_26535);
} else {
return null;
}
}
});})(c__26405__auto___26547,channel))
;
return ((function (switch__26384__auto__,c__26405__auto___26547,channel){
return (function() {
var cljs_http$client$wrap_json_response_$_state_machine__26385__auto__ = null;
var cljs_http$client$wrap_json_response_$_state_machine__26385__auto____0 = (function (){
var statearr_26543 = [null,null,null,null,null,null,null,null];
(statearr_26543[(0)] = cljs_http$client$wrap_json_response_$_state_machine__26385__auto__);

(statearr_26543[(1)] = (1));

return statearr_26543;
});
var cljs_http$client$wrap_json_response_$_state_machine__26385__auto____1 = (function (state_26537){
while(true){
var ret_value__26386__auto__ = (function (){try{while(true){
var result__26387__auto__ = switch__26384__auto__.call(null,state_26537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26387__auto__;
}
break;
}
}catch (e26544){if((e26544 instanceof Object)){
var ex__26388__auto__ = e26544;
var statearr_26545_26548 = state_26537;
(statearr_26545_26548[(5)] = ex__26388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26549 = state_26537;
state_26537 = G__26549;
continue;
} else {
return ret_value__26386__auto__;
}
break;
}
});
cljs_http$client$wrap_json_response_$_state_machine__26385__auto__ = function(state_26537){
switch(arguments.length){
case 0:
return cljs_http$client$wrap_json_response_$_state_machine__26385__auto____0.call(this);
case 1:
return cljs_http$client$wrap_json_response_$_state_machine__26385__auto____1.call(this,state_26537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$client$wrap_json_response_$_state_machine__26385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$client$wrap_json_response_$_state_machine__26385__auto____0;
cljs_http$client$wrap_json_response_$_state_machine__26385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$client$wrap_json_response_$_state_machine__26385__auto____1;
return cljs_http$client$wrap_json_response_$_state_machine__26385__auto__;
})()
;})(switch__26384__auto__,c__26405__auto___26547,channel))
})();
var state__26407__auto__ = (function (){var statearr_26546 = f__26406__auto__.call(null);
(statearr_26546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26405__auto___26547);

return statearr_26546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26407__auto__);
});})(c__26405__auto___26547,channel))
);


return channel;
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__26552){
var map__26553 = p__26552;
var map__26553__$1 = ((cljs.core.seq_QMARK_.call(null,map__26553))?cljs.core.apply.call(null,cljs.core.hash_map,map__26553):map__26553);
var req = map__26553__$1;
var query_params = cljs.core.get.call(null,map__26553__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__26556){
var map__26557 = p__26556;
var map__26557__$1 = ((cljs.core.seq_QMARK_.call(null,map__26557))?cljs.core.apply.call(null,cljs.core.hash_map,map__26557):map__26557);
var request = map__26557__$1;
var form_params = cljs.core.get.call(null,map__26557__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__26557__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__23412__auto__ = form_params;
if(cljs.core.truth_(and__23412__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__23412__auto__;
}
})())){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded"));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function cljs_http$client$wrap_android_cors_bugfix(client){
return (function (request){
return client.call(null,(cljs.core.truth_(cljs_http.util.android_QMARK_.call(null))?cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"android","android",-2084094573)], null),Math.random()):request));
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4421__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4421__auto__)){
var m = temp__4421__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__26558_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__26558_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__26562){
var map__26563 = p__26562;
var map__26563__$1 = ((cljs.core.seq_QMARK_.call(null,map__26563))?cljs.core.apply.call(null,cljs.core.hash_map,map__26563):map__26563);
var req = map__26563__$1;
var query_params = cljs.core.get.call(null,map__26563__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4421__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4421__auto__)){
var spec = temp__4421__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4421__auto__,map__26563,map__26563__$1,req,query_params){
return (function (p1__26559_SHARP_){
return cljs.core.merge.call(null,p1__26559_SHARP_,query_params);
});})(spec,temp__4421__auto__,map__26563,map__26563__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 * an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(){
var argseq__24464__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24464__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__26566){
var vec__26567 = p__26566;
var credentials = cljs.core.nth.call(null,vec__26567,(0),null);
return ((function (vec__26567,credentials){
return (function (req){
var credentials__$1 = (function (){var or__23424__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__23424__auto__)){
return or__23424__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__26567,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq26564){
var G__26565 = cljs.core.first.call(null,seq26564);
var seq26564__$1 = cljs.core.next.call(null,seq26564);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__26565,seq26564__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4421__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4421__auto__)){
var oauth_token = temp__4421__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/client.
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_android_cors_bugfix.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(){
var argseq__24464__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24464__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26570){
var vec__26571 = p__26570;
var req = cljs.core.nth.call(null,vec__26571,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq26568){
var G__26569 = cljs.core.first.call(null,seq26568);
var seq26568__$1 = cljs.core.next.call(null,seq26568);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__26569,seq26568__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(){
var argseq__24464__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24464__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26574){
var vec__26575 = p__26574;
var req = cljs.core.nth.call(null,vec__26575,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq26572){
var G__26573 = cljs.core.first.call(null,seq26572);
var seq26572__$1 = cljs.core.next.call(null,seq26572);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__26573,seq26572__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(){
var argseq__24464__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24464__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26578){
var vec__26579 = p__26578;
var req = cljs.core.nth.call(null,vec__26579,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq26576){
var G__26577 = cljs.core.first.call(null,seq26576);
var seq26576__$1 = cljs.core.next.call(null,seq26576);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__26577,seq26576__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(){
var argseq__24464__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24464__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26582){
var vec__26583 = p__26582;
var req = cljs.core.nth.call(null,vec__26583,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq26580){
var G__26581 = cljs.core.first.call(null,seq26580);
var seq26580__$1 = cljs.core.next.call(null,seq26580);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__26581,seq26580__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(){
var argseq__24464__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24464__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26586){
var vec__26587 = p__26586;
var req = cljs.core.nth.call(null,vec__26587,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq26584){
var G__26585 = cljs.core.first.call(null,seq26584);
var seq26584__$1 = cljs.core.next.call(null,seq26584);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__26585,seq26584__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(){
var argseq__24464__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24464__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26590){
var vec__26591 = p__26590;
var req = cljs.core.nth.call(null,vec__26591,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq26588){
var G__26589 = cljs.core.first.call(null,seq26588);
var seq26588__$1 = cljs.core.next.call(null,seq26588);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__26589,seq26588__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(){
var argseq__24464__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24464__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26594){
var vec__26595 = p__26594;
var req = cljs.core.nth.call(null,vec__26595,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq26592){
var G__26593 = cljs.core.first.call(null,seq26592);
var seq26592__$1 = cljs.core.next.call(null,seq26592);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__26593,seq26592__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(){
var argseq__24464__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24464__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26598){
var vec__26599 = p__26598;
var req = cljs.core.nth.call(null,vec__26599,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq26596){
var G__26597 = cljs.core.first.call(null,seq26596);
var seq26596__$1 = cljs.core.next.call(null,seq26596);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__26597,seq26596__$1);
});

//# sourceMappingURL=client.js.map