// Compiled by ClojureScript 0.0-3308 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.sente.interfaces');
taoensso.sente.set_logging_level_BANG_ = (function taoensso$sente$set_logging_level_BANG_(level){
return taoensso.encore._STAR_log_level_STAR_ = level;
});
/**
 * Alpha - subject to change.
 * Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 * Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 * (ajax-call "/my-post-route"
 * {:method     :post
 * :params     {:username "Rich Hickey"
 * :type     "Awesome"}
 * :headers    {"Foo" "Bar"}
 * :resp-type  :text
 * :timeout-ms 7000
 * :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 * }
 * (fn async-callback [resp-map]
 * (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 * ;; ?status  - 200, 404, ..., or nil on no response
 * ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
 * ;;                  :timeout :no-content <http-error-status> nil}
 * (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__30625 = x;
var ev_id = cljs.core.nth.call(null,vec__30625,(0),null);
var _ = cljs.core.nth.call(null,vec__30625,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(cljs.core.truth_(taoensso.sente.event_QMARK_.call(null,x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4423__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var _QMARK_err = temp__4423__auto__;
var err_fmt = [cljs.core.str((function (){var G__30627 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__30627) {
case "wrong-type":
return "Malformed event (wrong type).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "else":
return "Malformed event (unknown error).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: %s")].join('');
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,[cljs.core.str(x)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.event_msg_QMARK_ = (function taoensso$sente$event_msg_QMARK_(x){
var and__23224__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__23224__auto__){
var and__23224__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__23224__auto____$1)){
var map__30630 = x;
var map__30630__$1 = ((cljs.core.seq_QMARK_.call(null,map__30630))?cljs.core.apply.call(null,cljs.core.hash_map,map__30630):map__30630);
var ch_recv = cljs.core.get.call(null,map__30630__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__30630__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__30630__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__30630__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__23224__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__23224__auto____$2)){
var and__23224__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__23224__auto____$3){
var and__23224__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__23224__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__23224__auto____$4;
}
} else {
return and__23224__auto____$3;
}
} else {
return and__23224__auto____$2;
}
} else {
return and__23224__auto____$1;
}
} else {
return and__23224__auto__;
}
});
/**
 * Note that cb reply need _not_ be `event` form!
 */
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj));
});
/**
 * pstr->clj
 */
taoensso.sente.unpack_STAR_ = (function taoensso$sente$unpack_STAR_(packer,pstr){
try{return taoensso.sente.interfaces.unpack.call(null,packer,taoensso.encore.hcond.call(null,false,"taoensso.sente",215,(new cljs.core.Delay((function (){
return pstr;
}),null)),new cljs.core.Symbol(null,"pstr","pstr",221763868,null),cljs.core.string_QMARK_,new cljs.core.Symbol(null,"string?","string?",-1129175764,null)));
}catch (e30632){var t = e30632;
taoensso.encore.debugf.call(null,"Bad package: %s (%s)",pstr,t);

throw t;
}});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack_STAR_ = (function taoensso$sente$pack_STAR_(){
var G__30634 = arguments.length;
switch (G__30634) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
return [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
return [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$lang$maxFixedArity = 4;
taoensso.sente.pack = (function taoensso$sente$pack(){
var argseq__24276__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__24276__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.encore.tracef.call(null,"Packing: %s -> %s",args,pstr);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq30636){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30636));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay((function (){
return prefixed_pstr;
}),null)),new cljs.core.Symbol(null,"prefixed-pstr","prefixed-pstr",-515747107,null),cljs.core.string_QMARK_,new cljs.core.Symbol(null,"string?","string?",-1129175764,null));


var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__30640 = prefix;
switch (G__30640) {
case "-":
return false;

break;
case "+":
return true;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(prefix)].join('')));

}
})();
var vec__30639 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__30639,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__30639,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.encore.tracef.call(null,"Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

taoensso.sente.IChSocket = (function (){var obj30643 = {};
return obj30643;
})();

/**
 * Implementation detail.
 */
taoensso.sente.chsk_init_BANG_ = (function taoensso$sente$chsk_init_BANG_(chsk){
if((function (){var and__23224__auto__ = chsk;
if(and__23224__auto__){
return chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1;
} else {
return and__23224__auto__;
}
})()){
return chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1(chsk);
} else {
var x__23872__auto__ = (((chsk == null))?null:chsk);
return (function (){var or__23236__auto__ = (taoensso.sente.chsk_init_BANG_[goog.typeOf(x__23872__auto__)]);
if(or__23236__auto__){
return or__23236__auto__;
} else {
var or__23236__auto____$1 = (taoensso.sente.chsk_init_BANG_["_"]);
if(or__23236__auto____$1){
return or__23236__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-init!",chsk);
}
}
})().call(null,chsk);
}
});

/**
 * Kills socket, stops auto-reconnects.
 */
taoensso.sente.chsk_destroy_BANG_ = (function taoensso$sente$chsk_destroy_BANG_(chsk){
if((function (){var and__23224__auto__ = chsk;
if(and__23224__auto__){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1;
} else {
return and__23224__auto__;
}
})()){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1(chsk);
} else {
var x__23872__auto__ = (((chsk == null))?null:chsk);
return (function (){var or__23236__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__23872__auto__)]);
if(or__23236__auto__){
return or__23236__auto__;
} else {
var or__23236__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(or__23236__auto____$1){
return or__23236__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-destroy!",chsk);
}
}
})().call(null,chsk);
}
});

/**
 * Drops connection, allows auto-reconnect. Useful for reauthenticating after login/logout.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
if((function (){var and__23224__auto__ = chsk;
if(and__23224__auto__){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1;
} else {
return and__23224__auto__;
}
})()){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__23872__auto__ = (((chsk == null))?null:chsk);
return (function (){var or__23236__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__23872__auto__)]);
if(or__23236__auto__){
return or__23236__auto__;
} else {
var or__23236__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(or__23236__auto____$1){
return or__23236__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-reconnect!",chsk);
}
}
})().call(null,chsk);
}
});

/**
 * Implementation detail.
 */
taoensso.sente.chsk_send_BANG__STAR_ = (function taoensso$sente$chsk_send_BANG__STAR_(chsk,ev,opts){
if((function (){var and__23224__auto__ = chsk;
if(and__23224__auto__){
return chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3;
} else {
return and__23224__auto__;
}
})()){
return chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3(chsk,ev,opts);
} else {
var x__23872__auto__ = (((chsk == null))?null:chsk);
return (function (){var or__23236__auto__ = (taoensso.sente.chsk_send_BANG__STAR_[goog.typeOf(x__23872__auto__)]);
if(or__23236__auto__){
return or__23236__auto__;
} else {
var or__23236__auto____$1 = (taoensso.sente.chsk_send_BANG__STAR_["_"]);
if(or__23236__auto____$1){
return or__23236__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-send!*",chsk);
}
}
})().call(null,chsk,ev,opts);
}
});

/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(){
var G__30645 = arguments.length;
switch (G__30645) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.encore.tracef.call(null,"Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev);

return taoensso.sente.chsk_send_BANG__STAR_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__23236__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__23236__auto__){
return or__23236__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null))),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol("enc","nneg-int?","enc/nneg-int?",803640858,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null))))))].join('')));
}

if(cljs.core.truth_((function (){var or__23236__auto__ = (_QMARK_cb == null);
if(or__23236__auto__){
return or__23236__auto__;
} else {
var or__23236__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__23236__auto____$1){
return or__23236__auto____$1;
} else {
return taoensso.encore.chan_QMARK_.call(null,_QMARK_cb);
}
}
})())){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)))))].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4423__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4423__auto__)){
var cb_uuid = temp__4423__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4423__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4423__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__30647,merge_state){
var map__30650 = p__30647;
var map__30650__$1 = ((cljs.core.seq_QMARK_.call(null,map__30650))?cljs.core.apply.call(null,cljs.core.hash_map,map__30650):map__30650);
var chsk = map__30650__$1;
var chs = cljs.core.get.call(null,map__30650__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__30650__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__30651 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__30650,map__30650__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__23224__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__23224__auto__)){
var and__23224__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__23224__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__23224__auto____$1;
}
} else {
return and__23224__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__30650,map__30650__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__30651,(0),null);
var new_state = cljs.core.nth.call(null,vec__30651,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new_state);

return new_state;
} else {
return null;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 * instead of a cb-fn. The channel will receive values of form
 * [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay((function (){
return _QMARK_cb;
}),null)),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null),taoensso.encore.chan_QMARK_,new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null));


taoensso.sente.assert_event.call(null,ev);

var vec__30653 = ev;
var ev_id = cljs.core.nth.call(null,vec__30653,(0),null);
var _ = cljs.core.nth.call(null,vec__30653,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__30653,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__30653,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.encore.tracef.call(null,"receive-buffered-evs!: %s",clj);

var buffered_evs = taoensso.encore.hcond.call(null,false,"taoensso.sente",739,(new cljs.core.Delay((function (){
return clj;
}),null)),new cljs.core.Symbol(null,"clj","clj",980036099,null),cljs.core.vector_QMARK_,new cljs.core.Symbol(null,"vector?","vector?",-61367869,null));
var seq__30658 = cljs.core.seq.call(null,buffered_evs);
var chunk__30659 = null;
var count__30660 = (0);
var i__30661 = (0);
while(true){
if((i__30661 < count__30660)){
var ev = cljs.core._nth.call(null,chunk__30659,i__30661);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__30662 = seq__30658;
var G__30663 = chunk__30659;
var G__30664 = count__30660;
var G__30665 = (i__30661 + (1));
seq__30658 = G__30662;
chunk__30659 = G__30663;
count__30660 = G__30664;
i__30661 = G__30665;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__30658);
if(temp__4423__auto__){
var seq__30658__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30658__$1)){
var c__24021__auto__ = cljs.core.chunk_first.call(null,seq__30658__$1);
var G__30666 = cljs.core.chunk_rest.call(null,seq__30658__$1);
var G__30667 = c__24021__auto__;
var G__30668 = cljs.core.count.call(null,c__24021__auto__);
var G__30669 = (0);
seq__30658 = G__30666;
chunk__30659 = G__30667;
count__30660 = G__30668;
i__30661 = G__30669;
continue;
} else {
var ev = cljs.core.first.call(null,seq__30658__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__30670 = cljs.core.next.call(null,seq__30658__$1);
var G__30671 = null;
var G__30672 = (0);
var G__30673 = (0);
seq__30658 = G__30670;
chunk__30659 = G__30671;
count__30660 = G__30672;
i__30661 = G__30673;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function taoensso$sente$handle_when_handshake_BANG_(chsk,chs,clj){
var handshake_QMARK_ = (cljs.core.vector_QMARK_.call(null,clj)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clj),new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686)));
taoensso.encore.tracef.call(null,"handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj);

if(handshake_QMARK_){
var vec__30676 = clj;
var _ = cljs.core.nth.call(null,vec__30676,(0),null);
var vec__30677 = cljs.core.nth.call(null,vec__30676,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__30677,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__30677,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__30677,(2),null);
var handshake_ev = vec__30676;
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token))){
taoensso.encore.warnf.call(null,"SECURITY WARNING: no CSRF token available for use by Sente");
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token], null));

taoensso.sente.assert_event.call(null,handshake_ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
} else {
return null;
}
});
taoensso.sente.set_exp_backoff_timeout_BANG_ = (function taoensso$sente$set_exp_backoff_timeout_BANG_(){
var argseq__24276__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24276__auto__);
});

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__30680){
var vec__30681 = p__30680;
var nattempt = cljs.core.nth.call(null,vec__30681,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__23236__auto__ = nattempt;
if(cljs.core.truth_(or__23236__auto__)){
return or__23236__auto__;
} else {
return (0);
}
})()));
});

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq30678){
var G__30679 = cljs.core.first.call(null,seq30678);
var seq30678__$1 = cljs.core.next.call(null,seq30678);
return taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30679,seq30678__$1);
});

/**
* @constructor
* @param {*} client_id
* @param {*} url
* @param {*} chs
* @param {*} socket_
* @param {*} kalive_ms
* @param {*} kalive_timer_
* @param {*} kalive_due_QMARK__
* @param {*} nattempt_
* @param {*} cbs_waiting_
* @param {*} state_
* @param {*} packer
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
taoensso.sente.ChWebSocket = (function (client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,__meta,__extmap,__hash){
this.client_id = client_id;
this.url = url;
this.chs = chs;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.nattempt_ = nattempt_;
this.cbs_waiting_ = cbs_waiting_;
this.state_ = state_;
this.packer = packer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__23831__auto__,k__23832__auto__){
var self__ = this;
var this__23831__auto____$1 = this;
return cljs.core._lookup.call(null,this__23831__auto____$1,k__23832__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__23833__auto__,k30683,else__23834__auto__){
var self__ = this;
var this__23833__auto____$1 = this;
var G__30685 = (((k30683 instanceof cljs.core.Keyword))?k30683.fqn:null);
switch (G__30685) {
case "client-id":
return self__.client_id;

break;
case "kalive-ms":
return self__.kalive_ms;

break;
case "nattempt_":
return self__.nattempt_;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30683,else__23834__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__23845__auto__,writer__23846__auto__,opts__23847__auto__){
var self__ = this;
var this__23845__auto____$1 = this;
var pr_pair__23848__auto__ = ((function (this__23845__auto____$1){
return (function (keyval__23849__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__23846__auto__,cljs.core.pr_writer,""," ","",opts__23847__auto__,keyval__23849__auto__);
});})(this__23845__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__23846__auto__,pr_pair__23848__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__23847__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__23829__auto__){
var self__ = this;
var this__23829__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__23825__auto__){
var self__ = this;
var this__23825__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__23835__auto__){
var self__ = this;
var this__23835__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__23826__auto__){
var self__ = this;
var this__23826__auto____$1 = this;
var h__23652__auto__ = self__.__hash;
if(!((h__23652__auto__ == null))){
return h__23652__auto__;
} else {
var h__23652__auto____$1 = cljs.core.hash_imap.call(null,this__23826__auto____$1);
self__.__hash = h__23652__auto____$1;

return h__23652__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__23827__auto__,other__23828__auto__){
var self__ = this;
var this__23827__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23224__auto__ = other__23828__auto__;
if(cljs.core.truth_(and__23224__auto__)){
var and__23224__auto____$1 = (this__23827__auto____$1.constructor === other__23828__auto__.constructor);
if(and__23224__auto____$1){
return cljs.core.equiv_map.call(null,this__23827__auto____$1,other__23828__auto__);
} else {
return and__23224__auto____$1;
}
} else {
return and__23224__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__23840__auto__,k__23841__auto__){
var self__ = this;
var this__23840__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__23841__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__23840__auto____$1),self__.__meta),k__23841__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__23841__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__23838__auto__,k__23839__auto__,G__30682){
var self__ = this;
var this__23838__auto____$1 = this;
var pred__30686 = cljs.core.keyword_identical_QMARK_;
var expr__30687 = k__23839__auto__;
if(cljs.core.truth_(pred__30686.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__30687))){
return (new taoensso.sente.ChWebSocket(G__30682,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30686.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__30687))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__30682,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30686.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__30687))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,G__30682,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30686.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__30687))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,G__30682,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30686.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__30687))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,G__30682,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30686.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__30687))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,G__30682,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30686.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__30687))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__30682,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30686.call(null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),expr__30687))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__30682,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30686.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__30687))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,G__30682,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30686.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__30687))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,G__30682,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30686.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__30687))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,G__30682,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__23839__auto__,G__30682),null));
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
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__23843__auto__){
var self__ = this;
var this__23843__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__23830__auto__,G__30682){
var self__ = this;
var this__23830__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,G__30682,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__23836__auto__,entry__23837__auto__){
var self__ = this;
var this__23836__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__23837__auto__)){
return cljs.core._assoc.call(null,this__23836__auto____$1,cljs.core._nth.call(null,entry__23837__auto__,(0)),cljs.core._nth.call(null,entry__23837__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__23836__auto____$1,entry__23837__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__30689){
var self__ = this;
var map__30690 = p__30689;
var map__30690__$1 = ((cljs.core.seq_QMARK_.call(null,map__30690))?cljs.core.apply.call(null,cljs.core.hash_map,map__30690):map__30690);
var opts = map__30690__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__30690__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__30690__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__30690__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.encore.warnf.call(null,"Chsk send against closed chsk.");

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4423__auto___30723 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4423__auto___30723)){
var cb_uuid_30724 = temp__4423__auto___30723;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_30724], null),taoensso.encore.hcond.call(null,false,"taoensso.sente",804,(new cljs.core.Delay(((function (cb_uuid_30724,temp__4423__auto___30723,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30690,map__30690__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return _QMARK_cb_fn;
});})(cb_uuid_30724,temp__4423__auto___30723,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30690,map__30690__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)));

var temp__4423__auto___30725__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4423__auto___30725__$1)){
var timeout_ms_30726 = temp__4423__auto___30725__$1;
var c__25333__auto___30727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto___30727,timeout_ms_30726,temp__4423__auto___30725__$1,cb_uuid_30724,temp__4423__auto___30723,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30690,map__30690__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto___30727,timeout_ms_30726,temp__4423__auto___30725__$1,cb_uuid_30724,temp__4423__auto___30723,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30690,map__30690__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_30701){
var state_val_30702 = (state_30701[(1)]);
if((state_val_30702 === (1))){
var inst_30691 = cljs.core.async.timeout.call(null,timeout_ms_30726);
var state_30701__$1 = state_30701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30701__$1,(2),inst_30691);
} else {
if((state_val_30702 === (2))){
var inst_30694 = (state_30701[(7)]);
var inst_30693 = (state_30701[(2)]);
var inst_30694__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_30701__$1 = (function (){var statearr_30703 = state_30701;
(statearr_30703[(7)] = inst_30694__$1);

(statearr_30703[(8)] = inst_30693);

return statearr_30703;
})();
if(cljs.core.truth_(inst_30694__$1)){
var statearr_30704_30728 = state_30701__$1;
(statearr_30704_30728[(1)] = (3));

} else {
var statearr_30705_30729 = state_30701__$1;
(statearr_30705_30729[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (3))){
var inst_30694 = (state_30701[(7)]);
var inst_30696 = inst_30694.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_30701__$1 = state_30701;
var statearr_30706_30730 = state_30701__$1;
(statearr_30706_30730[(2)] = inst_30696);

(statearr_30706_30730[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (4))){
var state_30701__$1 = state_30701;
var statearr_30707_30731 = state_30701__$1;
(statearr_30707_30731[(2)] = null);

(statearr_30707_30731[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (5))){
var inst_30699 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30701__$1,inst_30699);
} else {
return null;
}
}
}
}
}
});})(c__25333__auto___30727,timeout_ms_30726,temp__4423__auto___30725__$1,cb_uuid_30724,temp__4423__auto___30723,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30690,map__30690__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__25271__auto__,c__25333__auto___30727,timeout_ms_30726,temp__4423__auto___30725__$1,cb_uuid_30724,temp__4423__auto___30723,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30690,map__30690__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__25272__auto__ = null;
var taoensso$sente$state_machine__25272__auto____0 = (function (){
var statearr_30711 = [null,null,null,null,null,null,null,null,null];
(statearr_30711[(0)] = taoensso$sente$state_machine__25272__auto__);

(statearr_30711[(1)] = (1));

return statearr_30711;
});
var taoensso$sente$state_machine__25272__auto____1 = (function (state_30701){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_30701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e30712){if((e30712 instanceof Object)){
var ex__25275__auto__ = e30712;
var statearr_30713_30732 = state_30701;
(statearr_30713_30732[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30733 = state_30701;
state_30701 = G__30733;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
taoensso$sente$state_machine__25272__auto__ = function(state_30701){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__25272__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__25272__auto____1.call(this,state_30701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__25272__auto____0;
taoensso$sente$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__25272__auto____1;
return taoensso$sente$state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto___30727,timeout_ms_30726,temp__4423__auto___30725__$1,cb_uuid_30724,temp__4423__auto___30723,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30690,map__30690__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__25335__auto__ = (function (){var statearr_30714 = f__25334__auto__.call(null);
(statearr_30714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___30727);

return statearr_30714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto___30727,timeout_ms_30726,temp__4423__auto___30725__$1,cb_uuid_30724,temp__4423__auto___30723,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30690,map__30690__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e30715){if((e30715 instanceof Error)){
var e = e30715;
taoensso.encore.errorf.call(null,"Chsk send error: %s",e);

var temp__4423__auto___30734 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4423__auto___30734)){
var cb_uuid_30735 = temp__4423__auto___30734;
var cb_fn_STAR__30736 = (function (){var or__23236__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_30735);
if(cljs.core.truth_(or__23236__auto__)){
return or__23236__auto__;
} else {
return taoensso.encore.hcond.call(null,false,"taoensso.sente",818,(new cljs.core.Delay(((function (or__23236__auto__,cb_uuid_30735,temp__4423__auto___30734,e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30690,map__30690__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return _QMARK_cb_fn;
});})(or__23236__auto__,cb_uuid_30735,temp__4423__auto___30734,e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__30690,map__30690__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null));
}
})();
cb_fn_STAR__30736.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e30715;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4423__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4423__auto__)){
var s = temp__4423__auto__;
return s.close((3000),"SENTE_RECONNECT");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true], null));

var temp__4423__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4423__auto__)){
var s = temp__4423__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4423__auto__ = (function (){var or__23236__auto__ = (window["WebSocket"]);
if(cljs.core.truth_(or__23236__auto__)){
return or__23236__auto__;
} else {
return (window["MozWebSocket"]);
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var WebSocket = temp__4423__auto__;
((function (WebSocket,temp__4423__auto__,chsk__$1){
return (function taoensso$sente$connect_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return null;
} else {
var retry_BANG_ = ((function (WebSocket,temp__4423__auto__,chsk__$1){
return (function (){
var nattempt_STAR_ = cljs.core.swap_BANG_.call(null,self__.nattempt_,cljs.core.inc);
window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer_));

taoensso.encore.warnf.call(null,"Chsk is closed: will try reconnect (%s).",nattempt_STAR_);

return taoensso.sente.set_exp_backoff_timeout_BANG_.call(null,taoensso$sente$connect_BANG_,nattempt_STAR_);
});})(WebSocket,temp__4423__auto__,chsk__$1))
;
var temp__4421__auto__ = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null))));
}catch (e30719){if((e30719 instanceof Error)){
var e = e30719;
taoensso.encore.errorf.call(null,"WebSocket js/Error: %s",e);

return null;
} else {
throw e30719;

}
}})();
if(cljs.core.truth_(temp__4421__auto__)){
var socket = temp__4421__auto__;
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__30720 = socket;
(G__30720["onerror"] = ((function (G__30720,socket,temp__4421__auto__,retry_BANG_,WebSocket,temp__4423__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.encore.errorf.call(null,"WebSocket error: %s",ws_ev);
});})(G__30720,socket,temp__4421__auto__,retry_BANG_,WebSocket,temp__4423__auto__,chsk__$1))
);

(G__30720["onmessage"] = ((function (G__30720,socket,temp__4421__auto__,retry_BANG_,WebSocket,temp__4423__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = (ws_ev["data"]);
var vec__30721 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__30721,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__30721,(1),null);
var or__23236__auto__ = (function (){var and__23224__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__23224__auto__)){
return cljs.core.reset_BANG_.call(null,self__.nattempt_,(0));
} else {
return and__23224__auto__;
}
})();
if(cljs.core.truth_(or__23236__auto__)){
return or__23236__auto__;
} else {
var temp__4421__auto____$1 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4421__auto____$1)){
var cb_uuid = temp__4421__auto____$1;
var temp__4421__auto____$2 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4421__auto____$2)){
var cb_fn = temp__4421__auto____$2;
return cb_fn.call(null,clj);
} else {
return taoensso.encore.warnf.call(null,"Cb reply w/o local cb-fn: %s",clj);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__30720,socket,temp__4421__auto__,retry_BANG_,WebSocket,temp__4423__auto__,chsk__$1))
);

(G__30720["onopen"] = ((function (G__30720,socket,temp__4421__auto__,retry_BANG_,WebSocket,temp__4423__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__30720,socket,temp__4421__auto__,retry_BANG_,WebSocket,temp__4423__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__30720,socket,temp__4421__auto__,retry_BANG_,WebSocket,temp__4423__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__30720,socket,temp__4421__auto__,retry_BANG_,WebSocket,temp__4423__auto__,chsk__$1))
);

(G__30720["onclose"] = ((function (G__30720,socket,temp__4421__auto__,retry_BANG_,WebSocket,temp__4423__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);
});})(G__30720,socket,temp__4421__auto__,retry_BANG_,WebSocket,temp__4423__auto__,chsk__$1))
);

return G__30720;
})());
} else {
return retry_BANG_.call(null);
}
}
});})(WebSocket,temp__4423__auto__,chsk__$1))
.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"kalive-ms","kalive-ms",1851265548,null),new cljs.core.Symbol(null,"kalive-timer_","kalive-timer_",-1096022620,null),new cljs.core.Symbol(null,"kalive-due?_","kalive-due?_",1679969599,null),new cljs.core.Symbol(null,"nattempt_","nattempt_",-674239217,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__23865__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__23865__auto__,writer__23866__auto__){
return cljs.core._write.call(null,writer__23866__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer){
return (new taoensso.sente.ChWebSocket(client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__30684){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__30684),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__30684),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__30684),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__30684),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__30684),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__30684),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__30684),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552).cljs$core$IFn$_invoke$arity$1(G__30684),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__30684),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__30684),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__30684),null,cljs.core.dissoc.call(null,G__30684,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544)),null));
});


/**
* @constructor
* @param {*} client_id
* @param {*} url
* @param {*} chs
* @param {*} timeout_ms
* @param {*} ajax_opts
* @param {*} curr_xhr_
* @param {*} state_
* @param {*} packer
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
taoensso.sente.ChAjaxSocket = (function (client_id,url,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer,__meta,__extmap,__hash){
this.client_id = client_id;
this.url = url;
this.chs = chs;
this.timeout_ms = timeout_ms;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.state_ = state_;
this.packer = packer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__23831__auto__,k__23832__auto__){
var self__ = this;
var this__23831__auto____$1 = this;
return cljs.core._lookup.call(null,this__23831__auto____$1,k__23832__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__23833__auto__,k30738,else__23834__auto__){
var self__ = this;
var this__23833__auto____$1 = this;
var G__30740 = (((k30738 instanceof cljs.core.Keyword))?k30738.fqn:null);
switch (G__30740) {
case "client-id":
return self__.client_id;

break;
case "url":
return self__.url;

break;
case "chs":
return self__.chs;

break;
case "timeout-ms":
return self__.timeout_ms;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "state_":
return self__.state_;

break;
case "packer":
return self__.packer;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30738,else__23834__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__23845__auto__,writer__23846__auto__,opts__23847__auto__){
var self__ = this;
var this__23845__auto____$1 = this;
var pr_pair__23848__auto__ = ((function (this__23845__auto____$1){
return (function (keyval__23849__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__23846__auto__,cljs.core.pr_writer,""," ","",opts__23847__auto__,keyval__23849__auto__);
});})(this__23845__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__23846__auto__,pr_pair__23848__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__23847__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__23829__auto__){
var self__ = this;
var this__23829__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__23825__auto__){
var self__ = this;
var this__23825__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__23835__auto__){
var self__ = this;
var this__23835__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__23826__auto__){
var self__ = this;
var this__23826__auto____$1 = this;
var h__23652__auto__ = self__.__hash;
if(!((h__23652__auto__ == null))){
return h__23652__auto__;
} else {
var h__23652__auto____$1 = cljs.core.hash_imap.call(null,this__23826__auto____$1);
self__.__hash = h__23652__auto____$1;

return h__23652__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__23827__auto__,other__23828__auto__){
var self__ = this;
var this__23827__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23224__auto__ = other__23828__auto__;
if(cljs.core.truth_(and__23224__auto__)){
var and__23224__auto____$1 = (this__23827__auto____$1.constructor === other__23828__auto__.constructor);
if(and__23224__auto____$1){
return cljs.core.equiv_map.call(null,this__23827__auto____$1,other__23828__auto__);
} else {
return and__23224__auto____$1;
}
} else {
return and__23224__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__23840__auto__,k__23841__auto__){
var self__ = this;
var this__23840__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__23841__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__23840__auto____$1),self__.__meta),k__23841__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__23841__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__23838__auto__,k__23839__auto__,G__30737){
var self__ = this;
var this__23838__auto____$1 = this;
var pred__30741 = cljs.core.keyword_identical_QMARK_;
var expr__30742 = k__23839__auto__;
if(cljs.core.truth_(pred__30741.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__30742))){
return (new taoensso.sente.ChAjaxSocket(G__30737,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30741.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__30742))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__30737,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30741.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__30742))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,G__30737,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30741.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__30742))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,G__30737,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30741.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__30742))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,G__30737,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30741.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__30742))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,G__30737,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30741.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__30742))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__30737,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30741.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__30742))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,G__30737,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__23839__auto__,G__30737),null));
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__23843__auto__){
var self__ = this;
var this__23843__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__23830__auto__,G__30737){
var self__ = this;
var this__23830__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,G__30737,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__23836__auto__,entry__23837__auto__){
var self__ = this;
var this__23836__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__23837__auto__)){
return cljs.core._assoc.call(null,this__23836__auto____$1,cljs.core._nth.call(null,entry__23837__auto__,(0)),cljs.core._nth.call(null,entry__23837__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__23836__auto____$1,entry__23837__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__30744){
var self__ = this;
var map__30745 = p__30744;
var map__30745__$1 = ((cljs.core.seq_QMARK_.call(null,map__30745))?cljs.core.apply.call(null,cljs.core.hash_map,map__30745):map__30745);
var opts = map__30745__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__30745__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__30745__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__30745__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.encore.warnf.call(null,"Chsk send against closed chsk.");

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
taoensso.sente.ajax_call.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)),new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null);
})()], null)),((function (_QMARK_cb_fn,chsk__$1,map__30745,map__30745__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__30746){
var map__30749 = p__30746;
var map__30749__$1 = ((cljs.core.seq_QMARK_.call(null,map__30749))?cljs.core.apply.call(null,cljs.core.hash_map,map__30749):map__30749);
var _QMARK_error = cljs.core.get.call(null,map__30749__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__30749__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__30750 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__30750,(0),null);
var _ = cljs.core.nth.call(null,vec__30750,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.encore.warnf.call(null,"Cb reply w/o local cb-fn: %s",resp_clj);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(_QMARK_cb_fn,chsk__$1,map__30745,map__30745__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4423__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4423__auto__)){
var x = temp__4423__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true], null));

var temp__4423__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4423__auto__)){
var x = temp__4423__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
((function (chsk__$1){
return (function taoensso$sente$async_poll_for_update_BANG_(nattempt){
taoensso.encore.tracef.call(null,"async-poll-for-update!");

if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return null;
} else {
var retry_BANG_ = ((function (chsk__$1){
return (function (){
var nattempt_STAR_ = (nattempt + (1));
taoensso.encore.warnf.call(null,"Chsk is closed: will try reconnect (%s).",nattempt_STAR_);

return taoensso.sente.set_exp_backoff_timeout_BANG_.call(null,cljs.core.partial.call(null,taoensso$sente$async_poll_for_update_BANG_,nattempt_STAR_),nattempt_STAR_);
});})(chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_call.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_BANG_,chsk__$1){
return (function taoensso$sente$async_poll_for_update_BANG__$_ajax_cb(p__30756){
var map__30759 = p__30756;
var map__30759__$1 = ((cljs.core.seq_QMARK_.call(null,map__30759))?cljs.core.apply.call(null,cljs.core.hash_map,map__30759):map__30759);
var _QMARK_error = cljs.core.get.call(null,map__30759__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__30759__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$async_poll_for_update_BANG_.call(null,(0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__30760 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__30760,(0),null);
var _ = cljs.core.nth.call(null,vec__30760,(1),null);
var or__23236__auto___30762 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__23236__auto___30762)){
} else {
var buffered_evs_30763 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_30763);

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}

return taoensso$sente$async_poll_for_update_BANG_.call(null,(0));
}
});})(retry_BANG_,chsk__$1))
));
}
});})(chsk__$1))
.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__23865__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__23865__auto__,writer__23866__auto__){
return cljs.core._write.call(null,writer__23866__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,url,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer){
return (new taoensso.sente.ChAjaxSocket(client_id,url,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__30739){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__30739),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__30739),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__30739),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__30739),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__30739),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__30739),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__30739),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__30739),null,cljs.core.dissoc.call(null,G__30739,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544)),null));
});

/**
 * (ƒ [path window-location websocket?]) -> server-side chsk route URL string.
 * 
 * * path       - As provided to client-side `make-channel-socket!` fn
 * (usu. "/chsk").
 * * websocket? - True for WebSocket connections, false for Ajax (long-polling)
 * connections.
 * * window-location - Map with keys:
 * :href     ; "http://www.example.org:80/foo/bar?q=baz#bang"
 * :protocol ; "http:" ; Note the :
 * :hostname ; "example.org"
 * :host     ; "example.org:80"
 * :pathname ; "/foo/bar"
 * :search   ; "?q=baz"
 * :hash     ; "#bang"
 * 
 * Note that the *same* URL is used for: WebSockets, POSTs, GETs. Server-side
 * routes should be configured accordingly.
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__30764,websocket_QMARK_){
var map__30766 = p__30764;
var map__30766__$1 = ((cljs.core.seq_QMARK_.call(null,map__30766))?cljs.core.apply.call(null,cljs.core.hash_map,map__30766):map__30766);
var window_location = map__30766__$1;
var protocol = cljs.core.get.call(null,map__30766__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__30766__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__30766__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(((cljs.core.not.call(null,websocket_QMARK_))?protocol:((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"))),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__23236__auto__ = path;
if(cljs.core.truth_(or__23236__auto__)){
return or__23236__auto__;
} else {
return pathname;
}
})())].join('');
});
/**
 * Returns a map with keys:
 * :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 * ; May `put!` (inject) arbitrary `event`s to this channel.
 * :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 * :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 * :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 * Common options:
 * :type         ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto)
 * :ws-kalive-ms ; Ping to keep a WebSocket conn alive if no activity w/in given
 * ; number of milliseconds
 * :lp-kalive-ms ; Ping to keep a long-polling (Ajax) conn alive ''
 * :chsk-url-fn  ; Please see `default-chsk-url-fn` for details
 * :packer       ; :edn (default), or an IPacker implementation (experimental)
 * :ajax-opts    ; Base opts map provided to `ajax-call`
 */
taoensso.sente.make_channel_socket_BANG_ = (function taoensso$sente$make_channel_socket_BANG_(){
var argseq__24276__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24276__auto__);
});

taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__30769){
var vec__30770 = p__30769;
var map__30771 = cljs.core.nth.call(null,vec__30770,(0),null);
var map__30771__$1 = ((cljs.core.seq_QMARK_.call(null,map__30771))?cljs.core.apply.call(null,cljs.core.hash_map,map__30771):map__30771);
var opts = map__30771__$1;
var type = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var recv_buf_or_n = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var ws_kalive_ms = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var chsk_url_fn = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294),taoensso.sente.default_chsk_url_fn);
var packer = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var client_id = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__23236__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__23236__auto__)){
return or__23236__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var ajax_opts = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var _deprecated_more_opts = cljs.core.nth.call(null,vec__30770,(1),null);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay(((function (vec__30770,map__30771,map__30771__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts){
return (function (){
return type;
});})(vec__30770,map__30771,map__30771__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts))
,null)),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null),new cljs.core.Symbol(null,"type","type",-1480165421,null))))].join('')));
}

if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay(((function (vec__30770,map__30771,map__30771__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts){
return (function (){
return client_id;
});})(vec__30770,map__30771,map__30771__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts))
,null)),new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),taoensso.encore.nblank_str_QMARK_,new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null),new cljs.core.Symbol(null,"client-id","client-id",1175909387,null))))].join('')));
}

if(!((_deprecated_more_opts == null))){
taoensso.encore.warnf.call(null,"`make-channel-socket!` fn signature CHANGED with Sente v0.10.0.");
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.encore.warnf.call(null,":lp-timeout opt has CHANGED; please use :lp-timout-ms.");
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var window_location = taoensso.encore.get_window_location.call(null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__30770,map__30771,map__30771__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__23236__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__23236__auto__){
return or__23236__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__30770,map__30771,map__30771__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__30770,map__30771,map__30771__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__30770,map__30771,map__30771__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__30770,map__30771,map__30771__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__30770,map__30771,map__30771__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts))
,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs))], null));
var chsk = (function (){var or__23236__auto__ = (function (){var and__23224__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__23224__auto__){
return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,cljs.core.atom.call(null,(0)),packer__$1,private_chs,cljs.core.atom.call(null,null),chsk_url_fn.call(null,path,window_location,new cljs.core.Keyword(null,"ws","ws",86841443)),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))])));
} else {
return and__23224__auto__;
}
})();
if(cljs.core.truth_(or__23236__auto__)){
return or__23236__auto__;
} else {
var and__23224__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__23224__auto__){
return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"url","url",276297046),chsk_url_fn.call(null,path,window_location,cljs.core.not.call(null,new cljs.core.Keyword(null,"ws","ws",86841443))),new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),lp_timeout_ms,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))], null)));
} else {
return and__23224__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"chsk","chsk",776828446,null)))].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__30770,map__30771,map__30771__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__30773 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__30773,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__30773,(1),null);
var ev__$1 = vec__30773;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__30770,map__30771,map__30771__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,ajax_opts,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_BANG_.cljs$lang$applyTo = (function (seq30767){
var G__30768 = cljs.core.first.call(null,seq30767);
var seq30767__$1 = cljs.core.next.call(null,seq30767);
return taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30768,seq30767__$1);
});
/**
 * Creates a go-loop to call `(event-msg-handler <event-msg>)` and returns a
 * `(fn stop! [])`. Catches & logs errors. Advanced users may choose to instead
 * write their own loop against `ch-recv`.
 */
taoensso.sente.start_chsk_router_BANG_ = (function taoensso$sente$start_chsk_router_BANG_(){
var argseq__24276__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__24276__auto__);
});

taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__30777){
var vec__30778 = p__30777;
var map__30779 = cljs.core.nth.call(null,vec__30778,(0),null);
var map__30779__$1 = ((cljs.core.seq_QMARK_.call(null,map__30779))?cljs.core.apply.call(null,cljs.core.hash_map,map__30779):map__30779);
var opts = map__30779__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__30779__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__25333__auto___30879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto___30879,ch_ctrl,vec__30778,map__30779,map__30779__$1,opts,trace_evs_QMARK_){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto___30879,ch_ctrl,vec__30778,map__30779,map__30779__$1,opts,trace_evs_QMARK_){
return (function (state_30838){
var state_val_30839 = (state_30838[(1)]);
if((state_val_30839 === (7))){
var inst_30791 = (state_30838[(2)]);
var inst_30792 = cljs.core.nth.call(null,inst_30791,(0),null);
var inst_30793 = cljs.core.nth.call(null,inst_30791,(1),null);
var inst_30794 = taoensso.encore.kw_identical_QMARK_.call(null,inst_30793,ch_ctrl);
var state_30838__$1 = (function (){var statearr_30840 = state_30838;
(statearr_30840[(7)] = inst_30792);

return statearr_30840;
})();
if(cljs.core.truth_(inst_30794)){
var statearr_30841_30880 = state_30838__$1;
(statearr_30841_30880[(1)] = (8));

} else {
var statearr_30842_30881 = state_30838__$1;
(statearr_30842_30881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (20))){
var inst_30804 = (state_30838[(8)]);
var inst_30818 = taoensso.encore.errorf.call(null,"Bad event: %s",inst_30804);
var state_30838__$1 = state_30838;
var statearr_30843_30882 = state_30838__$1;
(statearr_30843_30882[(2)] = inst_30818);

(statearr_30843_30882[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (1))){
var state_30838__$1 = state_30838;
var statearr_30844_30883 = state_30838__$1;
(statearr_30844_30883[(2)] = null);

(statearr_30844_30883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (24))){
var state_30838__$1 = state_30838;
var statearr_30845_30884 = state_30838__$1;
(statearr_30845_30884[(2)] = null);

(statearr_30845_30884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (4))){
var inst_30828 = (state_30838[(2)]);
var inst_30829 = taoensso.encore.kw_identical_QMARK_.call(null,new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571),inst_30828);
var state_30838__$1 = state_30838;
if(cljs.core.truth_(inst_30829)){
var statearr_30846_30885 = state_30838__$1;
(statearr_30846_30885[(1)] = (23));

} else {
var statearr_30847_30886 = state_30838__$1;
(statearr_30847_30886[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (15))){
var inst_30804 = (state_30838[(8)]);
var inst_30805 = (state_30838[(2)]);
var inst_30806 = taoensso.encore.errorf.call(null,"Chsk router handling error (%s): %s",inst_30804,inst_30805);
var state_30838__$1 = state_30838;
var statearr_30848_30887 = state_30838__$1;
(statearr_30848_30887[(2)] = inst_30806);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30838__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (21))){
var inst_30803 = (state_30838[(9)]);
var inst_30820 = event_msg_handler.call(null,inst_30803);
var state_30838__$1 = state_30838;
var statearr_30849_30888 = state_30838__$1;
(statearr_30849_30888[(2)] = inst_30820);

(statearr_30849_30888[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (13))){
var inst_30803 = (state_30838[(9)]);
var inst_30803__$1 = (state_30838[(2)]);
var inst_30804 = cljs.core.get.call(null,inst_30803__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_30838__$1 = (function (){var statearr_30850 = state_30838;
(statearr_30850[(9)] = inst_30803__$1);

(statearr_30850[(8)] = inst_30804);

return statearr_30850;
})();
var statearr_30851_30889 = state_30838__$1;
(statearr_30851_30889[(2)] = null);

(statearr_30851_30889[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (22))){
var inst_30822 = (state_30838[(2)]);
var state_30838__$1 = (function (){var statearr_30852 = state_30838;
(statearr_30852[(10)] = inst_30822);

return statearr_30852;
})();
var statearr_30853_30890 = state_30838__$1;
(statearr_30853_30890[(2)] = null);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30838__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (6))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30838,(5),Error,null,(4));
var inst_30787 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30788 = [ch_recv,ch_ctrl];
var inst_30789 = (new cljs.core.PersistentVector(null,2,(5),inst_30787,inst_30788,null));
var state_30838__$1 = state_30838;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30838__$1,(7),inst_30789);
} else {
if((state_val_30839 === (25))){
var inst_30834 = (state_30838[(2)]);
var state_30838__$1 = state_30838;
var statearr_30854_30891 = state_30838__$1;
(statearr_30854_30891[(2)] = inst_30834);

(statearr_30854_30891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (17))){
var inst_30804 = (state_30838[(8)]);
var inst_30811 = taoensso.encore.tracef.call(null,"Pre-handler event: %s",inst_30804);
var state_30838__$1 = state_30838;
var statearr_30855_30892 = state_30838__$1;
(statearr_30855_30892[(2)] = inst_30811);

(statearr_30855_30892[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (3))){
var inst_30836 = (state_30838[(2)]);
var state_30838__$1 = state_30838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30838__$1,inst_30836);
} else {
if((state_val_30839 === (12))){
var inst_30792 = (state_30838[(7)]);
var state_30838__$1 = state_30838;
var statearr_30856_30893 = state_30838__$1;
(statearr_30856_30893[(2)] = inst_30792);

(statearr_30856_30893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (2))){
var state_30838__$1 = state_30838;
var statearr_30857_30894 = state_30838__$1;
(statearr_30857_30894[(2)] = null);

(statearr_30857_30894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (23))){
var state_30838__$1 = state_30838;
var statearr_30858_30895 = state_30838__$1;
(statearr_30858_30895[(2)] = null);

(statearr_30858_30895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (19))){
var inst_30803 = (state_30838[(9)]);
var inst_30814 = (state_30838[(2)]);
var inst_30815 = taoensso.sente.event_msg_QMARK_.call(null,inst_30803);
var inst_30816 = cljs.core.not.call(null,inst_30815);
var state_30838__$1 = (function (){var statearr_30859 = state_30838;
(statearr_30859[(11)] = inst_30814);

return statearr_30859;
})();
if(inst_30816){
var statearr_30860_30896 = state_30838__$1;
(statearr_30860_30896[(1)] = (20));

} else {
var statearr_30861_30897 = state_30838__$1;
(statearr_30861_30897[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (11))){
var inst_30792 = (state_30838[(7)]);
var inst_30800 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30792);
var state_30838__$1 = state_30838;
var statearr_30862_30898 = state_30838__$1;
(statearr_30862_30898[(2)] = inst_30800);

(statearr_30862_30898[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (9))){
var inst_30792 = (state_30838[(7)]);
var inst_30798 = cljs.core.seq_QMARK_.call(null,inst_30792);
var state_30838__$1 = state_30838;
if(inst_30798){
var statearr_30863_30899 = state_30838__$1;
(statearr_30863_30899[(1)] = (11));

} else {
var statearr_30864_30900 = state_30838__$1;
(statearr_30864_30900[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (5))){
var inst_30781 = (state_30838[(2)]);
var inst_30782 = taoensso.encore.errorf.call(null,"Chsk router channel error (%s)!",inst_30781);
var state_30838__$1 = state_30838;
var statearr_30865_30901 = state_30838__$1;
(statearr_30865_30901[(2)] = inst_30782);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30838__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (14))){
var inst_30824 = (state_30838[(2)]);
var state_30838__$1 = state_30838;
var statearr_30866_30902 = state_30838__$1;
(statearr_30866_30902[(2)] = inst_30824);

(statearr_30866_30902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (16))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30838,(15),Error,null,(14));
var state_30838__$1 = state_30838;
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_30867_30903 = state_30838__$1;
(statearr_30867_30903[(1)] = (17));

} else {
var statearr_30868_30904 = state_30838__$1;
(statearr_30868_30904[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (10))){
var inst_30826 = (state_30838[(2)]);
var state_30838__$1 = state_30838;
var statearr_30869_30905 = state_30838__$1;
(statearr_30869_30905[(2)] = inst_30826);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30838__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (18))){
var state_30838__$1 = state_30838;
var statearr_30870_30906 = state_30838__$1;
(statearr_30870_30906[(2)] = null);

(statearr_30870_30906[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (8))){
var state_30838__$1 = state_30838;
var statearr_30871_30907 = state_30838__$1;
(statearr_30871_30907[(2)] = new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571));

(statearr_30871_30907[(1)] = (10));


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
});})(c__25333__auto___30879,ch_ctrl,vec__30778,map__30779,map__30779__$1,opts,trace_evs_QMARK_))
;
return ((function (switch__25271__auto__,c__25333__auto___30879,ch_ctrl,vec__30778,map__30779,map__30779__$1,opts,trace_evs_QMARK_){
return (function() {
var taoensso$sente$state_machine__25272__auto__ = null;
var taoensso$sente$state_machine__25272__auto____0 = (function (){
var statearr_30875 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30875[(0)] = taoensso$sente$state_machine__25272__auto__);

(statearr_30875[(1)] = (1));

return statearr_30875;
});
var taoensso$sente$state_machine__25272__auto____1 = (function (state_30838){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_30838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e30876){if((e30876 instanceof Object)){
var ex__25275__auto__ = e30876;
var statearr_30877_30908 = state_30838;
(statearr_30877_30908[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30909 = state_30838;
state_30838 = G__30909;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
taoensso$sente$state_machine__25272__auto__ = function(state_30838){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__25272__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__25272__auto____1.call(this,state_30838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__25272__auto____0;
taoensso$sente$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__25272__auto____1;
return taoensso$sente$state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto___30879,ch_ctrl,vec__30778,map__30779,map__30779__$1,opts,trace_evs_QMARK_))
})();
var state__25335__auto__ = (function (){var statearr_30878 = f__25334__auto__.call(null);
(statearr_30878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___30879);

return statearr_30878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto___30879,ch_ctrl,vec__30778,map__30779,map__30779__$1,opts,trace_evs_QMARK_))
);


return ((function (ch_ctrl,vec__30778,map__30779,map__30779__$1,opts,trace_evs_QMARK_){
return (function taoensso$sente$stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(ch_ctrl,vec__30778,map__30779,map__30779__$1,opts,trace_evs_QMARK_))
});

taoensso.sente.start_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_chsk_router_BANG_.cljs$lang$applyTo = (function (seq30774){
var G__30775 = cljs.core.first.call(null,seq30774);
var seq30774__$1 = cljs.core.next.call(null,seq30774);
var G__30776 = cljs.core.first.call(null,seq30774__$1);
var seq30774__$2 = cljs.core.next.call(null,seq30774__$1);
return taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30775,G__30776,seq30774__$2);
});
/**
 * DEPRECATED: Please use `start-chsk-router!` instead.
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});

//# sourceMappingURL=sente.js.map