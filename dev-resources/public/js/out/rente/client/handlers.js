// Compiled by ClojureScript 0.0-3308 {}
goog.provide('rente.client.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('rente.client.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
rente.client.handlers.Query = Parse.Query;
/**
 * Fix an arguments object, turning it into a normal javascript array
 */
rente.client.handlers.fix_arguments = (function rente$client$handlers$fix_arguments(args){
return Array.prototype.slice.call(args);
});
rente.client.handlers.find = (function rente$client$handlers$find(query){
var ch = cljs.core.async.chan.call(null,(1));
query.find(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["success",((function (ch){
return (function (objects){
cljs.core.async.put_BANG_.call(null,ch,cljs.core.first.call(null,rente.client.handlers.fix_arguments.call(null,objects)));

return cljs.core.async.close_BANG_.call(null,ch);
});})(ch))
,"error",((function (ch){
return (function (error){
cljs.core.async.put_BANG_.call(null,ch,"error");

return cljs.core.async.close_BANG_.call(null,ch);
});})(ch))
], null)));

return ch;
});
rente.client.handlers.count = (function rente$client$handlers$count(query){
var ch = cljs.core.async.chan.call(null,(1));
query.count(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["success",((function (ch){
return (function (count__$1){
cljs.core.async.put_BANG_.call(null,ch,count__$1);

return cljs.core.async.close_BANG_.call(null,ch);
});})(ch))
,"error",((function (ch){
return (function (error){
cljs.core.async.put_BANG_.call(null,ch,error);

return cljs.core.async.close_BANG_.call(null,ch);
});})(ch))
], null)));

return ch;
});
rente.client.handlers.count_all = (function rente$client$handlers$count_all(cls){
return rente.client.handlers.count.call(null,(new rente.client.handlers.Query(cls)));
});
rente.client.handlers.find_all = (function rente$client$handlers$find_all(cls){
return rente.client.handlers.find.call(null,(new rente.client.handlers.Query(cls)));
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return rente.client.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__30111){
var vec__30112 = p__30111;
var _ = cljs.core.nth.call(null,vec__30112,(0),null);
var active_panel = cljs.core.nth.call(null,vec__30112,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"testa","testa",1028021574),(function (db,p__30113){
var vec__30114 = p__30113;
var _ = cljs.core.nth.call(null,vec__30114,(0),null);
var test = cljs.core.nth.call(null,vec__30114,(1),null);
console.log([cljs.core.str("test: "),cljs.core.str(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(db))].join(''));

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"getclojure","getclojure",-606848116),(function (db,_){
var Course_30115 = Parse.Object.extend("course");
var query_30116 = (new rente.client.handlers.Query(Course_30115));
query_30116.get("W8uc91QYJL",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["success",((function (Course_30115,query_30116){
return (function (kurs){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-getcourse-response","process-getcourse-response",-880361683),cljs.core.js__GT_clj.call(null,kurs)], null));
});})(Course_30115,query_30116))
,"error",((function (Course_30115,query_30116){
return (function (obj,err){
return console.log([cljs.core.str("Fel i :getclojure!"),cljs.core.str(err)].join(''));
});})(Course_30115,query_30116))
], null)));

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"getjs","getjs",-1808733370),(function (db,_){
var Course_30117 = Parse.Object.extend("course");
var query_30118 = (new rente.client.handlers.Query(Course_30117));
query_30118.get("NXp23QnLVW",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["success",((function (Course_30117,query_30118){
return (function (kurs){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-getcourse-response","process-getcourse-response",-880361683),cljs.core.js__GT_clj.call(null,kurs)], null));
});})(Course_30117,query_30118))
,"error",((function (Course_30117,query_30118){
return (function (obj,err){
return console.log([cljs.core.str("Fel i :getjs!"),cljs.core.str(err)].join(''));
});})(Course_30117,query_30118))
], null)));

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"getcourses","getcourses",-799959167),(function (db,_){
var Course_30119 = Parse.Object.extend("course");
var query_30120 = (new rente.client.handlers.Query(Course_30119));
query_30120.find(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["success",((function (Course_30119,query_30120){
return (function (kurser){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-getcourses-response","process-getcourses-response",-939125680),kurser], null));
});})(Course_30119,query_30120))
,"error",((function (Course_30119,query_30120){
return (function (obj,err){
return console.log([cljs.core.str("Fel i :getcourses!"),cljs.core.str(err)].join(''));
});})(Course_30119,query_30120))
], null)));

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"process-getcourse-response","process-getcourse-response",-880361683),(function (db,p__30121){
var vec__30122 = p__30121;
var _ = cljs.core.nth.call(null,vec__30122,(0),null);
var res = cljs.core.nth.call(null,vec__30122,(1),null);
if(cljs.core.truth_(res)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"test","test",577538877),cljs.core.js__GT_clj.call(null,res.attributes,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
} else {
return alert("fick ingen kurs");
}
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"getkurssnabb","getkurssnabb",673422667),(function (db,p__30123,nyakurser){
var vec__30124 = p__30123;
var _ = cljs.core.nth.call(null,vec__30124,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"kurser","kurser",-1596974538),nyakurser);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"process-getcourses-response","process-getcourses-response",-939125680),(function (db,p__30125){
var vec__30126 = p__30125;
var _ = cljs.core.nth.call(null,vec__30126,(0),null);
var res = cljs.core.nth.call(null,vec__30126,(1),null);
if(cljs.core.truth_(res)){
var kurser_30127 = cljs.core.js__GT_clj.call(null,res,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
console.log(cljs.core.clj__GT_js.call(null,kurser_30127).length);

console.log(cljs.core.clj__GT_js.call(null,kurser_30127));
} else {
alert("fick inga kurser");
}

return db;
}));

//# sourceMappingURL=handlers.js.map