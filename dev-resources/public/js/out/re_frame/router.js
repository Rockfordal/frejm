// Compiled by ClojureScript 0.0-3308 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.handlers');
goog.require('re_frame.utils');
goog.require('cljs.core.async');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__26477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26477__auto__){
return (function (){
var f__26478__auto__ = (function (){var switch__26415__auto__ = ((function (c__26477__auto__){
return (function (state_31548){
var state_val_31549 = (state_31548[(1)]);
if((state_val_31549 === (7))){
var inst_31533 = (state_31548[(2)]);
var state_31548__$1 = (function (){var statearr_31550 = state_31548;
(statearr_31550[(7)] = inst_31533);

return statearr_31550;
})();
var statearr_31551_31571 = state_31548__$1;
(statearr_31551_31571[(2)] = null);

(statearr_31551_31571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (1))){
var state_31548__$1 = state_31548;
var statearr_31552_31572 = state_31548__$1;
(statearr_31552_31572[(2)] = null);

(statearr_31552_31572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (4))){
var inst_31520 = (state_31548[(8)]);
var inst_31520__$1 = (state_31548[(2)]);
var inst_31521 = cljs.core.meta.call(null,inst_31520__$1);
var inst_31522 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_31521);
var state_31548__$1 = (function (){var statearr_31553 = state_31548;
(statearr_31553[(8)] = inst_31520__$1);

return statearr_31553;
})();
if(cljs.core.truth_(inst_31522)){
var statearr_31554_31573 = state_31548__$1;
(statearr_31554_31573[(1)] = (5));

} else {
var statearr_31555_31574 = state_31548__$1;
(statearr_31555_31574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (6))){
var inst_31529 = cljs.core.async.timeout.call(null,(0));
var state_31548__$1 = state_31548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31548__$1,(9),inst_31529);
} else {
if((state_val_31549 === (3))){
var inst_31546 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31548__$1,inst_31546);
} else {
if((state_val_31549 === (12))){
var inst_31520 = (state_31548[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31548,(11),Object,null,(10));
var inst_31541 = re_frame.handlers.handle.call(null,inst_31520);
var state_31548__$1 = state_31548;
var statearr_31556_31575 = state_31548__$1;
(statearr_31556_31575[(2)] = inst_31541);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31548__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (2))){
var state_31548__$1 = state_31548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31548__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_31549 === (11))){
var inst_31534 = (state_31548[(2)]);
var inst_31535 = re_frame.router.purge_chan.call(null);
var inst_31536 = re_frame$router$router_loop.call(null);
var inst_31537 = (function(){throw inst_31534})();
var state_31548__$1 = (function (){var statearr_31557 = state_31548;
(statearr_31557[(9)] = inst_31535);

(statearr_31557[(10)] = inst_31536);

return statearr_31557;
})();
var statearr_31558_31576 = state_31548__$1;
(statearr_31558_31576[(2)] = inst_31537);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31548__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (9))){
var inst_31531 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
var statearr_31559_31577 = state_31548__$1;
(statearr_31559_31577[(2)] = inst_31531);

(statearr_31559_31577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (5))){
var inst_31524 = reagent.core.flush.call(null);
var inst_31525 = cljs.core.async.timeout.call(null,(20));
var state_31548__$1 = (function (){var statearr_31560 = state_31548;
(statearr_31560[(11)] = inst_31524);

return statearr_31560;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31548__$1,(8),inst_31525);
} else {
if((state_val_31549 === (10))){
var inst_31543 = (state_31548[(2)]);
var state_31548__$1 = (function (){var statearr_31561 = state_31548;
(statearr_31561[(12)] = inst_31543);

return statearr_31561;
})();
var statearr_31562_31578 = state_31548__$1;
(statearr_31562_31578[(2)] = null);

(statearr_31562_31578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (8))){
var inst_31527 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
var statearr_31563_31579 = state_31548__$1;
(statearr_31563_31579[(2)] = inst_31527);

(statearr_31563_31579[(1)] = (7));


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
});})(c__26477__auto__))
;
return ((function (switch__26415__auto__,c__26477__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__26416__auto__ = null;
var re_frame$router$router_loop_$_state_machine__26416__auto____0 = (function (){
var statearr_31567 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31567[(0)] = re_frame$router$router_loop_$_state_machine__26416__auto__);

(statearr_31567[(1)] = (1));

return statearr_31567;
});
var re_frame$router$router_loop_$_state_machine__26416__auto____1 = (function (state_31548){
while(true){
var ret_value__26417__auto__ = (function (){try{while(true){
var result__26418__auto__ = switch__26415__auto__.call(null,state_31548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26418__auto__;
}
break;
}
}catch (e31568){if((e31568 instanceof Object)){
var ex__26419__auto__ = e31568;
var statearr_31569_31580 = state_31548;
(statearr_31569_31580[(5)] = ex__26419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31581 = state_31548;
state_31548 = G__31581;
continue;
} else {
return ret_value__26417__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__26416__auto__ = function(state_31548){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__26416__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__26416__auto____1.call(this,state_31548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__26416__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__26416__auto____0;
re_frame$router$router_loop_$_state_machine__26416__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__26416__auto____1;
return re_frame$router$router_loop_$_state_machine__26416__auto__;
})()
;})(switch__26415__auto__,c__26477__auto__))
})();
var state__26479__auto__ = (function (){var statearr_31570 = f__26478__auto__.call(null);
(statearr_31570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26477__auto__);

return statearr_31570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26479__auto__);
});})(c__26477__auto__))
);

return c__26477__auto__;
});
re_frame.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 * 
 * Usage example:
 * (dispatch [:delete-item 42])
 * 
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 * use of core.async/chan.
 * 
 * Usage example:
 * (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map