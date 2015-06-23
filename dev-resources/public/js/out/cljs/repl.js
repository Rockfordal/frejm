// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34719_34731 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34720_34732 = null;
var count__34721_34733 = (0);
var i__34722_34734 = (0);
while(true){
if((i__34722_34734 < count__34721_34733)){
var f_34735 = cljs.core._nth.call(null,chunk__34720_34732,i__34722_34734);
cljs.core.println.call(null,"  ",f_34735);

var G__34736 = seq__34719_34731;
var G__34737 = chunk__34720_34732;
var G__34738 = count__34721_34733;
var G__34739 = (i__34722_34734 + (1));
seq__34719_34731 = G__34736;
chunk__34720_34732 = G__34737;
count__34721_34733 = G__34738;
i__34722_34734 = G__34739;
continue;
} else {
var temp__4423__auto___34740 = cljs.core.seq.call(null,seq__34719_34731);
if(temp__4423__auto___34740){
var seq__34719_34741__$1 = temp__4423__auto___34740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34719_34741__$1)){
var c__24021__auto___34742 = cljs.core.chunk_first.call(null,seq__34719_34741__$1);
var G__34743 = cljs.core.chunk_rest.call(null,seq__34719_34741__$1);
var G__34744 = c__24021__auto___34742;
var G__34745 = cljs.core.count.call(null,c__24021__auto___34742);
var G__34746 = (0);
seq__34719_34731 = G__34743;
chunk__34720_34732 = G__34744;
count__34721_34733 = G__34745;
i__34722_34734 = G__34746;
continue;
} else {
var f_34747 = cljs.core.first.call(null,seq__34719_34741__$1);
cljs.core.println.call(null,"  ",f_34747);

var G__34748 = cljs.core.next.call(null,seq__34719_34741__$1);
var G__34749 = null;
var G__34750 = (0);
var G__34751 = (0);
seq__34719_34731 = G__34748;
chunk__34720_34732 = G__34749;
count__34721_34733 = G__34750;
i__34722_34734 = G__34751;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34752 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__23236__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__23236__auto__)){
return or__23236__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34752);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34752)))?cljs.core.second.call(null,arglists_34752):arglists_34752));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34723 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34724 = null;
var count__34725 = (0);
var i__34726 = (0);
while(true){
if((i__34726 < count__34725)){
var vec__34727 = cljs.core._nth.call(null,chunk__34724,i__34726);
var name = cljs.core.nth.call(null,vec__34727,(0),null);
var map__34728 = cljs.core.nth.call(null,vec__34727,(1),null);
var map__34728__$1 = ((cljs.core.seq_QMARK_.call(null,map__34728))?cljs.core.apply.call(null,cljs.core.hash_map,map__34728):map__34728);
var doc = cljs.core.get.call(null,map__34728__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__34728__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__34753 = seq__34723;
var G__34754 = chunk__34724;
var G__34755 = count__34725;
var G__34756 = (i__34726 + (1));
seq__34723 = G__34753;
chunk__34724 = G__34754;
count__34725 = G__34755;
i__34726 = G__34756;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__34723);
if(temp__4423__auto__){
var seq__34723__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34723__$1)){
var c__24021__auto__ = cljs.core.chunk_first.call(null,seq__34723__$1);
var G__34757 = cljs.core.chunk_rest.call(null,seq__34723__$1);
var G__34758 = c__24021__auto__;
var G__34759 = cljs.core.count.call(null,c__24021__auto__);
var G__34760 = (0);
seq__34723 = G__34757;
chunk__34724 = G__34758;
count__34725 = G__34759;
i__34726 = G__34760;
continue;
} else {
var vec__34729 = cljs.core.first.call(null,seq__34723__$1);
var name = cljs.core.nth.call(null,vec__34729,(0),null);
var map__34730 = cljs.core.nth.call(null,vec__34729,(1),null);
var map__34730__$1 = ((cljs.core.seq_QMARK_.call(null,map__34730))?cljs.core.apply.call(null,cljs.core.hash_map,map__34730):map__34730);
var doc = cljs.core.get.call(null,map__34730__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__34730__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__34761 = cljs.core.next.call(null,seq__34723__$1);
var G__34762 = null;
var G__34763 = (0);
var G__34764 = (0);
seq__34723 = G__34761;
chunk__34724 = G__34762;
count__34725 = G__34763;
i__34726 = G__34764;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map