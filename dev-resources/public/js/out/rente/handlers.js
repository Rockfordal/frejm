// Compiled by ClojureScript 0.0-3308 {}
goog.provide('rente.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('rente.db');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return rente.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"phones","phones",232561938),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"search-input","search-input",-576916149),"",new cljs.core.Keyword(null,"order-prop","order-prop",-1545508264),"name",new cljs.core.Keyword(null,"messages","messages",345434482),"inga"], null);
}));

//# sourceMappingURL=handlers.js.map