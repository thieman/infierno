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
return goog.getUid(this$__$1);
});

crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__7747 = cljs.core.seq.call(null,self__.watches);
var chunk__7748 = null;
var count__7749 = (0);
var i__7750 = (0);
while(true){
if((i__7750 < count__7749)){
var vec__7751 = cljs.core._nth.call(null,chunk__7748,i__7750);
var key__$1 = cljs.core.nth.call(null,vec__7751,(0),null);
var f = cljs.core.nth.call(null,vec__7751,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__7753 = seq__7747;
var G__7754 = chunk__7748;
var G__7755 = count__7749;
var G__7756 = (i__7750 + (1));
seq__7747 = G__7753;
chunk__7748 = G__7754;
count__7749 = G__7755;
i__7750 = G__7756;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7747);
if(temp__4126__auto__){
var seq__7747__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7747__$1)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,seq__7747__$1);
var G__7757 = cljs.core.chunk_rest.call(null,seq__7747__$1);
var G__7758 = c__4390__auto__;
var G__7759 = cljs.core.count.call(null,c__4390__auto__);
var G__7760 = (0);
seq__7747 = G__7757;
chunk__7748 = G__7758;
count__7749 = G__7759;
i__7750 = G__7760;
continue;
} else {
var vec__7752 = cljs.core.first.call(null,seq__7747__$1);
var key__$1 = cljs.core.nth.call(null,vec__7752,(0),null);
var f = cljs.core.nth.call(null,vec__7752,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__7761 = cljs.core.next.call(null,seq__7747__$1);
var G__7762 = null;
var G__7763 = (0);
var G__7764 = (0);
seq__7747 = G__7761;
chunk__7748 = G__7762;
count__7749 = G__7763;
i__7750 = G__7764;
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
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else {
return null;
}
});

crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});

crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});

crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.atm)){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
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
return cljs.core._write.call(null,writer__4191__auto__,"crate.binding/SubAtom");
});

crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){
return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});

crate.binding.subatom = (function subatom(atm,path){
var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var vec__7766 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));
var atm__$1 = cljs.core.nth.call(null,vec__7766,(0),null);
var path__$2 = cljs.core.nth.call(null,vec__7766,(1),null);
var k = cljs.core.gensym.call(null,"subatom");
var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));
cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__7766,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){
var latest = cljs.core.get_in.call(null,nv,path__$2);
var prev = cljs.core.get_in.call(null,ov,path__$2);
var latest_hash = cljs.core.hash.call(null,latest);
if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest))){
sa.prevhash = latest_hash;

return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else {
return null;
}
});})(path__$1,vec__7766,atm__$1,path__$2,k,sa))
);

return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){
cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);

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
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__7767__delegate = function (sa,f,x,y,z,more){
return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__7767 = function (sa,f,x,y,z,var_args){
var more = null;
if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7767__delegate.call(this,sa,f,x,y,z,more);};
G__7767.cljs$lang$maxFixedArity = 5;
G__7767.cljs$lang$applyTo = (function (arglist__7768){
var sa = cljs.core.first(arglist__7768);
arglist__7768 = cljs.core.next(arglist__7768);
var f = cljs.core.first(arglist__7768);
arglist__7768 = cljs.core.next(arglist__7768);
var x = cljs.core.first(arglist__7768);
arglist__7768 = cljs.core.next(arglist__7768);
var y = cljs.core.first(arglist__7768);
arglist__7768 = cljs.core.next(arglist__7768);
var z = cljs.core.first(arglist__7768);
var more = cljs.core.rest(arglist__7768);
return G__7767__delegate(sa,f,x,y,z,more);
});
G__7767.cljs$core$IFn$_invoke$arity$variadic = G__7767__delegate;
return G__7767;
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
cljs.core.remove_watch.call(null,sa.atm,sa.key);

sa.watches = null;

return sa.atm = null;
});

crate.binding.computable = (function (){var obj7770 = {};
return obj7770;
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
return (function (){var or__3608__auto__ = (crate.binding._depend[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (crate.binding._depend["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"computable.-depend",this$);
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
return (function (){var or__3608__auto__ = (crate.binding._compute[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (crate.binding._compute["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
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
this$__$1.atms = cljs.core.conj.call(null,this$__$1.atms,atm);

return cljs.core.add_watch.call(null,atm,self__.key,((function (this$__$1){
return (function (_,___$1,___$2,___$3){
return crate.binding._compute.call(null,this$__$1);
});})(this$__$1))
);
});

crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var old = this$__$1.value;
var nv = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));
this$__$1.value = nv;

return cljs.core._notify_watches.call(null,this$__$1,old,nv);
});

crate.binding.Computed.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__7771 = cljs.core.seq.call(null,self__.watches);
var chunk__7772 = null;
var count__7773 = (0);
var i__7774 = (0);
while(true){
if((i__7774 < count__7773)){
var vec__7775 = cljs.core._nth.call(null,chunk__7772,i__7774);
var key__$1 = cljs.core.nth.call(null,vec__7775,(0),null);
var f = cljs.core.nth.call(null,vec__7775,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__7777 = seq__7771;
var G__7778 = chunk__7772;
var G__7779 = count__7773;
var G__7780 = (i__7774 + (1));
seq__7771 = G__7777;
chunk__7772 = G__7778;
count__7773 = G__7779;
i__7774 = G__7780;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7771);
if(temp__4126__auto__){
var seq__7771__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7771__$1)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,seq__7771__$1);
var G__7781 = cljs.core.chunk_rest.call(null,seq__7771__$1);
var G__7782 = c__4390__auto__;
var G__7783 = cljs.core.count.call(null,c__4390__auto__);
var G__7784 = (0);
seq__7771 = G__7781;
chunk__7772 = G__7782;
count__7773 = G__7783;
i__7774 = G__7784;
continue;
} else {
var vec__7776 = cljs.core.first.call(null,seq__7771__$1);
var key__$1 = cljs.core.nth.call(null,vec__7776,(0),null);
var f = cljs.core.nth.call(null,vec__7776,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__7785 = cljs.core.next.call(null,seq__7771__$1);
var G__7786 = null;
var G__7787 = (0);
var G__7788 = (0);
seq__7771 = G__7785;
chunk__7772 = G__7786;
count__7773 = G__7787;
i__7774 = G__7788;
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
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else {
return null;
}
});

crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});

crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
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
return cljs.core._write.call(null,writer__4191__auto__,"crate.binding/Computed");
});

crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key,meta){
return (new crate.binding.Computed(atms,value,func,watches,key,meta));
});

crate.binding.computed = (function computed(atms,func){
var k = cljs.core.gensym.call(null,"computed");
var neue = (new crate.binding.Computed(cljs.core.PersistentVector.EMPTY,null,func,null,k,null));
crate.binding._compute.call(null,neue);

var seq__7793_7797 = cljs.core.seq.call(null,atms);
var chunk__7794_7798 = null;
var count__7795_7799 = (0);
var i__7796_7800 = (0);
while(true){
if((i__7796_7800 < count__7795_7799)){
var atm_7801 = cljs.core._nth.call(null,chunk__7794_7798,i__7796_7800);
crate.binding._depend.call(null,neue,atm_7801);

var G__7802 = seq__7793_7797;
var G__7803 = chunk__7794_7798;
var G__7804 = count__7795_7799;
var G__7805 = (i__7796_7800 + (1));
seq__7793_7797 = G__7802;
chunk__7794_7798 = G__7803;
count__7795_7799 = G__7804;
i__7796_7800 = G__7805;
continue;
} else {
var temp__4126__auto___7806 = cljs.core.seq.call(null,seq__7793_7797);
if(temp__4126__auto___7806){
var seq__7793_7807__$1 = temp__4126__auto___7806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7793_7807__$1)){
var c__4390__auto___7808 = cljs.core.chunk_first.call(null,seq__7793_7807__$1);
var G__7809 = cljs.core.chunk_rest.call(null,seq__7793_7807__$1);
var G__7810 = c__4390__auto___7808;
var G__7811 = cljs.core.count.call(null,c__4390__auto___7808);
var G__7812 = (0);
seq__7793_7797 = G__7809;
chunk__7794_7798 = G__7810;
count__7795_7799 = G__7811;
i__7796_7800 = G__7812;
continue;
} else {
var atm_7813 = cljs.core.first.call(null,seq__7793_7807__$1);
crate.binding._depend.call(null,neue,atm_7813);

var G__7814 = cljs.core.next.call(null,seq__7793_7807__$1);
var G__7815 = null;
var G__7816 = (0);
var G__7817 = (0);
seq__7793_7797 = G__7814;
chunk__7794_7798 = G__7815;
count__7795_7799 = G__7816;
i__7796_7800 = G__7817;
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
return crate.binding._compute.call(null,compu);
});
crate.binding.depend_on = (function depend_on(compu,atm){
return crate.binding._depend.call(null,compu,atm);
});
crate.binding.notify = (function notify(w,o,v){
return cljs.core._notify_watches.call(null,w,o,v);
});

crate.binding.bindable_coll = (function (){var obj7819 = {};
return obj7819;
})();


crate.binding.bindable = (function (){var obj7821 = {};
return obj7821;
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
return (function (){var or__3608__auto__ = (crate.binding._value[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (crate.binding._value["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
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
return (function (){var or__3608__auto__ = (crate.binding._on_change[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (crate.binding._on_change["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
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
return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});

crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),((function (this$__$1){
return (function (){
return func.call(null,crate.binding._value.call(null,this$__$1));
});})(this$__$1))
);
});

crate.binding.atom_binding.cljs$lang$type = true;

crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";

crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"crate.binding/atom-binding");
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
var seq__7822 = cljs.core.seq.call(null,self__.watches);
var chunk__7823 = null;
var count__7824 = (0);
var i__7825 = (0);
while(true){
if((i__7825 < count__7824)){
var vec__7826 = cljs.core._nth.call(null,chunk__7823,i__7825);
var key = cljs.core.nth.call(null,vec__7826,(0),null);
var f = cljs.core.nth.call(null,vec__7826,(1),null);
f.call(null,key,this$__$1,oldval,newval);

var G__7828 = seq__7822;
var G__7829 = chunk__7823;
var G__7830 = count__7824;
var G__7831 = (i__7825 + (1));
seq__7822 = G__7828;
chunk__7823 = G__7829;
count__7824 = G__7830;
i__7825 = G__7831;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7822);
if(temp__4126__auto__){
var seq__7822__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7822__$1)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,seq__7822__$1);
var G__7832 = cljs.core.chunk_rest.call(null,seq__7822__$1);
var G__7833 = c__4390__auto__;
var G__7834 = cljs.core.count.call(null,c__4390__auto__);
var G__7835 = (0);
seq__7822 = G__7832;
chunk__7823 = G__7833;
count__7824 = G__7834;
i__7825 = G__7835;
continue;
} else {
var vec__7827 = cljs.core.first.call(null,seq__7822__$1);
var key = cljs.core.nth.call(null,vec__7827,(0),null);
var f = cljs.core.nth.call(null,vec__7827,(1),null);
f.call(null,key,this$__$1,oldval,newval);

var G__7836 = cljs.core.next.call(null,seq__7822__$1);
var G__7837 = null;
var G__7838 = (0);
var G__7839 = (0);
seq__7822 = G__7836;
chunk__7823 = G__7837;
count__7824 = G__7838;
i__7825 = G__7839;
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
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

crate.binding.notifier.cljs$lang$type = true;

crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";

crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"crate.binding/notifier");
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
return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",618631056),cljs.core.vals.call(null,this$__$1.stuff));
});

crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),((function (this$__$1){
return (function (_,___$1,___$2,p__7840){
var vec__7841 = p__7840;
var event = cljs.core.nth.call(null,vec__7841,(0),null);
var el = cljs.core.nth.call(null,vec__7841,(1),null);
var v = cljs.core.nth.call(null,vec__7841,(2),null);
return func.call(null,event,el,v);
});})(this$__$1))
);
});

crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;

crate.binding.bound_collection.cljs$lang$type = true;

crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";

crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"crate.binding/bound-collection");
});

crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){
return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});

crate.binding.opt = (function opt(bc,k){
return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){
var sa = crate.binding.subatom.call(null,bc.atm,path);
var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1148689641)).call(null,sa);
bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),elem,new cljs.core.Keyword(null,"subatom","subatom",-95454370),sa], null));

return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",235287739),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){
var notif = bc.notif;
var prev = bc.stuff.call(null,key);
bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);

crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(prev),null], null));

return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",-95454370).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core.seq.call(null,coll);
} else {
if(cljs.core.set_QMARK_.call(null,coll)){
return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else {
return cljs.core.map_indexed.call(null,cljs.core.vector,coll);

}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){
return cljs.core.concat.call(null,(function (){var or__3608__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",-188191168));
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
__GT_path.cljs$lang$applyTo = (function (arglist__7842){
var bc = cljs.core.first(arglist__7842);
var segs = cljs.core.rest(arglist__7842);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){
var prev = bc.stuff;
var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));
var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",780060332)));
var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));
var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));
var seq__7851_7859 = cljs.core.seq.call(null,added);
var chunk__7852_7860 = null;
var count__7853_7861 = (0);
var i__7854_7862 = (0);
while(true){
if((i__7854_7862 < count__7853_7861)){
var a_7863 = cljs.core._nth.call(null,chunk__7852_7860,i__7854_7862);
crate.binding.bc_add.call(null,bc,a_7863,a_7863);

var G__7864 = seq__7851_7859;
var G__7865 = chunk__7852_7860;
var G__7866 = count__7853_7861;
var G__7867 = (i__7854_7862 + (1));
seq__7851_7859 = G__7864;
chunk__7852_7860 = G__7865;
count__7853_7861 = G__7866;
i__7854_7862 = G__7867;
continue;
} else {
var temp__4126__auto___7868 = cljs.core.seq.call(null,seq__7851_7859);
if(temp__4126__auto___7868){
var seq__7851_7869__$1 = temp__4126__auto___7868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7851_7869__$1)){
var c__4390__auto___7870 = cljs.core.chunk_first.call(null,seq__7851_7869__$1);
var G__7871 = cljs.core.chunk_rest.call(null,seq__7851_7869__$1);
var G__7872 = c__4390__auto___7870;
var G__7873 = cljs.core.count.call(null,c__4390__auto___7870);
var G__7874 = (0);
seq__7851_7859 = G__7871;
chunk__7852_7860 = G__7872;
count__7853_7861 = G__7873;
i__7854_7862 = G__7874;
continue;
} else {
var a_7875 = cljs.core.first.call(null,seq__7851_7869__$1);
crate.binding.bc_add.call(null,bc,a_7875,a_7875);

var G__7876 = cljs.core.next.call(null,seq__7851_7869__$1);
var G__7877 = null;
var G__7878 = (0);
var G__7879 = (0);
seq__7851_7859 = G__7876;
chunk__7852_7860 = G__7877;
count__7853_7861 = G__7878;
i__7854_7862 = G__7879;
continue;
}
} else {
}
}
break;
}

var seq__7855 = cljs.core.seq.call(null,removed);
var chunk__7856 = null;
var count__7857 = (0);
var i__7858 = (0);
while(true){
if((i__7858 < count__7857)){
var r = cljs.core._nth.call(null,chunk__7856,i__7858);
crate.binding.bc_remove.call(null,bc,r);

var G__7880 = seq__7855;
var G__7881 = chunk__7856;
var G__7882 = count__7857;
var G__7883 = (i__7858 + (1));
seq__7855 = G__7880;
chunk__7856 = G__7881;
count__7857 = G__7882;
i__7858 = G__7883;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7855);
if(temp__4126__auto__){
var seq__7855__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7855__$1)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,seq__7855__$1);
var G__7884 = cljs.core.chunk_rest.call(null,seq__7855__$1);
var G__7885 = c__4390__auto__;
var G__7886 = cljs.core.count.call(null,c__4390__auto__);
var G__7887 = (0);
seq__7855 = G__7884;
chunk__7856 = G__7885;
count__7857 = G__7886;
i__7858 = G__7887;
continue;
} else {
var r = cljs.core.first.call(null,seq__7855__$1);
crate.binding.bc_remove.call(null,bc,r);

var G__7888 = cljs.core.next.call(null,seq__7855__$1);
var G__7889 = null;
var G__7890 = (0);
var G__7891 = (0);
seq__7855 = G__7888;
chunk__7856 = G__7889;
count__7857 = G__7890;
i__7858 = G__7891;
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
var bound_coll__delegate = function (atm,p__7892){
var vec__7895 = p__7892;
var path = cljs.core.nth.call(null,vec__7895,(0),null);
var opts = cljs.core.nth.call(null,vec__7895,(1),null);
var vec__7896 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));
var path__$1 = cljs.core.nth.call(null,vec__7896,(0),null);
var opts__$1 = cljs.core.nth.call(null,vec__7896,(1),null);
var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));
var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",-188191168),path__$1);
var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__7896,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__7895,path,opts){
return (function (_,___$1,___$2,neue){
return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__7896,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__7895,path,opts))
);

crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));

return bc;
};
var bound_coll = function (atm,var_args){
var p__7892 = null;
if (arguments.length > 1) {
  p__7892 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bound_coll__delegate.call(this,atm,p__7892);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__7897){
var atm = cljs.core.first(arglist__7897);
var p__7892 = cljs.core.rest(arglist__7897);
return bound_coll__delegate(atm,p__7892);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__7898){
var vec__7900 = p__7898;
var opts = cljs.core.nth.call(null,vec__7900,(0),null);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1148689641),as);
var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)));
var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__7900,opts){
return (function (_,___$1,___$2,neue){
return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__7900,opts))
);

crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));

return bc;
};
var map_bound = function (as,atm,var_args){
var p__7898 = null;
if (arguments.length > 2) {
  p__7898 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return map_bound__delegate.call(this,as,atm,p__7898);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__7901){
var as = cljs.core.first(arglist__7901);
arglist__7901 = cljs.core.next(arglist__7901);
var atm = cljs.core.first(arglist__7901);
var p__7898 = cljs.core.rest(arglist__7901);
return map_bound__delegate(as,atm,p__7898);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){
var G__7903 = b;
if(G__7903){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__7903.crate$binding$bindable$;
}
})())){
return true;
} else {
if((!G__7903.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__7903);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__7903);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){
var G__7905 = b;
if(G__7905){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__7905.crate$binding$bindable_coll$;
}
})())){
return true;
} else {
if((!G__7905.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__7905);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__7905);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){
var G__7907 = atm;
if(G__7907){
var bit__4284__auto__ = (G__7907.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4284__auto__) || (G__7907.cljs$core$IDeref$)){
return true;
} else {
if((!G__7907.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__7907);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__7907);
}
});
crate.binding.value = (function value(b){
return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){
return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){
return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__7908){
var vec__7910 = p__7908;
var func = cljs.core.nth.call(null,vec__7910,(0),null);
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
var p__7908 = null;
if (arguments.length > 1) {
  p__7908 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bound__delegate.call(this,atm,p__7908);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__7911){
var atm = cljs.core.first(arglist__7911);
var p__7908 = cljs.core.rest(arglist__7911);
return bound__delegate(atm,p__7908);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;
