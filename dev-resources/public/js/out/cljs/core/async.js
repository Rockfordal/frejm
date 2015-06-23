// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t30915 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30915 = (function (fn_handler,f,meta30916){
this.fn_handler = fn_handler;
this.f = f;
this.meta30916 = meta30916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30917,meta30916__$1){
var self__ = this;
var _30917__$1 = this;
return (new cljs.core.async.t30915(self__.fn_handler,self__.f,meta30916__$1));
});

cljs.core.async.t30915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30917){
var self__ = this;
var _30917__$1 = this;
return self__.meta30916;
});

cljs.core.async.t30915.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30915.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t30915.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t30915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta30916","meta30916",-1889973333,null)], null);
});

cljs.core.async.t30915.cljs$lang$type = true;

cljs.core.async.t30915.cljs$lang$ctorStr = "cljs.core.async/t30915";

cljs.core.async.t30915.cljs$lang$ctorPrWriter = (function (this__23815__auto__,writer__23816__auto__,opt__23817__auto__){
return cljs.core._write.call(null,writer__23816__auto__,"cljs.core.async/t30915");
});

cljs.core.async.__GT_t30915 = (function cljs$core$async$fn_handler_$___GT_t30915(fn_handler__$1,f__$1,meta30916){
return (new cljs.core.async.t30915(fn_handler__$1,f__$1,meta30916));
});

}

return (new cljs.core.async.t30915(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__30919 = buff;
if(G__30919){
var bit__23910__auto__ = null;
if(cljs.core.truth_((function (){var or__23236__auto__ = bit__23910__auto__;
if(cljs.core.truth_(or__23236__auto__)){
return or__23236__auto__;
} else {
return G__30919.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__30919.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30919);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30919);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__30921 = arguments.length;
switch (G__30921) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__30924 = arguments.length;
switch (G__30924) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30926 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30926);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30926,ret){
return (function (){
return fn1.call(null,val_30926);
});})(val_30926,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__30928 = arguments.length;
switch (G__30928) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__24121__auto___30930 = n;
var x_30931 = (0);
while(true){
if((x_30931 < n__24121__auto___30930)){
(a[x_30931] = (0));

var G__30932 = (x_30931 + (1));
x_30931 = G__30932;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30933 = (i + (1));
i = G__30933;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t30937 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30937 = (function (alt_flag,flag,meta30938){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30938 = meta30938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30939,meta30938__$1){
var self__ = this;
var _30939__$1 = this;
return (new cljs.core.async.t30937(self__.alt_flag,self__.flag,meta30938__$1));
});})(flag))
;

cljs.core.async.t30937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30939){
var self__ = this;
var _30939__$1 = this;
return self__.meta30938;
});})(flag))
;

cljs.core.async.t30937.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t30937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t30937.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30938","meta30938",-1804467141,null)], null);
});})(flag))
;

cljs.core.async.t30937.cljs$lang$type = true;

cljs.core.async.t30937.cljs$lang$ctorStr = "cljs.core.async/t30937";

cljs.core.async.t30937.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__23815__auto__,writer__23816__auto__,opt__23817__auto__){
return cljs.core._write.call(null,writer__23816__auto__,"cljs.core.async/t30937");
});})(flag))
;

cljs.core.async.__GT_t30937 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t30937(alt_flag__$1,flag__$1,meta30938){
return (new cljs.core.async.t30937(alt_flag__$1,flag__$1,meta30938));
});})(flag))
;

}

return (new cljs.core.async.t30937(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t30943 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30943 = (function (alt_handler,flag,cb,meta30944){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30944 = meta30944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30945,meta30944__$1){
var self__ = this;
var _30945__$1 = this;
return (new cljs.core.async.t30943(self__.alt_handler,self__.flag,self__.cb,meta30944__$1));
});

cljs.core.async.t30943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30945){
var self__ = this;
var _30945__$1 = this;
return self__.meta30944;
});

cljs.core.async.t30943.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30943.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t30943.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t30943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30944","meta30944",1617446824,null)], null);
});

cljs.core.async.t30943.cljs$lang$type = true;

cljs.core.async.t30943.cljs$lang$ctorStr = "cljs.core.async/t30943";

cljs.core.async.t30943.cljs$lang$ctorPrWriter = (function (this__23815__auto__,writer__23816__auto__,opt__23817__auto__){
return cljs.core._write.call(null,writer__23816__auto__,"cljs.core.async/t30943");
});

cljs.core.async.__GT_t30943 = (function cljs$core$async$alt_handler_$___GT_t30943(alt_handler__$1,flag__$1,cb__$1,meta30944){
return (new cljs.core.async.t30943(alt_handler__$1,flag__$1,cb__$1,meta30944));
});

}

return (new cljs.core.async.t30943(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30946_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30946_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30947_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30947_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__23236__auto__ = wport;
if(cljs.core.truth_(or__23236__auto__)){
return or__23236__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30948 = (i + (1));
i = G__30948;
continue;
}
} else {
return null;
}
break;
}
})();
var or__23236__auto__ = ret;
if(cljs.core.truth_(or__23236__auto__)){
return or__23236__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__23224__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__23224__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__23224__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__24276__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24276__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30951){
var map__30952 = p__30951;
var map__30952__$1 = ((cljs.core.seq_QMARK_.call(null,map__30952))?cljs.core.apply.call(null,cljs.core.hash_map,map__30952):map__30952);
var opts = map__30952__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30949){
var G__30950 = cljs.core.first.call(null,seq30949);
var seq30949__$1 = cljs.core.next.call(null,seq30949);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30950,seq30949__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__30954 = arguments.length;
switch (G__30954) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25333__auto___31003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto___31003){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto___31003){
return (function (state_30978){
var state_val_30979 = (state_30978[(1)]);
if((state_val_30979 === (7))){
var inst_30974 = (state_30978[(2)]);
var state_30978__$1 = state_30978;
var statearr_30980_31004 = state_30978__$1;
(statearr_30980_31004[(2)] = inst_30974);

(statearr_30980_31004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (1))){
var state_30978__$1 = state_30978;
var statearr_30981_31005 = state_30978__$1;
(statearr_30981_31005[(2)] = null);

(statearr_30981_31005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (4))){
var inst_30957 = (state_30978[(7)]);
var inst_30957__$1 = (state_30978[(2)]);
var inst_30958 = (inst_30957__$1 == null);
var state_30978__$1 = (function (){var statearr_30982 = state_30978;
(statearr_30982[(7)] = inst_30957__$1);

return statearr_30982;
})();
if(cljs.core.truth_(inst_30958)){
var statearr_30983_31006 = state_30978__$1;
(statearr_30983_31006[(1)] = (5));

} else {
var statearr_30984_31007 = state_30978__$1;
(statearr_30984_31007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (13))){
var state_30978__$1 = state_30978;
var statearr_30985_31008 = state_30978__$1;
(statearr_30985_31008[(2)] = null);

(statearr_30985_31008[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (6))){
var inst_30957 = (state_30978[(7)]);
var state_30978__$1 = state_30978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30978__$1,(11),to,inst_30957);
} else {
if((state_val_30979 === (3))){
var inst_30976 = (state_30978[(2)]);
var state_30978__$1 = state_30978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30978__$1,inst_30976);
} else {
if((state_val_30979 === (12))){
var state_30978__$1 = state_30978;
var statearr_30986_31009 = state_30978__$1;
(statearr_30986_31009[(2)] = null);

(statearr_30986_31009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (2))){
var state_30978__$1 = state_30978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30978__$1,(4),from);
} else {
if((state_val_30979 === (11))){
var inst_30967 = (state_30978[(2)]);
var state_30978__$1 = state_30978;
if(cljs.core.truth_(inst_30967)){
var statearr_30987_31010 = state_30978__$1;
(statearr_30987_31010[(1)] = (12));

} else {
var statearr_30988_31011 = state_30978__$1;
(statearr_30988_31011[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (9))){
var state_30978__$1 = state_30978;
var statearr_30989_31012 = state_30978__$1;
(statearr_30989_31012[(2)] = null);

(statearr_30989_31012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (5))){
var state_30978__$1 = state_30978;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30990_31013 = state_30978__$1;
(statearr_30990_31013[(1)] = (8));

} else {
var statearr_30991_31014 = state_30978__$1;
(statearr_30991_31014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (14))){
var inst_30972 = (state_30978[(2)]);
var state_30978__$1 = state_30978;
var statearr_30992_31015 = state_30978__$1;
(statearr_30992_31015[(2)] = inst_30972);

(statearr_30992_31015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (10))){
var inst_30964 = (state_30978[(2)]);
var state_30978__$1 = state_30978;
var statearr_30993_31016 = state_30978__$1;
(statearr_30993_31016[(2)] = inst_30964);

(statearr_30993_31016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (8))){
var inst_30961 = cljs.core.async.close_BANG_.call(null,to);
var state_30978__$1 = state_30978;
var statearr_30994_31017 = state_30978__$1;
(statearr_30994_31017[(2)] = inst_30961);

(statearr_30994_31017[(1)] = (10));


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
});})(c__25333__auto___31003))
;
return ((function (switch__25271__auto__,c__25333__auto___31003){
return (function() {
var cljs$core$async$state_machine__25272__auto__ = null;
var cljs$core$async$state_machine__25272__auto____0 = (function (){
var statearr_30998 = [null,null,null,null,null,null,null,null];
(statearr_30998[(0)] = cljs$core$async$state_machine__25272__auto__);

(statearr_30998[(1)] = (1));

return statearr_30998;
});
var cljs$core$async$state_machine__25272__auto____1 = (function (state_30978){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_30978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e30999){if((e30999 instanceof Object)){
var ex__25275__auto__ = e30999;
var statearr_31000_31018 = state_30978;
(statearr_31000_31018[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31019 = state_30978;
state_30978 = G__31019;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
cljs$core$async$state_machine__25272__auto__ = function(state_30978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25272__auto____1.call(this,state_30978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25272__auto____0;
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25272__auto____1;
return cljs$core$async$state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto___31003))
})();
var state__25335__auto__ = (function (){var statearr_31001 = f__25334__auto__.call(null);
(statearr_31001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___31003);

return statearr_31001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto___31003))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31203){
var vec__31204 = p__31203;
var v = cljs.core.nth.call(null,vec__31204,(0),null);
var p = cljs.core.nth.call(null,vec__31204,(1),null);
var job = vec__31204;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25333__auto___31386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto___31386,res,vec__31204,v,p,job,jobs,results){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto___31386,res,vec__31204,v,p,job,jobs,results){
return (function (state_31209){
var state_val_31210 = (state_31209[(1)]);
if((state_val_31210 === (1))){
var state_31209__$1 = state_31209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31209__$1,(2),res,v);
} else {
if((state_val_31210 === (2))){
var inst_31206 = (state_31209[(2)]);
var inst_31207 = cljs.core.async.close_BANG_.call(null,res);
var state_31209__$1 = (function (){var statearr_31211 = state_31209;
(statearr_31211[(7)] = inst_31206);

return statearr_31211;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31209__$1,inst_31207);
} else {
return null;
}
}
});})(c__25333__auto___31386,res,vec__31204,v,p,job,jobs,results))
;
return ((function (switch__25271__auto__,c__25333__auto___31386,res,vec__31204,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____0 = (function (){
var statearr_31215 = [null,null,null,null,null,null,null,null];
(statearr_31215[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__);

(statearr_31215[(1)] = (1));

return statearr_31215;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____1 = (function (state_31209){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_31209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e31216){if((e31216 instanceof Object)){
var ex__25275__auto__ = e31216;
var statearr_31217_31387 = state_31209;
(statearr_31217_31387[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31388 = state_31209;
state_31209 = G__31388;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__ = function(state_31209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____1.call(this,state_31209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto___31386,res,vec__31204,v,p,job,jobs,results))
})();
var state__25335__auto__ = (function (){var statearr_31218 = f__25334__auto__.call(null);
(statearr_31218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___31386);

return statearr_31218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto___31386,res,vec__31204,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31219){
var vec__31220 = p__31219;
var v = cljs.core.nth.call(null,vec__31220,(0),null);
var p = cljs.core.nth.call(null,vec__31220,(1),null);
var job = vec__31220;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__24121__auto___31389 = n;
var __31390 = (0);
while(true){
if((__31390 < n__24121__auto___31389)){
var G__31221_31391 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31221_31391) {
case "compute":
var c__25333__auto___31393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31390,c__25333__auto___31393,G__31221_31391,n__24121__auto___31389,jobs,results,process,async){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (__31390,c__25333__auto___31393,G__31221_31391,n__24121__auto___31389,jobs,results,process,async){
return (function (state_31234){
var state_val_31235 = (state_31234[(1)]);
if((state_val_31235 === (1))){
var state_31234__$1 = state_31234;
var statearr_31236_31394 = state_31234__$1;
(statearr_31236_31394[(2)] = null);

(statearr_31236_31394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (2))){
var state_31234__$1 = state_31234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31234__$1,(4),jobs);
} else {
if((state_val_31235 === (3))){
var inst_31232 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31234__$1,inst_31232);
} else {
if((state_val_31235 === (4))){
var inst_31224 = (state_31234[(2)]);
var inst_31225 = process.call(null,inst_31224);
var state_31234__$1 = state_31234;
if(cljs.core.truth_(inst_31225)){
var statearr_31237_31395 = state_31234__$1;
(statearr_31237_31395[(1)] = (5));

} else {
var statearr_31238_31396 = state_31234__$1;
(statearr_31238_31396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (5))){
var state_31234__$1 = state_31234;
var statearr_31239_31397 = state_31234__$1;
(statearr_31239_31397[(2)] = null);

(statearr_31239_31397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (6))){
var state_31234__$1 = state_31234;
var statearr_31240_31398 = state_31234__$1;
(statearr_31240_31398[(2)] = null);

(statearr_31240_31398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (7))){
var inst_31230 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
var statearr_31241_31399 = state_31234__$1;
(statearr_31241_31399[(2)] = inst_31230);

(statearr_31241_31399[(1)] = (3));


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
});})(__31390,c__25333__auto___31393,G__31221_31391,n__24121__auto___31389,jobs,results,process,async))
;
return ((function (__31390,switch__25271__auto__,c__25333__auto___31393,G__31221_31391,n__24121__auto___31389,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____0 = (function (){
var statearr_31245 = [null,null,null,null,null,null,null];
(statearr_31245[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__);

(statearr_31245[(1)] = (1));

return statearr_31245;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____1 = (function (state_31234){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_31234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e31246){if((e31246 instanceof Object)){
var ex__25275__auto__ = e31246;
var statearr_31247_31400 = state_31234;
(statearr_31247_31400[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31401 = state_31234;
state_31234 = G__31401;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__ = function(state_31234){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____1.call(this,state_31234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__;
})()
;})(__31390,switch__25271__auto__,c__25333__auto___31393,G__31221_31391,n__24121__auto___31389,jobs,results,process,async))
})();
var state__25335__auto__ = (function (){var statearr_31248 = f__25334__auto__.call(null);
(statearr_31248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___31393);

return statearr_31248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(__31390,c__25333__auto___31393,G__31221_31391,n__24121__auto___31389,jobs,results,process,async))
);


break;
case "async":
var c__25333__auto___31402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31390,c__25333__auto___31402,G__31221_31391,n__24121__auto___31389,jobs,results,process,async){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (__31390,c__25333__auto___31402,G__31221_31391,n__24121__auto___31389,jobs,results,process,async){
return (function (state_31261){
var state_val_31262 = (state_31261[(1)]);
if((state_val_31262 === (1))){
var state_31261__$1 = state_31261;
var statearr_31263_31403 = state_31261__$1;
(statearr_31263_31403[(2)] = null);

(statearr_31263_31403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (2))){
var state_31261__$1 = state_31261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31261__$1,(4),jobs);
} else {
if((state_val_31262 === (3))){
var inst_31259 = (state_31261[(2)]);
var state_31261__$1 = state_31261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31261__$1,inst_31259);
} else {
if((state_val_31262 === (4))){
var inst_31251 = (state_31261[(2)]);
var inst_31252 = async.call(null,inst_31251);
var state_31261__$1 = state_31261;
if(cljs.core.truth_(inst_31252)){
var statearr_31264_31404 = state_31261__$1;
(statearr_31264_31404[(1)] = (5));

} else {
var statearr_31265_31405 = state_31261__$1;
(statearr_31265_31405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (5))){
var state_31261__$1 = state_31261;
var statearr_31266_31406 = state_31261__$1;
(statearr_31266_31406[(2)] = null);

(statearr_31266_31406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (6))){
var state_31261__$1 = state_31261;
var statearr_31267_31407 = state_31261__$1;
(statearr_31267_31407[(2)] = null);

(statearr_31267_31407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (7))){
var inst_31257 = (state_31261[(2)]);
var state_31261__$1 = state_31261;
var statearr_31268_31408 = state_31261__$1;
(statearr_31268_31408[(2)] = inst_31257);

(statearr_31268_31408[(1)] = (3));


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
});})(__31390,c__25333__auto___31402,G__31221_31391,n__24121__auto___31389,jobs,results,process,async))
;
return ((function (__31390,switch__25271__auto__,c__25333__auto___31402,G__31221_31391,n__24121__auto___31389,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____0 = (function (){
var statearr_31272 = [null,null,null,null,null,null,null];
(statearr_31272[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__);

(statearr_31272[(1)] = (1));

return statearr_31272;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____1 = (function (state_31261){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_31261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e31273){if((e31273 instanceof Object)){
var ex__25275__auto__ = e31273;
var statearr_31274_31409 = state_31261;
(statearr_31274_31409[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31410 = state_31261;
state_31261 = G__31410;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__ = function(state_31261){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____1.call(this,state_31261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__;
})()
;})(__31390,switch__25271__auto__,c__25333__auto___31402,G__31221_31391,n__24121__auto___31389,jobs,results,process,async))
})();
var state__25335__auto__ = (function (){var statearr_31275 = f__25334__auto__.call(null);
(statearr_31275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___31402);

return statearr_31275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(__31390,c__25333__auto___31402,G__31221_31391,n__24121__auto___31389,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31411 = (__31390 + (1));
__31390 = G__31411;
continue;
} else {
}
break;
}

var c__25333__auto___31412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto___31412,jobs,results,process,async){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto___31412,jobs,results,process,async){
return (function (state_31297){
var state_val_31298 = (state_31297[(1)]);
if((state_val_31298 === (1))){
var state_31297__$1 = state_31297;
var statearr_31299_31413 = state_31297__$1;
(statearr_31299_31413[(2)] = null);

(statearr_31299_31413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31298 === (2))){
var state_31297__$1 = state_31297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31297__$1,(4),from);
} else {
if((state_val_31298 === (3))){
var inst_31295 = (state_31297[(2)]);
var state_31297__$1 = state_31297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31297__$1,inst_31295);
} else {
if((state_val_31298 === (4))){
var inst_31278 = (state_31297[(7)]);
var inst_31278__$1 = (state_31297[(2)]);
var inst_31279 = (inst_31278__$1 == null);
var state_31297__$1 = (function (){var statearr_31300 = state_31297;
(statearr_31300[(7)] = inst_31278__$1);

return statearr_31300;
})();
if(cljs.core.truth_(inst_31279)){
var statearr_31301_31414 = state_31297__$1;
(statearr_31301_31414[(1)] = (5));

} else {
var statearr_31302_31415 = state_31297__$1;
(statearr_31302_31415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31298 === (5))){
var inst_31281 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31297__$1 = state_31297;
var statearr_31303_31416 = state_31297__$1;
(statearr_31303_31416[(2)] = inst_31281);

(statearr_31303_31416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31298 === (6))){
var inst_31278 = (state_31297[(7)]);
var inst_31283 = (state_31297[(8)]);
var inst_31283__$1 = cljs.core.async.chan.call(null,(1));
var inst_31284 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31285 = [inst_31278,inst_31283__$1];
var inst_31286 = (new cljs.core.PersistentVector(null,2,(5),inst_31284,inst_31285,null));
var state_31297__$1 = (function (){var statearr_31304 = state_31297;
(statearr_31304[(8)] = inst_31283__$1);

return statearr_31304;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31297__$1,(8),jobs,inst_31286);
} else {
if((state_val_31298 === (7))){
var inst_31293 = (state_31297[(2)]);
var state_31297__$1 = state_31297;
var statearr_31305_31417 = state_31297__$1;
(statearr_31305_31417[(2)] = inst_31293);

(statearr_31305_31417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31298 === (8))){
var inst_31283 = (state_31297[(8)]);
var inst_31288 = (state_31297[(2)]);
var state_31297__$1 = (function (){var statearr_31306 = state_31297;
(statearr_31306[(9)] = inst_31288);

return statearr_31306;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31297__$1,(9),results,inst_31283);
} else {
if((state_val_31298 === (9))){
var inst_31290 = (state_31297[(2)]);
var state_31297__$1 = (function (){var statearr_31307 = state_31297;
(statearr_31307[(10)] = inst_31290);

return statearr_31307;
})();
var statearr_31308_31418 = state_31297__$1;
(statearr_31308_31418[(2)] = null);

(statearr_31308_31418[(1)] = (2));


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
});})(c__25333__auto___31412,jobs,results,process,async))
;
return ((function (switch__25271__auto__,c__25333__auto___31412,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____0 = (function (){
var statearr_31312 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31312[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__);

(statearr_31312[(1)] = (1));

return statearr_31312;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____1 = (function (state_31297){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_31297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e31313){if((e31313 instanceof Object)){
var ex__25275__auto__ = e31313;
var statearr_31314_31419 = state_31297;
(statearr_31314_31419[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31420 = state_31297;
state_31297 = G__31420;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__ = function(state_31297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____1.call(this,state_31297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto___31412,jobs,results,process,async))
})();
var state__25335__auto__ = (function (){var statearr_31315 = f__25334__auto__.call(null);
(statearr_31315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___31412);

return statearr_31315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto___31412,jobs,results,process,async))
);


var c__25333__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto__,jobs,results,process,async){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto__,jobs,results,process,async){
return (function (state_31353){
var state_val_31354 = (state_31353[(1)]);
if((state_val_31354 === (7))){
var inst_31349 = (state_31353[(2)]);
var state_31353__$1 = state_31353;
var statearr_31355_31421 = state_31353__$1;
(statearr_31355_31421[(2)] = inst_31349);

(statearr_31355_31421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (20))){
var state_31353__$1 = state_31353;
var statearr_31356_31422 = state_31353__$1;
(statearr_31356_31422[(2)] = null);

(statearr_31356_31422[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (1))){
var state_31353__$1 = state_31353;
var statearr_31357_31423 = state_31353__$1;
(statearr_31357_31423[(2)] = null);

(statearr_31357_31423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (4))){
var inst_31318 = (state_31353[(7)]);
var inst_31318__$1 = (state_31353[(2)]);
var inst_31319 = (inst_31318__$1 == null);
var state_31353__$1 = (function (){var statearr_31358 = state_31353;
(statearr_31358[(7)] = inst_31318__$1);

return statearr_31358;
})();
if(cljs.core.truth_(inst_31319)){
var statearr_31359_31424 = state_31353__$1;
(statearr_31359_31424[(1)] = (5));

} else {
var statearr_31360_31425 = state_31353__$1;
(statearr_31360_31425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (15))){
var inst_31331 = (state_31353[(8)]);
var state_31353__$1 = state_31353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31353__$1,(18),to,inst_31331);
} else {
if((state_val_31354 === (21))){
var inst_31344 = (state_31353[(2)]);
var state_31353__$1 = state_31353;
var statearr_31361_31426 = state_31353__$1;
(statearr_31361_31426[(2)] = inst_31344);

(statearr_31361_31426[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (13))){
var inst_31346 = (state_31353[(2)]);
var state_31353__$1 = (function (){var statearr_31362 = state_31353;
(statearr_31362[(9)] = inst_31346);

return statearr_31362;
})();
var statearr_31363_31427 = state_31353__$1;
(statearr_31363_31427[(2)] = null);

(statearr_31363_31427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (6))){
var inst_31318 = (state_31353[(7)]);
var state_31353__$1 = state_31353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31353__$1,(11),inst_31318);
} else {
if((state_val_31354 === (17))){
var inst_31339 = (state_31353[(2)]);
var state_31353__$1 = state_31353;
if(cljs.core.truth_(inst_31339)){
var statearr_31364_31428 = state_31353__$1;
(statearr_31364_31428[(1)] = (19));

} else {
var statearr_31365_31429 = state_31353__$1;
(statearr_31365_31429[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (3))){
var inst_31351 = (state_31353[(2)]);
var state_31353__$1 = state_31353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31353__$1,inst_31351);
} else {
if((state_val_31354 === (12))){
var inst_31328 = (state_31353[(10)]);
var state_31353__$1 = state_31353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31353__$1,(14),inst_31328);
} else {
if((state_val_31354 === (2))){
var state_31353__$1 = state_31353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31353__$1,(4),results);
} else {
if((state_val_31354 === (19))){
var state_31353__$1 = state_31353;
var statearr_31366_31430 = state_31353__$1;
(statearr_31366_31430[(2)] = null);

(statearr_31366_31430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (11))){
var inst_31328 = (state_31353[(2)]);
var state_31353__$1 = (function (){var statearr_31367 = state_31353;
(statearr_31367[(10)] = inst_31328);

return statearr_31367;
})();
var statearr_31368_31431 = state_31353__$1;
(statearr_31368_31431[(2)] = null);

(statearr_31368_31431[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (9))){
var state_31353__$1 = state_31353;
var statearr_31369_31432 = state_31353__$1;
(statearr_31369_31432[(2)] = null);

(statearr_31369_31432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (5))){
var state_31353__$1 = state_31353;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31370_31433 = state_31353__$1;
(statearr_31370_31433[(1)] = (8));

} else {
var statearr_31371_31434 = state_31353__$1;
(statearr_31371_31434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (14))){
var inst_31331 = (state_31353[(8)]);
var inst_31333 = (state_31353[(11)]);
var inst_31331__$1 = (state_31353[(2)]);
var inst_31332 = (inst_31331__$1 == null);
var inst_31333__$1 = cljs.core.not.call(null,inst_31332);
var state_31353__$1 = (function (){var statearr_31372 = state_31353;
(statearr_31372[(8)] = inst_31331__$1);

(statearr_31372[(11)] = inst_31333__$1);

return statearr_31372;
})();
if(inst_31333__$1){
var statearr_31373_31435 = state_31353__$1;
(statearr_31373_31435[(1)] = (15));

} else {
var statearr_31374_31436 = state_31353__$1;
(statearr_31374_31436[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (16))){
var inst_31333 = (state_31353[(11)]);
var state_31353__$1 = state_31353;
var statearr_31375_31437 = state_31353__$1;
(statearr_31375_31437[(2)] = inst_31333);

(statearr_31375_31437[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (10))){
var inst_31325 = (state_31353[(2)]);
var state_31353__$1 = state_31353;
var statearr_31376_31438 = state_31353__$1;
(statearr_31376_31438[(2)] = inst_31325);

(statearr_31376_31438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (18))){
var inst_31336 = (state_31353[(2)]);
var state_31353__$1 = state_31353;
var statearr_31377_31439 = state_31353__$1;
(statearr_31377_31439[(2)] = inst_31336);

(statearr_31377_31439[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (8))){
var inst_31322 = cljs.core.async.close_BANG_.call(null,to);
var state_31353__$1 = state_31353;
var statearr_31378_31440 = state_31353__$1;
(statearr_31378_31440[(2)] = inst_31322);

(statearr_31378_31440[(1)] = (10));


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
});})(c__25333__auto__,jobs,results,process,async))
;
return ((function (switch__25271__auto__,c__25333__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____0 = (function (){
var statearr_31382 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31382[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__);

(statearr_31382[(1)] = (1));

return statearr_31382;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____1 = (function (state_31353){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_31353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e31383){if((e31383 instanceof Object)){
var ex__25275__auto__ = e31383;
var statearr_31384_31441 = state_31353;
(statearr_31384_31441[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31442 = state_31353;
state_31353 = G__31442;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__ = function(state_31353){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____1.call(this,state_31353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25272__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto__,jobs,results,process,async))
})();
var state__25335__auto__ = (function (){var statearr_31385 = f__25334__auto__.call(null);
(statearr_31385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto__);

return statearr_31385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto__,jobs,results,process,async))
);

return c__25333__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__31444 = arguments.length;
switch (G__31444) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__31447 = arguments.length;
switch (G__31447) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__31450 = arguments.length;
switch (G__31450) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25333__auto___31502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto___31502,tc,fc){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto___31502,tc,fc){
return (function (state_31476){
var state_val_31477 = (state_31476[(1)]);
if((state_val_31477 === (7))){
var inst_31472 = (state_31476[(2)]);
var state_31476__$1 = state_31476;
var statearr_31478_31503 = state_31476__$1;
(statearr_31478_31503[(2)] = inst_31472);

(statearr_31478_31503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (1))){
var state_31476__$1 = state_31476;
var statearr_31479_31504 = state_31476__$1;
(statearr_31479_31504[(2)] = null);

(statearr_31479_31504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (4))){
var inst_31453 = (state_31476[(7)]);
var inst_31453__$1 = (state_31476[(2)]);
var inst_31454 = (inst_31453__$1 == null);
var state_31476__$1 = (function (){var statearr_31480 = state_31476;
(statearr_31480[(7)] = inst_31453__$1);

return statearr_31480;
})();
if(cljs.core.truth_(inst_31454)){
var statearr_31481_31505 = state_31476__$1;
(statearr_31481_31505[(1)] = (5));

} else {
var statearr_31482_31506 = state_31476__$1;
(statearr_31482_31506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (13))){
var state_31476__$1 = state_31476;
var statearr_31483_31507 = state_31476__$1;
(statearr_31483_31507[(2)] = null);

(statearr_31483_31507[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (6))){
var inst_31453 = (state_31476[(7)]);
var inst_31459 = p.call(null,inst_31453);
var state_31476__$1 = state_31476;
if(cljs.core.truth_(inst_31459)){
var statearr_31484_31508 = state_31476__$1;
(statearr_31484_31508[(1)] = (9));

} else {
var statearr_31485_31509 = state_31476__$1;
(statearr_31485_31509[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (3))){
var inst_31474 = (state_31476[(2)]);
var state_31476__$1 = state_31476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31476__$1,inst_31474);
} else {
if((state_val_31477 === (12))){
var state_31476__$1 = state_31476;
var statearr_31486_31510 = state_31476__$1;
(statearr_31486_31510[(2)] = null);

(statearr_31486_31510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (2))){
var state_31476__$1 = state_31476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31476__$1,(4),ch);
} else {
if((state_val_31477 === (11))){
var inst_31453 = (state_31476[(7)]);
var inst_31463 = (state_31476[(2)]);
var state_31476__$1 = state_31476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31476__$1,(8),inst_31463,inst_31453);
} else {
if((state_val_31477 === (9))){
var state_31476__$1 = state_31476;
var statearr_31487_31511 = state_31476__$1;
(statearr_31487_31511[(2)] = tc);

(statearr_31487_31511[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (5))){
var inst_31456 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31457 = cljs.core.async.close_BANG_.call(null,fc);
var state_31476__$1 = (function (){var statearr_31488 = state_31476;
(statearr_31488[(8)] = inst_31456);

return statearr_31488;
})();
var statearr_31489_31512 = state_31476__$1;
(statearr_31489_31512[(2)] = inst_31457);

(statearr_31489_31512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (14))){
var inst_31470 = (state_31476[(2)]);
var state_31476__$1 = state_31476;
var statearr_31490_31513 = state_31476__$1;
(statearr_31490_31513[(2)] = inst_31470);

(statearr_31490_31513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (10))){
var state_31476__$1 = state_31476;
var statearr_31491_31514 = state_31476__$1;
(statearr_31491_31514[(2)] = fc);

(statearr_31491_31514[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (8))){
var inst_31465 = (state_31476[(2)]);
var state_31476__$1 = state_31476;
if(cljs.core.truth_(inst_31465)){
var statearr_31492_31515 = state_31476__$1;
(statearr_31492_31515[(1)] = (12));

} else {
var statearr_31493_31516 = state_31476__$1;
(statearr_31493_31516[(1)] = (13));

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
});})(c__25333__auto___31502,tc,fc))
;
return ((function (switch__25271__auto__,c__25333__auto___31502,tc,fc){
return (function() {
var cljs$core$async$state_machine__25272__auto__ = null;
var cljs$core$async$state_machine__25272__auto____0 = (function (){
var statearr_31497 = [null,null,null,null,null,null,null,null,null];
(statearr_31497[(0)] = cljs$core$async$state_machine__25272__auto__);

(statearr_31497[(1)] = (1));

return statearr_31497;
});
var cljs$core$async$state_machine__25272__auto____1 = (function (state_31476){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_31476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e31498){if((e31498 instanceof Object)){
var ex__25275__auto__ = e31498;
var statearr_31499_31517 = state_31476;
(statearr_31499_31517[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31518 = state_31476;
state_31476 = G__31518;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
cljs$core$async$state_machine__25272__auto__ = function(state_31476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25272__auto____1.call(this,state_31476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25272__auto____0;
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25272__auto____1;
return cljs$core$async$state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto___31502,tc,fc))
})();
var state__25335__auto__ = (function (){var statearr_31500 = f__25334__auto__.call(null);
(statearr_31500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___31502);

return statearr_31500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto___31502,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25333__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto__){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto__){
return (function (state_31565){
var state_val_31566 = (state_31565[(1)]);
if((state_val_31566 === (1))){
var inst_31551 = init;
var state_31565__$1 = (function (){var statearr_31567 = state_31565;
(statearr_31567[(7)] = inst_31551);

return statearr_31567;
})();
var statearr_31568_31583 = state_31565__$1;
(statearr_31568_31583[(2)] = null);

(statearr_31568_31583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31566 === (2))){
var state_31565__$1 = state_31565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31565__$1,(4),ch);
} else {
if((state_val_31566 === (3))){
var inst_31563 = (state_31565[(2)]);
var state_31565__$1 = state_31565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31565__$1,inst_31563);
} else {
if((state_val_31566 === (4))){
var inst_31554 = (state_31565[(8)]);
var inst_31554__$1 = (state_31565[(2)]);
var inst_31555 = (inst_31554__$1 == null);
var state_31565__$1 = (function (){var statearr_31569 = state_31565;
(statearr_31569[(8)] = inst_31554__$1);

return statearr_31569;
})();
if(cljs.core.truth_(inst_31555)){
var statearr_31570_31584 = state_31565__$1;
(statearr_31570_31584[(1)] = (5));

} else {
var statearr_31571_31585 = state_31565__$1;
(statearr_31571_31585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31566 === (5))){
var inst_31551 = (state_31565[(7)]);
var state_31565__$1 = state_31565;
var statearr_31572_31586 = state_31565__$1;
(statearr_31572_31586[(2)] = inst_31551);

(statearr_31572_31586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31566 === (6))){
var inst_31551 = (state_31565[(7)]);
var inst_31554 = (state_31565[(8)]);
var inst_31558 = f.call(null,inst_31551,inst_31554);
var inst_31551__$1 = inst_31558;
var state_31565__$1 = (function (){var statearr_31573 = state_31565;
(statearr_31573[(7)] = inst_31551__$1);

return statearr_31573;
})();
var statearr_31574_31587 = state_31565__$1;
(statearr_31574_31587[(2)] = null);

(statearr_31574_31587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31566 === (7))){
var inst_31561 = (state_31565[(2)]);
var state_31565__$1 = state_31565;
var statearr_31575_31588 = state_31565__$1;
(statearr_31575_31588[(2)] = inst_31561);

(statearr_31575_31588[(1)] = (3));


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
});})(c__25333__auto__))
;
return ((function (switch__25271__auto__,c__25333__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25272__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25272__auto____0 = (function (){
var statearr_31579 = [null,null,null,null,null,null,null,null,null];
(statearr_31579[(0)] = cljs$core$async$reduce_$_state_machine__25272__auto__);

(statearr_31579[(1)] = (1));

return statearr_31579;
});
var cljs$core$async$reduce_$_state_machine__25272__auto____1 = (function (state_31565){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_31565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e31580){if((e31580 instanceof Object)){
var ex__25275__auto__ = e31580;
var statearr_31581_31589 = state_31565;
(statearr_31581_31589[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31590 = state_31565;
state_31565 = G__31590;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25272__auto__ = function(state_31565){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25272__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25272__auto____1.call(this,state_31565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25272__auto____0;
cljs$core$async$reduce_$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25272__auto____1;
return cljs$core$async$reduce_$_state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto__))
})();
var state__25335__auto__ = (function (){var statearr_31582 = f__25334__auto__.call(null);
(statearr_31582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto__);

return statearr_31582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto__))
);

return c__25333__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__31592 = arguments.length;
switch (G__31592) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25333__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto__){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto__){
return (function (state_31617){
var state_val_31618 = (state_31617[(1)]);
if((state_val_31618 === (7))){
var inst_31599 = (state_31617[(2)]);
var state_31617__$1 = state_31617;
var statearr_31619_31643 = state_31617__$1;
(statearr_31619_31643[(2)] = inst_31599);

(statearr_31619_31643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (1))){
var inst_31593 = cljs.core.seq.call(null,coll);
var inst_31594 = inst_31593;
var state_31617__$1 = (function (){var statearr_31620 = state_31617;
(statearr_31620[(7)] = inst_31594);

return statearr_31620;
})();
var statearr_31621_31644 = state_31617__$1;
(statearr_31621_31644[(2)] = null);

(statearr_31621_31644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (4))){
var inst_31594 = (state_31617[(7)]);
var inst_31597 = cljs.core.first.call(null,inst_31594);
var state_31617__$1 = state_31617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31617__$1,(7),ch,inst_31597);
} else {
if((state_val_31618 === (13))){
var inst_31611 = (state_31617[(2)]);
var state_31617__$1 = state_31617;
var statearr_31622_31645 = state_31617__$1;
(statearr_31622_31645[(2)] = inst_31611);

(statearr_31622_31645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (6))){
var inst_31602 = (state_31617[(2)]);
var state_31617__$1 = state_31617;
if(cljs.core.truth_(inst_31602)){
var statearr_31623_31646 = state_31617__$1;
(statearr_31623_31646[(1)] = (8));

} else {
var statearr_31624_31647 = state_31617__$1;
(statearr_31624_31647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (3))){
var inst_31615 = (state_31617[(2)]);
var state_31617__$1 = state_31617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31617__$1,inst_31615);
} else {
if((state_val_31618 === (12))){
var state_31617__$1 = state_31617;
var statearr_31625_31648 = state_31617__$1;
(statearr_31625_31648[(2)] = null);

(statearr_31625_31648[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (2))){
var inst_31594 = (state_31617[(7)]);
var state_31617__$1 = state_31617;
if(cljs.core.truth_(inst_31594)){
var statearr_31626_31649 = state_31617__$1;
(statearr_31626_31649[(1)] = (4));

} else {
var statearr_31627_31650 = state_31617__$1;
(statearr_31627_31650[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (11))){
var inst_31608 = cljs.core.async.close_BANG_.call(null,ch);
var state_31617__$1 = state_31617;
var statearr_31628_31651 = state_31617__$1;
(statearr_31628_31651[(2)] = inst_31608);

(statearr_31628_31651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (9))){
var state_31617__$1 = state_31617;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31629_31652 = state_31617__$1;
(statearr_31629_31652[(1)] = (11));

} else {
var statearr_31630_31653 = state_31617__$1;
(statearr_31630_31653[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (5))){
var inst_31594 = (state_31617[(7)]);
var state_31617__$1 = state_31617;
var statearr_31631_31654 = state_31617__$1;
(statearr_31631_31654[(2)] = inst_31594);

(statearr_31631_31654[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (10))){
var inst_31613 = (state_31617[(2)]);
var state_31617__$1 = state_31617;
var statearr_31632_31655 = state_31617__$1;
(statearr_31632_31655[(2)] = inst_31613);

(statearr_31632_31655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (8))){
var inst_31594 = (state_31617[(7)]);
var inst_31604 = cljs.core.next.call(null,inst_31594);
var inst_31594__$1 = inst_31604;
var state_31617__$1 = (function (){var statearr_31633 = state_31617;
(statearr_31633[(7)] = inst_31594__$1);

return statearr_31633;
})();
var statearr_31634_31656 = state_31617__$1;
(statearr_31634_31656[(2)] = null);

(statearr_31634_31656[(1)] = (2));


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
});})(c__25333__auto__))
;
return ((function (switch__25271__auto__,c__25333__auto__){
return (function() {
var cljs$core$async$state_machine__25272__auto__ = null;
var cljs$core$async$state_machine__25272__auto____0 = (function (){
var statearr_31638 = [null,null,null,null,null,null,null,null];
(statearr_31638[(0)] = cljs$core$async$state_machine__25272__auto__);

(statearr_31638[(1)] = (1));

return statearr_31638;
});
var cljs$core$async$state_machine__25272__auto____1 = (function (state_31617){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_31617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e31639){if((e31639 instanceof Object)){
var ex__25275__auto__ = e31639;
var statearr_31640_31657 = state_31617;
(statearr_31640_31657[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31658 = state_31617;
state_31617 = G__31658;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
cljs$core$async$state_machine__25272__auto__ = function(state_31617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25272__auto____1.call(this,state_31617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25272__auto____0;
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25272__auto____1;
return cljs$core$async$state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto__))
})();
var state__25335__auto__ = (function (){var statearr_31641 = f__25334__auto__.call(null);
(statearr_31641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto__);

return statearr_31641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto__))
);

return c__25333__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj31660 = {};
return obj31660;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__23224__auto__ = _;
if(and__23224__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__23224__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__23872__auto__ = (((_ == null))?null:_);
return (function (){var or__23236__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__23872__auto__)]);
if(or__23236__auto__){
return or__23236__auto__;
} else {
var or__23236__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__23236__auto____$1){
return or__23236__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj31662 = {};
return obj31662;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__23224__auto__ = m;
if(and__23224__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__23224__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__23872__auto__ = (((m == null))?null:m);
return (function (){var or__23236__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__23872__auto__)]);
if(or__23236__auto__){
return or__23236__auto__;
} else {
var or__23236__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__23236__auto____$1){
return or__23236__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__23224__auto__ = m;
if(and__23224__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__23224__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__23872__auto__ = (((m == null))?null:m);
return (function (){var or__23236__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__23872__auto__)]);
if(or__23236__auto__){
return or__23236__auto__;
} else {
var or__23236__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__23236__auto____$1){
return or__23236__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__23224__auto__ = m;
if(and__23224__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__23224__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__23872__auto__ = (((m == null))?null:m);
return (function (){var or__23236__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__23872__auto__)]);
if(or__23236__auto__){
return or__23236__auto__;
} else {
var or__23236__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__23236__auto____$1){
return or__23236__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t31884 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31884 = (function (mult,ch,cs,meta31885){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31885 = meta31885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31886,meta31885__$1){
var self__ = this;
var _31886__$1 = this;
return (new cljs.core.async.t31884(self__.mult,self__.ch,self__.cs,meta31885__$1));
});})(cs))
;

cljs.core.async.t31884.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31886){
var self__ = this;
var _31886__$1 = this;
return self__.meta31885;
});})(cs))
;

cljs.core.async.t31884.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31884.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t31884.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t31884.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t31884.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t31884.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t31884.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31885","meta31885",2051256559,null)], null);
});})(cs))
;

cljs.core.async.t31884.cljs$lang$type = true;

cljs.core.async.t31884.cljs$lang$ctorStr = "cljs.core.async/t31884";

cljs.core.async.t31884.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__23815__auto__,writer__23816__auto__,opt__23817__auto__){
return cljs.core._write.call(null,writer__23816__auto__,"cljs.core.async/t31884");
});})(cs))
;

cljs.core.async.__GT_t31884 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t31884(mult__$1,ch__$1,cs__$1,meta31885){
return (new cljs.core.async.t31884(mult__$1,ch__$1,cs__$1,meta31885));
});})(cs))
;

}

return (new cljs.core.async.t31884(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25333__auto___32105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto___32105,cs,m,dchan,dctr,done){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto___32105,cs,m,dchan,dctr,done){
return (function (state_32017){
var state_val_32018 = (state_32017[(1)]);
if((state_val_32018 === (7))){
var inst_32013 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32019_32106 = state_32017__$1;
(statearr_32019_32106[(2)] = inst_32013);

(statearr_32019_32106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (20))){
var inst_31918 = (state_32017[(7)]);
var inst_31928 = cljs.core.first.call(null,inst_31918);
var inst_31929 = cljs.core.nth.call(null,inst_31928,(0),null);
var inst_31930 = cljs.core.nth.call(null,inst_31928,(1),null);
var state_32017__$1 = (function (){var statearr_32020 = state_32017;
(statearr_32020[(8)] = inst_31929);

return statearr_32020;
})();
if(cljs.core.truth_(inst_31930)){
var statearr_32021_32107 = state_32017__$1;
(statearr_32021_32107[(1)] = (22));

} else {
var statearr_32022_32108 = state_32017__$1;
(statearr_32022_32108[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (27))){
var inst_31889 = (state_32017[(9)]);
var inst_31960 = (state_32017[(10)]);
var inst_31958 = (state_32017[(11)]);
var inst_31965 = (state_32017[(12)]);
var inst_31965__$1 = cljs.core._nth.call(null,inst_31958,inst_31960);
var inst_31966 = cljs.core.async.put_BANG_.call(null,inst_31965__$1,inst_31889,done);
var state_32017__$1 = (function (){var statearr_32023 = state_32017;
(statearr_32023[(12)] = inst_31965__$1);

return statearr_32023;
})();
if(cljs.core.truth_(inst_31966)){
var statearr_32024_32109 = state_32017__$1;
(statearr_32024_32109[(1)] = (30));

} else {
var statearr_32025_32110 = state_32017__$1;
(statearr_32025_32110[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (1))){
var state_32017__$1 = state_32017;
var statearr_32026_32111 = state_32017__$1;
(statearr_32026_32111[(2)] = null);

(statearr_32026_32111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (24))){
var inst_31918 = (state_32017[(7)]);
var inst_31935 = (state_32017[(2)]);
var inst_31936 = cljs.core.next.call(null,inst_31918);
var inst_31898 = inst_31936;
var inst_31899 = null;
var inst_31900 = (0);
var inst_31901 = (0);
var state_32017__$1 = (function (){var statearr_32027 = state_32017;
(statearr_32027[(13)] = inst_31900);

(statearr_32027[(14)] = inst_31898);

(statearr_32027[(15)] = inst_31899);

(statearr_32027[(16)] = inst_31935);

(statearr_32027[(17)] = inst_31901);

return statearr_32027;
})();
var statearr_32028_32112 = state_32017__$1;
(statearr_32028_32112[(2)] = null);

(statearr_32028_32112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (39))){
var state_32017__$1 = state_32017;
var statearr_32032_32113 = state_32017__$1;
(statearr_32032_32113[(2)] = null);

(statearr_32032_32113[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (4))){
var inst_31889 = (state_32017[(9)]);
var inst_31889__$1 = (state_32017[(2)]);
var inst_31890 = (inst_31889__$1 == null);
var state_32017__$1 = (function (){var statearr_32033 = state_32017;
(statearr_32033[(9)] = inst_31889__$1);

return statearr_32033;
})();
if(cljs.core.truth_(inst_31890)){
var statearr_32034_32114 = state_32017__$1;
(statearr_32034_32114[(1)] = (5));

} else {
var statearr_32035_32115 = state_32017__$1;
(statearr_32035_32115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (15))){
var inst_31900 = (state_32017[(13)]);
var inst_31898 = (state_32017[(14)]);
var inst_31899 = (state_32017[(15)]);
var inst_31901 = (state_32017[(17)]);
var inst_31914 = (state_32017[(2)]);
var inst_31915 = (inst_31901 + (1));
var tmp32029 = inst_31900;
var tmp32030 = inst_31898;
var tmp32031 = inst_31899;
var inst_31898__$1 = tmp32030;
var inst_31899__$1 = tmp32031;
var inst_31900__$1 = tmp32029;
var inst_31901__$1 = inst_31915;
var state_32017__$1 = (function (){var statearr_32036 = state_32017;
(statearr_32036[(13)] = inst_31900__$1);

(statearr_32036[(14)] = inst_31898__$1);

(statearr_32036[(15)] = inst_31899__$1);

(statearr_32036[(17)] = inst_31901__$1);

(statearr_32036[(18)] = inst_31914);

return statearr_32036;
})();
var statearr_32037_32116 = state_32017__$1;
(statearr_32037_32116[(2)] = null);

(statearr_32037_32116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (21))){
var inst_31939 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32041_32117 = state_32017__$1;
(statearr_32041_32117[(2)] = inst_31939);

(statearr_32041_32117[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (31))){
var inst_31965 = (state_32017[(12)]);
var inst_31969 = done.call(null,null);
var inst_31970 = cljs.core.async.untap_STAR_.call(null,m,inst_31965);
var state_32017__$1 = (function (){var statearr_32042 = state_32017;
(statearr_32042[(19)] = inst_31969);

return statearr_32042;
})();
var statearr_32043_32118 = state_32017__$1;
(statearr_32043_32118[(2)] = inst_31970);

(statearr_32043_32118[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (32))){
var inst_31960 = (state_32017[(10)]);
var inst_31958 = (state_32017[(11)]);
var inst_31957 = (state_32017[(20)]);
var inst_31959 = (state_32017[(21)]);
var inst_31972 = (state_32017[(2)]);
var inst_31973 = (inst_31960 + (1));
var tmp32038 = inst_31958;
var tmp32039 = inst_31957;
var tmp32040 = inst_31959;
var inst_31957__$1 = tmp32039;
var inst_31958__$1 = tmp32038;
var inst_31959__$1 = tmp32040;
var inst_31960__$1 = inst_31973;
var state_32017__$1 = (function (){var statearr_32044 = state_32017;
(statearr_32044[(10)] = inst_31960__$1);

(statearr_32044[(11)] = inst_31958__$1);

(statearr_32044[(20)] = inst_31957__$1);

(statearr_32044[(21)] = inst_31959__$1);

(statearr_32044[(22)] = inst_31972);

return statearr_32044;
})();
var statearr_32045_32119 = state_32017__$1;
(statearr_32045_32119[(2)] = null);

(statearr_32045_32119[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (40))){
var inst_31985 = (state_32017[(23)]);
var inst_31989 = done.call(null,null);
var inst_31990 = cljs.core.async.untap_STAR_.call(null,m,inst_31985);
var state_32017__$1 = (function (){var statearr_32046 = state_32017;
(statearr_32046[(24)] = inst_31989);

return statearr_32046;
})();
var statearr_32047_32120 = state_32017__$1;
(statearr_32047_32120[(2)] = inst_31990);

(statearr_32047_32120[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (33))){
var inst_31976 = (state_32017[(25)]);
var inst_31978 = cljs.core.chunked_seq_QMARK_.call(null,inst_31976);
var state_32017__$1 = state_32017;
if(inst_31978){
var statearr_32048_32121 = state_32017__$1;
(statearr_32048_32121[(1)] = (36));

} else {
var statearr_32049_32122 = state_32017__$1;
(statearr_32049_32122[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (13))){
var inst_31908 = (state_32017[(26)]);
var inst_31911 = cljs.core.async.close_BANG_.call(null,inst_31908);
var state_32017__$1 = state_32017;
var statearr_32050_32123 = state_32017__$1;
(statearr_32050_32123[(2)] = inst_31911);

(statearr_32050_32123[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (22))){
var inst_31929 = (state_32017[(8)]);
var inst_31932 = cljs.core.async.close_BANG_.call(null,inst_31929);
var state_32017__$1 = state_32017;
var statearr_32051_32124 = state_32017__$1;
(statearr_32051_32124[(2)] = inst_31932);

(statearr_32051_32124[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (36))){
var inst_31976 = (state_32017[(25)]);
var inst_31980 = cljs.core.chunk_first.call(null,inst_31976);
var inst_31981 = cljs.core.chunk_rest.call(null,inst_31976);
var inst_31982 = cljs.core.count.call(null,inst_31980);
var inst_31957 = inst_31981;
var inst_31958 = inst_31980;
var inst_31959 = inst_31982;
var inst_31960 = (0);
var state_32017__$1 = (function (){var statearr_32052 = state_32017;
(statearr_32052[(10)] = inst_31960);

(statearr_32052[(11)] = inst_31958);

(statearr_32052[(20)] = inst_31957);

(statearr_32052[(21)] = inst_31959);

return statearr_32052;
})();
var statearr_32053_32125 = state_32017__$1;
(statearr_32053_32125[(2)] = null);

(statearr_32053_32125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (41))){
var inst_31976 = (state_32017[(25)]);
var inst_31992 = (state_32017[(2)]);
var inst_31993 = cljs.core.next.call(null,inst_31976);
var inst_31957 = inst_31993;
var inst_31958 = null;
var inst_31959 = (0);
var inst_31960 = (0);
var state_32017__$1 = (function (){var statearr_32054 = state_32017;
(statearr_32054[(10)] = inst_31960);

(statearr_32054[(11)] = inst_31958);

(statearr_32054[(27)] = inst_31992);

(statearr_32054[(20)] = inst_31957);

(statearr_32054[(21)] = inst_31959);

return statearr_32054;
})();
var statearr_32055_32126 = state_32017__$1;
(statearr_32055_32126[(2)] = null);

(statearr_32055_32126[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (43))){
var state_32017__$1 = state_32017;
var statearr_32056_32127 = state_32017__$1;
(statearr_32056_32127[(2)] = null);

(statearr_32056_32127[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (29))){
var inst_32001 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32057_32128 = state_32017__$1;
(statearr_32057_32128[(2)] = inst_32001);

(statearr_32057_32128[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (44))){
var inst_32010 = (state_32017[(2)]);
var state_32017__$1 = (function (){var statearr_32058 = state_32017;
(statearr_32058[(28)] = inst_32010);

return statearr_32058;
})();
var statearr_32059_32129 = state_32017__$1;
(statearr_32059_32129[(2)] = null);

(statearr_32059_32129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (6))){
var inst_31949 = (state_32017[(29)]);
var inst_31948 = cljs.core.deref.call(null,cs);
var inst_31949__$1 = cljs.core.keys.call(null,inst_31948);
var inst_31950 = cljs.core.count.call(null,inst_31949__$1);
var inst_31951 = cljs.core.reset_BANG_.call(null,dctr,inst_31950);
var inst_31956 = cljs.core.seq.call(null,inst_31949__$1);
var inst_31957 = inst_31956;
var inst_31958 = null;
var inst_31959 = (0);
var inst_31960 = (0);
var state_32017__$1 = (function (){var statearr_32060 = state_32017;
(statearr_32060[(10)] = inst_31960);

(statearr_32060[(11)] = inst_31958);

(statearr_32060[(20)] = inst_31957);

(statearr_32060[(21)] = inst_31959);

(statearr_32060[(29)] = inst_31949__$1);

(statearr_32060[(30)] = inst_31951);

return statearr_32060;
})();
var statearr_32061_32130 = state_32017__$1;
(statearr_32061_32130[(2)] = null);

(statearr_32061_32130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (28))){
var inst_31976 = (state_32017[(25)]);
var inst_31957 = (state_32017[(20)]);
var inst_31976__$1 = cljs.core.seq.call(null,inst_31957);
var state_32017__$1 = (function (){var statearr_32062 = state_32017;
(statearr_32062[(25)] = inst_31976__$1);

return statearr_32062;
})();
if(inst_31976__$1){
var statearr_32063_32131 = state_32017__$1;
(statearr_32063_32131[(1)] = (33));

} else {
var statearr_32064_32132 = state_32017__$1;
(statearr_32064_32132[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (25))){
var inst_31960 = (state_32017[(10)]);
var inst_31959 = (state_32017[(21)]);
var inst_31962 = (inst_31960 < inst_31959);
var inst_31963 = inst_31962;
var state_32017__$1 = state_32017;
if(cljs.core.truth_(inst_31963)){
var statearr_32065_32133 = state_32017__$1;
(statearr_32065_32133[(1)] = (27));

} else {
var statearr_32066_32134 = state_32017__$1;
(statearr_32066_32134[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (34))){
var state_32017__$1 = state_32017;
var statearr_32067_32135 = state_32017__$1;
(statearr_32067_32135[(2)] = null);

(statearr_32067_32135[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (17))){
var state_32017__$1 = state_32017;
var statearr_32068_32136 = state_32017__$1;
(statearr_32068_32136[(2)] = null);

(statearr_32068_32136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (3))){
var inst_32015 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32017__$1,inst_32015);
} else {
if((state_val_32018 === (12))){
var inst_31944 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32069_32137 = state_32017__$1;
(statearr_32069_32137[(2)] = inst_31944);

(statearr_32069_32137[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (2))){
var state_32017__$1 = state_32017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32017__$1,(4),ch);
} else {
if((state_val_32018 === (23))){
var state_32017__$1 = state_32017;
var statearr_32070_32138 = state_32017__$1;
(statearr_32070_32138[(2)] = null);

(statearr_32070_32138[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (35))){
var inst_31999 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32071_32139 = state_32017__$1;
(statearr_32071_32139[(2)] = inst_31999);

(statearr_32071_32139[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (19))){
var inst_31918 = (state_32017[(7)]);
var inst_31922 = cljs.core.chunk_first.call(null,inst_31918);
var inst_31923 = cljs.core.chunk_rest.call(null,inst_31918);
var inst_31924 = cljs.core.count.call(null,inst_31922);
var inst_31898 = inst_31923;
var inst_31899 = inst_31922;
var inst_31900 = inst_31924;
var inst_31901 = (0);
var state_32017__$1 = (function (){var statearr_32072 = state_32017;
(statearr_32072[(13)] = inst_31900);

(statearr_32072[(14)] = inst_31898);

(statearr_32072[(15)] = inst_31899);

(statearr_32072[(17)] = inst_31901);

return statearr_32072;
})();
var statearr_32073_32140 = state_32017__$1;
(statearr_32073_32140[(2)] = null);

(statearr_32073_32140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (11))){
var inst_31898 = (state_32017[(14)]);
var inst_31918 = (state_32017[(7)]);
var inst_31918__$1 = cljs.core.seq.call(null,inst_31898);
var state_32017__$1 = (function (){var statearr_32074 = state_32017;
(statearr_32074[(7)] = inst_31918__$1);

return statearr_32074;
})();
if(inst_31918__$1){
var statearr_32075_32141 = state_32017__$1;
(statearr_32075_32141[(1)] = (16));

} else {
var statearr_32076_32142 = state_32017__$1;
(statearr_32076_32142[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (9))){
var inst_31946 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32077_32143 = state_32017__$1;
(statearr_32077_32143[(2)] = inst_31946);

(statearr_32077_32143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (5))){
var inst_31896 = cljs.core.deref.call(null,cs);
var inst_31897 = cljs.core.seq.call(null,inst_31896);
var inst_31898 = inst_31897;
var inst_31899 = null;
var inst_31900 = (0);
var inst_31901 = (0);
var state_32017__$1 = (function (){var statearr_32078 = state_32017;
(statearr_32078[(13)] = inst_31900);

(statearr_32078[(14)] = inst_31898);

(statearr_32078[(15)] = inst_31899);

(statearr_32078[(17)] = inst_31901);

return statearr_32078;
})();
var statearr_32079_32144 = state_32017__$1;
(statearr_32079_32144[(2)] = null);

(statearr_32079_32144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (14))){
var state_32017__$1 = state_32017;
var statearr_32080_32145 = state_32017__$1;
(statearr_32080_32145[(2)] = null);

(statearr_32080_32145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (45))){
var inst_32007 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32081_32146 = state_32017__$1;
(statearr_32081_32146[(2)] = inst_32007);

(statearr_32081_32146[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (26))){
var inst_31949 = (state_32017[(29)]);
var inst_32003 = (state_32017[(2)]);
var inst_32004 = cljs.core.seq.call(null,inst_31949);
var state_32017__$1 = (function (){var statearr_32082 = state_32017;
(statearr_32082[(31)] = inst_32003);

return statearr_32082;
})();
if(inst_32004){
var statearr_32083_32147 = state_32017__$1;
(statearr_32083_32147[(1)] = (42));

} else {
var statearr_32084_32148 = state_32017__$1;
(statearr_32084_32148[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (16))){
var inst_31918 = (state_32017[(7)]);
var inst_31920 = cljs.core.chunked_seq_QMARK_.call(null,inst_31918);
var state_32017__$1 = state_32017;
if(inst_31920){
var statearr_32085_32149 = state_32017__$1;
(statearr_32085_32149[(1)] = (19));

} else {
var statearr_32086_32150 = state_32017__$1;
(statearr_32086_32150[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (38))){
var inst_31996 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32087_32151 = state_32017__$1;
(statearr_32087_32151[(2)] = inst_31996);

(statearr_32087_32151[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (30))){
var state_32017__$1 = state_32017;
var statearr_32088_32152 = state_32017__$1;
(statearr_32088_32152[(2)] = null);

(statearr_32088_32152[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (10))){
var inst_31899 = (state_32017[(15)]);
var inst_31901 = (state_32017[(17)]);
var inst_31907 = cljs.core._nth.call(null,inst_31899,inst_31901);
var inst_31908 = cljs.core.nth.call(null,inst_31907,(0),null);
var inst_31909 = cljs.core.nth.call(null,inst_31907,(1),null);
var state_32017__$1 = (function (){var statearr_32089 = state_32017;
(statearr_32089[(26)] = inst_31908);

return statearr_32089;
})();
if(cljs.core.truth_(inst_31909)){
var statearr_32090_32153 = state_32017__$1;
(statearr_32090_32153[(1)] = (13));

} else {
var statearr_32091_32154 = state_32017__$1;
(statearr_32091_32154[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (18))){
var inst_31942 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32092_32155 = state_32017__$1;
(statearr_32092_32155[(2)] = inst_31942);

(statearr_32092_32155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (42))){
var state_32017__$1 = state_32017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32017__$1,(45),dchan);
} else {
if((state_val_32018 === (37))){
var inst_31889 = (state_32017[(9)]);
var inst_31976 = (state_32017[(25)]);
var inst_31985 = (state_32017[(23)]);
var inst_31985__$1 = cljs.core.first.call(null,inst_31976);
var inst_31986 = cljs.core.async.put_BANG_.call(null,inst_31985__$1,inst_31889,done);
var state_32017__$1 = (function (){var statearr_32093 = state_32017;
(statearr_32093[(23)] = inst_31985__$1);

return statearr_32093;
})();
if(cljs.core.truth_(inst_31986)){
var statearr_32094_32156 = state_32017__$1;
(statearr_32094_32156[(1)] = (39));

} else {
var statearr_32095_32157 = state_32017__$1;
(statearr_32095_32157[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (8))){
var inst_31900 = (state_32017[(13)]);
var inst_31901 = (state_32017[(17)]);
var inst_31903 = (inst_31901 < inst_31900);
var inst_31904 = inst_31903;
var state_32017__$1 = state_32017;
if(cljs.core.truth_(inst_31904)){
var statearr_32096_32158 = state_32017__$1;
(statearr_32096_32158[(1)] = (10));

} else {
var statearr_32097_32159 = state_32017__$1;
(statearr_32097_32159[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__25333__auto___32105,cs,m,dchan,dctr,done))
;
return ((function (switch__25271__auto__,c__25333__auto___32105,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25272__auto__ = null;
var cljs$core$async$mult_$_state_machine__25272__auto____0 = (function (){
var statearr_32101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32101[(0)] = cljs$core$async$mult_$_state_machine__25272__auto__);

(statearr_32101[(1)] = (1));

return statearr_32101;
});
var cljs$core$async$mult_$_state_machine__25272__auto____1 = (function (state_32017){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_32017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e32102){if((e32102 instanceof Object)){
var ex__25275__auto__ = e32102;
var statearr_32103_32160 = state_32017;
(statearr_32103_32160[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32161 = state_32017;
state_32017 = G__32161;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25272__auto__ = function(state_32017){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25272__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25272__auto____1.call(this,state_32017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25272__auto____0;
cljs$core$async$mult_$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25272__auto____1;
return cljs$core$async$mult_$_state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto___32105,cs,m,dchan,dctr,done))
})();
var state__25335__auto__ = (function (){var statearr_32104 = f__25334__auto__.call(null);
(statearr_32104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___32105);

return statearr_32104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto___32105,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__32163 = arguments.length;
switch (G__32163) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj32166 = {};
return obj32166;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__23224__auto__ = m;
if(and__23224__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__23224__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__23872__auto__ = (((m == null))?null:m);
return (function (){var or__23236__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__23872__auto__)]);
if(or__23236__auto__){
return or__23236__auto__;
} else {
var or__23236__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__23236__auto____$1){
return or__23236__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__23224__auto__ = m;
if(and__23224__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__23224__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__23872__auto__ = (((m == null))?null:m);
return (function (){var or__23236__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__23872__auto__)]);
if(or__23236__auto__){
return or__23236__auto__;
} else {
var or__23236__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__23236__auto____$1){
return or__23236__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__23224__auto__ = m;
if(and__23224__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__23224__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__23872__auto__ = (((m == null))?null:m);
return (function (){var or__23236__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__23872__auto__)]);
if(or__23236__auto__){
return or__23236__auto__;
} else {
var or__23236__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__23236__auto____$1){
return or__23236__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__23224__auto__ = m;
if(and__23224__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__23224__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__23872__auto__ = (((m == null))?null:m);
return (function (){var or__23236__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__23872__auto__)]);
if(or__23236__auto__){
return or__23236__auto__;
} else {
var or__23236__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__23236__auto____$1){
return or__23236__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__23224__auto__ = m;
if(and__23224__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__23224__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__23872__auto__ = (((m == null))?null:m);
return (function (){var or__23236__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__23872__auto__)]);
if(or__23236__auto__){
return or__23236__auto__;
} else {
var or__23236__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__23236__auto____$1){
return or__23236__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__24276__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__24276__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32171){
var map__32172 = p__32171;
var map__32172__$1 = ((cljs.core.seq_QMARK_.call(null,map__32172))?cljs.core.apply.call(null,cljs.core.hash_map,map__32172):map__32172);
var opts = map__32172__$1;
var statearr_32173_32176 = state;
(statearr_32173_32176[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__32172,map__32172__$1,opts){
return (function (val){
var statearr_32174_32177 = state;
(statearr_32174_32177[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32172,map__32172__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_32175_32178 = state;
(statearr_32175_32178[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32167){
var G__32168 = cljs.core.first.call(null,seq32167);
var seq32167__$1 = cljs.core.next.call(null,seq32167);
var G__32169 = cljs.core.first.call(null,seq32167__$1);
var seq32167__$2 = cljs.core.next.call(null,seq32167__$1);
var G__32170 = cljs.core.first.call(null,seq32167__$2);
var seq32167__$3 = cljs.core.next.call(null,seq32167__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32168,G__32169,G__32170,seq32167__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t32298 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32298 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32299){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32299 = meta32299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32300,meta32299__$1){
var self__ = this;
var _32300__$1 = this;
return (new cljs.core.async.t32298(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32299__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32298.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32300){
var self__ = this;
var _32300__$1 = this;
return self__.meta32299;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32298.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32298.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32298.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t32298.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32298.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32298.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32298.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32298.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32298.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32299","meta32299",757737840,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32298.cljs$lang$type = true;

cljs.core.async.t32298.cljs$lang$ctorStr = "cljs.core.async/t32298";

cljs.core.async.t32298.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__23815__auto__,writer__23816__auto__,opt__23817__auto__){
return cljs.core._write.call(null,writer__23816__auto__,"cljs.core.async/t32298");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t32298 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t32298(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32299){
return (new cljs.core.async.t32298(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32299));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t32298(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25333__auto___32417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto___32417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto___32417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32370){
var state_val_32371 = (state_32370[(1)]);
if((state_val_32371 === (7))){
var inst_32314 = (state_32370[(7)]);
var inst_32319 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32314);
var state_32370__$1 = state_32370;
var statearr_32372_32418 = state_32370__$1;
(statearr_32372_32418[(2)] = inst_32319);

(statearr_32372_32418[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (20))){
var inst_32329 = (state_32370[(8)]);
var state_32370__$1 = state_32370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32370__$1,(23),out,inst_32329);
} else {
if((state_val_32371 === (1))){
var inst_32304 = (state_32370[(9)]);
var inst_32304__$1 = calc_state.call(null);
var inst_32305 = cljs.core.seq_QMARK_.call(null,inst_32304__$1);
var state_32370__$1 = (function (){var statearr_32373 = state_32370;
(statearr_32373[(9)] = inst_32304__$1);

return statearr_32373;
})();
if(inst_32305){
var statearr_32374_32419 = state_32370__$1;
(statearr_32374_32419[(1)] = (2));

} else {
var statearr_32375_32420 = state_32370__$1;
(statearr_32375_32420[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (24))){
var inst_32322 = (state_32370[(10)]);
var inst_32314 = inst_32322;
var state_32370__$1 = (function (){var statearr_32376 = state_32370;
(statearr_32376[(7)] = inst_32314);

return statearr_32376;
})();
var statearr_32377_32421 = state_32370__$1;
(statearr_32377_32421[(2)] = null);

(statearr_32377_32421[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (4))){
var inst_32304 = (state_32370[(9)]);
var inst_32310 = (state_32370[(2)]);
var inst_32311 = cljs.core.get.call(null,inst_32310,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32312 = cljs.core.get.call(null,inst_32310,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32313 = cljs.core.get.call(null,inst_32310,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32314 = inst_32304;
var state_32370__$1 = (function (){var statearr_32378 = state_32370;
(statearr_32378[(11)] = inst_32311);

(statearr_32378[(12)] = inst_32313);

(statearr_32378[(7)] = inst_32314);

(statearr_32378[(13)] = inst_32312);

return statearr_32378;
})();
var statearr_32379_32422 = state_32370__$1;
(statearr_32379_32422[(2)] = null);

(statearr_32379_32422[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (15))){
var state_32370__$1 = state_32370;
var statearr_32380_32423 = state_32370__$1;
(statearr_32380_32423[(2)] = null);

(statearr_32380_32423[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (21))){
var inst_32322 = (state_32370[(10)]);
var inst_32314 = inst_32322;
var state_32370__$1 = (function (){var statearr_32381 = state_32370;
(statearr_32381[(7)] = inst_32314);

return statearr_32381;
})();
var statearr_32382_32424 = state_32370__$1;
(statearr_32382_32424[(2)] = null);

(statearr_32382_32424[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (13))){
var inst_32366 = (state_32370[(2)]);
var state_32370__$1 = state_32370;
var statearr_32383_32425 = state_32370__$1;
(statearr_32383_32425[(2)] = inst_32366);

(statearr_32383_32425[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (22))){
var inst_32364 = (state_32370[(2)]);
var state_32370__$1 = state_32370;
var statearr_32384_32426 = state_32370__$1;
(statearr_32384_32426[(2)] = inst_32364);

(statearr_32384_32426[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (6))){
var inst_32368 = (state_32370[(2)]);
var state_32370__$1 = state_32370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32370__$1,inst_32368);
} else {
if((state_val_32371 === (25))){
var state_32370__$1 = state_32370;
var statearr_32385_32427 = state_32370__$1;
(statearr_32385_32427[(2)] = null);

(statearr_32385_32427[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (17))){
var inst_32344 = (state_32370[(14)]);
var state_32370__$1 = state_32370;
var statearr_32386_32428 = state_32370__$1;
(statearr_32386_32428[(2)] = inst_32344);

(statearr_32386_32428[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (3))){
var inst_32304 = (state_32370[(9)]);
var state_32370__$1 = state_32370;
var statearr_32387_32429 = state_32370__$1;
(statearr_32387_32429[(2)] = inst_32304);

(statearr_32387_32429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (12))){
var inst_32344 = (state_32370[(14)]);
var inst_32330 = (state_32370[(15)]);
var inst_32323 = (state_32370[(16)]);
var inst_32344__$1 = inst_32323.call(null,inst_32330);
var state_32370__$1 = (function (){var statearr_32388 = state_32370;
(statearr_32388[(14)] = inst_32344__$1);

return statearr_32388;
})();
if(cljs.core.truth_(inst_32344__$1)){
var statearr_32389_32430 = state_32370__$1;
(statearr_32389_32430[(1)] = (17));

} else {
var statearr_32390_32431 = state_32370__$1;
(statearr_32390_32431[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (2))){
var inst_32304 = (state_32370[(9)]);
var inst_32307 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32304);
var state_32370__$1 = state_32370;
var statearr_32391_32432 = state_32370__$1;
(statearr_32391_32432[(2)] = inst_32307);

(statearr_32391_32432[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (23))){
var inst_32355 = (state_32370[(2)]);
var state_32370__$1 = state_32370;
if(cljs.core.truth_(inst_32355)){
var statearr_32392_32433 = state_32370__$1;
(statearr_32392_32433[(1)] = (24));

} else {
var statearr_32393_32434 = state_32370__$1;
(statearr_32393_32434[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (19))){
var inst_32352 = (state_32370[(2)]);
var state_32370__$1 = state_32370;
if(cljs.core.truth_(inst_32352)){
var statearr_32394_32435 = state_32370__$1;
(statearr_32394_32435[(1)] = (20));

} else {
var statearr_32395_32436 = state_32370__$1;
(statearr_32395_32436[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (11))){
var inst_32329 = (state_32370[(8)]);
var inst_32335 = (inst_32329 == null);
var state_32370__$1 = state_32370;
if(cljs.core.truth_(inst_32335)){
var statearr_32396_32437 = state_32370__$1;
(statearr_32396_32437[(1)] = (14));

} else {
var statearr_32397_32438 = state_32370__$1;
(statearr_32397_32438[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (9))){
var inst_32322 = (state_32370[(10)]);
var inst_32322__$1 = (state_32370[(2)]);
var inst_32323 = cljs.core.get.call(null,inst_32322__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32324 = cljs.core.get.call(null,inst_32322__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32325 = cljs.core.get.call(null,inst_32322__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32370__$1 = (function (){var statearr_32398 = state_32370;
(statearr_32398[(17)] = inst_32324);

(statearr_32398[(10)] = inst_32322__$1);

(statearr_32398[(16)] = inst_32323);

return statearr_32398;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32370__$1,(10),inst_32325);
} else {
if((state_val_32371 === (5))){
var inst_32314 = (state_32370[(7)]);
var inst_32317 = cljs.core.seq_QMARK_.call(null,inst_32314);
var state_32370__$1 = state_32370;
if(inst_32317){
var statearr_32399_32439 = state_32370__$1;
(statearr_32399_32439[(1)] = (7));

} else {
var statearr_32400_32440 = state_32370__$1;
(statearr_32400_32440[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (14))){
var inst_32330 = (state_32370[(15)]);
var inst_32337 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32330);
var state_32370__$1 = state_32370;
var statearr_32401_32441 = state_32370__$1;
(statearr_32401_32441[(2)] = inst_32337);

(statearr_32401_32441[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (26))){
var inst_32360 = (state_32370[(2)]);
var state_32370__$1 = state_32370;
var statearr_32402_32442 = state_32370__$1;
(statearr_32402_32442[(2)] = inst_32360);

(statearr_32402_32442[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (16))){
var inst_32340 = (state_32370[(2)]);
var inst_32341 = calc_state.call(null);
var inst_32314 = inst_32341;
var state_32370__$1 = (function (){var statearr_32403 = state_32370;
(statearr_32403[(7)] = inst_32314);

(statearr_32403[(18)] = inst_32340);

return statearr_32403;
})();
var statearr_32404_32443 = state_32370__$1;
(statearr_32404_32443[(2)] = null);

(statearr_32404_32443[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (10))){
var inst_32330 = (state_32370[(15)]);
var inst_32329 = (state_32370[(8)]);
var inst_32328 = (state_32370[(2)]);
var inst_32329__$1 = cljs.core.nth.call(null,inst_32328,(0),null);
var inst_32330__$1 = cljs.core.nth.call(null,inst_32328,(1),null);
var inst_32331 = (inst_32329__$1 == null);
var inst_32332 = cljs.core._EQ_.call(null,inst_32330__$1,change);
var inst_32333 = (inst_32331) || (inst_32332);
var state_32370__$1 = (function (){var statearr_32405 = state_32370;
(statearr_32405[(15)] = inst_32330__$1);

(statearr_32405[(8)] = inst_32329__$1);

return statearr_32405;
})();
if(cljs.core.truth_(inst_32333)){
var statearr_32406_32444 = state_32370__$1;
(statearr_32406_32444[(1)] = (11));

} else {
var statearr_32407_32445 = state_32370__$1;
(statearr_32407_32445[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (18))){
var inst_32324 = (state_32370[(17)]);
var inst_32330 = (state_32370[(15)]);
var inst_32323 = (state_32370[(16)]);
var inst_32347 = cljs.core.empty_QMARK_.call(null,inst_32323);
var inst_32348 = inst_32324.call(null,inst_32330);
var inst_32349 = cljs.core.not.call(null,inst_32348);
var inst_32350 = (inst_32347) && (inst_32349);
var state_32370__$1 = state_32370;
var statearr_32408_32446 = state_32370__$1;
(statearr_32408_32446[(2)] = inst_32350);

(statearr_32408_32446[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (8))){
var inst_32314 = (state_32370[(7)]);
var state_32370__$1 = state_32370;
var statearr_32409_32447 = state_32370__$1;
(statearr_32409_32447[(2)] = inst_32314);

(statearr_32409_32447[(1)] = (9));


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
});})(c__25333__auto___32417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25271__auto__,c__25333__auto___32417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25272__auto__ = null;
var cljs$core$async$mix_$_state_machine__25272__auto____0 = (function (){
var statearr_32413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32413[(0)] = cljs$core$async$mix_$_state_machine__25272__auto__);

(statearr_32413[(1)] = (1));

return statearr_32413;
});
var cljs$core$async$mix_$_state_machine__25272__auto____1 = (function (state_32370){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_32370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e32414){if((e32414 instanceof Object)){
var ex__25275__auto__ = e32414;
var statearr_32415_32448 = state_32370;
(statearr_32415_32448[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32449 = state_32370;
state_32370 = G__32449;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25272__auto__ = function(state_32370){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25272__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25272__auto____1.call(this,state_32370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25272__auto____0;
cljs$core$async$mix_$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25272__auto____1;
return cljs$core$async$mix_$_state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto___32417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25335__auto__ = (function (){var statearr_32416 = f__25334__auto__.call(null);
(statearr_32416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___32417);

return statearr_32416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto___32417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj32451 = {};
return obj32451;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__23224__auto__ = p;
if(and__23224__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__23224__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__23872__auto__ = (((p == null))?null:p);
return (function (){var or__23236__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__23872__auto__)]);
if(or__23236__auto__){
return or__23236__auto__;
} else {
var or__23236__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__23236__auto____$1){
return or__23236__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__23224__auto__ = p;
if(and__23224__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__23224__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__23872__auto__ = (((p == null))?null:p);
return (function (){var or__23236__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__23872__auto__)]);
if(or__23236__auto__){
return or__23236__auto__;
} else {
var or__23236__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__23236__auto____$1){
return or__23236__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__32453 = arguments.length;
switch (G__32453) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__23224__auto__ = p;
if(and__23224__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__23224__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__23872__auto__ = (((p == null))?null:p);
return (function (){var or__23236__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23872__auto__)]);
if(or__23236__auto__){
return or__23236__auto__;
} else {
var or__23236__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__23236__auto____$1){
return or__23236__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__23224__auto__ = p;
if(and__23224__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__23224__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__23872__auto__ = (((p == null))?null:p);
return (function (){var or__23236__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23872__auto__)]);
if(or__23236__auto__){
return or__23236__auto__;
} else {
var or__23236__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__23236__auto____$1){
return or__23236__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__32457 = arguments.length;
switch (G__32457) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__23236__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__23236__auto__)){
return or__23236__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__23236__auto__,mults){
return (function (p1__32455_SHARP_){
if(cljs.core.truth_(p1__32455_SHARP_.call(null,topic))){
return p1__32455_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32455_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__23236__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t32458 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32458 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32459){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32459 = meta32459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32460,meta32459__$1){
var self__ = this;
var _32460__$1 = this;
return (new cljs.core.async.t32458(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32459__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t32458.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32460){
var self__ = this;
var _32460__$1 = this;
return self__.meta32459;
});})(mults,ensure_mult))
;

cljs.core.async.t32458.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32458.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t32458.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t32458.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t32458.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t32458.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t32458.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t32458.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32459","meta32459",182935546,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t32458.cljs$lang$type = true;

cljs.core.async.t32458.cljs$lang$ctorStr = "cljs.core.async/t32458";

cljs.core.async.t32458.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__23815__auto__,writer__23816__auto__,opt__23817__auto__){
return cljs.core._write.call(null,writer__23816__auto__,"cljs.core.async/t32458");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t32458 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t32458(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32459){
return (new cljs.core.async.t32458(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32459));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t32458(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25333__auto___32581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto___32581,mults,ensure_mult,p){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto___32581,mults,ensure_mult,p){
return (function (state_32532){
var state_val_32533 = (state_32532[(1)]);
if((state_val_32533 === (7))){
var inst_32528 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
var statearr_32534_32582 = state_32532__$1;
(statearr_32534_32582[(2)] = inst_32528);

(statearr_32534_32582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (20))){
var state_32532__$1 = state_32532;
var statearr_32535_32583 = state_32532__$1;
(statearr_32535_32583[(2)] = null);

(statearr_32535_32583[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (1))){
var state_32532__$1 = state_32532;
var statearr_32536_32584 = state_32532__$1;
(statearr_32536_32584[(2)] = null);

(statearr_32536_32584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (24))){
var inst_32511 = (state_32532[(7)]);
var inst_32520 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32511);
var state_32532__$1 = state_32532;
var statearr_32537_32585 = state_32532__$1;
(statearr_32537_32585[(2)] = inst_32520);

(statearr_32537_32585[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (4))){
var inst_32463 = (state_32532[(8)]);
var inst_32463__$1 = (state_32532[(2)]);
var inst_32464 = (inst_32463__$1 == null);
var state_32532__$1 = (function (){var statearr_32538 = state_32532;
(statearr_32538[(8)] = inst_32463__$1);

return statearr_32538;
})();
if(cljs.core.truth_(inst_32464)){
var statearr_32539_32586 = state_32532__$1;
(statearr_32539_32586[(1)] = (5));

} else {
var statearr_32540_32587 = state_32532__$1;
(statearr_32540_32587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (15))){
var inst_32505 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
var statearr_32541_32588 = state_32532__$1;
(statearr_32541_32588[(2)] = inst_32505);

(statearr_32541_32588[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (21))){
var inst_32525 = (state_32532[(2)]);
var state_32532__$1 = (function (){var statearr_32542 = state_32532;
(statearr_32542[(9)] = inst_32525);

return statearr_32542;
})();
var statearr_32543_32589 = state_32532__$1;
(statearr_32543_32589[(2)] = null);

(statearr_32543_32589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (13))){
var inst_32487 = (state_32532[(10)]);
var inst_32489 = cljs.core.chunked_seq_QMARK_.call(null,inst_32487);
var state_32532__$1 = state_32532;
if(inst_32489){
var statearr_32544_32590 = state_32532__$1;
(statearr_32544_32590[(1)] = (16));

} else {
var statearr_32545_32591 = state_32532__$1;
(statearr_32545_32591[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (22))){
var inst_32517 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
if(cljs.core.truth_(inst_32517)){
var statearr_32546_32592 = state_32532__$1;
(statearr_32546_32592[(1)] = (23));

} else {
var statearr_32547_32593 = state_32532__$1;
(statearr_32547_32593[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (6))){
var inst_32463 = (state_32532[(8)]);
var inst_32513 = (state_32532[(11)]);
var inst_32511 = (state_32532[(7)]);
var inst_32511__$1 = topic_fn.call(null,inst_32463);
var inst_32512 = cljs.core.deref.call(null,mults);
var inst_32513__$1 = cljs.core.get.call(null,inst_32512,inst_32511__$1);
var state_32532__$1 = (function (){var statearr_32548 = state_32532;
(statearr_32548[(11)] = inst_32513__$1);

(statearr_32548[(7)] = inst_32511__$1);

return statearr_32548;
})();
if(cljs.core.truth_(inst_32513__$1)){
var statearr_32549_32594 = state_32532__$1;
(statearr_32549_32594[(1)] = (19));

} else {
var statearr_32550_32595 = state_32532__$1;
(statearr_32550_32595[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (25))){
var inst_32522 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
var statearr_32551_32596 = state_32532__$1;
(statearr_32551_32596[(2)] = inst_32522);

(statearr_32551_32596[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (17))){
var inst_32487 = (state_32532[(10)]);
var inst_32496 = cljs.core.first.call(null,inst_32487);
var inst_32497 = cljs.core.async.muxch_STAR_.call(null,inst_32496);
var inst_32498 = cljs.core.async.close_BANG_.call(null,inst_32497);
var inst_32499 = cljs.core.next.call(null,inst_32487);
var inst_32473 = inst_32499;
var inst_32474 = null;
var inst_32475 = (0);
var inst_32476 = (0);
var state_32532__$1 = (function (){var statearr_32552 = state_32532;
(statearr_32552[(12)] = inst_32474);

(statearr_32552[(13)] = inst_32498);

(statearr_32552[(14)] = inst_32475);

(statearr_32552[(15)] = inst_32473);

(statearr_32552[(16)] = inst_32476);

return statearr_32552;
})();
var statearr_32553_32597 = state_32532__$1;
(statearr_32553_32597[(2)] = null);

(statearr_32553_32597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (3))){
var inst_32530 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32532__$1,inst_32530);
} else {
if((state_val_32533 === (12))){
var inst_32507 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
var statearr_32554_32598 = state_32532__$1;
(statearr_32554_32598[(2)] = inst_32507);

(statearr_32554_32598[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (2))){
var state_32532__$1 = state_32532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32532__$1,(4),ch);
} else {
if((state_val_32533 === (23))){
var state_32532__$1 = state_32532;
var statearr_32555_32599 = state_32532__$1;
(statearr_32555_32599[(2)] = null);

(statearr_32555_32599[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (19))){
var inst_32463 = (state_32532[(8)]);
var inst_32513 = (state_32532[(11)]);
var inst_32515 = cljs.core.async.muxch_STAR_.call(null,inst_32513);
var state_32532__$1 = state_32532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32532__$1,(22),inst_32515,inst_32463);
} else {
if((state_val_32533 === (11))){
var inst_32487 = (state_32532[(10)]);
var inst_32473 = (state_32532[(15)]);
var inst_32487__$1 = cljs.core.seq.call(null,inst_32473);
var state_32532__$1 = (function (){var statearr_32556 = state_32532;
(statearr_32556[(10)] = inst_32487__$1);

return statearr_32556;
})();
if(inst_32487__$1){
var statearr_32557_32600 = state_32532__$1;
(statearr_32557_32600[(1)] = (13));

} else {
var statearr_32558_32601 = state_32532__$1;
(statearr_32558_32601[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (9))){
var inst_32509 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
var statearr_32559_32602 = state_32532__$1;
(statearr_32559_32602[(2)] = inst_32509);

(statearr_32559_32602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (5))){
var inst_32470 = cljs.core.deref.call(null,mults);
var inst_32471 = cljs.core.vals.call(null,inst_32470);
var inst_32472 = cljs.core.seq.call(null,inst_32471);
var inst_32473 = inst_32472;
var inst_32474 = null;
var inst_32475 = (0);
var inst_32476 = (0);
var state_32532__$1 = (function (){var statearr_32560 = state_32532;
(statearr_32560[(12)] = inst_32474);

(statearr_32560[(14)] = inst_32475);

(statearr_32560[(15)] = inst_32473);

(statearr_32560[(16)] = inst_32476);

return statearr_32560;
})();
var statearr_32561_32603 = state_32532__$1;
(statearr_32561_32603[(2)] = null);

(statearr_32561_32603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (14))){
var state_32532__$1 = state_32532;
var statearr_32565_32604 = state_32532__$1;
(statearr_32565_32604[(2)] = null);

(statearr_32565_32604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (16))){
var inst_32487 = (state_32532[(10)]);
var inst_32491 = cljs.core.chunk_first.call(null,inst_32487);
var inst_32492 = cljs.core.chunk_rest.call(null,inst_32487);
var inst_32493 = cljs.core.count.call(null,inst_32491);
var inst_32473 = inst_32492;
var inst_32474 = inst_32491;
var inst_32475 = inst_32493;
var inst_32476 = (0);
var state_32532__$1 = (function (){var statearr_32566 = state_32532;
(statearr_32566[(12)] = inst_32474);

(statearr_32566[(14)] = inst_32475);

(statearr_32566[(15)] = inst_32473);

(statearr_32566[(16)] = inst_32476);

return statearr_32566;
})();
var statearr_32567_32605 = state_32532__$1;
(statearr_32567_32605[(2)] = null);

(statearr_32567_32605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (10))){
var inst_32474 = (state_32532[(12)]);
var inst_32475 = (state_32532[(14)]);
var inst_32473 = (state_32532[(15)]);
var inst_32476 = (state_32532[(16)]);
var inst_32481 = cljs.core._nth.call(null,inst_32474,inst_32476);
var inst_32482 = cljs.core.async.muxch_STAR_.call(null,inst_32481);
var inst_32483 = cljs.core.async.close_BANG_.call(null,inst_32482);
var inst_32484 = (inst_32476 + (1));
var tmp32562 = inst_32474;
var tmp32563 = inst_32475;
var tmp32564 = inst_32473;
var inst_32473__$1 = tmp32564;
var inst_32474__$1 = tmp32562;
var inst_32475__$1 = tmp32563;
var inst_32476__$1 = inst_32484;
var state_32532__$1 = (function (){var statearr_32568 = state_32532;
(statearr_32568[(12)] = inst_32474__$1);

(statearr_32568[(14)] = inst_32475__$1);

(statearr_32568[(17)] = inst_32483);

(statearr_32568[(15)] = inst_32473__$1);

(statearr_32568[(16)] = inst_32476__$1);

return statearr_32568;
})();
var statearr_32569_32606 = state_32532__$1;
(statearr_32569_32606[(2)] = null);

(statearr_32569_32606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (18))){
var inst_32502 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
var statearr_32570_32607 = state_32532__$1;
(statearr_32570_32607[(2)] = inst_32502);

(statearr_32570_32607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (8))){
var inst_32475 = (state_32532[(14)]);
var inst_32476 = (state_32532[(16)]);
var inst_32478 = (inst_32476 < inst_32475);
var inst_32479 = inst_32478;
var state_32532__$1 = state_32532;
if(cljs.core.truth_(inst_32479)){
var statearr_32571_32608 = state_32532__$1;
(statearr_32571_32608[(1)] = (10));

} else {
var statearr_32572_32609 = state_32532__$1;
(statearr_32572_32609[(1)] = (11));

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
});})(c__25333__auto___32581,mults,ensure_mult,p))
;
return ((function (switch__25271__auto__,c__25333__auto___32581,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25272__auto__ = null;
var cljs$core$async$state_machine__25272__auto____0 = (function (){
var statearr_32576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32576[(0)] = cljs$core$async$state_machine__25272__auto__);

(statearr_32576[(1)] = (1));

return statearr_32576;
});
var cljs$core$async$state_machine__25272__auto____1 = (function (state_32532){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_32532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e32577){if((e32577 instanceof Object)){
var ex__25275__auto__ = e32577;
var statearr_32578_32610 = state_32532;
(statearr_32578_32610[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32611 = state_32532;
state_32532 = G__32611;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
cljs$core$async$state_machine__25272__auto__ = function(state_32532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25272__auto____1.call(this,state_32532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25272__auto____0;
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25272__auto____1;
return cljs$core$async$state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto___32581,mults,ensure_mult,p))
})();
var state__25335__auto__ = (function (){var statearr_32579 = f__25334__auto__.call(null);
(statearr_32579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___32581);

return statearr_32579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto___32581,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__32613 = arguments.length;
switch (G__32613) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__32616 = arguments.length;
switch (G__32616) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__32619 = arguments.length;
switch (G__32619) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__25333__auto___32689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto___32689,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto___32689,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32658){
var state_val_32659 = (state_32658[(1)]);
if((state_val_32659 === (7))){
var state_32658__$1 = state_32658;
var statearr_32660_32690 = state_32658__$1;
(statearr_32660_32690[(2)] = null);

(statearr_32660_32690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (1))){
var state_32658__$1 = state_32658;
var statearr_32661_32691 = state_32658__$1;
(statearr_32661_32691[(2)] = null);

(statearr_32661_32691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (4))){
var inst_32622 = (state_32658[(7)]);
var inst_32624 = (inst_32622 < cnt);
var state_32658__$1 = state_32658;
if(cljs.core.truth_(inst_32624)){
var statearr_32662_32692 = state_32658__$1;
(statearr_32662_32692[(1)] = (6));

} else {
var statearr_32663_32693 = state_32658__$1;
(statearr_32663_32693[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (15))){
var inst_32654 = (state_32658[(2)]);
var state_32658__$1 = state_32658;
var statearr_32664_32694 = state_32658__$1;
(statearr_32664_32694[(2)] = inst_32654);

(statearr_32664_32694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (13))){
var inst_32647 = cljs.core.async.close_BANG_.call(null,out);
var state_32658__$1 = state_32658;
var statearr_32665_32695 = state_32658__$1;
(statearr_32665_32695[(2)] = inst_32647);

(statearr_32665_32695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (6))){
var state_32658__$1 = state_32658;
var statearr_32666_32696 = state_32658__$1;
(statearr_32666_32696[(2)] = null);

(statearr_32666_32696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (3))){
var inst_32656 = (state_32658[(2)]);
var state_32658__$1 = state_32658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32658__$1,inst_32656);
} else {
if((state_val_32659 === (12))){
var inst_32644 = (state_32658[(8)]);
var inst_32644__$1 = (state_32658[(2)]);
var inst_32645 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32644__$1);
var state_32658__$1 = (function (){var statearr_32667 = state_32658;
(statearr_32667[(8)] = inst_32644__$1);

return statearr_32667;
})();
if(cljs.core.truth_(inst_32645)){
var statearr_32668_32697 = state_32658__$1;
(statearr_32668_32697[(1)] = (13));

} else {
var statearr_32669_32698 = state_32658__$1;
(statearr_32669_32698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (2))){
var inst_32621 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32622 = (0);
var state_32658__$1 = (function (){var statearr_32670 = state_32658;
(statearr_32670[(9)] = inst_32621);

(statearr_32670[(7)] = inst_32622);

return statearr_32670;
})();
var statearr_32671_32699 = state_32658__$1;
(statearr_32671_32699[(2)] = null);

(statearr_32671_32699[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (11))){
var inst_32622 = (state_32658[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32658,(10),Object,null,(9));
var inst_32631 = chs__$1.call(null,inst_32622);
var inst_32632 = done.call(null,inst_32622);
var inst_32633 = cljs.core.async.take_BANG_.call(null,inst_32631,inst_32632);
var state_32658__$1 = state_32658;
var statearr_32672_32700 = state_32658__$1;
(statearr_32672_32700[(2)] = inst_32633);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32658__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (9))){
var inst_32622 = (state_32658[(7)]);
var inst_32635 = (state_32658[(2)]);
var inst_32636 = (inst_32622 + (1));
var inst_32622__$1 = inst_32636;
var state_32658__$1 = (function (){var statearr_32673 = state_32658;
(statearr_32673[(10)] = inst_32635);

(statearr_32673[(7)] = inst_32622__$1);

return statearr_32673;
})();
var statearr_32674_32701 = state_32658__$1;
(statearr_32674_32701[(2)] = null);

(statearr_32674_32701[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (5))){
var inst_32642 = (state_32658[(2)]);
var state_32658__$1 = (function (){var statearr_32675 = state_32658;
(statearr_32675[(11)] = inst_32642);

return statearr_32675;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32658__$1,(12),dchan);
} else {
if((state_val_32659 === (14))){
var inst_32644 = (state_32658[(8)]);
var inst_32649 = cljs.core.apply.call(null,f,inst_32644);
var state_32658__$1 = state_32658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32658__$1,(16),out,inst_32649);
} else {
if((state_val_32659 === (16))){
var inst_32651 = (state_32658[(2)]);
var state_32658__$1 = (function (){var statearr_32676 = state_32658;
(statearr_32676[(12)] = inst_32651);

return statearr_32676;
})();
var statearr_32677_32702 = state_32658__$1;
(statearr_32677_32702[(2)] = null);

(statearr_32677_32702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (10))){
var inst_32626 = (state_32658[(2)]);
var inst_32627 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32658__$1 = (function (){var statearr_32678 = state_32658;
(statearr_32678[(13)] = inst_32626);

return statearr_32678;
})();
var statearr_32679_32703 = state_32658__$1;
(statearr_32679_32703[(2)] = inst_32627);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32658__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32659 === (8))){
var inst_32640 = (state_32658[(2)]);
var state_32658__$1 = state_32658;
var statearr_32680_32704 = state_32658__$1;
(statearr_32680_32704[(2)] = inst_32640);

(statearr_32680_32704[(1)] = (5));


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
});})(c__25333__auto___32689,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25271__auto__,c__25333__auto___32689,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25272__auto__ = null;
var cljs$core$async$state_machine__25272__auto____0 = (function (){
var statearr_32684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32684[(0)] = cljs$core$async$state_machine__25272__auto__);

(statearr_32684[(1)] = (1));

return statearr_32684;
});
var cljs$core$async$state_machine__25272__auto____1 = (function (state_32658){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_32658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e32685){if((e32685 instanceof Object)){
var ex__25275__auto__ = e32685;
var statearr_32686_32705 = state_32658;
(statearr_32686_32705[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32706 = state_32658;
state_32658 = G__32706;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
cljs$core$async$state_machine__25272__auto__ = function(state_32658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25272__auto____1.call(this,state_32658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25272__auto____0;
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25272__auto____1;
return cljs$core$async$state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto___32689,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25335__auto__ = (function (){var statearr_32687 = f__25334__auto__.call(null);
(statearr_32687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___32689);

return statearr_32687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto___32689,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__32709 = arguments.length;
switch (G__32709) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25333__auto___32764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto___32764,out){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto___32764,out){
return (function (state_32739){
var state_val_32740 = (state_32739[(1)]);
if((state_val_32740 === (7))){
var inst_32719 = (state_32739[(7)]);
var inst_32718 = (state_32739[(8)]);
var inst_32718__$1 = (state_32739[(2)]);
var inst_32719__$1 = cljs.core.nth.call(null,inst_32718__$1,(0),null);
var inst_32720 = cljs.core.nth.call(null,inst_32718__$1,(1),null);
var inst_32721 = (inst_32719__$1 == null);
var state_32739__$1 = (function (){var statearr_32741 = state_32739;
(statearr_32741[(7)] = inst_32719__$1);

(statearr_32741[(9)] = inst_32720);

(statearr_32741[(8)] = inst_32718__$1);

return statearr_32741;
})();
if(cljs.core.truth_(inst_32721)){
var statearr_32742_32765 = state_32739__$1;
(statearr_32742_32765[(1)] = (8));

} else {
var statearr_32743_32766 = state_32739__$1;
(statearr_32743_32766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32740 === (1))){
var inst_32710 = cljs.core.vec.call(null,chs);
var inst_32711 = inst_32710;
var state_32739__$1 = (function (){var statearr_32744 = state_32739;
(statearr_32744[(10)] = inst_32711);

return statearr_32744;
})();
var statearr_32745_32767 = state_32739__$1;
(statearr_32745_32767[(2)] = null);

(statearr_32745_32767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32740 === (4))){
var inst_32711 = (state_32739[(10)]);
var state_32739__$1 = state_32739;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32739__$1,(7),inst_32711);
} else {
if((state_val_32740 === (6))){
var inst_32735 = (state_32739[(2)]);
var state_32739__$1 = state_32739;
var statearr_32746_32768 = state_32739__$1;
(statearr_32746_32768[(2)] = inst_32735);

(statearr_32746_32768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32740 === (3))){
var inst_32737 = (state_32739[(2)]);
var state_32739__$1 = state_32739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32739__$1,inst_32737);
} else {
if((state_val_32740 === (2))){
var inst_32711 = (state_32739[(10)]);
var inst_32713 = cljs.core.count.call(null,inst_32711);
var inst_32714 = (inst_32713 > (0));
var state_32739__$1 = state_32739;
if(cljs.core.truth_(inst_32714)){
var statearr_32748_32769 = state_32739__$1;
(statearr_32748_32769[(1)] = (4));

} else {
var statearr_32749_32770 = state_32739__$1;
(statearr_32749_32770[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32740 === (11))){
var inst_32711 = (state_32739[(10)]);
var inst_32728 = (state_32739[(2)]);
var tmp32747 = inst_32711;
var inst_32711__$1 = tmp32747;
var state_32739__$1 = (function (){var statearr_32750 = state_32739;
(statearr_32750[(10)] = inst_32711__$1);

(statearr_32750[(11)] = inst_32728);

return statearr_32750;
})();
var statearr_32751_32771 = state_32739__$1;
(statearr_32751_32771[(2)] = null);

(statearr_32751_32771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32740 === (9))){
var inst_32719 = (state_32739[(7)]);
var state_32739__$1 = state_32739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32739__$1,(11),out,inst_32719);
} else {
if((state_val_32740 === (5))){
var inst_32733 = cljs.core.async.close_BANG_.call(null,out);
var state_32739__$1 = state_32739;
var statearr_32752_32772 = state_32739__$1;
(statearr_32752_32772[(2)] = inst_32733);

(statearr_32752_32772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32740 === (10))){
var inst_32731 = (state_32739[(2)]);
var state_32739__$1 = state_32739;
var statearr_32753_32773 = state_32739__$1;
(statearr_32753_32773[(2)] = inst_32731);

(statearr_32753_32773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32740 === (8))){
var inst_32719 = (state_32739[(7)]);
var inst_32720 = (state_32739[(9)]);
var inst_32711 = (state_32739[(10)]);
var inst_32718 = (state_32739[(8)]);
var inst_32723 = (function (){var cs = inst_32711;
var vec__32716 = inst_32718;
var v = inst_32719;
var c = inst_32720;
return ((function (cs,vec__32716,v,c,inst_32719,inst_32720,inst_32711,inst_32718,state_val_32740,c__25333__auto___32764,out){
return (function (p1__32707_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32707_SHARP_);
});
;})(cs,vec__32716,v,c,inst_32719,inst_32720,inst_32711,inst_32718,state_val_32740,c__25333__auto___32764,out))
})();
var inst_32724 = cljs.core.filterv.call(null,inst_32723,inst_32711);
var inst_32711__$1 = inst_32724;
var state_32739__$1 = (function (){var statearr_32754 = state_32739;
(statearr_32754[(10)] = inst_32711__$1);

return statearr_32754;
})();
var statearr_32755_32774 = state_32739__$1;
(statearr_32755_32774[(2)] = null);

(statearr_32755_32774[(1)] = (2));


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
});})(c__25333__auto___32764,out))
;
return ((function (switch__25271__auto__,c__25333__auto___32764,out){
return (function() {
var cljs$core$async$state_machine__25272__auto__ = null;
var cljs$core$async$state_machine__25272__auto____0 = (function (){
var statearr_32759 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32759[(0)] = cljs$core$async$state_machine__25272__auto__);

(statearr_32759[(1)] = (1));

return statearr_32759;
});
var cljs$core$async$state_machine__25272__auto____1 = (function (state_32739){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_32739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e32760){if((e32760 instanceof Object)){
var ex__25275__auto__ = e32760;
var statearr_32761_32775 = state_32739;
(statearr_32761_32775[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32776 = state_32739;
state_32739 = G__32776;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
cljs$core$async$state_machine__25272__auto__ = function(state_32739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25272__auto____1.call(this,state_32739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25272__auto____0;
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25272__auto____1;
return cljs$core$async$state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto___32764,out))
})();
var state__25335__auto__ = (function (){var statearr_32762 = f__25334__auto__.call(null);
(statearr_32762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___32764);

return statearr_32762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto___32764,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__32778 = arguments.length;
switch (G__32778) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25333__auto___32826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto___32826,out){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto___32826,out){
return (function (state_32802){
var state_val_32803 = (state_32802[(1)]);
if((state_val_32803 === (7))){
var inst_32784 = (state_32802[(7)]);
var inst_32784__$1 = (state_32802[(2)]);
var inst_32785 = (inst_32784__$1 == null);
var inst_32786 = cljs.core.not.call(null,inst_32785);
var state_32802__$1 = (function (){var statearr_32804 = state_32802;
(statearr_32804[(7)] = inst_32784__$1);

return statearr_32804;
})();
if(inst_32786){
var statearr_32805_32827 = state_32802__$1;
(statearr_32805_32827[(1)] = (8));

} else {
var statearr_32806_32828 = state_32802__$1;
(statearr_32806_32828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (1))){
var inst_32779 = (0);
var state_32802__$1 = (function (){var statearr_32807 = state_32802;
(statearr_32807[(8)] = inst_32779);

return statearr_32807;
})();
var statearr_32808_32829 = state_32802__$1;
(statearr_32808_32829[(2)] = null);

(statearr_32808_32829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (4))){
var state_32802__$1 = state_32802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32802__$1,(7),ch);
} else {
if((state_val_32803 === (6))){
var inst_32797 = (state_32802[(2)]);
var state_32802__$1 = state_32802;
var statearr_32809_32830 = state_32802__$1;
(statearr_32809_32830[(2)] = inst_32797);

(statearr_32809_32830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (3))){
var inst_32799 = (state_32802[(2)]);
var inst_32800 = cljs.core.async.close_BANG_.call(null,out);
var state_32802__$1 = (function (){var statearr_32810 = state_32802;
(statearr_32810[(9)] = inst_32799);

return statearr_32810;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32802__$1,inst_32800);
} else {
if((state_val_32803 === (2))){
var inst_32779 = (state_32802[(8)]);
var inst_32781 = (inst_32779 < n);
var state_32802__$1 = state_32802;
if(cljs.core.truth_(inst_32781)){
var statearr_32811_32831 = state_32802__$1;
(statearr_32811_32831[(1)] = (4));

} else {
var statearr_32812_32832 = state_32802__$1;
(statearr_32812_32832[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (11))){
var inst_32779 = (state_32802[(8)]);
var inst_32789 = (state_32802[(2)]);
var inst_32790 = (inst_32779 + (1));
var inst_32779__$1 = inst_32790;
var state_32802__$1 = (function (){var statearr_32813 = state_32802;
(statearr_32813[(8)] = inst_32779__$1);

(statearr_32813[(10)] = inst_32789);

return statearr_32813;
})();
var statearr_32814_32833 = state_32802__$1;
(statearr_32814_32833[(2)] = null);

(statearr_32814_32833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (9))){
var state_32802__$1 = state_32802;
var statearr_32815_32834 = state_32802__$1;
(statearr_32815_32834[(2)] = null);

(statearr_32815_32834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (5))){
var state_32802__$1 = state_32802;
var statearr_32816_32835 = state_32802__$1;
(statearr_32816_32835[(2)] = null);

(statearr_32816_32835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (10))){
var inst_32794 = (state_32802[(2)]);
var state_32802__$1 = state_32802;
var statearr_32817_32836 = state_32802__$1;
(statearr_32817_32836[(2)] = inst_32794);

(statearr_32817_32836[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (8))){
var inst_32784 = (state_32802[(7)]);
var state_32802__$1 = state_32802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32802__$1,(11),out,inst_32784);
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
});})(c__25333__auto___32826,out))
;
return ((function (switch__25271__auto__,c__25333__auto___32826,out){
return (function() {
var cljs$core$async$state_machine__25272__auto__ = null;
var cljs$core$async$state_machine__25272__auto____0 = (function (){
var statearr_32821 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32821[(0)] = cljs$core$async$state_machine__25272__auto__);

(statearr_32821[(1)] = (1));

return statearr_32821;
});
var cljs$core$async$state_machine__25272__auto____1 = (function (state_32802){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_32802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e32822){if((e32822 instanceof Object)){
var ex__25275__auto__ = e32822;
var statearr_32823_32837 = state_32802;
(statearr_32823_32837[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32838 = state_32802;
state_32802 = G__32838;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
cljs$core$async$state_machine__25272__auto__ = function(state_32802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25272__auto____1.call(this,state_32802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25272__auto____0;
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25272__auto____1;
return cljs$core$async$state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto___32826,out))
})();
var state__25335__auto__ = (function (){var statearr_32824 = f__25334__auto__.call(null);
(statearr_32824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___32826);

return statearr_32824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto___32826,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t32846 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32846 = (function (map_LT_,f,ch,meta32847){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32847 = meta32847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32848,meta32847__$1){
var self__ = this;
var _32848__$1 = this;
return (new cljs.core.async.t32846(self__.map_LT_,self__.f,self__.ch,meta32847__$1));
});

cljs.core.async.t32846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32848){
var self__ = this;
var _32848__$1 = this;
return self__.meta32847;
});

cljs.core.async.t32846.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32846.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32846.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32846.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32846.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t32849 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32849 = (function (map_LT_,f,ch,meta32847,_,fn1,meta32850){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32847 = meta32847;
this._ = _;
this.fn1 = fn1;
this.meta32850 = meta32850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32851,meta32850__$1){
var self__ = this;
var _32851__$1 = this;
return (new cljs.core.async.t32849(self__.map_LT_,self__.f,self__.ch,self__.meta32847,self__._,self__.fn1,meta32850__$1));
});})(___$1))
;

cljs.core.async.t32849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32851){
var self__ = this;
var _32851__$1 = this;
return self__.meta32850;
});})(___$1))
;

cljs.core.async.t32849.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32849.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t32849.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32839_SHARP_){
return f1.call(null,(((p1__32839_SHARP_ == null))?null:self__.f.call(null,p1__32839_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t32849.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32847","meta32847",-381501285,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32850","meta32850",-1192405735,null)], null);
});})(___$1))
;

cljs.core.async.t32849.cljs$lang$type = true;

cljs.core.async.t32849.cljs$lang$ctorStr = "cljs.core.async/t32849";

cljs.core.async.t32849.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__23815__auto__,writer__23816__auto__,opt__23817__auto__){
return cljs.core._write.call(null,writer__23816__auto__,"cljs.core.async/t32849");
});})(___$1))
;

cljs.core.async.__GT_t32849 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t32849(map_LT___$1,f__$1,ch__$1,meta32847__$1,___$2,fn1__$1,meta32850){
return (new cljs.core.async.t32849(map_LT___$1,f__$1,ch__$1,meta32847__$1,___$2,fn1__$1,meta32850));
});})(___$1))
;

}

return (new cljs.core.async.t32849(self__.map_LT_,self__.f,self__.ch,self__.meta32847,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__23224__auto__ = ret;
if(cljs.core.truth_(and__23224__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__23224__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t32846.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32846.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t32846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32847","meta32847",-381501285,null)], null);
});

cljs.core.async.t32846.cljs$lang$type = true;

cljs.core.async.t32846.cljs$lang$ctorStr = "cljs.core.async/t32846";

cljs.core.async.t32846.cljs$lang$ctorPrWriter = (function (this__23815__auto__,writer__23816__auto__,opt__23817__auto__){
return cljs.core._write.call(null,writer__23816__auto__,"cljs.core.async/t32846");
});

cljs.core.async.__GT_t32846 = (function cljs$core$async$map_LT__$___GT_t32846(map_LT___$1,f__$1,ch__$1,meta32847){
return (new cljs.core.async.t32846(map_LT___$1,f__$1,ch__$1,meta32847));
});

}

return (new cljs.core.async.t32846(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t32855 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32855 = (function (map_GT_,f,ch,meta32856){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32856 = meta32856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32857,meta32856__$1){
var self__ = this;
var _32857__$1 = this;
return (new cljs.core.async.t32855(self__.map_GT_,self__.f,self__.ch,meta32856__$1));
});

cljs.core.async.t32855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32857){
var self__ = this;
var _32857__$1 = this;
return self__.meta32856;
});

cljs.core.async.t32855.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32855.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32855.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32855.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32855.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32855.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t32855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32856","meta32856",-1582388899,null)], null);
});

cljs.core.async.t32855.cljs$lang$type = true;

cljs.core.async.t32855.cljs$lang$ctorStr = "cljs.core.async/t32855";

cljs.core.async.t32855.cljs$lang$ctorPrWriter = (function (this__23815__auto__,writer__23816__auto__,opt__23817__auto__){
return cljs.core._write.call(null,writer__23816__auto__,"cljs.core.async/t32855");
});

cljs.core.async.__GT_t32855 = (function cljs$core$async$map_GT__$___GT_t32855(map_GT___$1,f__$1,ch__$1,meta32856){
return (new cljs.core.async.t32855(map_GT___$1,f__$1,ch__$1,meta32856));
});

}

return (new cljs.core.async.t32855(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t32861 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32861 = (function (filter_GT_,p,ch,meta32862){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32862 = meta32862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32863,meta32862__$1){
var self__ = this;
var _32863__$1 = this;
return (new cljs.core.async.t32861(self__.filter_GT_,self__.p,self__.ch,meta32862__$1));
});

cljs.core.async.t32861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32863){
var self__ = this;
var _32863__$1 = this;
return self__.meta32862;
});

cljs.core.async.t32861.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32861.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32861.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32861.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32861.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32861.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32861.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t32861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32862","meta32862",-475497724,null)], null);
});

cljs.core.async.t32861.cljs$lang$type = true;

cljs.core.async.t32861.cljs$lang$ctorStr = "cljs.core.async/t32861";

cljs.core.async.t32861.cljs$lang$ctorPrWriter = (function (this__23815__auto__,writer__23816__auto__,opt__23817__auto__){
return cljs.core._write.call(null,writer__23816__auto__,"cljs.core.async/t32861");
});

cljs.core.async.__GT_t32861 = (function cljs$core$async$filter_GT__$___GT_t32861(filter_GT___$1,p__$1,ch__$1,meta32862){
return (new cljs.core.async.t32861(filter_GT___$1,p__$1,ch__$1,meta32862));
});

}

return (new cljs.core.async.t32861(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__32865 = arguments.length;
switch (G__32865) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25333__auto___32908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto___32908,out){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto___32908,out){
return (function (state_32886){
var state_val_32887 = (state_32886[(1)]);
if((state_val_32887 === (7))){
var inst_32882 = (state_32886[(2)]);
var state_32886__$1 = state_32886;
var statearr_32888_32909 = state_32886__$1;
(statearr_32888_32909[(2)] = inst_32882);

(statearr_32888_32909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (1))){
var state_32886__$1 = state_32886;
var statearr_32889_32910 = state_32886__$1;
(statearr_32889_32910[(2)] = null);

(statearr_32889_32910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (4))){
var inst_32868 = (state_32886[(7)]);
var inst_32868__$1 = (state_32886[(2)]);
var inst_32869 = (inst_32868__$1 == null);
var state_32886__$1 = (function (){var statearr_32890 = state_32886;
(statearr_32890[(7)] = inst_32868__$1);

return statearr_32890;
})();
if(cljs.core.truth_(inst_32869)){
var statearr_32891_32911 = state_32886__$1;
(statearr_32891_32911[(1)] = (5));

} else {
var statearr_32892_32912 = state_32886__$1;
(statearr_32892_32912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (6))){
var inst_32868 = (state_32886[(7)]);
var inst_32873 = p.call(null,inst_32868);
var state_32886__$1 = state_32886;
if(cljs.core.truth_(inst_32873)){
var statearr_32893_32913 = state_32886__$1;
(statearr_32893_32913[(1)] = (8));

} else {
var statearr_32894_32914 = state_32886__$1;
(statearr_32894_32914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (3))){
var inst_32884 = (state_32886[(2)]);
var state_32886__$1 = state_32886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32886__$1,inst_32884);
} else {
if((state_val_32887 === (2))){
var state_32886__$1 = state_32886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32886__$1,(4),ch);
} else {
if((state_val_32887 === (11))){
var inst_32876 = (state_32886[(2)]);
var state_32886__$1 = state_32886;
var statearr_32895_32915 = state_32886__$1;
(statearr_32895_32915[(2)] = inst_32876);

(statearr_32895_32915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (9))){
var state_32886__$1 = state_32886;
var statearr_32896_32916 = state_32886__$1;
(statearr_32896_32916[(2)] = null);

(statearr_32896_32916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (5))){
var inst_32871 = cljs.core.async.close_BANG_.call(null,out);
var state_32886__$1 = state_32886;
var statearr_32897_32917 = state_32886__$1;
(statearr_32897_32917[(2)] = inst_32871);

(statearr_32897_32917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (10))){
var inst_32879 = (state_32886[(2)]);
var state_32886__$1 = (function (){var statearr_32898 = state_32886;
(statearr_32898[(8)] = inst_32879);

return statearr_32898;
})();
var statearr_32899_32918 = state_32886__$1;
(statearr_32899_32918[(2)] = null);

(statearr_32899_32918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (8))){
var inst_32868 = (state_32886[(7)]);
var state_32886__$1 = state_32886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32886__$1,(11),out,inst_32868);
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
});})(c__25333__auto___32908,out))
;
return ((function (switch__25271__auto__,c__25333__auto___32908,out){
return (function() {
var cljs$core$async$state_machine__25272__auto__ = null;
var cljs$core$async$state_machine__25272__auto____0 = (function (){
var statearr_32903 = [null,null,null,null,null,null,null,null,null];
(statearr_32903[(0)] = cljs$core$async$state_machine__25272__auto__);

(statearr_32903[(1)] = (1));

return statearr_32903;
});
var cljs$core$async$state_machine__25272__auto____1 = (function (state_32886){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_32886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e32904){if((e32904 instanceof Object)){
var ex__25275__auto__ = e32904;
var statearr_32905_32919 = state_32886;
(statearr_32905_32919[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32920 = state_32886;
state_32886 = G__32920;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
cljs$core$async$state_machine__25272__auto__ = function(state_32886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25272__auto____1.call(this,state_32886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25272__auto____0;
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25272__auto____1;
return cljs$core$async$state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto___32908,out))
})();
var state__25335__auto__ = (function (){var statearr_32906 = f__25334__auto__.call(null);
(statearr_32906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___32908);

return statearr_32906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto___32908,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__32922 = arguments.length;
switch (G__32922) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25333__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto__){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto__){
return (function (state_33089){
var state_val_33090 = (state_33089[(1)]);
if((state_val_33090 === (7))){
var inst_33085 = (state_33089[(2)]);
var state_33089__$1 = state_33089;
var statearr_33091_33132 = state_33089__$1;
(statearr_33091_33132[(2)] = inst_33085);

(statearr_33091_33132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (20))){
var inst_33055 = (state_33089[(7)]);
var inst_33066 = (state_33089[(2)]);
var inst_33067 = cljs.core.next.call(null,inst_33055);
var inst_33041 = inst_33067;
var inst_33042 = null;
var inst_33043 = (0);
var inst_33044 = (0);
var state_33089__$1 = (function (){var statearr_33092 = state_33089;
(statearr_33092[(8)] = inst_33042);

(statearr_33092[(9)] = inst_33041);

(statearr_33092[(10)] = inst_33044);

(statearr_33092[(11)] = inst_33043);

(statearr_33092[(12)] = inst_33066);

return statearr_33092;
})();
var statearr_33093_33133 = state_33089__$1;
(statearr_33093_33133[(2)] = null);

(statearr_33093_33133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (1))){
var state_33089__$1 = state_33089;
var statearr_33094_33134 = state_33089__$1;
(statearr_33094_33134[(2)] = null);

(statearr_33094_33134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (4))){
var inst_33030 = (state_33089[(13)]);
var inst_33030__$1 = (state_33089[(2)]);
var inst_33031 = (inst_33030__$1 == null);
var state_33089__$1 = (function (){var statearr_33095 = state_33089;
(statearr_33095[(13)] = inst_33030__$1);

return statearr_33095;
})();
if(cljs.core.truth_(inst_33031)){
var statearr_33096_33135 = state_33089__$1;
(statearr_33096_33135[(1)] = (5));

} else {
var statearr_33097_33136 = state_33089__$1;
(statearr_33097_33136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (15))){
var state_33089__$1 = state_33089;
var statearr_33101_33137 = state_33089__$1;
(statearr_33101_33137[(2)] = null);

(statearr_33101_33137[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (21))){
var state_33089__$1 = state_33089;
var statearr_33102_33138 = state_33089__$1;
(statearr_33102_33138[(2)] = null);

(statearr_33102_33138[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (13))){
var inst_33042 = (state_33089[(8)]);
var inst_33041 = (state_33089[(9)]);
var inst_33044 = (state_33089[(10)]);
var inst_33043 = (state_33089[(11)]);
var inst_33051 = (state_33089[(2)]);
var inst_33052 = (inst_33044 + (1));
var tmp33098 = inst_33042;
var tmp33099 = inst_33041;
var tmp33100 = inst_33043;
var inst_33041__$1 = tmp33099;
var inst_33042__$1 = tmp33098;
var inst_33043__$1 = tmp33100;
var inst_33044__$1 = inst_33052;
var state_33089__$1 = (function (){var statearr_33103 = state_33089;
(statearr_33103[(8)] = inst_33042__$1);

(statearr_33103[(14)] = inst_33051);

(statearr_33103[(9)] = inst_33041__$1);

(statearr_33103[(10)] = inst_33044__$1);

(statearr_33103[(11)] = inst_33043__$1);

return statearr_33103;
})();
var statearr_33104_33139 = state_33089__$1;
(statearr_33104_33139[(2)] = null);

(statearr_33104_33139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (22))){
var state_33089__$1 = state_33089;
var statearr_33105_33140 = state_33089__$1;
(statearr_33105_33140[(2)] = null);

(statearr_33105_33140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (6))){
var inst_33030 = (state_33089[(13)]);
var inst_33039 = f.call(null,inst_33030);
var inst_33040 = cljs.core.seq.call(null,inst_33039);
var inst_33041 = inst_33040;
var inst_33042 = null;
var inst_33043 = (0);
var inst_33044 = (0);
var state_33089__$1 = (function (){var statearr_33106 = state_33089;
(statearr_33106[(8)] = inst_33042);

(statearr_33106[(9)] = inst_33041);

(statearr_33106[(10)] = inst_33044);

(statearr_33106[(11)] = inst_33043);

return statearr_33106;
})();
var statearr_33107_33141 = state_33089__$1;
(statearr_33107_33141[(2)] = null);

(statearr_33107_33141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (17))){
var inst_33055 = (state_33089[(7)]);
var inst_33059 = cljs.core.chunk_first.call(null,inst_33055);
var inst_33060 = cljs.core.chunk_rest.call(null,inst_33055);
var inst_33061 = cljs.core.count.call(null,inst_33059);
var inst_33041 = inst_33060;
var inst_33042 = inst_33059;
var inst_33043 = inst_33061;
var inst_33044 = (0);
var state_33089__$1 = (function (){var statearr_33108 = state_33089;
(statearr_33108[(8)] = inst_33042);

(statearr_33108[(9)] = inst_33041);

(statearr_33108[(10)] = inst_33044);

(statearr_33108[(11)] = inst_33043);

return statearr_33108;
})();
var statearr_33109_33142 = state_33089__$1;
(statearr_33109_33142[(2)] = null);

(statearr_33109_33142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (3))){
var inst_33087 = (state_33089[(2)]);
var state_33089__$1 = state_33089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33089__$1,inst_33087);
} else {
if((state_val_33090 === (12))){
var inst_33075 = (state_33089[(2)]);
var state_33089__$1 = state_33089;
var statearr_33110_33143 = state_33089__$1;
(statearr_33110_33143[(2)] = inst_33075);

(statearr_33110_33143[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (2))){
var state_33089__$1 = state_33089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33089__$1,(4),in$);
} else {
if((state_val_33090 === (23))){
var inst_33083 = (state_33089[(2)]);
var state_33089__$1 = state_33089;
var statearr_33111_33144 = state_33089__$1;
(statearr_33111_33144[(2)] = inst_33083);

(statearr_33111_33144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (19))){
var inst_33070 = (state_33089[(2)]);
var state_33089__$1 = state_33089;
var statearr_33112_33145 = state_33089__$1;
(statearr_33112_33145[(2)] = inst_33070);

(statearr_33112_33145[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (11))){
var inst_33055 = (state_33089[(7)]);
var inst_33041 = (state_33089[(9)]);
var inst_33055__$1 = cljs.core.seq.call(null,inst_33041);
var state_33089__$1 = (function (){var statearr_33113 = state_33089;
(statearr_33113[(7)] = inst_33055__$1);

return statearr_33113;
})();
if(inst_33055__$1){
var statearr_33114_33146 = state_33089__$1;
(statearr_33114_33146[(1)] = (14));

} else {
var statearr_33115_33147 = state_33089__$1;
(statearr_33115_33147[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (9))){
var inst_33077 = (state_33089[(2)]);
var inst_33078 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33089__$1 = (function (){var statearr_33116 = state_33089;
(statearr_33116[(15)] = inst_33077);

return statearr_33116;
})();
if(cljs.core.truth_(inst_33078)){
var statearr_33117_33148 = state_33089__$1;
(statearr_33117_33148[(1)] = (21));

} else {
var statearr_33118_33149 = state_33089__$1;
(statearr_33118_33149[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (5))){
var inst_33033 = cljs.core.async.close_BANG_.call(null,out);
var state_33089__$1 = state_33089;
var statearr_33119_33150 = state_33089__$1;
(statearr_33119_33150[(2)] = inst_33033);

(statearr_33119_33150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (14))){
var inst_33055 = (state_33089[(7)]);
var inst_33057 = cljs.core.chunked_seq_QMARK_.call(null,inst_33055);
var state_33089__$1 = state_33089;
if(inst_33057){
var statearr_33120_33151 = state_33089__$1;
(statearr_33120_33151[(1)] = (17));

} else {
var statearr_33121_33152 = state_33089__$1;
(statearr_33121_33152[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (16))){
var inst_33073 = (state_33089[(2)]);
var state_33089__$1 = state_33089;
var statearr_33122_33153 = state_33089__$1;
(statearr_33122_33153[(2)] = inst_33073);

(statearr_33122_33153[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (10))){
var inst_33042 = (state_33089[(8)]);
var inst_33044 = (state_33089[(10)]);
var inst_33049 = cljs.core._nth.call(null,inst_33042,inst_33044);
var state_33089__$1 = state_33089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33089__$1,(13),out,inst_33049);
} else {
if((state_val_33090 === (18))){
var inst_33055 = (state_33089[(7)]);
var inst_33064 = cljs.core.first.call(null,inst_33055);
var state_33089__$1 = state_33089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33089__$1,(20),out,inst_33064);
} else {
if((state_val_33090 === (8))){
var inst_33044 = (state_33089[(10)]);
var inst_33043 = (state_33089[(11)]);
var inst_33046 = (inst_33044 < inst_33043);
var inst_33047 = inst_33046;
var state_33089__$1 = state_33089;
if(cljs.core.truth_(inst_33047)){
var statearr_33123_33154 = state_33089__$1;
(statearr_33123_33154[(1)] = (10));

} else {
var statearr_33124_33155 = state_33089__$1;
(statearr_33124_33155[(1)] = (11));

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
});})(c__25333__auto__))
;
return ((function (switch__25271__auto__,c__25333__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25272__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25272__auto____0 = (function (){
var statearr_33128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33128[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25272__auto__);

(statearr_33128[(1)] = (1));

return statearr_33128;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25272__auto____1 = (function (state_33089){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_33089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e33129){if((e33129 instanceof Object)){
var ex__25275__auto__ = e33129;
var statearr_33130_33156 = state_33089;
(statearr_33130_33156[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33157 = state_33089;
state_33089 = G__33157;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25272__auto__ = function(state_33089){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25272__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25272__auto____1.call(this,state_33089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25272__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25272__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto__))
})();
var state__25335__auto__ = (function (){var statearr_33131 = f__25334__auto__.call(null);
(statearr_33131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto__);

return statearr_33131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto__))
);

return c__25333__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__33159 = arguments.length;
switch (G__33159) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__33162 = arguments.length;
switch (G__33162) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__33165 = arguments.length;
switch (G__33165) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25333__auto___33215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto___33215,out){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto___33215,out){
return (function (state_33189){
var state_val_33190 = (state_33189[(1)]);
if((state_val_33190 === (7))){
var inst_33184 = (state_33189[(2)]);
var state_33189__$1 = state_33189;
var statearr_33191_33216 = state_33189__$1;
(statearr_33191_33216[(2)] = inst_33184);

(statearr_33191_33216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (1))){
var inst_33166 = null;
var state_33189__$1 = (function (){var statearr_33192 = state_33189;
(statearr_33192[(7)] = inst_33166);

return statearr_33192;
})();
var statearr_33193_33217 = state_33189__$1;
(statearr_33193_33217[(2)] = null);

(statearr_33193_33217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (4))){
var inst_33169 = (state_33189[(8)]);
var inst_33169__$1 = (state_33189[(2)]);
var inst_33170 = (inst_33169__$1 == null);
var inst_33171 = cljs.core.not.call(null,inst_33170);
var state_33189__$1 = (function (){var statearr_33194 = state_33189;
(statearr_33194[(8)] = inst_33169__$1);

return statearr_33194;
})();
if(inst_33171){
var statearr_33195_33218 = state_33189__$1;
(statearr_33195_33218[(1)] = (5));

} else {
var statearr_33196_33219 = state_33189__$1;
(statearr_33196_33219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (6))){
var state_33189__$1 = state_33189;
var statearr_33197_33220 = state_33189__$1;
(statearr_33197_33220[(2)] = null);

(statearr_33197_33220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (3))){
var inst_33186 = (state_33189[(2)]);
var inst_33187 = cljs.core.async.close_BANG_.call(null,out);
var state_33189__$1 = (function (){var statearr_33198 = state_33189;
(statearr_33198[(9)] = inst_33186);

return statearr_33198;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33189__$1,inst_33187);
} else {
if((state_val_33190 === (2))){
var state_33189__$1 = state_33189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33189__$1,(4),ch);
} else {
if((state_val_33190 === (11))){
var inst_33169 = (state_33189[(8)]);
var inst_33178 = (state_33189[(2)]);
var inst_33166 = inst_33169;
var state_33189__$1 = (function (){var statearr_33199 = state_33189;
(statearr_33199[(10)] = inst_33178);

(statearr_33199[(7)] = inst_33166);

return statearr_33199;
})();
var statearr_33200_33221 = state_33189__$1;
(statearr_33200_33221[(2)] = null);

(statearr_33200_33221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (9))){
var inst_33169 = (state_33189[(8)]);
var state_33189__$1 = state_33189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33189__$1,(11),out,inst_33169);
} else {
if((state_val_33190 === (5))){
var inst_33169 = (state_33189[(8)]);
var inst_33166 = (state_33189[(7)]);
var inst_33173 = cljs.core._EQ_.call(null,inst_33169,inst_33166);
var state_33189__$1 = state_33189;
if(inst_33173){
var statearr_33202_33222 = state_33189__$1;
(statearr_33202_33222[(1)] = (8));

} else {
var statearr_33203_33223 = state_33189__$1;
(statearr_33203_33223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (10))){
var inst_33181 = (state_33189[(2)]);
var state_33189__$1 = state_33189;
var statearr_33204_33224 = state_33189__$1;
(statearr_33204_33224[(2)] = inst_33181);

(statearr_33204_33224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (8))){
var inst_33166 = (state_33189[(7)]);
var tmp33201 = inst_33166;
var inst_33166__$1 = tmp33201;
var state_33189__$1 = (function (){var statearr_33205 = state_33189;
(statearr_33205[(7)] = inst_33166__$1);

return statearr_33205;
})();
var statearr_33206_33225 = state_33189__$1;
(statearr_33206_33225[(2)] = null);

(statearr_33206_33225[(1)] = (2));


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
});})(c__25333__auto___33215,out))
;
return ((function (switch__25271__auto__,c__25333__auto___33215,out){
return (function() {
var cljs$core$async$state_machine__25272__auto__ = null;
var cljs$core$async$state_machine__25272__auto____0 = (function (){
var statearr_33210 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33210[(0)] = cljs$core$async$state_machine__25272__auto__);

(statearr_33210[(1)] = (1));

return statearr_33210;
});
var cljs$core$async$state_machine__25272__auto____1 = (function (state_33189){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_33189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e33211){if((e33211 instanceof Object)){
var ex__25275__auto__ = e33211;
var statearr_33212_33226 = state_33189;
(statearr_33212_33226[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33227 = state_33189;
state_33189 = G__33227;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
cljs$core$async$state_machine__25272__auto__ = function(state_33189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25272__auto____1.call(this,state_33189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25272__auto____0;
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25272__auto____1;
return cljs$core$async$state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto___33215,out))
})();
var state__25335__auto__ = (function (){var statearr_33213 = f__25334__auto__.call(null);
(statearr_33213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___33215);

return statearr_33213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto___33215,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__33229 = arguments.length;
switch (G__33229) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25333__auto___33298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto___33298,out){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto___33298,out){
return (function (state_33267){
var state_val_33268 = (state_33267[(1)]);
if((state_val_33268 === (7))){
var inst_33263 = (state_33267[(2)]);
var state_33267__$1 = state_33267;
var statearr_33269_33299 = state_33267__$1;
(statearr_33269_33299[(2)] = inst_33263);

(statearr_33269_33299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (1))){
var inst_33230 = (new Array(n));
var inst_33231 = inst_33230;
var inst_33232 = (0);
var state_33267__$1 = (function (){var statearr_33270 = state_33267;
(statearr_33270[(7)] = inst_33231);

(statearr_33270[(8)] = inst_33232);

return statearr_33270;
})();
var statearr_33271_33300 = state_33267__$1;
(statearr_33271_33300[(2)] = null);

(statearr_33271_33300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (4))){
var inst_33235 = (state_33267[(9)]);
var inst_33235__$1 = (state_33267[(2)]);
var inst_33236 = (inst_33235__$1 == null);
var inst_33237 = cljs.core.not.call(null,inst_33236);
var state_33267__$1 = (function (){var statearr_33272 = state_33267;
(statearr_33272[(9)] = inst_33235__$1);

return statearr_33272;
})();
if(inst_33237){
var statearr_33273_33301 = state_33267__$1;
(statearr_33273_33301[(1)] = (5));

} else {
var statearr_33274_33302 = state_33267__$1;
(statearr_33274_33302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (15))){
var inst_33257 = (state_33267[(2)]);
var state_33267__$1 = state_33267;
var statearr_33275_33303 = state_33267__$1;
(statearr_33275_33303[(2)] = inst_33257);

(statearr_33275_33303[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (13))){
var state_33267__$1 = state_33267;
var statearr_33276_33304 = state_33267__$1;
(statearr_33276_33304[(2)] = null);

(statearr_33276_33304[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (6))){
var inst_33232 = (state_33267[(8)]);
var inst_33253 = (inst_33232 > (0));
var state_33267__$1 = state_33267;
if(cljs.core.truth_(inst_33253)){
var statearr_33277_33305 = state_33267__$1;
(statearr_33277_33305[(1)] = (12));

} else {
var statearr_33278_33306 = state_33267__$1;
(statearr_33278_33306[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (3))){
var inst_33265 = (state_33267[(2)]);
var state_33267__$1 = state_33267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33267__$1,inst_33265);
} else {
if((state_val_33268 === (12))){
var inst_33231 = (state_33267[(7)]);
var inst_33255 = cljs.core.vec.call(null,inst_33231);
var state_33267__$1 = state_33267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33267__$1,(15),out,inst_33255);
} else {
if((state_val_33268 === (2))){
var state_33267__$1 = state_33267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33267__$1,(4),ch);
} else {
if((state_val_33268 === (11))){
var inst_33247 = (state_33267[(2)]);
var inst_33248 = (new Array(n));
var inst_33231 = inst_33248;
var inst_33232 = (0);
var state_33267__$1 = (function (){var statearr_33279 = state_33267;
(statearr_33279[(7)] = inst_33231);

(statearr_33279[(10)] = inst_33247);

(statearr_33279[(8)] = inst_33232);

return statearr_33279;
})();
var statearr_33280_33307 = state_33267__$1;
(statearr_33280_33307[(2)] = null);

(statearr_33280_33307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (9))){
var inst_33231 = (state_33267[(7)]);
var inst_33245 = cljs.core.vec.call(null,inst_33231);
var state_33267__$1 = state_33267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33267__$1,(11),out,inst_33245);
} else {
if((state_val_33268 === (5))){
var inst_33231 = (state_33267[(7)]);
var inst_33235 = (state_33267[(9)]);
var inst_33240 = (state_33267[(11)]);
var inst_33232 = (state_33267[(8)]);
var inst_33239 = (inst_33231[inst_33232] = inst_33235);
var inst_33240__$1 = (inst_33232 + (1));
var inst_33241 = (inst_33240__$1 < n);
var state_33267__$1 = (function (){var statearr_33281 = state_33267;
(statearr_33281[(12)] = inst_33239);

(statearr_33281[(11)] = inst_33240__$1);

return statearr_33281;
})();
if(cljs.core.truth_(inst_33241)){
var statearr_33282_33308 = state_33267__$1;
(statearr_33282_33308[(1)] = (8));

} else {
var statearr_33283_33309 = state_33267__$1;
(statearr_33283_33309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (14))){
var inst_33260 = (state_33267[(2)]);
var inst_33261 = cljs.core.async.close_BANG_.call(null,out);
var state_33267__$1 = (function (){var statearr_33285 = state_33267;
(statearr_33285[(13)] = inst_33260);

return statearr_33285;
})();
var statearr_33286_33310 = state_33267__$1;
(statearr_33286_33310[(2)] = inst_33261);

(statearr_33286_33310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (10))){
var inst_33251 = (state_33267[(2)]);
var state_33267__$1 = state_33267;
var statearr_33287_33311 = state_33267__$1;
(statearr_33287_33311[(2)] = inst_33251);

(statearr_33287_33311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (8))){
var inst_33231 = (state_33267[(7)]);
var inst_33240 = (state_33267[(11)]);
var tmp33284 = inst_33231;
var inst_33231__$1 = tmp33284;
var inst_33232 = inst_33240;
var state_33267__$1 = (function (){var statearr_33288 = state_33267;
(statearr_33288[(7)] = inst_33231__$1);

(statearr_33288[(8)] = inst_33232);

return statearr_33288;
})();
var statearr_33289_33312 = state_33267__$1;
(statearr_33289_33312[(2)] = null);

(statearr_33289_33312[(1)] = (2));


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
});})(c__25333__auto___33298,out))
;
return ((function (switch__25271__auto__,c__25333__auto___33298,out){
return (function() {
var cljs$core$async$state_machine__25272__auto__ = null;
var cljs$core$async$state_machine__25272__auto____0 = (function (){
var statearr_33293 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33293[(0)] = cljs$core$async$state_machine__25272__auto__);

(statearr_33293[(1)] = (1));

return statearr_33293;
});
var cljs$core$async$state_machine__25272__auto____1 = (function (state_33267){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_33267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e33294){if((e33294 instanceof Object)){
var ex__25275__auto__ = e33294;
var statearr_33295_33313 = state_33267;
(statearr_33295_33313[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33314 = state_33267;
state_33267 = G__33314;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
cljs$core$async$state_machine__25272__auto__ = function(state_33267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25272__auto____1.call(this,state_33267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25272__auto____0;
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25272__auto____1;
return cljs$core$async$state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto___33298,out))
})();
var state__25335__auto__ = (function (){var statearr_33296 = f__25334__auto__.call(null);
(statearr_33296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___33298);

return statearr_33296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto___33298,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__33316 = arguments.length;
switch (G__33316) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25333__auto___33389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25333__auto___33389,out){
return (function (){
var f__25334__auto__ = (function (){var switch__25271__auto__ = ((function (c__25333__auto___33389,out){
return (function (state_33358){
var state_val_33359 = (state_33358[(1)]);
if((state_val_33359 === (7))){
var inst_33354 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
var statearr_33360_33390 = state_33358__$1;
(statearr_33360_33390[(2)] = inst_33354);

(statearr_33360_33390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (1))){
var inst_33317 = [];
var inst_33318 = inst_33317;
var inst_33319 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33358__$1 = (function (){var statearr_33361 = state_33358;
(statearr_33361[(7)] = inst_33318);

(statearr_33361[(8)] = inst_33319);

return statearr_33361;
})();
var statearr_33362_33391 = state_33358__$1;
(statearr_33362_33391[(2)] = null);

(statearr_33362_33391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (4))){
var inst_33322 = (state_33358[(9)]);
var inst_33322__$1 = (state_33358[(2)]);
var inst_33323 = (inst_33322__$1 == null);
var inst_33324 = cljs.core.not.call(null,inst_33323);
var state_33358__$1 = (function (){var statearr_33363 = state_33358;
(statearr_33363[(9)] = inst_33322__$1);

return statearr_33363;
})();
if(inst_33324){
var statearr_33364_33392 = state_33358__$1;
(statearr_33364_33392[(1)] = (5));

} else {
var statearr_33365_33393 = state_33358__$1;
(statearr_33365_33393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (15))){
var inst_33348 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
var statearr_33366_33394 = state_33358__$1;
(statearr_33366_33394[(2)] = inst_33348);

(statearr_33366_33394[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (13))){
var state_33358__$1 = state_33358;
var statearr_33367_33395 = state_33358__$1;
(statearr_33367_33395[(2)] = null);

(statearr_33367_33395[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (6))){
var inst_33318 = (state_33358[(7)]);
var inst_33343 = inst_33318.length;
var inst_33344 = (inst_33343 > (0));
var state_33358__$1 = state_33358;
if(cljs.core.truth_(inst_33344)){
var statearr_33368_33396 = state_33358__$1;
(statearr_33368_33396[(1)] = (12));

} else {
var statearr_33369_33397 = state_33358__$1;
(statearr_33369_33397[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (3))){
var inst_33356 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33358__$1,inst_33356);
} else {
if((state_val_33359 === (12))){
var inst_33318 = (state_33358[(7)]);
var inst_33346 = cljs.core.vec.call(null,inst_33318);
var state_33358__$1 = state_33358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33358__$1,(15),out,inst_33346);
} else {
if((state_val_33359 === (2))){
var state_33358__$1 = state_33358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33358__$1,(4),ch);
} else {
if((state_val_33359 === (11))){
var inst_33326 = (state_33358[(10)]);
var inst_33322 = (state_33358[(9)]);
var inst_33336 = (state_33358[(2)]);
var inst_33337 = [];
var inst_33338 = inst_33337.push(inst_33322);
var inst_33318 = inst_33337;
var inst_33319 = inst_33326;
var state_33358__$1 = (function (){var statearr_33370 = state_33358;
(statearr_33370[(11)] = inst_33336);

(statearr_33370[(7)] = inst_33318);

(statearr_33370[(8)] = inst_33319);

(statearr_33370[(12)] = inst_33338);

return statearr_33370;
})();
var statearr_33371_33398 = state_33358__$1;
(statearr_33371_33398[(2)] = null);

(statearr_33371_33398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (9))){
var inst_33318 = (state_33358[(7)]);
var inst_33334 = cljs.core.vec.call(null,inst_33318);
var state_33358__$1 = state_33358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33358__$1,(11),out,inst_33334);
} else {
if((state_val_33359 === (5))){
var inst_33319 = (state_33358[(8)]);
var inst_33326 = (state_33358[(10)]);
var inst_33322 = (state_33358[(9)]);
var inst_33326__$1 = f.call(null,inst_33322);
var inst_33327 = cljs.core._EQ_.call(null,inst_33326__$1,inst_33319);
var inst_33328 = cljs.core.keyword_identical_QMARK_.call(null,inst_33319,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33329 = (inst_33327) || (inst_33328);
var state_33358__$1 = (function (){var statearr_33372 = state_33358;
(statearr_33372[(10)] = inst_33326__$1);

return statearr_33372;
})();
if(cljs.core.truth_(inst_33329)){
var statearr_33373_33399 = state_33358__$1;
(statearr_33373_33399[(1)] = (8));

} else {
var statearr_33374_33400 = state_33358__$1;
(statearr_33374_33400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (14))){
var inst_33351 = (state_33358[(2)]);
var inst_33352 = cljs.core.async.close_BANG_.call(null,out);
var state_33358__$1 = (function (){var statearr_33376 = state_33358;
(statearr_33376[(13)] = inst_33351);

return statearr_33376;
})();
var statearr_33377_33401 = state_33358__$1;
(statearr_33377_33401[(2)] = inst_33352);

(statearr_33377_33401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (10))){
var inst_33341 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
var statearr_33378_33402 = state_33358__$1;
(statearr_33378_33402[(2)] = inst_33341);

(statearr_33378_33402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (8))){
var inst_33318 = (state_33358[(7)]);
var inst_33326 = (state_33358[(10)]);
var inst_33322 = (state_33358[(9)]);
var inst_33331 = inst_33318.push(inst_33322);
var tmp33375 = inst_33318;
var inst_33318__$1 = tmp33375;
var inst_33319 = inst_33326;
var state_33358__$1 = (function (){var statearr_33379 = state_33358;
(statearr_33379[(7)] = inst_33318__$1);

(statearr_33379[(8)] = inst_33319);

(statearr_33379[(14)] = inst_33331);

return statearr_33379;
})();
var statearr_33380_33403 = state_33358__$1;
(statearr_33380_33403[(2)] = null);

(statearr_33380_33403[(1)] = (2));


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
});})(c__25333__auto___33389,out))
;
return ((function (switch__25271__auto__,c__25333__auto___33389,out){
return (function() {
var cljs$core$async$state_machine__25272__auto__ = null;
var cljs$core$async$state_machine__25272__auto____0 = (function (){
var statearr_33384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33384[(0)] = cljs$core$async$state_machine__25272__auto__);

(statearr_33384[(1)] = (1));

return statearr_33384;
});
var cljs$core$async$state_machine__25272__auto____1 = (function (state_33358){
while(true){
var ret_value__25273__auto__ = (function (){try{while(true){
var result__25274__auto__ = switch__25271__auto__.call(null,state_33358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25274__auto__;
}
break;
}
}catch (e33385){if((e33385 instanceof Object)){
var ex__25275__auto__ = e33385;
var statearr_33386_33404 = state_33358;
(statearr_33386_33404[(5)] = ex__25275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33405 = state_33358;
state_33358 = G__33405;
continue;
} else {
return ret_value__25273__auto__;
}
break;
}
});
cljs$core$async$state_machine__25272__auto__ = function(state_33358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25272__auto____1.call(this,state_33358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25272__auto____0;
cljs$core$async$state_machine__25272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25272__auto____1;
return cljs$core$async$state_machine__25272__auto__;
})()
;})(switch__25271__auto__,c__25333__auto___33389,out))
})();
var state__25335__auto__ = (function (){var statearr_33387 = f__25334__auto__.call(null);
(statearr_33387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25333__auto___33389);

return statearr_33387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25335__auto__);
});})(c__25333__auto___33389,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map