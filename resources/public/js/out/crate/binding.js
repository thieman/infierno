// Compiled by ClojureScript 0.0-2411
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__17181 = this$__$1;
return goog.getUid(G__17181);
});

crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__17182 = cljs.core.seq(self__.watches);
var chunk__17183 = null;
var count__17184 = (0);
var i__17185 = (0);
while(true){
if((i__17185 < count__17184)){
var vec__17186 = chunk__17183.cljs$core$IIndexed$_nth$arity$2(null,i__17185);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17186,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17186,(1),null);
var G__17187_17198 = key__$1;
var G__17188_17199 = this$__$1;
var G__17189_17200 = oldval;
var G__17190_17201 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17187_17198,G__17188_17199,G__17189_17200,G__17190_17201) : f.call(null,G__17187_17198,G__17188_17199,G__17189_17200,G__17190_17201));

var G__17202 = seq__17182;
var G__17203 = chunk__17183;
var G__17204 = count__17184;
var G__17205 = (i__17185 + (1));
seq__17182 = G__17202;
chunk__17183 = G__17203;
count__17184 = G__17204;
i__17185 = G__17205;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__17182);
if(temp__4126__auto__){
var seq__17182__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17182__$1)){
var c__4390__auto__ = cljs.core.chunk_first(seq__17182__$1);
var G__17206 = cljs.core.chunk_rest(seq__17182__$1);
var G__17207 = c__4390__auto__;
var G__17208 = cljs.core.count(c__4390__auto__);
var G__17209 = (0);
seq__17182 = G__17206;
chunk__17183 = G__17207;
count__17184 = G__17208;
i__17185 = G__17209;
continue;
} else {
var vec__17191 = cljs.core.first(seq__17182__$1);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17191,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17191,(1),null);
var G__17192_17210 = key__$1;
var G__17193_17211 = this$__$1;
var G__17194_17212 = oldval;
var G__17195_17213 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17192_17210,G__17193_17211,G__17194_17212,G__17195_17213) : f.call(null,G__17192_17210,G__17193_17211,G__17194_17212,G__17195_17213));

var G__17214 = cljs.core.next(seq__17182__$1);
var G__17215 = null;
var G__17216 = (0);
var G__17217 = (0);
seq__17182 = G__17214;
chunk__17183 = G__17215;
count__17184 = G__17216;
i__17185 = G__17217;
continue;
}
} else {
return null;
}
}
break;
}
});

crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(f)){
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key__$1,f);
} else {
return null;
}
});

crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key__$1);
});

crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17196 = self__.atm;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17196) : cljs.core.deref.call(null,G__17196));
})(),self__.path)], 0))),cljs.core.str(">")].join(''));
});

crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.atm)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17197 = self__.atm;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17197) : cljs.core.deref.call(null,G__17197));
})(),self__.path);
} else {
return null;
}
});

crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

crate.binding.SubAtom.cljs$lang$type = true;

crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";

crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"crate.binding/SubAtom");
});

crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){
return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});

crate.binding.subatom = (function subatom(atm,path){
var path__$1 = ((cljs.core.coll_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var vec__17220 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));
var atm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17220,(0),null);
var path__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17220,(1),null);
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("subatom");
var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17221 = atm__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17221) : cljs.core.deref.call(null,G__17221));
})(),path__$2)),null,k));
cljs.core.add_watch(atm__$1,k,((function (path__$1,vec__17220,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){
var latest = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(nv,path__$2);
var prev = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ov,path__$2);
var latest_hash = cljs.core.hash(latest);
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,latest))){
sa.prevhash = latest_hash;

return sa.cljs$core$IWatchable$_notify_watches$arity$3(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ov,path__$2),latest);
} else {
return null;
}
});})(path__$1,vec__17220,atm__$1,path__$2,k,sa))
);

return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sa.atm,cljs.core.assoc_in,sa.path,new_value);

return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){
return crate.binding.sub_reset_BANG_(sa,(function (){var G__17237 = (function (){var G__17238 = sa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17238) : cljs.core.deref.call(null,G__17238));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17237) : f.call(null,G__17237));
})());
});
var sub_swap_BANG___3 = (function (sa,f,x){
return crate.binding.sub_reset_BANG_(sa,(function (){var G__17239 = (function (){var G__17241 = sa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17241) : cljs.core.deref.call(null,G__17241));
})();
var G__17240 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17239,G__17240) : f.call(null,G__17239,G__17240));
})());
});
var sub_swap_BANG___4 = (function (sa,f,x,y){
return crate.binding.sub_reset_BANG_(sa,(function (){var G__17242 = (function (){var G__17245 = sa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17245) : cljs.core.deref.call(null,G__17245));
})();
var G__17243 = x;
var G__17244 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17242,G__17243,G__17244) : f.call(null,G__17242,G__17243,G__17244));
})());
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){
return crate.binding.sub_reset_BANG_(sa,(function (){var G__17246 = (function (){var G__17250 = sa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17250) : cljs.core.deref.call(null,G__17250));
})();
var G__17247 = x;
var G__17248 = y;
var G__17249 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17246,G__17247,G__17248,G__17249) : f.call(null,G__17246,G__17247,G__17248,G__17249));
})());
});
var sub_swap_BANG___6 = (function() { 
var G__17252__delegate = function (sa,f,x,y,z,more){
return crate.binding.sub_reset_BANG_(sa,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,(function (){var G__17251 = sa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17251) : cljs.core.deref.call(null,G__17251));
})(),x,y,z,cljs.core.array_seq([more], 0)));
};
var G__17252 = function (sa,f,x,y,z,var_args){
var more = null;
if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__17252__delegate.call(this,sa,f,x,y,z,more);};
G__17252.cljs$lang$maxFixedArity = 5;
G__17252.cljs$lang$applyTo = (function (arglist__17253){
var sa = cljs.core.first(arglist__17253);
arglist__17253 = cljs.core.next(arglist__17253);
var f = cljs.core.first(arglist__17253);
arglist__17253 = cljs.core.next(arglist__17253);
var x = cljs.core.first(arglist__17253);
arglist__17253 = cljs.core.next(arglist__17253);
var y = cljs.core.first(arglist__17253);
arglist__17253 = cljs.core.next(arglist__17253);
var z = cljs.core.first(arglist__17253);
var more = cljs.core.rest(arglist__17253);
return G__17252__delegate(sa,f,x,y,z,more);
});
G__17252.cljs$core$IFn$_invoke$arity$variadic = G__17252__delegate;
return G__17252;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){
cljs.core.remove_watch(sa.atm,sa.key);

sa.watches = null;

return sa.atm = null;
});

crate.binding.computable = (function (){var obj17255 = {};
return obj17255;
})();

crate.binding._depend = (function _depend(this$,atm){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.crate$binding$computable$_depend$arity$2;
} else {
return and__3596__auto__;
}
})()){
return this$.crate$binding$computable$_depend$arity$2(this$,atm);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (crate.binding._depend[(function (){var G__17259 = x__4247__auto__;
return goog.typeOf(G__17259);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (crate.binding._depend["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("computable.-depend",this$);
}
}
})().call(null,this$,atm);
}
});

crate.binding._compute = (function _compute(this$){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.crate$binding$computable$_compute$arity$1;
} else {
return and__3596__auto__;
}
})()){
return this$.crate$binding$computable$_compute$arity$1(this$);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (crate.binding._compute[(function (){var G__17263 = x__4247__auto__;
return goog.typeOf(G__17263);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (crate.binding._compute["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("computable.-compute",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key,meta){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.prototype.crate$binding$computable$ = true;

crate.binding.Computed.prototype.crate$binding$computable$_depend$arity$2 = (function (this$,atm){
var self__ = this;
var this$__$1 = this;
this$__$1.atms = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(this$__$1.atms,atm);

return cljs.core.add_watch(atm,self__.key,((function (this$__$1){
return (function (_,___$1,___$2,___$3){
return crate.binding._compute(this$__$1);
});})(this$__$1))
);
});

crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var old = this$__$1.value;
var nv = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.func,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,self__.atms));
this$__$1.value = nv;

return cljs.core._notify_watches(this$__$1,old,nv);
});

crate.binding.Computed.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__17264 = this$__$1;
return goog.getUid(G__17264);
});

crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__17265 = cljs.core.seq(self__.watches);
var chunk__17266 = null;
var count__17267 = (0);
var i__17268 = (0);
while(true){
if((i__17268 < count__17267)){
var vec__17269 = chunk__17266.cljs$core$IIndexed$_nth$arity$2(null,i__17268);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17269,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17269,(1),null);
var G__17270_17279 = key__$1;
var G__17271_17280 = this$__$1;
var G__17272_17281 = oldval;
var G__17273_17282 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17270_17279,G__17271_17280,G__17272_17281,G__17273_17282) : f.call(null,G__17270_17279,G__17271_17280,G__17272_17281,G__17273_17282));

var G__17283 = seq__17265;
var G__17284 = chunk__17266;
var G__17285 = count__17267;
var G__17286 = (i__17268 + (1));
seq__17265 = G__17283;
chunk__17266 = G__17284;
count__17267 = G__17285;
i__17268 = G__17286;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__17265);
if(temp__4126__auto__){
var seq__17265__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17265__$1)){
var c__4390__auto__ = cljs.core.chunk_first(seq__17265__$1);
var G__17287 = cljs.core.chunk_rest(seq__17265__$1);
var G__17288 = c__4390__auto__;
var G__17289 = cljs.core.count(c__4390__auto__);
var G__17290 = (0);
seq__17265 = G__17287;
chunk__17266 = G__17288;
count__17267 = G__17289;
i__17268 = G__17290;
continue;
} else {
var vec__17274 = cljs.core.first(seq__17265__$1);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17274,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17274,(1),null);
var G__17275_17291 = key__$1;
var G__17276_17292 = this$__$1;
var G__17277_17293 = oldval;
var G__17278_17294 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17275_17291,G__17276_17292,G__17277_17293,G__17278_17294) : f.call(null,G__17275_17291,G__17276_17292,G__17277_17293,G__17278_17294));

var G__17295 = cljs.core.next(seq__17265__$1);
var G__17296 = null;
var G__17297 = (0);
var G__17298 = (0);
seq__17265 = G__17295;
chunk__17266 = G__17296;
count__17267 = G__17297;
i__17268 = G__17298;
continue;
}
} else {
return null;
}
}
break;
}
});

crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(f)){
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key__$1,f);
} else {
return null;
}
});

crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key__$1);
});

crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.value], 0))),cljs.core.str(">")].join(''));
});

crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

crate.binding.Computed.cljs$lang$type = true;

crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";

crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"crate.binding/Computed");
});

crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key,meta){
return (new crate.binding.Computed(atms,value,func,watches,key,meta));
});

crate.binding.computed = (function computed(atms,func){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("computed");
var neue = (new crate.binding.Computed(cljs.core.PersistentVector.EMPTY,null,func,null,k,null));
neue.crate$binding$computable$_compute$arity$1(null);

var seq__17303_17307 = cljs.core.seq(atms);
var chunk__17304_17308 = null;
var count__17305_17309 = (0);
var i__17306_17310 = (0);
while(true){
if((i__17306_17310 < count__17305_17309)){
var atm_17311 = chunk__17304_17308.cljs$core$IIndexed$_nth$arity$2(null,i__17306_17310);
neue.crate$binding$computable$_depend$arity$2(null,atm_17311);

var G__17312 = seq__17303_17307;
var G__17313 = chunk__17304_17308;
var G__17314 = count__17305_17309;
var G__17315 = (i__17306_17310 + (1));
seq__17303_17307 = G__17312;
chunk__17304_17308 = G__17313;
count__17305_17309 = G__17314;
i__17306_17310 = G__17315;
continue;
} else {
var temp__4126__auto___17316 = cljs.core.seq(seq__17303_17307);
if(temp__4126__auto___17316){
var seq__17303_17317__$1 = temp__4126__auto___17316;
if(cljs.core.chunked_seq_QMARK_(seq__17303_17317__$1)){
var c__4390__auto___17318 = cljs.core.chunk_first(seq__17303_17317__$1);
var G__17319 = cljs.core.chunk_rest(seq__17303_17317__$1);
var G__17320 = c__4390__auto___17318;
var G__17321 = cljs.core.count(c__4390__auto___17318);
var G__17322 = (0);
seq__17303_17307 = G__17319;
chunk__17304_17308 = G__17320;
count__17305_17309 = G__17321;
i__17306_17310 = G__17322;
continue;
} else {
var atm_17323 = cljs.core.first(seq__17303_17317__$1);
neue.crate$binding$computable$_depend$arity$2(null,atm_17323);

var G__17324 = cljs.core.next(seq__17303_17317__$1);
var G__17325 = null;
var G__17326 = (0);
var G__17327 = (0);
seq__17303_17307 = G__17324;
chunk__17304_17308 = G__17325;
count__17305_17309 = G__17326;
i__17306_17310 = G__17327;
continue;
}
} else {
}
}
break;
}

return neue;
});
crate.binding.compute = (function compute(compu){
return crate.binding._compute(compu);
});
crate.binding.depend_on = (function depend_on(compu,atm){
return crate.binding._depend(compu,atm);
});
crate.binding.notify = (function notify(w,o,v){
return cljs.core._notify_watches(w,o,v);
});

crate.binding.bindable_coll = (function (){var obj17329 = {};
return obj17329;
})();


crate.binding.bindable = (function (){var obj17331 = {};
return obj17331;
})();

crate.binding._value = (function _value(this$){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.crate$binding$bindable$_value$arity$1;
} else {
return and__3596__auto__;
}
})()){
return this$.crate$binding$bindable$_value$arity$1(this$);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (crate.binding._value[(function (){var G__17335 = x__4247__auto__;
return goog.typeOf(G__17335);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (crate.binding._value["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("bindable.-value",this$);
}
}
})().call(null,this$);
}
});

crate.binding._on_change = (function _on_change(this$,func){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.crate$binding$bindable$_on_change$arity$2;
} else {
return and__3596__auto__;
}
})()){
return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (crate.binding._on_change[(function (){var G__17339 = x__4247__auto__;
return goog.typeOf(G__17339);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (crate.binding._on_change["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});


/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;

crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__17340 = (function (){var G__17341 = self__.atm;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17341) : cljs.core.deref.call(null,G__17341));
})();
return (self__.value_func.cljs$core$IFn$_invoke$arity$1 ? self__.value_func.cljs$core$IFn$_invoke$arity$1(G__17340) : self__.value_func.call(null,G__17340));
});

crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch(self__.atm,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("atom-binding"),((function (this$__$1){
return (function (){
var G__17342 = crate.binding._value(this$__$1);
return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(G__17342) : func.call(null,G__17342));
});})(this$__$1))
);
});

crate.binding.atom_binding.cljs$lang$type = true;

crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";

crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"crate.binding/atom-binding");
});

crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){
return (new crate.binding.atom_binding(atm,value_func));
});


/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__17343 = cljs.core.seq(self__.watches);
var chunk__17344 = null;
var count__17345 = (0);
var i__17346 = (0);
while(true){
if((i__17346 < count__17345)){
var vec__17347 = chunk__17344.cljs$core$IIndexed$_nth$arity$2(null,i__17346);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17347,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17347,(1),null);
var G__17348_17357 = key;
var G__17349_17358 = this$__$1;
var G__17350_17359 = oldval;
var G__17351_17360 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17348_17357,G__17349_17358,G__17350_17359,G__17351_17360) : f.call(null,G__17348_17357,G__17349_17358,G__17350_17359,G__17351_17360));

var G__17361 = seq__17343;
var G__17362 = chunk__17344;
var G__17363 = count__17345;
var G__17364 = (i__17346 + (1));
seq__17343 = G__17361;
chunk__17344 = G__17362;
count__17345 = G__17363;
i__17346 = G__17364;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__17343);
if(temp__4126__auto__){
var seq__17343__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17343__$1)){
var c__4390__auto__ = cljs.core.chunk_first(seq__17343__$1);
var G__17365 = cljs.core.chunk_rest(seq__17343__$1);
var G__17366 = c__4390__auto__;
var G__17367 = cljs.core.count(c__4390__auto__);
var G__17368 = (0);
seq__17343 = G__17365;
chunk__17344 = G__17366;
count__17345 = G__17367;
i__17346 = G__17368;
continue;
} else {
var vec__17352 = cljs.core.first(seq__17343__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17352,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17352,(1),null);
var G__17353_17369 = key;
var G__17354_17370 = this$__$1;
var G__17355_17371 = oldval;
var G__17356_17372 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17353_17369,G__17354_17370,G__17355_17371,G__17356_17372) : f.call(null,G__17353_17369,G__17354_17370,G__17355_17371,G__17356_17372));

var G__17373 = cljs.core.next(seq__17343__$1);
var G__17374 = null;
var G__17375 = (0);
var G__17376 = (0);
seq__17343 = G__17373;
chunk__17344 = G__17374;
count__17345 = G__17375;
i__17346 = G__17376;
continue;
}
} else {
return null;
}
}
break;
}
});

crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

crate.binding.notifier.cljs$lang$type = true;

crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";

crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"crate.binding/notifier");
});

crate.binding.__GT_notifier = (function __GT_notifier(watches){
return (new crate.binding.notifier(watches));
});


/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;

crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,cljs.core.vals(this$__$1.stuff));
});

crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch(self__.notif,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bound-coll"),((function (this$__$1){
return (function (_,___$1,___$2,p__17377){
var vec__17378 = p__17377;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17378,(0),null);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17378,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17378,(2),null);
var G__17379 = event;
var G__17380 = el;
var G__17381 = v;
return (func.cljs$core$IFn$_invoke$arity$3 ? func.cljs$core$IFn$_invoke$arity$3(G__17379,G__17380,G__17381) : func.call(null,G__17379,G__17380,G__17381));
});})(this$__$1))
);
});

crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;

crate.binding.bound_collection.cljs$lang$type = true;

crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";

crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"crate.binding/bound-collection");
});

crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){
return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});

crate.binding.opt = (function opt(bc,k){
return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){
var sa = crate.binding.subatom(bc.atm,path);
var elem = crate.binding.opt(bc,cljs.core.constant$keyword$34).call(null,sa);
bc.stuff = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$33,elem,cljs.core.constant$keyword$35,sa], null));

return crate.binding.notify(bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$36,elem,(function (){var G__17383 = sa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17383) : cljs.core.deref.call(null,G__17383));
})()], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){
var notif = bc.notif;
var prev = bc.stuff.call(null,key);
bc.stuff = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bc.stuff,key);

crate.binding.notify(bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$37,cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(prev),null], null));

return crate.binding.sub_destroy_BANG_(cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){
if(cljs.core.map_QMARK_(coll)){
return cljs.core.seq(coll);
} else {
if(cljs.core.set_QMARK_(coll)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.identity),coll);
} else {
return cljs.core.map_indexed(cljs.core.vector,coll);

}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(keyfn,crate.binding.__GT_indexed(coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var or__3608__auto__ = crate.binding.opt(bc,cljs.core.constant$keyword$38);
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;
if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__17384){
var bc = cljs.core.first(arglist__17384);
var segs = cljs.core.rest(arglist__17384);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){
var prev = bc.stuff;
var pset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(prev));
var nset = crate.binding.__GT_keyed(neue,crate.binding.opt(bc,cljs.core.constant$keyword$39));
var added = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(nset,pset));
var removed = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(pset,nset));
var seq__17393_17401 = cljs.core.seq(added);
var chunk__17394_17402 = null;
var count__17395_17403 = (0);
var i__17396_17404 = (0);
while(true){
if((i__17396_17404 < count__17395_17403)){
var a_17405 = chunk__17394_17402.cljs$core$IIndexed$_nth$arity$2(null,i__17396_17404);
crate.binding.bc_add(bc,a_17405,a_17405);

var G__17406 = seq__17393_17401;
var G__17407 = chunk__17394_17402;
var G__17408 = count__17395_17403;
var G__17409 = (i__17396_17404 + (1));
seq__17393_17401 = G__17406;
chunk__17394_17402 = G__17407;
count__17395_17403 = G__17408;
i__17396_17404 = G__17409;
continue;
} else {
var temp__4126__auto___17410 = cljs.core.seq(seq__17393_17401);
if(temp__4126__auto___17410){
var seq__17393_17411__$1 = temp__4126__auto___17410;
if(cljs.core.chunked_seq_QMARK_(seq__17393_17411__$1)){
var c__4390__auto___17412 = cljs.core.chunk_first(seq__17393_17411__$1);
var G__17413 = cljs.core.chunk_rest(seq__17393_17411__$1);
var G__17414 = c__4390__auto___17412;
var G__17415 = cljs.core.count(c__4390__auto___17412);
var G__17416 = (0);
seq__17393_17401 = G__17413;
chunk__17394_17402 = G__17414;
count__17395_17403 = G__17415;
i__17396_17404 = G__17416;
continue;
} else {
var a_17417 = cljs.core.first(seq__17393_17411__$1);
crate.binding.bc_add(bc,a_17417,a_17417);

var G__17418 = cljs.core.next(seq__17393_17411__$1);
var G__17419 = null;
var G__17420 = (0);
var G__17421 = (0);
seq__17393_17401 = G__17418;
chunk__17394_17402 = G__17419;
count__17395_17403 = G__17420;
i__17396_17404 = G__17421;
continue;
}
} else {
}
}
break;
}

var seq__17397 = cljs.core.seq(removed);
var chunk__17398 = null;
var count__17399 = (0);
var i__17400 = (0);
while(true){
if((i__17400 < count__17399)){
var r = chunk__17398.cljs$core$IIndexed$_nth$arity$2(null,i__17400);
crate.binding.bc_remove(bc,r);

var G__17422 = seq__17397;
var G__17423 = chunk__17398;
var G__17424 = count__17399;
var G__17425 = (i__17400 + (1));
seq__17397 = G__17422;
chunk__17398 = G__17423;
count__17399 = G__17424;
i__17400 = G__17425;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__17397);
if(temp__4126__auto__){
var seq__17397__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17397__$1)){
var c__4390__auto__ = cljs.core.chunk_first(seq__17397__$1);
var G__17426 = cljs.core.chunk_rest(seq__17397__$1);
var G__17427 = c__4390__auto__;
var G__17428 = cljs.core.count(c__4390__auto__);
var G__17429 = (0);
seq__17397 = G__17426;
chunk__17398 = G__17427;
count__17399 = G__17428;
i__17400 = G__17429;
continue;
} else {
var r = cljs.core.first(seq__17397__$1);
crate.binding.bc_remove(bc,r);

var G__17430 = cljs.core.next(seq__17397__$1);
var G__17431 = null;
var G__17432 = (0);
var G__17433 = (0);
seq__17397 = G__17430;
chunk__17398 = G__17431;
count__17399 = G__17432;
i__17400 = G__17433;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__17434){
var vec__17438 = p__17434;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17438,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17438,(1),null);
var vec__17439 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));
var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17439,(0),null);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17439,(1),null);
var atm__$1 = ((cljs.core.not(path__$1))?atm:crate.binding.subatom(atm,path__$1));
var opts__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.constant$keyword$38,path__$1);
var opts__$3 = ((cljs.core.not(cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$2,cljs.core.constant$keyword$39,cljs.core.first):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$2,cljs.core.constant$keyword$39,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map()));
cljs.core.add_watch(atm__$1,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bound-coll"),((function (vec__17439,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__17438,path,opts){
return (function (_,___$1,___$2,neue){
return crate.binding.bc_compare(bc,neue);
});})(vec__17439,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__17438,path,opts))
);

crate.binding.bc_compare(bc,(function (){var G__17440 = atm__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17440) : cljs.core.deref.call(null,G__17440));
})());

return bc;
};
var bound_coll = function (atm,var_args){
var p__17434 = null;
if (arguments.length > 1) {
  p__17434 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bound_coll__delegate.call(this,atm,p__17434);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__17441){
var atm = cljs.core.first(arglist__17441);
var p__17434 = cljs.core.rest(arglist__17441);
return bound_coll__delegate(atm,p__17434);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__17442){
var vec__17445 = p__17442;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17445,(0),null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$34,as);
var atm__$1 = ((cljs.core.not(cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom(atm,cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(opts__$1)));
var opts__$2 = ((cljs.core.not(cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.constant$keyword$39,cljs.core.first):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.constant$keyword$39,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map()));
cljs.core.add_watch(atm__$1,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__17445,opts){
return (function (_,___$1,___$2,neue){
return crate.binding.bc_compare(bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__17445,opts))
);

crate.binding.bc_compare(bc,(function (){var G__17446 = atm__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17446) : cljs.core.deref.call(null,G__17446));
})());

return bc;
};
var map_bound = function (as,atm,var_args){
var p__17442 = null;
if (arguments.length > 2) {
  p__17442 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return map_bound__delegate.call(this,as,atm,p__17442);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__17447){
var as = cljs.core.first(arglist__17447);
arglist__17447 = cljs.core.next(arglist__17447);
var atm = cljs.core.first(arglist__17447);
var p__17442 = cljs.core.rest(arglist__17447);
return map_bound__delegate(as,atm,p__17442);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){
var G__17449 = b;
if(G__17449){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__17449.crate$binding$bindable$;
}
})())){
return true;
} else {
if((!G__17449.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(crate.binding.bindable,G__17449);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(crate.binding.bindable,G__17449);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){
var G__17451 = b;
if(G__17451){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__17451.crate$binding$bindable_coll$;
}
})())){
return true;
} else {
if((!G__17451.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(crate.binding.bindable_coll,G__17451);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(crate.binding.bindable_coll,G__17451);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){
var G__17453 = atm;
if(G__17453){
var bit__4284__auto__ = (G__17453.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4284__auto__) || (G__17453.cljs$core$IDeref$)){
return true;
} else {
if((!G__17453.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17453);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17453);
}
});
crate.binding.value = (function value(b){
return crate.binding._value(b);
});
crate.binding.index = (function index(sub_atom){
return cljs.core.last(sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){
return crate.binding._on_change(b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__17454){
var vec__17456 = p__17454;
var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17456,(0),null);
var func__$1 = (function (){var or__3608__auto__ = func;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return cljs.core.identity;
}
})();
return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__17454 = null;
if (arguments.length > 1) {
  p__17454 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bound__delegate.call(this,atm,p__17454);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__17457){
var atm = cljs.core.first(arglist__17457);
var p__17454 = cljs.core.rest(arglist__17457);
return bound__delegate(atm,p__17454);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;
