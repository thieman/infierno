// Compiled by ClojureScript 0.0-2411
goog.provide('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.array');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string');
cljs.core._STAR_clojurescript_version_STAR_ = "0.0-2411";
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a different way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Set *print-fn* to f.
*/
cljs.core.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){
return cljs.core._STAR_print_fn_STAR_ = f;
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core._STAR_print_length_STAR_ = null;
cljs.core._STAR_print_level_STAR_ = null;
cljs.core.pr_opts = (function pr_opts(){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1,cljs.core._STAR_flush_on_newline_STAR_,cljs.core.constant$keyword$2,cljs.core._STAR_print_readably_STAR_,cljs.core.constant$keyword$3,cljs.core._STAR_print_meta_STAR_,cljs.core.constant$keyword$4,cljs.core._STAR_print_dup_STAR_,cljs.core.constant$keyword$5,cljs.core._STAR_print_length_STAR_], null);
});
/**
* Set *print-fn* to console.log
*/
cljs.core.enable_console_print_BANG_ = (function enable_console_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10474__delegate = function (args){
return console.log.apply(console,(function (){var G__10473 = args;
return (cljs.core.into_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(G__10473) : cljs.core.into_array.call(null,G__10473));
})());
};
var G__10474 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10474__delegate.call(this,args);};
G__10474.cljs$lang$maxFixedArity = 0;
G__10474.cljs$lang$applyTo = (function (arglist__10475){
var args = cljs.core.seq(arglist__10475);
return G__10474__delegate(args);
});
G__10474.cljs$core$IFn$_invoke$arity$variadic = G__10474__delegate;
return G__10474;
})()
;
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
cljs.core.not_native = null;

/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.array_QMARK_ = (function array_QMARK_(x){
return x instanceof Array;
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return typeof n === 'number';
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x)){
return false;
} else {
return true;
}
});
/**
* Returns true if x is not nil, false otherwise.
*/
cljs.core.some_QMARK_ = (function some_QMARK_(x){
return !((x == null));
});
cljs.core.object_QMARK_ = (function object_QMARK_(x){
if(!((x == null))){
return (x.constructor === Object);
} else {
return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var G__10477 = x;
return goog.isString(G__10477);
});
/**
* Internal - do not use!
*/
cljs.core.native_satisfies_QMARK_ = (function native_satisfies_QMARK_(p,x){
var x__$1 = (((x == null))?null:x);
if((p[(function (){var G__10479 = x__$1;
return goog.typeOf(G__10479);
})()])){
return true;
} else {
if((p["_"])){
return true;
} else {
return false;

}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.type = (function type(x){
if((x == null)){
return null;
} else {
return x.constructor;
}
});
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
var ty = cljs.core.type(obj);
var ty__$1 = (cljs.core.truth_((function (){var and__3596__auto__ = ty;
if(cljs.core.truth_(and__3596__auto__)){
return ty.cljs$lang$type;
} else {
return and__3596__auto__;
}
})())?ty.cljs$lang$ctorStr:(function (){var G__10481 = obj;
return goog.typeOf(G__10481);
})());
return (new Error(["No protocol method ",proto," defined for type ",ty__$1,": ",obj].join("")));
});
cljs.core.type__GT_str = (function type__GT_str(ty){
var temp__4124__auto__ = ty.cljs$lang$ctorStr;
if(cljs.core.truth_(temp__4124__auto__)){
var s = temp__4124__auto__;
return s;
} else {
return [cljs.core.str(ty)].join('');
}
});
if((typeof Symbol !== 'undefined') && (((function (){var G__10483 = Symbol;
return goog.typeOf(G__10483);
})() === "function"))){
cljs.core.ITER_SYMBOL = Symbol.iterator;
} else {
cljs.core.ITER_SYMBOL = "@@iterator";
}
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.cljs$core$IFn$_invoke$arity$1(size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$core$IFn$_invoke$arity$1 = make_array__1;
make_array.cljs$core$IFn$_invoke$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(arr){
var len = arr.length;
var new_arr = (new Array(len));
var n__4490__auto___10485 = len;
var i_10486 = (0);
while(true){
if((i_10486 < n__4490__auto___10485)){
(new_arr[i_10486] = (arr[i_10486]));

var G__10487 = (i_10486 + (1));
i_10486 = G__10487;
continue;
} else {
}
break;
}

return new_arr;
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__10496__delegate = function (array,i,idxs){
var G__10493 = aget;
var G__10494 = aget.cljs$core$IFn$_invoke$arity$2(array,i);
var G__10495 = idxs;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__10493,G__10494,G__10495) : cljs.core.apply.call(null,G__10493,G__10494,G__10495));
};
var G__10496 = function (array,i,var_args){
var idxs = null;
if (arguments.length > 2) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10496__delegate.call(this,array,i,idxs);};
G__10496.cljs$lang$maxFixedArity = 2;
G__10496.cljs$lang$applyTo = (function (arglist__10497){
var array = cljs.core.first(arglist__10497);
arglist__10497 = cljs.core.next(arglist__10497);
var i = cljs.core.first(arglist__10497);
var idxs = cljs.core.rest(arglist__10497);
return G__10496__delegate(array,i,idxs);
});
G__10496.cljs$core$IFn$_invoke$arity$variadic = G__10496__delegate;
return G__10496;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$core$IFn$_invoke$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$core$IFn$_invoke$arity$2 = aget__2;
aget.cljs$core$IFn$_invoke$arity$variadic = aget__3.cljs$core$IFn$_invoke$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
* @param {...*} var_args
*/
cljs.core.aset = (function() {
var aset = null;
var aset__3 = (function (array,i,val){
return (array[i] = val);
});
var aset__4 = (function() { 
var G__10506__delegate = function (array,idx,idx2,idxv){
var G__10502 = aset;
var G__10503 = (array[idx]);
var G__10504 = idx2;
var G__10505 = idxv;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$4(G__10502,G__10503,G__10504,G__10505) : cljs.core.apply.call(null,G__10502,G__10503,G__10504,G__10505));
};
var G__10506 = function (array,idx,idx2,var_args){
var idxv = null;
if (arguments.length > 3) {
  idxv = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10506__delegate.call(this,array,idx,idx2,idxv);};
G__10506.cljs$lang$maxFixedArity = 3;
G__10506.cljs$lang$applyTo = (function (arglist__10507){
var array = cljs.core.first(arglist__10507);
arglist__10507 = cljs.core.next(arglist__10507);
var idx = cljs.core.first(arglist__10507);
arglist__10507 = cljs.core.next(arglist__10507);
var idx2 = cljs.core.first(arglist__10507);
var idxv = cljs.core.rest(arglist__10507);
return G__10506__delegate(array,idx,idx2,idxv);
});
G__10506.cljs$core$IFn$_invoke$arity$variadic = G__10506__delegate;
return G__10506;
})()
;
aset = function(array,idx,idx2,var_args){
var idxv = var_args;
switch(arguments.length){
case 3:
return aset__3.call(this,array,idx,idx2);
default:
return aset__4.cljs$core$IFn$_invoke$arity$variadic(array,idx,idx2, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aset.cljs$lang$maxFixedArity = 3;
aset.cljs$lang$applyTo = aset__4.cljs$lang$applyTo;
aset.cljs$core$IFn$_invoke$arity$3 = aset__3;
aset.cljs$core$IFn$_invoke$arity$variadic = aset__4.cljs$core$IFn$_invoke$arity$variadic;
return aset;
})()
;
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.cljs$core$IFn$_invoke$arity$2(null,aseq);
});
var into_array__2 = (function (type,aseq){
var G__10513 = (function (a,x){
a.push(x);

return a;
});
var G__10514 = [];
var G__10515 = aseq;
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__10513,G__10514,G__10515) : cljs.core.reduce.call(null,G__10513,G__10514,G__10515));
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$core$IFn$_invoke$arity$1 = into_array__1;
into_array.cljs$core$IFn$_invoke$arity$2 = into_array__2;
return into_array;
})()
;
/**
* Invoke JavaScript object method via string. Needed when the
* string is not a valid unquoted property name.
* @param {...*} var_args
*/
cljs.core.js_invoke = (function() { 
var js_invoke__delegate = function (obj,s,args){
return (obj[s]).apply(obj,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var js_invoke = function (obj,s,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return js_invoke__delegate.call(this,obj,s,args);};
js_invoke.cljs$lang$maxFixedArity = 2;
js_invoke.cljs$lang$applyTo = (function (arglist__10516){
var obj = cljs.core.first(arglist__10516);
arglist__10516 = cljs.core.next(arglist__10516);
var s = cljs.core.first(arglist__10516);
var args = cljs.core.rest(arglist__10516);
return js_invoke__delegate(obj,s,args);
});
js_invoke.cljs$core$IFn$_invoke$arity$variadic = js_invoke__delegate;
return js_invoke;
})()
;

cljs.core.Fn = (function (){var obj10518 = {};
return obj10518;
})();


cljs.core.IFn = (function (){var obj10520 = {};
return obj10520;
})();

cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$1;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10566 = x__4247__auto__;
return goog.typeOf(G__10566);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$2;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10568 = x__4247__auto__;
return goog.typeOf(G__10568);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$3;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10570 = x__4247__auto__;
return goog.typeOf(G__10570);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$4;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10572 = x__4247__auto__;
return goog.typeOf(G__10572);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$5;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10574 = x__4247__auto__;
return goog.typeOf(G__10574);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$6;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10576 = x__4247__auto__;
return goog.typeOf(G__10576);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$7;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10578 = x__4247__auto__;
return goog.typeOf(G__10578);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$8;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10580 = x__4247__auto__;
return goog.typeOf(G__10580);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$9;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10582 = x__4247__auto__;
return goog.typeOf(G__10582);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$10;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10584 = x__4247__auto__;
return goog.typeOf(G__10584);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$11;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10586 = x__4247__auto__;
return goog.typeOf(G__10586);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$12;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10588 = x__4247__auto__;
return goog.typeOf(G__10588);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$13;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10590 = x__4247__auto__;
return goog.typeOf(G__10590);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$14;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10592 = x__4247__auto__;
return goog.typeOf(G__10592);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$15;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10594 = x__4247__auto__;
return goog.typeOf(G__10594);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$16;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10596 = x__4247__auto__;
return goog.typeOf(G__10596);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$17;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10598 = x__4247__auto__;
return goog.typeOf(G__10598);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$18;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10600 = x__4247__auto__;
return goog.typeOf(G__10600);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$19;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10602 = x__4247__auto__;
return goog.typeOf(G__10602);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$20;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10604 = x__4247__auto__;
return goog.typeOf(G__10604);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$21;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10606 = x__4247__auto__;
return goog.typeOf(G__10606);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
});
var _invoke__22 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IFn$_invoke$arity$22;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$22(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._invoke[(function (){var G__10608 = x__4247__auto__;
return goog.typeOf(G__10608);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._invoke["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return _invoke__22.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$core$IFn$_invoke$arity$1 = _invoke__1;
_invoke.cljs$core$IFn$_invoke$arity$2 = _invoke__2;
_invoke.cljs$core$IFn$_invoke$arity$3 = _invoke__3;
_invoke.cljs$core$IFn$_invoke$arity$4 = _invoke__4;
_invoke.cljs$core$IFn$_invoke$arity$5 = _invoke__5;
_invoke.cljs$core$IFn$_invoke$arity$6 = _invoke__6;
_invoke.cljs$core$IFn$_invoke$arity$7 = _invoke__7;
_invoke.cljs$core$IFn$_invoke$arity$8 = _invoke__8;
_invoke.cljs$core$IFn$_invoke$arity$9 = _invoke__9;
_invoke.cljs$core$IFn$_invoke$arity$10 = _invoke__10;
_invoke.cljs$core$IFn$_invoke$arity$11 = _invoke__11;
_invoke.cljs$core$IFn$_invoke$arity$12 = _invoke__12;
_invoke.cljs$core$IFn$_invoke$arity$13 = _invoke__13;
_invoke.cljs$core$IFn$_invoke$arity$14 = _invoke__14;
_invoke.cljs$core$IFn$_invoke$arity$15 = _invoke__15;
_invoke.cljs$core$IFn$_invoke$arity$16 = _invoke__16;
_invoke.cljs$core$IFn$_invoke$arity$17 = _invoke__17;
_invoke.cljs$core$IFn$_invoke$arity$18 = _invoke__18;
_invoke.cljs$core$IFn$_invoke$arity$19 = _invoke__19;
_invoke.cljs$core$IFn$_invoke$arity$20 = _invoke__20;
_invoke.cljs$core$IFn$_invoke$arity$21 = _invoke__21;
_invoke.cljs$core$IFn$_invoke$arity$22 = _invoke__22;
return _invoke;
})()
;


cljs.core.ICloneable = (function (){var obj10610 = {};
return obj10610;
})();

cljs.core._clone = (function _clone(value){
if((function (){var and__3596__auto__ = value;
if(and__3596__auto__){
return value.cljs$core$ICloneable$_clone$arity$1;
} else {
return and__3596__auto__;
}
})()){
return value.cljs$core$ICloneable$_clone$arity$1(value);
} else {
var x__4247__auto__ = (((value == null))?null:value);
return (function (){var or__3608__auto__ = (cljs.core._clone[(function (){var G__10614 = x__4247__auto__;
return goog.typeOf(G__10614);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._clone["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ICloneable.-clone",value);
}
}
})().call(null,value);
}
});


cljs.core.ICounted = (function (){var obj10616 = {};
return obj10616;
})();

cljs.core._count = (function _count(coll){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$ICounted$_count$arity$1;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$ICounted$_count$arity$1(coll);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._count[(function (){var G__10620 = x__4247__auto__;
return goog.typeOf(G__10620);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._count["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IEmptyableCollection = (function (){var obj10622 = {};
return obj10622;
})();

cljs.core._empty = (function _empty(coll){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._empty[(function (){var G__10626 = x__4247__auto__;
return goog.typeOf(G__10626);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._empty["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ICollection = (function (){var obj10628 = {};
return obj10628;
})();

cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$ICollection$_conj$arity$2;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._conj[(function (){var G__10632 = x__4247__auto__;
return goog.typeOf(G__10632);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._conj["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});


cljs.core.IIndexed = (function (){var obj10634 = {};
return obj10634;
})();

cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IIndexed$_nth$arity$2;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._nth[(function (){var G__10640 = x__4247__auto__;
return goog.typeOf(G__10640);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._nth["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IIndexed$_nth$arity$3;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._nth[(function (){var G__10642 = x__4247__auto__;
return goog.typeOf(G__10642);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._nth["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$core$IFn$_invoke$arity$2 = _nth__2;
_nth.cljs$core$IFn$_invoke$arity$3 = _nth__3;
return _nth;
})()
;


cljs.core.ASeq = (function (){var obj10644 = {};
return obj10644;
})();


cljs.core.ISeq = (function (){var obj10646 = {};
return obj10646;
})();

cljs.core._first = (function _first(coll){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$ISeq$_first$arity$1;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$ISeq$_first$arity$1(coll);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._first[(function (){var G__10650 = x__4247__auto__;
return goog.typeOf(G__10650);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._first["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});

cljs.core._rest = (function _rest(coll){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$ISeq$_rest$arity$1;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._rest[(function (){var G__10654 = x__4247__auto__;
return goog.typeOf(G__10654);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._rest["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});


cljs.core.INext = (function (){var obj10656 = {};
return obj10656;
})();

cljs.core._next = (function _next(coll){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$INext$_next$arity$1;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$INext$_next$arity$1(coll);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._next[(function (){var G__10660 = x__4247__auto__;
return goog.typeOf(G__10660);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._next["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ILookup = (function (){var obj10662 = {};
return obj10662;
})();

cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3596__auto__ = o;
if(and__3596__auto__){
return o.cljs$core$ILookup$_lookup$arity$2;
} else {
return and__3596__auto__;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else {
var x__4247__auto__ = (((o == null))?null:o);
return (function (){var or__3608__auto__ = (cljs.core._lookup[(function (){var G__10668 = x__4247__auto__;
return goog.typeOf(G__10668);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._lookup["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3596__auto__ = o;
if(and__3596__auto__){
return o.cljs$core$ILookup$_lookup$arity$3;
} else {
return and__3596__auto__;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else {
var x__4247__auto__ = (((o == null))?null:o);
return (function (){var or__3608__auto__ = (cljs.core._lookup[(function (){var G__10670 = x__4247__auto__;
return goog.typeOf(G__10670);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._lookup["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$core$IFn$_invoke$arity$2 = _lookup__2;
_lookup.cljs$core$IFn$_invoke$arity$3 = _lookup__3;
return _lookup;
})()
;


cljs.core.IAssociative = (function (){var obj10672 = {};
return obj10672;
})();

cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._contains_key_QMARK_[(function (){var G__10676 = x__4247__auto__;
return goog.typeOf(G__10676);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});

cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IAssociative$_assoc$arity$3;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._assoc[(function (){var G__10680 = x__4247__auto__;
return goog.typeOf(G__10680);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._assoc["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});


cljs.core.IMap = (function (){var obj10682 = {};
return obj10682;
})();

cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IMap$_dissoc$arity$2;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._dissoc[(function (){var G__10686 = x__4247__auto__;
return goog.typeOf(G__10686);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._dissoc["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});


cljs.core.IMapEntry = (function (){var obj10688 = {};
return obj10688;
})();

cljs.core._key = (function _key(coll){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IMapEntry$_key$arity$1;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._key[(function (){var G__10692 = x__4247__auto__;
return goog.typeOf(G__10692);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._key["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});

cljs.core._val = (function _val(coll){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IMapEntry$_val$arity$1;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._val[(function (){var G__10696 = x__4247__auto__;
return goog.typeOf(G__10696);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._val["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ISet = (function (){var obj10698 = {};
return obj10698;
})();

cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$ISet$_disjoin$arity$2;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._disjoin[(function (){var G__10702 = x__4247__auto__;
return goog.typeOf(G__10702);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._disjoin["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});


cljs.core.IStack = (function (){var obj10704 = {};
return obj10704;
})();

cljs.core._peek = (function _peek(coll){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IStack$_peek$arity$1;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IStack$_peek$arity$1(coll);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._peek[(function (){var G__10708 = x__4247__auto__;
return goog.typeOf(G__10708);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._peek["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});

cljs.core._pop = (function _pop(coll){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IStack$_pop$arity$1;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IStack$_pop$arity$1(coll);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._pop[(function (){var G__10712 = x__4247__auto__;
return goog.typeOf(G__10712);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._pop["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IVector = (function (){var obj10714 = {};
return obj10714;
})();

cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IVector$_assoc_n$arity$3;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._assoc_n[(function (){var G__10718 = x__4247__auto__;
return goog.typeOf(G__10718);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._assoc_n["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});


cljs.core.IDeref = (function (){var obj10720 = {};
return obj10720;
})();

cljs.core._deref = (function _deref(o){
if((function (){var and__3596__auto__ = o;
if(and__3596__auto__){
return o.cljs$core$IDeref$_deref$arity$1;
} else {
return and__3596__auto__;
}
})()){
return o.cljs$core$IDeref$_deref$arity$1(o);
} else {
var x__4247__auto__ = (((o == null))?null:o);
return (function (){var or__3608__auto__ = (cljs.core._deref[(function (){var G__10724 = x__4247__auto__;
return goog.typeOf(G__10724);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._deref["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});


cljs.core.IDerefWithTimeout = (function (){var obj10726 = {};
return obj10726;
})();

cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3596__auto__ = o;
if(and__3596__auto__){
return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else {
return and__3596__auto__;
}
})()){
return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else {
var x__4247__auto__ = (((o == null))?null:o);
return (function (){var or__3608__auto__ = (cljs.core._deref_with_timeout[(function (){var G__10730 = x__4247__auto__;
return goog.typeOf(G__10730);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._deref_with_timeout["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});


cljs.core.IMeta = (function (){var obj10732 = {};
return obj10732;
})();

cljs.core._meta = (function _meta(o){
if((function (){var and__3596__auto__ = o;
if(and__3596__auto__){
return o.cljs$core$IMeta$_meta$arity$1;
} else {
return and__3596__auto__;
}
})()){
return o.cljs$core$IMeta$_meta$arity$1(o);
} else {
var x__4247__auto__ = (((o == null))?null:o);
return (function (){var or__3608__auto__ = (cljs.core._meta[(function (){var G__10736 = x__4247__auto__;
return goog.typeOf(G__10736);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._meta["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});


cljs.core.IWithMeta = (function (){var obj10738 = {};
return obj10738;
})();

cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3596__auto__ = o;
if(and__3596__auto__){
return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else {
return and__3596__auto__;
}
})()){
return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else {
var x__4247__auto__ = (((o == null))?null:o);
return (function (){var or__3608__auto__ = (cljs.core._with_meta[(function (){var G__10742 = x__4247__auto__;
return goog.typeOf(G__10742);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._with_meta["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});


cljs.core.IReduce = (function (){var obj10744 = {};
return obj10744;
})();

cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IReduce$_reduce$arity$2;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._reduce[(function (){var G__10750 = x__4247__auto__;
return goog.typeOf(G__10750);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._reduce["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IReduce$_reduce$arity$3;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._reduce[(function (){var G__10752 = x__4247__auto__;
return goog.typeOf(G__10752);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._reduce["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$core$IFn$_invoke$arity$2 = _reduce__2;
_reduce.cljs$core$IFn$_invoke$arity$3 = _reduce__3;
return _reduce;
})()
;


cljs.core.IKVReduce = (function (){var obj10754 = {};
return obj10754;
})();

cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._kv_reduce[(function (){var G__10758 = x__4247__auto__;
return goog.typeOf(G__10758);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._kv_reduce["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});


cljs.core.IEquiv = (function (){var obj10760 = {};
return obj10760;
})();

cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3596__auto__ = o;
if(and__3596__auto__){
return o.cljs$core$IEquiv$_equiv$arity$2;
} else {
return and__3596__auto__;
}
})()){
return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else {
var x__4247__auto__ = (((o == null))?null:o);
return (function (){var or__3608__auto__ = (cljs.core._equiv[(function (){var G__10764 = x__4247__auto__;
return goog.typeOf(G__10764);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._equiv["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});


cljs.core.IHash = (function (){var obj10766 = {};
return obj10766;
})();

cljs.core._hash = (function _hash(o){
if((function (){var and__3596__auto__ = o;
if(and__3596__auto__){
return o.cljs$core$IHash$_hash$arity$1;
} else {
return and__3596__auto__;
}
})()){
return o.cljs$core$IHash$_hash$arity$1(o);
} else {
var x__4247__auto__ = (((o == null))?null:o);
return (function (){var or__3608__auto__ = (cljs.core._hash[(function (){var G__10770 = x__4247__auto__;
return goog.typeOf(G__10770);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._hash["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});


cljs.core.ISeqable = (function (){var obj10772 = {};
return obj10772;
})();

cljs.core._seq = (function _seq(o){
if((function (){var and__3596__auto__ = o;
if(and__3596__auto__){
return o.cljs$core$ISeqable$_seq$arity$1;
} else {
return and__3596__auto__;
}
})()){
return o.cljs$core$ISeqable$_seq$arity$1(o);
} else {
var x__4247__auto__ = (((o == null))?null:o);
return (function (){var or__3608__auto__ = (cljs.core._seq[(function (){var G__10776 = x__4247__auto__;
return goog.typeOf(G__10776);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._seq["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});


cljs.core.ISequential = (function (){var obj10778 = {};
return obj10778;
})();


cljs.core.IList = (function (){var obj10780 = {};
return obj10780;
})();


cljs.core.IRecord = (function (){var obj10782 = {};
return obj10782;
})();


cljs.core.IReversible = (function (){var obj10784 = {};
return obj10784;
})();

cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IReversible$_rseq$arity$1;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._rseq[(function (){var G__10788 = x__4247__auto__;
return goog.typeOf(G__10788);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._rseq["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ISorted = (function (){var obj10790 = {};
return obj10790;
})();

cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._sorted_seq[(function (){var G__10794 = x__4247__auto__;
return goog.typeOf(G__10794);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._sorted_seq["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});

cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._sorted_seq_from[(function (){var G__10798 = x__4247__auto__;
return goog.typeOf(G__10798);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._sorted_seq_from["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});

cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$ISorted$_entry_key$arity$2;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._entry_key[(function (){var G__10802 = x__4247__auto__;
return goog.typeOf(G__10802);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._entry_key["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});

cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$ISorted$_comparator$arity$1;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._comparator[(function (){var G__10806 = x__4247__auto__;
return goog.typeOf(G__10806);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._comparator["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IWriter = (function (){var obj10808 = {};
return obj10808;
})();

cljs.core._write = (function _write(writer,s){
if((function (){var and__3596__auto__ = writer;
if(and__3596__auto__){
return writer.cljs$core$IWriter$_write$arity$2;
} else {
return and__3596__auto__;
}
})()){
return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else {
var x__4247__auto__ = (((writer == null))?null:writer);
return (function (){var or__3608__auto__ = (cljs.core._write[(function (){var G__10812 = x__4247__auto__;
return goog.typeOf(G__10812);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._write["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});

cljs.core._flush = (function _flush(writer){
if((function (){var and__3596__auto__ = writer;
if(and__3596__auto__){
return writer.cljs$core$IWriter$_flush$arity$1;
} else {
return and__3596__auto__;
}
})()){
return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else {
var x__4247__auto__ = (((writer == null))?null:writer);
return (function (){var or__3608__auto__ = (cljs.core._flush[(function (){var G__10816 = x__4247__auto__;
return goog.typeOf(G__10816);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._flush["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});


cljs.core.IPrintWithWriter = (function (){var obj10818 = {};
return obj10818;
})();

cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3596__auto__ = o;
if(and__3596__auto__){
return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else {
return and__3596__auto__;
}
})()){
return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else {
var x__4247__auto__ = (((o == null))?null:o);
return (function (){var or__3608__auto__ = (cljs.core._pr_writer[(function (){var G__10822 = x__4247__auto__;
return goog.typeOf(G__10822);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._pr_writer["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});


cljs.core.IPending = (function (){var obj10824 = {};
return obj10824;
})();

cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3596__auto__ = d;
if(and__3596__auto__){
return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else {
return and__3596__auto__;
}
})()){
return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else {
var x__4247__auto__ = (((d == null))?null:d);
return (function (){var or__3608__auto__ = (cljs.core._realized_QMARK_[(function (){var G__10828 = x__4247__auto__;
return goog.typeOf(G__10828);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._realized_QMARK_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});


cljs.core.IWatchable = (function (){var obj10830 = {};
return obj10830;
})();

cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._notify_watches[(function (){var G__10834 = x__4247__auto__;
return goog.typeOf(G__10834);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._notify_watches["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});

cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._add_watch[(function (){var G__10838 = x__4247__auto__;
return goog.typeOf(G__10838);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._add_watch["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});

cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else {
return and__3596__auto__;
}
})()){
return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (cljs.core._remove_watch[(function (){var G__10842 = x__4247__auto__;
return goog.typeOf(G__10842);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._remove_watch["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});


cljs.core.IEditableCollection = (function (){var obj10844 = {};
return obj10844;
})();

cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._as_transient[(function (){var G__10848 = x__4247__auto__;
return goog.typeOf(G__10848);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._as_transient["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ITransientCollection = (function (){var obj10850 = {};
return obj10850;
})();

cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3596__auto__ = tcoll;
if(and__3596__auto__){
return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else {
return and__3596__auto__;
}
})()){
return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else {
var x__4247__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3608__auto__ = (cljs.core._conj_BANG_[(function (){var G__10854 = x__4247__auto__;
return goog.typeOf(G__10854);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._conj_BANG_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});

cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3596__auto__ = tcoll;
if(and__3596__auto__){
return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else {
return and__3596__auto__;
}
})()){
return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else {
var x__4247__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3608__auto__ = (cljs.core._persistent_BANG_[(function (){var G__10858 = x__4247__auto__;
return goog.typeOf(G__10858);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._persistent_BANG_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});


cljs.core.ITransientAssociative = (function (){var obj10860 = {};
return obj10860;
})();

cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3596__auto__ = tcoll;
if(and__3596__auto__){
return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else {
return and__3596__auto__;
}
})()){
return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else {
var x__4247__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3608__auto__ = (cljs.core._assoc_BANG_[(function (){var G__10864 = x__4247__auto__;
return goog.typeOf(G__10864);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._assoc_BANG_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});


cljs.core.ITransientMap = (function (){var obj10866 = {};
return obj10866;
})();

cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3596__auto__ = tcoll;
if(and__3596__auto__){
return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else {
return and__3596__auto__;
}
})()){
return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else {
var x__4247__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3608__auto__ = (cljs.core._dissoc_BANG_[(function (){var G__10870 = x__4247__auto__;
return goog.typeOf(G__10870);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._dissoc_BANG_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});


cljs.core.ITransientVector = (function (){var obj10872 = {};
return obj10872;
})();

cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3596__auto__ = tcoll;
if(and__3596__auto__){
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else {
return and__3596__auto__;
}
})()){
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else {
var x__4247__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3608__auto__ = (cljs.core._assoc_n_BANG_[(function (){var G__10876 = x__4247__auto__;
return goog.typeOf(G__10876);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});

cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3596__auto__ = tcoll;
if(and__3596__auto__){
return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else {
return and__3596__auto__;
}
})()){
return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else {
var x__4247__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3608__auto__ = (cljs.core._pop_BANG_[(function (){var G__10880 = x__4247__auto__;
return goog.typeOf(G__10880);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._pop_BANG_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});


cljs.core.ITransientSet = (function (){var obj10882 = {};
return obj10882;
})();

cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3596__auto__ = tcoll;
if(and__3596__auto__){
return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else {
return and__3596__auto__;
}
})()){
return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else {
var x__4247__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3608__auto__ = (cljs.core._disjoin_BANG_[(function (){var G__10886 = x__4247__auto__;
return goog.typeOf(G__10886);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._disjoin_BANG_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});


cljs.core.IComparable = (function (){var obj10888 = {};
return obj10888;
})();

cljs.core._compare = (function _compare(x,y){
if((function (){var and__3596__auto__ = x;
if(and__3596__auto__){
return x.cljs$core$IComparable$_compare$arity$2;
} else {
return and__3596__auto__;
}
})()){
return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else {
var x__4247__auto__ = (((x == null))?null:x);
return (function (){var or__3608__auto__ = (cljs.core._compare[(function (){var G__10892 = x__4247__auto__;
return goog.typeOf(G__10892);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._compare["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});


cljs.core.IChunk = (function (){var obj10894 = {};
return obj10894;
})();

cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IChunk$_drop_first$arity$1;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._drop_first[(function (){var G__10898 = x__4247__auto__;
return goog.typeOf(G__10898);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._drop_first["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IChunkedSeq = (function (){var obj10900 = {};
return obj10900;
})();

cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._chunked_first[(function (){var G__10904 = x__4247__auto__;
return goog.typeOf(G__10904);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._chunked_first["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});

cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._chunked_rest[(function (){var G__10908 = x__4247__auto__;
return goog.typeOf(G__10908);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._chunked_rest["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IChunkedNext = (function (){var obj10910 = {};
return obj10910;
})();

cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._chunked_next[(function (){var G__10914 = x__4247__auto__;
return goog.typeOf(G__10914);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._chunked_next["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});


cljs.core.INamed = (function (){var obj10916 = {};
return obj10916;
})();

cljs.core._name = (function _name(x){
if((function (){var and__3596__auto__ = x;
if(and__3596__auto__){
return x.cljs$core$INamed$_name$arity$1;
} else {
return and__3596__auto__;
}
})()){
return x.cljs$core$INamed$_name$arity$1(x);
} else {
var x__4247__auto__ = (((x == null))?null:x);
return (function (){var or__3608__auto__ = (cljs.core._name[(function (){var G__10920 = x__4247__auto__;
return goog.typeOf(G__10920);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._name["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("INamed.-name",x);
}
}
})().call(null,x);
}
});

cljs.core._namespace = (function _namespace(x){
if((function (){var and__3596__auto__ = x;
if(and__3596__auto__){
return x.cljs$core$INamed$_namespace$arity$1;
} else {
return and__3596__auto__;
}
})()){
return x.cljs$core$INamed$_namespace$arity$1(x);
} else {
var x__4247__auto__ = (((x == null))?null:x);
return (function (){var or__3608__auto__ = (cljs.core._namespace[(function (){var G__10924 = x__4247__auto__;
return goog.typeOf(G__10924);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._namespace["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("INamed.-namespace",x);
}
}
})().call(null,x);
}
});


cljs.core.IAtom = (function (){var obj10926 = {};
return obj10926;
})();


cljs.core.IReset = (function (){var obj10928 = {};
return obj10928;
})();

cljs.core._reset_BANG_ = (function _reset_BANG_(o,new_value){
if((function (){var and__3596__auto__ = o;
if(and__3596__auto__){
return o.cljs$core$IReset$_reset_BANG_$arity$2;
} else {
return and__3596__auto__;
}
})()){
return o.cljs$core$IReset$_reset_BANG_$arity$2(o,new_value);
} else {
var x__4247__auto__ = (((o == null))?null:o);
return (function (){var or__3608__auto__ = (cljs.core._reset_BANG_[(function (){var G__10932 = x__4247__auto__;
return goog.typeOf(G__10932);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._reset_BANG_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IReset.-reset!",o);
}
}
})().call(null,o,new_value);
}
});


cljs.core.ISwap = (function (){var obj10934 = {};
return obj10934;
})();

cljs.core._swap_BANG_ = (function() {
var _swap_BANG_ = null;
var _swap_BANG___2 = (function (o,f){
if((function (){var and__3596__auto__ = o;
if(and__3596__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$2;
} else {
return and__3596__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$2(o,f);
} else {
var x__4247__auto__ = (((o == null))?null:o);
return (function (){var or__3608__auto__ = (cljs.core._swap_BANG_[(function (){var G__10944 = x__4247__auto__;
return goog.typeOf(G__10944);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f);
}
});
var _swap_BANG___3 = (function (o,f,a){
if((function (){var and__3596__auto__ = o;
if(and__3596__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$3;
} else {
return and__3596__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$3(o,f,a);
} else {
var x__4247__auto__ = (((o == null))?null:o);
return (function (){var or__3608__auto__ = (cljs.core._swap_BANG_[(function (){var G__10946 = x__4247__auto__;
return goog.typeOf(G__10946);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a);
}
});
var _swap_BANG___4 = (function (o,f,a,b){
if((function (){var and__3596__auto__ = o;
if(and__3596__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$4;
} else {
return and__3596__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$4(o,f,a,b);
} else {
var x__4247__auto__ = (((o == null))?null:o);
return (function (){var or__3608__auto__ = (cljs.core._swap_BANG_[(function (){var G__10948 = x__4247__auto__;
return goog.typeOf(G__10948);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b);
}
});
var _swap_BANG___5 = (function (o,f,a,b,xs){
if((function (){var and__3596__auto__ = o;
if(and__3596__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$5;
} else {
return and__3596__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$5(o,f,a,b,xs);
} else {
var x__4247__auto__ = (((o == null))?null:o);
return (function (){var or__3608__auto__ = (cljs.core._swap_BANG_[(function (){var G__10950 = x__4247__auto__;
return goog.typeOf(G__10950);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b,xs);
}
});
_swap_BANG_ = function(o,f,a,b,xs){
switch(arguments.length){
case 2:
return _swap_BANG___2.call(this,o,f);
case 3:
return _swap_BANG___3.call(this,o,f,a);
case 4:
return _swap_BANG___4.call(this,o,f,a,b);
case 5:
return _swap_BANG___5.call(this,o,f,a,b,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = _swap_BANG___2;
_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = _swap_BANG___3;
_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = _swap_BANG___4;
_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = _swap_BANG___5;
return _swap_BANG_;
})()
;


cljs.core.IIterable = (function (){var obj10952 = {};
return obj10952;
})();

cljs.core._iterator = (function _iterator(coll){
if((function (){var and__3596__auto__ = coll;
if(and__3596__auto__){
return coll.cljs$core$IIterable$_iterator$arity$1;
} else {
return and__3596__auto__;
}
})()){
return coll.cljs$core$IIterable$_iterator$arity$1(coll);
} else {
var x__4247__auto__ = (((coll == null))?null:coll);
return (function (){var or__3608__auto__ = (cljs.core._iterator[(function (){var G__10956 = x__4247__auto__;
return goog.typeOf(G__10956);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._iterator["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IIterable.-iterator",coll);
}
}
})().call(null,coll);
}
});


/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return self__.sb.append(s);
});

cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

cljs.core.StringBufferWriter.cljs$lang$type = true;

cljs.core.StringBufferWriter.cljs$lang$ctorStr = "cljs.core/StringBufferWriter";

cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/StringBufferWriter");
});

cljs.core.__GT_StringBufferWriter = (function __GT_StringBufferWriter(sb){
return (new cljs.core.StringBufferWriter(sb));
});

/**
* Support so that collections can implement toString without
* loading all the printing machinery.
*/
cljs.core.pr_str_STAR_ = (function pr_str_STAR_(obj){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,cljs.core.pr_opts());

writer.cljs$core$IWriter$_flush$arity$1(null);

return [cljs.core.str(sb)].join('');
});
cljs.core.int_rotate_left = (function int_rotate_left(x,n){
return ((x << n) | (x >>> (- n)));
});
if((typeof Math.imul !== 'undefined') && (!(((function (){var G__10959 = (4294967295);
var G__10960 = (5);
return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__10959,G__10960) : Math.imul.call(null,G__10959,G__10960));
})() === (0))))){
cljs.core.imul = (function imul(a,b){
var G__10963 = a;
var G__10964 = b;
return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__10963,G__10964) : Math.imul.call(null,G__10963,G__10964));
});
} else {
cljs.core.imul = (function imul(a,b){
var ah = ((a >>> (16)) & (65535));
var al = (a & (65535));
var bh = ((b >>> (16)) & (65535));
var bl = (b & (65535));
return (((al * bl) + ((((ah * bl) + (al * bh)) << (16)) >>> (0))) | (0));
});
}
cljs.core.m3_seed = (0);
cljs.core.m3_C1 = (3432918353);
cljs.core.m3_C2 = (461845907);
cljs.core.m3_mix_K1 = (function m3_mix_K1(k1){
return cljs.core.imul(cljs.core.int_rotate_left(cljs.core.imul(k1,cljs.core.m3_C1),(15)),cljs.core.m3_C2);
});
cljs.core.m3_mix_H1 = (function m3_mix_H1(h1,k1){
return (cljs.core.imul(cljs.core.int_rotate_left((h1 ^ k1),(13)),(5)) + (3864292196));
});
cljs.core.m3_fmix = (function m3_fmix(h1,len){
var h1__$1 = h1;
var h1__$2 = (h1__$1 ^ len);
var h1__$3 = (h1__$2 ^ (h1__$2 >>> (16)));
var h1__$4 = cljs.core.imul(h1__$3,(2246822507));
var h1__$5 = (h1__$4 ^ (h1__$4 >>> (13)));
var h1__$6 = cljs.core.imul(h1__$5,(3266489909));
var h1__$7 = (h1__$6 ^ (h1__$6 >>> (16)));
return h1__$7;
});
cljs.core.m3_hash_int = (function m3_hash_int(in$){
if((in$ === (0))){
return in$;
} else {
var k1 = cljs.core.m3_mix_K1(in$);
var h1 = cljs.core.m3_mix_H1(cljs.core.m3_seed,k1);
return cljs.core.m3_fmix(h1,(4));
}
});
cljs.core.m3_hash_unencoded_chars = (function m3_hash_unencoded_chars(in$){
var h1 = (function (){var i = (1);
var h1 = cljs.core.m3_seed;
while(true){
if((i < in$.length)){
var G__10965 = (i + (2));
var G__10966 = cljs.core.m3_mix_H1(h1,cljs.core.m3_mix_K1((in$.charCodeAt((i - (1))) | (in$.charCodeAt(i) << (16)))));
i = G__10965;
h1 = G__10966;
continue;
} else {
return h1;
}
break;
}
})();
var h1__$1 = ((((in$.length & (1)) === (1)))?(h1 ^ cljs.core.m3_mix_K1(in$.charCodeAt((in$.length - (1))))):h1);
return cljs.core.m3_fmix(h1__$1,cljs.core.imul((2),in$.length));
});



cljs.core.string_hash_cache = (function (){var obj10968 = {};
return obj10968;
})();
cljs.core.string_hash_cache_count = (0);
cljs.core.hash_string_STAR_ = (function hash_string_STAR_(s){
if(!((s == null))){
var len = s.length;
if((len > (0))){
var i = (0);
var hash = (0);
while(true){
if((i < len)){
var G__10969 = (i + (1));
var G__10970 = (cljs.core.imul((31),hash) + s.charCodeAt(i));
i = G__10969;
hash = G__10970;
continue;
} else {
return hash;
}
break;
}
} else {
return (0);
}
} else {
return (0);
}
});
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h = cljs.core.hash_string_STAR_(k);
(cljs.core.string_hash_cache[k] = h);

cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + (1));

return h;
});
cljs.core.hash_string = (function hash_string(k){
if((cljs.core.string_hash_cache_count > (255))){
cljs.core.string_hash_cache = (function (){var obj10974 = {};
return obj10974;
})();

cljs.core.string_hash_cache_count = (0);
} else {
}

var h = (cljs.core.string_hash_cache[k]);
if(typeof h === 'number'){
return h;
} else {
return cljs.core.add_to_string_hash_cache(k);
}
});
cljs.core.hash = (function hash(o){
if((function (){var G__10977 = o;
if(G__10977){
var bit__4277__auto__ = (G__10977.cljs$lang$protocol_mask$partition0$ & (4194304));
if((bit__4277__auto__) || (G__10977.cljs$core$IHash$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$IHash$_hash$arity$1(null);
} else {
if(typeof o === 'number'){
return ((function (){var G__10978 = o;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__10978) : Math.floor.call(null,G__10978));
})() % (2147483647));
} else {
if(o === true){
return (1);
} else {
if(o === false){
return (0);
} else {
if(typeof o === 'string'){
return cljs.core.m3_hash_int(cljs.core.hash_string(o));
} else {
if((o instanceof Date)){
return o.valueOf();
} else {
if((o == null)){
return (0);
} else {
return cljs.core._hash(o);

}
}
}
}
}
}
}
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + (2654435769)) + (seed << (6))) + (seed >> (2))));
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
return (x instanceof cljs.core.Symbol);
});
cljs.core.hash_symbol = (function hash_symbol(sym){
return cljs.core.hash_combine(cljs.core.m3_hash_unencoded_chars(sym.name),cljs.core.hash_string(sym.ns));
});
cljs.core.compare_symbols = (function compare_symbols(a,b){
if(cljs.core.truth_((function (){var G__10987 = a;
var G__10988 = b;
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__10987,G__10988) : cljs.core._EQ_.call(null,G__10987,G__10988));
})())){
return (0);
} else {
if(cljs.core.truth_((function (){var and__3596__auto__ = cljs.core.not(a.ns);
if(and__3596__auto__){
return b.ns;
} else {
return and__3596__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_(a.ns)){
if(cljs.core.not(b.ns)){
return (1);
} else {
var nsc = (function (){var G__10989 = a.ns;
var G__10990 = b.ns;
return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__10989,G__10990) : cljs.core.compare.call(null,G__10989,G__10990));
})();
if((nsc === (0))){
var G__10991 = a.name;
var G__10992 = b.name;
return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__10991,G__10992) : cljs.core.compare.call(null,G__10991,G__10992));
} else {
return nsc;
}
}
} else {
var G__10993 = a.name;
var G__10994 = b.name;
return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__10993,G__10994) : cljs.core.compare.call(null,G__10993,G__10994));

}
}
}
});

/**
* @constructor
*/
cljs.core.Symbol = (function (ns,name,str,_hash,_meta){
this.ns = ns;
this.name = name;
this.str = str;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2154168321;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){
var self__ = this;
var o__$1 = this;
return cljs.core._write(writer,self__.str);
});

cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
});

cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ns;
});

cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (sym){
var self__ = this;
var sym__$1 = this;
var h__4024__auto__ = self__._hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_symbol(sym__$1);
self__._hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta));
});

cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.Symbol.prototype.call = (function() {
var G__10996 = null;
var G__10996__2 = (function (self__,coll){
var self__ = this;
var self____$1 = this;
var sym = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
var G__10996__3 = (function (self__,coll,not_found){
var self__ = this;
var self____$1 = this;
var sym = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
G__10996 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__10996__2.call(this,self__,coll);
case 3:
return G__10996__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10996.cljs$core$IFn$_invoke$arity$2 = G__10996__2;
G__10996.cljs$core$IFn$_invoke$arity$3 = G__10996__3;
return G__10996;
})()
;

cljs.core.Symbol.prototype.apply = (function (self__,args10995){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args10995)));
});

cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var self__ = this;
var sym = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});

cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){
var self__ = this;
var sym = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});

cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if((other instanceof cljs.core.Symbol)){
return (self__.str === other.str);
} else {
return false;
}
});

cljs.core.Symbol.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.str;
});

cljs.core.Symbol.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Symbol.cljs$lang$type = true;

cljs.core.Symbol.cljs$lang$ctorStr = "cljs.core/Symbol";

cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/Symbol");
});

cljs.core.__GT_Symbol = (function __GT_Symbol(ns,name,str,_hash,_meta){
return (new cljs.core.Symbol(ns,name,str,_hash,_meta));
});

cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if((name instanceof cljs.core.Symbol)){
return name;
} else {
return symbol.cljs$core$IFn$_invoke$arity$2(null,name);
}
});
var symbol__2 = (function (ns,name){
var sym_str = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
return (new cljs.core.Symbol(ns,name,sym_str,null,null));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$core$IFn$_invoke$arity$1 = symbol__1;
symbol.cljs$core$IFn$_invoke$arity$2 = symbol__2;
return symbol;
})()
;


cljs.core.iterable_QMARK_ = (function iterable_QMARK_(x){
var G__11000 = x;
if(G__11000){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__11000.cljs$core$IIterable$;
}
})())){
return true;
} else {
if((!G__11000.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__11000);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__11000);
}
});
cljs.core.clone = (function clone(value){
return cljs.core._clone(value);
});
cljs.core.cloneable_QMARK_ = (function cloneable_QMARK_(value){
var G__11002 = value;
if(G__11002){
var bit__4284__auto__ = (G__11002.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4284__auto__) || (G__11002.cljs$core$ICloneable$)){
return true;
} else {
if((!G__11002.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__11002);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__11002);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__11004 = coll;
if(G__11004){
var bit__4277__auto__ = (G__11004.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4277__auto__) || (G__11004.cljs$core$ISeqable$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeqable$_seq$arity$1(null);
} else {
if(coll instanceof Array){
if((coll.length === (0))){
return null;
} else {
return (new cljs.core.IndexedSeq(coll,(0)));
}
} else {
if(typeof coll === 'string'){
if((coll.length === (0))){
return null;
} else {
return (new cljs.core.IndexedSeq(coll,(0)));
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,coll)){
return cljs.core._seq(coll);
} else {
throw (new Error([cljs.core.str(coll),cljs.core.str(" is not ISeqable")].join('')));

}
}
}
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__11006 = coll;
if(G__11006){
var bit__4277__auto__ = (G__11006.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4277__auto__) || (G__11006.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeq$_first$arity$1(null);
} else {
var s = cljs.core.seq(coll);
if((s == null)){
return null;
} else {
return cljs.core._first(s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null))){
if((function (){var G__11008 = coll;
if(G__11008){
var bit__4277__auto__ = (G__11008.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4277__auto__) || (G__11008.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeq$_rest$arity$1(null);
} else {
var s = cljs.core.seq(coll);
if(s){
return cljs.core._rest(s);
} else {
return cljs.core.List.EMPTY;
}
}
} else {
return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__11010 = coll;
if(G__11010){
var bit__4277__auto__ = (G__11010.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4277__auto__) || (G__11010.cljs$core$INext$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$INext$_next$arity$1(null);
} else {
return cljs.core.seq(cljs.core.rest(coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
if((x == null)){
return (y == null);
} else {
return ((x === y)) || (cljs.core._equiv(x,y));
}
});
var _EQ___3 = (function() { 
var G__11015__delegate = function (x,y,more){
while(true){
if(_EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
if(cljs.core.next(more)){
var G__11016 = y;
var G__11017 = cljs.core.first(more);
var G__11018 = cljs.core.next(more);
x = G__11016;
y = G__11017;
more = G__11018;
continue;
} else {
return _EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__11015 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11015__delegate.call(this,x,y,more);};
G__11015.cljs$lang$maxFixedArity = 2;
G__11015.cljs$lang$applyTo = (function (arglist__11019){
var x = cljs.core.first(arglist__11019);
arglist__11019 = cljs.core.next(arglist__11019);
var y = cljs.core.first(arglist__11019);
var more = cljs.core.rest(arglist__11019);
return G__11015__delegate(x,y,more);
});
G__11015.cljs$core$IFn$_invoke$arity$variadic = G__11015__delegate;
return G__11015;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ___1;
_EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ___2;
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ_;
})()
;

/**
* @constructor
*/
cljs.core.ES6Iterator = (function (s){
this.s = s;
})
cljs.core.ES6Iterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var x = cljs.core.first(self__.s);
self__.s = cljs.core.next(self__.s);

return {"done": false, "value": x};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6Iterator.cljs$lang$type = true;

cljs.core.ES6Iterator.cljs$lang$ctorStr = "cljs.core/ES6Iterator";

cljs.core.ES6Iterator.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/ES6Iterator");
});

cljs.core.__GT_ES6Iterator = (function __GT_ES6Iterator(s){
return (new cljs.core.ES6Iterator(s));
});

cljs.core.es6_iterator = (function es6_iterator(coll){
return (new cljs.core.ES6Iterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6IteratorSeq = (function (value,iter,_rest){
this.value = value;
this.iter = iter;
this._rest = _rest;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 8388672;
})
cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__._rest == null)){
self__._rest = (function (){var G__11020 = self__.iter;
return (cljs.core.es6_iterator_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.es6_iterator_seq.cljs$core$IFn$_invoke$arity$1(G__11020) : cljs.core.es6_iterator_seq.call(null,G__11020));
})();
} else {
}

return self__._rest;
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.ES6IteratorSeq.cljs$lang$type = true;

cljs.core.ES6IteratorSeq.cljs$lang$ctorStr = "cljs.core/ES6IteratorSeq";

cljs.core.ES6IteratorSeq.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/ES6IteratorSeq");
});

cljs.core.__GT_ES6IteratorSeq = (function __GT_ES6IteratorSeq(value,iter,_rest){
return (new cljs.core.ES6IteratorSeq(value,iter,_rest));
});

cljs.core.es6_iterator_seq = (function es6_iterator_seq(iter){
var v = iter.next();
if(cljs.core.truth_(v.done)){
return cljs.core.List.EMPTY;
} else {
return (new cljs.core.ES6IteratorSeq(v.value,iter,null));
}
});
/**
* Mix final collection hash for ordered or unordered collections.
* hash-basis is the combined collection hash, count is the number
* of elements included in the basis. Note this is the hash code
* consistent with =, different from .hashCode.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.mix_collection_hash = (function mix_collection_hash(hash_basis,count){
var h1 = cljs.core.m3_seed;
var k1 = cljs.core.m3_mix_K1(hash_basis);
var h1__$1 = cljs.core.m3_mix_H1(h1,k1);
return cljs.core.m3_fmix(h1__$1,count);
});
/**
* Returns the hash code, consistent with =, for an external ordered
* collection implementing Iterable.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_ordered_coll = (function hash_ordered_coll(coll){
var n = (0);
var hash_code = (1);
var coll__$1 = cljs.core.seq(coll);
while(true){
if(!((coll__$1 == null))){
var G__11021 = (n + (1));
var G__11022 = ((cljs.core.imul((31),hash_code) + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__11023 = cljs.core.next(coll__$1);
n = G__11021;
hash_code = G__11022;
coll__$1 = G__11023;
continue;
} else {
return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});
/**
* Returns the hash code, consistent with =, for an external unordered
* collection implementing Iterable. For maps, the iterator should
* return map entries whose hash is computed as
* (hash-ordered-coll [k v]).
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_unordered_coll = (function hash_unordered_coll(coll){
var n = (0);
var hash_code = (0);
var coll__$1 = cljs.core.seq(coll);
while(true){
if(!((coll__$1 == null))){
var G__11024 = (n + (1));
var G__11025 = ((hash_code + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__11026 = cljs.core.next(coll__$1);
n = G__11024;
hash_code = G__11025;
coll__$1 = G__11026;
continue;
} else {
return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});


(cljs.core.ICounted["null"] = true);

(cljs.core._count["null"] = (function (_){
return (0);
}));
Date.prototype.cljs$core$IEquiv$ = true;

Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var o__$1 = this;
return ((other instanceof Date)) && ((o__$1.toString() === other.toString()));
});
(cljs.core.IEquiv["number"] = true);

(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IMeta["function"] = true);

(cljs.core._meta["function"] = (function (_){
return null;
}));

(cljs.core.Fn["function"] = true);
(cljs.core.IHash["_"] = true);

(cljs.core._hash["_"] = (function (o){
var G__11027 = o;
return goog.getUid(G__11027);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + (1));
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.val;
});

cljs.core.Reduced.cljs$lang$type = true;

cljs.core.Reduced.cljs$lang$ctorStr = "cljs.core/Reduced";

cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/Reduced");
});

cljs.core.__GT_Reduced = (function __GT_Reduced(val){
return (new cljs.core.Reduced(val));
});

/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return (r instanceof cljs.core.Reduced);
});
/**
* If x is already reduced?, returns it, else returns (reduced x)
*/
cljs.core.ensure_reduced = (function ensure_reduced(x){
if(cljs.core.reduced_QMARK_(x)){
return x;
} else {
return cljs.core.reduced(x);
}
});
/**
* If x is reduced?, returns (deref x), else returns x
*/
cljs.core.unreduced = (function unreduced(x){
if(cljs.core.reduced_QMARK_(x)){
var G__11029 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11029) : cljs.core.deref.call(null,G__11029));
} else {
return x;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref(o);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt = cljs.core._count(cicoll);
if((cnt === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,(0));
var n = (1);
while(true){
if((n < cnt)){
var nval = (function (){var G__11036 = val;
var G__11037 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11036,G__11037) : f.call(null,G__11036,G__11037));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__11042 = nval;
var G__11043 = (n + (1));
val = G__11042;
n = G__11043;
continue;
}
} else {
return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt = cljs.core._count(cicoll);
var val__$1 = val;
var n = (0);
while(true){
if((n < cnt)){
var nval = (function (){var G__11038 = val__$1;
var G__11039 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11038,G__11039) : f.call(null,G__11038,G__11039));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__11044 = nval;
var G__11045 = (n + (1));
val__$1 = G__11044;
n = G__11045;
continue;
}
} else {
return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt = cljs.core._count(cicoll);
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt)){
var nval = (function (){var G__11040 = val__$1;
var G__11041 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11040,G__11041) : f.call(null,G__11040,G__11041));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__11046 = nval;
var G__11047 = (n + (1));
val__$1 = G__11046;
n = G__11047;
continue;
}
} else {
return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$core$IFn$_invoke$arity$2 = ci_reduce__2;
ci_reduce.cljs$core$IFn$_invoke$arity$3 = ci_reduce__3;
ci_reduce.cljs$core$IFn$_invoke$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt = arr.length;
if((arr.length === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var val = (arr[(0)]);
var n = (1);
while(true){
if((n < cnt)){
var nval = (function (){var G__11054 = val;
var G__11055 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11054,G__11055) : f.call(null,G__11054,G__11055));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__11060 = nval;
var G__11061 = (n + (1));
val = G__11060;
n = G__11061;
continue;
}
} else {
return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt = arr.length;
var val__$1 = val;
var n = (0);
while(true){
if((n < cnt)){
var nval = (function (){var G__11056 = val__$1;
var G__11057 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11056,G__11057) : f.call(null,G__11056,G__11057));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__11062 = nval;
var G__11063 = (n + (1));
val__$1 = G__11062;
n = G__11063;
continue;
}
} else {
return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt = arr.length;
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt)){
var nval = (function (){var G__11058 = val__$1;
var G__11059 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11058,G__11059) : f.call(null,G__11058,G__11059));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__11064 = nval;
var G__11065 = (n + (1));
val__$1 = G__11064;
n = G__11065;
continue;
}
} else {
return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$core$IFn$_invoke$arity$2 = array_reduce__2;
array_reduce.cljs$core$IFn$_invoke$arity$3 = array_reduce__3;
array_reduce.cljs$core$IFn$_invoke$arity$4 = array_reduce__4;
return array_reduce;
})()
;



/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__11067 = x;
if(G__11067){
var bit__4284__auto__ = (G__11067.cljs$lang$protocol_mask$partition0$ & (2));
if((bit__4284__auto__) || (G__11067.cljs$core$ICounted$)){
return true;
} else {
if((!G__11067.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__11067);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__11067);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__11069 = x;
if(G__11069){
var bit__4284__auto__ = (G__11069.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4284__auto__) || (G__11069.cljs$core$IIndexed$)){
return true;
} else {
if((!G__11069.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__11069);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__11069);
}
});

/**
* @constructor
*/
cljs.core.IndexedSeqIterator = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.IndexedSeqIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.arr.length);
});

cljs.core.IndexedSeqIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = (self__.arr[self__.i]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.IndexedSeqIterator.cljs$lang$type = true;

cljs.core.IndexedSeqIterator.cljs$lang$ctorStr = "cljs.core/IndexedSeqIterator";

cljs.core.IndexedSeqIterator.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/IndexedSeqIterator");
});

cljs.core.__GT_IndexedSeqIterator = (function __GT_IndexedSeqIterator(arr,i){
return (new cljs.core.IndexedSeqIterator(arr,i));
});


/**
* @constructor
*/
cljs.core.IndexedSeq = (function (arr,i){
this.arr = arr;
this.i = i;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.IndexedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.IndexedSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.arr.length)){
return (self__.arr[i__$1]);
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.arr.length)){
return (self__.arr[i__$1]);
} else {
return not_found;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IIterable$ = true;

cljs.core.IndexedSeq.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.IndexedSeqIterator(self__.arr,self__.i));
});

cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.IndexedSeq(self__.arr,self__.i));
});

cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.arr.length - self__.i);
});

cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var c = cljs.core._count(coll__$1);
if((c > (0))){
return (new cljs.core.RSeq(coll__$1,(c - (1)),null));
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
var G__11070 = coll__$1;
var G__11071 = other;
return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__11070,G__11071) : cljs.core.equiv_sequential.call(null,G__11070,G__11071));
});

cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.i]),(self__.i + (1)));
});

cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.i);
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.arr[self__.i]);
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var G__11072 = o;
var G__11073 = coll__$1;
return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__11072,G__11073) : cljs.core.cons.call(null,G__11072,G__11073));
});

cljs.core.IndexedSeq.cljs$lang$type = true;

cljs.core.IndexedSeq.cljs$lang$ctorStr = "cljs.core/IndexedSeq";

cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/IndexedSeq");
});

cljs.core.__GT_IndexedSeq = (function __GT_IndexedSeq(arr,i){
return (new cljs.core.IndexedSeq(arr,i));
});

(cljs.core.IndexedSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.cljs$core$IFn$_invoke$arity$2(prim,(0));
});
var prim_seq__2 = (function (prim,i){
if((i < prim.length)){
return (new cljs.core.IndexedSeq(prim,i));
} else {
return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$core$IFn$_invoke$arity$1 = prim_seq__1;
prim_seq.cljs$core$IFn$_invoke$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,(0));
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$core$IFn$_invoke$arity$1 = array_seq__1;
array_seq.cljs$core$IFn$_invoke$arity$2 = array_seq__2;
return array_seq;
})()
;


/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.RSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.RSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.RSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.RSeq(self__.ci,self__.i,self__.meta));
});

cljs.core.RSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i > (0))){
return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else {
return null;
}
});

cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.i + (1));
});

cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
var G__11076 = coll__$1;
var G__11077 = other;
return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__11076,G__11077) : cljs.core.equiv_sequential.call(null,G__11076,G__11077));
});

cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var G__11078 = cljs.core.List.EMPTY;
var G__11079 = self__.meta;
return (cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2(G__11078,G__11079) : cljs.core.with_meta.call(null,G__11078,G__11079));
});

cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){
var self__ = this;
var col__$1 = this;
var G__11080 = f;
var G__11081 = col__$1;
return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(G__11080,G__11081) : cljs.core.seq_reduce.call(null,G__11080,G__11081));
});

cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){
var self__ = this;
var col__$1 = this;
var G__11082 = f;
var G__11083 = start;
var G__11084 = col__$1;
return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(G__11082,G__11083,G__11084) : cljs.core.seq_reduce.call(null,G__11082,G__11083,G__11084));
});

cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.ci,self__.i);
});

cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i > (0))){
return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});

cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var G__11085 = o;
var G__11086 = coll__$1;
return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__11085,G__11086) : cljs.core.cons.call(null,G__11085,G__11086));
});

cljs.core.RSeq.cljs$lang$type = true;

cljs.core.RSeq.cljs$lang$ctorStr = "cljs.core/RSeq";

cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/RSeq");
});

cljs.core.__GT_RSeq = (function __GT_RSeq(ci,i,meta){
return (new cljs.core.RSeq(ci,i,meta));
});

(cljs.core.RSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first(cljs.core.first(coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next(cljs.core.first(coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next(cljs.core.next(coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn = cljs.core.next(s);
if(!((sn == null))){
var G__11087 = sn;
s = G__11087;
continue;
} else {
return cljs.core.first(s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);

(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});
var conj__1 = (function (coll){
return coll;
});
var conj__2 = (function (coll,x){
if(!((coll == null))){
return cljs.core._conj(coll,x);
} else {
return cljs.core._conj(cljs.core.List.EMPTY,x);
}
});
var conj__3 = (function() { 
var G__11092__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__11093 = conj.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__11094 = cljs.core.first(xs);
var G__11095 = cljs.core.next(xs);
coll = G__11093;
x = G__11094;
xs = G__11095;
continue;
} else {
return conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__11092 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11092__delegate.call(this,coll,x,xs);};
G__11092.cljs$lang$maxFixedArity = 2;
G__11092.cljs$lang$applyTo = (function (arglist__11096){
var coll = cljs.core.first(arglist__11096);
arglist__11096 = cljs.core.next(arglist__11096);
var x = cljs.core.first(arglist__11096);
var xs = cljs.core.rest(arglist__11096);
return G__11092__delegate(coll,x,xs);
});
G__11092.cljs$core$IFn$_invoke$arity$variadic = G__11092__delegate;
return G__11092;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 0:
return conj__0.call(this);
case 1:
return conj__1.call(this,coll);
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$core$IFn$_invoke$arity$0 = conj__0;
conj.cljs$core$IFn$_invoke$arity$1 = conj__1;
conj.cljs$core$IFn$_invoke$arity$2 = conj__2;
conj.cljs$core$IFn$_invoke$arity$variadic = conj__3.cljs$core$IFn$_invoke$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
if((coll == null)){
return null;
} else {
return cljs.core._empty(coll);
}
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s = cljs.core.seq(coll);
var acc = (0);
while(true){
if(cljs.core.counted_QMARK_(s)){
return (acc + cljs.core._count(s));
} else {
var G__11097 = cljs.core.next(s);
var G__11098 = (acc + (1));
s = G__11097;
acc = G__11098;
continue;
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(!((coll == null))){
if((function (){var G__11100 = coll;
if(G__11100){
var bit__4277__auto__ = (G__11100.cljs$lang$protocol_mask$partition0$ & (2));
if((bit__4277__auto__) || (G__11100.cljs$core$ICounted$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ICounted$_count$arity$1(null);
} else {
if(coll instanceof Array){
return coll.length;
} else {
if(typeof coll === 'string'){
return coll.length;
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,coll)){
return cljs.core._count(coll);
} else {
return cljs.core.accumulating_seq_count(coll);

}
}
}
}
} else {
return (0);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
while(true){
if((coll == null)){
throw (new Error("Index out of bounds"));
} else {
if((n === (0))){
if(cljs.core.seq(coll)){
return cljs.core.first(coll);
} else {
throw (new Error("Index out of bounds"));
}
} else {
if(cljs.core.indexed_QMARK_(coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if(cljs.core.seq(coll)){
var G__11101 = cljs.core.next(coll);
var G__11102 = (n - (1));
coll = G__11101;
n = G__11102;
continue;
} else {
throw (new Error("Index out of bounds"));

}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
while(true){
if((coll == null)){
return not_found;
} else {
if((n === (0))){
if(cljs.core.seq(coll)){
return cljs.core.first(coll);
} else {
return not_found;
}
} else {
if(cljs.core.indexed_QMARK_(coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else {
if(cljs.core.seq(coll)){
var G__11103 = cljs.core.next(coll);
var G__11104 = (n - (1));
var G__11105 = not_found;
coll = G__11103;
n = G__11104;
not_found = G__11105;
continue;
} else {
return not_found;

}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$core$IFn$_invoke$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$core$IFn$_invoke$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if(!(typeof n === 'number')){
throw (new Error("index argument to nth must be a number"));
} else {
if((coll == null)){
return coll;
} else {
if((function (){var G__11110 = coll;
if(G__11110){
var bit__4277__auto__ = (G__11110.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4277__auto__) || (G__11110.cljs$core$IIndexed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$2(null,n);
} else {
if(coll instanceof Array){
if((n < coll.length)){
return (coll[n]);
} else {
return null;
}
} else {
if(typeof coll === 'string'){
if((n < coll.length)){
return (coll[n]);
} else {
return null;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if((function (){var G__11111 = coll;
if(G__11111){
var bit__4284__auto__ = (G__11111.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4284__auto__) || (G__11111.cljs$core$ISeq$)){
return true;
} else {
if((!G__11111.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__11111);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__11111);
}
})()){
return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str(cljs.core.type(coll)))].join('')));

}
}
}
}
}
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!(typeof n === 'number')){
throw (new Error("index argument to nth must be a number."));
} else {
if((coll == null)){
return not_found;
} else {
if((function (){var G__11112 = coll;
if(G__11112){
var bit__4277__auto__ = (G__11112.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4277__auto__) || (G__11112.cljs$core$IIndexed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$3(null,n,not_found);
} else {
if(coll instanceof Array){
if((n < coll.length)){
return (coll[n]);
} else {
return not_found;
}
} else {
if(typeof coll === 'string'){
if((n < coll.length)){
return (coll[n]);
} else {
return not_found;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if((function (){var G__11113 = coll;
if(G__11113){
var bit__4284__auto__ = (G__11113.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4284__auto__) || (G__11113.cljs$core$ISeq$)){
return true;
} else {
if((!G__11113.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__11113);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__11113);
}
})()){
return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else {
throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str(cljs.core.type(coll)))].join('')));

}
}
}
}
}
}
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$core$IFn$_invoke$arity$2 = nth__2;
nth.cljs$core$IFn$_invoke$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the nth rest of coll, coll when n is 0.
*/
cljs.core.nthrest = (function nthrest(coll,n){
var n__$1 = n;
var xs = coll;
while(true){
if(((n__$1 > (0))) && (cljs.core.seq(xs))){
var G__11114 = (n__$1 - (1));
var G__11115 = cljs.core.rest(xs);
n__$1 = G__11114;
xs = G__11115;
continue;
} else {
return xs;
}
break;
}
});
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
if((o == null)){
return null;
} else {
if((function (){var G__11118 = o;
if(G__11118){
var bit__4277__auto__ = (G__11118.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4277__auto__) || (G__11118.cljs$core$ILookup$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$2(null,k);
} else {
if(o instanceof Array){
if((k < o.length)){
return (o[k]);
} else {
return null;
}
} else {
if(typeof o === 'string'){
if((k < o.length)){
return (o[k]);
} else {
return null;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o)){
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o,k);
} else {
return null;

}
}
}
}
}
});
var get__3 = (function (o,k,not_found){
if(!((o == null))){
if((function (){var G__11119 = o;
if(G__11119){
var bit__4277__auto__ = (G__11119.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4277__auto__) || (G__11119.cljs$core$ILookup$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
} else {
if(o instanceof Array){
if((k < o.length)){
return (o[k]);
} else {
return not_found;
}
} else {
if(typeof o === 'string'){
if((k < o.length)){
return (o[k]);
} else {
return not_found;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o)){
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(o,k,not_found);
} else {
return not_found;

}
}
}
}
} else {
return not_found;
}
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$core$IFn$_invoke$arity$2 = get__2;
get.cljs$core$IFn$_invoke$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
if(!((coll == null))){
return cljs.core._assoc(coll,k,v);
} else {
return cljs.core.PersistentHashMap.fromArrays([k],[v]);
}
});
var assoc__4 = (function() { 
var G__11123__delegate = function (coll,k,v,kvs){
while(true){
var ret = assoc.cljs$core$IFn$_invoke$arity$3(coll,k,v);
if(cljs.core.truth_(kvs)){
var G__11124 = ret;
var G__11125 = cljs.core.first(kvs);
var G__11126 = cljs.core.second(kvs);
var G__11127 = cljs.core.nnext(kvs);
coll = G__11124;
k = G__11125;
v = G__11126;
kvs = G__11127;
continue;
} else {
return ret;
}
break;
}
};
var G__11123 = function (coll,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11123__delegate.call(this,coll,k,v,kvs);};
G__11123.cljs$lang$maxFixedArity = 3;
G__11123.cljs$lang$applyTo = (function (arglist__11128){
var coll = cljs.core.first(arglist__11128);
arglist__11128 = cljs.core.next(arglist__11128);
var k = cljs.core.first(arglist__11128);
arglist__11128 = cljs.core.next(arglist__11128);
var v = cljs.core.first(arglist__11128);
var kvs = cljs.core.rest(arglist__11128);
return G__11123__delegate(coll,k,v,kvs);
});
G__11123.cljs$core$IFn$_invoke$arity$variadic = G__11123__delegate;
return G__11123;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$core$IFn$_invoke$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$core$IFn$_invoke$arity$3 = assoc__3;
assoc.cljs$core$IFn$_invoke$arity$variadic = assoc__4.cljs$core$IFn$_invoke$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
if((coll == null)){
return null;
} else {
return cljs.core._dissoc(coll,k);
}
});
var dissoc__3 = (function() { 
var G__11131__delegate = function (coll,k,ks){
while(true){
if((coll == null)){
return null;
} else {
var ret = dissoc.cljs$core$IFn$_invoke$arity$2(coll,k);
if(cljs.core.truth_(ks)){
var G__11132 = ret;
var G__11133 = cljs.core.first(ks);
var G__11134 = cljs.core.next(ks);
coll = G__11132;
k = G__11133;
ks = G__11134;
continue;
} else {
return ret;
}
}
break;
}
};
var G__11131 = function (coll,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11131__delegate.call(this,coll,k,ks);};
G__11131.cljs$lang$maxFixedArity = 2;
G__11131.cljs$lang$applyTo = (function (arglist__11135){
var coll = cljs.core.first(arglist__11135);
arglist__11135 = cljs.core.next(arglist__11135);
var k = cljs.core.first(arglist__11135);
var ks = cljs.core.rest(arglist__11135);
return G__11131__delegate(coll,k,ks);
});
G__11131.cljs$core$IFn$_invoke$arity$variadic = G__11131__delegate;
return G__11131;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$core$IFn$_invoke$arity$1 = dissoc__1;
dissoc.cljs$core$IFn$_invoke$arity$2 = dissoc__2;
dissoc.cljs$core$IFn$_invoke$arity$variadic = dissoc__3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc;
})()
;
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
var or__3608__auto__ = (function (){var G__11140 = f;
return goog.isFunction(G__11140);
})();
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
var G__11141 = f;
if(G__11141){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto____$1 = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto____$1)){
return or__3608__auto____$1;
} else {
return G__11141.cljs$core$Fn$;
}
})())){
return true;
} else {
if((!G__11141.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__11141);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__11141);
}
}
});

/**
* @constructor
*/
cljs.core.MetaFn = (function (afn,meta){
this.afn = afn;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.MetaFn.prototype.call = (function() {
var G__11607 = null;
var G__11607__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
var G__11607__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11143 = a;
return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__11143) : self__.afn.call(null,G__11143));
});
var G__11607__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11144 = a;
var G__11145 = b;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__11144,G__11145) : self__.afn.call(null,G__11144,G__11145));
});
var G__11607__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11146 = a;
var G__11147 = b;
var G__11148 = c;
return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__11146,G__11147,G__11148) : self__.afn.call(null,G__11146,G__11147,G__11148));
});
var G__11607__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11149 = a;
var G__11150 = b;
var G__11151 = c;
var G__11152 = d;
return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__11149,G__11150,G__11151,G__11152) : self__.afn.call(null,G__11149,G__11150,G__11151,G__11152));
});
var G__11607__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11153 = a;
var G__11154 = b;
var G__11155 = c;
var G__11156 = d;
var G__11157 = e;
return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__11153,G__11154,G__11155,G__11156,G__11157) : self__.afn.call(null,G__11153,G__11154,G__11155,G__11156,G__11157));
});
var G__11607__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11158 = a;
var G__11159 = b;
var G__11160 = c;
var G__11161 = d;
var G__11162 = e;
var G__11163 = f;
return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__11158,G__11159,G__11160,G__11161,G__11162,G__11163) : self__.afn.call(null,G__11158,G__11159,G__11160,G__11161,G__11162,G__11163));
});
var G__11607__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11164 = a;
var G__11165 = b;
var G__11166 = c;
var G__11167 = d;
var G__11168 = e;
var G__11169 = f;
var G__11170 = g;
return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__11164,G__11165,G__11166,G__11167,G__11168,G__11169,G__11170) : self__.afn.call(null,G__11164,G__11165,G__11166,G__11167,G__11168,G__11169,G__11170));
});
var G__11607__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11171 = a;
var G__11172 = b;
var G__11173 = c;
var G__11174 = d;
var G__11175 = e;
var G__11176 = f;
var G__11177 = g;
var G__11178 = h;
return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__11171,G__11172,G__11173,G__11174,G__11175,G__11176,G__11177,G__11178) : self__.afn.call(null,G__11171,G__11172,G__11173,G__11174,G__11175,G__11176,G__11177,G__11178));
});
var G__11607__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11179 = a;
var G__11180 = b;
var G__11181 = c;
var G__11182 = d;
var G__11183 = e;
var G__11184 = f;
var G__11185 = g;
var G__11186 = h;
var G__11187 = i;
return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__11179,G__11180,G__11181,G__11182,G__11183,G__11184,G__11185,G__11186,G__11187) : self__.afn.call(null,G__11179,G__11180,G__11181,G__11182,G__11183,G__11184,G__11185,G__11186,G__11187));
});
var G__11607__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11188 = a;
var G__11189 = b;
var G__11190 = c;
var G__11191 = d;
var G__11192 = e;
var G__11193 = f;
var G__11194 = g;
var G__11195 = h;
var G__11196 = i;
var G__11197 = j;
return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__11188,G__11189,G__11190,G__11191,G__11192,G__11193,G__11194,G__11195,G__11196,G__11197) : self__.afn.call(null,G__11188,G__11189,G__11190,G__11191,G__11192,G__11193,G__11194,G__11195,G__11196,G__11197));
});
var G__11607__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11198 = a;
var G__11199 = b;
var G__11200 = c;
var G__11201 = d;
var G__11202 = e;
var G__11203 = f;
var G__11204 = g;
var G__11205 = h;
var G__11206 = i;
var G__11207 = j;
var G__11208 = k;
return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__11198,G__11199,G__11200,G__11201,G__11202,G__11203,G__11204,G__11205,G__11206,G__11207,G__11208) : self__.afn.call(null,G__11198,G__11199,G__11200,G__11201,G__11202,G__11203,G__11204,G__11205,G__11206,G__11207,G__11208));
});
var G__11607__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11209 = a;
var G__11210 = b;
var G__11211 = c;
var G__11212 = d;
var G__11213 = e;
var G__11214 = f;
var G__11215 = g;
var G__11216 = h;
var G__11217 = i;
var G__11218 = j;
var G__11219 = k;
var G__11220 = l;
return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__11209,G__11210,G__11211,G__11212,G__11213,G__11214,G__11215,G__11216,G__11217,G__11218,G__11219,G__11220) : self__.afn.call(null,G__11209,G__11210,G__11211,G__11212,G__11213,G__11214,G__11215,G__11216,G__11217,G__11218,G__11219,G__11220));
});
var G__11607__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11221 = a;
var G__11222 = b;
var G__11223 = c;
var G__11224 = d;
var G__11225 = e;
var G__11226 = f;
var G__11227 = g;
var G__11228 = h;
var G__11229 = i;
var G__11230 = j;
var G__11231 = k;
var G__11232 = l;
var G__11233 = m;
return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__11221,G__11222,G__11223,G__11224,G__11225,G__11226,G__11227,G__11228,G__11229,G__11230,G__11231,G__11232,G__11233) : self__.afn.call(null,G__11221,G__11222,G__11223,G__11224,G__11225,G__11226,G__11227,G__11228,G__11229,G__11230,G__11231,G__11232,G__11233));
});
var G__11607__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11234 = a;
var G__11235 = b;
var G__11236 = c;
var G__11237 = d;
var G__11238 = e;
var G__11239 = f;
var G__11240 = g;
var G__11241 = h;
var G__11242 = i;
var G__11243 = j;
var G__11244 = k;
var G__11245 = l;
var G__11246 = m;
var G__11247 = n;
return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__11234,G__11235,G__11236,G__11237,G__11238,G__11239,G__11240,G__11241,G__11242,G__11243,G__11244,G__11245,G__11246,G__11247) : self__.afn.call(null,G__11234,G__11235,G__11236,G__11237,G__11238,G__11239,G__11240,G__11241,G__11242,G__11243,G__11244,G__11245,G__11246,G__11247));
});
var G__11607__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11248 = a;
var G__11249 = b;
var G__11250 = c;
var G__11251 = d;
var G__11252 = e;
var G__11253 = f;
var G__11254 = g;
var G__11255 = h;
var G__11256 = i;
var G__11257 = j;
var G__11258 = k;
var G__11259 = l;
var G__11260 = m;
var G__11261 = n;
var G__11262 = o;
return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__11248,G__11249,G__11250,G__11251,G__11252,G__11253,G__11254,G__11255,G__11256,G__11257,G__11258,G__11259,G__11260,G__11261,G__11262) : self__.afn.call(null,G__11248,G__11249,G__11250,G__11251,G__11252,G__11253,G__11254,G__11255,G__11256,G__11257,G__11258,G__11259,G__11260,G__11261,G__11262));
});
var G__11607__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11263 = a;
var G__11264 = b;
var G__11265 = c;
var G__11266 = d;
var G__11267 = e;
var G__11268 = f;
var G__11269 = g;
var G__11270 = h;
var G__11271 = i;
var G__11272 = j;
var G__11273 = k;
var G__11274 = l;
var G__11275 = m;
var G__11276 = n;
var G__11277 = o;
var G__11278 = p;
return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__11263,G__11264,G__11265,G__11266,G__11267,G__11268,G__11269,G__11270,G__11271,G__11272,G__11273,G__11274,G__11275,G__11276,G__11277,G__11278) : self__.afn.call(null,G__11263,G__11264,G__11265,G__11266,G__11267,G__11268,G__11269,G__11270,G__11271,G__11272,G__11273,G__11274,G__11275,G__11276,G__11277,G__11278));
});
var G__11607__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11279 = a;
var G__11280 = b;
var G__11281 = c;
var G__11282 = d;
var G__11283 = e;
var G__11284 = f;
var G__11285 = g;
var G__11286 = h;
var G__11287 = i;
var G__11288 = j;
var G__11289 = k;
var G__11290 = l;
var G__11291 = m;
var G__11292 = n;
var G__11293 = o;
var G__11294 = p;
var G__11295 = q;
return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__11279,G__11280,G__11281,G__11282,G__11283,G__11284,G__11285,G__11286,G__11287,G__11288,G__11289,G__11290,G__11291,G__11292,G__11293,G__11294,G__11295) : self__.afn.call(null,G__11279,G__11280,G__11281,G__11282,G__11283,G__11284,G__11285,G__11286,G__11287,G__11288,G__11289,G__11290,G__11291,G__11292,G__11293,G__11294,G__11295));
});
var G__11607__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11296 = a;
var G__11297 = b;
var G__11298 = c;
var G__11299 = d;
var G__11300 = e;
var G__11301 = f;
var G__11302 = g;
var G__11303 = h;
var G__11304 = i;
var G__11305 = j;
var G__11306 = k;
var G__11307 = l;
var G__11308 = m;
var G__11309 = n;
var G__11310 = o;
var G__11311 = p;
var G__11312 = q;
var G__11313 = r;
return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__11296,G__11297,G__11298,G__11299,G__11300,G__11301,G__11302,G__11303,G__11304,G__11305,G__11306,G__11307,G__11308,G__11309,G__11310,G__11311,G__11312,G__11313) : self__.afn.call(null,G__11296,G__11297,G__11298,G__11299,G__11300,G__11301,G__11302,G__11303,G__11304,G__11305,G__11306,G__11307,G__11308,G__11309,G__11310,G__11311,G__11312,G__11313));
});
var G__11607__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11314 = a;
var G__11315 = b;
var G__11316 = c;
var G__11317 = d;
var G__11318 = e;
var G__11319 = f;
var G__11320 = g;
var G__11321 = h;
var G__11322 = i;
var G__11323 = j;
var G__11324 = k;
var G__11325 = l;
var G__11326 = m;
var G__11327 = n;
var G__11328 = o;
var G__11329 = p;
var G__11330 = q;
var G__11331 = r;
var G__11332 = s;
return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__11314,G__11315,G__11316,G__11317,G__11318,G__11319,G__11320,G__11321,G__11322,G__11323,G__11324,G__11325,G__11326,G__11327,G__11328,G__11329,G__11330,G__11331,G__11332) : self__.afn.call(null,G__11314,G__11315,G__11316,G__11317,G__11318,G__11319,G__11320,G__11321,G__11322,G__11323,G__11324,G__11325,G__11326,G__11327,G__11328,G__11329,G__11330,G__11331,G__11332));
});
var G__11607__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11333 = a;
var G__11334 = b;
var G__11335 = c;
var G__11336 = d;
var G__11337 = e;
var G__11338 = f;
var G__11339 = g;
var G__11340 = h;
var G__11341 = i;
var G__11342 = j;
var G__11343 = k;
var G__11344 = l;
var G__11345 = m;
var G__11346 = n;
var G__11347 = o;
var G__11348 = p;
var G__11349 = q;
var G__11350 = r;
var G__11351 = s;
var G__11352 = t;
return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__11333,G__11334,G__11335,G__11336,G__11337,G__11338,G__11339,G__11340,G__11341,G__11342,G__11343,G__11344,G__11345,G__11346,G__11347,G__11348,G__11349,G__11350,G__11351,G__11352) : self__.afn.call(null,G__11333,G__11334,G__11335,G__11336,G__11337,G__11338,G__11339,G__11340,G__11341,G__11342,G__11343,G__11344,G__11345,G__11346,G__11347,G__11348,G__11349,G__11350,G__11351,G__11352));
});
var G__11607__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11353 = self__.afn;
var G__11354 = a;
var G__11355 = b;
var G__11356 = c;
var G__11357 = d;
var G__11358 = e;
var G__11359 = f;
var G__11360 = g;
var G__11361 = h;
var G__11362 = i;
var G__11363 = j;
var G__11364 = k;
var G__11365 = l;
var G__11366 = m;
var G__11367 = n;
var G__11368 = o;
var G__11369 = p;
var G__11370 = q;
var G__11371 = r;
var G__11372 = s;
var G__11373 = t;
var G__11374 = rest;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__11353,G__11354,G__11355,G__11356,G__11357,G__11358,G__11359,G__11360,G__11361,G__11362,G__11363,G__11364,G__11365,G__11366,G__11367,G__11368,G__11369,G__11370,G__11371,G__11372,G__11373,G__11374) : cljs.core.apply.call(null,G__11353,G__11354,G__11355,G__11356,G__11357,G__11358,G__11359,G__11360,G__11361,G__11362,G__11363,G__11364,G__11365,G__11366,G__11367,G__11368,G__11369,G__11370,G__11371,G__11372,G__11373,G__11374));
});
G__11607 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__11607__1.call(this,self__);
case 2:
return G__11607__2.call(this,self__,a);
case 3:
return G__11607__3.call(this,self__,a,b);
case 4:
return G__11607__4.call(this,self__,a,b,c);
case 5:
return G__11607__5.call(this,self__,a,b,c,d);
case 6:
return G__11607__6.call(this,self__,a,b,c,d,e);
case 7:
return G__11607__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__11607__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__11607__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__11607__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__11607__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__11607__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__11607__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__11607__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__11607__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__11607__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__11607__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__11607__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__11607__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__11607__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__11607__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__11607__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11607.cljs$core$IFn$_invoke$arity$1 = G__11607__1;
G__11607.cljs$core$IFn$_invoke$arity$2 = G__11607__2;
G__11607.cljs$core$IFn$_invoke$arity$3 = G__11607__3;
G__11607.cljs$core$IFn$_invoke$arity$4 = G__11607__4;
G__11607.cljs$core$IFn$_invoke$arity$5 = G__11607__5;
G__11607.cljs$core$IFn$_invoke$arity$6 = G__11607__6;
G__11607.cljs$core$IFn$_invoke$arity$7 = G__11607__7;
G__11607.cljs$core$IFn$_invoke$arity$8 = G__11607__8;
G__11607.cljs$core$IFn$_invoke$arity$9 = G__11607__9;
G__11607.cljs$core$IFn$_invoke$arity$10 = G__11607__10;
G__11607.cljs$core$IFn$_invoke$arity$11 = G__11607__11;
G__11607.cljs$core$IFn$_invoke$arity$12 = G__11607__12;
G__11607.cljs$core$IFn$_invoke$arity$13 = G__11607__13;
G__11607.cljs$core$IFn$_invoke$arity$14 = G__11607__14;
G__11607.cljs$core$IFn$_invoke$arity$15 = G__11607__15;
G__11607.cljs$core$IFn$_invoke$arity$16 = G__11607__16;
G__11607.cljs$core$IFn$_invoke$arity$17 = G__11607__17;
G__11607.cljs$core$IFn$_invoke$arity$18 = G__11607__18;
G__11607.cljs$core$IFn$_invoke$arity$19 = G__11607__19;
G__11607.cljs$core$IFn$_invoke$arity$20 = G__11607__20;
G__11607.cljs$core$IFn$_invoke$arity$21 = G__11607__21;
G__11607.cljs$core$IFn$_invoke$arity$22 = G__11607__22;
return G__11607;
})()
;

cljs.core.MetaFn.prototype.apply = (function (self__,args11142){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11142)));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
var G__11375 = a;
return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__11375) : self__.afn.call(null,G__11375));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
var G__11376 = a;
var G__11377 = b;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__11376,G__11377) : self__.afn.call(null,G__11376,G__11377));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
var G__11378 = a;
var G__11379 = b;
var G__11380 = c;
return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__11378,G__11379,G__11380) : self__.afn.call(null,G__11378,G__11379,G__11380));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
var G__11381 = a;
var G__11382 = b;
var G__11383 = c;
var G__11384 = d;
return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__11381,G__11382,G__11383,G__11384) : self__.afn.call(null,G__11381,G__11382,G__11383,G__11384));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
var G__11385 = a;
var G__11386 = b;
var G__11387 = c;
var G__11388 = d;
var G__11389 = e;
return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__11385,G__11386,G__11387,G__11388,G__11389) : self__.afn.call(null,G__11385,G__11386,G__11387,G__11388,G__11389));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
var G__11390 = a;
var G__11391 = b;
var G__11392 = c;
var G__11393 = d;
var G__11394 = e;
var G__11395 = f;
return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__11390,G__11391,G__11392,G__11393,G__11394,G__11395) : self__.afn.call(null,G__11390,G__11391,G__11392,G__11393,G__11394,G__11395));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
var G__11396 = a;
var G__11397 = b;
var G__11398 = c;
var G__11399 = d;
var G__11400 = e;
var G__11401 = f;
var G__11402 = g;
return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__11396,G__11397,G__11398,G__11399,G__11400,G__11401,G__11402) : self__.afn.call(null,G__11396,G__11397,G__11398,G__11399,G__11400,G__11401,G__11402));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
var G__11403 = a;
var G__11404 = b;
var G__11405 = c;
var G__11406 = d;
var G__11407 = e;
var G__11408 = f;
var G__11409 = g;
var G__11410 = h;
return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__11403,G__11404,G__11405,G__11406,G__11407,G__11408,G__11409,G__11410) : self__.afn.call(null,G__11403,G__11404,G__11405,G__11406,G__11407,G__11408,G__11409,G__11410));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
var G__11411 = a;
var G__11412 = b;
var G__11413 = c;
var G__11414 = d;
var G__11415 = e;
var G__11416 = f;
var G__11417 = g;
var G__11418 = h;
var G__11419 = i;
return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__11411,G__11412,G__11413,G__11414,G__11415,G__11416,G__11417,G__11418,G__11419) : self__.afn.call(null,G__11411,G__11412,G__11413,G__11414,G__11415,G__11416,G__11417,G__11418,G__11419));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
var G__11420 = a;
var G__11421 = b;
var G__11422 = c;
var G__11423 = d;
var G__11424 = e;
var G__11425 = f;
var G__11426 = g;
var G__11427 = h;
var G__11428 = i;
var G__11429 = j;
return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__11420,G__11421,G__11422,G__11423,G__11424,G__11425,G__11426,G__11427,G__11428,G__11429) : self__.afn.call(null,G__11420,G__11421,G__11422,G__11423,G__11424,G__11425,G__11426,G__11427,G__11428,G__11429));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
var G__11430 = a;
var G__11431 = b;
var G__11432 = c;
var G__11433 = d;
var G__11434 = e;
var G__11435 = f;
var G__11436 = g;
var G__11437 = h;
var G__11438 = i;
var G__11439 = j;
var G__11440 = k;
return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__11430,G__11431,G__11432,G__11433,G__11434,G__11435,G__11436,G__11437,G__11438,G__11439,G__11440) : self__.afn.call(null,G__11430,G__11431,G__11432,G__11433,G__11434,G__11435,G__11436,G__11437,G__11438,G__11439,G__11440));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
var G__11441 = a;
var G__11442 = b;
var G__11443 = c;
var G__11444 = d;
var G__11445 = e;
var G__11446 = f;
var G__11447 = g;
var G__11448 = h;
var G__11449 = i;
var G__11450 = j;
var G__11451 = k;
var G__11452 = l;
return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__11441,G__11442,G__11443,G__11444,G__11445,G__11446,G__11447,G__11448,G__11449,G__11450,G__11451,G__11452) : self__.afn.call(null,G__11441,G__11442,G__11443,G__11444,G__11445,G__11446,G__11447,G__11448,G__11449,G__11450,G__11451,G__11452));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
var G__11453 = a;
var G__11454 = b;
var G__11455 = c;
var G__11456 = d;
var G__11457 = e;
var G__11458 = f;
var G__11459 = g;
var G__11460 = h;
var G__11461 = i;
var G__11462 = j;
var G__11463 = k;
var G__11464 = l;
var G__11465 = m;
return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__11453,G__11454,G__11455,G__11456,G__11457,G__11458,G__11459,G__11460,G__11461,G__11462,G__11463,G__11464,G__11465) : self__.afn.call(null,G__11453,G__11454,G__11455,G__11456,G__11457,G__11458,G__11459,G__11460,G__11461,G__11462,G__11463,G__11464,G__11465));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
var G__11466 = a;
var G__11467 = b;
var G__11468 = c;
var G__11469 = d;
var G__11470 = e;
var G__11471 = f;
var G__11472 = g;
var G__11473 = h;
var G__11474 = i;
var G__11475 = j;
var G__11476 = k;
var G__11477 = l;
var G__11478 = m;
var G__11479 = n;
return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__11466,G__11467,G__11468,G__11469,G__11470,G__11471,G__11472,G__11473,G__11474,G__11475,G__11476,G__11477,G__11478,G__11479) : self__.afn.call(null,G__11466,G__11467,G__11468,G__11469,G__11470,G__11471,G__11472,G__11473,G__11474,G__11475,G__11476,G__11477,G__11478,G__11479));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
var G__11480 = a;
var G__11481 = b;
var G__11482 = c;
var G__11483 = d;
var G__11484 = e;
var G__11485 = f;
var G__11486 = g;
var G__11487 = h;
var G__11488 = i;
var G__11489 = j;
var G__11490 = k;
var G__11491 = l;
var G__11492 = m;
var G__11493 = n;
var G__11494 = o;
return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__11480,G__11481,G__11482,G__11483,G__11484,G__11485,G__11486,G__11487,G__11488,G__11489,G__11490,G__11491,G__11492,G__11493,G__11494) : self__.afn.call(null,G__11480,G__11481,G__11482,G__11483,G__11484,G__11485,G__11486,G__11487,G__11488,G__11489,G__11490,G__11491,G__11492,G__11493,G__11494));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
var G__11495 = a;
var G__11496 = b;
var G__11497 = c;
var G__11498 = d;
var G__11499 = e;
var G__11500 = f;
var G__11501 = g;
var G__11502 = h;
var G__11503 = i;
var G__11504 = j;
var G__11505 = k;
var G__11506 = l;
var G__11507 = m;
var G__11508 = n;
var G__11509 = o;
var G__11510 = p;
return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__11495,G__11496,G__11497,G__11498,G__11499,G__11500,G__11501,G__11502,G__11503,G__11504,G__11505,G__11506,G__11507,G__11508,G__11509,G__11510) : self__.afn.call(null,G__11495,G__11496,G__11497,G__11498,G__11499,G__11500,G__11501,G__11502,G__11503,G__11504,G__11505,G__11506,G__11507,G__11508,G__11509,G__11510));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
var G__11511 = a;
var G__11512 = b;
var G__11513 = c;
var G__11514 = d;
var G__11515 = e;
var G__11516 = f;
var G__11517 = g;
var G__11518 = h;
var G__11519 = i;
var G__11520 = j;
var G__11521 = k;
var G__11522 = l;
var G__11523 = m;
var G__11524 = n;
var G__11525 = o;
var G__11526 = p;
var G__11527 = q;
return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__11511,G__11512,G__11513,G__11514,G__11515,G__11516,G__11517,G__11518,G__11519,G__11520,G__11521,G__11522,G__11523,G__11524,G__11525,G__11526,G__11527) : self__.afn.call(null,G__11511,G__11512,G__11513,G__11514,G__11515,G__11516,G__11517,G__11518,G__11519,G__11520,G__11521,G__11522,G__11523,G__11524,G__11525,G__11526,G__11527));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
var G__11528 = a;
var G__11529 = b;
var G__11530 = c;
var G__11531 = d;
var G__11532 = e;
var G__11533 = f;
var G__11534 = g;
var G__11535 = h;
var G__11536 = i;
var G__11537 = j;
var G__11538 = k;
var G__11539 = l;
var G__11540 = m;
var G__11541 = n;
var G__11542 = o;
var G__11543 = p;
var G__11544 = q;
var G__11545 = r;
return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__11528,G__11529,G__11530,G__11531,G__11532,G__11533,G__11534,G__11535,G__11536,G__11537,G__11538,G__11539,G__11540,G__11541,G__11542,G__11543,G__11544,G__11545) : self__.afn.call(null,G__11528,G__11529,G__11530,G__11531,G__11532,G__11533,G__11534,G__11535,G__11536,G__11537,G__11538,G__11539,G__11540,G__11541,G__11542,G__11543,G__11544,G__11545));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
var G__11546 = a;
var G__11547 = b;
var G__11548 = c;
var G__11549 = d;
var G__11550 = e;
var G__11551 = f;
var G__11552 = g;
var G__11553 = h;
var G__11554 = i;
var G__11555 = j;
var G__11556 = k;
var G__11557 = l;
var G__11558 = m;
var G__11559 = n;
var G__11560 = o;
var G__11561 = p;
var G__11562 = q;
var G__11563 = r;
var G__11564 = s;
return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__11546,G__11547,G__11548,G__11549,G__11550,G__11551,G__11552,G__11553,G__11554,G__11555,G__11556,G__11557,G__11558,G__11559,G__11560,G__11561,G__11562,G__11563,G__11564) : self__.afn.call(null,G__11546,G__11547,G__11548,G__11549,G__11550,G__11551,G__11552,G__11553,G__11554,G__11555,G__11556,G__11557,G__11558,G__11559,G__11560,G__11561,G__11562,G__11563,G__11564));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
var G__11565 = a;
var G__11566 = b;
var G__11567 = c;
var G__11568 = d;
var G__11569 = e;
var G__11570 = f;
var G__11571 = g;
var G__11572 = h;
var G__11573 = i;
var G__11574 = j;
var G__11575 = k;
var G__11576 = l;
var G__11577 = m;
var G__11578 = n;
var G__11579 = o;
var G__11580 = p;
var G__11581 = q;
var G__11582 = r;
var G__11583 = s;
var G__11584 = t;
return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__11565,G__11566,G__11567,G__11568,G__11569,G__11570,G__11571,G__11572,G__11573,G__11574,G__11575,G__11576,G__11577,G__11578,G__11579,G__11580,G__11581,G__11582,G__11583,G__11584) : self__.afn.call(null,G__11565,G__11566,G__11567,G__11568,G__11569,G__11570,G__11571,G__11572,G__11573,G__11574,G__11575,G__11576,G__11577,G__11578,G__11579,G__11580,G__11581,G__11582,G__11583,G__11584));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
var G__11585 = self__.afn;
var G__11586 = a;
var G__11587 = b;
var G__11588 = c;
var G__11589 = d;
var G__11590 = e;
var G__11591 = f;
var G__11592 = g;
var G__11593 = h;
var G__11594 = i;
var G__11595 = j;
var G__11596 = k;
var G__11597 = l;
var G__11598 = m;
var G__11599 = n;
var G__11600 = o;
var G__11601 = p;
var G__11602 = q;
var G__11603 = r;
var G__11604 = s;
var G__11605 = t;
var G__11606 = rest;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__11585,G__11586,G__11587,G__11588,G__11589,G__11590,G__11591,G__11592,G__11593,G__11594,G__11595,G__11596,G__11597,G__11598,G__11599,G__11600,G__11601,G__11602,G__11603,G__11604,G__11605,G__11606) : cljs.core.apply.call(null,G__11585,G__11586,G__11587,G__11588,G__11589,G__11590,G__11591,G__11592,G__11593,G__11594,G__11595,G__11596,G__11597,G__11598,G__11599,G__11600,G__11601,G__11602,G__11603,G__11604,G__11605,G__11606));
});

cljs.core.MetaFn.prototype.cljs$core$Fn$ = true;

cljs.core.MetaFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.MetaFn(self__.afn,new_meta));
});

cljs.core.MetaFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

cljs.core.MetaFn.cljs$lang$type = true;

cljs.core.MetaFn.cljs$lang$ctorStr = "cljs.core/MetaFn";

cljs.core.MetaFn.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/MetaFn");
});

cljs.core.__GT_MetaFn = (function __GT_MetaFn(afn,meta){
return (new cljs.core.MetaFn(afn,meta));
});

/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
if((cljs.core.fn_QMARK_(o)) && (!((function (){var G__11611 = o;
if(G__11611){
var bit__4284__auto__ = (G__11611.cljs$lang$protocol_mask$partition0$ & (262144));
if((bit__4284__auto__) || (G__11611.cljs$core$IWithMeta$)){
return true;
} else {
if((!G__11611.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__11611);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__11611);
}
})()))){
return (new cljs.core.MetaFn(o,meta));
} else {
if((o == null)){
return null;
} else {
return cljs.core._with_meta(o,meta);
}
}
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var and__3596__auto__ = !((o == null));
if(and__3596__auto__){
var G__11615 = o;
if(G__11615){
var bit__4284__auto__ = (G__11615.cljs$lang$protocol_mask$partition0$ & (131072));
if((bit__4284__auto__) || (G__11615.cljs$core$IMeta$)){
return true;
} else {
if((!G__11615.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__11615);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__11615);
}
} else {
return and__3596__auto__;
}
})()){
return cljs.core._meta(o);
} else {
return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
if((coll == null)){
return null;
} else {
return cljs.core._peek(coll);
}
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
if((coll == null)){
return null;
} else {
return cljs.core._pop(coll);
}
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
if((coll == null)){
return null;
} else {
return cljs.core._disjoin(coll,k);
}
});
var disj__3 = (function() { 
var G__11618__delegate = function (coll,k,ks){
while(true){
if((coll == null)){
return null;
} else {
var ret = disj.cljs$core$IFn$_invoke$arity$2(coll,k);
if(cljs.core.truth_(ks)){
var G__11619 = ret;
var G__11620 = cljs.core.first(ks);
var G__11621 = cljs.core.next(ks);
coll = G__11619;
k = G__11620;
ks = G__11621;
continue;
} else {
return ret;
}
}
break;
}
};
var G__11618 = function (coll,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11618__delegate.call(this,coll,k,ks);};
G__11618.cljs$lang$maxFixedArity = 2;
G__11618.cljs$lang$applyTo = (function (arglist__11622){
var coll = cljs.core.first(arglist__11622);
arglist__11622 = cljs.core.next(arglist__11622);
var k = cljs.core.first(arglist__11622);
var ks = cljs.core.rest(arglist__11622);
return G__11618__delegate(coll,k,ks);
});
G__11618.cljs$core$IFn$_invoke$arity$variadic = G__11618__delegate;
return G__11618;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$core$IFn$_invoke$arity$1 = disj__1;
disj.cljs$core$IFn$_invoke$arity$2 = disj__2;
disj.cljs$core$IFn$_invoke$arity$variadic = disj__3.cljs$core$IFn$_invoke$arity$variadic;
return disj;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return ((coll == null)) || (cljs.core.not(cljs.core.seq(coll)));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null)){
return false;
} else {
var G__11624 = x;
if(G__11624){
var bit__4284__auto__ = (G__11624.cljs$lang$protocol_mask$partition0$ & (8));
if((bit__4284__auto__) || (G__11624.cljs$core$ICollection$)){
return true;
} else {
if((!G__11624.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__11624);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__11624);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null)){
return false;
} else {
var G__11626 = x;
if(G__11626){
var bit__4284__auto__ = (G__11626.cljs$lang$protocol_mask$partition0$ & (4096));
if((bit__4284__auto__) || (G__11626.cljs$core$ISet$)){
return true;
} else {
if((!G__11626.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__11626);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__11626);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__11628 = x;
if(G__11628){
var bit__4284__auto__ = (G__11628.cljs$lang$protocol_mask$partition0$ & (512));
if((bit__4284__auto__) || (G__11628.cljs$core$IAssociative$)){
return true;
} else {
if((!G__11628.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__11628);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__11628);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__11630 = x;
if(G__11630){
var bit__4284__auto__ = (G__11630.cljs$lang$protocol_mask$partition0$ & (16777216));
if((bit__4284__auto__) || (G__11630.cljs$core$ISequential$)){
return true;
} else {
if((!G__11630.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__11630);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__11630);
}
});
/**
* Returns true if coll satisfies ISorted
*/
cljs.core.sorted_QMARK_ = (function sorted_QMARK_(x){
var G__11632 = x;
if(G__11632){
var bit__4284__auto__ = (G__11632.cljs$lang$protocol_mask$partition0$ & (268435456));
if((bit__4284__auto__) || (G__11632.cljs$core$ISorted$)){
return true;
} else {
if((!G__11632.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__11632);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__11632);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__11634 = x;
if(G__11634){
var bit__4284__auto__ = (G__11634.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4284__auto__) || (G__11634.cljs$core$IReduce$)){
return true;
} else {
if((!G__11634.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__11634);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__11634);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null)){
return false;
} else {
var G__11636 = x;
if(G__11636){
var bit__4284__auto__ = (G__11636.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__4284__auto__) || (G__11636.cljs$core$IMap$)){
return true;
} else {
if((!G__11636.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__11636);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__11636);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__11638 = x;
if(G__11638){
var bit__4284__auto__ = (G__11638.cljs$lang$protocol_mask$partition0$ & (16384));
if((bit__4284__auto__) || (G__11638.cljs$core$IVector$)){
return true;
} else {
if((!G__11638.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__11638);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__11638);
}
});

cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__11640 = x;
if(G__11640){
var bit__4277__auto__ = (G__11640.cljs$lang$protocol_mask$partition1$ & (512));
if((bit__4277__auto__) || (G__11640.cljs$core$IChunkedSeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
var obj11646 = {};
return obj11646;
});
var js_obj__1 = (function() { 
var G__11649__delegate = function (keyvals){
var G__11647 = goog.object.create;
var G__11648 = keyvals;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__11647,G__11648) : cljs.core.apply.call(null,G__11647,G__11648));
};
var G__11649 = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11649__delegate.call(this,keyvals);};
G__11649.cljs$lang$maxFixedArity = 0;
G__11649.cljs$lang$applyTo = (function (arglist__11650){
var keyvals = cljs.core.seq(arglist__11650);
return G__11649__delegate(keyvals);
});
G__11649.cljs$core$IFn$_invoke$arity$variadic = G__11649__delegate;
return G__11649;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$core$IFn$_invoke$arity$0 = js_obj__0;
js_obj.cljs$core$IFn$_invoke$arity$variadic = js_obj__1.cljs$core$IFn$_invoke$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys = [];
var G__11653_11655 = obj;
var G__11654_11656 = ((function (G__11653_11655,keys){
return (function (val,key,obj__$1){
return keys.push(key);
});})(G__11653_11655,keys))
;
goog.object.forEach(G__11653_11655,G__11654_11656);

return keys;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__$1 = i;
var j__$1 = j;
var len__$1 = len;
while(true){
if((len__$1 === (0))){
return to;
} else {
(to[j__$1] = (from[i__$1]));

var G__11657 = (i__$1 + (1));
var G__11658 = (j__$1 + (1));
var G__11659 = (len__$1 - (1));
i__$1 = G__11657;
j__$1 = G__11658;
len__$1 = G__11659;
continue;
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__$1 = (i + (len - (1)));
var j__$1 = (j + (len - (1)));
var len__$1 = len;
while(true){
if((len__$1 === (0))){
return to;
} else {
(to[j__$1] = (from[i__$1]));

var G__11660 = (i__$1 - (1));
var G__11661 = (j__$1 - (1));
var G__11662 = (len__$1 - (1));
i__$1 = G__11660;
j__$1 = G__11661;
len__$1 = G__11662;
continue;
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj11664 = {};
return obj11664;
})();
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null)){
return false;
} else {
var G__11666 = s;
if(G__11666){
var bit__4284__auto__ = (G__11666.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4284__auto__) || (G__11666.cljs$core$ISeq$)){
return true;
} else {
if((!G__11666.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__11666);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__11666);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__11668 = s;
if(G__11668){
var bit__4284__auto__ = (G__11668.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4284__auto__) || (G__11668.cljs$core$ISeqable$)){
return true;
} else {
if((!G__11668.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__11668);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__11668);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x)){
return true;
} else {
return false;
}
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3608__auto__ = cljs.core.fn_QMARK_(f);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var G__11672 = f;
if(G__11672){
var bit__4284__auto__ = (G__11672.cljs$lang$protocol_mask$partition0$ & (1));
if((bit__4284__auto__) || (G__11672.cljs$core$IFn$)){
return true;
} else {
if((!G__11672.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__11672);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__11672);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
return (typeof n === 'number') && (cljs.core.not((function (){var G__11685 = n;
return isNaN(G__11685);
})())) && (!((n === Infinity))) && (((function (){var G__11686 = n;
return parseFloat(G__11686);
})() === (function (){var G__11687 = n;
var G__11688 = (10);
return parseInt(G__11687,G__11688);
})()));
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return false;
} else {
return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if((!((coll == null))) && (cljs.core.associative_QMARK_(coll)) && (cljs.core.contains_QMARK_(coll,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,k)], null);
} else {
return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var distinct_QMARK___3 = (function() { 
var G__11689__delegate = function (x,y,more){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y))){
var s = cljs.core.PersistentHashSet.fromArray([x,y], true);
var xs = more;
while(true){
var x__$1 = cljs.core.first(xs);
var etc = cljs.core.next(xs);
if(cljs.core.truth_(xs)){
if(cljs.core.contains_QMARK_(s,x__$1)){
return false;
} else {
var G__11690 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,x__$1);
var G__11691 = etc;
s = G__11690;
xs = G__11691;
continue;
}
} else {
return true;
}
break;
}
} else {
return false;
}
};
var G__11689 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11689__delegate.call(this,x,y,more);};
G__11689.cljs$lang$maxFixedArity = 2;
G__11689.cljs$lang$applyTo = (function (arglist__11692){
var x = cljs.core.first(arglist__11692);
arglist__11692 = cljs.core.next(arglist__11692);
var y = cljs.core.first(arglist__11692);
var more = cljs.core.rest(arglist__11692);
return G__11689__delegate(x,y,more);
});
G__11689.cljs$core$IFn$_invoke$arity$variadic = G__11689__delegate;
return G__11689;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic = distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields ()
*/
cljs.core.sequence = (function sequence(coll){
if(cljs.core.seq_QMARK_(coll)){
return coll;
} else {
var or__3608__auto__ = cljs.core.seq(coll);
if(or__3608__auto__){
return or__3608__auto__;
} else {
return cljs.core.List.EMPTY;
}
}
});
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y)){
return (0);
} else {
if((x == null)){
return (-1);
} else {
if((y == null)){
return (1);
} else {
if((cljs.core.type(x) === cljs.core.type(y))){
if((function (){var G__11696 = x;
if(G__11696){
var bit__4277__auto__ = (G__11696.cljs$lang$protocol_mask$partition1$ & (2048));
if((bit__4277__auto__) || (G__11696.cljs$core$IComparable$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$IComparable$_compare$arity$2(null,y);
} else {
var G__11697 = x;
var G__11698 = y;
return goog.array.defaultCompare(G__11697,G__11698);
}
} else {
throw (new Error("compare on non-nil objects of different types"));

}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl = cljs.core.count(xs);
var yl = cljs.core.count(ys);
if((xl < yl)){
return (-1);
} else {
if((xl > yl)){
return (1);
} else {
return compare_indexed.cljs$core$IFn$_invoke$arity$4(xs,ys,xl,(0));

}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d = cljs.core.compare(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs,n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ys,n));
if(((d === (0))) && (((n + (1)) < len))){
var G__11703 = xs;
var G__11704 = ys;
var G__11705 = len;
var G__11706 = (n + (1));
xs = G__11703;
ys = G__11704;
len = G__11705;
n = G__11706;
continue;
} else {
return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$core$IFn$_invoke$arity$2 = compare_indexed__2;
compare_indexed.cljs$core$IFn$_invoke$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.compare)){
return cljs.core.compare;
} else {
return (function (x,y){
var r = (function (){var G__11711 = x;
var G__11712 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11711,G__11712) : f.call(null,G__11711,G__11712));
})();
if(typeof r === 'number'){
return r;
} else {
if(cljs.core.truth_(r)){
return (-1);
} else {
if(cljs.core.truth_((function (){var G__11713 = y;
var G__11714 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11713,G__11714) : f.call(null,G__11713,G__11714));
})())){
return (1);
} else {
return (0);
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq(coll)){
var a = (function (){var G__11720 = coll;
return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__11720) : cljs.core.to_array.call(null,G__11720));
})();
var G__11721_11723 = a;
var G__11722_11724 = cljs.core.fn__GT_comparator(comp);
goog.array.stableSort(G__11721_11723,G__11722_11724);

return cljs.core.seq(a);
} else {
return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$core$IFn$_invoke$arity$1 = sort__1;
sort.cljs$core$IFn$_invoke$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (x,y){
return cljs.core.fn__GT_comparator(comp).call(null,(function (){var G__11730 = x;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__11730) : keyfn.call(null,G__11730));
})(),(function (){var G__11731 = y;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__11731) : keyfn.call(null,G__11731));
})());
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$core$IFn$_invoke$arity$2 = sort_by__2;
sort_by.cljs$core$IFn$_invoke$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__4124__auto__ = cljs.core.seq(coll);
if(temp__4124__auto__){
var s = temp__4124__auto__;
var G__11737 = f;
var G__11738 = cljs.core.first(s);
var G__11739 = cljs.core.next(s);
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__11737,G__11738,G__11739) : cljs.core.reduce.call(null,G__11737,G__11738,G__11739));
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__$1 = val;
var coll__$1 = cljs.core.seq(coll);
while(true){
if(coll__$1){
var nval = (function (){var G__11740 = val__$1;
var G__11741 = cljs.core.first(coll__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11740,G__11741) : f.call(null,G__11740,G__11741));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__11742 = nval;
var G__11743 = cljs.core.next(coll__$1);
val__$1 = G__11742;
coll__$1 = G__11743;
continue;
}
} else {
return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$core$IFn$_invoke$arity$2 = seq_reduce__2;
seq_reduce.cljs$core$IFn$_invoke$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a = (function (){var G__11747 = coll;
return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__11747) : cljs.core.to_array.call(null,G__11747));
})();
var G__11748_11750 = a;
goog.array.shuffle(G__11748_11750);

var G__11749 = a;
return (cljs.core.vec.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vec.cljs$core$IFn$_invoke$arity$1(G__11749) : cljs.core.vec.call(null,G__11749));
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__11753 = coll;
if(G__11753){
var bit__4277__auto__ = (G__11753.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4277__auto__) || (G__11753.cljs$core$IReduce$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$2(null,f);
} else {
if(coll instanceof Array){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
if(typeof coll === 'string'){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll)){
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll);

}
}
}
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__11754 = coll;
if(G__11754){
var bit__4277__auto__ = (G__11754.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4277__auto__) || (G__11754.cljs$core$IReduce$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$3(null,f,val);
} else {
if(coll instanceof Array){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
if(typeof coll === 'string'){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll)){
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,val,coll);

}
}
}
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$core$IFn$_invoke$arity$2 = reduce__2;
reduce.cljs$core$IFn$_invoke$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
if(!((coll == null))){
return cljs.core._kv_reduce(coll,f,init);
} else {
return init;
}
});
cljs.core.identity = (function identity(x){
return x;
});
cljs.core.completing = (function() {
var completing = null;
var completing__1 = (function (f){
return completing.cljs$core$IFn$_invoke$arity$2(f,cljs.core.identity);
});
var completing__2 = (function (f,cf){
return (function() {
var G__11763 = null;
var G__11763__0 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__11763__1 = (function (x){
var G__11760 = x;
return (cf.cljs$core$IFn$_invoke$arity$1 ? cf.cljs$core$IFn$_invoke$arity$1(G__11760) : cf.call(null,G__11760));
});
var G__11763__2 = (function (x,y){
var G__11761 = x;
var G__11762 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11761,G__11762) : f.call(null,G__11761,G__11762));
});
G__11763 = function(x,y){
switch(arguments.length){
case 0:
return G__11763__0.call(this);
case 1:
return G__11763__1.call(this,x);
case 2:
return G__11763__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11763.cljs$core$IFn$_invoke$arity$0 = G__11763__0;
G__11763.cljs$core$IFn$_invoke$arity$1 = G__11763__1;
G__11763.cljs$core$IFn$_invoke$arity$2 = G__11763__2;
return G__11763;
})()
});
completing = function(f,cf){
switch(arguments.length){
case 1:
return completing__1.call(this,f);
case 2:
return completing__2.call(this,f,cf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
completing.cljs$core$IFn$_invoke$arity$1 = completing__1;
completing.cljs$core$IFn$_invoke$arity$2 = completing__2;
return completing;
})()
;
/**
* reduce with a transformation of f (xf). If init is not
* supplied, (f) will be called to produce it. f should be a reducing
* step function that accepts both 1 and 2 arguments, if it accepts
* only 2 you can add the arity-1 with 'completing'. Returns the result
* of applying (the transformed) xf to init and the first item in coll,
* then applying xf to that result and the 2nd item, etc. If coll
* contains no items, returns init and f is not called. Note that
* certain transforms may inject or skip items.
*/
cljs.core.transduce = (function() {
var transduce = null;
var transduce__3 = (function (xform,f,coll){
return transduce.cljs$core$IFn$_invoke$arity$4(xform,f,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),coll);
});
var transduce__4 = (function (xform,f,init,coll){
var f__$1 = (function (){var G__11770 = f;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__11770) : xform.call(null,G__11770));
})();
var ret = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f__$1,init,coll);
var G__11771 = ret;
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__11771) : f__$1.call(null,G__11771));
});
transduce = function(xform,f,init,coll){
switch(arguments.length){
case 3:
return transduce__3.call(this,xform,f,init);
case 4:
return transduce__4.call(this,xform,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transduce.cljs$core$IFn$_invoke$arity$3 = transduce__3;
transduce.cljs$core$IFn$_invoke$arity$4 = transduce__4;
return transduce;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return (0);
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__11772__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_PLUS_,(x + y),more);
};
var G__11772 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11772__delegate.call(this,x,y,more);};
G__11772.cljs$lang$maxFixedArity = 2;
G__11772.cljs$lang$applyTo = (function (arglist__11773){
var x = cljs.core.first(arglist__11773);
arglist__11773 = cljs.core.next(arglist__11773);
var y = cljs.core.first(arglist__11773);
var more = cljs.core.rest(arglist__11773);
return G__11772__delegate(x,y,more);
});
G__11772.cljs$core$IFn$_invoke$arity$variadic = G__11772__delegate;
return G__11772;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$core$IFn$_invoke$arity$0 = _PLUS___0;
_PLUS_.cljs$core$IFn$_invoke$arity$1 = _PLUS___1;
_PLUS_.cljs$core$IFn$_invoke$arity$2 = _PLUS___2;
_PLUS_.cljs$core$IFn$_invoke$arity$variadic = _PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__11774__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_,(x - y),more);
};
var G__11774 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11774__delegate.call(this,x,y,more);};
G__11774.cljs$lang$maxFixedArity = 2;
G__11774.cljs$lang$applyTo = (function (arglist__11775){
var x = cljs.core.first(arglist__11775);
arglist__11775 = cljs.core.next(arglist__11775);
var y = cljs.core.first(arglist__11775);
var more = cljs.core.rest(arglist__11775);
return G__11774__delegate(x,y,more);
});
G__11774.cljs$core$IFn$_invoke$arity$variadic = G__11774__delegate;
return G__11774;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$core$IFn$_invoke$arity$1 = ___1;
_.cljs$core$IFn$_invoke$arity$2 = ___2;
_.cljs$core$IFn$_invoke$arity$variadic = ___3.cljs$core$IFn$_invoke$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return (1);
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__11776__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,(x * y),more);
};
var G__11776 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11776__delegate.call(this,x,y,more);};
G__11776.cljs$lang$maxFixedArity = 2;
G__11776.cljs$lang$applyTo = (function (arglist__11777){
var x = cljs.core.first(arglist__11777);
arglist__11777 = cljs.core.next(arglist__11777);
var y = cljs.core.first(arglist__11777);
var more = cljs.core.rest(arglist__11777);
return G__11776__delegate(x,y,more);
});
G__11776.cljs$core$IFn$_invoke$arity$variadic = G__11776__delegate;
return G__11776;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$core$IFn$_invoke$arity$0 = _STAR___0;
_STAR_.cljs$core$IFn$_invoke$arity$1 = _STAR___1;
_STAR_.cljs$core$IFn$_invoke$arity$2 = _STAR___2;
_STAR_.cljs$core$IFn$_invoke$arity$variadic = _STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.cljs$core$IFn$_invoke$arity$2((1),x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__11782__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_SLASH_,_SLASH_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__11782 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11782__delegate.call(this,x,y,more);};
G__11782.cljs$lang$maxFixedArity = 2;
G__11782.cljs$lang$applyTo = (function (arglist__11783){
var x = cljs.core.first(arglist__11783);
arglist__11783 = cljs.core.next(arglist__11783);
var y = cljs.core.first(arglist__11783);
var more = cljs.core.rest(arglist__11783);
return G__11782__delegate(x,y,more);
});
G__11782.cljs$core$IFn$_invoke$arity$variadic = G__11782__delegate;
return G__11782;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$core$IFn$_invoke$arity$1 = _SLASH___1;
_SLASH_.cljs$core$IFn$_invoke$arity$2 = _SLASH___2;
_SLASH_.cljs$core$IFn$_invoke$arity$variadic = _SLASH___3.cljs$core$IFn$_invoke$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__11784__delegate = function (x,y,more){
while(true){
if((x < y)){
if(cljs.core.next(more)){
var G__11785 = y;
var G__11786 = cljs.core.first(more);
var G__11787 = cljs.core.next(more);
x = G__11785;
y = G__11786;
more = G__11787;
continue;
} else {
return (y < cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__11784 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11784__delegate.call(this,x,y,more);};
G__11784.cljs$lang$maxFixedArity = 2;
G__11784.cljs$lang$applyTo = (function (arglist__11788){
var x = cljs.core.first(arglist__11788);
arglist__11788 = cljs.core.next(arglist__11788);
var y = cljs.core.first(arglist__11788);
var more = cljs.core.rest(arglist__11788);
return G__11784__delegate(x,y,more);
});
G__11784.cljs$core$IFn$_invoke$arity$variadic = G__11784__delegate;
return G__11784;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$core$IFn$_invoke$arity$1 = _LT___1;
_LT_.cljs$core$IFn$_invoke$arity$2 = _LT___2;
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__11789__delegate = function (x,y,more){
while(true){
if((x <= y)){
if(cljs.core.next(more)){
var G__11790 = y;
var G__11791 = cljs.core.first(more);
var G__11792 = cljs.core.next(more);
x = G__11790;
y = G__11791;
more = G__11792;
continue;
} else {
return (y <= cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__11789 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11789__delegate.call(this,x,y,more);};
G__11789.cljs$lang$maxFixedArity = 2;
G__11789.cljs$lang$applyTo = (function (arglist__11793){
var x = cljs.core.first(arglist__11793);
arglist__11793 = cljs.core.next(arglist__11793);
var y = cljs.core.first(arglist__11793);
var more = cljs.core.rest(arglist__11793);
return G__11789__delegate(x,y,more);
});
G__11789.cljs$core$IFn$_invoke$arity$variadic = G__11789__delegate;
return G__11789;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$core$IFn$_invoke$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$core$IFn$_invoke$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__11794__delegate = function (x,y,more){
while(true){
if((x > y)){
if(cljs.core.next(more)){
var G__11795 = y;
var G__11796 = cljs.core.first(more);
var G__11797 = cljs.core.next(more);
x = G__11795;
y = G__11796;
more = G__11797;
continue;
} else {
return (y > cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__11794 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11794__delegate.call(this,x,y,more);};
G__11794.cljs$lang$maxFixedArity = 2;
G__11794.cljs$lang$applyTo = (function (arglist__11798){
var x = cljs.core.first(arglist__11798);
arglist__11798 = cljs.core.next(arglist__11798);
var y = cljs.core.first(arglist__11798);
var more = cljs.core.rest(arglist__11798);
return G__11794__delegate(x,y,more);
});
G__11794.cljs$core$IFn$_invoke$arity$variadic = G__11794__delegate;
return G__11794;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$core$IFn$_invoke$arity$1 = _GT___1;
_GT_.cljs$core$IFn$_invoke$arity$2 = _GT___2;
_GT_.cljs$core$IFn$_invoke$arity$variadic = _GT___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__11799__delegate = function (x,y,more){
while(true){
if((x >= y)){
if(cljs.core.next(more)){
var G__11800 = y;
var G__11801 = cljs.core.first(more);
var G__11802 = cljs.core.next(more);
x = G__11800;
y = G__11801;
more = G__11802;
continue;
} else {
return (y >= cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__11799 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11799__delegate.call(this,x,y,more);};
G__11799.cljs$lang$maxFixedArity = 2;
G__11799.cljs$lang$applyTo = (function (arglist__11803){
var x = cljs.core.first(arglist__11803);
arglist__11803 = cljs.core.next(arglist__11803);
var y = cljs.core.first(arglist__11803);
var more = cljs.core.rest(arglist__11803);
return G__11799__delegate(x,y,more);
});
G__11799.cljs$core$IFn$_invoke$arity$variadic = G__11799__delegate;
return G__11799;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$core$IFn$_invoke$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$core$IFn$_invoke$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - (1));
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
var x__3920__auto__ = x;
var y__3921__auto__ = y;
return ((x__3920__auto__ > y__3921__auto__) ? x__3920__auto__ : y__3921__auto__);
});
var max__3 = (function() { 
var G__11804__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(max,(function (){var x__3920__auto__ = x;
var y__3921__auto__ = y;
return ((x__3920__auto__ > y__3921__auto__) ? x__3920__auto__ : y__3921__auto__);
})(),more);
};
var G__11804 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11804__delegate.call(this,x,y,more);};
G__11804.cljs$lang$maxFixedArity = 2;
G__11804.cljs$lang$applyTo = (function (arglist__11805){
var x = cljs.core.first(arglist__11805);
arglist__11805 = cljs.core.next(arglist__11805);
var y = cljs.core.first(arglist__11805);
var more = cljs.core.rest(arglist__11805);
return G__11804__delegate(x,y,more);
});
G__11804.cljs$core$IFn$_invoke$arity$variadic = G__11804__delegate;
return G__11804;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$core$IFn$_invoke$arity$1 = max__1;
max.cljs$core$IFn$_invoke$arity$2 = max__2;
max.cljs$core$IFn$_invoke$arity$variadic = max__3.cljs$core$IFn$_invoke$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
var x__3927__auto__ = x;
var y__3928__auto__ = y;
return ((x__3927__auto__ < y__3928__auto__) ? x__3927__auto__ : y__3928__auto__);
});
var min__3 = (function() { 
var G__11806__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(min,(function (){var x__3927__auto__ = x;
var y__3928__auto__ = y;
return ((x__3927__auto__ < y__3928__auto__) ? x__3927__auto__ : y__3928__auto__);
})(),more);
};
var G__11806 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11806__delegate.call(this,x,y,more);};
G__11806.cljs$lang$maxFixedArity = 2;
G__11806.cljs$lang$applyTo = (function (arglist__11807){
var x = cljs.core.first(arglist__11807);
arglist__11807 = cljs.core.next(arglist__11807);
var y = cljs.core.first(arglist__11807);
var more = cljs.core.rest(arglist__11807);
return G__11806__delegate(x,y,more);
});
G__11806.cljs$core$IFn$_invoke$arity$variadic = G__11806__delegate;
return G__11806;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$core$IFn$_invoke$arity$1 = min__1;
min.cljs$core$IFn$_invoke$arity$2 = min__2;
min.cljs$core$IFn$_invoke$arity$variadic = min__3.cljs$core$IFn$_invoke$arity$variadic;
return min;
})()
;
cljs.core.byte$ = (function byte$(x){
return x;
});
/**
* Coerce to char
*/
cljs.core.char$ = (function char$(x){
if(typeof x === 'number'){
return String.fromCharCode(x);
} else {
if((typeof x === 'string') && ((x.length === (1)))){
return x;
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.core.short$ = (function short$(x){
return x;
});
cljs.core.float$ = (function float$(x){
return x;
});
cljs.core.double$ = (function double$(x){
return x;
});
cljs.core.unchecked_byte = (function unchecked_byte(x){
return x;
});
cljs.core.unchecked_char = (function unchecked_char(x){
return x;
});
cljs.core.unchecked_short = (function unchecked_short(x){
return x;
});
cljs.core.unchecked_float = (function unchecked_float(x){
return x;
});
cljs.core.unchecked_double = (function unchecked_double(x){
return x;
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add = (function() {
var unchecked_add = null;
var unchecked_add__0 = (function (){
return (0);
});
var unchecked_add__1 = (function (x){
return x;
});
var unchecked_add__2 = (function (x,y){
return (x + y);
});
var unchecked_add__3 = (function() { 
var G__11808__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add,(x + y),more);
};
var G__11808 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11808__delegate.call(this,x,y,more);};
G__11808.cljs$lang$maxFixedArity = 2;
G__11808.cljs$lang$applyTo = (function (arglist__11809){
var x = cljs.core.first(arglist__11809);
arglist__11809 = cljs.core.next(arglist__11809);
var y = cljs.core.first(arglist__11809);
var more = cljs.core.rest(arglist__11809);
return G__11808__delegate(x,y,more);
});
G__11808.cljs$core$IFn$_invoke$arity$variadic = G__11808__delegate;
return G__11808;
})()
;
unchecked_add = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add__0.call(this);
case 1:
return unchecked_add__1.call(this,x);
case 2:
return unchecked_add__2.call(this,x,y);
default:
return unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add.cljs$lang$maxFixedArity = 2;
unchecked_add.cljs$lang$applyTo = unchecked_add__3.cljs$lang$applyTo;
unchecked_add.cljs$core$IFn$_invoke$arity$0 = unchecked_add__0;
unchecked_add.cljs$core$IFn$_invoke$arity$1 = unchecked_add__1;
unchecked_add.cljs$core$IFn$_invoke$arity$2 = unchecked_add__2;
unchecked_add.cljs$core$IFn$_invoke$arity$variadic = unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add_int = (function() {
var unchecked_add_int = null;
var unchecked_add_int__0 = (function (){
return (0);
});
var unchecked_add_int__1 = (function (x){
return x;
});
var unchecked_add_int__2 = (function (x,y){
return (x + y);
});
var unchecked_add_int__3 = (function() { 
var G__11810__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add_int,(x + y),more);
};
var G__11810 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11810__delegate.call(this,x,y,more);};
G__11810.cljs$lang$maxFixedArity = 2;
G__11810.cljs$lang$applyTo = (function (arglist__11811){
var x = cljs.core.first(arglist__11811);
arglist__11811 = cljs.core.next(arglist__11811);
var y = cljs.core.first(arglist__11811);
var more = cljs.core.rest(arglist__11811);
return G__11810__delegate(x,y,more);
});
G__11810.cljs$core$IFn$_invoke$arity$variadic = G__11810__delegate;
return G__11810;
})()
;
unchecked_add_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add_int__0.call(this);
case 1:
return unchecked_add_int__1.call(this,x);
case 2:
return unchecked_add_int__2.call(this,x,y);
default:
return unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add_int.cljs$lang$maxFixedArity = 2;
unchecked_add_int.cljs$lang$applyTo = unchecked_add_int__3.cljs$lang$applyTo;
unchecked_add_int.cljs$core$IFn$_invoke$arity$0 = unchecked_add_int__0;
unchecked_add_int.cljs$core$IFn$_invoke$arity$1 = unchecked_add_int__1;
unchecked_add_int.cljs$core$IFn$_invoke$arity$2 = unchecked_add_int__2;
unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add_int;
})()
;
cljs.core.unchecked_dec = (function unchecked_dec(x){
return (x - (1));
});
cljs.core.unchecked_dec_int = (function unchecked_dec_int(x){
return (x - (1));
});
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core.unchecked_divide_int = (function() {
var unchecked_divide_int = null;
var unchecked_divide_int__1 = (function (x){
return unchecked_divide_int.cljs$core$IFn$_invoke$arity$2((1),x);
});
var unchecked_divide_int__2 = (function (x,y){
return (x / y);
});
var unchecked_divide_int__3 = (function() { 
var G__11816__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_divide_int,unchecked_divide_int.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__11816 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11816__delegate.call(this,x,y,more);};
G__11816.cljs$lang$maxFixedArity = 2;
G__11816.cljs$lang$applyTo = (function (arglist__11817){
var x = cljs.core.first(arglist__11817);
arglist__11817 = cljs.core.next(arglist__11817);
var y = cljs.core.first(arglist__11817);
var more = cljs.core.rest(arglist__11817);
return G__11816__delegate(x,y,more);
});
G__11816.cljs$core$IFn$_invoke$arity$variadic = G__11816__delegate;
return G__11816;
})()
;
unchecked_divide_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_divide_int__1.call(this,x);
case 2:
return unchecked_divide_int__2.call(this,x,y);
default:
return unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_divide_int.cljs$lang$maxFixedArity = 2;
unchecked_divide_int.cljs$lang$applyTo = unchecked_divide_int__3.cljs$lang$applyTo;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$1 = unchecked_divide_int__1;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$2 = unchecked_divide_int__2;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_divide_int;
})()
;
cljs.core.unchecked_inc = (function unchecked_inc(x){
return (x + (1));
});
cljs.core.unchecked_inc_int = (function unchecked_inc_int(x){
return (x + (1));
});
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply = (function() {
var unchecked_multiply = null;
var unchecked_multiply__0 = (function (){
return (1);
});
var unchecked_multiply__1 = (function (x){
return x;
});
var unchecked_multiply__2 = (function (x,y){
return (x * y);
});
var unchecked_multiply__3 = (function() { 
var G__11818__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply,(x * y),more);
};
var G__11818 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11818__delegate.call(this,x,y,more);};
G__11818.cljs$lang$maxFixedArity = 2;
G__11818.cljs$lang$applyTo = (function (arglist__11819){
var x = cljs.core.first(arglist__11819);
arglist__11819 = cljs.core.next(arglist__11819);
var y = cljs.core.first(arglist__11819);
var more = cljs.core.rest(arglist__11819);
return G__11818__delegate(x,y,more);
});
G__11818.cljs$core$IFn$_invoke$arity$variadic = G__11818__delegate;
return G__11818;
})()
;
unchecked_multiply = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply__0.call(this);
case 1:
return unchecked_multiply__1.call(this,x);
case 2:
return unchecked_multiply__2.call(this,x,y);
default:
return unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply.cljs$lang$maxFixedArity = 2;
unchecked_multiply.cljs$lang$applyTo = unchecked_multiply__3.cljs$lang$applyTo;
unchecked_multiply.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply__0;
unchecked_multiply.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply__1;
unchecked_multiply.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply__2;
unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply_int = (function() {
var unchecked_multiply_int = null;
var unchecked_multiply_int__0 = (function (){
return (1);
});
var unchecked_multiply_int__1 = (function (x){
return x;
});
var unchecked_multiply_int__2 = (function (x,y){
return (x * y);
});
var unchecked_multiply_int__3 = (function() { 
var G__11820__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply_int,(x * y),more);
};
var G__11820 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11820__delegate.call(this,x,y,more);};
G__11820.cljs$lang$maxFixedArity = 2;
G__11820.cljs$lang$applyTo = (function (arglist__11821){
var x = cljs.core.first(arglist__11821);
arglist__11821 = cljs.core.next(arglist__11821);
var y = cljs.core.first(arglist__11821);
var more = cljs.core.rest(arglist__11821);
return G__11820__delegate(x,y,more);
});
G__11820.cljs$core$IFn$_invoke$arity$variadic = G__11820__delegate;
return G__11820;
})()
;
unchecked_multiply_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply_int__0.call(this);
case 1:
return unchecked_multiply_int__1.call(this,x);
case 2:
return unchecked_multiply_int__2.call(this,x,y);
default:
return unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply_int.cljs$lang$maxFixedArity = 2;
unchecked_multiply_int.cljs$lang$applyTo = unchecked_multiply_int__3.cljs$lang$applyTo;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply_int__0;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply_int__1;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply_int__2;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply_int;
})()
;
cljs.core.unchecked_negate = (function unchecked_negate(x){
return (- x);
});
cljs.core.unchecked_negate_int = (function unchecked_negate_int(x){
return (- x);
});
cljs.core.unchecked_remainder_int = (function unchecked_remainder_int(x,n){
var G__11824 = x;
var G__11825 = n;
return (cljs.core.mod.cljs$core$IFn$_invoke$arity$2 ? cljs.core.mod.cljs$core$IFn$_invoke$arity$2(G__11824,G__11825) : cljs.core.mod.call(null,G__11824,G__11825));
});
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract = (function() {
var unchecked_subtract = null;
var unchecked_subtract__1 = (function (x){
return (- x);
});
var unchecked_subtract__2 = (function (x,y){
return (x - y);
});
var unchecked_subtract__3 = (function() { 
var G__11826__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract,(x - y),more);
};
var G__11826 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11826__delegate.call(this,x,y,more);};
G__11826.cljs$lang$maxFixedArity = 2;
G__11826.cljs$lang$applyTo = (function (arglist__11827){
var x = cljs.core.first(arglist__11827);
arglist__11827 = cljs.core.next(arglist__11827);
var y = cljs.core.first(arglist__11827);
var more = cljs.core.rest(arglist__11827);
return G__11826__delegate(x,y,more);
});
G__11826.cljs$core$IFn$_invoke$arity$variadic = G__11826__delegate;
return G__11826;
})()
;
unchecked_subtract = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract__1.call(this,x);
case 2:
return unchecked_subtract__2.call(this,x,y);
default:
return unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract.cljs$lang$maxFixedArity = 2;
unchecked_subtract.cljs$lang$applyTo = unchecked_subtract__3.cljs$lang$applyTo;
unchecked_subtract.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract__1;
unchecked_subtract.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract__2;
unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract_int = (function() {
var unchecked_subtract_int = null;
var unchecked_subtract_int__1 = (function (x){
return (- x);
});
var unchecked_subtract_int__2 = (function (x,y){
return (x - y);
});
var unchecked_subtract_int__3 = (function() { 
var G__11828__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract_int,(x - y),more);
};
var G__11828 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11828__delegate.call(this,x,y,more);};
G__11828.cljs$lang$maxFixedArity = 2;
G__11828.cljs$lang$applyTo = (function (arglist__11829){
var x = cljs.core.first(arglist__11829);
arglist__11829 = cljs.core.next(arglist__11829);
var y = cljs.core.first(arglist__11829);
var more = cljs.core.rest(arglist__11829);
return G__11828__delegate(x,y,more);
});
G__11828.cljs$core$IFn$_invoke$arity$variadic = G__11828__delegate;
return G__11828;
})()
;
unchecked_subtract_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract_int__1.call(this,x);
case 2:
return unchecked_subtract_int__2.call(this,x,y);
default:
return unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract_int.cljs$lang$maxFixedArity = 2;
unchecked_subtract_int.cljs$lang$applyTo = unchecked_subtract_int__3.cljs$lang$applyTo;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract_int__1;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract_int__2;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract_int;
})()
;
cljs.core.fix = (function fix(q){
if((q >= (0))){
var G__11832 = q;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__11832) : Math.floor.call(null,G__11832));
} else {
var G__11833 = q;
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__11833) : Math.ceil.call(null,G__11833));
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return (x | (0));
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.unchecked_int = (function unchecked_int(x){
return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.unchecked_long = (function unchecked_long(x){
return cljs.core.fix(x);
});
cljs.core.booleans = (function booleans(x){
return x;
});
cljs.core.bytes = (function bytes(x){
return x;
});
cljs.core.chars = (function chars(x){
return x;
});
cljs.core.shorts = (function shorts(x){
return x;
});
cljs.core.ints = (function ints(x){
return x;
});
cljs.core.floats = (function floats(x){
return x;
});
cljs.core.doubles = (function doubles(x){
return x;
});
cljs.core.longs = (function longs(x){
return x;
});
/**
* Modulus of num and div with original javascript behavior. i.e. bug for negative numbers
*/
cljs.core.js_mod = (function js_mod(n,d){
return (n % d);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (((n % d) + d) % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem = (n % d);
return cljs.core.fix(((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q = cljs.core.quot(n,d);
return (n - (d * q));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
});
var rand__1 = (function (n){
return (n * rand.cljs$core$IFn$_invoke$arity$0());
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* DEPRECATED: Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.unsigned_bit_shift_right = (function unsigned_bit_shift_right(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__$1 = (v - ((v >> (1)) & (1431655765)));
var v__$2 = ((v__$1 & (858993459)) + ((v__$1 >> (2)) & (858993459)));
return ((((v__$2 + (v__$2 >> (4))) & (252645135)) * (16843009)) >> (24));
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv(x,y);
});
var _EQ__EQ___3 = (function() { 
var G__11838__delegate = function (x,y,more){
while(true){
if(_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
if(cljs.core.next(more)){
var G__11839 = y;
var G__11840 = cljs.core.first(more);
var G__11841 = cljs.core.next(more);
x = G__11839;
y = G__11840;
more = G__11841;
continue;
} else {
return _EQ__EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__11838 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11838__delegate.call(this,x,y,more);};
G__11838.cljs$lang$maxFixedArity = 2;
G__11838.cljs$lang$applyTo = (function (arglist__11842){
var x = cljs.core.first(arglist__11842);
arglist__11842 = cljs.core.next(arglist__11842);
var y = cljs.core.first(arglist__11842);
var more = cljs.core.rest(arglist__11842);
return G__11838__delegate(x,y,more);
});
G__11838.cljs$core$IFn$_invoke$arity$variadic = G__11838__delegate;
return G__11838;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > (0));
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === (0));
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < (0));
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__$1 = n;
var xs = cljs.core.seq(coll);
while(true){
if((xs) && ((n__$1 > (0)))){
var G__11843 = (n__$1 - (1));
var G__11844 = cljs.core.next(xs);
n__$1 = G__11843;
xs = G__11844;
continue;
} else {
return xs;
}
break;
}
});
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if((x == null)){
return "";
} else {
return ''+x;
}
});
var str__2 = (function() { 
var G__11847__delegate = function (x,ys){
var sb = (new goog.string.StringBuffer(str.cljs$core$IFn$_invoke$arity$1(x)));
var more = ys;
while(true){
if(cljs.core.truth_(more)){
var G__11848 = sb.append(str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more)));
var G__11849 = cljs.core.next(more);
sb = G__11848;
more = G__11849;
continue;
} else {
return sb.toString();
}
break;
}
};
var G__11847 = function (x,var_args){
var ys = null;
if (arguments.length > 1) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11847__delegate.call(this,x,ys);};
G__11847.cljs$lang$maxFixedArity = 1;
G__11847.cljs$lang$applyTo = (function (arglist__11850){
var x = cljs.core.first(arglist__11850);
var ys = cljs.core.rest(arglist__11850);
return G__11847__delegate(x,ys);
});
G__11847.cljs$core$IFn$_invoke$arity$variadic = G__11847__delegate;
return G__11847;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$core$IFn$_invoke$arity$0 = str__0;
str.cljs$core$IFn$_invoke$arity$1 = str__1;
str.cljs$core$IFn$_invoke$arity$variadic = str__2.cljs$core$IFn$_invoke$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$core$IFn$_invoke$arity$2 = subs__2;
subs.cljs$core$IFn$_invoke$arity$3 = subs__3;
return subs;
})()
;

/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?(((cljs.core.counted_QMARK_(x)) && (cljs.core.counted_QMARK_(y)) && (!((cljs.core.count(x) === cljs.core.count(y)))))?false:(function (){var xs = cljs.core.seq(x);
var ys = cljs.core.seq(y);
while(true){
if((xs == null)){
return (ys == null);
} else {
if((ys == null)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys))){
var G__11851 = cljs.core.next(xs);
var G__11852 = cljs.core.next(ys);
xs = G__11851;
ys = G__11852;
continue;
} else {
return false;

}
}
}
break;
}
})()):null));
});
cljs.core.hash_coll = (function hash_coll(coll){
if(cljs.core.seq(coll)){
var res = cljs.core.hash(cljs.core.first(coll));
var s = cljs.core.next(coll);
while(true){
if((s == null)){
return res;
} else {
var G__11853 = cljs.core.hash_combine(res,cljs.core.hash(cljs.core.first(s)));
var G__11854 = cljs.core.next(s);
res = G__11853;
s = G__11854;
continue;
}
break;
}
} else {
return (0);
}
});

cljs.core.hash_imap = (function hash_imap(m){
var h = (0);
var s = cljs.core.seq(m);
while(true){
if(s){
var e = cljs.core.first(s);
var G__11859 = ((h + (cljs.core.hash((function (){var G__11857 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__11857) : cljs.core.key.call(null,G__11857));
})()) ^ cljs.core.hash((function (){var G__11858 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__11858) : cljs.core.val.call(null,G__11858));
})()))) % (4503599627370496));
var G__11860 = cljs.core.next(s);
h = G__11859;
s = G__11860;
continue;
} else {
return h;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h = (0);
var s__$1 = cljs.core.seq(s);
while(true){
if(s__$1){
var e = cljs.core.first(s__$1);
var G__11861 = ((h + cljs.core.hash(e)) % (4503599627370496));
var G__11862 = cljs.core.next(s__$1);
h = G__11861;
s__$1 = G__11862;
continue;
} else {
return h;
}
break;
}
});


/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var seq__11873_11883 = cljs.core.seq(fn_map);
var chunk__11874_11884 = null;
var count__11875_11885 = (0);
var i__11876_11886 = (0);
while(true){
if((i__11876_11886 < count__11875_11885)){
var vec__11877_11887 = chunk__11874_11884.cljs$core$IIndexed$_nth$arity$2(null,i__11876_11886);
var key_name_11888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11877_11887,(0),null);
var f_11889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11877_11887,(1),null);
var str_name_11890 = (function (){var G__11878 = key_name_11888;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__11878) : cljs.core.name.call(null,G__11878));
})();
(obj[str_name_11890] = f_11889);

var G__11891 = seq__11873_11883;
var G__11892 = chunk__11874_11884;
var G__11893 = count__11875_11885;
var G__11894 = (i__11876_11886 + (1));
seq__11873_11883 = G__11891;
chunk__11874_11884 = G__11892;
count__11875_11885 = G__11893;
i__11876_11886 = G__11894;
continue;
} else {
var temp__4126__auto___11895 = cljs.core.seq(seq__11873_11883);
if(temp__4126__auto___11895){
var seq__11873_11896__$1 = temp__4126__auto___11895;
if(cljs.core.chunked_seq_QMARK_(seq__11873_11896__$1)){
var c__4390__auto___11897 = (function (){var G__11879 = seq__11873_11896__$1;
return (cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1(G__11879) : cljs.core.chunk_first.call(null,G__11879));
})();
var G__11898 = (function (){var G__11880 = seq__11873_11896__$1;
return (cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1(G__11880) : cljs.core.chunk_rest.call(null,G__11880));
})();
var G__11899 = c__4390__auto___11897;
var G__11900 = cljs.core.count(c__4390__auto___11897);
var G__11901 = (0);
seq__11873_11883 = G__11898;
chunk__11874_11884 = G__11899;
count__11875_11885 = G__11900;
i__11876_11886 = G__11901;
continue;
} else {
var vec__11881_11902 = cljs.core.first(seq__11873_11896__$1);
var key_name_11903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11881_11902,(0),null);
var f_11904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11881_11902,(1),null);
var str_name_11905 = (function (){var G__11882 = key_name_11903;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__11882) : cljs.core.name.call(null,G__11882));
})();
(obj[str_name_11905] = f_11904);

var G__11906 = cljs.core.next(seq__11873_11896__$1);
var G__11907 = null;
var G__11908 = (0);
var G__11909 = (0);
seq__11873_11883 = G__11906;
chunk__11874_11884 = G__11907;
count__11875_11885 = G__11908;
i__11876_11886 = G__11909;
continue;
}
} else {
}
}
break;
}

return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65937646;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.List.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.List.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.List.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(self__.meta,self__.first,self__.rest,self__.count,self__.__hash));
});

cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.count === (1))){
return null;
} else {
return self__.rest;
}
});

cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.count;
});

cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._rest(coll__$1);
});

cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.count === (1))){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});

cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(self__.meta,o,coll__$1,(self__.count + (1)),null));
});

cljs.core.List.cljs$lang$type = true;

cljs.core.List.cljs$lang$ctorStr = "cljs.core/List";

cljs.core.List.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/List");
});

cljs.core.__GT_List = (function __GT_List(meta,first,rest,count,__hash){
return (new cljs.core.List(meta,first,rest,count,__hash));
});

(cljs.core.List.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 65937614;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.EmptyList.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.EmptyList.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.EmptyList.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.EmptyList(self__.meta));
});

cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (0);
});

cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
throw (new Error("Can't pop empty list"));
});

cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (0);
});

cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.EmptyList(meta__$1));
});

cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(self__.meta,o,null,(1),null));
});

cljs.core.EmptyList.cljs$lang$type = true;

cljs.core.EmptyList.cljs$lang$ctorStr = "cljs.core/EmptyList";

cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/EmptyList");
});

cljs.core.__GT_EmptyList = (function __GT_EmptyList(meta){
return (new cljs.core.EmptyList(meta));
});

cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
(cljs.core.EmptyList.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__11911 = coll;
if(G__11911){
var bit__4284__auto__ = (G__11911.cljs$lang$protocol_mask$partition0$ & (134217728));
if((bit__4284__auto__) || (G__11911.cljs$core$IReversible$)){
return true;
} else {
if((!G__11911.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__11911);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__11911);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq(coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_(coll)){
return cljs.core.rseq(coll);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (xs){
var arr = ((((xs instanceof cljs.core.IndexedSeq)) && ((xs.i === (0))))?xs.arr:(function (){var arr = [];
var xs__$1 = xs;
while(true){
if(!((xs__$1 == null))){
arr.push(xs__$1.cljs$core$ISeq$_first$arity$1(null));

var G__11912 = xs__$1.cljs$core$INext$_next$arity$1(null);
xs__$1 = G__11912;
continue;
} else {
return arr;
}
break;
}
})());
var i = arr.length;
var r = cljs.core.List.EMPTY;
while(true){
if((i > (0))){
var G__11913 = (i - (1));
var G__11914 = r.cljs$core$ICollection$_conj$arity$2(null,(arr[(i - (1))]));
i = G__11913;
r = G__11914;
continue;
} else {
return r;
}
break;
}
};
var list = function (var_args){
var xs = null;
if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this,xs);};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__11915){
var xs = cljs.core.seq(arglist__11915);
return list__delegate(xs);
});
list.cljs$core$IFn$_invoke$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65929452;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Cons.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Cons.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.Cons.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Cons(self__.meta,self__.first,self__.rest,self__.__hash));
});

cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.rest == null)){
return null;
} else {
return cljs.core.seq(self__.rest);
}
});

cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.rest == null)){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});

cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.Cons(null,o,coll__$1,self__.__hash));
});

cljs.core.Cons.cljs$lang$type = true;

cljs.core.Cons.cljs$lang$ctorStr = "cljs.core/Cons";

cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/Cons");
});

cljs.core.__GT_Cons = (function __GT_Cons(meta,first,rest,__hash){
return (new cljs.core.Cons(meta,first,rest,__hash));
});

(cljs.core.Cons.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3608__auto__ = (coll == null);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var G__11919 = coll;
if(G__11919){
var bit__4277__auto__ = (G__11919.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4277__auto__) || (G__11919.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
}
})()){
return (new cljs.core.Cons(null,x,coll,null));
} else {
return (new cljs.core.Cons(null,x,cljs.core.seq(coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__11921 = x;
if(G__11921){
var bit__4284__auto__ = (G__11921.cljs$lang$protocol_mask$partition0$ & (33554432));
if((bit__4284__auto__) || (G__11921.cljs$core$IList$)){
return true;
} else {
if((!G__11921.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__11921);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__11921);
}
});
cljs.core.hash_keyword = (function hash_keyword(k){
return ((cljs.core.hash_symbol(k) + (2654435769)) | (0));
});

/**
* @constructor
*/
cljs.core.Keyword = (function (ns,name,fqn,_hash){
this.ns = ns;
this.name = name;
this.fqn = fqn;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2153775105;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Keyword.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){
var self__ = this;
var o__$1 = this;
return cljs.core._write(writer,[cljs.core.str(":"),cljs.core.str(self__.fqn)].join(''));
});

cljs.core.Keyword.prototype.cljs$core$INamed$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
});

cljs.core.Keyword.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ns;
});

cljs.core.Keyword.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4024__auto__ = self__._hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_keyword(this$__$1);
self__._hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.Keyword.prototype.call = (function() {
var G__11923 = null;
var G__11923__2 = (function (self__,coll){
var self__ = this;
var self____$1 = this;
var kw = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
var G__11923__3 = (function (self__,coll,not_found){
var self__ = this;
var self____$1 = this;
var kw = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
G__11923 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__11923__2.call(this,self__,coll);
case 3:
return G__11923__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11923.cljs$core$IFn$_invoke$arity$2 = G__11923__2;
G__11923.cljs$core$IFn$_invoke$arity$3 = G__11923__3;
return G__11923;
})()
;

cljs.core.Keyword.prototype.apply = (function (self__,args11922){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11922)));
});

cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var self__ = this;
var kw = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});

cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){
var self__ = this;
var kw = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});

cljs.core.Keyword.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if((other instanceof cljs.core.Keyword)){
return (self__.fqn === other.fqn);
} else {
return false;
}
});

cljs.core.Keyword.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str(":"),cljs.core.str(self__.fqn)].join('');
});

cljs.core.Keyword.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Keyword.cljs$lang$type = true;

cljs.core.Keyword.cljs$lang$ctorStr = "cljs.core/Keyword";

cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/Keyword");
});

cljs.core.__GT_Keyword = (function __GT_Keyword(ns,name,fqn,_hash){
return (new cljs.core.Keyword(ns,name,fqn,_hash));
});

cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
return (x instanceof cljs.core.Keyword);
});
cljs.core.keyword_identical_QMARK_ = (function keyword_identical_QMARK_(x,y){
if((x === y)){
return true;
} else {
if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword))){
return (x.fqn === y.fqn);
} else {
return false;
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var G__11925 = x;
if(G__11925){
var bit__4277__auto__ = (G__11925.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4277__auto__) || (G__11925.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$INamed$_namespace$arity$1(null);
} else {
throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if((name instanceof cljs.core.Keyword)){
return name;
} else {
if((name instanceof cljs.core.Symbol)){
return (new cljs.core.Keyword(cljs.core.namespace(name),(function (){var G__11927 = name;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__11927) : cljs.core.name.call(null,G__11927));
})(),name.str,null));
} else {
if(typeof name === 'string'){
var parts = name.split("/");
if((parts.length === (2))){
return (new cljs.core.Keyword((parts[(0)]),(parts[(1)]),name,null));
} else {
return (new cljs.core.Keyword(null,(parts[(0)]),name,null));
}
} else {
return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return (new cljs.core.Keyword(ns,name,[cljs.core.str((cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/")].join(''):null)),cljs.core.str(name)].join(''),null));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyword.cljs$core$IFn$_invoke$arity$1 = keyword__1;
keyword.cljs$core$IFn$_invoke$arity$2 = keyword__2;
return keyword;
})()
;

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,fn,s,__hash){
this.meta = meta;
this.fn = fn;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.LazySeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.LazySeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.LazySeq.prototype.sval = (function (){
var self__ = this;
var coll = this;
if((self__.fn == null)){
return self__.s;
} else {
self__.s = (function (){return (self__.fn.cljs$core$IFn$_invoke$arity$0 ? self__.fn.cljs$core$IFn$_invoke$arity$0() : self__.fn.call(null));
})();

self__.fn = null;

return self__.s;
}
});

cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if((self__.s == null)){
return null;
} else {
return cljs.core.next(self__.s);
}
});

cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if((self__.s == null)){
return null;
} else {
return cljs.core.first(self__.s);
}
});

cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if(!((self__.s == null))){
return cljs.core.rest(self__.s);
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
coll__$1.sval();

if((self__.s == null)){
return null;
} else {
var ls = self__.s;
while(true){
if((ls instanceof cljs.core.LazySeq)){
var G__11928 = ls.sval();
ls = G__11928;
continue;
} else {
self__.s = ls;

return cljs.core.seq(self__.s);
}
break;
}
}
});

cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.LazySeq(meta__$1,self__.fn,self__.s,self__.__hash));
});

cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.LazySeq.cljs$lang$type = true;

cljs.core.LazySeq.cljs$lang$ctorStr = "cljs.core/LazySeq";

cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/LazySeq");
});

cljs.core.__GT_LazySeq = (function __GT_LazySeq(meta,fn,s,__hash){
return (new cljs.core.LazySeq(meta,fn,s,__hash));
});

(cljs.core.LazySeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.end;
});

cljs.core.ChunkBuffer.prototype.add = (function (o){
var self__ = this;
var _ = this;
(self__.buf[self__.end] = o);

return self__.end = (self__.end + (1));
});

cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var self__ = this;
var _ = this;
var ret = (new cljs.core.ArrayChunk(self__.buf,(0),self__.end));
self__.buf = null;

return ret;
});

cljs.core.ChunkBuffer.cljs$lang$type = true;

cljs.core.ChunkBuffer.cljs$lang$ctorStr = "cljs.core/ChunkBuffer";

cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/ChunkBuffer");
});

cljs.core.__GT_ChunkBuffer = (function __GT_ChunkBuffer(buf,end){
return (new cljs.core.ChunkBuffer(buf,end));
});

cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer((new Array(capacity)),(0)));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.off]),(self__.off + (1)));
});

cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.off);
});

cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;

cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.off === self__.end)){
throw (new Error("-drop-first of empty chunk"));
} else {
return (new cljs.core.ArrayChunk(self__.arr,(self__.off + (1)),self__.end));
}
});

cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var self__ = this;
var coll__$1 = this;
return (self__.arr[(self__.off + i)]);
});

cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var self__ = this;
var coll__$1 = this;
if(((i >= (0))) && ((i < (self__.end - self__.off)))){
return (self__.arr[(self__.off + i)]);
} else {
return not_found;
}
});

cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.end - self__.off);
});

cljs.core.ArrayChunk.cljs$lang$type = true;

cljs.core.ArrayChunk.cljs$lang$ctorStr = "cljs.core/ArrayChunk";

cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/ArrayChunk");
});

cljs.core.__GT_ArrayChunk = (function __GT_ArrayChunk(arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});

cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return (new cljs.core.ArrayChunk(arr,(0),arr.length));
});
var array_chunk__2 = (function (arr,off){
return (new cljs.core.ArrayChunk(arr,off,arr.length));
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_chunk.cljs$core$IFn$_invoke$arity$1 = array_chunk__1;
array_chunk.cljs$core$IFn$_invoke$arity$2 = array_chunk__2;
array_chunk.cljs$core$IFn$_invoke$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850732;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ChunkedCons.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ChunkedCons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core._count(self__.chunk) > (1))){
return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else {
var more__$1 = cljs.core._seq(self__.more);
if((more__$1 == null)){
return null;
} else {
return more__$1;
}
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.chunk,(0));
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core._count(self__.chunk) > (1))){
return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else {
if((self__.more == null)){
return cljs.core.List.EMPTY;
} else {
return self__.more;
}
}
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.chunk;
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.more == null)){
return cljs.core.List.EMPTY;
} else {
return self__.more;
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});

cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(o,this$__$1);
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.more == null)){
return null;
} else {
return self__.more;
}
});

cljs.core.ChunkedCons.cljs$lang$type = true;

cljs.core.ChunkedCons.cljs$lang$ctorStr = "cljs.core/ChunkedCons";

cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/ChunkedCons");
});

cljs.core.__GT_ChunkedCons = (function __GT_ChunkedCons(chunk,more,meta,__hash){
return (new cljs.core.ChunkedCons(chunk,more,meta,__hash));
});

(cljs.core.ChunkedCons.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count(chunk) === (0))){
return rest;
} else {
return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first(s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest(s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__11930 = s;
if(G__11930){
var bit__4277__auto__ = (G__11930.cljs$lang$protocol_mask$partition1$ & (1024));
if((bit__4277__auto__) || (G__11930.cljs$core$IChunkedNext$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._chunked_next(s);
} else {
return cljs.core.seq(cljs.core._chunked_rest(s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary = [];
var s__$1 = s;
while(true){
if(cljs.core.seq(s__$1)){
ary.push(cljs.core.first(s__$1));

var G__11931 = cljs.core.next(s__$1);
s__$1 = G__11931;
continue;
} else {
return ary;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret = (new Array(cljs.core.count(coll)));
var i_11932 = (0);
var xs_11933 = cljs.core.seq(coll);
while(true){
if(xs_11933){
(ret[i_11932] = cljs.core.to_array(cljs.core.first(xs_11933)));

var G__11934 = (i_11932 + (1));
var G__11935 = cljs.core.next(xs_11933);
i_11932 = G__11934;
xs_11933 = G__11935;
continue;
} else {
}
break;
}

return ret;
});
cljs.core.int_array = (function() {
var int_array = null;
var int_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return int_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var int_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__11938 = (i + (1));
var G__11939 = cljs.core.next(s__$1);
i = G__11938;
s__$1 = G__11939;
continue;
} else {
return a;
}
break;
}
} else {
var n__4490__auto___11940 = size;
var i_11941 = (0);
while(true){
if((i_11941 < n__4490__auto___11940)){
(a[i_11941] = init_val_or_seq);

var G__11942 = (i_11941 + (1));
i_11941 = G__11942;
continue;
} else {
}
break;
}

return a;
}
});
int_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return int_array__1.call(this,size);
case 2:
return int_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
int_array.cljs$core$IFn$_invoke$arity$1 = int_array__1;
int_array.cljs$core$IFn$_invoke$arity$2 = int_array__2;
return int_array;
})()
;
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return long_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__11945 = (i + (1));
var G__11946 = cljs.core.next(s__$1);
i = G__11945;
s__$1 = G__11946;
continue;
} else {
return a;
}
break;
}
} else {
var n__4490__auto___11947 = size;
var i_11948 = (0);
while(true){
if((i_11948 < n__4490__auto___11947)){
(a[i_11948] = init_val_or_seq);

var G__11949 = (i_11948 + (1));
i_11948 = G__11949;
continue;
} else {
}
break;
}

return a;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
long_array.cljs$core$IFn$_invoke$arity$1 = long_array__1;
long_array.cljs$core$IFn$_invoke$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return double_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__11952 = (i + (1));
var G__11953 = cljs.core.next(s__$1);
i = G__11952;
s__$1 = G__11953;
continue;
} else {
return a;
}
break;
}
} else {
var n__4490__auto___11954 = size;
var i_11955 = (0);
while(true){
if((i_11955 < n__4490__auto___11954)){
(a[i_11955] = init_val_or_seq);

var G__11956 = (i_11955 + (1));
i_11955 = G__11956;
continue;
} else {
}
break;
}

return a;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
double_array.cljs$core$IFn$_invoke$arity$1 = double_array__1;
double_array.cljs$core$IFn$_invoke$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return object_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__11959 = (i + (1));
var G__11960 = cljs.core.next(s__$1);
i = G__11959;
s__$1 = G__11960;
continue;
} else {
return a;
}
break;
}
} else {
var n__4490__auto___11961 = size;
var i_11962 = (0);
while(true){
if((i_11962 < n__4490__auto___11961)){
(a[i_11962] = init_val_or_seq);

var G__11963 = (i_11962 + (1));
i_11962 = G__11963;
continue;
} else {
}
break;
}

return a;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object_array.cljs$core$IFn$_invoke$arity$1 = object_array__1;
object_array.cljs$core$IFn$_invoke$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_(s)){
return cljs.core.count(s);
} else {
var s__$1 = s;
var i = n;
var sum = (0);
while(true){
if(((i > (0))) && (cljs.core.seq(s__$1))){
var G__11964 = cljs.core.next(s__$1);
var G__11965 = (i - (1));
var G__11966 = (sum + (1));
s__$1 = G__11964;
i = G__11965;
sum = G__11966;
continue;
} else {
return sum;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null)){
return null;
} else {
if((cljs.core.next(arglist) == null)){
return cljs.core.seq(cljs.core.first(arglist));
} else {
return cljs.core.cons(cljs.core.first(arglist),spread(cljs.core.next(arglist)));

}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,(function (){
return null;
}),null,null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,(function (){
return x;
}),null,null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.seq(x);
if(s){
if(cljs.core.chunked_seq_QMARK_(s)){
return cljs.core.chunk_cons(cljs.core.chunk_first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.chunk_rest(s),y));
} else {
return cljs.core.cons(cljs.core.first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s),y));
}
} else {
return y;
}
}),null,null));
});
var concat__3 = (function() { 
var G__11986__delegate = function (x,y,zs){
var cat = (function cat(xys,zs__$1){
return (new cljs.core.LazySeq(null,(function (){
var xys__$1 = cljs.core.seq(xys);
if(xys__$1){
if(cljs.core.chunked_seq_QMARK_(xys__$1)){
return cljs.core.chunk_cons(cljs.core.chunk_first(xys__$1),cat(cljs.core.chunk_rest(xys__$1),zs__$1));
} else {
return cljs.core.cons(cljs.core.first(xys__$1),cat(cljs.core.rest(xys__$1),zs__$1));
}
} else {
if(cljs.core.truth_(zs__$1)){
return cat(cljs.core.first(zs__$1),cljs.core.next(zs__$1));
} else {
return null;
}
}
}),null,null));
});
return cat(concat.cljs$core$IFn$_invoke$arity$2(x,y),zs);
};
var G__11986 = function (x,y,var_args){
var zs = null;
if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11986__delegate.call(this,x,y,zs);};
G__11986.cljs$lang$maxFixedArity = 2;
G__11986.cljs$lang$applyTo = (function (arglist__11987){
var x = cljs.core.first(arglist__11987);
arglist__11987 = cljs.core.next(arglist__11987);
var y = cljs.core.first(arglist__11987);
var zs = cljs.core.rest(arglist__11987);
return G__11986__delegate(x,y,zs);
});
G__11986.cljs$core$IFn$_invoke$arity$variadic = G__11986__delegate;
return G__11986;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$core$IFn$_invoke$arity$0 = concat__0;
concat.cljs$core$IFn$_invoke$arity$1 = concat__1;
concat.cljs$core$IFn$_invoke$arity$2 = concat__2;
concat.cljs$core$IFn$_invoke$arity$variadic = concat__3.cljs$core$IFn$_invoke$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq(args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons(a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons(a,cljs.core.cons(b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,args)));
});
var list_STAR___5 = (function() { 
var G__11988__delegate = function (a,b,c,d,more){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__11988 = function (a,b,c,d,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11988__delegate.call(this,a,b,c,d,more);};
G__11988.cljs$lang$maxFixedArity = 4;
G__11988.cljs$lang$applyTo = (function (arglist__11989){
var a = cljs.core.first(arglist__11989);
arglist__11989 = cljs.core.next(arglist__11989);
var b = cljs.core.first(arglist__11989);
arglist__11989 = cljs.core.next(arglist__11989);
var c = cljs.core.first(arglist__11989);
arglist__11989 = cljs.core.next(arglist__11989);
var d = cljs.core.first(arglist__11989);
var more = cljs.core.rest(arglist__11989);
return G__11988__delegate(a,b,c,d,more);
});
G__11988.cljs$core$IFn$_invoke$arity$variadic = G__11988__delegate;
return G__11988;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$core$IFn$_invoke$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$core$IFn$_invoke$arity$1 = list_STAR___1;
list_STAR_.cljs$core$IFn$_invoke$arity$2 = list_STAR___2;
list_STAR_.cljs$core$IFn$_invoke$arity$3 = list_STAR___3;
list_STAR_.cljs$core$IFn$_invoke$arity$4 = list_STAR___4;
list_STAR_.cljs$core$IFn$_invoke$arity$variadic = list_STAR___5.cljs$core$IFn$_invoke$arity$variadic;
return list_STAR_;
})()
;
/**
* Returns a new, transient version of the collection, in constant time.
*/
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient(coll);
});
/**
* Returns a new, persistent version of the transient collection, in
* constant time. The transient collection cannot be used after this
* call, any such use will throw an exception.
*/
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_(tcoll);
});
/**
* Adds x to the transient collection, and return coll. The 'addition'
* may happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj_BANG_ = (function() {
var conj_BANG_ = null;
var conj_BANG___0 = (function (){
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});
var conj_BANG___1 = (function (coll){
return coll;
});
var conj_BANG___2 = (function (tcoll,val){
return cljs.core._conj_BANG_(tcoll,val);
});
var conj_BANG___3 = (function() { 
var G__11990__delegate = function (tcoll,val,vals){
while(true){
var ntcoll = cljs.core._conj_BANG_(tcoll,val);
if(cljs.core.truth_(vals)){
var G__11991 = ntcoll;
var G__11992 = cljs.core.first(vals);
var G__11993 = cljs.core.next(vals);
tcoll = G__11991;
val = G__11992;
vals = G__11993;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__11990 = function (tcoll,val,var_args){
var vals = null;
if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11990__delegate.call(this,tcoll,val,vals);};
G__11990.cljs$lang$maxFixedArity = 2;
G__11990.cljs$lang$applyTo = (function (arglist__11994){
var tcoll = cljs.core.first(arglist__11994);
arglist__11994 = cljs.core.next(arglist__11994);
var val = cljs.core.first(arglist__11994);
var vals = cljs.core.rest(arglist__11994);
return G__11990__delegate(tcoll,val,vals);
});
G__11990.cljs$core$IFn$_invoke$arity$variadic = G__11990__delegate;
return G__11990;
})()
;
conj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 0:
return conj_BANG___0.call(this);
case 1:
return conj_BANG___1.call(this,tcoll);
case 2:
return conj_BANG___2.call(this,tcoll,val);
default:
return conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_BANG_.cljs$lang$maxFixedArity = 2;
conj_BANG_.cljs$lang$applyTo = conj_BANG___3.cljs$lang$applyTo;
conj_BANG_.cljs$core$IFn$_invoke$arity$0 = conj_BANG___0;
conj_BANG_.cljs$core$IFn$_invoke$arity$1 = conj_BANG___1;
conj_BANG_.cljs$core$IFn$_invoke$arity$2 = conj_BANG___2;
conj_BANG_.cljs$core$IFn$_invoke$arity$variadic = conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return conj_BANG_;
})()
;
/**
* When applied to a transient map, adds mapping of key(s) to
* val(s). When applied to a transient vector, sets the val at index.
* Note - index must be <= (count vector). Returns coll.
* @param {...*} var_args
*/
cljs.core.assoc_BANG_ = (function() {
var assoc_BANG_ = null;
var assoc_BANG___3 = (function (tcoll,key,val){
return cljs.core._assoc_BANG_(tcoll,key,val);
});
var assoc_BANG___4 = (function() { 
var G__11995__delegate = function (tcoll,key,val,kvs){
while(true){
var ntcoll = cljs.core._assoc_BANG_(tcoll,key,val);
if(cljs.core.truth_(kvs)){
var G__11996 = ntcoll;
var G__11997 = cljs.core.first(kvs);
var G__11998 = cljs.core.second(kvs);
var G__11999 = cljs.core.nnext(kvs);
tcoll = G__11996;
key = G__11997;
val = G__11998;
kvs = G__11999;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__11995 = function (tcoll,key,val,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11995__delegate.call(this,tcoll,key,val,kvs);};
G__11995.cljs$lang$maxFixedArity = 3;
G__11995.cljs$lang$applyTo = (function (arglist__12000){
var tcoll = cljs.core.first(arglist__12000);
arglist__12000 = cljs.core.next(arglist__12000);
var key = cljs.core.first(arglist__12000);
arglist__12000 = cljs.core.next(arglist__12000);
var val = cljs.core.first(arglist__12000);
var kvs = cljs.core.rest(arglist__12000);
return G__11995__delegate(tcoll,key,val,kvs);
});
G__11995.cljs$core$IFn$_invoke$arity$variadic = G__11995__delegate;
return G__11995;
})()
;
assoc_BANG_ = function(tcoll,key,val,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc_BANG___3.call(this,tcoll,key,val);
default:
return assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic(tcoll,key,val, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc_BANG_.cljs$lang$maxFixedArity = 3;
assoc_BANG_.cljs$lang$applyTo = assoc_BANG___4.cljs$lang$applyTo;
assoc_BANG_.cljs$core$IFn$_invoke$arity$3 = assoc_BANG___3;
assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return assoc_BANG_;
})()
;
/**
* Returns a transient map that doesn't contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc_BANG_ = (function() {
var dissoc_BANG_ = null;
var dissoc_BANG___2 = (function (tcoll,key){
return cljs.core._dissoc_BANG_(tcoll,key);
});
var dissoc_BANG___3 = (function() { 
var G__12001__delegate = function (tcoll,key,ks){
while(true){
var ntcoll = cljs.core._dissoc_BANG_(tcoll,key);
if(cljs.core.truth_(ks)){
var G__12002 = ntcoll;
var G__12003 = cljs.core.first(ks);
var G__12004 = cljs.core.next(ks);
tcoll = G__12002;
key = G__12003;
ks = G__12004;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__12001 = function (tcoll,key,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12001__delegate.call(this,tcoll,key,ks);};
G__12001.cljs$lang$maxFixedArity = 2;
G__12001.cljs$lang$applyTo = (function (arglist__12005){
var tcoll = cljs.core.first(arglist__12005);
arglist__12005 = cljs.core.next(arglist__12005);
var key = cljs.core.first(arglist__12005);
var ks = cljs.core.rest(arglist__12005);
return G__12001__delegate(tcoll,key,ks);
});
G__12001.cljs$core$IFn$_invoke$arity$variadic = G__12001__delegate;
return G__12001;
})()
;
dissoc_BANG_ = function(tcoll,key,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return dissoc_BANG___2.call(this,tcoll,key);
default:
return dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,key, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc_BANG_.cljs$lang$maxFixedArity = 2;
dissoc_BANG_.cljs$lang$applyTo = dissoc_BANG___3.cljs$lang$applyTo;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$2 = dissoc_BANG___2;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc_BANG_;
})()
;
/**
* Removes the last item from a transient vector. If
* the collection is empty, throws an exception. Returns coll
*/
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_(tcoll);
});
/**
* disj[oin]. Returns a transient set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj_BANG_ = (function() {
var disj_BANG_ = null;
var disj_BANG___2 = (function (tcoll,val){
return cljs.core._disjoin_BANG_(tcoll,val);
});
var disj_BANG___3 = (function() { 
var G__12006__delegate = function (tcoll,val,vals){
while(true){
var ntcoll = cljs.core._disjoin_BANG_(tcoll,val);
if(cljs.core.truth_(vals)){
var G__12007 = ntcoll;
var G__12008 = cljs.core.first(vals);
var G__12009 = cljs.core.next(vals);
tcoll = G__12007;
val = G__12008;
vals = G__12009;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__12006 = function (tcoll,val,var_args){
var vals = null;
if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12006__delegate.call(this,tcoll,val,vals);};
G__12006.cljs$lang$maxFixedArity = 2;
G__12006.cljs$lang$applyTo = (function (arglist__12010){
var tcoll = cljs.core.first(arglist__12010);
arglist__12010 = cljs.core.next(arglist__12010);
var val = cljs.core.first(arglist__12010);
var vals = cljs.core.rest(arglist__12010);
return G__12006__delegate(tcoll,val,vals);
});
G__12006.cljs$core$IFn$_invoke$arity$variadic = G__12006__delegate;
return G__12006;
})()
;
disj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 2:
return disj_BANG___2.call(this,tcoll,val);
default:
return disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj_BANG_.cljs$lang$maxFixedArity = 2;
disj_BANG_.cljs$lang$applyTo = disj_BANG___3.cljs$lang$applyTo;
disj_BANG_.cljs$core$IFn$_invoke$arity$2 = disj_BANG___2;
disj_BANG_.cljs$core$IFn$_invoke$arity$variadic = disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return disj_BANG_;
})()
;

cljs.core.apply_to = (function apply_to(f,argc,args){
var args__$1 = cljs.core.seq(args);
if((argc === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var a4534 = cljs.core._first(args__$1);
var args__$2 = cljs.core._rest(args__$1);
if((argc === (1))){
if(f.cljs$core$IFn$_invoke$arity$1){
return f.cljs$core$IFn$_invoke$arity$1(a4534);
} else {
var G__12221 = a4534;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12221) : f.call(null,G__12221));
}
} else {
var b4535 = cljs.core._first(args__$2);
var args__$3 = cljs.core._rest(args__$2);
if((argc === (2))){
if(f.cljs$core$IFn$_invoke$arity$2){
return f.cljs$core$IFn$_invoke$arity$2(a4534,b4535);
} else {
var G__12222 = a4534;
var G__12223 = b4535;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12222,G__12223) : f.call(null,G__12222,G__12223));
}
} else {
var c4536 = cljs.core._first(args__$3);
var args__$4 = cljs.core._rest(args__$3);
if((argc === (3))){
if(f.cljs$core$IFn$_invoke$arity$3){
return f.cljs$core$IFn$_invoke$arity$3(a4534,b4535,c4536);
} else {
var G__12224 = a4534;
var G__12225 = b4535;
var G__12226 = c4536;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12224,G__12225,G__12226) : f.call(null,G__12224,G__12225,G__12226));
}
} else {
var d4537 = cljs.core._first(args__$4);
var args__$5 = cljs.core._rest(args__$4);
if((argc === (4))){
if(f.cljs$core$IFn$_invoke$arity$4){
return f.cljs$core$IFn$_invoke$arity$4(a4534,b4535,c4536,d4537);
} else {
var G__12227 = a4534;
var G__12228 = b4535;
var G__12229 = c4536;
var G__12230 = d4537;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__12227,G__12228,G__12229,G__12230) : f.call(null,G__12227,G__12228,G__12229,G__12230));
}
} else {
var e4538 = cljs.core._first(args__$5);
var args__$6 = cljs.core._rest(args__$5);
if((argc === (5))){
if(f.cljs$core$IFn$_invoke$arity$5){
return f.cljs$core$IFn$_invoke$arity$5(a4534,b4535,c4536,d4537,e4538);
} else {
var G__12231 = a4534;
var G__12232 = b4535;
var G__12233 = c4536;
var G__12234 = d4537;
var G__12235 = e4538;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__12231,G__12232,G__12233,G__12234,G__12235) : f.call(null,G__12231,G__12232,G__12233,G__12234,G__12235));
}
} else {
var f4539 = cljs.core._first(args__$6);
var args__$7 = cljs.core._rest(args__$6);
if((argc === (6))){
if(f.cljs$core$IFn$_invoke$arity$6){
return f.cljs$core$IFn$_invoke$arity$6(a4534,b4535,c4536,d4537,e4538,f4539);
} else {
var G__12236 = a4534;
var G__12237 = b4535;
var G__12238 = c4536;
var G__12239 = d4537;
var G__12240 = e4538;
var G__12241 = f4539;
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__12236,G__12237,G__12238,G__12239,G__12240,G__12241) : f.call(null,G__12236,G__12237,G__12238,G__12239,G__12240,G__12241));
}
} else {
var g4540 = cljs.core._first(args__$7);
var args__$8 = cljs.core._rest(args__$7);
if((argc === (7))){
if(f.cljs$core$IFn$_invoke$arity$7){
return f.cljs$core$IFn$_invoke$arity$7(a4534,b4535,c4536,d4537,e4538,f4539,g4540);
} else {
var G__12242 = a4534;
var G__12243 = b4535;
var G__12244 = c4536;
var G__12245 = d4537;
var G__12246 = e4538;
var G__12247 = f4539;
var G__12248 = g4540;
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__12242,G__12243,G__12244,G__12245,G__12246,G__12247,G__12248) : f.call(null,G__12242,G__12243,G__12244,G__12245,G__12246,G__12247,G__12248));
}
} else {
var h4541 = cljs.core._first(args__$8);
var args__$9 = cljs.core._rest(args__$8);
if((argc === (8))){
if(f.cljs$core$IFn$_invoke$arity$8){
return f.cljs$core$IFn$_invoke$arity$8(a4534,b4535,c4536,d4537,e4538,f4539,g4540,h4541);
} else {
var G__12249 = a4534;
var G__12250 = b4535;
var G__12251 = c4536;
var G__12252 = d4537;
var G__12253 = e4538;
var G__12254 = f4539;
var G__12255 = g4540;
var G__12256 = h4541;
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__12249,G__12250,G__12251,G__12252,G__12253,G__12254,G__12255,G__12256) : f.call(null,G__12249,G__12250,G__12251,G__12252,G__12253,G__12254,G__12255,G__12256));
}
} else {
var i4542 = cljs.core._first(args__$9);
var args__$10 = cljs.core._rest(args__$9);
if((argc === (9))){
if(f.cljs$core$IFn$_invoke$arity$9){
return f.cljs$core$IFn$_invoke$arity$9(a4534,b4535,c4536,d4537,e4538,f4539,g4540,h4541,i4542);
} else {
var G__12257 = a4534;
var G__12258 = b4535;
var G__12259 = c4536;
var G__12260 = d4537;
var G__12261 = e4538;
var G__12262 = f4539;
var G__12263 = g4540;
var G__12264 = h4541;
var G__12265 = i4542;
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__12257,G__12258,G__12259,G__12260,G__12261,G__12262,G__12263,G__12264,G__12265) : f.call(null,G__12257,G__12258,G__12259,G__12260,G__12261,G__12262,G__12263,G__12264,G__12265));
}
} else {
var j4543 = cljs.core._first(args__$10);
var args__$11 = cljs.core._rest(args__$10);
if((argc === (10))){
if(f.cljs$core$IFn$_invoke$arity$10){
return f.cljs$core$IFn$_invoke$arity$10(a4534,b4535,c4536,d4537,e4538,f4539,g4540,h4541,i4542,j4543);
} else {
var G__12266 = a4534;
var G__12267 = b4535;
var G__12268 = c4536;
var G__12269 = d4537;
var G__12270 = e4538;
var G__12271 = f4539;
var G__12272 = g4540;
var G__12273 = h4541;
var G__12274 = i4542;
var G__12275 = j4543;
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__12266,G__12267,G__12268,G__12269,G__12270,G__12271,G__12272,G__12273,G__12274,G__12275) : f.call(null,G__12266,G__12267,G__12268,G__12269,G__12270,G__12271,G__12272,G__12273,G__12274,G__12275));
}
} else {
var k4544 = cljs.core._first(args__$11);
var args__$12 = cljs.core._rest(args__$11);
if((argc === (11))){
if(f.cljs$core$IFn$_invoke$arity$11){
return f.cljs$core$IFn$_invoke$arity$11(a4534,b4535,c4536,d4537,e4538,f4539,g4540,h4541,i4542,j4543,k4544);
} else {
var G__12276 = a4534;
var G__12277 = b4535;
var G__12278 = c4536;
var G__12279 = d4537;
var G__12280 = e4538;
var G__12281 = f4539;
var G__12282 = g4540;
var G__12283 = h4541;
var G__12284 = i4542;
var G__12285 = j4543;
var G__12286 = k4544;
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__12276,G__12277,G__12278,G__12279,G__12280,G__12281,G__12282,G__12283,G__12284,G__12285,G__12286) : f.call(null,G__12276,G__12277,G__12278,G__12279,G__12280,G__12281,G__12282,G__12283,G__12284,G__12285,G__12286));
}
} else {
var l4545 = cljs.core._first(args__$12);
var args__$13 = cljs.core._rest(args__$12);
if((argc === (12))){
if(f.cljs$core$IFn$_invoke$arity$12){
return f.cljs$core$IFn$_invoke$arity$12(a4534,b4535,c4536,d4537,e4538,f4539,g4540,h4541,i4542,j4543,k4544,l4545);
} else {
var G__12287 = a4534;
var G__12288 = b4535;
var G__12289 = c4536;
var G__12290 = d4537;
var G__12291 = e4538;
var G__12292 = f4539;
var G__12293 = g4540;
var G__12294 = h4541;
var G__12295 = i4542;
var G__12296 = j4543;
var G__12297 = k4544;
var G__12298 = l4545;
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__12287,G__12288,G__12289,G__12290,G__12291,G__12292,G__12293,G__12294,G__12295,G__12296,G__12297,G__12298) : f.call(null,G__12287,G__12288,G__12289,G__12290,G__12291,G__12292,G__12293,G__12294,G__12295,G__12296,G__12297,G__12298));
}
} else {
var m4546 = cljs.core._first(args__$13);
var args__$14 = cljs.core._rest(args__$13);
if((argc === (13))){
if(f.cljs$core$IFn$_invoke$arity$13){
return f.cljs$core$IFn$_invoke$arity$13(a4534,b4535,c4536,d4537,e4538,f4539,g4540,h4541,i4542,j4543,k4544,l4545,m4546);
} else {
var G__12299 = a4534;
var G__12300 = b4535;
var G__12301 = c4536;
var G__12302 = d4537;
var G__12303 = e4538;
var G__12304 = f4539;
var G__12305 = g4540;
var G__12306 = h4541;
var G__12307 = i4542;
var G__12308 = j4543;
var G__12309 = k4544;
var G__12310 = l4545;
var G__12311 = m4546;
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__12299,G__12300,G__12301,G__12302,G__12303,G__12304,G__12305,G__12306,G__12307,G__12308,G__12309,G__12310,G__12311) : f.call(null,G__12299,G__12300,G__12301,G__12302,G__12303,G__12304,G__12305,G__12306,G__12307,G__12308,G__12309,G__12310,G__12311));
}
} else {
var n4547 = cljs.core._first(args__$14);
var args__$15 = cljs.core._rest(args__$14);
if((argc === (14))){
if(f.cljs$core$IFn$_invoke$arity$14){
return f.cljs$core$IFn$_invoke$arity$14(a4534,b4535,c4536,d4537,e4538,f4539,g4540,h4541,i4542,j4543,k4544,l4545,m4546,n4547);
} else {
var G__12312 = a4534;
var G__12313 = b4535;
var G__12314 = c4536;
var G__12315 = d4537;
var G__12316 = e4538;
var G__12317 = f4539;
var G__12318 = g4540;
var G__12319 = h4541;
var G__12320 = i4542;
var G__12321 = j4543;
var G__12322 = k4544;
var G__12323 = l4545;
var G__12324 = m4546;
var G__12325 = n4547;
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__12312,G__12313,G__12314,G__12315,G__12316,G__12317,G__12318,G__12319,G__12320,G__12321,G__12322,G__12323,G__12324,G__12325) : f.call(null,G__12312,G__12313,G__12314,G__12315,G__12316,G__12317,G__12318,G__12319,G__12320,G__12321,G__12322,G__12323,G__12324,G__12325));
}
} else {
var o4548 = cljs.core._first(args__$15);
var args__$16 = cljs.core._rest(args__$15);
if((argc === (15))){
if(f.cljs$core$IFn$_invoke$arity$15){
return f.cljs$core$IFn$_invoke$arity$15(a4534,b4535,c4536,d4537,e4538,f4539,g4540,h4541,i4542,j4543,k4544,l4545,m4546,n4547,o4548);
} else {
var G__12326 = a4534;
var G__12327 = b4535;
var G__12328 = c4536;
var G__12329 = d4537;
var G__12330 = e4538;
var G__12331 = f4539;
var G__12332 = g4540;
var G__12333 = h4541;
var G__12334 = i4542;
var G__12335 = j4543;
var G__12336 = k4544;
var G__12337 = l4545;
var G__12338 = m4546;
var G__12339 = n4547;
var G__12340 = o4548;
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__12326,G__12327,G__12328,G__12329,G__12330,G__12331,G__12332,G__12333,G__12334,G__12335,G__12336,G__12337,G__12338,G__12339,G__12340) : f.call(null,G__12326,G__12327,G__12328,G__12329,G__12330,G__12331,G__12332,G__12333,G__12334,G__12335,G__12336,G__12337,G__12338,G__12339,G__12340));
}
} else {
var p4549 = cljs.core._first(args__$16);
var args__$17 = cljs.core._rest(args__$16);
if((argc === (16))){
if(f.cljs$core$IFn$_invoke$arity$16){
return f.cljs$core$IFn$_invoke$arity$16(a4534,b4535,c4536,d4537,e4538,f4539,g4540,h4541,i4542,j4543,k4544,l4545,m4546,n4547,o4548,p4549);
} else {
var G__12341 = a4534;
var G__12342 = b4535;
var G__12343 = c4536;
var G__12344 = d4537;
var G__12345 = e4538;
var G__12346 = f4539;
var G__12347 = g4540;
var G__12348 = h4541;
var G__12349 = i4542;
var G__12350 = j4543;
var G__12351 = k4544;
var G__12352 = l4545;
var G__12353 = m4546;
var G__12354 = n4547;
var G__12355 = o4548;
var G__12356 = p4549;
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__12341,G__12342,G__12343,G__12344,G__12345,G__12346,G__12347,G__12348,G__12349,G__12350,G__12351,G__12352,G__12353,G__12354,G__12355,G__12356) : f.call(null,G__12341,G__12342,G__12343,G__12344,G__12345,G__12346,G__12347,G__12348,G__12349,G__12350,G__12351,G__12352,G__12353,G__12354,G__12355,G__12356));
}
} else {
var q4550 = cljs.core._first(args__$17);
var args__$18 = cljs.core._rest(args__$17);
if((argc === (17))){
if(f.cljs$core$IFn$_invoke$arity$17){
return f.cljs$core$IFn$_invoke$arity$17(a4534,b4535,c4536,d4537,e4538,f4539,g4540,h4541,i4542,j4543,k4544,l4545,m4546,n4547,o4548,p4549,q4550);
} else {
var G__12357 = a4534;
var G__12358 = b4535;
var G__12359 = c4536;
var G__12360 = d4537;
var G__12361 = e4538;
var G__12362 = f4539;
var G__12363 = g4540;
var G__12364 = h4541;
var G__12365 = i4542;
var G__12366 = j4543;
var G__12367 = k4544;
var G__12368 = l4545;
var G__12369 = m4546;
var G__12370 = n4547;
var G__12371 = o4548;
var G__12372 = p4549;
var G__12373 = q4550;
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__12357,G__12358,G__12359,G__12360,G__12361,G__12362,G__12363,G__12364,G__12365,G__12366,G__12367,G__12368,G__12369,G__12370,G__12371,G__12372,G__12373) : f.call(null,G__12357,G__12358,G__12359,G__12360,G__12361,G__12362,G__12363,G__12364,G__12365,G__12366,G__12367,G__12368,G__12369,G__12370,G__12371,G__12372,G__12373));
}
} else {
var r4551 = cljs.core._first(args__$18);
var args__$19 = cljs.core._rest(args__$18);
if((argc === (18))){
if(f.cljs$core$IFn$_invoke$arity$18){
return f.cljs$core$IFn$_invoke$arity$18(a4534,b4535,c4536,d4537,e4538,f4539,g4540,h4541,i4542,j4543,k4544,l4545,m4546,n4547,o4548,p4549,q4550,r4551);
} else {
var G__12374 = a4534;
var G__12375 = b4535;
var G__12376 = c4536;
var G__12377 = d4537;
var G__12378 = e4538;
var G__12379 = f4539;
var G__12380 = g4540;
var G__12381 = h4541;
var G__12382 = i4542;
var G__12383 = j4543;
var G__12384 = k4544;
var G__12385 = l4545;
var G__12386 = m4546;
var G__12387 = n4547;
var G__12388 = o4548;
var G__12389 = p4549;
var G__12390 = q4550;
var G__12391 = r4551;
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__12374,G__12375,G__12376,G__12377,G__12378,G__12379,G__12380,G__12381,G__12382,G__12383,G__12384,G__12385,G__12386,G__12387,G__12388,G__12389,G__12390,G__12391) : f.call(null,G__12374,G__12375,G__12376,G__12377,G__12378,G__12379,G__12380,G__12381,G__12382,G__12383,G__12384,G__12385,G__12386,G__12387,G__12388,G__12389,G__12390,G__12391));
}
} else {
var s4552 = cljs.core._first(args__$19);
var args__$20 = cljs.core._rest(args__$19);
if((argc === (19))){
if(f.cljs$core$IFn$_invoke$arity$19){
return f.cljs$core$IFn$_invoke$arity$19(a4534,b4535,c4536,d4537,e4538,f4539,g4540,h4541,i4542,j4543,k4544,l4545,m4546,n4547,o4548,p4549,q4550,r4551,s4552);
} else {
var G__12392 = a4534;
var G__12393 = b4535;
var G__12394 = c4536;
var G__12395 = d4537;
var G__12396 = e4538;
var G__12397 = f4539;
var G__12398 = g4540;
var G__12399 = h4541;
var G__12400 = i4542;
var G__12401 = j4543;
var G__12402 = k4544;
var G__12403 = l4545;
var G__12404 = m4546;
var G__12405 = n4547;
var G__12406 = o4548;
var G__12407 = p4549;
var G__12408 = q4550;
var G__12409 = r4551;
var G__12410 = s4552;
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__12392,G__12393,G__12394,G__12395,G__12396,G__12397,G__12398,G__12399,G__12400,G__12401,G__12402,G__12403,G__12404,G__12405,G__12406,G__12407,G__12408,G__12409,G__12410) : f.call(null,G__12392,G__12393,G__12394,G__12395,G__12396,G__12397,G__12398,G__12399,G__12400,G__12401,G__12402,G__12403,G__12404,G__12405,G__12406,G__12407,G__12408,G__12409,G__12410));
}
} else {
var t4553 = cljs.core._first(args__$20);
var args__$21 = cljs.core._rest(args__$20);
if((argc === (20))){
if(f.cljs$core$IFn$_invoke$arity$20){
return f.cljs$core$IFn$_invoke$arity$20(a4534,b4535,c4536,d4537,e4538,f4539,g4540,h4541,i4542,j4543,k4544,l4545,m4546,n4547,o4548,p4549,q4550,r4551,s4552,t4553);
} else {
var G__12411 = a4534;
var G__12412 = b4535;
var G__12413 = c4536;
var G__12414 = d4537;
var G__12415 = e4538;
var G__12416 = f4539;
var G__12417 = g4540;
var G__12418 = h4541;
var G__12419 = i4542;
var G__12420 = j4543;
var G__12421 = k4544;
var G__12422 = l4545;
var G__12423 = m4546;
var G__12424 = n4547;
var G__12425 = o4548;
var G__12426 = p4549;
var G__12427 = q4550;
var G__12428 = r4551;
var G__12429 = s4552;
var G__12430 = t4553;
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__12411,G__12412,G__12413,G__12414,G__12415,G__12416,G__12417,G__12418,G__12419,G__12420,G__12421,G__12422,G__12423,G__12424,G__12425,G__12426,G__12427,G__12428,G__12429,G__12430) : f.call(null,G__12411,G__12412,G__12413,G__12414,G__12415,G__12416,G__12417,G__12418,G__12419,G__12420,G__12421,G__12422,G__12423,G__12424,G__12425,G__12426,G__12427,G__12428,G__12429,G__12430));
}
} else {
throw (new Error("Only up to 20 arguments supported on functions"));
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
});

/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(args,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,args);
} else {
return f.cljs$lang$applyTo(args);
}
} else {
return f.apply(f,cljs.core.to_array(args));
}
});
var apply__3 = (function (f,x,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(x,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__4 = (function (f,x,y,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(x,y,z,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__6 = (function() { 
var G__12431__delegate = function (f,a,b,c,d,args){
var arglist = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
};
var G__12431 = function (f,a,b,c,d,var_args){
var args = null;
if (arguments.length > 5) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12431__delegate.call(this,f,a,b,c,d,args);};
G__12431.cljs$lang$maxFixedArity = 5;
G__12431.cljs$lang$applyTo = (function (arglist__12432){
var f = cljs.core.first(arglist__12432);
arglist__12432 = cljs.core.next(arglist__12432);
var a = cljs.core.first(arglist__12432);
arglist__12432 = cljs.core.next(arglist__12432);
var b = cljs.core.first(arglist__12432);
arglist__12432 = cljs.core.next(arglist__12432);
var c = cljs.core.first(arglist__12432);
arglist__12432 = cljs.core.next(arglist__12432);
var d = cljs.core.first(arglist__12432);
var args = cljs.core.rest(arglist__12432);
return G__12431__delegate(f,a,b,c,d,args);
});
G__12431.cljs$core$IFn$_invoke$arity$variadic = G__12431__delegate;
return G__12431;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$core$IFn$_invoke$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$core$IFn$_invoke$arity$2 = apply__2;
apply.cljs$core$IFn$_invoke$arity$3 = apply__3;
apply.cljs$core$IFn$_invoke$arity$4 = apply__4;
apply.cljs$core$IFn$_invoke$arity$5 = apply__5;
apply.cljs$core$IFn$_invoke$arity$variadic = apply__6.cljs$core$IFn$_invoke$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() {
var vary_meta = null;
var vary_meta__2 = (function (obj,f){
return cljs.core.with_meta(obj,(function (){var G__12448 = cljs.core.meta(obj);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12448) : f.call(null,G__12448));
})());
});
var vary_meta__3 = (function (obj,f,a){
return cljs.core.with_meta(obj,(function (){var G__12449 = cljs.core.meta(obj);
var G__12450 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12449,G__12450) : f.call(null,G__12449,G__12450));
})());
});
var vary_meta__4 = (function (obj,f,a,b){
return cljs.core.with_meta(obj,(function (){var G__12451 = cljs.core.meta(obj);
var G__12452 = a;
var G__12453 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12451,G__12452,G__12453) : f.call(null,G__12451,G__12452,G__12453));
})());
});
var vary_meta__5 = (function (obj,f,a,b,c){
return cljs.core.with_meta(obj,(function (){var G__12454 = cljs.core.meta(obj);
var G__12455 = a;
var G__12456 = b;
var G__12457 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__12454,G__12455,G__12456,G__12457) : f.call(null,G__12454,G__12455,G__12456,G__12457));
})());
});
var vary_meta__6 = (function (obj,f,a,b,c,d){
return cljs.core.with_meta(obj,(function (){var G__12458 = cljs.core.meta(obj);
var G__12459 = a;
var G__12460 = b;
var G__12461 = c;
var G__12462 = d;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__12458,G__12459,G__12460,G__12461,G__12462) : f.call(null,G__12458,G__12459,G__12460,G__12461,G__12462));
})());
});
var vary_meta__7 = (function() { 
var G__12463__delegate = function (obj,f,a,b,c,d,args){
return cljs.core.with_meta(obj,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.meta(obj),a,b,c,cljs.core.array_seq([d,args], 0)));
};
var G__12463 = function (obj,f,a,b,c,d,var_args){
var args = null;
if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__12463__delegate.call(this,obj,f,a,b,c,d,args);};
G__12463.cljs$lang$maxFixedArity = 6;
G__12463.cljs$lang$applyTo = (function (arglist__12464){
var obj = cljs.core.first(arglist__12464);
arglist__12464 = cljs.core.next(arglist__12464);
var f = cljs.core.first(arglist__12464);
arglist__12464 = cljs.core.next(arglist__12464);
var a = cljs.core.first(arglist__12464);
arglist__12464 = cljs.core.next(arglist__12464);
var b = cljs.core.first(arglist__12464);
arglist__12464 = cljs.core.next(arglist__12464);
var c = cljs.core.first(arglist__12464);
arglist__12464 = cljs.core.next(arglist__12464);
var d = cljs.core.first(arglist__12464);
var args = cljs.core.rest(arglist__12464);
return G__12463__delegate(obj,f,a,b,c,d,args);
});
G__12463.cljs$core$IFn$_invoke$arity$variadic = G__12463__delegate;
return G__12463;
})()
;
vary_meta = function(obj,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return vary_meta__2.call(this,obj,f);
case 3:
return vary_meta__3.call(this,obj,f,a);
case 4:
return vary_meta__4.call(this,obj,f,a,b);
case 5:
return vary_meta__5.call(this,obj,f,a,b,c);
case 6:
return vary_meta__6.call(this,obj,f,a,b,c,d);
default:
return vary_meta__7.cljs$core$IFn$_invoke$arity$variadic(obj,f,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vary_meta.cljs$lang$maxFixedArity = 6;
vary_meta.cljs$lang$applyTo = vary_meta__7.cljs$lang$applyTo;
vary_meta.cljs$core$IFn$_invoke$arity$2 = vary_meta__2;
vary_meta.cljs$core$IFn$_invoke$arity$3 = vary_meta__3;
vary_meta.cljs$core$IFn$_invoke$arity$4 = vary_meta__4;
vary_meta.cljs$core$IFn$_invoke$arity$5 = vary_meta__5;
vary_meta.cljs$core$IFn$_invoke$arity$6 = vary_meta__6;
vary_meta.cljs$core$IFn$_invoke$arity$variadic = vary_meta__7.cljs$core$IFn$_invoke$arity$variadic;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var not_EQ___3 = (function() { 
var G__12465__delegate = function (x,y,more){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_,x,y,more));
};
var G__12465 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12465__delegate.call(this,x,y,more);};
G__12465.cljs$lang$maxFixedArity = 2;
G__12465.cljs$lang$applyTo = (function (arglist__12466){
var x = cljs.core.first(arglist__12466);
arglist__12466 = cljs.core.next(arglist__12466);
var y = cljs.core.first(arglist__12466);
var more = cljs.core.rest(arglist__12466);
return G__12465__delegate(x,y,more);
});
G__12465.cljs$core$IFn$_invoke$arity$variadic = G__12465__delegate;
return G__12465;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$core$IFn$_invoke$arity$1 = not_EQ___1;
not_EQ_.cljs$core$IFn$_invoke$arity$2 = not_EQ___2;
not_EQ_.cljs$core$IFn$_invoke$arity$variadic = not_EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq(coll)){
return coll;
} else {
return null;
}
});
cljs.core.nil_iter = (function nil_iter(){
if(typeof cljs.core.t12470 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.t12470 = (function (nil_iter,meta12471){
this.nil_iter = nil_iter;
this.meta12471 = meta12471;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.t12470.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return false;
});

cljs.core.t12470.prototype.next = (function (){
var self__ = this;
var _ = this;
return (new Error("No such element"));
});

cljs.core.t12470.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.t12470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12472){
var self__ = this;
var _12472__$1 = this;
return self__.meta12471;
});

cljs.core.t12470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12472,meta12471__$1){
var self__ = this;
var _12472__$1 = this;
return (new cljs.core.t12470(self__.nil_iter,meta12471__$1));
});

cljs.core.t12470.cljs$lang$type = true;

cljs.core.t12470.cljs$lang$ctorStr = "cljs.core/t12470";

cljs.core.t12470.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/t12470");
});

cljs.core.__GT_t12470 = (function __GT_t12470(nil_iter__$1,meta12471){
return (new cljs.core.t12470(nil_iter__$1,meta12471));
});

}

return (new cljs.core.t12470(nil_iter,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,54,cljs.core.constant$keyword$9,2986,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,2982,cljs.core.constant$keyword$12,"/repos/infierno/resources/public/js/out/cljs/core.cljs"], null)));
});

/**
* @constructor
*/
cljs.core.StringIter = (function (s,i){
this.s = s;
this.i = i;
})
cljs.core.StringIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.s.length);
});

cljs.core.StringIter.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = self__.s.charAt(self__.i);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.StringIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.StringIter.cljs$lang$type = true;

cljs.core.StringIter.cljs$lang$ctorStr = "cljs.core/StringIter";

cljs.core.StringIter.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/StringIter");
});

cljs.core.__GT_StringIter = (function __GT_StringIter(s,i){
return (new cljs.core.StringIter(s,i));
});

cljs.core.string_iter = (function string_iter(x){
return (new cljs.core.StringIter(x,(0)));
});

/**
* @constructor
*/
cljs.core.ArrayIter = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.ArrayIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.arr.length);
});

cljs.core.ArrayIter.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = (self__.arr[self__.i]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.ArrayIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.ArrayIter.cljs$lang$type = true;

cljs.core.ArrayIter.cljs$lang$ctorStr = "cljs.core/ArrayIter";

cljs.core.ArrayIter.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/ArrayIter");
});

cljs.core.__GT_ArrayIter = (function __GT_ArrayIter(arr,i){
return (new cljs.core.ArrayIter(arr,i));
});

cljs.core.array_iter = (function array_iter(x){
return (new cljs.core.ArrayIter(x,(0)));
});
cljs.core.INIT = {};
cljs.core.START = {};

/**
* @constructor
*/
cljs.core.SeqIter = (function (_seq,_next){
this._seq = _seq;
this._next = _next;
})
cljs.core.SeqIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
if((self__._seq === cljs.core.INIT)){
self__._seq = cljs.core.START;

self__._next = cljs.core.seq(self__._next);
} else {
if((self__._seq === self__._next)){
self__._next = cljs.core.next(self__._seq);
} else {
}
}

return !((self__._next == null));
});

cljs.core.SeqIter.prototype.next = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.not(this$.hasNext())){
throw (new Error("No such element"));
} else {
self__._seq = self__._next;

return cljs.core.first(self__._next);
}
});

cljs.core.SeqIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.SeqIter.cljs$lang$type = true;

cljs.core.SeqIter.cljs$lang$ctorStr = "cljs.core/SeqIter";

cljs.core.SeqIter.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/SeqIter");
});

cljs.core.__GT_SeqIter = (function __GT_SeqIter(_seq,_next){
return (new cljs.core.SeqIter(_seq,_next));
});

cljs.core.seq_iter = (function seq_iter(coll){
return (new cljs.core.SeqIter(cljs.core.INIT,coll));
});
cljs.core.iter = (function iter(coll){
if((coll == null)){
return cljs.core.nil_iter();
} else {
if(typeof coll === 'string'){
return cljs.core.string_iter(coll);
} else {
if(coll instanceof Array){
return cljs.core.array_iter(coll);
} else {
if(cljs.core.iterable_QMARK_(coll)){
return cljs.core._iterator(coll);
} else {
if(cljs.core.seqable_QMARK_(coll)){
return cljs.core.seq_iter(coll);
} else {
throw (new Error([cljs.core.str("Cannot create iterator from "),cljs.core.str(coll)].join('')));

}
}
}
}
}
});
cljs.core.lazy_transformer = (function lazy_transformer(stepper){
return (new cljs.core.LazyTransformer(stepper,null,null,null));
});

/**
* @constructor
*/
cljs.core.Stepper = (function (xform,iter){
this.xform = xform;
this.iter = iter;
})
cljs.core.Stepper.prototype.step = (function (lt){
var self__ = this;
var this$ = this;
while(true){
if(cljs.core.truth_((function (){var and__3596__auto__ = !((lt.stepper == null));
if(and__3596__auto__){
return self__.iter.hasNext();
} else {
return and__3596__auto__;
}
})())){
if(cljs.core.reduced_QMARK_((function (){var G__12473 = lt;
var G__12474 = self__.iter.next();
return (self__.xform.cljs$core$IFn$_invoke$arity$2 ? self__.xform.cljs$core$IFn$_invoke$arity$2(G__12473,G__12474) : self__.xform.call(null,G__12473,G__12474));
})())){
if((lt.rest == null)){
} else {
lt.rest.stepper = null;
}
} else {
continue;
}
} else {
}
break;
}

if((lt.stepper == null)){
return null;
} else {
var G__12475 = lt;
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__12475) : self__.xform.call(null,G__12475));
}
});

cljs.core.Stepper.cljs$lang$type = true;

cljs.core.Stepper.cljs$lang$ctorStr = "cljs.core/Stepper";

cljs.core.Stepper.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/Stepper");
});

cljs.core.__GT_Stepper = (function __GT_Stepper(xform,iter){
return (new cljs.core.Stepper(xform,iter));
});

cljs.core.stepper = (function stepper(xform,iter){
var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){
var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);
lt.stepper = null;

return result;
});
var stepfn__2 = (function (result,input){
var lt = result;
lt.first = input;

lt.rest = cljs.core.lazy_transformer(lt.stepper);

lt.stepper = null;

return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.Stepper((function (){var G__12477 = stepfn;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__12477) : xform.call(null,G__12477));
})(),iter));
});

/**
* @constructor
*/
cljs.core.MultiStepper = (function (xform,iters,nexts){
this.xform = xform;
this.iters = iters;
this.nexts = nexts;
})
cljs.core.MultiStepper.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
var iters__$1 = cljs.core.seq(self__.iters);
while(true){
if(!((iters__$1 == null))){
var iter = cljs.core.first(iters__$1);
if(cljs.core.not(iter.hasNext())){
return false;
} else {
var G__12479 = cljs.core.next(iters__$1);
iters__$1 = G__12479;
continue;
}
} else {
return true;
}
break;
}
});

cljs.core.MultiStepper.prototype.next = (function (){
var self__ = this;
var _ = this;
var n__4490__auto___12480 = self__.iters.length;
var i_12481 = (0);
while(true){
if((i_12481 < n__4490__auto___12480)){
(self__.nexts[i_12481] = (self__.iters[i_12481]).next());

var G__12482 = (i_12481 + (1));
i_12481 = G__12482;
continue;
} else {
}
break;
}

return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(self__.nexts,(0));
});

cljs.core.MultiStepper.prototype.step = (function (lt){
var self__ = this;
var this$ = this;
while(true){
if(cljs.core.truth_((function (){var and__3596__auto__ = !((lt.stepper == null));
if(and__3596__auto__){
return this$.hasNext();
} else {
return and__3596__auto__;
}
})())){
if(cljs.core.reduced_QMARK_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.xform,cljs.core.cons(lt,this$.next())))){
if((lt.rest == null)){
} else {
lt.rest.stepper = null;
}
} else {
continue;
}
} else {
}
break;
}

if((lt.stepper == null)){
return null;
} else {
var G__12478 = lt;
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__12478) : self__.xform.call(null,G__12478));
}
});

cljs.core.MultiStepper.cljs$lang$type = true;

cljs.core.MultiStepper.cljs$lang$ctorStr = "cljs.core/MultiStepper";

cljs.core.MultiStepper.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/MultiStepper");
});

cljs.core.__GT_MultiStepper = (function __GT_MultiStepper(xform,iters,nexts){
return (new cljs.core.MultiStepper(xform,iters,nexts));
});

cljs.core.multi_stepper = (function() {
var multi_stepper = null;
var multi_stepper__2 = (function (xform,iters){
return multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length)));
});
var multi_stepper__3 = (function (xform,iters,nexts){
var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){
var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);
lt.stepper = null;

return lt;
});
var stepfn__2 = (function (result,input){
var lt = result;
lt.first = input;

lt.rest = cljs.core.lazy_transformer(lt.stepper);

lt.stepper = null;

return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.MultiStepper((function (){var G__12487 = stepfn;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__12487) : xform.call(null,G__12487));
})(),iters,nexts));
});
multi_stepper = function(xform,iters,nexts){
switch(arguments.length){
case 2:
return multi_stepper__2.call(this,xform,iters);
case 3:
return multi_stepper__3.call(this,xform,iters,nexts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_stepper.cljs$core$IFn$_invoke$arity$2 = multi_stepper__2;
multi_stepper.cljs$core$IFn$_invoke$arity$3 = multi_stepper__3;
return multi_stepper;
})()
;

/**
* @constructor
*/
cljs.core.LazyTransformer = (function (stepper,first,rest,meta){
this.stepper = stepper;
this.first = first;
this.rest = rest;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31719628;
})
cljs.core.LazyTransformer.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return cljs.core._seq(self__.rest);
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return self__.first;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
self__.stepper.step(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return this$__$1;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash_ordered_coll(this$__$1);
});

cljs.core.LazyTransformer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
var s = cljs.core._seq(this$__$1);
if(!((s == null))){
return cljs.core.equiv_sequential(this$__$1,other);
} else {
return (cljs.core.sequential_QMARK_(other)) && ((cljs.core.seq(other) == null));
}
});

cljs.core.LazyTransformer.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.LazyTransformer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(o,cljs.core._seq(this$__$1));
});

cljs.core.LazyTransformer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.LazyTransformer(self__.stepper,self__.first,self__.rest,new_meta));
});

cljs.core.LazyTransformer.cljs$lang$type = true;

cljs.core.LazyTransformer.cljs$lang$ctorStr = "cljs.core/LazyTransformer";

cljs.core.LazyTransformer.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/LazyTransformer");
});

cljs.core.__GT_LazyTransformer = (function __GT_LazyTransformer(stepper,first,rest,meta){
return (new cljs.core.LazyTransformer(stepper,first,rest,meta));
});

(cljs.core.LazyTransformer.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));
cljs.core.LazyTransformer.create = (function (xform,coll){
return (new cljs.core.LazyTransformer(cljs.core.stepper(xform,cljs.core.iter(coll)),null,null,null));
});
cljs.core.LazyTransformer.createMulti = (function (xform,colls){
var iters = [];
var seq__12488_12492 = cljs.core.seq(colls);
var chunk__12489_12493 = null;
var count__12490_12494 = (0);
var i__12491_12495 = (0);
while(true){
if((i__12491_12495 < count__12490_12494)){
var coll_12496 = chunk__12489_12493.cljs$core$IIndexed$_nth$arity$2(null,i__12491_12495);
iters.push(cljs.core.iter(coll_12496));

var G__12497 = seq__12488_12492;
var G__12498 = chunk__12489_12493;
var G__12499 = count__12490_12494;
var G__12500 = (i__12491_12495 + (1));
seq__12488_12492 = G__12497;
chunk__12489_12493 = G__12498;
count__12490_12494 = G__12499;
i__12491_12495 = G__12500;
continue;
} else {
var temp__4126__auto___12501 = cljs.core.seq(seq__12488_12492);
if(temp__4126__auto___12501){
var seq__12488_12502__$1 = temp__4126__auto___12501;
if(cljs.core.chunked_seq_QMARK_(seq__12488_12502__$1)){
var c__4390__auto___12503 = cljs.core.chunk_first(seq__12488_12502__$1);
var G__12504 = cljs.core.chunk_rest(seq__12488_12502__$1);
var G__12505 = c__4390__auto___12503;
var G__12506 = cljs.core.count(c__4390__auto___12503);
var G__12507 = (0);
seq__12488_12492 = G__12504;
chunk__12489_12493 = G__12505;
count__12490_12494 = G__12506;
i__12491_12495 = G__12507;
continue;
} else {
var coll_12508 = cljs.core.first(seq__12488_12502__$1);
iters.push(cljs.core.iter(coll_12508));

var G__12509 = cljs.core.next(seq__12488_12502__$1);
var G__12510 = null;
var G__12511 = (0);
var G__12512 = (0);
seq__12488_12492 = G__12509;
chunk__12489_12493 = G__12510;
count__12490_12494 = G__12511;
i__12491_12495 = G__12512;
continue;
}
} else {
}
}
break;
}

return (new cljs.core.LazyTransformer(cljs.core.multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length))),null,null,null));
});
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields (), When a
* transducer is supplied, returns a lazy sequence of applications of
* the transform to the items in coll(s), i.e. to the set of first
* items of each coll, followed by the set of second
* items in each coll, until any one of the colls is exhausted.  Any
* remaining items in other colls are ignored. The transform should accept
* number-of-colls arguments
* @param {...*} var_args
*/
cljs.core.sequence = (function() {
var sequence = null;
var sequence__1 = (function (coll){
if(cljs.core.seq_QMARK_(coll)){
return coll;
} else {
var or__3608__auto__ = cljs.core.seq(coll);
if(or__3608__auto__){
return or__3608__auto__;
} else {
return cljs.core.List.EMPTY;
}
}
});
var sequence__2 = (function (xform,coll){
return cljs.core.LazyTransformer.create(xform,coll);
});
var sequence__3 = (function() { 
var G__12513__delegate = function (xform,coll,colls){
return cljs.core.LazyTransformer.createMulti(xform,cljs.core.to_array(cljs.core.cons(coll,colls)));
};
var G__12513 = function (xform,coll,var_args){
var colls = null;
if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12513__delegate.call(this,xform,coll,colls);};
G__12513.cljs$lang$maxFixedArity = 2;
G__12513.cljs$lang$applyTo = (function (arglist__12514){
var xform = cljs.core.first(arglist__12514);
arglist__12514 = cljs.core.next(arglist__12514);
var coll = cljs.core.first(arglist__12514);
var colls = cljs.core.rest(arglist__12514);
return G__12513__delegate(xform,coll,colls);
});
G__12513.cljs$core$IFn$_invoke$arity$variadic = G__12513__delegate;
return G__12513;
})()
;
sequence = function(xform,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return sequence__1.call(this,xform);
case 2:
return sequence__2.call(this,xform,coll);
default:
return sequence__3.cljs$core$IFn$_invoke$arity$variadic(xform,coll, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sequence.cljs$lang$maxFixedArity = 2;
sequence.cljs$lang$applyTo = sequence__3.cljs$lang$applyTo;
sequence.cljs$core$IFn$_invoke$arity$1 = sequence__1;
sequence.cljs$core$IFn$_invoke$arity$2 = sequence__2;
sequence.cljs$core$IFn$_invoke$arity$variadic = sequence__3.cljs$core$IFn$_invoke$arity$variadic;
return sequence;
})()
;
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq(coll) == null)){
return true;
} else {
if(cljs.core.truth_((function (){var G__12516 = cljs.core.first(coll);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__12516) : pred.call(null,G__12516));
})())){
var G__12517 = pred;
var G__12518 = cljs.core.next(coll);
pred = G__12517;
coll = G__12518;
continue;
} else {
return false;

}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_(pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq(coll)){
var or__3608__auto__ = (function (){var G__12522 = cljs.core.first(coll);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__12522) : pred.call(null,G__12522));
})();
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
var G__12523 = pred;
var G__12524 = cljs.core.next(coll);
pred = G__12523;
coll = G__12524;
continue;
}
} else {
return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not(cljs.core.some(pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_(n)){
return ((n & (1)) === (0));
} else {
throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_(n));
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__12531 = null;
var G__12531__0 = (function (){
return cljs.core.not((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
});
var G__12531__1 = (function (x){
return cljs.core.not((function (){var G__12528 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12528) : f.call(null,G__12528));
})());
});
var G__12531__2 = (function (x,y){
return cljs.core.not((function (){var G__12529 = x;
var G__12530 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12529,G__12530) : f.call(null,G__12529,G__12530));
})());
});
var G__12531__3 = (function() { 
var G__12532__delegate = function (x,y,zs){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,x,y,zs));
};
var G__12532 = function (x,y,var_args){
var zs = null;
if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12532__delegate.call(this,x,y,zs);};
G__12532.cljs$lang$maxFixedArity = 2;
G__12532.cljs$lang$applyTo = (function (arglist__12533){
var x = cljs.core.first(arglist__12533);
arglist__12533 = cljs.core.next(arglist__12533);
var y = cljs.core.first(arglist__12533);
var zs = cljs.core.rest(arglist__12533);
return G__12532__delegate(x,y,zs);
});
G__12532.cljs$core$IFn$_invoke$arity$variadic = G__12532__delegate;
return G__12532;
})()
;
G__12531 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__12531__0.call(this);
case 1:
return G__12531__1.call(this,x);
case 2:
return G__12531__2.call(this,x,y);
default:
return G__12531__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12531.cljs$lang$maxFixedArity = 2;
G__12531.cljs$lang$applyTo = G__12531__3.cljs$lang$applyTo;
G__12531.cljs$core$IFn$_invoke$arity$0 = G__12531__0;
G__12531.cljs$core$IFn$_invoke$arity$1 = G__12531__1;
G__12531.cljs$core$IFn$_invoke$arity$2 = G__12531__2;
G__12531.cljs$core$IFn$_invoke$arity$variadic = G__12531__3.cljs$core$IFn$_invoke$arity$variadic;
return G__12531;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__12534__delegate = function (args){
return x;
};
var G__12534 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12534__delegate.call(this,args);};
G__12534.cljs$lang$maxFixedArity = 0;
G__12534.cljs$lang$applyTo = (function (arglist__12535){
var args = cljs.core.seq(arglist__12535);
return G__12534__delegate(args);
});
G__12534.cljs$core$IFn$_invoke$arity$variadic = G__12534__delegate;
return G__12534;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__12590 = null;
var G__12590__0 = (function (){
var G__12563 = (function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12563) : f.call(null,G__12563));
});
var G__12590__1 = (function (x){
var G__12564 = (function (){var G__12565 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__12565) : g.call(null,G__12565));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12564) : f.call(null,G__12564));
});
var G__12590__2 = (function (x,y){
var G__12566 = (function (){var G__12567 = x;
var G__12568 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__12567,G__12568) : g.call(null,G__12567,G__12568));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12566) : f.call(null,G__12566));
});
var G__12590__3 = (function (x,y,z){
var G__12569 = (function (){var G__12570 = x;
var G__12571 = y;
var G__12572 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__12570,G__12571,G__12572) : g.call(null,G__12570,G__12571,G__12572));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12569) : f.call(null,G__12569));
});
var G__12590__4 = (function() { 
var G__12591__delegate = function (x,y,z,args){
var G__12573 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12573) : f.call(null,G__12573));
};
var G__12591 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12591__delegate.call(this,x,y,z,args);};
G__12591.cljs$lang$maxFixedArity = 3;
G__12591.cljs$lang$applyTo = (function (arglist__12592){
var x = cljs.core.first(arglist__12592);
arglist__12592 = cljs.core.next(arglist__12592);
var y = cljs.core.first(arglist__12592);
arglist__12592 = cljs.core.next(arglist__12592);
var z = cljs.core.first(arglist__12592);
var args = cljs.core.rest(arglist__12592);
return G__12591__delegate(x,y,z,args);
});
G__12591.cljs$core$IFn$_invoke$arity$variadic = G__12591__delegate;
return G__12591;
})()
;
G__12590 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12590__0.call(this);
case 1:
return G__12590__1.call(this,x);
case 2:
return G__12590__2.call(this,x,y);
case 3:
return G__12590__3.call(this,x,y,z);
default:
return G__12590__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12590.cljs$lang$maxFixedArity = 3;
G__12590.cljs$lang$applyTo = G__12590__4.cljs$lang$applyTo;
G__12590.cljs$core$IFn$_invoke$arity$0 = G__12590__0;
G__12590.cljs$core$IFn$_invoke$arity$1 = G__12590__1;
G__12590.cljs$core$IFn$_invoke$arity$2 = G__12590__2;
G__12590.cljs$core$IFn$_invoke$arity$3 = G__12590__3;
G__12590.cljs$core$IFn$_invoke$arity$variadic = G__12590__4.cljs$core$IFn$_invoke$arity$variadic;
return G__12590;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__12593 = null;
var G__12593__0 = (function (){
var G__12574 = (function (){var G__12575 = (function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__12575) : g.call(null,G__12575));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12574) : f.call(null,G__12574));
});
var G__12593__1 = (function (x){
var G__12576 = (function (){var G__12577 = (function (){var G__12578 = x;
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__12578) : h.call(null,G__12578));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__12577) : g.call(null,G__12577));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12576) : f.call(null,G__12576));
});
var G__12593__2 = (function (x,y){
var G__12579 = (function (){var G__12580 = (function (){var G__12581 = x;
var G__12582 = y;
return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__12581,G__12582) : h.call(null,G__12581,G__12582));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__12580) : g.call(null,G__12580));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12579) : f.call(null,G__12579));
});
var G__12593__3 = (function (x,y,z){
var G__12583 = (function (){var G__12584 = (function (){var G__12585 = x;
var G__12586 = y;
var G__12587 = z;
return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__12585,G__12586,G__12587) : h.call(null,G__12585,G__12586,G__12587));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__12584) : g.call(null,G__12584));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12583) : f.call(null,G__12583));
});
var G__12593__4 = (function() { 
var G__12594__delegate = function (x,y,z,args){
var G__12588 = (function (){var G__12589 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args);
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__12589) : g.call(null,G__12589));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12588) : f.call(null,G__12588));
};
var G__12594 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12594__delegate.call(this,x,y,z,args);};
G__12594.cljs$lang$maxFixedArity = 3;
G__12594.cljs$lang$applyTo = (function (arglist__12595){
var x = cljs.core.first(arglist__12595);
arglist__12595 = cljs.core.next(arglist__12595);
var y = cljs.core.first(arglist__12595);
arglist__12595 = cljs.core.next(arglist__12595);
var z = cljs.core.first(arglist__12595);
var args = cljs.core.rest(arglist__12595);
return G__12594__delegate(x,y,z,args);
});
G__12594.cljs$core$IFn$_invoke$arity$variadic = G__12594__delegate;
return G__12594;
})()
;
G__12593 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12593__0.call(this);
case 1:
return G__12593__1.call(this,x);
case 2:
return G__12593__2.call(this,x,y);
case 3:
return G__12593__3.call(this,x,y,z);
default:
return G__12593__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12593.cljs$lang$maxFixedArity = 3;
G__12593.cljs$lang$applyTo = G__12593__4.cljs$lang$applyTo;
G__12593.cljs$core$IFn$_invoke$arity$0 = G__12593__0;
G__12593.cljs$core$IFn$_invoke$arity$1 = G__12593__1;
G__12593.cljs$core$IFn$_invoke$arity$2 = G__12593__2;
G__12593.cljs$core$IFn$_invoke$arity$3 = G__12593__3;
G__12593.cljs$core$IFn$_invoke$arity$variadic = G__12593__4.cljs$core$IFn$_invoke$arity$variadic;
return G__12593;
})()
});
var comp__4 = (function() { 
var G__12596__delegate = function (f1,f2,f3,fs){
var fs__$1 = cljs.core.reverse(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f1,f2,f3,fs));
return ((function (fs__$1){
return (function() { 
var G__12597__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fs__$1),args);
var fs__$2 = cljs.core.next(fs__$1);
while(true){
if(fs__$2){
var G__12598 = cljs.core.first(fs__$2).call(null,ret);
var G__12599 = cljs.core.next(fs__$2);
ret = G__12598;
fs__$2 = G__12599;
continue;
} else {
return ret;
}
break;
}
};
var G__12597 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12597__delegate.call(this,args);};
G__12597.cljs$lang$maxFixedArity = 0;
G__12597.cljs$lang$applyTo = (function (arglist__12600){
var args = cljs.core.seq(arglist__12600);
return G__12597__delegate(args);
});
G__12597.cljs$core$IFn$_invoke$arity$variadic = G__12597__delegate;
return G__12597;
})()
;
;})(fs__$1))
};
var G__12596 = function (f1,f2,f3,var_args){
var fs = null;
if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12596__delegate.call(this,f1,f2,f3,fs);};
G__12596.cljs$lang$maxFixedArity = 3;
G__12596.cljs$lang$applyTo = (function (arglist__12601){
var f1 = cljs.core.first(arglist__12601);
arglist__12601 = cljs.core.next(arglist__12601);
var f2 = cljs.core.first(arglist__12601);
arglist__12601 = cljs.core.next(arglist__12601);
var f3 = cljs.core.first(arglist__12601);
var fs = cljs.core.rest(arglist__12601);
return G__12596__delegate(f1,f2,f3,fs);
});
G__12596.cljs$core$IFn$_invoke$arity$variadic = G__12596__delegate;
return G__12596;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$core$IFn$_invoke$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$core$IFn$_invoke$arity$0 = comp__0;
comp.cljs$core$IFn$_invoke$arity$1 = comp__1;
comp.cljs$core$IFn$_invoke$arity$2 = comp__2;
comp.cljs$core$IFn$_invoke$arity$3 = comp__3;
comp.cljs$core$IFn$_invoke$arity$variadic = comp__4.cljs$core$IFn$_invoke$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__1 = (function (f){
return f;
});
var partial__2 = (function (f,arg1){
return (function() { 
var G__12602__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg1,args);
};
var G__12602 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12602__delegate.call(this,args);};
G__12602.cljs$lang$maxFixedArity = 0;
G__12602.cljs$lang$applyTo = (function (arglist__12603){
var args = cljs.core.seq(arglist__12603);
return G__12602__delegate(args);
});
G__12602.cljs$core$IFn$_invoke$arity$variadic = G__12602__delegate;
return G__12602;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__12604__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,arg1,arg2,args);
};
var G__12604 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12604__delegate.call(this,args);};
G__12604.cljs$lang$maxFixedArity = 0;
G__12604.cljs$lang$applyTo = (function (arglist__12605){
var args = cljs.core.seq(arglist__12605);
return G__12604__delegate(args);
});
G__12604.cljs$core$IFn$_invoke$arity$variadic = G__12604__delegate;
return G__12604;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__12606__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,args);
};
var G__12606 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12606__delegate.call(this,args);};
G__12606.cljs$lang$maxFixedArity = 0;
G__12606.cljs$lang$applyTo = (function (arglist__12607){
var args = cljs.core.seq(arglist__12607);
return G__12606__delegate(args);
});
G__12606.cljs$core$IFn$_invoke$arity$variadic = G__12606__delegate;
return G__12606;
})()
;
});
var partial__5 = (function() { 
var G__12608__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__12609__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(more,args));
};
var G__12609 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12609__delegate.call(this,args);};
G__12609.cljs$lang$maxFixedArity = 0;
G__12609.cljs$lang$applyTo = (function (arglist__12610){
var args = cljs.core.seq(arglist__12610);
return G__12609__delegate(args);
});
G__12609.cljs$core$IFn$_invoke$arity$variadic = G__12609__delegate;
return G__12609;
})()
;
};
var G__12608 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12608__delegate.call(this,f,arg1,arg2,arg3,more);};
G__12608.cljs$lang$maxFixedArity = 4;
G__12608.cljs$lang$applyTo = (function (arglist__12611){
var f = cljs.core.first(arglist__12611);
arglist__12611 = cljs.core.next(arglist__12611);
var arg1 = cljs.core.first(arglist__12611);
arglist__12611 = cljs.core.next(arglist__12611);
var arg2 = cljs.core.first(arglist__12611);
arglist__12611 = cljs.core.next(arglist__12611);
var arg3 = cljs.core.first(arglist__12611);
var more = cljs.core.rest(arglist__12611);
return G__12608__delegate(f,arg1,arg2,arg3,more);
});
G__12608.cljs$core$IFn$_invoke$arity$variadic = G__12608__delegate;
return G__12608;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return partial__1.call(this,f);
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$core$IFn$_invoke$arity$1 = partial__1;
partial.cljs$core$IFn$_invoke$arity$2 = partial__2;
partial.cljs$core$IFn$_invoke$arity$3 = partial__3;
partial.cljs$core$IFn$_invoke$arity$4 = partial__4;
partial.cljs$core$IFn$_invoke$arity$variadic = partial__5.cljs$core$IFn$_invoke$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__12644 = null;
var G__12644__1 = (function (a){
var G__12628 = (((a == null))?x:a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12628) : f.call(null,G__12628));
});
var G__12644__2 = (function (a,b){
var G__12629 = (((a == null))?x:a);
var G__12630 = b;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12629,G__12630) : f.call(null,G__12629,G__12630));
});
var G__12644__3 = (function (a,b,c){
var G__12631 = (((a == null))?x:a);
var G__12632 = b;
var G__12633 = c;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12631,G__12632,G__12633) : f.call(null,G__12631,G__12632,G__12633));
});
var G__12644__4 = (function() { 
var G__12645__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__12645 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12645__delegate.call(this,a,b,c,ds);};
G__12645.cljs$lang$maxFixedArity = 3;
G__12645.cljs$lang$applyTo = (function (arglist__12646){
var a = cljs.core.first(arglist__12646);
arglist__12646 = cljs.core.next(arglist__12646);
var b = cljs.core.first(arglist__12646);
arglist__12646 = cljs.core.next(arglist__12646);
var c = cljs.core.first(arglist__12646);
var ds = cljs.core.rest(arglist__12646);
return G__12645__delegate(a,b,c,ds);
});
G__12645.cljs$core$IFn$_invoke$arity$variadic = G__12645__delegate;
return G__12645;
})()
;
G__12644 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__12644__1.call(this,a);
case 2:
return G__12644__2.call(this,a,b);
case 3:
return G__12644__3.call(this,a,b,c);
default:
return G__12644__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12644.cljs$lang$maxFixedArity = 3;
G__12644.cljs$lang$applyTo = G__12644__4.cljs$lang$applyTo;
G__12644.cljs$core$IFn$_invoke$arity$1 = G__12644__1;
G__12644.cljs$core$IFn$_invoke$arity$2 = G__12644__2;
G__12644.cljs$core$IFn$_invoke$arity$3 = G__12644__3;
G__12644.cljs$core$IFn$_invoke$arity$variadic = G__12644__4.cljs$core$IFn$_invoke$arity$variadic;
return G__12644;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__12647 = null;
var G__12647__2 = (function (a,b){
var G__12634 = (((a == null))?x:a);
var G__12635 = (((b == null))?y:b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12634,G__12635) : f.call(null,G__12634,G__12635));
});
var G__12647__3 = (function (a,b,c){
var G__12636 = (((a == null))?x:a);
var G__12637 = (((b == null))?y:b);
var G__12638 = c;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12636,G__12637,G__12638) : f.call(null,G__12636,G__12637,G__12638));
});
var G__12647__4 = (function() { 
var G__12648__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__12648 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12648__delegate.call(this,a,b,c,ds);};
G__12648.cljs$lang$maxFixedArity = 3;
G__12648.cljs$lang$applyTo = (function (arglist__12649){
var a = cljs.core.first(arglist__12649);
arglist__12649 = cljs.core.next(arglist__12649);
var b = cljs.core.first(arglist__12649);
arglist__12649 = cljs.core.next(arglist__12649);
var c = cljs.core.first(arglist__12649);
var ds = cljs.core.rest(arglist__12649);
return G__12648__delegate(a,b,c,ds);
});
G__12648.cljs$core$IFn$_invoke$arity$variadic = G__12648__delegate;
return G__12648;
})()
;
G__12647 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__12647__2.call(this,a,b);
case 3:
return G__12647__3.call(this,a,b,c);
default:
return G__12647__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12647.cljs$lang$maxFixedArity = 3;
G__12647.cljs$lang$applyTo = G__12647__4.cljs$lang$applyTo;
G__12647.cljs$core$IFn$_invoke$arity$2 = G__12647__2;
G__12647.cljs$core$IFn$_invoke$arity$3 = G__12647__3;
G__12647.cljs$core$IFn$_invoke$arity$variadic = G__12647__4.cljs$core$IFn$_invoke$arity$variadic;
return G__12647;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__12650 = null;
var G__12650__2 = (function (a,b){
var G__12639 = (((a == null))?x:a);
var G__12640 = (((b == null))?y:b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12639,G__12640) : f.call(null,G__12639,G__12640));
});
var G__12650__3 = (function (a,b,c){
var G__12641 = (((a == null))?x:a);
var G__12642 = (((b == null))?y:b);
var G__12643 = (((c == null))?z:c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12641,G__12642,G__12643) : f.call(null,G__12641,G__12642,G__12643));
});
var G__12650__4 = (function() { 
var G__12651__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__12651 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12651__delegate.call(this,a,b,c,ds);};
G__12651.cljs$lang$maxFixedArity = 3;
G__12651.cljs$lang$applyTo = (function (arglist__12652){
var a = cljs.core.first(arglist__12652);
arglist__12652 = cljs.core.next(arglist__12652);
var b = cljs.core.first(arglist__12652);
arglist__12652 = cljs.core.next(arglist__12652);
var c = cljs.core.first(arglist__12652);
var ds = cljs.core.rest(arglist__12652);
return G__12651__delegate(a,b,c,ds);
});
G__12651.cljs$core$IFn$_invoke$arity$variadic = G__12651__delegate;
return G__12651;
})()
;
G__12650 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__12650__2.call(this,a,b);
case 3:
return G__12650__3.call(this,a,b,c);
default:
return G__12650__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12650.cljs$lang$maxFixedArity = 3;
G__12650.cljs$lang$applyTo = G__12650__4.cljs$lang$applyTo;
G__12650.cljs$core$IFn$_invoke$arity$2 = G__12650__2;
G__12650.cljs$core$IFn$_invoke$arity$3 = G__12650__3;
G__12650.cljs$core$IFn$_invoke$arity$variadic = G__12650__4.cljs$core$IFn$_invoke$arity$variadic;
return G__12650;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fnil.cljs$core$IFn$_invoke$arity$2 = fnil__2;
fnil.cljs$core$IFn$_invoke$arity$3 = fnil__3;
fnil.cljs$core$IFn$_invoke$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi = (function mapi(idx,coll__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4490__auto___12701 = size;
var i_12702 = (0);
while(true){
if((i_12702 < n__4490__auto___12701)){
cljs.core.chunk_append(b,(function (){var G__12697 = (idx + i_12702);
var G__12698 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_12702);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12697,G__12698) : f.call(null,G__12697,G__12698));
})());

var G__12703 = (i_12702 + (1));
i_12702 = G__12703;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),mapi((idx + size),cljs.core.chunk_rest(s)));
} else {
return cljs.core.cons((function (){var G__12699 = idx;
var G__12700 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12699,G__12700) : f.call(null,G__12699,G__12700));
})(),mapi((idx + (1)),cljs.core.rest(s)));
}
} else {
return null;
}
}),null,null));
});
return mapi((0),coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a transducer when no collection is provided.
*/
cljs.core.keep = (function() {
var keep = null;
var keep__1 = (function (f){
return (function (rf){
return (function() {
var G__12722 = null;
var G__12722__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__12722__1 = (function (result){
var G__12716 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__12716) : rf.call(null,G__12716));
});
var G__12722__2 = (function (result,input){
var v = (function (){var G__12717 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12717) : f.call(null,G__12717));
})();
if((v == null)){
return result;
} else {
var G__12718 = result;
var G__12719 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__12718,G__12719) : rf.call(null,G__12718,G__12719));
}
});
G__12722 = function(result,input){
switch(arguments.length){
case 0:
return G__12722__0.call(this);
case 1:
return G__12722__1.call(this,result);
case 2:
return G__12722__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12722.cljs$core$IFn$_invoke$arity$0 = G__12722__0;
G__12722.cljs$core$IFn$_invoke$arity$1 = G__12722__1;
G__12722.cljs$core$IFn$_invoke$arity$2 = G__12722__2;
return G__12722;
})()
});
});
var keep__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4490__auto___12723 = size;
var i_12724 = (0);
while(true){
if((i_12724 < n__4490__auto___12723)){
var x_12725 = (function (){var G__12720 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_12724);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12720) : f.call(null,G__12720));
})();
if((x_12725 == null)){
} else {
cljs.core.chunk_append(b,x_12725);
}

var G__12726 = (i_12724 + (1));
i_12724 = G__12726;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else {
var x = (function (){var G__12721 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12721) : f.call(null,G__12721));
})();
if((x == null)){
return keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s));
} else {
return cljs.core.cons(x,keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
}
} else {
return null;
}
}),null,null));
});
keep = function(f,coll){
switch(arguments.length){
case 1:
return keep__1.call(this,f);
case 2:
return keep__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep.cljs$core$IFn$_invoke$arity$1 = keep__1;
keep.cljs$core$IFn$_invoke$arity$2 = keep__2;
return keep;
})()
;

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 6455296;
this.cljs$lang$protocol_mask$partition1$ = 16386;
})
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__12727 = this$__$1;
return goog.getUid(G__12727);
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__12728 = cljs.core.seq(self__.watches);
var chunk__12729 = null;
var count__12730 = (0);
var i__12731 = (0);
while(true){
if((i__12731 < count__12730)){
var vec__12732 = chunk__12729.cljs$core$IIndexed$_nth$arity$2(null,i__12731);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12732,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12732,(1),null);
var G__12733_12742 = key;
var G__12734_12743 = this$__$1;
var G__12735_12744 = oldval;
var G__12736_12745 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__12733_12742,G__12734_12743,G__12735_12744,G__12736_12745) : f.call(null,G__12733_12742,G__12734_12743,G__12735_12744,G__12736_12745));

var G__12746 = seq__12728;
var G__12747 = chunk__12729;
var G__12748 = count__12730;
var G__12749 = (i__12731 + (1));
seq__12728 = G__12746;
chunk__12729 = G__12747;
count__12730 = G__12748;
i__12731 = G__12749;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__12728);
if(temp__4126__auto__){
var seq__12728__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12728__$1)){
var c__4390__auto__ = cljs.core.chunk_first(seq__12728__$1);
var G__12750 = cljs.core.chunk_rest(seq__12728__$1);
var G__12751 = c__4390__auto__;
var G__12752 = cljs.core.count(c__4390__auto__);
var G__12753 = (0);
seq__12728 = G__12750;
chunk__12729 = G__12751;
count__12730 = G__12752;
i__12731 = G__12753;
continue;
} else {
var vec__12737 = cljs.core.first(seq__12728__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12737,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12737,(1),null);
var G__12738_12754 = key;
var G__12739_12755 = this$__$1;
var G__12740_12756 = oldval;
var G__12741_12757 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__12738_12754,G__12739_12755,G__12740_12756,G__12741_12757) : f.call(null,G__12738_12754,G__12739_12755,G__12740_12756,G__12741_12757));

var G__12758 = cljs.core.next(seq__12728__$1);
var G__12759 = null;
var G__12760 = (0);
var G__12761 = (0);
seq__12728 = G__12758;
chunk__12729 = G__12759;
count__12730 = G__12760;
i__12731 = G__12761;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);

return this$__$1;
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

cljs.core.Atom.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Atom.cljs$lang$type = true;

cljs.core.Atom.cljs$lang$ctorStr = "cljs.core/Atom";

cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/Atom");
});

cljs.core.__GT_Atom = (function __GT_Atom(state,meta,validator,watches){
return (new cljs.core.Atom(state,meta,validator,watches));
});

/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__12765__delegate = function (x,p__12762){
var map__12764 = p__12762;
var map__12764__$1 = ((cljs.core.seq_QMARK_(map__12764))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12764):map__12764);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12764__$1,cljs.core.constant$keyword$13);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12764__$1,cljs.core.constant$keyword$3);
return (new cljs.core.Atom(x,meta,validator,null));
};
var G__12765 = function (x,var_args){
var p__12762 = null;
if (arguments.length > 1) {
  p__12762 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12765__delegate.call(this,x,p__12762);};
G__12765.cljs$lang$maxFixedArity = 1;
G__12765.cljs$lang$applyTo = (function (arglist__12766){
var x = cljs.core.first(arglist__12766);
var p__12762 = cljs.core.rest(arglist__12766);
return G__12765__delegate(x,p__12762);
});
G__12765.cljs$core$IFn$_invoke$arity$variadic = G__12765__delegate;
return G__12765;
})()
;
atom = function(x,var_args){
var p__12762 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
if((a instanceof cljs.core.Atom)){
var validate = a.validator;
if((validate == null)){
} else {
if(cljs.core.truth_((function (){var G__12769 = new_value;
return (validate.cljs$core$IFn$_invoke$arity$1 ? validate.cljs$core$IFn$_invoke$arity$1(G__12769) : validate.call(null,G__12769));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str((function (){var G__12770 = cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null));
return (cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1 ? cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1(G__12770) : cljs.core.pr_str.call(null,G__12770));
})())].join('')));
}
}

var old_value = a.state;
a.state = new_value;

if((a.watches == null)){
} else {
cljs.core._notify_watches(a,old_value,new_value);
}

return new_value;
} else {
return cljs.core._reset_BANG_(a,new_value);
}
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__12777 = a.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12777) : f.call(null,G__12777));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,f);
}
});
var swap_BANG___3 = (function (a,f,x){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__12778 = a.state;
var G__12779 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12778,G__12779) : f.call(null,G__12778,G__12779));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,f,x);
}
});
var swap_BANG___4 = (function (a,f,x,y){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__12780 = a.state;
var G__12781 = x;
var G__12782 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12780,G__12781,G__12782) : f.call(null,G__12780,G__12781,G__12782));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,f,x,y);
}
});
var swap_BANG___5 = (function() { 
var G__12783__delegate = function (a,f,x,y,more){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a.state,x,y,more));
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a,f,x,y,more);
}
};
var G__12783 = function (a,f,x,y,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12783__delegate.call(this,a,f,x,y,more);};
G__12783.cljs$lang$maxFixedArity = 4;
G__12783.cljs$lang$applyTo = (function (arglist__12784){
var a = cljs.core.first(arglist__12784);
arglist__12784 = cljs.core.next(arglist__12784);
var f = cljs.core.first(arglist__12784);
arglist__12784 = cljs.core.next(arglist__12784);
var x = cljs.core.first(arglist__12784);
arglist__12784 = cljs.core.next(arglist__12784);
var y = cljs.core.first(arglist__12784);
var more = cljs.core.rest(arglist__12784);
return G__12783__delegate(a,f,x,y,more);
});
G__12783.cljs$core$IFn$_invoke$arity$variadic = G__12783__delegate;
return G__12783;
})()
;
swap_BANG_ = function(a,f,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
default:
return swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic(a,f,x,y, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_BANG_.cljs$lang$maxFixedArity = 4;
swap_BANG_.cljs$lang$applyTo = swap_BANG___5.cljs$lang$applyTo;
swap_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_BANG___2;
swap_BANG_.cljs$core$IFn$_invoke$arity$3 = swap_BANG___3;
swap_BANG_.cljs$core$IFn$_invoke$arity$4 = swap_BANG___4;
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.state,oldval)){
cljs.core.reset_BANG_(a,newval);

return true;
} else {
return false;
}
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a stateful transducer when no collection is
* provided.
*/
cljs.core.keep_indexed = (function() {
var keep_indexed = null;
var keep_indexed__1 = (function (f){
return (function (rf){
var ia = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
return ((function (ia){
return (function() {
var G__12851 = null;
var G__12851__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__12851__1 = (function (result){
var G__12818 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__12818) : rf.call(null,G__12818));
});
var G__12851__2 = (function (result,input){
var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ia,cljs.core.inc);
var v = (function (){var G__12819 = i;
var G__12820 = input;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12819,G__12820) : f.call(null,G__12819,G__12820));
})();
if((v == null)){
return result;
} else {
var G__12821 = result;
var G__12822 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__12821,G__12822) : rf.call(null,G__12821,G__12822));
}
});
G__12851 = function(result,input){
switch(arguments.length){
case 0:
return G__12851__0.call(this);
case 1:
return G__12851__1.call(this,result);
case 2:
return G__12851__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12851.cljs$core$IFn$_invoke$arity$0 = G__12851__0;
G__12851.cljs$core$IFn$_invoke$arity$1 = G__12851__1;
G__12851.cljs$core$IFn$_invoke$arity$2 = G__12851__2;
return G__12851;
})()
;})(ia))
});
});
var keep_indexed__2 = (function (f,coll){
var keepi = (function keepi(idx,coll__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4490__auto___12852 = size;
var i_12853 = (0);
while(true){
if((i_12853 < n__4490__auto___12852)){
var x_12854 = (function (){var G__12847 = (idx + i_12853);
var G__12848 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_12853);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12847,G__12848) : f.call(null,G__12847,G__12848));
})();
if((x_12854 == null)){
} else {
cljs.core.chunk_append(b,x_12854);
}

var G__12855 = (i_12853 + (1));
i_12853 = G__12855;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),keepi((idx + size),cljs.core.chunk_rest(s)));
} else {
var x = (function (){var G__12849 = idx;
var G__12850 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12849,G__12850) : f.call(null,G__12849,G__12850));
})();
if((x == null)){
return keepi((idx + (1)),cljs.core.rest(s));
} else {
return cljs.core.cons(x,keepi((idx + (1)),cljs.core.rest(s)));
}
}
} else {
return null;
}
}),null,null));
});
return keepi((0),coll);
});
keep_indexed = function(f,coll){
switch(arguments.length){
case 1:
return keep_indexed__1.call(this,f);
case 2:
return keep_indexed__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep_indexed.cljs$core$IFn$_invoke$arity$1 = keep_indexed__1;
keep_indexed.cljs$core$IFn$_invoke$arity$2 = keep_indexed__2;
return keep_indexed;
})()
;
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$((function (){var G__13069 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13069) : p.call(null,G__13069));
})());
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3596__auto__ = (function (){var G__13071 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13071) : p.call(null,G__13071));
})();
if(cljs.core.truth_(and__3596__auto__)){
var G__13072 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13072) : p.call(null,G__13072));
} else {
return and__3596__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3596__auto__ = (function (){var G__13074 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13074) : p.call(null,G__13074));
})();
if(cljs.core.truth_(and__3596__auto__)){
var and__3596__auto____$1 = (function (){var G__13076 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13076) : p.call(null,G__13076));
})();
if(cljs.core.truth_(and__3596__auto____$1)){
var G__13077 = z;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13077) : p.call(null,G__13077));
} else {
return and__3596__auto____$1;
}
} else {
return and__3596__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__13246__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep1.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(p,args)));
};
var G__13246 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13246__delegate.call(this,x,y,z,args);};
G__13246.cljs$lang$maxFixedArity = 3;
G__13246.cljs$lang$applyTo = (function (arglist__13247){
var x = cljs.core.first(arglist__13247);
arglist__13247 = cljs.core.next(arglist__13247);
var y = cljs.core.first(arglist__13247);
arglist__13247 = cljs.core.next(arglist__13247);
var z = cljs.core.first(arglist__13247);
var args = cljs.core.rest(arglist__13247);
return G__13246__delegate(x,y,z,args);
});
G__13246.cljs$core$IFn$_invoke$arity$variadic = G__13246__delegate;
return G__13246;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$core$IFn$_invoke$arity$0 = ep1__0;
ep1.cljs$core$IFn$_invoke$arity$1 = ep1__1;
ep1.cljs$core$IFn$_invoke$arity$2 = ep1__2;
ep1.cljs$core$IFn$_invoke$arity$3 = ep1__3;
ep1.cljs$core$IFn$_invoke$arity$variadic = ep1__4.cljs$core$IFn$_invoke$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$((function (){var and__3596__auto__ = (function (){var G__13109 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13109) : p1.call(null,G__13109));
})();
if(cljs.core.truth_(and__3596__auto__)){
var G__13110 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13110) : p2.call(null,G__13110));
} else {
return and__3596__auto__;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3596__auto__ = (function (){var G__13112 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13112) : p1.call(null,G__13112));
})();
if(cljs.core.truth_(and__3596__auto__)){
var and__3596__auto____$1 = (function (){var G__13114 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13114) : p1.call(null,G__13114));
})();
if(cljs.core.truth_(and__3596__auto____$1)){
var and__3596__auto____$2 = (function (){var G__13116 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13116) : p2.call(null,G__13116));
})();
if(cljs.core.truth_(and__3596__auto____$2)){
var G__13117 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13117) : p2.call(null,G__13117));
} else {
return and__3596__auto____$2;
}
} else {
return and__3596__auto____$1;
}
} else {
return and__3596__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3596__auto__ = (function (){var G__13119 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13119) : p1.call(null,G__13119));
})();
if(cljs.core.truth_(and__3596__auto__)){
var and__3596__auto____$1 = (function (){var G__13121 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13121) : p1.call(null,G__13121));
})();
if(cljs.core.truth_(and__3596__auto____$1)){
var and__3596__auto____$2 = (function (){var G__13123 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13123) : p1.call(null,G__13123));
})();
if(cljs.core.truth_(and__3596__auto____$2)){
var and__3596__auto____$3 = (function (){var G__13125 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13125) : p2.call(null,G__13125));
})();
if(cljs.core.truth_(and__3596__auto____$3)){
var and__3596__auto____$4 = (function (){var G__13127 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13127) : p2.call(null,G__13127));
})();
if(cljs.core.truth_(and__3596__auto____$4)){
var G__13128 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13128) : p2.call(null,G__13128));
} else {
return and__3596__auto____$4;
}
} else {
return and__3596__auto____$3;
}
} else {
return and__3596__auto____$2;
}
} else {
return and__3596__auto____$1;
}
} else {
return and__3596__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__13248__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep2.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__12856_SHARP_){
var and__3596__auto__ = (function (){var G__13133 = p1__12856_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13133) : p1.call(null,G__13133));
})();
if(cljs.core.truth_(and__3596__auto__)){
var G__13134 = p1__12856_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13134) : p2.call(null,G__13134));
} else {
return and__3596__auto__;
}
}),args)));
};
var G__13248 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13248__delegate.call(this,x,y,z,args);};
G__13248.cljs$lang$maxFixedArity = 3;
G__13248.cljs$lang$applyTo = (function (arglist__13249){
var x = cljs.core.first(arglist__13249);
arglist__13249 = cljs.core.next(arglist__13249);
var y = cljs.core.first(arglist__13249);
arglist__13249 = cljs.core.next(arglist__13249);
var z = cljs.core.first(arglist__13249);
var args = cljs.core.rest(arglist__13249);
return G__13248__delegate(x,y,z,args);
});
G__13248.cljs$core$IFn$_invoke$arity$variadic = G__13248__delegate;
return G__13248;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$core$IFn$_invoke$arity$0 = ep2__0;
ep2.cljs$core$IFn$_invoke$arity$1 = ep2__1;
ep2.cljs$core$IFn$_invoke$arity$2 = ep2__2;
ep2.cljs$core$IFn$_invoke$arity$3 = ep2__3;
ep2.cljs$core$IFn$_invoke$arity$variadic = ep2__4.cljs$core$IFn$_invoke$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$((function (){var and__3596__auto__ = (function (){var G__13180 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13180) : p1.call(null,G__13180));
})();
if(cljs.core.truth_(and__3596__auto__)){
var and__3596__auto____$1 = (function (){var G__13182 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13182) : p2.call(null,G__13182));
})();
if(cljs.core.truth_(and__3596__auto____$1)){
var G__13183 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13183) : p3.call(null,G__13183));
} else {
return and__3596__auto____$1;
}
} else {
return and__3596__auto__;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3596__auto__ = (function (){var G__13185 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13185) : p1.call(null,G__13185));
})();
if(cljs.core.truth_(and__3596__auto__)){
var and__3596__auto____$1 = (function (){var G__13187 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13187) : p2.call(null,G__13187));
})();
if(cljs.core.truth_(and__3596__auto____$1)){
var and__3596__auto____$2 = (function (){var G__13189 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13189) : p3.call(null,G__13189));
})();
if(cljs.core.truth_(and__3596__auto____$2)){
var and__3596__auto____$3 = (function (){var G__13191 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13191) : p1.call(null,G__13191));
})();
if(cljs.core.truth_(and__3596__auto____$3)){
var and__3596__auto____$4 = (function (){var G__13193 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13193) : p2.call(null,G__13193));
})();
if(cljs.core.truth_(and__3596__auto____$4)){
var G__13194 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13194) : p3.call(null,G__13194));
} else {
return and__3596__auto____$4;
}
} else {
return and__3596__auto____$3;
}
} else {
return and__3596__auto____$2;
}
} else {
return and__3596__auto____$1;
}
} else {
return and__3596__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3596__auto__ = (function (){var G__13196 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13196) : p1.call(null,G__13196));
})();
if(cljs.core.truth_(and__3596__auto__)){
var and__3596__auto____$1 = (function (){var G__13198 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13198) : p2.call(null,G__13198));
})();
if(cljs.core.truth_(and__3596__auto____$1)){
var and__3596__auto____$2 = (function (){var G__13200 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13200) : p3.call(null,G__13200));
})();
if(cljs.core.truth_(and__3596__auto____$2)){
var and__3596__auto____$3 = (function (){var G__13202 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13202) : p1.call(null,G__13202));
})();
if(cljs.core.truth_(and__3596__auto____$3)){
var and__3596__auto____$4 = (function (){var G__13204 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13204) : p2.call(null,G__13204));
})();
if(cljs.core.truth_(and__3596__auto____$4)){
var and__3596__auto____$5 = (function (){var G__13206 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13206) : p3.call(null,G__13206));
})();
if(cljs.core.truth_(and__3596__auto____$5)){
var and__3596__auto____$6 = (function (){var G__13208 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13208) : p1.call(null,G__13208));
})();
if(cljs.core.truth_(and__3596__auto____$6)){
var and__3596__auto____$7 = (function (){var G__13210 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13210) : p2.call(null,G__13210));
})();
if(cljs.core.truth_(and__3596__auto____$7)){
var G__13211 = z;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13211) : p3.call(null,G__13211));
} else {
return and__3596__auto____$7;
}
} else {
return and__3596__auto____$6;
}
} else {
return and__3596__auto____$5;
}
} else {
return and__3596__auto____$4;
}
} else {
return and__3596__auto____$3;
}
} else {
return and__3596__auto____$2;
}
} else {
return and__3596__auto____$1;
}
} else {
return and__3596__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__13250__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep3.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__12857_SHARP_){
var and__3596__auto__ = (function (){var G__13218 = p1__12857_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13218) : p1.call(null,G__13218));
})();
if(cljs.core.truth_(and__3596__auto__)){
var and__3596__auto____$1 = (function (){var G__13220 = p1__12857_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13220) : p2.call(null,G__13220));
})();
if(cljs.core.truth_(and__3596__auto____$1)){
var G__13221 = p1__12857_SHARP_;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13221) : p3.call(null,G__13221));
} else {
return and__3596__auto____$1;
}
} else {
return and__3596__auto__;
}
}),args)));
};
var G__13250 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13250__delegate.call(this,x,y,z,args);};
G__13250.cljs$lang$maxFixedArity = 3;
G__13250.cljs$lang$applyTo = (function (arglist__13251){
var x = cljs.core.first(arglist__13251);
arglist__13251 = cljs.core.next(arglist__13251);
var y = cljs.core.first(arglist__13251);
arglist__13251 = cljs.core.next(arglist__13251);
var z = cljs.core.first(arglist__13251);
var args = cljs.core.rest(arglist__13251);
return G__13250__delegate(x,y,z,args);
});
G__13250.cljs$core$IFn$_invoke$arity$variadic = G__13250__delegate;
return G__13250;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$core$IFn$_invoke$arity$0 = ep3__0;
ep3.cljs$core$IFn$_invoke$arity$1 = ep3__1;
ep3.cljs$core$IFn$_invoke$arity$2 = ep3__2;
ep3.cljs$core$IFn$_invoke$arity$3 = ep3__3;
ep3.cljs$core$IFn$_invoke$arity$variadic = ep3__4.cljs$core$IFn$_invoke$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__13252__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);
return ((function (ps__$1){
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__12858_SHARP_){
var G__13237 = x;
return (p1__12858_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12858_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13237) : p1__12858_SHARP_.call(null,G__13237));
});})(ps__$1))
,ps__$1);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__12859_SHARP_){
var and__3596__auto__ = (function (){var G__13239 = x;
return (p1__12859_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12859_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13239) : p1__12859_SHARP_.call(null,G__13239));
})();
if(cljs.core.truth_(and__3596__auto__)){
var G__13240 = y;
return (p1__12859_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12859_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13240) : p1__12859_SHARP_.call(null,G__13240));
} else {
return and__3596__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__12860_SHARP_){
var and__3596__auto__ = (function (){var G__13242 = x;
return (p1__12860_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12860_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13242) : p1__12860_SHARP_.call(null,G__13242));
})();
if(cljs.core.truth_(and__3596__auto__)){
var and__3596__auto____$1 = (function (){var G__13244 = y;
return (p1__12860_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12860_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13244) : p1__12860_SHARP_.call(null,G__13244));
})();
if(cljs.core.truth_(and__3596__auto____$1)){
var G__13245 = z;
return (p1__12860_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12860_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13245) : p1__12860_SHARP_.call(null,G__13245));
} else {
return and__3596__auto____$1;
}
} else {
return and__3596__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__4 = (function() { 
var G__13253__delegate = function (x,y,z,args){
return cljs.core.boolean$((epn.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__12861_SHARP_){
return cljs.core.every_QMARK_(p1__12861_SHARP_,args);
});})(ps__$1))
,ps__$1)));
};
var G__13253 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13253__delegate.call(this,x,y,z,args);};
G__13253.cljs$lang$maxFixedArity = 3;
G__13253.cljs$lang$applyTo = (function (arglist__13254){
var x = cljs.core.first(arglist__13254);
arglist__13254 = cljs.core.next(arglist__13254);
var y = cljs.core.first(arglist__13254);
arglist__13254 = cljs.core.next(arglist__13254);
var z = cljs.core.first(arglist__13254);
var args = cljs.core.rest(arglist__13254);
return G__13253__delegate(x,y,z,args);
});
G__13253.cljs$core$IFn$_invoke$arity$variadic = G__13253__delegate;
return G__13253;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$core$IFn$_invoke$arity$0 = epn__0;
epn.cljs$core$IFn$_invoke$arity$1 = epn__1;
epn.cljs$core$IFn$_invoke$arity$2 = epn__2;
epn.cljs$core$IFn$_invoke$arity$3 = epn__3;
epn.cljs$core$IFn$_invoke$arity$variadic = epn__4.cljs$core$IFn$_invoke$arity$variadic;
return epn;
})()
;})(ps__$1))
};
var G__13252 = function (p1,p2,p3,var_args){
var ps = null;
if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13252__delegate.call(this,p1,p2,p3,ps);};
G__13252.cljs$lang$maxFixedArity = 3;
G__13252.cljs$lang$applyTo = (function (arglist__13255){
var p1 = cljs.core.first(arglist__13255);
arglist__13255 = cljs.core.next(arglist__13255);
var p2 = cljs.core.first(arglist__13255);
arglist__13255 = cljs.core.next(arglist__13255);
var p3 = cljs.core.first(arglist__13255);
var ps = cljs.core.rest(arglist__13255);
return G__13252__delegate(p1,p2,p3,ps);
});
G__13252.cljs$core$IFn$_invoke$arity$variadic = G__13252__delegate;
return G__13252;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$core$IFn$_invoke$arity$1 = every_pred__1;
every_pred.cljs$core$IFn$_invoke$arity$2 = every_pred__2;
every_pred.cljs$core$IFn$_invoke$arity$3 = every_pred__3;
every_pred.cljs$core$IFn$_invoke$arity$variadic = every_pred__4.cljs$core$IFn$_invoke$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
var G__13461 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13461) : p.call(null,G__13461));
});
var sp1__2 = (function (x,y){
var or__3608__auto__ = (function (){var G__13463 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13463) : p.call(null,G__13463));
})();
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
var G__13464 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13464) : p.call(null,G__13464));
}
});
var sp1__3 = (function (x,y,z){
var or__3608__auto__ = (function (){var G__13466 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13466) : p.call(null,G__13466));
})();
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (function (){var G__13468 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13468) : p.call(null,G__13468));
})();
if(cljs.core.truth_(or__3608__auto____$1)){
return or__3608__auto____$1;
} else {
var G__13469 = z;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13469) : p.call(null,G__13469));
}
}
});
var sp1__4 = (function() { 
var G__13630__delegate = function (x,y,z,args){
var or__3608__auto__ = sp1.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return cljs.core.some(p,args);
}
};
var G__13630 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13630__delegate.call(this,x,y,z,args);};
G__13630.cljs$lang$maxFixedArity = 3;
G__13630.cljs$lang$applyTo = (function (arglist__13631){
var x = cljs.core.first(arglist__13631);
arglist__13631 = cljs.core.next(arglist__13631);
var y = cljs.core.first(arglist__13631);
arglist__13631 = cljs.core.next(arglist__13631);
var z = cljs.core.first(arglist__13631);
var args = cljs.core.rest(arglist__13631);
return G__13630__delegate(x,y,z,args);
});
G__13630.cljs$core$IFn$_invoke$arity$variadic = G__13630__delegate;
return G__13630;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$core$IFn$_invoke$arity$0 = sp1__0;
sp1.cljs$core$IFn$_invoke$arity$1 = sp1__1;
sp1.cljs$core$IFn$_invoke$arity$2 = sp1__2;
sp1.cljs$core$IFn$_invoke$arity$3 = sp1__3;
sp1.cljs$core$IFn$_invoke$arity$variadic = sp1__4.cljs$core$IFn$_invoke$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3608__auto__ = (function (){var G__13501 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13501) : p1.call(null,G__13501));
})();
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
var G__13502 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13502) : p2.call(null,G__13502));
}
});
var sp2__2 = (function (x,y){
var or__3608__auto__ = (function (){var G__13504 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13504) : p1.call(null,G__13504));
})();
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (function (){var G__13506 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13506) : p1.call(null,G__13506));
})();
if(cljs.core.truth_(or__3608__auto____$1)){
return or__3608__auto____$1;
} else {
var or__3608__auto____$2 = (function (){var G__13508 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13508) : p2.call(null,G__13508));
})();
if(cljs.core.truth_(or__3608__auto____$2)){
return or__3608__auto____$2;
} else {
var G__13509 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13509) : p2.call(null,G__13509));
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3608__auto__ = (function (){var G__13511 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13511) : p1.call(null,G__13511));
})();
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (function (){var G__13513 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13513) : p1.call(null,G__13513));
})();
if(cljs.core.truth_(or__3608__auto____$1)){
return or__3608__auto____$1;
} else {
var or__3608__auto____$2 = (function (){var G__13515 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13515) : p1.call(null,G__13515));
})();
if(cljs.core.truth_(or__3608__auto____$2)){
return or__3608__auto____$2;
} else {
var or__3608__auto____$3 = (function (){var G__13517 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13517) : p2.call(null,G__13517));
})();
if(cljs.core.truth_(or__3608__auto____$3)){
return or__3608__auto____$3;
} else {
var or__3608__auto____$4 = (function (){var G__13519 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13519) : p2.call(null,G__13519));
})();
if(cljs.core.truth_(or__3608__auto____$4)){
return or__3608__auto____$4;
} else {
var G__13520 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13520) : p2.call(null,G__13520));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__13632__delegate = function (x,y,z,args){
var or__3608__auto__ = sp2.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return cljs.core.some(((function (or__3608__auto__){
return (function (p1__13256_SHARP_){
var or__3608__auto____$1 = (function (){var G__13522 = p1__13256_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13522) : p1.call(null,G__13522));
})();
if(cljs.core.truth_(or__3608__auto____$1)){
return or__3608__auto____$1;
} else {
var G__13523 = p1__13256_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13523) : p2.call(null,G__13523));
}
});})(or__3608__auto__))
,args);
}
};
var G__13632 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13632__delegate.call(this,x,y,z,args);};
G__13632.cljs$lang$maxFixedArity = 3;
G__13632.cljs$lang$applyTo = (function (arglist__13633){
var x = cljs.core.first(arglist__13633);
arglist__13633 = cljs.core.next(arglist__13633);
var y = cljs.core.first(arglist__13633);
arglist__13633 = cljs.core.next(arglist__13633);
var z = cljs.core.first(arglist__13633);
var args = cljs.core.rest(arglist__13633);
return G__13632__delegate(x,y,z,args);
});
G__13632.cljs$core$IFn$_invoke$arity$variadic = G__13632__delegate;
return G__13632;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$core$IFn$_invoke$arity$0 = sp2__0;
sp2.cljs$core$IFn$_invoke$arity$1 = sp2__1;
sp2.cljs$core$IFn$_invoke$arity$2 = sp2__2;
sp2.cljs$core$IFn$_invoke$arity$3 = sp2__3;
sp2.cljs$core$IFn$_invoke$arity$variadic = sp2__4.cljs$core$IFn$_invoke$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3608__auto__ = (function (){var G__13569 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13569) : p1.call(null,G__13569));
})();
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (function (){var G__13571 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13571) : p2.call(null,G__13571));
})();
if(cljs.core.truth_(or__3608__auto____$1)){
return or__3608__auto____$1;
} else {
var G__13572 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13572) : p3.call(null,G__13572));
}
}
});
var sp3__2 = (function (x,y){
var or__3608__auto__ = (function (){var G__13574 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13574) : p1.call(null,G__13574));
})();
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (function (){var G__13576 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13576) : p2.call(null,G__13576));
})();
if(cljs.core.truth_(or__3608__auto____$1)){
return or__3608__auto____$1;
} else {
var or__3608__auto____$2 = (function (){var G__13578 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13578) : p3.call(null,G__13578));
})();
if(cljs.core.truth_(or__3608__auto____$2)){
return or__3608__auto____$2;
} else {
var or__3608__auto____$3 = (function (){var G__13580 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13580) : p1.call(null,G__13580));
})();
if(cljs.core.truth_(or__3608__auto____$3)){
return or__3608__auto____$3;
} else {
var or__3608__auto____$4 = (function (){var G__13582 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13582) : p2.call(null,G__13582));
})();
if(cljs.core.truth_(or__3608__auto____$4)){
return or__3608__auto____$4;
} else {
var G__13583 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13583) : p3.call(null,G__13583));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3608__auto__ = (function (){var G__13585 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13585) : p1.call(null,G__13585));
})();
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (function (){var G__13587 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13587) : p2.call(null,G__13587));
})();
if(cljs.core.truth_(or__3608__auto____$1)){
return or__3608__auto____$1;
} else {
var or__3608__auto____$2 = (function (){var G__13589 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13589) : p3.call(null,G__13589));
})();
if(cljs.core.truth_(or__3608__auto____$2)){
return or__3608__auto____$2;
} else {
var or__3608__auto____$3 = (function (){var G__13591 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13591) : p1.call(null,G__13591));
})();
if(cljs.core.truth_(or__3608__auto____$3)){
return or__3608__auto____$3;
} else {
var or__3608__auto____$4 = (function (){var G__13593 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13593) : p2.call(null,G__13593));
})();
if(cljs.core.truth_(or__3608__auto____$4)){
return or__3608__auto____$4;
} else {
var or__3608__auto____$5 = (function (){var G__13595 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13595) : p3.call(null,G__13595));
})();
if(cljs.core.truth_(or__3608__auto____$5)){
return or__3608__auto____$5;
} else {
var or__3608__auto____$6 = (function (){var G__13597 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13597) : p1.call(null,G__13597));
})();
if(cljs.core.truth_(or__3608__auto____$6)){
return or__3608__auto____$6;
} else {
var or__3608__auto____$7 = (function (){var G__13599 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13599) : p2.call(null,G__13599));
})();
if(cljs.core.truth_(or__3608__auto____$7)){
return or__3608__auto____$7;
} else {
var G__13600 = z;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13600) : p3.call(null,G__13600));
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__13634__delegate = function (x,y,z,args){
var or__3608__auto__ = sp3.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return cljs.core.some(((function (or__3608__auto__){
return (function (p1__13257_SHARP_){
var or__3608__auto____$1 = (function (){var G__13602 = p1__13257_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13602) : p1.call(null,G__13602));
})();
if(cljs.core.truth_(or__3608__auto____$1)){
return or__3608__auto____$1;
} else {
var or__3608__auto____$2 = (function (){var G__13604 = p1__13257_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13604) : p2.call(null,G__13604));
})();
if(cljs.core.truth_(or__3608__auto____$2)){
return or__3608__auto____$2;
} else {
var G__13605 = p1__13257_SHARP_;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13605) : p3.call(null,G__13605));
}
}
});})(or__3608__auto__))
,args);
}
};
var G__13634 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13634__delegate.call(this,x,y,z,args);};
G__13634.cljs$lang$maxFixedArity = 3;
G__13634.cljs$lang$applyTo = (function (arglist__13635){
var x = cljs.core.first(arglist__13635);
arglist__13635 = cljs.core.next(arglist__13635);
var y = cljs.core.first(arglist__13635);
arglist__13635 = cljs.core.next(arglist__13635);
var z = cljs.core.first(arglist__13635);
var args = cljs.core.rest(arglist__13635);
return G__13634__delegate(x,y,z,args);
});
G__13634.cljs$core$IFn$_invoke$arity$variadic = G__13634__delegate;
return G__13634;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$core$IFn$_invoke$arity$0 = sp3__0;
sp3.cljs$core$IFn$_invoke$arity$1 = sp3__1;
sp3.cljs$core$IFn$_invoke$arity$2 = sp3__2;
sp3.cljs$core$IFn$_invoke$arity$3 = sp3__3;
sp3.cljs$core$IFn$_invoke$arity$variadic = sp3__4.cljs$core$IFn$_invoke$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__13636__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);
return ((function (ps__$1){
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some(((function (ps__$1){
return (function (p1__13258_SHARP_){
var G__13621 = x;
return (p1__13258_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13258_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13621) : p1__13258_SHARP_.call(null,G__13621));
});})(ps__$1))
,ps__$1);
});
var spn__2 = (function (x,y){
return cljs.core.some(((function (ps__$1){
return (function (p1__13259_SHARP_){
var or__3608__auto__ = (function (){var G__13623 = x;
return (p1__13259_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13259_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13623) : p1__13259_SHARP_.call(null,G__13623));
})();
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
var G__13624 = y;
return (p1__13259_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13259_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13624) : p1__13259_SHARP_.call(null,G__13624));
}
});})(ps__$1))
,ps__$1);
});
var spn__3 = (function (x,y,z){
return cljs.core.some(((function (ps__$1){
return (function (p1__13260_SHARP_){
var or__3608__auto__ = (function (){var G__13626 = x;
return (p1__13260_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13260_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13626) : p1__13260_SHARP_.call(null,G__13626));
})();
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (function (){var G__13628 = y;
return (p1__13260_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13260_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13628) : p1__13260_SHARP_.call(null,G__13628));
})();
if(cljs.core.truth_(or__3608__auto____$1)){
return or__3608__auto____$1;
} else {
var G__13629 = z;
return (p1__13260_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13260_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13629) : p1__13260_SHARP_.call(null,G__13629));
}
}
});})(ps__$1))
,ps__$1);
});
var spn__4 = (function() { 
var G__13637__delegate = function (x,y,z,args){
var or__3608__auto__ = spn.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return cljs.core.some(((function (or__3608__auto__,ps__$1){
return (function (p1__13261_SHARP_){
return cljs.core.some(p1__13261_SHARP_,args);
});})(or__3608__auto__,ps__$1))
,ps__$1);
}
};
var G__13637 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13637__delegate.call(this,x,y,z,args);};
G__13637.cljs$lang$maxFixedArity = 3;
G__13637.cljs$lang$applyTo = (function (arglist__13638){
var x = cljs.core.first(arglist__13638);
arglist__13638 = cljs.core.next(arglist__13638);
var y = cljs.core.first(arglist__13638);
arglist__13638 = cljs.core.next(arglist__13638);
var z = cljs.core.first(arglist__13638);
var args = cljs.core.rest(arglist__13638);
return G__13637__delegate(x,y,z,args);
});
G__13637.cljs$core$IFn$_invoke$arity$variadic = G__13637__delegate;
return G__13637;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$core$IFn$_invoke$arity$0 = spn__0;
spn.cljs$core$IFn$_invoke$arity$1 = spn__1;
spn.cljs$core$IFn$_invoke$arity$2 = spn__2;
spn.cljs$core$IFn$_invoke$arity$3 = spn__3;
spn.cljs$core$IFn$_invoke$arity$variadic = spn__4.cljs$core$IFn$_invoke$arity$variadic;
return spn;
})()
;})(ps__$1))
};
var G__13636 = function (p1,p2,p3,var_args){
var ps = null;
if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13636__delegate.call(this,p1,p2,p3,ps);};
G__13636.cljs$lang$maxFixedArity = 3;
G__13636.cljs$lang$applyTo = (function (arglist__13639){
var p1 = cljs.core.first(arglist__13639);
arglist__13639 = cljs.core.next(arglist__13639);
var p2 = cljs.core.first(arglist__13639);
arglist__13639 = cljs.core.next(arglist__13639);
var p3 = cljs.core.first(arglist__13639);
var ps = cljs.core.rest(arglist__13639);
return G__13636__delegate(p1,p2,p3,ps);
});
G__13636.cljs$core$IFn$_invoke$arity$variadic = G__13636__delegate;
return G__13636;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$core$IFn$_invoke$arity$1 = some_fn__1;
some_fn.cljs$core$IFn$_invoke$arity$2 = some_fn__2;
some_fn.cljs$core$IFn$_invoke$arity$3 = some_fn__3;
some_fn.cljs$core$IFn$_invoke$arity$variadic = some_fn__4.cljs$core$IFn$_invoke$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to
* the set of first items of each coll, followed by applying f to the
* set of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments. Returns a transducer when
* no collection is provided.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__1 = (function (f){
return (function (rf){
return (function() {
var G__13694 = null;
var G__13694__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__13694__1 = (function (result){
var G__13680 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__13680) : rf.call(null,G__13680));
});
var G__13694__2 = (function (result,input){
var G__13681 = result;
var G__13682 = (function (){var G__13683 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13683) : f.call(null,G__13683));
})();
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__13681,G__13682) : rf.call(null,G__13681,G__13682));
});
var G__13694__3 = (function() { 
var G__13695__delegate = function (result,input,inputs){
var G__13684 = result;
var G__13685 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,input,inputs);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__13684,G__13685) : rf.call(null,G__13684,G__13685));
};
var G__13695 = function (result,input,var_args){
var inputs = null;
if (arguments.length > 2) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13695__delegate.call(this,result,input,inputs);};
G__13695.cljs$lang$maxFixedArity = 2;
G__13695.cljs$lang$applyTo = (function (arglist__13696){
var result = cljs.core.first(arglist__13696);
arglist__13696 = cljs.core.next(arglist__13696);
var input = cljs.core.first(arglist__13696);
var inputs = cljs.core.rest(arglist__13696);
return G__13695__delegate(result,input,inputs);
});
G__13695.cljs$core$IFn$_invoke$arity$variadic = G__13695__delegate;
return G__13695;
})()
;
G__13694 = function(result,input,var_args){
var inputs = var_args;
switch(arguments.length){
case 0:
return G__13694__0.call(this);
case 1:
return G__13694__1.call(this,result);
case 2:
return G__13694__2.call(this,result,input);
default:
return G__13694__3.cljs$core$IFn$_invoke$arity$variadic(result,input, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13694.cljs$lang$maxFixedArity = 2;
G__13694.cljs$lang$applyTo = G__13694__3.cljs$lang$applyTo;
G__13694.cljs$core$IFn$_invoke$arity$0 = G__13694__0;
G__13694.cljs$core$IFn$_invoke$arity$1 = G__13694__1;
G__13694.cljs$core$IFn$_invoke$arity$2 = G__13694__2;
G__13694.cljs$core$IFn$_invoke$arity$variadic = G__13694__3.cljs$core$IFn$_invoke$arity$variadic;
return G__13694;
})()
});
});
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4490__auto___13697 = size;
var i_13698 = (0);
while(true){
if((i_13698 < n__4490__auto___13697)){
cljs.core.chunk_append(b,(function (){var G__13686 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_13698);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13686) : f.call(null,G__13686));
})());

var G__13699 = (i_13698 + (1));
i_13698 = G__13699;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else {
return cljs.core.cons((function (){var G__13687 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13687) : f.call(null,G__13687));
})(),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
} else {
return null;
}
}),null,null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons((function (){var G__13688 = cljs.core.first(s1);
var G__13689 = cljs.core.first(s2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13688,G__13689) : f.call(null,G__13688,G__13689));
})(),map.cljs$core$IFn$_invoke$arity$3(f,cljs.core.rest(s1),cljs.core.rest(s2)));
} else {
return null;
}
}),null,null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
var s3 = cljs.core.seq(c3);
if((s1) && (s2) && (s3)){
return cljs.core.cons((function (){var G__13690 = cljs.core.first(s1);
var G__13691 = cljs.core.first(s2);
var G__13692 = cljs.core.first(s3);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13690,G__13691,G__13692) : f.call(null,G__13690,G__13691,G__13692));
})(),map.cljs$core$IFn$_invoke$arity$4(f,cljs.core.rest(s1),cljs.core.rest(s2),cljs.core.rest(s3)));
} else {
return null;
}
}),null,null));
});
var map__5 = (function() { 
var G__13700__delegate = function (f,c1,c2,c3,colls){
var step = (function step(cs){
return (new cljs.core.LazySeq(null,(function (){
var ss = map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cs);
if(cljs.core.every_QMARK_(cljs.core.identity,ss)){
return cljs.core.cons(map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),step(map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
});
return map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (p1__13640_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,p1__13640_SHARP_);
});})(step))
,step(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))));
};
var G__13700 = function (f,c1,c2,c3,var_args){
var colls = null;
if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__13700__delegate.call(this,f,c1,c2,c3,colls);};
G__13700.cljs$lang$maxFixedArity = 4;
G__13700.cljs$lang$applyTo = (function (arglist__13701){
var f = cljs.core.first(arglist__13701);
arglist__13701 = cljs.core.next(arglist__13701);
var c1 = cljs.core.first(arglist__13701);
arglist__13701 = cljs.core.next(arglist__13701);
var c2 = cljs.core.first(arglist__13701);
arglist__13701 = cljs.core.next(arglist__13701);
var c3 = cljs.core.first(arglist__13701);
var colls = cljs.core.rest(arglist__13701);
return G__13700__delegate(f,c1,c2,c3,colls);
});
G__13700.cljs$core$IFn$_invoke$arity$variadic = G__13700__delegate;
return G__13700;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return map__1.call(this,f);
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$core$IFn$_invoke$arity$1 = map__1;
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
map.cljs$core$IFn$_invoke$arity$4 = map__4;
map.cljs$core$IFn$_invoke$arity$variadic = map__5.cljs$core$IFn$_invoke$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.  Returns a stateful transducer when
* no collection is provided.
*/
cljs.core.take = (function() {
var take = null;
var take__1 = (function (n){
return (function (rf){
var na = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);
return ((function (na){
return (function() {
var G__13710 = null;
var G__13710__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__13710__1 = (function (result){
var G__13707 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__13707) : rf.call(null,G__13707));
});
var G__13710__2 = (function (result,input){
var n__$1 = cljs.core.deref(na);
var nn = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(na,cljs.core.dec);
var result__$1 = (((n__$1 > (0)))?(function (){var G__13708 = result;
var G__13709 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__13708,G__13709) : rf.call(null,G__13708,G__13709));
})():result);
if(!((nn > (0)))){
return cljs.core.ensure_reduced(result__$1);
} else {
return result__$1;
}
});
G__13710 = function(result,input){
switch(arguments.length){
case 0:
return G__13710__0.call(this);
case 1:
return G__13710__1.call(this,result);
case 2:
return G__13710__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13710.cljs$core$IFn$_invoke$arity$0 = G__13710__0;
G__13710.cljs$core$IFn$_invoke$arity$1 = G__13710__1;
G__13710.cljs$core$IFn$_invoke$arity$2 = G__13710__2;
return G__13710;
})()
;})(na))
});
});
var take__2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
if((n > (0))){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons(cljs.core.first(s),take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.rest(s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
take = function(n,coll){
switch(arguments.length){
case 1:
return take__1.call(this,n);
case 2:
return take__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$1 = take__1;
take.cljs$core$IFn$_invoke$arity$2 = take__2;
return take;
})()
;
/**
* Returns a lazy sequence of all but the first n items in coll.
* Returns a stateful transducer when no collection is provided.
*/
cljs.core.drop = (function() {
var drop = null;
var drop__1 = (function (n){
return (function (rf){
var na = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);
return ((function (na){
return (function() {
var G__13717 = null;
var G__13717__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__13717__1 = (function (result){
var G__13714 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__13714) : rf.call(null,G__13714));
});
var G__13717__2 = (function (result,input){
var n__$1 = cljs.core.deref(na);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(na,cljs.core.dec);

if((n__$1 > (0))){
return result;
} else {
var G__13715 = result;
var G__13716 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__13715,G__13716) : rf.call(null,G__13715,G__13716));
}
});
G__13717 = function(result,input){
switch(arguments.length){
case 0:
return G__13717__0.call(this);
case 1:
return G__13717__1.call(this,result);
case 2:
return G__13717__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13717.cljs$core$IFn$_invoke$arity$0 = G__13717__0;
G__13717.cljs$core$IFn$_invoke$arity$1 = G__13717__1;
G__13717.cljs$core$IFn$_invoke$arity$2 = G__13717__2;
return G__13717;
})()
;})(na))
});
});
var drop__2 = (function (n,coll){
var step = (function (n__$1,coll__$1){
while(true){
var s = cljs.core.seq(coll__$1);
if(((n__$1 > (0))) && (s)){
var G__13718 = (n__$1 - (1));
var G__13719 = cljs.core.rest(s);
n__$1 = G__13718;
coll__$1 = G__13719;
continue;
} else {
return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,((function (step){
return (function (){
return step(n,coll);
});})(step))
,null,null));
});
drop = function(n,coll){
switch(arguments.length){
case 1:
return drop__1.call(this,n);
case 2:
return drop__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop.cljs$core$IFn$_invoke$arity$1 = drop__1;
drop.cljs$core$IFn$_invoke$arity$2 = drop__2;
return drop;
})()
;
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.cljs$core$IFn$_invoke$arity$2((1),s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,_){
return x;
}),s,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_last.cljs$core$IFn$_invoke$arity$1 = drop_last__1;
drop_last.cljs$core$IFn$_invoke$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s = cljs.core.seq(coll);
var lead = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll));
while(true){
if(lead){
var G__13722 = cljs.core.next(s);
var G__13723 = cljs.core.next(lead);
s = G__13722;
lead = G__13723;
continue;
} else {
return s;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the
* first item for which (pred item) returns logical false.  Returns a
* stateful transducer when no collection is provided.
*/
cljs.core.drop_while = (function() {
var drop_while = null;
var drop_while__1 = (function (pred){
return (function (rf){
var da = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return ((function (da){
return (function() {
var G__13736 = null;
var G__13736__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__13736__1 = (function (result){
var G__13730 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__13730) : rf.call(null,G__13730));
});
var G__13736__2 = (function (result,input){
var drop_QMARK_ = cljs.core.deref(da);
if(cljs.core.truth_((function (){var and__3596__auto__ = drop_QMARK_;
if(cljs.core.truth_(and__3596__auto__)){
var G__13731 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__13731) : pred.call(null,G__13731));
} else {
return and__3596__auto__;
}
})())){
return result;
} else {
cljs.core.reset_BANG_(da,null);

var G__13732 = result;
var G__13733 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__13732,G__13733) : rf.call(null,G__13732,G__13733));
}
});
G__13736 = function(result,input){
switch(arguments.length){
case 0:
return G__13736__0.call(this);
case 1:
return G__13736__1.call(this,result);
case 2:
return G__13736__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13736.cljs$core$IFn$_invoke$arity$0 = G__13736__0;
G__13736.cljs$core$IFn$_invoke$arity$1 = G__13736__1;
G__13736.cljs$core$IFn$_invoke$arity$2 = G__13736__2;
return G__13736;
})()
;})(da))
});
});
var drop_while__2 = (function (pred,coll){
var step = (function (pred__$1,coll__$1){
while(true){
var s = cljs.core.seq(coll__$1);
if(cljs.core.truth_((function (){var and__3596__auto__ = s;
if(and__3596__auto__){
var G__13735 = cljs.core.first(s);
return (pred__$1.cljs$core$IFn$_invoke$arity$1 ? pred__$1.cljs$core$IFn$_invoke$arity$1(G__13735) : pred__$1.call(null,G__13735));
} else {
return and__3596__auto__;
}
})())){
var G__13737 = pred__$1;
var G__13738 = cljs.core.rest(s);
pred__$1 = G__13737;
coll__$1 = G__13738;
continue;
} else {
return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,((function (step){
return (function (){
return step(pred,coll);
});})(step))
,null,null));
});
drop_while = function(pred,coll){
switch(arguments.length){
case 1:
return drop_while__1.call(this,pred);
case 2:
return drop_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_while.cljs$core$IFn$_invoke$arity$1 = drop_while__1;
drop_while.cljs$core$IFn$_invoke$arity$2 = drop_while__2;
return drop_while;
})()
;
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(s,cycle(s));
} else {
return null;
}
}),null,null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll)], null);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(x,repeat.cljs$core$IFn$_invoke$arity$1(x));
}),null,null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeat.cljs$core$IFn$_invoke$arity$1(x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$core$IFn$_invoke$arity$1 = repeat__1;
repeat.cljs$core$IFn$_invoke$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),repeatedly.cljs$core$IFn$_invoke$arity$1(f));
}),null,null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeatedly.cljs$core$IFn$_invoke$arity$1(f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeatedly.cljs$core$IFn$_invoke$arity$1 = repeatedly__1;
repeatedly.cljs$core$IFn$_invoke$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons(x,(new cljs.core.LazySeq(null,(function (){
return iterate(f,(function (){var G__13747 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13747) : f.call(null,G__13747));
})());
}),null,null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
return null;
}
}),null,null));
});
var interleave__3 = (function() { 
var G__13750__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));
if(cljs.core.every_QMARK_(cljs.core.identity,ss)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(interleave,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
};
var G__13750 = function (c1,c2,var_args){
var colls = null;
if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13750__delegate.call(this,c1,c2,colls);};
G__13750.cljs$lang$maxFixedArity = 2;
G__13750.cljs$lang$applyTo = (function (arglist__13751){
var c1 = cljs.core.first(arglist__13751);
arglist__13751 = cljs.core.next(arglist__13751);
var c2 = cljs.core.first(arglist__13751);
var colls = cljs.core.rest(arglist__13751);
return G__13750__delegate(c1,c2,colls);
});
G__13750.cljs$core$IFn$_invoke$arity$variadic = G__13750__delegate;
return G__13750;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$core$IFn$_invoke$arity$2 = interleave__2;
interleave.cljs$core$IFn$_invoke$arity$variadic = interleave__3.cljs$core$IFn$_invoke$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat = (function cat(coll,colls__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4124__auto__ = cljs.core.seq(coll);
if(temp__4124__auto__){
var coll__$1 = temp__4124__auto__;
return cljs.core.cons(cljs.core.first(coll__$1),cat(cljs.core.rest(coll__$1),colls__$1));
} else {
if(cljs.core.seq(colls__$1)){
return cat(cljs.core.first(colls__$1),cljs.core.rest(colls__$1));
} else {
return null;
}
}
}),null,null));
});
return cat(null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection. Returns
* a transducer when no collections are provided
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__1 = (function (f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cat);
});
var mapcat__2 = (function() { 
var G__13760__delegate = function (f,colls){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,colls));
};
var G__13760 = function (f,var_args){
var colls = null;
if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13760__delegate.call(this,f,colls);};
G__13760.cljs$lang$maxFixedArity = 1;
G__13760.cljs$lang$applyTo = (function (arglist__13761){
var f = cljs.core.first(arglist__13761);
var colls = cljs.core.rest(arglist__13761);
return G__13760__delegate(f,colls);
});
G__13760.cljs$core$IFn$_invoke$arity$variadic = G__13760__delegate;
return G__13760;
})()
;
mapcat = function(f,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return mapcat__1.call(this,f);
default:
return mapcat__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$lang$maxFixedArity = 1;
mapcat.cljs$lang$applyTo = mapcat__2.cljs$lang$applyTo;
mapcat.cljs$core$IFn$_invoke$arity$1 = mapcat__1;
mapcat.cljs$core$IFn$_invoke$arity$variadic = mapcat__2.cljs$core$IFn$_invoke$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.filter = (function() {
var filter = null;
var filter__1 = (function (pred){
return (function (rf){
return (function() {
var G__13780 = null;
var G__13780__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__13780__1 = (function (result){
var G__13774 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__13774) : rf.call(null,G__13774));
});
var G__13780__2 = (function (result,input){
if(cljs.core.truth_((function (){var G__13775 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__13775) : pred.call(null,G__13775));
})())){
var G__13776 = result;
var G__13777 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__13776,G__13777) : rf.call(null,G__13776,G__13777));
} else {
return result;
}
});
G__13780 = function(result,input){
switch(arguments.length){
case 0:
return G__13780__0.call(this);
case 1:
return G__13780__1.call(this,result);
case 2:
return G__13780__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13780.cljs$core$IFn$_invoke$arity$0 = G__13780__0;
G__13780.cljs$core$IFn$_invoke$arity$1 = G__13780__1;
G__13780.cljs$core$IFn$_invoke$arity$2 = G__13780__2;
return G__13780;
})()
});
});
var filter__2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4490__auto___13781 = size;
var i_13782 = (0);
while(true){
if((i_13782 < n__4490__auto___13781)){
if(cljs.core.truth_((function (){var G__13778 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_13782);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__13778) : pred.call(null,G__13778));
})())){
cljs.core.chunk_append(b,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_13782));
} else {
}

var G__13783 = (i_13782 + (1));
i_13782 = G__13783;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),filter.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.chunk_rest(s)));
} else {
var f = cljs.core.first(s);
var r = cljs.core.rest(s);
if(cljs.core.truth_((function (){var G__13779 = f;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__13779) : pred.call(null,G__13779));
})())){
return cljs.core.cons(f,filter.cljs$core$IFn$_invoke$arity$2(pred,r));
} else {
return filter.cljs$core$IFn$_invoke$arity$2(pred,r);
}
}
} else {
return null;
}
}),null,null));
});
filter = function(pred,coll){
switch(arguments.length){
case 1:
return filter__1.call(this,pred);
case 2:
return filter__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter.cljs$core$IFn$_invoke$arity$1 = filter__1;
filter.cljs$core$IFn$_invoke$arity$2 = filter__2;
return filter;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.remove = (function() {
var remove = null;
var remove__1 = (function (pred){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.complement(pred));
});
var remove__2 = (function (pred,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll);
});
remove = function(pred,coll){
switch(arguments.length){
case 1:
return remove__1.call(this,pred);
case 2:
return remove__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove.cljs$core$IFn$_invoke$arity$1 = remove__1;
remove.cljs$core$IFn$_invoke$arity$2 = remove__2;
return remove;
})()
;
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk = (function walk(node){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(node,(cljs.core.truth_((function (){var G__13790 = node;
return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__13790) : branch_QMARK_.call(null,G__13790));
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(walk,cljs.core.array_seq([(function (){var G__13791 = node;
return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__13791) : children.call(null,G__13791));
})()], 0)):null));
}),null,null));
});
return walk(root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13792_SHARP_){
return !(cljs.core.sequential_QMARK_(p1__13792_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined. A transducer may be supplied.
*/
cljs.core.into = (function() {
var into = null;
var into__2 = (function (to,from){
if(!((to == null))){
if((function (){var G__13795 = to;
if(G__13795){
var bit__4277__auto__ = (G__13795.cljs$lang$protocol_mask$partition1$ & (4));
if((bit__4277__auto__) || (G__13795.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,to,from);
}
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,from);
}
});
var into__3 = (function (to,xform,from){
if((function (){var G__13796 = to;
if(G__13796){
var bit__4277__auto__ = (G__13796.cljs$lang$protocol_mask$partition1$ & (4));
if((bit__4277__auto__) || (G__13796.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj,to,from);
}
});
into = function(to,xform,from){
switch(arguments.length){
case 2:
return into__2.call(this,to,xform);
case 3:
return into__3.call(this,to,xform,from);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into.cljs$core$IFn$_invoke$arity$2 = into__2;
into.cljs$core$IFn$_invoke$arity$3 = into__3;
return into;
})()
;
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__13798 = o;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13798) : f.call(null,G__13798));
})());
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__13799__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__13799 = function (f,c1,c2,c3,var_args){
var colls = null;
if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__13799__delegate.call(this,f,c1,c2,c3,colls);};
G__13799.cljs$lang$maxFixedArity = 4;
G__13799.cljs$lang$applyTo = (function (arglist__13800){
var f = cljs.core.first(arglist__13800);
arglist__13800 = cljs.core.next(arglist__13800);
var c1 = cljs.core.first(arglist__13800);
arglist__13800 = cljs.core.next(arglist__13800);
var c2 = cljs.core.first(arglist__13800);
arglist__13800 = cljs.core.next(arglist__13800);
var c3 = cljs.core.first(arglist__13800);
var colls = cljs.core.rest(arglist__13800);
return G__13799__delegate(f,c1,c2,c3,colls);
});
G__13799.cljs$core$IFn$_invoke$arity$variadic = G__13799__delegate;
return G__13799;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$core$IFn$_invoke$arity$2 = mapv__2;
mapv.cljs$core$IFn$_invoke$arity$3 = mapv__3;
mapv.cljs$core$IFn$_invoke$arity$4 = mapv__4;
mapv.cljs$core$IFn$_invoke$arity$variadic = mapv__5.cljs$core$IFn$_invoke$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
if(cljs.core.truth_((function (){var G__13802 = o;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__13802) : pred.call(null,G__13802));
})())){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,o);
} else {
return v;
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);
if((n === cljs.core.count(p))){
return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);
if((n === cljs.core.count(p))){
return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$4(n,step,pad,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return cljs.core._conj(cljs.core.List.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p,pad)));
}
} else {
return null;
}
}),null,null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
partition.cljs$core$IFn$_invoke$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return get_in.cljs$core$IFn$_invoke$arity$3(m,ks,null);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel = cljs.core.lookup_sentinel;
var m__$1 = m;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
if(!((function (){var G__13817 = m__$1;
if(G__13817){
var bit__4284__auto__ = (G__13817.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4284__auto__) || (G__13817.cljs$core$ILookup$)){
return true;
} else {
if((!G__13817.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__13817);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__13817);
}
})())){
return not_found;
} else {
var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.first(ks__$1),sentinel);
if((sentinel === m__$2)){
return not_found;
} else {
var G__13818 = sentinel;
var G__13819 = m__$2;
var G__13820 = cljs.core.next(ks__$1);
sentinel = G__13818;
m__$1 = G__13819;
ks__$1 = G__13820;
continue;
}
}
} else {
return m__$1;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_in.cljs$core$IFn$_invoke$arity$2 = get_in__2;
get_in.cljs$core$IFn$_invoke$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__13821,v){
var vec__13826 = p__13821;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13826,(0),null);
var ks = cljs.core.nthnext(vec__13826,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,assoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() {
var update_in = null;
var update_in__3 = (function (m,p__13827,f){
var vec__13865 = p__13827;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13865,(0),null);
var ks = cljs.core.nthnext(vec__13865,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__13866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13866) : f.call(null,G__13866));
})());
}
});
var update_in__4 = (function (m,p__13828,f,a){
var vec__13867 = p__13828;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13867,(0),null);
var ks = cljs.core.nthnext(vec__13867,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__13868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__13869 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13868,G__13869) : f.call(null,G__13868,G__13869));
})());
}
});
var update_in__5 = (function (m,p__13829,f,a,b){
var vec__13870 = p__13829;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13870,(0),null);
var ks = cljs.core.nthnext(vec__13870,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__13871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__13872 = a;
var G__13873 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13871,G__13872,G__13873) : f.call(null,G__13871,G__13872,G__13873));
})());
}
});
var update_in__6 = (function (m,p__13830,f,a,b,c){
var vec__13874 = p__13830;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13874,(0),null);
var ks = cljs.core.nthnext(vec__13874,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$6(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b,c));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__13875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__13876 = a;
var G__13877 = b;
var G__13878 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13875,G__13876,G__13877,G__13878) : f.call(null,G__13875,G__13876,G__13877,G__13878));
})());
}
});
var update_in__7 = (function() { 
var G__13880__delegate = function (m,p__13831,f,a,b,c,args){
var vec__13879 = p__13831;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13879,(0),null);
var ks = cljs.core.nthnext(vec__13879,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(update_in,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,cljs.core.array_seq([b,c,args], 0)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a,b,c,cljs.core.array_seq([args], 0)));
}
};
var G__13880 = function (m,p__13831,f,a,b,c,var_args){
var args = null;
if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__13880__delegate.call(this,m,p__13831,f,a,b,c,args);};
G__13880.cljs$lang$maxFixedArity = 6;
G__13880.cljs$lang$applyTo = (function (arglist__13881){
var m = cljs.core.first(arglist__13881);
arglist__13881 = cljs.core.next(arglist__13881);
var p__13831 = cljs.core.first(arglist__13881);
arglist__13881 = cljs.core.next(arglist__13881);
var f = cljs.core.first(arglist__13881);
arglist__13881 = cljs.core.next(arglist__13881);
var a = cljs.core.first(arglist__13881);
arglist__13881 = cljs.core.next(arglist__13881);
var b = cljs.core.first(arglist__13881);
arglist__13881 = cljs.core.next(arglist__13881);
var c = cljs.core.first(arglist__13881);
var args = cljs.core.rest(arglist__13881);
return G__13880__delegate(m,p__13831,f,a,b,c,args);
});
G__13880.cljs$core$IFn$_invoke$arity$variadic = G__13880__delegate;
return G__13880;
})()
;
update_in = function(m,p__13831,f,a,b,c,var_args){
var args = var_args;
switch(arguments.length){
case 3:
return update_in__3.call(this,m,p__13831,f);
case 4:
return update_in__4.call(this,m,p__13831,f,a);
case 5:
return update_in__5.call(this,m,p__13831,f,a,b);
case 6:
return update_in__6.call(this,m,p__13831,f,a,b,c);
default:
return update_in__7.cljs$core$IFn$_invoke$arity$variadic(m,p__13831,f,a,b,c, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_in.cljs$lang$maxFixedArity = 6;
update_in.cljs$lang$applyTo = update_in__7.cljs$lang$applyTo;
update_in.cljs$core$IFn$_invoke$arity$3 = update_in__3;
update_in.cljs$core$IFn$_invoke$arity$4 = update_in__4;
update_in.cljs$core$IFn$_invoke$arity$5 = update_in__5;
update_in.cljs$core$IFn$_invoke$arity$6 = update_in__6;
update_in.cljs$core$IFn$_invoke$arity$variadic = update_in__7.cljs$core$IFn$_invoke$arity$variadic;
return update_in;
})()
;
/**
* 'Updates' a value in an associative structure, where k is a
* key and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* structure.  If the key does not exist, nil is passed as the old value.
* @param {...*} var_args
*/
cljs.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__13892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13892) : f.call(null,G__13892));
})());
});
var update__4 = (function (m,k,f,x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__13893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__13894 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13893,G__13894) : f.call(null,G__13893,G__13894));
})());
});
var update__5 = (function (m,k,f,x,y){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__13895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__13896 = x;
var G__13897 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13895,G__13896,G__13897) : f.call(null,G__13895,G__13896,G__13897));
})());
});
var update__6 = (function (m,k,f,x,y,z){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__13898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__13899 = x;
var G__13900 = y;
var G__13901 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13898,G__13899,G__13900,G__13901) : f.call(null,G__13898,G__13899,G__13900,G__13901));
})());
});
var update__7 = (function() { 
var G__13902__delegate = function (m,k,f,x,y,z,more){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x,y,z,cljs.core.array_seq([more], 0)));
};
var G__13902 = function (m,k,f,x,y,z,var_args){
var more = null;
if (arguments.length > 6) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__13902__delegate.call(this,m,k,f,x,y,z,more);};
G__13902.cljs$lang$maxFixedArity = 6;
G__13902.cljs$lang$applyTo = (function (arglist__13903){
var m = cljs.core.first(arglist__13903);
arglist__13903 = cljs.core.next(arglist__13903);
var k = cljs.core.first(arglist__13903);
arglist__13903 = cljs.core.next(arglist__13903);
var f = cljs.core.first(arglist__13903);
arglist__13903 = cljs.core.next(arglist__13903);
var x = cljs.core.first(arglist__13903);
arglist__13903 = cljs.core.next(arglist__13903);
var y = cljs.core.first(arglist__13903);
arglist__13903 = cljs.core.next(arglist__13903);
var z = cljs.core.first(arglist__13903);
var more = cljs.core.rest(arglist__13903);
return G__13902__delegate(m,k,f,x,y,z,more);
});
G__13902.cljs$core$IFn$_invoke$arity$variadic = G__13902__delegate;
return G__13902;
})()
;
update = function(m,k,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x);
case 5:
return update__5.call(this,m,k,f,x,y);
case 6:
return update__6.call(this,m,k,f,x,y,z);
default:
return update__7.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x,y,z, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 6;
update.cljs$lang$applyTo = update__7.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$6 = update__6;
update.cljs$core$IFn$_invoke$arity$variadic = update__7.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})

cljs.core.VectorNode.cljs$lang$type = true;

cljs.core.VectorNode.cljs$lang$ctorStr = "cljs.core/VectorNode";

cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/VectorNode");
});

cljs.core.__GT_VectorNode = (function __GT_VectorNode(edit,arr){
return (new cljs.core.VectorNode(edit,arr));
});

cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone(node.arr)));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt = pv.cnt;
if((cnt < (32))){
return (0);
} else {
return (((cnt - (1)) >>> (5)) << (5));
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll = level;
var ret = node;
while(true){
if((ll === (0))){
return ret;
} else {
var embed = ret;
var r = cljs.core.pv_fresh_node(edit);
var _ = cljs.core.pv_aset(r,(0),embed);
var G__13904 = (ll - (5));
var G__13905 = r;
ll = G__13904;
ret = G__13905;
continue;
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret = cljs.core.pv_clone_node(parent);
var subidx = (((pv.cnt - (1)) >>> level) & (31));
if(((5) === level)){
cljs.core.pv_aset(ret,subidx,tailnode);

return ret;
} else {
var child = cljs.core.pv_aget(parent,subidx);
if(!((child == null))){
var node_to_insert = push_tail(pv,(level - (5)),child,tailnode);
cljs.core.pv_aset(ret,subidx,node_to_insert);

return ret;
} else {
var node_to_insert = cljs.core.new_path(null,(level - (5)),tailnode);
cljs.core.pv_aset(ret,subidx,node_to_insert);

return ret;
}
}
});
cljs.core.vector_index_out_of_bounds = (function vector_index_out_of_bounds(i,cnt){
throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(cnt)].join('')));
});
cljs.core.first_array_for_longvec = (function first_array_for_longvec(pv){
var node = pv.root;
var level = pv.shift;
while(true){
if((level > (0))){
var G__13910 = cljs.core.pv_aget(node,(0));
var G__13911 = (level - (5));
node = G__13910;
level = G__13911;
continue;
} else {
return node.arr;
}
break;
}
});
cljs.core.unchecked_array_for = (function unchecked_array_for(pv,i){
if((i >= cljs.core.tail_off(pv))){
return pv.tail;
} else {
var node = pv.root;
var level = pv.shift;
while(true){
if((level > (0))){
var G__13912 = cljs.core.pv_aget(node,((i >>> level) & (31)));
var G__13913 = (level - (5));
node = G__13912;
level = G__13913;
continue;
} else {
return node.arr;
}
break;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((((0) <= i)) && ((i < pv.cnt))){
return cljs.core.unchecked_array_for(pv,i);
} else {
return cljs.core.vector_index_out_of_bounds(i,pv.cnt);
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret = cljs.core.pv_clone_node(node);
if((level === (0))){
cljs.core.pv_aset(ret,(i & (31)),val);

return ret;
} else {
var subidx = ((i >>> level) & (31));
cljs.core.pv_aset(ret,subidx,do_assoc(pv,(level - (5)),cljs.core.pv_aget(node,subidx),i,val));

return ret;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx = (((pv.cnt - (2)) >>> level) & (31));
if((level > (5))){
var new_child = pop_tail(pv,(level - (5)),cljs.core.pv_aget(node,subidx));
if(((new_child == null)) && ((subidx === (0)))){
return null;
} else {
var ret = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret,subidx,new_child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var ret = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret,subidx,null);

return ret;

}
}
});

/**
* @constructor
*/
cljs.core.RangedIterator = (function (i,base,arr,v,start,end){
this.i = i;
this.base = base;
this.arr = arr;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.RangedIterator.prototype.hasNext = (function (){
var self__ = this;
var this$ = this;
return (self__.i < self__.end);
});

cljs.core.RangedIterator.prototype.next = (function (){
var self__ = this;
var this$ = this;
if(((self__.i - self__.base) === (32))){
self__.arr = cljs.core.unchecked_array_for(self__.v,self__.i);

self__.base = (self__.base + (32));
} else {
}

var ret = (self__.arr[(self__.i & (31))]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.RangedIterator.cljs$lang$type = true;

cljs.core.RangedIterator.cljs$lang$ctorStr = "cljs.core/RangedIterator";

cljs.core.RangedIterator.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/RangedIterator");
});

cljs.core.__GT_RangedIterator = (function __GT_RangedIterator(i,base,arr,v,start,end){
return (new cljs.core.RangedIterator(i,base,arr,v,start,end));
});

cljs.core.ranged_iterator = (function ranged_iterator(v,start,end){
var i = start;
return (new cljs.core.RangedIterator(i,(i - (i % (32))),(((start < cljs.core.count(v)))?cljs.core.unchecked_array_for(v,i):null),v,start,end));
});







/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentVector.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentVector.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var v__$1 = this;
var i = (0);
var init__$1 = init;
while(true){
if((i < self__.cnt)){
var arr = cljs.core.unchecked_array_for(v__$1,i);
var len = arr.length;
var init__$2 = (function (){var j = (0);
var init__$2 = init__$1;
while(true){
if((j < len)){
var init__$3 = (function (){var G__13923 = init__$2;
var G__13924 = (j + i);
var G__13925 = (arr[j]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13923,G__13924,G__13925) : f.call(null,G__13923,G__13924,G__13925));
})();
if(cljs.core.reduced_QMARK_(init__$3)){
return init__$3;
} else {
var G__13936 = (j + (1));
var G__13937 = init__$3;
j = G__13936;
init__$2 = G__13937;
continue;
}
} else {
return init__$2;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__13926 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13926) : cljs.core.deref.call(null,G__13926));
} else {
var G__13938 = (i + len);
var G__13939 = init__$2;
i = G__13938;
init__$1 = G__13939;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
});

cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
return (cljs.core.unchecked_array_for(coll__$1,n)[(n & (31))]);
} else {
return not_found;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
if((cljs.core.tail_off(coll__$1) <= n)){
var new_tail = cljs.core.aclone(self__.tail);
(new_tail[(n & (31))] = val);

return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else {
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljs.core.do_assoc(coll__$1,self__.shift,self__.root,n,val),self__.tail,null));
}
} else {
if((n === self__.cnt)){
return cljs.core._conj(coll__$1,val);
} else {
throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds  [0,"),cljs.core.str(self__.cnt),cljs.core.str("]")].join('')));

}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IIterable$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.ranged_iterator(this$__$1,(0),self__.cnt);
});

cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentVector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});

cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(0));
});

cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(1));
});

cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(self__.cnt - (1)));
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
} else {
if(((1) < (self__.cnt - cljs.core.tail_off(coll__$1)))){
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt - (1)),self__.shift,self__.root,self__.tail.slice((0),(-1)),null));
} else {
var new_tail = cljs.core.unchecked_array_for(coll__$1,(self__.cnt - (2)));
var nr = cljs.core.pop_tail(coll__$1,self__.shift,self__.root);
var new_root = (((nr == null))?cljs.core.PersistentVector.EMPTY_NODE:nr);
var cnt_1 = (self__.cnt - (1));
if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null))){
return (new cljs.core.PersistentVector(self__.meta,cnt_1,(self__.shift - (5)),cljs.core.pv_aget(new_root,(0)),new_tail,null));
} else {
return (new cljs.core.PersistentVector(self__.meta,cnt_1,self__.shift,new_root,new_tail,null));
}

}
}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return (new cljs.core.RSeq(coll__$1,(self__.cnt - (1)),null));
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
if((other instanceof cljs.core.PersistentVector)){
if((self__.cnt === cljs.core.count(other))){
var me_iter = cljs.core._iterator(coll__$1);
var you_iter = cljs.core._iterator(other);
while(true){
if(cljs.core.truth_(me_iter.hasNext())){
var x = me_iter.next();
var y = you_iter.next();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return cljs.core.equiv_sequential(coll__$1,other);
}
});

cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientVector(self__.cnt,self__.shift,(function (){var G__13927 = self__.root;
return (cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1(G__13927) : cljs.core.tv_editable_root.call(null,G__13927));
})(),(function (){var G__13928 = self__.tail;
return (cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1(G__13928) : cljs.core.tv_editable_tail.call(null,G__13928));
})()));
});

cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var self__ = this;
var v__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(v__$1,f);
});

cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var v__$1 = this;
var i = (0);
var init__$1 = init;
while(true){
if((i < self__.cnt)){
var arr = cljs.core.unchecked_array_for(v__$1,i);
var len = arr.length;
var init__$2 = (function (){var j = (0);
var init__$2 = init__$1;
while(true){
if((j < len)){
var init__$3 = (function (){var G__13929 = init__$2;
var G__13930 = (arr[j]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13929,G__13930) : f.call(null,G__13929,G__13930));
})();
if(cljs.core.reduced_QMARK_(init__$3)){
return init__$3;
} else {
var G__13940 = (j + (1));
var G__13941 = init__$3;
j = G__13940;
init__$2 = G__13941;
continue;
}
} else {
return init__$2;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__13931 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13931) : cljs.core.deref.call(null,G__13931));
} else {
var G__13942 = (i + len);
var G__13943 = init__$2;
i = G__13942;
init__$1 = G__13943;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._assoc_n(coll__$1,k,v);
} else {
throw (new Error("Vector's key for assoc must be a number."));
}
});

cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt === (0))){
return null;
} else {
if((self__.cnt <= (32))){
return (new cljs.core.IndexedSeq(self__.tail,(0)));
} else {
var G__13932 = coll__$1;
var G__13933 = cljs.core.first_array_for_longvec(coll__$1);
var G__13934 = (0);
var G__13935 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__13932,G__13933,G__13934,G__13935) : cljs.core.chunked_seq.call(null,G__13932,G__13933,G__13934,G__13935));

}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});

cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
if(((self__.cnt - cljs.core.tail_off(coll__$1)) < (32))){
var len = self__.tail.length;
var new_tail = (new Array((len + (1))));
var n__4490__auto___13944 = len;
var i_13945 = (0);
while(true){
if((i_13945 < n__4490__auto___13944)){
(new_tail[i_13945] = (self__.tail[i_13945]));

var G__13946 = (i_13945 + (1));
i_13945 = G__13946;
continue;
} else {
}
break;
}

(new_tail[len] = o);

return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),self__.shift,self__.root,new_tail,null));
} else {
var root_overflow_QMARK_ = ((self__.cnt >>> (5)) > ((1) << self__.shift));
var new_shift = ((root_overflow_QMARK_)?(self__.shift + (5)):self__.shift);
var new_root = ((root_overflow_QMARK_)?(function (){var n_r = cljs.core.pv_fresh_node(null);
cljs.core.pv_aset(n_r,(0),self__.root);

cljs.core.pv_aset(n_r,(1),cljs.core.new_path(null,self__.shift,(new cljs.core.VectorNode(null,self__.tail))));

return n_r;
})():cljs.core.push_tail(coll__$1,self__.shift,self__.root,(new cljs.core.VectorNode(null,self__.tail))));
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),new_shift,new_root,[o],null));
}
});

cljs.core.PersistentVector.prototype.call = (function() {
var G__13947 = null;
var G__13947__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__13947__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__13947 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__13947__2.call(this,self__,k);
case 3:
return G__13947__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13947.cljs$core$IFn$_invoke$arity$2 = G__13947__2;
G__13947.cljs$core$IFn$_invoke$arity$3 = G__13947__3;
return G__13947;
})()
;

cljs.core.PersistentVector.prototype.apply = (function (self__,args13922){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args13922)));
});

cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});

cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});

cljs.core.PersistentVector.cljs$lang$type = true;

cljs.core.PersistentVector.cljs$lang$ctorStr = "cljs.core/PersistentVector";

cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/PersistentVector");
});

cljs.core.__GT_PersistentVector = (function __GT_PersistentVector(meta,cnt,shift,root,tail,__hash){
return (new cljs.core.PersistentVector(meta,cnt,shift,root,tail,__hash));
});

cljs.core.PersistentVector.EMPTY_NODE = (new cljs.core.VectorNode(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,(0),(5),cljs.core.PersistentVector.EMPTY_NODE,[],(0)));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l = xs.length;
var xs__$1 = ((no_clone)?xs:cljs.core.aclone(xs));
if((l < (32))){
return (new cljs.core.PersistentVector(null,l,(5),cljs.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else {
var node = xs__$1.slice((0),(32));
var v = (new cljs.core.PersistentVector(null,(32),(5),cljs.core.PersistentVector.EMPTY_NODE,node,null));
var i = (32);
var out = v.cljs$core$IEditableCollection$_as_transient$arity$1(null);
while(true){
if((i < l)){
var G__13948 = (i + (1));
var G__13949 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(xs__$1[i]));
i = G__13948;
out = G__13949;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
}
});
(cljs.core.PersistentVector.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core._as_transient(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
if(((args instanceof cljs.core.IndexedSeq)) && ((args.i === (0)))){
return cljs.core.PersistentVector.fromArray(args.arr,true);
} else {
return cljs.core.vec(args);
}
};
var vector = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this,args);};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__13950){
var args = cljs.core.seq(arglist__13950);
return vector__delegate(args);
});
vector.cljs$core$IFn$_invoke$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375020;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ChunkedSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__13951 = self__.vec;
var G__13952 = self__.node;
var G__13953 = self__.i;
var G__13954 = (self__.off + (1));
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__13951,G__13952,G__13953,G__13954) : cljs.core.chunked_seq.call(null,G__13951,G__13952,G__13953,G__13954));
})();
if((s == null)){
return null;
} else {
return s;
}
} else {
return cljs.core._chunked_next(coll__$1);
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2((function (){var G__13955 = self__.vec;
var G__13956 = (self__.i + self__.off);
var G__13957 = cljs.core.count(self__.vec);
return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__13955,G__13956,G__13957) : cljs.core.subvec.call(null,G__13955,G__13956,G__13957));
})(),f);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3((function (){var G__13958 = self__.vec;
var G__13959 = (self__.i + self__.off);
var G__13960 = cljs.core.count(self__.vec);
return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__13958,G__13959,G__13960) : cljs.core.subvec.call(null,G__13958,G__13959,G__13960));
})(),f,start);
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.node[self__.off]);
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__13961 = self__.vec;
var G__13962 = self__.node;
var G__13963 = self__.i;
var G__13964 = (self__.off + (1));
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__13961,G__13962,G__13963,G__13964) : cljs.core.chunked_seq.call(null,G__13961,G__13962,G__13963,G__13964));
})();
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
} else {
return cljs.core._chunked_rest(coll__$1);
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$2(self__.node,self__.off);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var end = (self__.i + self__.node.length);
if((end < cljs.core._count(self__.vec))){
var G__13965 = self__.vec;
var G__13966 = cljs.core.unchecked_array_for(self__.vec,end);
var G__13967 = end;
var G__13968 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__13965,G__13966,G__13967,G__13968) : cljs.core.chunked_seq.call(null,G__13965,G__13966,G__13967,G__13968));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
var G__13969 = self__.vec;
var G__13970 = self__.node;
var G__13971 = self__.i;
var G__13972 = self__.off;
var G__13973 = m;
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5(G__13969,G__13970,G__13971,G__13972,G__13973) : cljs.core.chunked_seq.call(null,G__13969,G__13970,G__13971,G__13972,G__13973));
});

cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var end = (self__.i + self__.node.length);
if((end < cljs.core._count(self__.vec))){
var G__13974 = self__.vec;
var G__13975 = cljs.core.unchecked_array_for(self__.vec,end);
var G__13976 = end;
var G__13977 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__13974,G__13975,G__13976,G__13977) : cljs.core.chunked_seq.call(null,G__13974,G__13975,G__13976,G__13977));
} else {
return null;
}
});

cljs.core.ChunkedSeq.cljs$lang$type = true;

cljs.core.ChunkedSeq.cljs$lang$ctorStr = "cljs.core/ChunkedSeq";

cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/ChunkedSeq");
});

cljs.core.__GT_ChunkedSeq = (function __GT_ChunkedSeq(vec,node,i,off,meta,__hash){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,__hash));
});

(cljs.core.ChunkedSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return (new cljs.core.ChunkedSeq(vec,cljs.core.array_for(vec,i),i,off,null,null));
});
var chunked_seq__4 = (function (vec,node,i,off){
return (new cljs.core.ChunkedSeq(vec,node,i,off,null,null));
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chunked_seq.cljs$core$IFn$_invoke$arity$3 = chunked_seq__3;
chunked_seq.cljs$core$IFn$_invoke$arity$4 = chunked_seq__4;
chunked_seq.cljs$core$IFn$_invoke$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 166617887;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Subvec.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Subvec.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
if(((n < (0))) || ((self__.end <= (self__.start + n)))){
return cljs.core.vector_index_out_of_bounds(n,(self__.end - self__.start));
} else {
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.start + n));
}
});

cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if(((n < (0))) || ((self__.end <= (self__.start + n)))){
return not_found;
} else {
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.v,(self__.start + n),not_found);
}
});

cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
var coll__$1 = this;
var v_pos = (self__.start + n);
var G__13979 = self__.meta;
var G__13980 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.v,v_pos,val);
var G__13981 = self__.start;
var G__13982 = (function (){var x__3920__auto__ = self__.end;
var y__3921__auto__ = (v_pos + (1));
return ((x__3920__auto__ > y__3921__auto__) ? x__3920__auto__ : y__3921__auto__);
})();
var G__13983 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__13979,G__13980,G__13981,G__13982,G__13983) : cljs.core.build_subvec.call(null,G__13979,G__13980,G__13981,G__13982,G__13983));
});

cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.Subvec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Subvec(self__.meta,self__.v,self__.start,self__.end,self__.__hash));
});

cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.end - self__.start);
});

cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.end - (1)));
});

cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.start === self__.end)){
throw (new Error("Can't pop empty vector"));
} else {
var G__13984 = self__.meta;
var G__13985 = self__.v;
var G__13986 = self__.start;
var G__13987 = (self__.end - (1));
var G__13988 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__13984,G__13985,G__13986,G__13987,G__13988) : cljs.core.build_subvec.call(null,G__13984,G__13985,G__13986,G__13987,G__13988));
}
});

cljs.core.Subvec.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(!((self__.start === self__.end))){
return (new cljs.core.RSeq(coll__$1,((self__.end - self__.start) - (1)),null));
} else {
return null;
}
});

cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(coll__$1,f);
});

cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(coll__$1,f,start__$1);
});

cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var self__ = this;
var coll__$1 = this;
if(typeof key === 'number'){
return cljs.core._assoc_n(coll__$1,key,val);
} else {
throw (new Error("Subvec's key for assoc must be a number."));
}
});

cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var subvec_seq = ((function (coll__$1){
return (function subvec_seq(i){
if((i === self__.end)){
return null;
} else {
return cljs.core.cons(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,i),(new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
return subvec_seq((i + (1)));
});})(coll__$1))
,null,null)));
}
});})(coll__$1))
;
return subvec_seq(self__.start);
});

cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
var G__13990 = meta__$1;
var G__13991 = self__.v;
var G__13992 = self__.start;
var G__13993 = self__.end;
var G__13994 = self__.__hash;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__13990,G__13991,G__13992,G__13993,G__13994) : cljs.core.build_subvec.call(null,G__13990,G__13991,G__13992,G__13993,G__13994));
});

cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var G__13995 = self__.meta;
var G__13996 = cljs.core._assoc_n(self__.v,self__.end,o);
var G__13997 = self__.start;
var G__13998 = (self__.end + (1));
var G__13999 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__13995,G__13996,G__13997,G__13998,G__13999) : cljs.core.build_subvec.call(null,G__13995,G__13996,G__13997,G__13998,G__13999));
});

cljs.core.Subvec.prototype.call = (function() {
var G__14000 = null;
var G__14000__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__14000__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__14000 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14000__2.call(this,self__,k);
case 3:
return G__14000__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14000.cljs$core$IFn$_invoke$arity$2 = G__14000__2;
G__14000.cljs$core$IFn$_invoke$arity$3 = G__14000__3;
return G__14000;
})()
;

cljs.core.Subvec.prototype.apply = (function (self__,args13978){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args13978)));
});

cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});

cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});

cljs.core.Subvec.cljs$lang$type = true;

cljs.core.Subvec.cljs$lang$ctorStr = "cljs.core/Subvec";

cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/Subvec");
});

cljs.core.__GT_Subvec = (function __GT_Subvec(meta,v,start,end,__hash){
return (new cljs.core.Subvec(meta,v,start,end,__hash));
});

(cljs.core.Subvec.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));
cljs.core.build_subvec = (function build_subvec(meta,v,start,end,__hash){
while(true){
if((v instanceof cljs.core.Subvec)){
var G__14001 = meta;
var G__14002 = v.v;
var G__14003 = (v.start + start);
var G__14004 = (v.start + end);
var G__14005 = __hash;
meta = G__14001;
v = G__14002;
start = G__14003;
end = G__14004;
__hash = G__14005;
continue;
} else {
var c = cljs.core.count(v);
if(((start < (0))) || ((end < (0))) || ((start > c)) || ((end > c))){
throw (new Error("Index out of bounds"));
} else {
}

return (new cljs.core.Subvec(meta,v,start,end,__hash));
}
break;
}
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.cljs$core$IFn$_invoke$arity$3(v,start,cljs.core.count(v));
});
var subvec__3 = (function (v,start,end){
return cljs.core.build_subvec(null,v,start,end,null);
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$core$IFn$_invoke$arity$2 = subvec__2;
subvec.cljs$core$IFn$_invoke$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit)){
return node;
} else {
return (new cljs.core.VectorNode(edit,cljs.core.aclone(node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode((function (){var obj14012 = {};
return obj14012;
})(),cljs.core.aclone(node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tl,(0),ret,(0),tl.length);

return ret;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret = cljs.core.tv_ensure_editable(tv.root.edit,parent);
var subidx = (((tv.cnt - (1)) >>> level) & (31));
cljs.core.pv_aset(ret,subidx,(((level === (5)))?tail_node:(function (){var child = cljs.core.pv_aget(ret,subidx);
if(!((child == null))){
return tv_push_tail(tv,(level - (5)),child,tail_node);
} else {
return cljs.core.new_path(tv.root.edit,(level - (5)),tail_node);
}
})()));

return ret;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__$1 = cljs.core.tv_ensure_editable(tv.root.edit,node);
var subidx = (((tv.cnt - (2)) >>> level) & (31));
if((level > (5))){
var new_child = tv_pop_tail(tv,(level - (5)),cljs.core.pv_aget(node__$1,subidx));
if(((new_child == null)) && ((subidx === (0)))){
return null;
} else {
cljs.core.pv_aset(node__$1,subidx,new_child);

return node__$1;
}
} else {
if((subidx === (0))){
return null;
} else {
cljs.core.pv_aset(node__$1,subidx,null);

return node__$1;

}
}
});
cljs.core.unchecked_editable_array_for = (function unchecked_editable_array_for(tv,i){
if((i >= cljs.core.tail_off(tv))){
return tv.tail;
} else {
var root = tv.root;
var node = root;
var level = tv.shift;
while(true){
if((level > (0))){
var G__14020 = cljs.core.tv_ensure_editable(root.edit,cljs.core.pv_aget(node,((i >>> level) & (31))));
var G__14021 = (level - (5));
node = G__14020;
level = G__14021;
continue;
} else {
return node.arr;
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.prototype.call = (function() {
var G__14025 = null;
var G__14025__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14025__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14025 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14025__2.call(this,self__,k);
case 3:
return G__14025__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14025.cljs$core$IFn$_invoke$arity$2 = G__14025__2;
G__14025.cljs$core$IFn$_invoke$arity$3 = G__14025__3;
return G__14025;
})()
;

cljs.core.TransientVector.prototype.apply = (function (self__,args14022){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14022)));
});

cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
if(self__.root.edit){
return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
} else {
throw (new Error("nth after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
} else {
return not_found;
}
});

cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(self__.root.edit){
return self__.cnt;
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if((((0) <= n)) && ((n < self__.cnt))){
if((cljs.core.tail_off(tcoll__$1) <= n)){
(self__.tail[(n & (31))] = val);

return tcoll__$1;
} else {
var new_root = ((function (tcoll__$1){
return (function go(level,node){
var node__$1 = cljs.core.tv_ensure_editable(self__.root.edit,node);
if((level === (0))){
cljs.core.pv_aset(node__$1,(n & (31)),val);

return node__$1;
} else {
var subidx = ((n >>> level) & (31));
cljs.core.pv_aset(node__$1,subidx,go((level - (5)),cljs.core.pv_aget(node__$1,subidx)));

return node__$1;
}
});})(tcoll__$1))
.call(null,self__.shift,self__.root);
self__.root = new_root;

return tcoll__$1;
}
} else {
if((n === self__.cnt)){
return cljs.core._conj_BANG_(tcoll__$1,val);
} else {
throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(self__.cnt)].join('')));

}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
self__.cnt = (0);

return tcoll__$1;
} else {
if((((self__.cnt - (1)) & (31)) > (0))){
self__.cnt = (self__.cnt - (1));

return tcoll__$1;
} else {
var new_tail = cljs.core.unchecked_editable_array_for(tcoll__$1,(self__.cnt - (2)));
var new_root = (function (){var nr = cljs.core.tv_pop_tail(tcoll__$1,self__.shift,self__.root);
if(!((nr == null))){
return nr;
} else {
return (new cljs.core.VectorNode(self__.root.edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
}
})();
if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null))){
var new_root__$1 = cljs.core.tv_ensure_editable(self__.root.edit,cljs.core.pv_aget(new_root,(0)));
self__.root = new_root__$1;

self__.shift = (self__.shift - (5));

self__.cnt = (self__.cnt - (1));

self__.tail = new_tail;

return tcoll__$1;
} else {
self__.root = new_root;

self__.cnt = (self__.cnt - (1));

self__.tail = new_tail;

return tcoll__$1;
}

}
}
}
} else {
throw (new Error("pop! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
if(typeof key === 'number'){
return cljs.core._assoc_n_BANG_(tcoll__$1,key,val);
} else {
throw (new Error("TransientVector's key for assoc! must be a number."));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if(((self__.cnt - cljs.core.tail_off(tcoll__$1)) < (32))){
(self__.tail[(self__.cnt & (31))] = o);

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
} else {
var tail_node = (new cljs.core.VectorNode(self__.root.edit,self__.tail));
var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_tail[(0)] = o);

self__.tail = new_tail;

if(((self__.cnt >>> (5)) > ((1) << self__.shift))){
var new_root_array = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_shift = (self__.shift + (5));
(new_root_array[(0)] = self__.root);

(new_root_array[(1)] = cljs.core.new_path(self__.root.edit,self__.shift,tail_node));

self__.root = (new cljs.core.VectorNode(self__.root.edit,new_root_array));

self__.shift = new_shift;

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
} else {
var new_root = cljs.core.tv_push_tail(tcoll__$1,self__.shift,self__.root,tail_node);
self__.root = new_root;

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
self__.root.edit = null;

var len = (self__.cnt - cljs.core.tail_off(tcoll__$1));
var trimmed_tail = (new Array(len));
cljs.core.array_copy(self__.tail,(0),trimmed_tail,(0),len);

return (new cljs.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientVector.cljs$lang$type = true;

cljs.core.TransientVector.cljs$lang$ctorStr = "cljs.core/TransientVector";

cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/TransientVector");
});

cljs.core.__GT_TransientVector = (function __GT_TransientVector(cnt,shift,root,tail){
return (new cljs.core.TransientVector(cnt,shift,root,tail));
});


/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentQueueSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var temp__4124__auto__ = cljs.core.next(self__.front);
if(temp__4124__auto__){
var f1 = temp__4124__auto__;
return (new cljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else {
if((self__.rear == null)){
return cljs.core._empty(coll__$1);
} else {
return (new cljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentQueueSeq.cljs$lang$type = true;

cljs.core.PersistentQueueSeq.cljs$lang$ctorStr = "cljs.core/PersistentQueueSeq";

cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/PersistentQueueSeq");
});

cljs.core.__GT_PersistentQueueSeq = (function __GT_PersistentQueueSeq(meta,front,rear,__hash){
return (new cljs.core.PersistentQueueSeq(meta,front,rear,__hash));
});

(cljs.core.PersistentQueueSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentQueue.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentQueue.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentQueue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueue(self__.meta,self__.count,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.count;
});

cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.front)){
var temp__4124__auto__ = cljs.core.next(self__.front);
if(temp__4124__auto__){
var f1 = temp__4124__auto__;
return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),f1,self__.rear,null));
} else {
return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),cljs.core.seq(self__.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else {
return coll__$1;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.PersistentQueue.EMPTY;
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.rest(cljs.core.seq(coll__$1));
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var rear__$1 = cljs.core.seq(self__.rear);
if(cljs.core.truth_((function (){var or__3608__auto__ = self__.front;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return rear__$1;
}
})())){
return (new cljs.core.PersistentQueueSeq(null,self__.front,cljs.core.seq(rear__$1),null));
} else {
return null;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.front)){
return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),self__.front,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3608__auto__ = self__.rear;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else {
return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});

cljs.core.PersistentQueue.cljs$lang$type = true;

cljs.core.PersistentQueue.cljs$lang$ctorStr = "cljs.core/PersistentQueue";

cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/PersistentQueue");
});

cljs.core.__GT_PersistentQueue = (function __GT_PersistentQueue(meta,count,front,rear,__hash){
return (new cljs.core.PersistentQueue(meta,count,front,rear,__hash));
});

cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,(0),null,cljs.core.PersistentVector.EMPTY,(0)));
(cljs.core.PersistentQueue.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return false;
});

cljs.core.NeverEquiv.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.NeverEquiv.cljs$lang$type = true;

cljs.core.NeverEquiv.cljs$lang$ctorStr = "cljs.core/NeverEquiv";

cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/NeverEquiv");
});

cljs.core.__GT_NeverEquiv = (function __GT_NeverEquiv(){
return (new cljs.core.NeverEquiv());
});

cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$(((cljs.core.map_QMARK_(y))?(((cljs.core.count(x) === cljs.core.count(y)))?cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xkv){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(y,cljs.core.first(xkv),cljs.core.never_equiv),cljs.core.second(xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len = array.length;
var i = (0);
while(true){
if((i < len)){
if((k === (array[i]))){
return i;
} else {
var G__14026 = (i + incr);
i = G__14026;
continue;
}
} else {
return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__$1 = cljs.core.hash(a);
var b__$1 = cljs.core.hash(b);
if((a__$1 < b__$1)){
return (-1);
} else {
if((a__$1 > b__$1)){
return (1);
} else {
return (0);

}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks = m.keys;
var len = ks.length;
var so = m.strobj;
var mm = cljs.core.meta(m);
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len)){
var k__$1 = (ks[i]);
var G__14027 = (i + (1));
var G__14028 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k__$1,(so[k__$1]));
i = G__14027;
out = G__14028;
continue;
} else {
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k,v)),mm);
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj = (function (){var obj14032 = {};
return obj14032;
})();
var l = ks.length;
var i_14033 = (0);
while(true){
if((i_14033 < l)){
var k_14034 = (ks[i_14033]);
(new_obj[k_14034] = (obj[k_14034]));

var G__14035 = (i_14033 + (1));
i_14033 = G__14035;
continue;
} else {
}
break;
}

return new_obj;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 4;
})
cljs.core.ObjMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ObjMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var and__3596__auto__ = (function (){var G__14039 = k;
return goog.isString(G__14039);
})();
if(cljs.core.truth_(and__3596__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3596__auto__;
}
})())){
return (self__.strobj[k]);
} else {
return not_found;
}
});

cljs.core.ObjMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var len = self__.keys.length;
var keys__$1 = self__.keys.sort(cljs.core.obj_map_compare_keys);
var init__$1 = init;
while(true){
if(cljs.core.seq(keys__$1)){
var k = cljs.core.first(keys__$1);
var init__$2 = (function (){var G__14040 = init__$1;
var G__14041 = k;
var G__14042 = (self__.strobj[k]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14040,G__14041,G__14042) : f.call(null,G__14040,G__14041,G__14042));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__14043 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14043) : cljs.core.deref.call(null,G__14043));
} else {
var G__14049 = cljs.core.rest(keys__$1);
var G__14050 = init__$2;
keys__$1 = G__14049;
init__$1 = G__14050;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.keys.length;
});

cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.transient$(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1));
});

cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.ObjMap.EMPTY,self__.meta);
});

cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var and__3596__auto__ = (function (){var G__14045 = k;
return goog.isString(G__14045);
})();
if(cljs.core.truth_(and__3596__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3596__auto__;
}
})())){
var new_keys = cljs.core.aclone(self__.keys);
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
new_keys.splice(cljs.core.scan_array((1),k,new_keys),(1));

delete new_strobj[k];

return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
} else {
return coll__$1;
}
});

cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var G__14046 = k;
return goog.isString(G__14046);
})())){
if(((self__.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD)) || ((self__.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD))){
return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
} else {
if(!((cljs.core.scan_array((1),k,self__.keys) == null))){
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
(new_strobj[k] = v);

return (new cljs.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + (1)),null));
} else {
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
var new_keys = cljs.core.aclone(self__.keys);
(new_strobj[k] = v);

new_keys.push(k);

return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
}
}
} else {
return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
}
});

cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var and__3596__auto__ = (function (){var G__14048 = k;
return goog.isString(G__14048);
})();
if(cljs.core.truth_(and__3596__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3596__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.keys.length > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (coll__$1){
return (function (p1__14036_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__14036_SHARP_,(self__.strobj[p1__14036_SHARP_])],null));
});})(coll__$1))
,self__.keys.sort(cljs.core.obj_map_compare_keys));
} else {
return null;
}
});

cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});

cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,coll__$1,entry);
}
});

cljs.core.ObjMap.prototype.call = (function() {
var G__14051 = null;
var G__14051__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14051__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14051 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14051__2.call(this,self__,k);
case 3:
return G__14051__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14051.cljs$core$IFn$_invoke$arity$2 = G__14051__2;
G__14051.cljs$core$IFn$_invoke$arity$3 = G__14051__3;
return G__14051;
})()
;

cljs.core.ObjMap.prototype.apply = (function (self__,args14037){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14037)));
});

cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.ObjMap.cljs$lang$type = true;

cljs.core.ObjMap.cljs$lang$ctorStr = "cljs.core/ObjMap";

cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/ObjMap");
});

cljs.core.__GT_ObjMap = (function __GT_ObjMap(meta,keys,strobj,update_count,__hash){
return (new cljs.core.ObjMap(meta,keys,strobj,update_count,__hash));
});

cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],(function (){var obj14053 = {};
return obj14053;
})(),(0),(0)));
cljs.core.ObjMap.HASHMAP_THRESHOLD = (8);
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,(0),null));
});

/**
* @constructor
*/
cljs.core.ES6EntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6EntriesIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var vec__14054 = cljs.core.first(self__.s);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14054,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14054,(1),null);
self__.s = cljs.core.next(self__.s);

return {"done": false, "value": [k,v]};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6EntriesIterator.cljs$lang$type = true;

cljs.core.ES6EntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6EntriesIterator";

cljs.core.ES6EntriesIterator.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/ES6EntriesIterator");
});

cljs.core.__GT_ES6EntriesIterator = (function __GT_ES6EntriesIterator(s){
return (new cljs.core.ES6EntriesIterator(s));
});

cljs.core.es6_entries_iterator = (function es6_entries_iterator(coll){
return (new cljs.core.ES6EntriesIterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6SetEntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6SetEntriesIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var x = cljs.core.first(self__.s);
self__.s = cljs.core.next(self__.s);

return {"done": false, "value": [x,x]};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6SetEntriesIterator.cljs$lang$type = true;

cljs.core.ES6SetEntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6SetEntriesIterator";

cljs.core.ES6SetEntriesIterator.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/ES6SetEntriesIterator");
});

cljs.core.__GT_ES6SetEntriesIterator = (function __GT_ES6SetEntriesIterator(s){
return (new cljs.core.ES6SetEntriesIterator(s));
});

cljs.core.es6_set_entries_iterator = (function es6_set_entries_iterator(coll){
return (new cljs.core.ES6SetEntriesIterator(cljs.core.seq(coll)));
});
cljs.core.array_map_index_of_nil_QMARK_ = (function array_map_index_of_nil_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if(((arr[i]) == null)){
return i;
} else {
var G__14055 = (i + (2));
i = G__14055;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_keyword_QMARK_ = (function array_map_index_of_keyword_QMARK_(arr,m,k){
var len = arr.length;
var kstr = k.fqn;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((function (){var k_SINGLEQUOTE_ = (arr[i]);
return ((k_SINGLEQUOTE_ instanceof cljs.core.Keyword)) && ((kstr === k_SINGLEQUOTE_.fqn));
})()){
return i;
} else {
var G__14056 = (i + (2));
i = G__14056;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_symbol_QMARK_ = (function array_map_index_of_symbol_QMARK_(arr,m,k){
var len = arr.length;
var kstr = k.str;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((function (){var k_SINGLEQUOTE_ = (arr[i]);
return ((k_SINGLEQUOTE_ instanceof cljs.core.Symbol)) && ((kstr === k_SINGLEQUOTE_.str));
})()){
return i;
} else {
var G__14057 = (i + (2));
i = G__14057;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_identical_QMARK_ = (function array_map_index_of_identical_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((k === (arr[i]))){
return i;
} else {
var G__14058 = (i + (2));
i = G__14058;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_equiv_QMARK_ = (function array_map_index_of_equiv_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(arr[i]))){
return i;
} else {
var G__14059 = (i + (2));
i = G__14059;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr = m.arr;
if((k instanceof cljs.core.Keyword)){
return cljs.core.array_map_index_of_keyword_QMARK_(arr,m,k);
} else {
if(cljs.core.truth_((function (){var or__3608__auto__ = (function (){var G__14063 = k;
return goog.isString(G__14063);
})();
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return typeof k === 'number';
}
})())){
return cljs.core.array_map_index_of_identical_QMARK_(arr,m,k);
} else {
if((k instanceof cljs.core.Symbol)){
return cljs.core.array_map_index_of_symbol_QMARK_(arr,m,k);
} else {
if((k == null)){
return cljs.core.array_map_index_of_nil_QMARK_(arr,m,k);
} else {
return cljs.core.array_map_index_of_equiv_QMARK_(arr,m,k);

}
}
}
}
});
cljs.core.array_map_extend_kv = (function array_map_extend_kv(m,k,v){
var arr = m.arr;
var l = arr.length;
var narr = (new Array((l + (2))));
var i_14064 = (0);
while(true){
if((i_14064 < l)){
(narr[i_14064] = (arr[i_14064]));

var G__14065 = (i_14064 + (1));
i_14064 = G__14065;
continue;
} else {
}
break;
}

(narr[l] = k);

(narr[(l + (1))] = v);

return narr;
});

/**
* @constructor
*/
cljs.core.PersistentArrayMapSeq = (function (arr,i,_meta){
this.arr = arr;
this.i = i;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
})
cljs.core.PersistentArrayMapSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentArrayMapSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i < (self__.arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else {
return null;
}
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return ((self__.arr.length - self__.i) / (2));
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i < (self__.arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentArrayMapSeq(self__.arr,self__.i,new_meta));
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentArrayMapSeq.cljs$lang$type = true;

cljs.core.PersistentArrayMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapSeq";

cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/PersistentArrayMapSeq");
});

cljs.core.__GT_PersistentArrayMapSeq = (function __GT_PersistentArrayMapSeq(arr,i,_meta){
return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
});

(cljs.core.PersistentArrayMapSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));
cljs.core.persistent_array_map_seq = (function persistent_array_map_seq(arr,i,_meta){
if((i <= (arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
} else {
return null;
}
});


/**
* @constructor
*/
cljs.core.PersistentArrayMapIterator = (function (arr,i,cnt){
this.arr = arr;
this.i = i;
this.cnt = cnt;
})
cljs.core.PersistentArrayMapIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.cnt);
});

cljs.core.PersistentArrayMapIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
self__.i = (self__.i + (2));

return ret;
});

cljs.core.PersistentArrayMapIterator.cljs$lang$type = true;

cljs.core.PersistentArrayMapIterator.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapIterator";

cljs.core.PersistentArrayMapIterator.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/PersistentArrayMapIterator");
});

cljs.core.__GT_PersistentArrayMapIterator = (function __GT_PersistentArrayMapIterator(arr,i,cnt){
return (new cljs.core.PersistentArrayMapIterator(arr,i,cnt));
});


/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16647951;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentArrayMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentArrayMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__14067 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__14067) : cljs.core.keys.call(null,G__14067));
})());
});

cljs.core.PersistentArrayMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentArrayMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__14068 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__14068) : cljs.core.vals.call(null,G__14068));
})());
});

cljs.core.PersistentArrayMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentArrayMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentArrayMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__14069 = cljs.core.seq(coll);
var chunk__14070 = null;
var count__14071 = (0);
var i__14072 = (0);
while(true){
if((i__14072 < count__14071)){
var vec__14073 = chunk__14070.cljs$core$IIndexed$_nth$arity$2(null,i__14072);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14073,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14073,(1),null);
var G__14074_14087 = v;
var G__14075_14088 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14074_14087,G__14075_14088) : f.call(null,G__14074_14087,G__14075_14088));

var G__14089 = seq__14069;
var G__14090 = chunk__14070;
var G__14091 = count__14071;
var G__14092 = (i__14072 + (1));
seq__14069 = G__14089;
chunk__14070 = G__14090;
count__14071 = G__14091;
i__14072 = G__14092;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__14069);
if(temp__4126__auto__){
var seq__14069__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14069__$1)){
var c__4390__auto__ = cljs.core.chunk_first(seq__14069__$1);
var G__14093 = cljs.core.chunk_rest(seq__14069__$1);
var G__14094 = c__4390__auto__;
var G__14095 = cljs.core.count(c__4390__auto__);
var G__14096 = (0);
seq__14069 = G__14093;
chunk__14070 = G__14094;
count__14071 = G__14095;
i__14072 = G__14096;
continue;
} else {
var vec__14076 = cljs.core.first(seq__14069__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14076,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14076,(1),null);
var G__14077_14097 = v;
var G__14078_14098 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14077_14097,G__14078_14098) : f.call(null,G__14077_14097,G__14078_14098));

var G__14099 = cljs.core.next(seq__14069__$1);
var G__14100 = null;
var G__14101 = (0);
var G__14102 = (0);
seq__14069 = G__14099;
chunk__14070 = G__14100;
count__14071 = G__14101;
i__14072 = G__14102;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx === (-1))){
return not_found;
} else {
return (self__.arr[(idx + (1))]);
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var len = self__.arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var init__$2 = (function (){var G__14079 = init__$1;
var G__14080 = (self__.arr[i]);
var G__14081 = (self__.arr[(i + (1))]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14079,G__14080,G__14081) : f.call(null,G__14079,G__14080,G__14081));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__14082 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14082) : cljs.core.deref.call(null,G__14082));
} else {
var G__14103 = (i + (2));
var G__14104 = init__$2;
i = G__14103;
init__$1 = G__14104;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$ = true;

cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.PersistentArrayMapIterator(self__.arr,(0),(self__.cnt * (2))));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,self__.arr,self__.__hash));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
if((function (){var G__14083 = other;
if(G__14083){
var bit__4277__auto__ = (G__14083.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__4277__auto__) || (G__14083.cljs$core$IMap$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
var alen = self__.arr.length;
var other__$1 = other;
if((self__.cnt === other__$1.cljs$core$ICounted$_count$arity$1(null))){
var i = (0);
while(true){
if((i < alen)){
var v = other__$1.cljs$core$ILookup$_lookup$arity$3(null,(self__.arr[i]),cljs.core.lookup_sentinel);
if(!((v === cljs.core.lookup_sentinel))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[(i + (1))]),v)){
var G__14105 = (i + (2));
i = G__14105;
continue;
} else {
return false;
}
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return cljs.core.equiv_map(coll__$1,other);
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientArrayMap((function (){var obj14085 = {};
return obj14085;
})(),self__.arr.length,cljs.core.aclone(self__.arr)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta(cljs.core.PersistentArrayMap.EMPTY,self__.meta);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx >= (0))){
var len = self__.arr.length;
var new_len = (len - (2));
if((new_len === (0))){
return cljs.core._empty(coll__$1);
} else {
var new_arr = (new Array(new_len));
var s = (0);
var d = (0);
while(true){
if((s >= len)){
return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt - (1)),new_arr,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(self__.arr[s]))){
var G__14106 = (s + (2));
var G__14107 = d;
s = G__14106;
d = G__14107;
continue;
} else {
(new_arr[d] = (self__.arr[s]));

(new_arr[(d + (1))] = (self__.arr[(s + (1))]));

var G__14108 = (s + (2));
var G__14109 = (d + (2));
s = G__14108;
d = G__14109;
continue;

}
}
break;
}
}
} else {
return coll__$1;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx === (-1))){
if((self__.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)){
var arr__$1 = cljs.core.array_map_extend_kv(coll__$1,k,v);
return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt + (1)),arr__$1,null));
} else {
return cljs.core._with_meta(cljs.core._assoc(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1),k,v),self__.meta);
}
} else {
if((v === (self__.arr[(idx + (1))]))){
return coll__$1;
} else {
var arr__$1 = (function (){var G__14086 = cljs.core.aclone(self__.arr);
(G__14086[(idx + (1))] = v);

return G__14086;
})();
return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,arr__$1,null));

}
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return !((cljs.core.array_map_index_of(coll__$1,k) === (-1)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.persistent_array_map_seq(self__.arr,(0),null);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__14110 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__14111 = cljs.core.next(es);
ret = G__14110;
es = G__14111;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__14112 = null;
var G__14112__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14112__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14112 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14112__2.call(this,self__,k);
case 3:
return G__14112__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14112.cljs$core$IFn$_invoke$arity$2 = G__14112__2;
G__14112.cljs$core$IFn$_invoke$arity$3 = G__14112__3;
return G__14112;
})()
;

cljs.core.PersistentArrayMap.prototype.apply = (function (self__,args14066){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14066)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentArrayMap.cljs$lang$type = true;

cljs.core.PersistentArrayMap.cljs$lang$ctorStr = "cljs.core/PersistentArrayMap";

cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/PersistentArrayMap");
});

cljs.core.__GT_PersistentArrayMap = (function __GT_PersistentArrayMap(meta,cnt,arr,__hash){
return (new cljs.core.PersistentArrayMap(meta,cnt,arr,__hash));
});

cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,(0),[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = (8);
cljs.core.PersistentArrayMap.fromArray = (function (arr,no_clone,no_check){
var arr__$1 = ((no_clone)?arr:cljs.core.aclone(arr));
if(no_check){
var cnt = (arr__$1.length / (2));
return (new cljs.core.PersistentArrayMap(null,cnt,arr__$1,null));
} else {
var len = arr__$1.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len)){
var G__14113 = (i + (2));
var G__14114 = cljs.core._assoc_BANG_(ret,(arr__$1[i]),(arr__$1[(i + (1))]));
i = G__14113;
ret = G__14114;
continue;
} else {
return cljs.core._persistent_BANG_(ret);
}
break;
}
}
});
(cljs.core.PersistentArrayMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,key);
if((idx >= (0))){
(self__.arr[idx] = (self__.arr[(self__.len - (2))]));

(self__.arr[(idx + (1))] = (self__.arr[(self__.len - (1))]));

var G__14115_14123 = self__.arr;
G__14115_14123.pop();

G__14115_14123.pop();


self__.len = (self__.len - (2));
} else {
}

return tcoll__$1;
} else {
throw (new Error("dissoc! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,key);
if((idx === (-1))){
if(((self__.len + (2)) <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))){
self__.len = (self__.len + (2));

self__.arr.push(key);

self__.arr.push(val);

return tcoll__$1;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var G__14116 = self__.len;
var G__14117 = self__.arr;
return (cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2 ? cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2(G__14116,G__14117) : cljs.core.array__GT_transient_hash_map.call(null,G__14116,G__14117));
})(),key,val);
}
} else {
if((val === (self__.arr[(idx + (1))]))){
return tcoll__$1;
} else {
(self__.arr[(idx + (1))] = val);

return tcoll__$1;
}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
if((function (){var G__14118 = o;
if(G__14118){
var bit__4284__auto__ = (G__14118.cljs$lang$protocol_mask$partition0$ & (2048));
if((bit__4284__auto__) || (G__14118.cljs$core$IMapEntry$)){
return true;
} else {
if((!G__14118.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__14118);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__14118);
}
})()){
return cljs.core._assoc_BANG_(tcoll__$1,(function (){var G__14119 = o;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__14119) : cljs.core.key.call(null,G__14119));
})(),(function (){var G__14120 = o;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__14120) : cljs.core.val.call(null,G__14120));
})());
} else {
var es = cljs.core.seq(o);
var tcoll__$2 = tcoll__$1;
while(true){
var temp__4124__auto__ = cljs.core.first(es);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
var G__14124 = cljs.core.next(es);
var G__14125 = cljs.core._assoc_BANG_(tcoll__$2,(function (){var G__14121 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__14121) : cljs.core.key.call(null,G__14121));
})(),(function (){var G__14122 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__14122) : cljs.core.val.call(null,G__14122));
})());
es = G__14124;
tcoll__$2 = G__14125;
continue;
} else {
return tcoll__$2;
}
break;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
self__.editable_QMARK_ = false;

return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(self__.len,(2)),self__.arr,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
var tcoll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,k,null);
});

cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,k);
if((idx === (-1))){
return not_found;
} else {
return (self__.arr[(idx + (1))]);
}
} else {
throw (new Error("lookup after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
return cljs.core.quot(self__.len,(2));
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientArrayMap.cljs$lang$type = true;

cljs.core.TransientArrayMap.cljs$lang$ctorStr = "cljs.core/TransientArrayMap";

cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/TransientArrayMap");
});

cljs.core.__GT_TransientArrayMap = (function __GT_TransientArrayMap(editable_QMARK_,len,arr){
return (new cljs.core.TransientArrayMap(editable_QMARK_,len,arr));
});


cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
var i = (0);
while(true){
if((i < len)){
var G__14126 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,(arr[i]),(arr[(i + (1))]));
var G__14127 = (i + (2));
out = G__14126;
i = G__14127;
continue;
} else {
return out;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})

cljs.core.Box.cljs$lang$type = true;

cljs.core.Box.cljs$lang$ctorStr = "cljs.core/Box";

cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/Box");
});

cljs.core.__GT_Box = (function __GT_Box(val){
return (new cljs.core.Box(val));
});






cljs.core.key_test = (function key_test(key,other){
if((key === other)){
return true;
} else {
if(cljs.core.keyword_identical_QMARK_(key,other)){
return true;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,other);

}
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & (31));
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__14130 = cljs.core.aclone(arr);
(G__14130[i] = a);

return G__14130;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__14131 = cljs.core.aclone(arr);
(G__14131[i] = a);

(G__14131[j] = b);

return G__14131;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_and_set.cljs$core$IFn$_invoke$arity$3 = clone_and_set__3;
clone_and_set.cljs$core$IFn$_invoke$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr = (new Array((arr.length - (2))));
cljs.core.array_copy(arr,(0),new_arr,(0),((2) * i));

cljs.core.array_copy(arr,((2) * (i + (1))),new_arr,((2) * i),(new_arr.length - ((2) * i)));

return new_arr;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count((bitmap & (bit - (1))));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return ((1) << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);

return editable;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);

(editable.arr[j] = b);

return editable;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edit_and_set.cljs$core$IFn$_invoke$arity$4 = edit_and_set__4;
edit_and_set.cljs$core$IFn$_invoke$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len = arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var init__$2 = (function (){var k = (arr[i]);
if(!((k == null))){
var G__14136 = init__$1;
var G__14137 = k;
var G__14138 = (arr[(i + (1))]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14136,G__14137,G__14138) : f.call(null,G__14136,G__14137,G__14138));
} else {
var node = (arr[(i + (1))]);
if(!((node == null))){
return node.kv_reduce(f,init__$1);
} else {
return init__$1;
}
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__14139 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14139) : cljs.core.deref.call(null,G__14139));
} else {
var G__14140 = (i + (2));
var G__14141 = init__$2;
i = G__14140;
init__$1 = G__14141;
continue;
}
} else {
return init__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
var n = cljs.core.bit_count(self__.bitmap);
var new_arr = (new Array((((n < (0)))?(4):((2) * (n + (1))))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * n));

return (new cljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});

cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return inode;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
if(!((n == null))){
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
} else {
if((self__.bitmap === bit)){
return null;
} else {
return inode.edit_and_remove_pair(edit__$1,bit,idx);

}
}
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
(removed_leaf_QMARK_[(0)] = true);

return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else {
return inode;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var self__ = this;
var inode = this;
if((self__.bitmap === bit)){
return null;
} else {
var editable = inode.ensure_editable(e);
var earr = editable.arr;
var len = earr.length;
editable.bitmap = (bit ^ editable.bitmap);

cljs.core.array_copy(earr,((2) * (i + (1))),earr,((2) * i),(len - ((2) * (i + (1)))));

(earr[(len - (2))] = null);

(earr[(len - (1))] = null);

return editable;
}
});

cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
var G__14142 = self__.arr;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__14142) : cljs.core.create_inode_seq.call(null,G__14142));
});

cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce(self__.arr,f,init);
});

cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return not_found;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
return val_or_node.inode_lookup((shift + (5)),hash,key,not_found);
} else {
if(cljs.core.key_test(key,key_or_nil)){
return val_or_node;
} else {
return not_found;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
if(((self__.bitmap & bit) === (0))){
var n = cljs.core.bit_count(self__.bitmap);
if((((2) * n) < self__.arr.length)){
var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
added_leaf_QMARK_.val = true;

cljs.core.array_copy_downward(earr,((2) * idx),earr,((2) * (idx + (1))),((2) * (n - idx)));

(earr[((2) * idx)] = key);

(earr[(((2) * idx) + (1))] = val);

editable.bitmap = (editable.bitmap | bit);

return editable;
} else {
if((n >= (16))){
var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));

var i_14156 = (0);
var j_14157 = (0);
while(true){
if((i_14156 < (32))){
if((((self__.bitmap >>> i_14156) & (1)) === (0))){
var G__14158 = (i_14156 + (1));
var G__14159 = j_14157;
i_14156 = G__14158;
j_14157 = G__14159;
continue;
} else {
(nodes[i_14156] = ((!(((self__.arr[j_14157]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),cljs.core.hash((self__.arr[j_14157])),(self__.arr[j_14157]),(self__.arr[(j_14157 + (1))]),added_leaf_QMARK_):(self__.arr[(j_14157 + (1))])));

var G__14160 = (i_14156 + (1));
var G__14161 = (j_14157 + (2));
i_14156 = G__14160;
j_14157 = G__14161;
continue;
}
} else {
}
break;
}

return (new cljs.core.ArrayNode(edit__$1,(n + (1)),nodes));
} else {
var new_arr = (new Array(((2) * (n + (4)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));

(new_arr[((2) * idx)] = key);

(new_arr[(((2) * idx) + (1))] = val);

cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));

added_leaf_QMARK_.val = true;

var editable = inode.ensure_editable(edit__$1);
editable.arr = new_arr;

editable.bitmap = (editable.bitmap | bit);

return editable;

}
}
} else {
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
if((val === val_or_node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),val);
}
} else {
added_leaf_QMARK_.val = true;

return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__14143 = edit__$1;
var G__14144 = (shift + (5));
var G__14145 = key_or_nil;
var G__14146 = val_or_node;
var G__14147 = hash;
var G__14148 = key;
var G__14149 = val;
return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$7 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$7(G__14143,G__14144,G__14145,G__14146,G__14147,G__14148,G__14149) : cljs.core.create_node.call(null,G__14143,G__14144,G__14145,G__14146,G__14147,G__14148,G__14149));
})());

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
if(((self__.bitmap & bit) === (0))){
var n = cljs.core.bit_count(self__.bitmap);
if((n >= (16))){
var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_));

var i_14162 = (0);
var j_14163 = (0);
while(true){
if((i_14162 < (32))){
if((((self__.bitmap >>> i_14162) & (1)) === (0))){
var G__14164 = (i_14162 + (1));
var G__14165 = j_14163;
i_14162 = G__14164;
j_14163 = G__14165;
continue;
} else {
(nodes[i_14162] = ((!(((self__.arr[j_14163]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),cljs.core.hash((self__.arr[j_14163])),(self__.arr[j_14163]),(self__.arr[(j_14163 + (1))]),added_leaf_QMARK_):(self__.arr[(j_14163 + (1))])));

var G__14166 = (i_14162 + (1));
var G__14167 = (j_14163 + (2));
i_14162 = G__14166;
j_14163 = G__14167;
continue;
}
} else {
}
break;
}

return (new cljs.core.ArrayNode(null,(n + (1)),nodes));
} else {
var new_arr = (new Array(((2) * (n + (1)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));

(new_arr[((2) * idx)] = key);

(new_arr[(((2) * idx) + (1))] = val);

cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));

added_leaf_QMARK_.val = true;

return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else {
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
if((val === val_or_node)){
return inode;
} else {
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),val)));
}
} else {
added_leaf_QMARK_.val = true;

return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$5(self__.arr,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__14150 = (shift + (5));
var G__14151 = key_or_nil;
var G__14152 = val_or_node;
var G__14153 = hash;
var G__14154 = key;
var G__14155 = val;
return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$6 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$6(G__14150,G__14151,G__14152,G__14153,G__14154,G__14155) : cljs.core.create_node.call(null,G__14150,G__14151,G__14152,G__14153,G__14154,G__14155));
})())));

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return not_found;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
return val_or_node.inode_find((shift + (5)),hash,key,not_found);
} else {
if(cljs.core.key_test(key,key_or_nil)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_nil,val_or_node], null);
} else {
return not_found;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return inode;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_without((shift + (5)),hash,key);
if((n === val_or_node)){
return inode;
} else {
if(!((n == null))){
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
} else {
if((self__.bitmap === bit)){
return null;
} else {
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));

}
}
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));
} else {
return inode;

}
}
}
});

cljs.core.BitmapIndexedNode.cljs$lang$type = true;

cljs.core.BitmapIndexedNode.cljs$lang$ctorStr = "cljs.core/BitmapIndexedNode";

cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/BitmapIndexedNode");
});

cljs.core.__GT_BitmapIndexedNode = (function __GT_BitmapIndexedNode(edit,bitmap,arr){
return (new cljs.core.BitmapIndexedNode(edit,bitmap,arr));
});

cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,(0),[]));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr = array_node.arr;
var len = arr.length;
var new_arr = (new Array(((2) * (array_node.cnt - (1)))));
var i = (0);
var j = (1);
var bitmap = (0);
while(true){
if((i < len)){
if((!((i === idx))) && (!(((arr[i]) == null)))){
(new_arr[j] = (arr[i]));

var G__14168 = (i + (1));
var G__14169 = (j + (2));
var G__14170 = (bitmap | ((1) << i));
i = G__14168;
j = G__14169;
bitmap = G__14170;
continue;
} else {
var G__14171 = (i + (1));
var G__14172 = j;
var G__14173 = bitmap;
i = G__14171;
j = G__14172;
bitmap = G__14173;
continue;
}
} else {
return (new cljs.core.BitmapIndexedNode(edit,bitmap,new_arr));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
return (new cljs.core.ArrayNode(e,self__.cnt,cljs.core.aclone(self__.arr)));
}
});

cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
return inode;
} else {
var n = node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);
if((n === node)){
return inode;
} else {
if((n == null)){
if((self__.cnt <= (8))){
return cljs.core.pack_array_node(inode,edit__$1,idx);
} else {
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
editable.cnt = (editable.cnt - (1));

return editable;
}
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);

}
}
}
});

cljs.core.ArrayNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
var G__14174 = self__.arr;
return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1(G__14174) : cljs.core.create_array_node_seq.call(null,G__14174));
});

cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
var len = self__.arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var node = (self__.arr[i]);
if(!((node == null))){
var init__$2 = node.kv_reduce(f,init__$1);
if(cljs.core.reduced_QMARK_(init__$2)){
var G__14175 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14175) : cljs.core.deref.call(null,G__14175));
} else {
var G__14176 = (i + (1));
var G__14177 = init__$2;
i = G__14176;
init__$1 = G__14177;
continue;
}
} else {
var G__14178 = (i + (1));
var G__14179 = init__$1;
i = G__14178;
init__$1 = G__14179;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
return node.inode_lookup((shift + (5)),hash,key,not_found);
} else {
return not_found;
}
});

cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));
editable.cnt = (editable.cnt + (1));

return editable;
} else {
var n = node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
}
}
});

cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
return (new cljs.core.ArrayNode(null,(self__.cnt + (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_))));
} else {
var n = node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === node)){
return inode;
} else {
return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
}
});

cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
return node.inode_find((shift + (5)),hash,key,not_found);
} else {
return not_found;
}
});

cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
var n = node.inode_without((shift + (5)),hash,key);
if((n === node)){
return inode;
} else {
if((n == null)){
if((self__.cnt <= (8))){
return cljs.core.pack_array_node(inode,null,idx);
} else {
return (new cljs.core.ArrayNode(null,(self__.cnt - (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
} else {
return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));

}
}
} else {
return inode;
}
});

cljs.core.ArrayNode.cljs$lang$type = true;

cljs.core.ArrayNode.cljs$lang$ctorStr = "cljs.core/ArrayNode";

cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/ArrayNode");
});

cljs.core.__GT_ArrayNode = (function __GT_ArrayNode(edit,cnt,arr){
return (new cljs.core.ArrayNode(edit,cnt,arr));
});

cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim = ((2) * cnt);
var i = (0);
while(true){
if((i < lim)){
if(cljs.core.key_test(key,(arr[i]))){
return i;
} else {
var G__14180 = (i + (2));
i = G__14180;
continue;
}
} else {
return (-1);
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
var new_arr = (new Array(((2) * (self__.cnt + (1)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * self__.cnt));

return (new cljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});

cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
return inode;
} else {
(removed_leaf_QMARK_[(0)] = true);

if((self__.cnt === (1))){
return null;
} else {
var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
(earr[idx] = (earr[(((2) * self__.cnt) - (2))]));

(earr[(idx + (1))] = (earr[(((2) * self__.cnt) - (1))]));

(earr[(((2) * self__.cnt) - (1))] = null);

(earr[(((2) * self__.cnt) - (2))] = null);

editable.cnt = (editable.cnt - (1));

return editable;
}
}
});

cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
var G__14181 = self__.arr;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__14181) : cljs.core.create_inode_seq.call(null,G__14181));
});

cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce(self__.arr,f,init);
});

cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx < (0))){
return not_found;
} else {
if(cljs.core.key_test(key,(self__.arr[idx]))){
return (self__.arr[(idx + (1))]);
} else {
return not_found;

}
}
});

cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash)){
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
if((self__.arr.length > ((2) * self__.cnt))){
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * self__.cnt),key,(((2) * self__.cnt) + (1)),val);
added_leaf_QMARK_.val = true;

editable.cnt = (editable.cnt + (1));

return editable;
} else {
var len = self__.arr.length;
var new_arr = (new Array((len + (2))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);

(new_arr[len] = key);

(new_arr[(len + (1))] = val);

added_leaf_QMARK_.val = true;

return inode.ensure_editable_array(edit__$1,(self__.cnt + (1)),new_arr);
}
} else {
if(((self__.arr[(idx + (1))]) === val)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(idx + (1)),val);
}
}
} else {
return (new cljs.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});

cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash)){
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
var len = ((2) * self__.cnt);
var new_arr = (new Array((len + (2))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);

(new_arr[len] = key);

(new_arr[(len + (1))] = val);

added_leaf_QMARK_.val = true;

return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + (1)),new_arr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[idx]),val)){
return inode;
} else {
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(idx + (1)),val)));
}
}
} else {
return (new cljs.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});

cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var self__ = this;
var inode = this;
if((e === self__.edit)){
self__.arr = array;

self__.cnt = count;

return inode;
} else {
return (new cljs.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array));
}
});

cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx < (0))){
return not_found;
} else {
if(cljs.core.key_test(key,(self__.arr[idx]))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[idx]),(self__.arr[(idx + (1))])], null);
} else {
return not_found;

}
}
});

cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
return inode;
} else {
if((self__.cnt === (1))){
return null;
} else {
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - (1)),cljs.core.remove_pair(self__.arr,cljs.core.quot(idx,(2)))));

}
}
});

cljs.core.HashCollisionNode.cljs$lang$type = true;

cljs.core.HashCollisionNode.cljs$lang$ctorStr = "cljs.core/HashCollisionNode";

cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/HashCollisionNode");
});

cljs.core.__GT_HashCollisionNode = (function __GT_HashCollisionNode(edit,collision_hash,cnt,arr){
return (new cljs.core.HashCollisionNode(edit,collision_hash,cnt,arr));
});

cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash(key1);
if((key1hash === key2hash)){
return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash(key1);
if((key1hash === key2hash)){
return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_node.cljs$core$IFn$_invoke$arity$6 = create_node__6;
create_node.cljs$core$IFn$_invoke$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.NodeSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.NodeSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.s == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nodes[self__.i]),(self__.nodes[(self__.i + (1))])], null);
} else {
return cljs.core.first(self__.s);
}
});

cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.s == null)){
var G__14182 = self__.nodes;
var G__14183 = (self__.i + (2));
var G__14184 = null;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__14182,G__14183,G__14184) : cljs.core.create_inode_seq.call(null,G__14182,G__14183,G__14184));
} else {
var G__14185 = self__.nodes;
var G__14186 = self__.i;
var G__14187 = cljs.core.next(self__.s);
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__14185,G__14186,G__14187) : cljs.core.create_inode_seq.call(null,G__14185,G__14186,G__14187));
}
});

cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});

cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.NodeSeq.cljs$lang$type = true;

cljs.core.NodeSeq.cljs$lang$ctorStr = "cljs.core/NodeSeq";

cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/NodeSeq");
});

cljs.core.__GT_NodeSeq = (function __GT_NodeSeq(meta,nodes,i,s,__hash){
return (new cljs.core.NodeSeq(meta,nodes,i,s,__hash));
});

(cljs.core.NodeSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.cljs$core$IFn$_invoke$arity$3(nodes,(0),null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null)){
var len = nodes.length;
var j = i;
while(true){
if((j < len)){
if(!(((nodes[j]) == null))){
return (new cljs.core.NodeSeq(null,nodes,j,null,null));
} else {
var temp__4124__auto__ = (nodes[(j + (1))]);
if(cljs.core.truth_(temp__4124__auto__)){
var node = temp__4124__auto__;
var temp__4124__auto____$1 = node.inode_seq();
if(cljs.core.truth_(temp__4124__auto____$1)){
var node_seq = temp__4124__auto____$1;
return (new cljs.core.NodeSeq(null,nodes,(j + (2)),node_seq,null));
} else {
var G__14191 = (j + (2));
j = G__14191;
continue;
}
} else {
var G__14192 = (j + (2));
j = G__14192;
continue;
}
}
} else {
return null;
}
break;
}
} else {
return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_inode_seq.cljs$core$IFn$_invoke$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$core$IFn$_invoke$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ArrayNodeSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.s);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var G__14193 = null;
var G__14194 = self__.nodes;
var G__14195 = self__.i;
var G__14196 = cljs.core.next(self__.s);
return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4(G__14193,G__14194,G__14195,G__14196) : cljs.core.create_array_node_seq.call(null,G__14193,G__14194,G__14195,G__14196));
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ArrayNodeSeq.cljs$lang$type = true;

cljs.core.ArrayNodeSeq.cljs$lang$ctorStr = "cljs.core/ArrayNodeSeq";

cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/ArrayNodeSeq");
});

cljs.core.__GT_ArrayNodeSeq = (function __GT_ArrayNodeSeq(meta,nodes,i,s,__hash){
return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,__hash));
});

(cljs.core.ArrayNodeSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.cljs$core$IFn$_invoke$arity$4(null,nodes,(0),null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null)){
var len = nodes.length;
var j = i;
while(true){
if((j < len)){
var temp__4124__auto__ = (nodes[j]);
if(cljs.core.truth_(temp__4124__auto__)){
var nj = temp__4124__auto__;
var temp__4124__auto____$1 = nj.inode_seq();
if(cljs.core.truth_(temp__4124__auto____$1)){
var ns = temp__4124__auto____$1;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j + (1)),ns,null));
} else {
var G__14201 = (j + (1));
j = G__14201;
continue;
}
} else {
var G__14202 = (j + (1));
j = G__14202;
continue;
}
} else {
return null;
}
break;
}
} else {
return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_array_node_seq.cljs$core$IFn$_invoke$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$core$IFn$_invoke$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentHashMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentHashMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__14204 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__14204) : cljs.core.keys.call(null,G__14204));
})());
});

cljs.core.PersistentHashMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__14205 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__14205) : cljs.core.vals.call(null,G__14205));
})());
});

cljs.core.PersistentHashMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentHashMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__14206 = cljs.core.seq(coll);
var chunk__14207 = null;
var count__14208 = (0);
var i__14209 = (0);
while(true){
if((i__14209 < count__14208)){
var vec__14210 = chunk__14207.cljs$core$IIndexed$_nth$arity$2(null,i__14209);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14210,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14210,(1),null);
var G__14211_14222 = v;
var G__14212_14223 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14211_14222,G__14212_14223) : f.call(null,G__14211_14222,G__14212_14223));

var G__14224 = seq__14206;
var G__14225 = chunk__14207;
var G__14226 = count__14208;
var G__14227 = (i__14209 + (1));
seq__14206 = G__14224;
chunk__14207 = G__14225;
count__14208 = G__14226;
i__14209 = G__14227;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__14206);
if(temp__4126__auto__){
var seq__14206__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14206__$1)){
var c__4390__auto__ = cljs.core.chunk_first(seq__14206__$1);
var G__14228 = cljs.core.chunk_rest(seq__14206__$1);
var G__14229 = c__4390__auto__;
var G__14230 = cljs.core.count(c__4390__auto__);
var G__14231 = (0);
seq__14206 = G__14228;
chunk__14207 = G__14229;
count__14208 = G__14230;
i__14209 = G__14231;
continue;
} else {
var vec__14213 = cljs.core.first(seq__14206__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14213,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14213,(1),null);
var G__14214_14232 = v;
var G__14215_14233 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14214_14232,G__14215_14233) : f.call(null,G__14214_14232,G__14215_14233));

var G__14234 = cljs.core.next(seq__14206__$1);
var G__14235 = null;
var G__14236 = (0);
var G__14237 = (0);
seq__14206 = G__14234;
chunk__14207 = G__14235;
count__14208 = G__14236;
i__14209 = G__14237;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return not_found;
}
} else {
if((self__.root == null)){
return not_found;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var init__$1 = ((self__.has_nil_QMARK_)?(function (){var G__14216 = init;
var G__14217 = null;
var G__14218 = self__.nil_val;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14216,G__14217,G__14218) : f.call(null,G__14216,G__14217,G__14218));
})():init);
if(cljs.core.reduced_QMARK_(init__$1)){
var G__14219 = init__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14219) : cljs.core.deref.call(null,G__14219));
} else {
if(!((self__.root == null))){
return self__.root.kv_reduce(f,init__$1);
} else {
return init__$1;

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentHashMap(self__.meta,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientHashMap((function (){var obj14221 = {};
return obj14221;
})(),self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta(cljs.core.PersistentHashMap.EMPTY,self__.meta);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),self__.root,false,null,null));
} else {
return coll__$1;
}
} else {
if((self__.root == null)){
return coll__$1;
} else {
var new_root = self__.root.inode_without((0),cljs.core.hash(k),k);
if((new_root === self__.root)){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if((self__.has_nil_QMARK_) && ((v === self__.nil_val))){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,((self__.has_nil_QMARK_)?self__.cnt:(self__.cnt + (1))),self__.root,true,v,null));
}
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
var new_root = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc((0),cljs.core.hash(k),k,v,added_leaf_QMARK_);
if((new_root === self__.root)){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + (1)):self__.cnt),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((k == null)){
return self__.has_nil_QMARK_;
} else {
if((self__.root == null)){
return false;
} else {
return !((self__.root.inode_lookup((0),cljs.core.hash(k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
var s = ((!((self__.root == null)))?self__.root.inode_seq():null);
if(self__.has_nil_QMARK_){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,self__.nil_val], null),s);
} else {
return s;
}
} else {
return null;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__14238 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__14239 = cljs.core.next(es);
ret = G__14238;
es = G__14239;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentHashMap.prototype.call = (function() {
var G__14240 = null;
var G__14240__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14240__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14240 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14240__2.call(this,self__,k);
case 3:
return G__14240__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14240.cljs$core$IFn$_invoke$arity$2 = G__14240__2;
G__14240.cljs$core$IFn$_invoke$arity$3 = G__14240__3;
return G__14240;
})()
;

cljs.core.PersistentHashMap.prototype.apply = (function (self__,args14203){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14203)));
});

cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentHashMap.cljs$lang$type = true;

cljs.core.PersistentHashMap.cljs$lang$ctorStr = "cljs.core/PersistentHashMap";

cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/PersistentHashMap");
});

cljs.core.__GT_PersistentHashMap = (function __GT_PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
return (new cljs.core.PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash));
});

cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,(0),null,false,null,(0)));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len = ks.length;
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len)){
var G__14241 = (i + (1));
var G__14242 = out.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null,(ks[i]),(vs[i]));
i = G__14241;
out = G__14242;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
});
(cljs.core.PersistentHashMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.without_BANG_(key);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.assoc_BANG_(key,val);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.conj_BANG_(val);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.persistent_BANG_();
});

cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
var tcoll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return null;
}
} else {
if((self__.root == null)){
return null;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k);
}
}
});

cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
var tcoll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return not_found;
}
} else {
if((self__.root == null)){
return not_found;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);
}
}
});

cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(self__.edit){
return self__.count;
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((function (){var G__14243 = o;
if(G__14243){
var bit__4284__auto__ = (G__14243.cljs$lang$protocol_mask$partition0$ & (2048));
if((bit__4284__auto__) || (G__14243.cljs$core$IMapEntry$)){
return true;
} else {
if((!G__14243.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__14243);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__14243);
}
})()){
return tcoll.assoc_BANG_((function (){var G__14244 = o;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__14244) : cljs.core.key.call(null,G__14244));
})(),(function (){var G__14245 = o;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__14245) : cljs.core.val.call(null,G__14245));
})());
} else {
var es = cljs.core.seq(o);
var tcoll__$1 = tcoll;
while(true){
var temp__4124__auto__ = cljs.core.first(es);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
var G__14248 = cljs.core.next(es);
var G__14249 = tcoll__$1.assoc_BANG_((function (){var G__14246 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__14246) : cljs.core.key.call(null,G__14246));
})(),(function (){var G__14247 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__14247) : cljs.core.val.call(null,G__14247));
})());
es = G__14248;
tcoll__$1 = G__14249;
continue;
} else {
return tcoll__$1;
}
break;
}
}
} else {
throw (new Error("conj! after persistent"));
}
});

cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((k == null)){
if((self__.nil_val === v)){
} else {
self__.nil_val = v;
}

if(self__.has_nil_QMARK_){
} else {
self__.count = (self__.count + (1));

self__.has_nil_QMARK_ = true;
}

return tcoll;
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
var node = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,(0),cljs.core.hash(k),k,v,added_leaf_QMARK_);
if((node === self__.root)){
} else {
self__.root = node;
}

if(added_leaf_QMARK_.val){
self__.count = (self__.count + (1));
} else {
}

return tcoll;
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((k == null)){
if(self__.has_nil_QMARK_){
self__.has_nil_QMARK_ = false;

self__.nil_val = null;

self__.count = (self__.count - (1));

return tcoll;
} else {
return tcoll;
}
} else {
if((self__.root == null)){
return tcoll;
} else {
var removed_leaf_QMARK_ = (new cljs.core.Box(false));
var node = self__.root.inode_without_BANG_(self__.edit,(0),cljs.core.hash(k),k,removed_leaf_QMARK_);
if((node === self__.root)){
} else {
self__.root = node;
}

if(cljs.core.truth_((removed_leaf_QMARK_[(0)]))){
self__.count = (self__.count - (1));
} else {
}

return tcoll;
}
}
} else {
throw (new Error("dissoc! after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var self__ = this;
var tcoll = this;
if(self__.edit){
self__.edit = null;

return (new cljs.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientHashMap.cljs$lang$type = true;

cljs.core.TransientHashMap.cljs$lang$ctorStr = "cljs.core/TransientHashMap";

cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/TransientHashMap");
});

cljs.core.__GT_TransientHashMap = (function __GT_TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val){
return (new cljs.core.TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val));
});

cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t = node;
var stack__$1 = stack;
while(true){
if(!((t == null))){
var G__14250 = ((ascending_QMARK_)?t.left:t.right);
var G__14251 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,t);
t = G__14250;
stack__$1 = G__14251;
continue;
} else {
return stack__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374862;
})
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeMapSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt < (0))){
return (cljs.core.count(cljs.core.next(coll__$1)) + (1));
} else {
return self__.cnt;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.peek(self__.stack);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var t = cljs.core.first(self__.stack);
var next_stack = cljs.core.tree_map_seq_push(((self__.ascending_QMARK_)?t.right:t.left),cljs.core.next(self__.stack),self__.ascending_QMARK_);
if(!((next_stack == null))){
return (new cljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - (1)),null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;

cljs.core.PersistentTreeMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentTreeMapSeq";

cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/PersistentTreeMapSeq");
});

cljs.core.__GT_PersistentTreeMapSeq = (function __GT_PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash){
return (new cljs.core.PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash));
});

(cljs.core.PersistentTreeMapSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push(tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});

cljs.core.balance_left = (function balance_left(key,val,ins,right){
if((ins instanceof cljs.core.RedNode)){
if((ins.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else {
if((ins.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else {
return (new cljs.core.BlackNode(key,val,ins,right,null));

}
}
} else {
return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if((ins instanceof cljs.core.RedNode)){
if((ins.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else {
if((ins.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else {
return (new cljs.core.BlackNode(key,val,left,ins,null));

}
}
} else {
return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if((del instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else {
if((right instanceof cljs.core.BlackNode)){
return cljs.core.balance_right(key,val,del,right.redden());
} else {
if(((right instanceof cljs.core.RedNode)) && ((right.left instanceof cljs.core.BlackNode))){
return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right(right.key,right.val,right.left.right,right.right.redden()),null));
} else {
throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if((del instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else {
if((left instanceof cljs.core.BlackNode)){
return cljs.core.balance_left(key,val,left.redden(),del);
} else {
if(((left instanceof cljs.core.RedNode)) && ((left.right instanceof cljs.core.BlackNode))){
return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left(left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else {
throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__$1 = ((!((node.left == null)))?tree_map_kv_reduce(node.left,f,init):init);
if(cljs.core.reduced_QMARK_(init__$1)){
var G__14264 = init__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14264) : cljs.core.deref.call(null,G__14264));
} else {
var init__$2 = (function (){var G__14265 = init__$1;
var G__14266 = node.key;
var G__14267 = node.val;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14265,G__14266,G__14267) : f.call(null,G__14265,G__14266,G__14267));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__14268 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14268) : cljs.core.deref.call(null,G__14268));
} else {
var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__$2):init__$2);
if(cljs.core.reduced_QMARK_(init__$3)){
var G__14269 = init__$3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14269) : cljs.core.deref.call(null,G__14269));
} else {
return init__$3;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return ins.balance_right(node);
});

cljs.core.BlackNode.prototype.redden = (function (){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,self__.right,null));
});

cljs.core.BlackNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return node;
});

cljs.core.BlackNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return ins.balance_left(node);
});

cljs.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});

cljs.core.BlackNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
});

cljs.core.BlackNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
});

cljs.core.BlackNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_left_del(self__.key,self__.val,del,self__.right);
});

cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce(node,f,init);
});

cljs.core.BlackNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_right_del(self__.key,self__.val,self__.left,del);
});

cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});

cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});

cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return null;

}
}
});

cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return not_found;

}
}
});

cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});

cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return null;
});

cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return (2);
});

cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.key;
});

cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});

cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});

cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});

cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});

cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});

cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
var node__$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});

cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});

cljs.core.BlackNode.prototype.call = (function() {
var G__14271 = null;
var G__14271__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14271__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14271 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14271__2.call(this,self__,k);
case 3:
return G__14271__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14271.cljs$core$IFn$_invoke$arity$2 = G__14271__2;
G__14271.cljs$core$IFn$_invoke$arity$3 = G__14271__3;
return G__14271;
})()
;

cljs.core.BlackNode.prototype.apply = (function (self__,args14270){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14270)));
});

cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.BlackNode.cljs$lang$type = true;

cljs.core.BlackNode.cljs$lang$ctorStr = "cljs.core/BlackNode";

cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/BlackNode");
});

cljs.core.__GT_BlackNode = (function __GT_BlackNode(key,val,left,right,__hash){
return (new cljs.core.BlackNode(key,val,left,right,__hash));
});

(cljs.core.BlackNode.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,ins,null));
});

cljs.core.RedNode.prototype.redden = (function (){
var self__ = this;
var node = this;
throw (new Error("red-black tree invariant violation"));
});

cljs.core.RedNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null));
});

cljs.core.RedNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,ins,self__.right,null));
});

cljs.core.RedNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(key__$1,val__$1,left__$1,right__$1,null));
});

cljs.core.RedNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
if((self__.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.key,self__.val,self__.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null)),null));
} else {
if((self__.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.right.key,self__.right.val,(new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,self__.right.right,parent.right,null)),null));
} else {
return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));

}
}
});

cljs.core.RedNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
if((self__.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.key,self__.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null)),self__.right.blacken(),null));
} else {
if((self__.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.left.key,self__.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null)),(new cljs.core.BlackNode(self__.key,self__.val,self__.left.right,self__.right,null)),null));
} else {
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));

}
}
});

cljs.core.RedNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,del,self__.right,null));
});

cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce(node,f,init);
});

cljs.core.RedNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,del,null));
});

cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});

cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});

cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return null;

}
}
});

cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return not_found;

}
}
});

cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});

cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return null;
});

cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return (2);
});

cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.key;
});

cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});

cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});

cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});

cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});

cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});

cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
var node__$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});

cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});

cljs.core.RedNode.prototype.call = (function() {
var G__14273 = null;
var G__14273__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14273__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14273 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14273__2.call(this,self__,k);
case 3:
return G__14273__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14273.cljs$core$IFn$_invoke$arity$2 = G__14273__2;
G__14273.cljs$core$IFn$_invoke$arity$3 = G__14273__3;
return G__14273;
})()
;

cljs.core.RedNode.prototype.apply = (function (self__,args14272){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14272)));
});

cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.RedNode.cljs$lang$type = true;

cljs.core.RedNode.cljs$lang$ctorStr = "cljs.core/RedNode";

cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/RedNode");
});

cljs.core.__GT_RedNode = (function __GT_RedNode(key,val,left,right,__hash){
return (new cljs.core.RedNode(key,val,left,right,__hash));
});

(cljs.core.RedNode.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null)){
return (new cljs.core.RedNode(k,v,null,null,null));
} else {
var c = (function (){var G__14286 = k;
var G__14287 = tree.key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__14286,G__14287) : comp.call(null,G__14286,G__14287));
})();
if((c === (0))){
(found[(0)] = tree);

return null;
} else {
if((c < (0))){
var ins = tree_map_add(comp,tree.left,k,v,found);
if(!((ins == null))){
return tree.add_left(ins);
} else {
return null;
}
} else {
var ins = tree_map_add(comp,tree.right,k,v,found);
if(!((ins == null))){
return tree.add_right(ins);
} else {
return null;
}

}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null)){
return right;
} else {
if((right == null)){
return left;
} else {
if((left instanceof cljs.core.RedNode)){
if((right instanceof cljs.core.RedNode)){
var app = tree_map_append(left.right,right.left);
if((app instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.RedNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else {
return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else {
return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append(left.right,right),null));
}
} else {
if((right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(right.key,right.val,tree_map_append(left,right.left),right.right,null));
} else {
var app = tree_map_append(left.right,right.left);
if((app instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else {
return cljs.core.balance_left_del(left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app,right.right,null)));
}

}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null))){
var c = (function (){var G__14306 = k;
var G__14307 = tree.key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__14306,G__14307) : comp.call(null,G__14306,G__14307));
})();
if((c === (0))){
(found[(0)] = tree);

return cljs.core.tree_map_append(tree.left,tree.right);
} else {
if((c < (0))){
var del = tree_map_remove(comp,tree.left,k,found);
if((!((del == null))) || (!(((found[(0)]) == null)))){
if((tree.left instanceof cljs.core.BlackNode)){
return cljs.core.balance_left_del(tree.key,tree.val,del,tree.right);
} else {
return (new cljs.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else {
return null;
}
} else {
var del = tree_map_remove(comp,tree.right,k,found);
if((!((del == null))) || (!(((found[(0)]) == null)))){
if((tree.right instanceof cljs.core.BlackNode)){
return cljs.core.balance_right_del(tree.key,tree.val,tree.left,del);
} else {
return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del,null));
}
} else {
return null;
}

}
}
} else {
return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk = tree.key;
var c = (function (){var G__14318 = k;
var G__14319 = tk;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__14318,G__14319) : comp.call(null,G__14318,G__14319));
})();
if((c === (0))){
return tree.replace(tk,v,tree.left,tree.right);
} else {
if((c < (0))){
return tree.replace(tk,tree.val,tree_map_replace(comp,tree.left,k,v),tree.right);
} else {
return tree.replace(tk,tree.val,tree.left,tree_map_replace(comp,tree.right,k,v));

}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__14321 = cljs.core.seq(coll);
var chunk__14322 = null;
var count__14323 = (0);
var i__14324 = (0);
while(true){
if((i__14324 < count__14323)){
var vec__14325 = chunk__14322.cljs$core$IIndexed$_nth$arity$2(null,i__14324);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14325,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14325,(1),null);
var G__14326_14338 = v;
var G__14327_14339 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14326_14338,G__14327_14339) : f.call(null,G__14326_14338,G__14327_14339));

var G__14340 = seq__14321;
var G__14341 = chunk__14322;
var G__14342 = count__14323;
var G__14343 = (i__14324 + (1));
seq__14321 = G__14340;
chunk__14322 = G__14341;
count__14323 = G__14342;
i__14324 = G__14343;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__14321);
if(temp__4126__auto__){
var seq__14321__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14321__$1)){
var c__4390__auto__ = cljs.core.chunk_first(seq__14321__$1);
var G__14344 = cljs.core.chunk_rest(seq__14321__$1);
var G__14345 = c__4390__auto__;
var G__14346 = cljs.core.count(c__4390__auto__);
var G__14347 = (0);
seq__14321 = G__14344;
chunk__14322 = G__14345;
count__14323 = G__14346;
i__14324 = G__14347;
continue;
} else {
var vec__14328 = cljs.core.first(seq__14321__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14328,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14328,(1),null);
var G__14329_14348 = v;
var G__14330_14349 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14329_14348,G__14330_14349) : f.call(null,G__14329_14348,G__14330_14349));

var G__14350 = cljs.core.next(seq__14321__$1);
var G__14351 = null;
var G__14352 = (0);
var G__14353 = (0);
seq__14321 = G__14350;
chunk__14322 = G__14351;
count__14323 = G__14352;
i__14324 = G__14353;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentTreeMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__14331 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__14331) : cljs.core.keys.call(null,G__14331));
})());
});

cljs.core.PersistentTreeMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__14332 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__14332) : cljs.core.vals.call(null,G__14332));
})());
});

cljs.core.PersistentTreeMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var self__ = this;
var coll = this;
var t = self__.tree;
while(true){
if(!((t == null))){
var c = (function (){var G__14333 = k;
var G__14334 = t.key;
return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__14333,G__14334) : self__.comp.call(null,G__14333,G__14334));
})();
if((c === (0))){
return t;
} else {
if((c < (0))){
var G__14354 = t.left;
t = G__14354;
continue;
} else {
var G__14355 = t.right;
t = G__14355;
continue;

}
}
} else {
return null;
}
break;
}
});

cljs.core.PersistentTreeMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
var n = coll__$1.entry_at(k);
if(!((n == null))){
return n.val;
} else {
return not_found;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
if(!((self__.tree == null))){
return cljs.core.tree_map_kv_reduce(self__.tree,f,init);
} else {
return init;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,self__.meta,self__.__hash));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,false,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentTreeMap.EMPTY,self__.meta);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
var found = [null];
var t = cljs.core.tree_map_remove(self__.comp,self__.tree,k,found);
if((t == null)){
if((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0)) == null)){
return coll__$1;
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,null,(0),self__.meta,null));
}
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt - (1)),self__.meta,null));
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
var found = [null];
var t = cljs.core.tree_map_add(self__.comp,self__.tree,k,v,found);
if((t == null)){
var found_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,found_node.val)){
return coll__$1;
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,cljs.core.tree_map_replace(self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + (1)),self__.meta,null));
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return !((coll__$1.entry_at(k) == null));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,true,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__14356 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__14357 = cljs.core.next(es);
ret = G__14356;
es = G__14357;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__14358 = null;
var G__14358__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14358__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14358 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14358__2.call(this,self__,k);
case 3:
return G__14358__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14358.cljs$core$IFn$_invoke$arity$2 = G__14358__2;
G__14358.cljs$core$IFn$_invoke$arity$3 = G__14358__3;
return G__14358;
})()
;

cljs.core.PersistentTreeMap.prototype.apply = (function (self__,args14320){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14320)));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,ascending_QMARK_,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
var stack = null;
var t = self__.tree;
while(true){
if(!((t == null))){
var c = (function (){var G__14335 = k;
var G__14336 = t.key;
return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__14335,G__14336) : self__.comp.call(null,G__14335,G__14336));
})();
if((c === (0))){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t),ascending_QMARK_,(-1),null));
} else {
if(cljs.core.truth_(ascending_QMARK_)){
if((c < (0))){
var G__14359 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__14360 = t.left;
stack = G__14359;
t = G__14360;
continue;
} else {
var G__14361 = stack;
var G__14362 = t.right;
stack = G__14361;
t = G__14362;
continue;
}
} else {
if((c > (0))){
var G__14363 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__14364 = t.right;
stack = G__14363;
t = G__14364;
continue;
} else {
var G__14365 = stack;
var G__14366 = t.left;
stack = G__14365;
t = G__14366;
continue;
}

}
}
} else {
if((stack == null)){
return null;
} else {
return (new cljs.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,(-1),null));
}
}
break;
}
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
var G__14337 = entry;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__14337) : cljs.core.key.call(null,G__14337));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.comp;
});

cljs.core.PersistentTreeMap.cljs$lang$type = true;

cljs.core.PersistentTreeMap.cljs$lang$ctorStr = "cljs.core/PersistentTreeMap";

cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/PersistentTreeMap");
});

cljs.core.__GT_PersistentTreeMap = (function __GT_PersistentTreeMap(comp,tree,cnt,meta,__hash){
return (new cljs.core.PersistentTreeMap(comp,tree,cnt,meta,__hash));
});

cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,(0),null,(0)));
(cljs.core.PersistentTreeMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in$){
var G__14367 = cljs.core.nnext(in$);
var G__14368 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__14367;
out = G__14368;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this,keyvals);};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__14369){
var keyvals = cljs.core.seq(arglist__14369);
return hash_map__delegate(keyvals);
});
hash_map.cljs$core$IFn$_invoke$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return cljs.core.PersistentArrayMap.fromArray(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,keyvals),true,false);
};
var array_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this,keyvals);};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__14370){
var keyvals = cljs.core.seq(arglist__14370);
return array_map__delegate(keyvals);
});
array_map.cljs$core$IFn$_invoke$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks = [];
var obj = (function (){var obj14374 = {};
return obj14374;
})();
var kvs = cljs.core.seq(keyvals);
while(true){
if(kvs){
ks.push(cljs.core.first(kvs));

(obj[cljs.core.first(kvs)] = cljs.core.second(kvs));

var G__14375 = cljs.core.nnext(kvs);
kvs = G__14375;
continue;
} else {
return cljs.core.ObjMap.fromObject(ks,obj);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this,keyvals);};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__14376){
var keyvals = cljs.core.seq(arglist__14376);
return obj_map__delegate(keyvals);
});
obj_map.cljs$core$IFn$_invoke$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in$){
var G__14377 = cljs.core.nnext(in$);
var G__14378 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__14377;
out = G__14378;
continue;
} else {
return out;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this,keyvals);};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__14379){
var keyvals = cljs.core.seq(arglist__14379);
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$core$IFn$_invoke$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = (new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator(comparator),null,(0),null,(0)));
while(true){
if(in$){
var G__14380 = cljs.core.nnext(in$);
var G__14381 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__14380;
out = G__14381;
continue;
} else {
return out;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this,comparator,keyvals);};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__14382){
var comparator = cljs.core.first(arglist__14382);
var keyvals = cljs.core.rest(arglist__14382);
return sorted_map_by__delegate(comparator,keyvals);
});
sorted_map_by.cljs$core$IFn$_invoke$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;

/**
* @constructor
*/
cljs.core.KeySeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.KeySeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.KeySeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.KeySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.KeySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__14383 = self__.mseq;
if(G__14383){
var bit__4284__auto__ = (G__14383.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4284__auto__) || (G__14383.cljs$core$INext$)){
return true;
} else {
if((!G__14383.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__14383);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__14383);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if((nseq == null)){
return null;
} else {
return (new cljs.core.KeySeq(nseq,self__._meta));
}
});

cljs.core.KeySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.KeySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);
return me.cljs$core$IMapEntry$_key$arity$1(null);
});

cljs.core.KeySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__14384 = self__.mseq;
if(G__14384){
var bit__4284__auto__ = (G__14384.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4284__auto__) || (G__14384.cljs$core$INext$)){
return true;
} else {
if((!G__14384.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__14384);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__14384);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if(!((nseq == null))){
return (new cljs.core.KeySeq(nseq,self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.KeySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.KeySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.KeySeq(self__.mseq,new_meta));
});

cljs.core.KeySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.KeySeq.cljs$lang$type = true;

cljs.core.KeySeq.cljs$lang$ctorStr = "cljs.core/KeySeq";

cljs.core.KeySeq.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/KeySeq");
});

cljs.core.__GT_KeySeq = (function __GT_KeySeq(mseq,_meta){
return (new cljs.core.KeySeq(mseq,_meta));
});

(cljs.core.KeySeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
var temp__4126__auto__ = cljs.core.seq(hash_map);
if(temp__4126__auto__){
var mseq = temp__4126__auto__;
return (new cljs.core.KeySeq(mseq,null));
} else {
return null;
}
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key(map_entry);
});

/**
* @constructor
*/
cljs.core.ValSeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.ValSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ValSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ValSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.ValSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__14385 = self__.mseq;
if(G__14385){
var bit__4284__auto__ = (G__14385.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4284__auto__) || (G__14385.cljs$core$INext$)){
return true;
} else {
if((!G__14385.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__14385);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__14385);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if((nseq == null)){
return null;
} else {
return (new cljs.core.ValSeq(nseq,self__._meta));
}
});

cljs.core.ValSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ValSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);
return me.cljs$core$IMapEntry$_val$arity$1(null);
});

cljs.core.ValSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__14386 = self__.mseq;
if(G__14386){
var bit__4284__auto__ = (G__14386.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4284__auto__) || (G__14386.cljs$core$INext$)){
return true;
} else {
if((!G__14386.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__14386);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__14386);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if(!((nseq == null))){
return (new cljs.core.ValSeq(nseq,self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.ValSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ValSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ValSeq(self__.mseq,new_meta));
});

cljs.core.ValSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ValSeq.cljs$lang$type = true;

cljs.core.ValSeq.cljs$lang$ctorStr = "cljs.core/ValSeq";

cljs.core.ValSeq.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/ValSeq");
});

cljs.core.__GT_ValSeq = (function __GT_ValSeq(mseq,_meta){
return (new cljs.core.ValSeq(mseq,_meta));
});

(cljs.core.ValSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
var temp__4126__auto__ = cljs.core.seq(hash_map);
if(temp__4126__auto__){
var mseq = temp__4126__auto__;
return (new cljs.core.ValSeq(mseq,null));
} else {
return null;
}
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val(map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14387_SHARP_,p2__14388_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3608__auto__ = p1__14387_SHARP_;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p2__14388_SHARP_);
}),maps);
} else {
return null;
}
};
var merge = function (var_args){
var maps = null;
if (arguments.length > 0) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this,maps);};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__14389){
var maps = cljs.core.seq(arglist__14389);
return merge__delegate(maps);
});
merge.cljs$core$IFn$_invoke$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.first(e);
var v = cljs.core.second(e);
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__14392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__14393 = v;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14392,G__14393) : f.call(null,G__14392,G__14393));
})());
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__3608__auto__ = m1;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});})(merge_entry))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(merge2,maps);
} else {
return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this,f,maps);};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__14394){
var f = cljs.core.first(arglist__14394);
var maps = cljs.core.rest(arglist__14394);
return merge_with__delegate(f,maps);
});
merge_with.cljs$core$IFn$_invoke$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var keys = cljs.core.seq(keyseq);
while(true){
if(keys){
var key = cljs.core.first(keys);
var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map,key,cljs.core.constant$keyword$14);
var G__14395 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(entry,cljs.core.constant$keyword$14))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,entry):ret);
var G__14396 = cljs.core.next(keys);
ret = G__14395;
keys = G__14396;
continue;
} else {
return cljs.core.with_meta(ret,cljs.core.meta(map));
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashSet.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentHashSet.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentHashSet.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentHashSet.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__14399 = cljs.core.seq(coll);
var chunk__14400 = null;
var count__14401 = (0);
var i__14402 = (0);
while(true){
if((i__14402 < count__14401)){
var vec__14403 = chunk__14400.cljs$core$IIndexed$_nth$arity$2(null,i__14402);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14403,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14403,(1),null);
var G__14404_14409 = v;
var G__14405_14410 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14404_14409,G__14405_14410) : f.call(null,G__14404_14409,G__14405_14410));

var G__14411 = seq__14399;
var G__14412 = chunk__14400;
var G__14413 = count__14401;
var G__14414 = (i__14402 + (1));
seq__14399 = G__14411;
chunk__14400 = G__14412;
count__14401 = G__14413;
i__14402 = G__14414;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__14399);
if(temp__4126__auto__){
var seq__14399__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14399__$1)){
var c__4390__auto__ = cljs.core.chunk_first(seq__14399__$1);
var G__14415 = cljs.core.chunk_rest(seq__14399__$1);
var G__14416 = c__4390__auto__;
var G__14417 = cljs.core.count(c__4390__auto__);
var G__14418 = (0);
seq__14399 = G__14415;
chunk__14400 = G__14416;
count__14401 = G__14417;
i__14402 = G__14418;
continue;
} else {
var vec__14406 = cljs.core.first(seq__14399__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14406,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14406,(1),null);
var G__14407_14419 = v;
var G__14408_14420 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14407_14419,G__14408_14420) : f.call(null,G__14407_14419,G__14408_14420));

var G__14421 = cljs.core.next(seq__14399__$1);
var G__14422 = null;
var G__14423 = (0);
var G__14424 = (0);
seq__14399 = G__14421;
chunk__14400 = G__14422;
count__14401 = G__14423;
i__14402 = G__14424;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});

cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var coll__$1 = this;
if(cljs.core._contains_key_QMARK_(self__.hash_map,v)){
return v;
} else {
return not_found;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,self__.hash_map,self__.__hash));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._count(self__.hash_map);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__14397_SHARP_){
return cljs.core.contains_QMARK_(coll__$1,p1__14397_SHARP_);
});})(coll__$1))
,other));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientHashSet(cljs.core._as_transient(self__.hash_map)));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,self__.meta);
});

cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core._dissoc(self__.hash_map,v),null));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.keys(self__.hash_map);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.hash_map,o,null),null));
});

cljs.core.PersistentHashSet.prototype.call = (function() {
var G__14425 = null;
var G__14425__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14425__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14425 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14425__2.call(this,self__,k);
case 3:
return G__14425__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14425.cljs$core$IFn$_invoke$arity$2 = G__14425__2;
G__14425.cljs$core$IFn$_invoke$arity$3 = G__14425__3;
return G__14425;
})()
;

cljs.core.PersistentHashSet.prototype.apply = (function (self__,args14398){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14398)));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentHashSet.cljs$lang$type = true;

cljs.core.PersistentHashSet.cljs$lang$ctorStr = "cljs.core/PersistentHashSet";

cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/PersistentHashSet");
});

cljs.core.__GT_PersistentHashSet = (function __GT_PersistentHashSet(meta,hash_map,__hash){
return (new cljs.core.PersistentHashSet(meta,hash_map,__hash));
});

cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.PersistentArrayMap.EMPTY,(0)));
cljs.core.PersistentHashSet.fromArray = (function (items,no_clone){
var len = items.length;
if((len <= cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)){
var arr = ((no_clone)?items:cljs.core.aclone(items));
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len)){
var G__14426 = (i + (1));
var G__14427 = cljs.core._assoc_BANG_(out,(items[i]),null);
i = G__14426;
out = G__14427;
continue;
} else {
return (new cljs.core.PersistentHashSet(null,cljs.core._persistent_BANG_(out),null));
}
break;
}
} else {
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < len)){
var G__14428 = (i + (1));
var G__14429 = cljs.core._conj_BANG_(out,(items[i]));
i = G__14428;
out = G__14429;
continue;
} else {
return cljs.core._persistent_BANG_(out);
}
break;
}
}
});
(cljs.core.PersistentHashSet.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.prototype.call = (function() {
var G__14431 = null;
var G__14431__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var tcoll = self____$1;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return null;
} else {
return k;
}
});
var G__14431__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var tcoll = self____$1;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return k;
}
});
G__14431 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14431__2.call(this,self__,k);
case 3:
return G__14431__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14431.cljs$core$IFn$_invoke$arity$2 = G__14431__2;
G__14431.cljs$core$IFn$_invoke$arity$3 = G__14431__3;
return G__14431;
})()
;

cljs.core.TransientHashSet.prototype.apply = (function (self__,args14430){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14430)));
});

cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var tcoll = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return null;
} else {
return k;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var tcoll = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return k;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var self__ = this;
var tcoll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,v,null);
});

cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var self__ = this;
var tcoll__$1 = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return v;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return cljs.core.count(self__.transient_map);
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var self__ = this;
var tcoll__$1 = this;
self__.transient_map = cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(self__.transient_map,v);

return tcoll__$1;
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
self__.transient_map = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(self__.transient_map,o,null);

return tcoll__$1;
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_(self__.transient_map),null));
});

cljs.core.TransientHashSet.cljs$lang$type = true;

cljs.core.TransientHashSet.cljs$lang$ctorStr = "cljs.core/TransientHashSet";

cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/TransientHashSet");
});

cljs.core.__GT_TransientHashSet = (function __GT_TransientHashSet(transient_map){
return (new cljs.core.TransientHashSet(transient_map));
});


/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeSet.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeSet.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentTreeSet.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__14434 = cljs.core.seq(coll);
var chunk__14435 = null;
var count__14436 = (0);
var i__14437 = (0);
while(true){
if((i__14437 < count__14436)){
var vec__14438 = chunk__14435.cljs$core$IIndexed$_nth$arity$2(null,i__14437);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14438,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14438,(1),null);
var G__14439_14444 = v;
var G__14440_14445 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14439_14444,G__14440_14445) : f.call(null,G__14439_14444,G__14440_14445));

var G__14446 = seq__14434;
var G__14447 = chunk__14435;
var G__14448 = count__14436;
var G__14449 = (i__14437 + (1));
seq__14434 = G__14446;
chunk__14435 = G__14447;
count__14436 = G__14448;
i__14437 = G__14449;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__14434);
if(temp__4126__auto__){
var seq__14434__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14434__$1)){
var c__4390__auto__ = cljs.core.chunk_first(seq__14434__$1);
var G__14450 = cljs.core.chunk_rest(seq__14434__$1);
var G__14451 = c__4390__auto__;
var G__14452 = cljs.core.count(c__4390__auto__);
var G__14453 = (0);
seq__14434 = G__14450;
chunk__14435 = G__14451;
count__14436 = G__14452;
i__14437 = G__14453;
continue;
} else {
var vec__14441 = cljs.core.first(seq__14434__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14441,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14441,(1),null);
var G__14442_14454 = v;
var G__14443_14455 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14442_14454,G__14443_14455) : f.call(null,G__14442_14454,G__14443_14455));

var G__14456 = cljs.core.next(seq__14434__$1);
var G__14457 = null;
var G__14458 = (0);
var G__14459 = (0);
seq__14434 = G__14456;
chunk__14435 = G__14457;
count__14436 = G__14458;
i__14437 = G__14459;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var coll__$1 = this;
var n = self__.tree_map.entry_at(v);
if(!((n == null))){
return n.key;
} else {
return not_found;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,self__.tree_map,self__.__hash));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.count(self__.tree_map);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core.count(self__.tree_map) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.rseq(self__.tree_map));
} else {
return null;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__14432_SHARP_){
return cljs.core.contains_QMARK_(coll__$1,p1__14432_SHARP_);
});})(coll__$1))
,other));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentTreeSet.EMPTY,self__.meta);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.tree_map,v),null));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.keys(self__.tree_map);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.tree_map,o,null),null));
});

cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__14460 = null;
var G__14460__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14460__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14460 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14460__2.call(this,self__,k);
case 3:
return G__14460__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14460.cljs$core$IFn$_invoke$arity$2 = G__14460__2;
G__14460.cljs$core$IFn$_invoke$arity$3 = G__14460__3;
return G__14460;
})()
;

cljs.core.PersistentTreeSet.prototype.apply = (function (self__,args14433){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14433)));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq(self__.tree_map,ascending_QMARK_));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq_from(self__.tree_map,k,ascending_QMARK_));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
return entry;
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._comparator(self__.tree_map);
});

cljs.core.PersistentTreeSet.cljs$lang$type = true;

cljs.core.PersistentTreeSet.cljs$lang$ctorStr = "cljs.core/PersistentTreeSet";

cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/PersistentTreeSet");
});

cljs.core.__GT_PersistentTreeSet = (function __GT_PersistentTreeSet(meta,tree_map,__hash){
return (new cljs.core.PersistentTreeSet(meta,tree_map,__hash));
});

cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.PersistentTreeMap.EMPTY,(0)));
(cljs.core.PersistentTreeSet.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));
cljs.core.set_from_indexed_seq = (function set_from_indexed_seq(iseq){
var arr = iseq.arr;
var ret = (function (){var a__4484__auto__ = arr;
var i = (0);
var res = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < a__4484__auto__.length)){
var G__14461 = (i + (1));
var G__14462 = res.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,(arr[i]));
i = G__14461;
res = G__14462;
continue;
} else {
return res;
}
break;
}
})();
return ret.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
});
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$ = cljs.core.seq(coll);
if((in$ == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(((in$ instanceof cljs.core.IndexedSeq)) && ((in$.i === (0)))){
return cljs.core.set_from_indexed_seq(in$);
} else {
var in$__$1 = in$;
var out = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);
while(true){
if(!((in$__$1 == null))){
var G__14463 = in$__$1.cljs$core$INext$_next$arity$1(null);
var G__14464 = out.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,in$__$1.cljs$core$ISeq$_first$arity$1(null));
in$__$1 = G__14463;
out = G__14464;
continue;
} else {
return out.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
}
break;
}

}
}
});
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__14465__delegate = function (keys){
return cljs.core.set(keys);
};
var G__14465 = function (var_args){
var keys = null;
if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14465__delegate.call(this,keys);};
G__14465.cljs$lang$maxFixedArity = 0;
G__14465.cljs$lang$applyTo = (function (arglist__14466){
var keys = cljs.core.seq(arglist__14466);
return G__14465__delegate(keys);
});
G__14465.cljs$core$IFn$_invoke$arity$variadic = G__14465__delegate;
return G__14465;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$core$IFn$_invoke$arity$0 = hash_set__0;
hash_set.cljs$core$IFn$_invoke$arity$variadic = hash_set__1.cljs$core$IFn$_invoke$arity$variadic;
return hash_set;
})()
;
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this,keys);};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__14467){
var keys = cljs.core.seq(arglist__14467);
return sorted_set__delegate(keys);
});
sorted_set.cljs$core$IFn$_invoke$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by(comparator),(0))),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this,comparator,keys);};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__14468){
var comparator = cljs.core.first(arglist__14468);
var keys = cljs.core.rest(arglist__14468);
return sorted_set_by__delegate(comparator,keys);
});
sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap.  Returns a transducer when no collection
* is provided.
*/
cljs.core.replace = (function() {
var replace = null;
var replace__1 = (function (smap){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__14469_SHARP_){
var temp__4124__auto__ = cljs.core.find(smap,p1__14469_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.val(e);
} else {
return p1__14469_SHARP_;
}
}));
});
var replace__2 = (function (smap,coll){
if(cljs.core.vector_QMARK_(coll)){
var n = cljs.core.count(coll);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n){
return (function (v,i){
var temp__4124__auto__ = cljs.core.find(smap,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i));
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,cljs.core.second(e));
} else {
return v;
}
});})(n))
,coll,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(cljs.core.inc,(0))));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14470_SHARP_){
var temp__4124__auto__ = cljs.core.find(smap,p1__14470_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.second(e);
} else {
return p1__14470_SHARP_;
}
}),coll);
}
});
replace = function(smap,coll){
switch(arguments.length){
case 1:
return replace__1.call(this,smap);
case 2:
return replace__2.call(this,smap,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace.cljs$core$IFn$_invoke$arity$1 = replace__1;
replace.cljs$core$IFn$_invoke$arity$2 = replace__2;
return replace;
})()
;
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step = (function step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__14481,seen__$1){
while(true){
var vec__14482 = p__14481;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14482,(0),null);
var xs__$1 = vec__14482;
var temp__4126__auto__ = cljs.core.seq(xs__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.contains_QMARK_(seen__$1,f)){
var G__14483 = cljs.core.rest(s);
var G__14484 = seen__$1;
p__14481 = G__14483;
seen__$1 = G__14484;
continue;
} else {
return cljs.core.cons(f,step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,f)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret = cljs.core.PersistentVector.EMPTY;
var s__$1 = s;
while(true){
if(cljs.core.next(s__$1)){
var G__14485 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.first(s__$1));
var G__14486 = cljs.core.next(s__$1);
ret = G__14485;
s__$1 = G__14486;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if((function (){var G__14488 = x;
if(G__14488){
var bit__4277__auto__ = (G__14488.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4277__auto__) || (G__14488.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$INamed$_name$arity$1(null);
} else {
if(typeof x === 'string'){
return x;
} else {
throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
}
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks = cljs.core.seq(keys);
var vs = cljs.core.seq(vals);
while(true){
if((ks) && (vs)){
var G__14489 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(map,cljs.core.first(ks),cljs.core.first(vs));
var G__14490 = cljs.core.next(ks);
var G__14491 = cljs.core.next(vs);
map = G__14489;
ks = G__14490;
vs = G__14491;
continue;
} else {
return cljs.core.persistent_BANG_(map);
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if(((function (){var G__14502 = x;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__14502) : k.call(null,G__14502));
})() > (function (){var G__14503 = y;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__14503) : k.call(null,G__14503));
})())){
return x;
} else {
return y;
}
});
var max_key__4 = (function() { 
var G__14504__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14492_SHARP_,p2__14493_SHARP_){
return max_key.cljs$core$IFn$_invoke$arity$3(k,p1__14492_SHARP_,p2__14493_SHARP_);
}),max_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__14504 = function (k,x,y,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14504__delegate.call(this,k,x,y,more);};
G__14504.cljs$lang$maxFixedArity = 3;
G__14504.cljs$lang$applyTo = (function (arglist__14505){
var k = cljs.core.first(arglist__14505);
arglist__14505 = cljs.core.next(arglist__14505);
var x = cljs.core.first(arglist__14505);
arglist__14505 = cljs.core.next(arglist__14505);
var y = cljs.core.first(arglist__14505);
var more = cljs.core.rest(arglist__14505);
return G__14504__delegate(k,x,y,more);
});
G__14504.cljs$core$IFn$_invoke$arity$variadic = G__14504__delegate;
return G__14504;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$core$IFn$_invoke$arity$2 = max_key__2;
max_key.cljs$core$IFn$_invoke$arity$3 = max_key__3;
max_key.cljs$core$IFn$_invoke$arity$variadic = max_key__4.cljs$core$IFn$_invoke$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if(((function (){var G__14516 = x;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__14516) : k.call(null,G__14516));
})() < (function (){var G__14517 = y;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__14517) : k.call(null,G__14517));
})())){
return x;
} else {
return y;
}
});
var min_key__4 = (function() { 
var G__14518__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14506_SHARP_,p2__14507_SHARP_){
return min_key.cljs$core$IFn$_invoke$arity$3(k,p1__14506_SHARP_,p2__14507_SHARP_);
}),min_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__14518 = function (k,x,y,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14518__delegate.call(this,k,x,y,more);};
G__14518.cljs$lang$maxFixedArity = 3;
G__14518.cljs$lang$applyTo = (function (arglist__14519){
var k = cljs.core.first(arglist__14519);
arglist__14519 = cljs.core.next(arglist__14519);
var x = cljs.core.first(arglist__14519);
arglist__14519 = cljs.core.next(arglist__14519);
var y = cljs.core.first(arglist__14519);
var more = cljs.core.rest(arglist__14519);
return G__14518__delegate(k,x,y,more);
});
G__14518.cljs$core$IFn$_invoke$arity$variadic = G__14518__delegate;
return G__14518;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$core$IFn$_invoke$arity$2 = min_key__2;
min_key.cljs$core$IFn$_invoke$arity$3 = min_key__3;
min_key.cljs$core$IFn$_invoke$arity$variadic = min_key__4.cljs$core$IFn$_invoke$arity$variadic;
return min_key;
})()
;

/**
* @constructor
*/
cljs.core.ArrayList = (function (arr){
this.arr = arr;
})
cljs.core.ArrayList.prototype.add = (function (x){
var self__ = this;
var _ = this;
return self__.arr.push(x);
});

cljs.core.ArrayList.prototype.size = (function (){
var self__ = this;
var _ = this;
return self__.arr.length;
});

cljs.core.ArrayList.prototype.clear = (function (){
var self__ = this;
var _ = this;
return self__.arr = [];
});

cljs.core.ArrayList.prototype.isEmpty = (function (){
var self__ = this;
var _ = this;
return (self__.arr.length === (0));
});

cljs.core.ArrayList.prototype.toArray = (function (){
var self__ = this;
var _ = this;
return self__.arr;
});

cljs.core.ArrayList.cljs$lang$type = true;

cljs.core.ArrayList.cljs$lang$ctorStr = "cljs.core/ArrayList";

cljs.core.ArrayList.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/ArrayList");
});

cljs.core.__GT_ArrayList = (function __GT_ArrayList(arr){
return (new cljs.core.ArrayList(arr));
});

cljs.core.array_list = (function array_list(){
return (new cljs.core.ArrayList([]));
});
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__1 = (function (n){
return (function (rf){
var a = cljs.core.array_list();
return ((function (a){
return (function() {
var G__14536 = null;
var G__14536__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14536__1 = (function (result){
var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());
a.clear();

return cljs.core.unreduced((function (){var G__14531 = result;
var G__14532 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14531,G__14532) : rf.call(null,G__14531,G__14532));
})());
})());
var G__14533 = result__$1;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14533) : rf.call(null,G__14533));
});
var G__14536__2 = (function (result,input){
a.add(input);

if((n === a.size())){
var v = cljs.core.vec(a.toArray());
a.clear();

var G__14534 = result;
var G__14535 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14534,G__14535) : rf.call(null,G__14534,G__14535));
} else {
return result;
}
});
G__14536 = function(result,input){
switch(arguments.length){
case 0:
return G__14536__0.call(this);
case 1:
return G__14536__1.call(this,result);
case 2:
return G__14536__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14536.cljs$core$IFn$_invoke$arity$0 = G__14536__0;
G__14536.cljs$core$IFn$_invoke$arity$1 = G__14536__1;
G__14536.cljs$core$IFn$_invoke$arity$2 = G__14536__2;
return G__14536;
})()
;})(a))
});
});
var partition_all__2 = (function (n,coll){
return partition_all.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s),partition_all.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return null;
}
}),null,null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 1:
return partition_all__1.call(this,n);
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_all.cljs$core$IFn$_invoke$arity$1 = partition_all__1;
partition_all.cljs$core$IFn$_invoke$arity$2 = partition_all__2;
partition_all.cljs$core$IFn$_invoke$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.take_while = (function() {
var take_while = null;
var take_while__1 = (function (pred){
return (function (rf){
return (function() {
var G__14549 = null;
var G__14549__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14549__1 = (function (result){
var G__14544 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14544) : rf.call(null,G__14544));
});
var G__14549__2 = (function (result,input){
if(cljs.core.truth_((function (){var G__14545 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__14545) : pred.call(null,G__14545));
})())){
var G__14546 = result;
var G__14547 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14546,G__14547) : rf.call(null,G__14546,G__14547));
} else {
return cljs.core.reduced(result);
}
});
G__14549 = function(result,input){
switch(arguments.length){
case 0:
return G__14549__0.call(this);
case 1:
return G__14549__1.call(this,result);
case 2:
return G__14549__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14549.cljs$core$IFn$_invoke$arity$0 = G__14549__0;
G__14549.cljs$core$IFn$_invoke$arity$1 = G__14549__1;
G__14549.cljs$core$IFn$_invoke$arity$2 = G__14549__2;
return G__14549;
})()
});
});
var take_while__2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.truth_((function (){var G__14548 = cljs.core.first(s);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__14548) : pred.call(null,G__14548));
})())){
return cljs.core.cons(cljs.core.first(s),take_while.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.rest(s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
take_while = function(pred,coll){
switch(arguments.length){
case 1:
return take_while__1.call(this,pred);
case 2:
return take_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_while.cljs$core$IFn$_invoke$arity$1 = take_while__1;
take_while.cljs$core$IFn$_invoke$arity$2 = take_while__2;
return take_while;
})()
;
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp = cljs.core._comparator(sc);
var G__14554 = (function (){var G__14556 = cljs.core._entry_key(sc,e);
var G__14557 = key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__14556,G__14557) : comp.call(null,G__14556,G__14557));
})();
var G__14555 = (0);
return (test.cljs$core$IFn$_invoke$arity$2 ? test.cljs$core$IFn$_invoke$arity$2(G__14554,G__14555) : test.call(null,G__14554,G__14555));
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_], true).call(null,test))){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,key,true);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__14561 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14561,(0),null);
var s = vec__14561;
if(cljs.core.truth_((function (){var G__14562 = e;
return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__14562) : include.call(null,G__14562));
})())){
return s;
} else {
return cljs.core.next(s);
}
} else {
return null;
}
} else {
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,start_key,true);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__14563 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14563,(0),null);
var s = vec__14563;
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e))?s:cljs.core.next(s)));
} else {
return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subseq.cljs$core$IFn$_invoke$arity$3 = subseq__3;
subseq.cljs$core$IFn$_invoke$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_], true).call(null,test))){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,key,false);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__14567 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14567,(0),null);
var s = vec__14567;
if(cljs.core.truth_((function (){var G__14568 = e;
return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__14568) : include.call(null,G__14568));
})())){
return s;
} else {
return cljs.core.next(s);
}
} else {
return null;
}
} else {
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,end_key,false);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__14569 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14569,(0),null);
var s = vec__14569;
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e))?s:cljs.core.next(s)));
} else {
return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rsubseq.cljs$core$IFn$_invoke$arity$3 = rsubseq__3;
rsubseq.cljs$core$IFn$_invoke$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.RangeIterator = (function (i,end,step){
this.i = i;
this.end = end;
this.step = step;
})
cljs.core.RangeIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
if((self__.step > (0))){
return (self__.i < self__.end);
} else {
return (self__.i > self__.end);
}
});

cljs.core.RangeIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = self__.i;
self__.i = (self__.i + self__.step);

return ret;
});

cljs.core.RangeIterator.cljs$lang$type = true;

cljs.core.RangeIterator.cljs$lang$ctorStr = "cljs.core/RangeIterator";

cljs.core.RangeIterator.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/RangeIterator");
});

cljs.core.__GT_RangeIterator = (function __GT_RangeIterator(i,end,step){
return (new cljs.core.RangeIterator(i,end,step));
});


/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Range.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Range.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var self__ = this;
var rng__$1 = this;
if((n < cljs.core._count(rng__$1))){
return (self__.start + (n * self__.step));
} else {
if(((self__.start > self__.end)) && ((self__.step === (0)))){
return self__.start;
} else {
throw (new Error("Index out of bounds"));
}
}
});

cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var self__ = this;
var rng__$1 = this;
if((n < cljs.core._count(rng__$1))){
return (self__.start + (n * self__.step));
} else {
if(((self__.start > self__.end)) && ((self__.step === (0)))){
return self__.start;
} else {
return not_found;
}
}
});

cljs.core.Range.prototype.cljs$core$IIterable$ = true;

cljs.core.Range.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.RangeIterator(self__.start,self__.end,self__.step));
});

cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
return self__.meta;
});

cljs.core.Range.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Range(self__.meta,self__.start,self__.end,self__.step,self__.__hash));
});

cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((self__.step > (0))){
if(((self__.start + self__.step) < self__.end)){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return null;
}
} else {
if(((self__.start + self__.step) > self__.end)){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return null;
}
}
});

cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if(cljs.core.not(cljs.core._seq(rng__$1))){
return (0);
} else {
var G__14570 = ((self__.end - self__.start) / self__.step);
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__14570) : Math.ceil.call(null,G__14570));
}
});

cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_ordered_coll(rng__$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var self__ = this;
var rng__$1 = this;
return cljs.core.equiv_sequential(rng__$1,other);
});

cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var self__ = this;
var rng__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(rng__$1,f);
});

cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,init){
var self__ = this;
var rng__$1 = this;
var i = self__.start;
var ret = init;
while(true){
if((((self__.step > (0)))?(i < self__.end):(i > self__.end))){
var ret__$1 = (function (){var G__14571 = ret;
var G__14572 = i;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14571,G__14572) : f.call(null,G__14571,G__14572));
})();
if(cljs.core.reduced_QMARK_(ret__$1)){
var G__14573 = ret__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14573) : cljs.core.deref.call(null,G__14573));
} else {
var G__14574 = (i + self__.step);
var G__14575 = ret__$1;
i = G__14574;
ret = G__14575;
continue;
}
} else {
return ret;
}
break;
}
});

cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((cljs.core._seq(rng__$1) == null)){
return null;
} else {
return self__.start;
}
});

cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if(!((cljs.core._seq(rng__$1) == null))){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((self__.step > (0))){
if((self__.start < self__.end)){
return rng__$1;
} else {
return null;
}
} else {
if((self__.start > self__.end)){
return rng__$1;
} else {
return null;
}
}
});

cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){
var self__ = this;
var rng__$1 = this;
return (new cljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});

cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var self__ = this;
var rng__$1 = this;
return cljs.core.cons(o,rng__$1);
});

cljs.core.Range.cljs$lang$type = true;

cljs.core.Range.cljs$lang$ctorStr = "cljs.core/Range";

cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/Range");
});

cljs.core.__GT_Range = (function __GT_Range(meta,start,end,step,__hash){
return (new cljs.core.Range(meta,start,end,step,__hash));
});

(cljs.core.Range.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.cljs$core$IFn$_invoke$arity$3((0),Number.MAX_VALUE,(1));
});
var range__1 = (function (end){
return range.cljs$core$IFn$_invoke$arity$3((0),end,(1));
});
var range__2 = (function (start,end){
return range.cljs$core$IFn$_invoke$arity$3(start,end,(1));
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range.cljs$core$IFn$_invoke$arity$0 = range__0;
range.cljs$core$IFn$_invoke$arity$1 = range__1;
range.cljs$core$IFn$_invoke$arity$2 = range__2;
range.cljs$core$IFn$_invoke$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.take_nth = (function() {
var take_nth = null;
var take_nth__1 = (function (n){
return (function (rf){
var ia = (function (){var G__14591 = (-1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14591) : cljs.core.atom.call(null,G__14591));
})();
return ((function (ia){
return (function() {
var G__14595 = null;
var G__14595__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14595__1 = (function (result){
var G__14592 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14592) : rf.call(null,G__14592));
});
var G__14595__2 = (function (result,input){
var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ia,cljs.core.inc);
if((cljs.core.rem(i,n) === (0))){
var G__14593 = result;
var G__14594 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14593,G__14594) : rf.call(null,G__14593,G__14594));
} else {
return result;
}
});
G__14595 = function(result,input){
switch(arguments.length){
case 0:
return G__14595__0.call(this);
case 1:
return G__14595__1.call(this,result);
case 2:
return G__14595__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14595.cljs$core$IFn$_invoke$arity$0 = G__14595__0;
G__14595.cljs$core$IFn$_invoke$arity$1 = G__14595__1;
G__14595.cljs$core$IFn$_invoke$arity$2 = G__14595__2;
return G__14595;
})()
;})(ia))
});
});
var take_nth__2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons(cljs.core.first(s),take_nth.cljs$core$IFn$_invoke$arity$2(n,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s)));
} else {
return null;
}
}),null,null));
});
take_nth = function(n,coll){
switch(arguments.length){
case 1:
return take_nth__1.call(this,n);
case 2:
return take_nth__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_nth.cljs$core$IFn$_invoke$arity$1 = take_nth__1;
take_nth.cljs$core$IFn$_invoke$arity$2 = take_nth__2;
return take_nth;
})()
;
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(pred,coll),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(pred,coll)], null);
});
/**
* Applies f to each value in coll, splitting it each time f returns a
* new value.  Returns a lazy seq of partitions.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_by = (function() {
var partition_by = null;
var partition_by__1 = (function (f){
return (function (rf){
var a = cljs.core.array_list();
var pa = (function (){var G__14611 = cljs.core.constant$keyword$15;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14611) : cljs.core.atom.call(null,G__14611));
})();
return ((function (a,pa){
return (function() {
var G__14623 = null;
var G__14623__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14623__1 = (function (result){
var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());
a.clear();

return cljs.core.unreduced((function (){var G__14612 = result;
var G__14613 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14612,G__14613) : rf.call(null,G__14612,G__14613));
})());
})());
var G__14614 = result__$1;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14614) : rf.call(null,G__14614));
});
var G__14623__2 = (function (result,input){
var pval = (function (){var G__14615 = pa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14615) : cljs.core.deref.call(null,G__14615));
})();
var val = (function (){var G__14616 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14616) : f.call(null,G__14616));
})();
var G__14617_14624 = pa;
var G__14618_14625 = val;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14617_14624,G__14618_14625) : cljs.core.reset_BANG_.call(null,G__14617_14624,G__14618_14625));

if((cljs.core.keyword_identical_QMARK_(pval,cljs.core.constant$keyword$15)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,pval))){
a.add(input);

return result;
} else {
var v = cljs.core.vec(a.toArray());
a.clear();

var ret = (function (){var G__14619 = result;
var G__14620 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14619,G__14620) : rf.call(null,G__14619,G__14620));
})();
if(cljs.core.reduced_QMARK_(ret)){
} else {
a.add(input);
}

return ret;
}
});
G__14623 = function(result,input){
switch(arguments.length){
case 0:
return G__14623__0.call(this);
case 1:
return G__14623__1.call(this,result);
case 2:
return G__14623__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14623.cljs$core$IFn$_invoke$arity$0 = G__14623__0;
G__14623.cljs$core$IFn$_invoke$arity$1 = G__14623__1;
G__14623.cljs$core$IFn$_invoke$arity$2 = G__14623__2;
return G__14623;
})()
;})(a,pa))
});
});
var partition_by__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var fst = cljs.core.first(s);
var fv = (function (){var G__14621 = fst;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14621) : f.call(null,G__14621));
})();
var run = cljs.core.cons(fst,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (fst,fv,s,temp__4126__auto__){
return (function (p1__14596_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fv,(function (){var G__14622 = p1__14596_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14622) : f.call(null,G__14622));
})());
});})(fst,fv,s,temp__4126__auto__))
,cljs.core.next(s)));
return cljs.core.cons(run,partition_by.cljs$core$IFn$_invoke$arity$2(f,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(run),s))));
} else {
return null;
}
}),null,null));
});
partition_by = function(f,coll){
switch(arguments.length){
case 1:
return partition_by__1.call(this,f);
case 2:
return partition_by__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$1 = partition_by__1;
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
return partition_by;
})()
;
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (counts,x){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(counts,x,(cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,x,(0)) + (1)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4124__auto__ = cljs.core.seq(coll);
if(temp__4124__auto__){
var s = temp__4124__auto__;
return reductions.cljs$core$IFn$_invoke$arity$3(f,cljs.core.first(s),cljs.core.rest(s));
} else {
return cljs.core._conj(cljs.core.List.EMPTY,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
}
}),null,null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons(init,(new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return reductions.cljs$core$IFn$_invoke$arity$3(f,(function (){var G__14634 = init;
var G__14635 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14634,G__14635) : f.call(null,G__14634,G__14635));
})(),cljs.core.rest(s));
} else {
return null;
}
}),null,null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reductions.cljs$core$IFn$_invoke$arity$2 = reductions__2;
reductions.cljs$core$IFn$_invoke$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__14730 = null;
var G__14730__0 = (function (){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})()],null));
});
var G__14730__1 = (function (x){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__14688 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14688) : f.call(null,G__14688));
})()],null));
});
var G__14730__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__14689 = x;
var G__14690 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14689,G__14690) : f.call(null,G__14689,G__14690));
})()],null));
});
var G__14730__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__14691 = x;
var G__14692 = y;
var G__14693 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14691,G__14692,G__14693) : f.call(null,G__14691,G__14692,G__14693));
})()],null));
});
var G__14730__4 = (function() { 
var G__14731__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args)],null));
};
var G__14731 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14731__delegate.call(this,x,y,z,args);};
G__14731.cljs$lang$maxFixedArity = 3;
G__14731.cljs$lang$applyTo = (function (arglist__14732){
var x = cljs.core.first(arglist__14732);
arglist__14732 = cljs.core.next(arglist__14732);
var y = cljs.core.first(arglist__14732);
arglist__14732 = cljs.core.next(arglist__14732);
var z = cljs.core.first(arglist__14732);
var args = cljs.core.rest(arglist__14732);
return G__14731__delegate(x,y,z,args);
});
G__14731.cljs$core$IFn$_invoke$arity$variadic = G__14731__delegate;
return G__14731;
})()
;
G__14730 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14730__0.call(this);
case 1:
return G__14730__1.call(this,x);
case 2:
return G__14730__2.call(this,x,y);
case 3:
return G__14730__3.call(this,x,y,z);
default:
return G__14730__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14730.cljs$lang$maxFixedArity = 3;
G__14730.cljs$lang$applyTo = G__14730__4.cljs$lang$applyTo;
G__14730.cljs$core$IFn$_invoke$arity$0 = G__14730__0;
G__14730.cljs$core$IFn$_invoke$arity$1 = G__14730__1;
G__14730.cljs$core$IFn$_invoke$arity$2 = G__14730__2;
G__14730.cljs$core$IFn$_invoke$arity$3 = G__14730__3;
G__14730.cljs$core$IFn$_invoke$arity$variadic = G__14730__4.cljs$core$IFn$_invoke$arity$variadic;
return G__14730;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__14733 = null;
var G__14733__0 = (function (){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})()],null));
});
var G__14733__1 = (function (x){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__14694 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14694) : f.call(null,G__14694));
})(),(function (){var G__14695 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__14695) : g.call(null,G__14695));
})()],null));
});
var G__14733__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__14696 = x;
var G__14697 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14696,G__14697) : f.call(null,G__14696,G__14697));
})(),(function (){var G__14698 = x;
var G__14699 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__14698,G__14699) : g.call(null,G__14698,G__14699));
})()],null));
});
var G__14733__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__14700 = x;
var G__14701 = y;
var G__14702 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14700,G__14701,G__14702) : f.call(null,G__14700,G__14701,G__14702));
})(),(function (){var G__14703 = x;
var G__14704 = y;
var G__14705 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__14703,G__14704,G__14705) : g.call(null,G__14703,G__14704,G__14705));
})()],null));
});
var G__14733__4 = (function() { 
var G__14734__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args)],null));
};
var G__14734 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14734__delegate.call(this,x,y,z,args);};
G__14734.cljs$lang$maxFixedArity = 3;
G__14734.cljs$lang$applyTo = (function (arglist__14735){
var x = cljs.core.first(arglist__14735);
arglist__14735 = cljs.core.next(arglist__14735);
var y = cljs.core.first(arglist__14735);
arglist__14735 = cljs.core.next(arglist__14735);
var z = cljs.core.first(arglist__14735);
var args = cljs.core.rest(arglist__14735);
return G__14734__delegate(x,y,z,args);
});
G__14734.cljs$core$IFn$_invoke$arity$variadic = G__14734__delegate;
return G__14734;
})()
;
G__14733 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14733__0.call(this);
case 1:
return G__14733__1.call(this,x);
case 2:
return G__14733__2.call(this,x,y);
case 3:
return G__14733__3.call(this,x,y,z);
default:
return G__14733__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14733.cljs$lang$maxFixedArity = 3;
G__14733.cljs$lang$applyTo = G__14733__4.cljs$lang$applyTo;
G__14733.cljs$core$IFn$_invoke$arity$0 = G__14733__0;
G__14733.cljs$core$IFn$_invoke$arity$1 = G__14733__1;
G__14733.cljs$core$IFn$_invoke$arity$2 = G__14733__2;
G__14733.cljs$core$IFn$_invoke$arity$3 = G__14733__3;
G__14733.cljs$core$IFn$_invoke$arity$variadic = G__14733__4.cljs$core$IFn$_invoke$arity$variadic;
return G__14733;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__14736 = null;
var G__14736__0 = (function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})(),(function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})()],null));
});
var G__14736__1 = (function (x){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__14706 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14706) : f.call(null,G__14706));
})(),(function (){var G__14707 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__14707) : g.call(null,G__14707));
})(),(function (){var G__14708 = x;
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__14708) : h.call(null,G__14708));
})()],null));
});
var G__14736__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__14709 = x;
var G__14710 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14709,G__14710) : f.call(null,G__14709,G__14710));
})(),(function (){var G__14711 = x;
var G__14712 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__14711,G__14712) : g.call(null,G__14711,G__14712));
})(),(function (){var G__14713 = x;
var G__14714 = y;
return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__14713,G__14714) : h.call(null,G__14713,G__14714));
})()],null));
});
var G__14736__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__14715 = x;
var G__14716 = y;
var G__14717 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14715,G__14716,G__14717) : f.call(null,G__14715,G__14716,G__14717));
})(),(function (){var G__14718 = x;
var G__14719 = y;
var G__14720 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__14718,G__14719,G__14720) : g.call(null,G__14718,G__14719,G__14720));
})(),(function (){var G__14721 = x;
var G__14722 = y;
var G__14723 = z;
return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__14721,G__14722,G__14723) : h.call(null,G__14721,G__14722,G__14723));
})()],null));
});
var G__14736__4 = (function() { 
var G__14737__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args)],null));
};
var G__14737 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14737__delegate.call(this,x,y,z,args);};
G__14737.cljs$lang$maxFixedArity = 3;
G__14737.cljs$lang$applyTo = (function (arglist__14738){
var x = cljs.core.first(arglist__14738);
arglist__14738 = cljs.core.next(arglist__14738);
var y = cljs.core.first(arglist__14738);
arglist__14738 = cljs.core.next(arglist__14738);
var z = cljs.core.first(arglist__14738);
var args = cljs.core.rest(arglist__14738);
return G__14737__delegate(x,y,z,args);
});
G__14737.cljs$core$IFn$_invoke$arity$variadic = G__14737__delegate;
return G__14737;
})()
;
G__14736 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14736__0.call(this);
case 1:
return G__14736__1.call(this,x);
case 2:
return G__14736__2.call(this,x,y);
case 3:
return G__14736__3.call(this,x,y,z);
default:
return G__14736__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14736.cljs$lang$maxFixedArity = 3;
G__14736.cljs$lang$applyTo = G__14736__4.cljs$lang$applyTo;
G__14736.cljs$core$IFn$_invoke$arity$0 = G__14736__0;
G__14736.cljs$core$IFn$_invoke$arity$1 = G__14736__1;
G__14736.cljs$core$IFn$_invoke$arity$2 = G__14736__2;
G__14736.cljs$core$IFn$_invoke$arity$3 = G__14736__3;
G__14736.cljs$core$IFn$_invoke$arity$variadic = G__14736__4.cljs$core$IFn$_invoke$arity$variadic;
return G__14736;
})()
});
var juxt__4 = (function() { 
var G__14739__delegate = function (f,g,h,fs){
var fs__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f,g,h,fs);
return ((function (fs__$1){
return (function() {
var G__14740 = null;
var G__14740__0 = (function (){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__14636_SHARP_,p2__14637_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__14636_SHARP_,(function (){return (p2__14637_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p2__14637_SHARP_.cljs$core$IFn$_invoke$arity$0() : p2__14637_SHARP_.call(null));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__14740__1 = (function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__14638_SHARP_,p2__14639_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__14638_SHARP_,(function (){var G__14724 = x;
return (p2__14639_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__14639_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14724) : p2__14639_SHARP_.call(null,G__14724));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__14740__2 = (function (x,y){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__14640_SHARP_,p2__14641_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__14640_SHARP_,(function (){var G__14725 = x;
var G__14726 = y;
return (p2__14641_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__14641_SHARP_.cljs$core$IFn$_invoke$arity$2(G__14725,G__14726) : p2__14641_SHARP_.call(null,G__14725,G__14726));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__14740__3 = (function (x,y,z){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__14642_SHARP_,p2__14643_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__14642_SHARP_,(function (){var G__14727 = x;
var G__14728 = y;
var G__14729 = z;
return (p2__14643_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__14643_SHARP_.cljs$core$IFn$_invoke$arity$3(G__14727,G__14728,G__14729) : p2__14643_SHARP_.call(null,G__14727,G__14728,G__14729));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__14740__4 = (function() { 
var G__14741__delegate = function (x,y,z,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__14644_SHARP_,p2__14645_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__14644_SHARP_,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p2__14645_SHARP_,x,y,z,args));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__14741 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14741__delegate.call(this,x,y,z,args);};
G__14741.cljs$lang$maxFixedArity = 3;
G__14741.cljs$lang$applyTo = (function (arglist__14742){
var x = cljs.core.first(arglist__14742);
arglist__14742 = cljs.core.next(arglist__14742);
var y = cljs.core.first(arglist__14742);
arglist__14742 = cljs.core.next(arglist__14742);
var z = cljs.core.first(arglist__14742);
var args = cljs.core.rest(arglist__14742);
return G__14741__delegate(x,y,z,args);
});
G__14741.cljs$core$IFn$_invoke$arity$variadic = G__14741__delegate;
return G__14741;
})()
;
G__14740 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14740__0.call(this);
case 1:
return G__14740__1.call(this,x);
case 2:
return G__14740__2.call(this,x,y);
case 3:
return G__14740__3.call(this,x,y,z);
default:
return G__14740__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14740.cljs$lang$maxFixedArity = 3;
G__14740.cljs$lang$applyTo = G__14740__4.cljs$lang$applyTo;
G__14740.cljs$core$IFn$_invoke$arity$0 = G__14740__0;
G__14740.cljs$core$IFn$_invoke$arity$1 = G__14740__1;
G__14740.cljs$core$IFn$_invoke$arity$2 = G__14740__2;
G__14740.cljs$core$IFn$_invoke$arity$3 = G__14740__3;
G__14740.cljs$core$IFn$_invoke$arity$variadic = G__14740__4.cljs$core$IFn$_invoke$arity$variadic;
return G__14740;
})()
;})(fs__$1))
};
var G__14739 = function (f,g,h,var_args){
var fs = null;
if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14739__delegate.call(this,f,g,h,fs);};
G__14739.cljs$lang$maxFixedArity = 3;
G__14739.cljs$lang$applyTo = (function (arglist__14743){
var f = cljs.core.first(arglist__14743);
arglist__14743 = cljs.core.next(arglist__14743);
var g = cljs.core.first(arglist__14743);
arglist__14743 = cljs.core.next(arglist__14743);
var h = cljs.core.first(arglist__14743);
var fs = cljs.core.rest(arglist__14743);
return G__14739__delegate(f,g,h,fs);
});
G__14739.cljs$core$IFn$_invoke$arity$variadic = G__14739__delegate;
return G__14739;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$core$IFn$_invoke$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$core$IFn$_invoke$arity$1 = juxt__1;
juxt.cljs$core$IFn$_invoke$arity$2 = juxt__2;
juxt.cljs$core$IFn$_invoke$arity$3 = juxt__3;
juxt.cljs$core$IFn$_invoke$arity$variadic = juxt__4.cljs$core$IFn$_invoke$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq(coll)){
var G__14744 = cljs.core.next(coll);
coll = G__14744;
continue;
} else {
return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if((cljs.core.seq(coll)) && ((n > (0)))){
var G__14745 = (n - (1));
var G__14746 = cljs.core.next(coll);
n = G__14745;
coll = G__14746;
continue;
} else {
return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dorun.cljs$core$IFn$_invoke$arity$1 = dorun__1;
dorun.cljs$core$IFn$_invoke$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(coll);

return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$2(n,coll);

return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
doall.cljs$core$IFn$_invoke$arity$1 = doall__1;
doall.cljs$core$IFn$_invoke$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return (o instanceof RegExp);
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
if(typeof s === 'string'){
var matches = re.exec(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(matches),s)){
if((cljs.core.count(matches) === (1))){
return cljs.core.first(matches);
} else {
return cljs.core.vec(matches);
}
} else {
return null;
}
} else {
throw (new TypeError("re-matches must match against a string."));
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
if(typeof s === 'string'){
var matches = re.exec(s);
if((matches == null)){
return null;
} else {
if((cljs.core.count(matches) === (1))){
return cljs.core.first(matches);
} else {
return cljs.core.vec(matches);
}
}
} else {
throw (new TypeError("re-find must match against a string."));
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data = cljs.core.re_find(re,s);
var match_idx = s.search(re);
var match_str = ((cljs.core.coll_QMARK_(match_data))?cljs.core.first(match_data):match_data);
var post_match = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(match_idx + cljs.core.count(match_str)));
if(cljs.core.truth_(match_data)){
return (new cljs.core.LazySeq(null,((function (match_data,match_idx,match_str,post_match){
return (function (){
return cljs.core.cons(match_data,((cljs.core.seq(post_match))?re_seq(re,post_match):null));
});})(match_data,match_idx,match_str,post_match))
,null,null));
} else {
return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
if((s instanceof RegExp)){
return s;
} else {
var vec__14750 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14750,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14750,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14750,(2),null);
return (new RegExp(pattern,flags));
}
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
var _STAR_print_level_STAR_14758 = cljs.core._STAR_print_level_STAR_;
try{cljs.core._STAR_print_level_STAR_ = (((cljs.core._STAR_print_level_STAR_ == null))?null:(cljs.core._STAR_print_level_STAR_ - (1)));

if((!((cljs.core._STAR_print_level_STAR_ == null))) && ((cljs.core._STAR_print_level_STAR_ < (0)))){
return cljs.core._write(writer,"#");
} else {
cljs.core._write(writer,begin);

if(cljs.core.seq(coll)){
var G__14759_14765 = cljs.core.first(coll);
var G__14760_14766 = writer;
var G__14761_14767 = opts;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__14759_14765,G__14760_14766,G__14761_14767) : print_one.call(null,G__14759_14765,G__14760_14766,G__14761_14767));
} else {
}

var coll_14768__$1 = cljs.core.next(coll);
var n_14769 = (cljs.core.constant$keyword$5.cljs$core$IFn$_invoke$arity$1(opts) - (1));
while(true){
if((coll_14768__$1) && (((n_14769 == null)) || (!((n_14769 === (0)))))){
cljs.core._write(writer,sep);

var G__14762_14770 = cljs.core.first(coll_14768__$1);
var G__14763_14771 = writer;
var G__14764_14772 = opts;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__14762_14770,G__14763_14771,G__14764_14772) : print_one.call(null,G__14762_14770,G__14763_14771,G__14764_14772));

var G__14773 = cljs.core.next(coll_14768__$1);
var G__14774 = (n_14769 - (1));
coll_14768__$1 = G__14773;
n_14769 = G__14774;
continue;
} else {
if((cljs.core.seq(coll_14768__$1)) && ((n_14769 === (0)))){
cljs.core._write(writer,sep);

cljs.core._write(writer,"...");
} else {
}
}
break;
}

return cljs.core._write(writer,end);
}
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_14758;
}});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){
var seq__14779 = cljs.core.seq(ss);
var chunk__14780 = null;
var count__14781 = (0);
var i__14782 = (0);
while(true){
if((i__14782 < count__14781)){
var s = chunk__14780.cljs$core$IIndexed$_nth$arity$2(null,i__14782);
cljs.core._write(writer,s);

var G__14783 = seq__14779;
var G__14784 = chunk__14780;
var G__14785 = count__14781;
var G__14786 = (i__14782 + (1));
seq__14779 = G__14783;
chunk__14780 = G__14784;
count__14781 = G__14785;
i__14782 = G__14786;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__14779);
if(temp__4126__auto__){
var seq__14779__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14779__$1)){
var c__4390__auto__ = cljs.core.chunk_first(seq__14779__$1);
var G__14787 = cljs.core.chunk_rest(seq__14779__$1);
var G__14788 = c__4390__auto__;
var G__14789 = cljs.core.count(c__4390__auto__);
var G__14790 = (0);
seq__14779 = G__14787;
chunk__14780 = G__14788;
count__14781 = G__14789;
i__14782 = G__14790;
continue;
} else {
var s = cljs.core.first(seq__14779__$1);
cljs.core._write(writer,s);

var G__14791 = cljs.core.next(seq__14779__$1);
var G__14792 = null;
var G__14793 = (0);
var G__14794 = (0);
seq__14779 = G__14791;
chunk__14780 = G__14792;
count__14781 = G__14793;
i__14782 = G__14794;
continue;
}
} else {
return null;
}
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;
if (arguments.length > 1) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return write_all__delegate.call(this,writer,ss);};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__14795){
var writer = cljs.core.first(arglist__14795);
var ss = cljs.core.rest(arglist__14795);
return write_all__delegate(writer,ss);
});
write_all.cljs$core$IFn$_invoke$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){
(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core._STAR_print_fn_STAR_.call(null,x));

return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.char_escapes = (function (){var obj14797 = {"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};
return obj14797;
})();
cljs.core.quote_string = (function quote_string(s){
return [cljs.core.str("\""),cljs.core.str(s.replace((function (){var G__14800 = "[\\\\\"\b\f\n\r\t]";
var G__14801 = "g";
return RegExp(G__14800,G__14801);
})(),(function (match){
return (cljs.core.char_escapes[match]);
}))),cljs.core.str("\"")].join('');
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){
if((obj == null)){
return cljs.core._write(writer,"nil");
} else {
if((void 0 === obj)){
return cljs.core._write(writer,"#<undefined>");
} else {
if(cljs.core.truth_((function (){var and__3596__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$3);
if(cljs.core.truth_(and__3596__auto__)){
var and__3596__auto____$1 = (function (){var G__14815 = obj;
if(G__14815){
var bit__4284__auto__ = (G__14815.cljs$lang$protocol_mask$partition0$ & (131072));
if((bit__4284__auto__) || (G__14815.cljs$core$IMeta$)){
return true;
} else {
if((!G__14815.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__14815);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__14815);
}
})();
if(and__3596__auto____$1){
return cljs.core.meta(obj);
} else {
return and__3596__auto____$1;
}
} else {
return and__3596__auto__;
}
})())){
cljs.core._write(writer,"^");

pr_writer(cljs.core.meta(obj),writer,opts);

cljs.core._write(writer," ");
} else {
}

if((obj == null)){
return cljs.core._write(writer,"nil");
} else {
if(obj.cljs$lang$type){
return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else {
if((function (){var G__14816 = obj;
if(G__14816){
var bit__4277__auto__ = (G__14816.cljs$lang$protocol_mask$partition0$ & (2147483648));
if((bit__4277__auto__) || (G__14816.cljs$core$IPrintWithWriter$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,opts);
} else {
if(((cljs.core.type(obj) === Boolean)) || (typeof obj === 'number')){
return cljs.core._write(writer,[cljs.core.str(obj)].join(''));
} else {
if(cljs.core.object_QMARK_(obj)){
cljs.core._write(writer,"#js ");

var G__14817 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(obj[k])], null);
}),cljs.core.js_keys(obj));
var G__14818 = pr_writer;
var G__14819 = writer;
var G__14820 = opts;
return (cljs.core.print_map.cljs$core$IFn$_invoke$arity$4 ? cljs.core.print_map.cljs$core$IFn$_invoke$arity$4(G__14817,G__14818,G__14819,G__14820) : cljs.core.print_map.call(null,G__14817,G__14818,G__14819,G__14820));
} else {
if(obj instanceof Array){
return cljs.core.pr_sequential_writer(writer,pr_writer,"#js ["," ","]",opts,obj);
} else {
if(cljs.core.truth_((function (){var G__14821 = obj;
return goog.isString(G__14821);
})())){
if(cljs.core.truth_(cljs.core.constant$keyword$2.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core._write(writer,cljs.core.quote_string(obj));
} else {
return cljs.core._write(writer,obj);
}
} else {
if(cljs.core.fn_QMARK_(obj)){
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",[cljs.core.str(obj)].join(''),">"], 0));
} else {
if((obj instanceof Date)){
var normalize = (function (n,len){
var ns = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count(ns) < len)){
var G__14823 = [cljs.core.str("0"),cljs.core.str(ns)].join('');
ns = G__14823;
continue;
} else {
return ns;
}
break;
}
});
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#inst \"",[cljs.core.str(obj.getUTCFullYear())].join(''),"-",normalize((obj.getUTCMonth() + (1)),(2)),"-",normalize(obj.getUTCDate(),(2)),"T",normalize(obj.getUTCHours(),(2)),":",normalize(obj.getUTCMinutes(),(2)),":",normalize(obj.getUTCSeconds(),(2)),".",normalize(obj.getUTCMilliseconds(),(3)),"-","00:00\""], 0));
} else {
if(cljs.core.regexp_QMARK_(obj)){
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#\"",obj.source,"\""], 0));
} else {
if((function (){var G__14822 = obj;
if(G__14822){
var bit__4284__auto__ = (G__14822.cljs$lang$protocol_mask$partition0$ & (2147483648));
if((bit__4284__auto__) || (G__14822.cljs$core$IPrintWithWriter$)){
return true;
} else {
if((!G__14822.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__14822);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__14822);
}
})()){
return cljs.core._pr_writer(obj,writer,opts);
} else {
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",[cljs.core.str(obj)].join(''),">"], 0));

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
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){
cljs.core.pr_writer(cljs.core.first(objs),writer,opts);

var seq__14828 = cljs.core.seq(cljs.core.next(objs));
var chunk__14829 = null;
var count__14830 = (0);
var i__14831 = (0);
while(true){
if((i__14831 < count__14830)){
var obj = chunk__14829.cljs$core$IIndexed$_nth$arity$2(null,i__14831);
cljs.core._write(writer," ");

cljs.core.pr_writer(obj,writer,opts);

var G__14832 = seq__14828;
var G__14833 = chunk__14829;
var G__14834 = count__14830;
var G__14835 = (i__14831 + (1));
seq__14828 = G__14832;
chunk__14829 = G__14833;
count__14830 = G__14834;
i__14831 = G__14835;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__14828);
if(temp__4126__auto__){
var seq__14828__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14828__$1)){
var c__4390__auto__ = cljs.core.chunk_first(seq__14828__$1);
var G__14836 = cljs.core.chunk_rest(seq__14828__$1);
var G__14837 = c__4390__auto__;
var G__14838 = cljs.core.count(c__4390__auto__);
var G__14839 = (0);
seq__14828 = G__14836;
chunk__14829 = G__14837;
count__14830 = G__14838;
i__14831 = G__14839;
continue;
} else {
var obj = cljs.core.first(seq__14828__$1);
cljs.core._write(writer," ");

cljs.core.pr_writer(obj,writer,opts);

var G__14840 = cljs.core.next(seq__14828__$1);
var G__14841 = null;
var G__14842 = (0);
var G__14843 = (0);
seq__14828 = G__14840;
chunk__14829 = G__14841;
count__14830 = G__14842;
i__14831 = G__14843;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
cljs.core.pr_seq_writer(objs,writer,opts);

writer.cljs$core$IWriter$_flush$arity$1(null);

return sb;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_(objs)){
return "";
} else {
return [cljs.core.str(cljs.core.pr_sb_with_opts(objs,opts))].join('');
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_(objs)){
return "\n";
} else {
var sb = cljs.core.pr_sb_with_opts(objs,opts);
sb.append("\n");

return [cljs.core.str(sb)].join('');
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
return cljs.core.string_print(cljs.core.pr_str_with_opts(objs,opts));
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print("\n");

if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$1))){
return cljs.core.flush();
} else {
return null;
}
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintWithWriter.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.pr_opts());
};
var pr_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this,objs);};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__14844){
var objs = cljs.core.seq(arglist__14844);
return pr_str__delegate(objs);
});
pr_str.cljs$core$IFn$_invoke$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.pr_opts());
};
var prn_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this,objs);};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__14845){
var objs = cljs.core.seq(arglist__14845);
return prn_str__delegate(objs);
});
prn_str.cljs$core$IFn$_invoke$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
};
var pr = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this,objs);};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__14846){
var objs = cljs.core.seq(arglist__14846);
return pr__delegate(objs);
});
pr.cljs$core$IFn$_invoke$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this,objs);};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__14847){
var objs = cljs.core.seq(arglist__14847);
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$core$IFn$_invoke$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));
};
var print_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this,objs);};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__14848){
var objs = cljs.core.seq(arglist__14848);
return print_str__delegate(objs);
});
print_str.cljs$core$IFn$_invoke$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));

if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_)){
return cljs.core.newline(cljs.core.pr_opts());
} else {
return null;
}
};
var println = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this,objs);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__14849){
var objs = cljs.core.seq(arglist__14849);
return println__delegate(objs);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));
};
var println_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this,objs);};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__14850){
var objs = cljs.core.seq(arglist__14850);
return println_str__delegate(objs);
});
println_str.cljs$core$IFn$_invoke$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.pr_opts());

if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_)){
return cljs.core.newline(cljs.core.pr_opts());
} else {
return null;
}
};
var prn = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this,objs);};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__14851){
var objs = cljs.core.seq(arglist__14851);
return prn__delegate(objs);
});
prn.cljs$core$IFn$_invoke$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.print_map = (function print_map(m,print_one,writer,opts){
return cljs.core.pr_sequential_writer(writer,(function (e,w,opts__$1){
var G__14858_14864 = cljs.core.key(e);
var G__14859_14865 = w;
var G__14860_14866 = opts__$1;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__14858_14864,G__14859_14865,G__14860_14866) : print_one.call(null,G__14858_14864,G__14859_14865,G__14860_14866));

cljs.core._write(w," ");

var G__14861 = cljs.core.val(e);
var G__14862 = w;
var G__14863 = opts__$1;
return (print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__14861,G__14862,G__14863) : print_one.call(null,G__14861,G__14862,G__14863));
}),"{",", ","}",opts,cljs.core.seq(m));
});
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ES6IteratorSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});

cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(a__$1.state,writer,opts);

return cljs.core._write(writer,">");
});

cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core._write(writer,"()");
});

cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq(coll__$1));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});

cljs.core.Subvec.prototype.cljs$core$IComparable$ = true;

cljs.core.Subvec.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});

cljs.core.Keyword.prototype.cljs$core$IComparable$ = true;

cljs.core.Keyword.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_symbols(x__$1,y);
});

cljs.core.Symbol.prototype.cljs$core$IComparable$ = true;

cljs.core.Symbol.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_symbols(x__$1,y);
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this,iref,f,args);};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14867){
var iref = cljs.core.first(arglist__14867);
arglist__14867 = cljs.core.next(arglist__14867);
var f = cljs.core.first(arglist__14867);
var args = cljs.core.rest(arglist__14867);
return alter_meta_BANG___delegate(iref,f,args);
});
alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch(iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch(iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.cljs$core$IFn$_invoke$arity$1("G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null)){
cljs.core.gensym_counter = (function (){var G__14870 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14870) : cljs.core.atom.call(null,G__14870));
})();
} else {
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gensym.cljs$core$IFn$_invoke$arity$0 = gensym__0;
gensym.cljs$core$IFn$_invoke$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = (1);
cljs.core.fixture2 = (2);

/**
* @constructor
*/
cljs.core.Delay = (function (f,value){
this.f = f;
this.value = value;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return cljs.core.not(self__.f);
});

cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.f)){
self__.value = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();

self__.f = null;
} else {
}

return self__.value;
});

cljs.core.Delay.cljs$lang$type = true;

cljs.core.Delay.cljs$lang$ctorStr = "cljs.core/Delay";

cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/Delay");
});

cljs.core.__GT_Delay = (function __GT_Delay(f,value){
return (new cljs.core.Delay(f,value));
});

/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return (x instanceof cljs.core.Delay);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_(x)){
var G__14872 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14872) : cljs.core.deref.call(null,G__14872));
} else {
return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_(d);
});
cljs.core.preserving_reduced = (function preserving_reduced(rf){
return (function (p1__14873_SHARP_,p2__14874_SHARP_){
var ret = (function (){var G__14877 = p1__14873_SHARP_;
var G__14878 = p2__14874_SHARP_;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14877,G__14878) : rf.call(null,G__14877,G__14878));
})();
if(cljs.core.reduced_QMARK_(ret)){
return cljs.core.reduced(ret);
} else {
return ret;
}
});
});
/**
* A transducer which concatenates the contents of each input, which must be a
* collection, into the reduction.
*/
cljs.core.cat = (function cat(rf){
var rf1 = cljs.core.preserving_reduced(rf);
return ((function (rf1){
return (function() {
var G__14881 = null;
var G__14881__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14881__1 = (function (result){
var G__14880 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14880) : rf.call(null,G__14880));
});
var G__14881__2 = (function (result,input){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf1,result,input);
});
G__14881 = function(result,input){
switch(arguments.length){
case 0:
return G__14881__0.call(this);
case 1:
return G__14881__1.call(this,result);
case 2:
return G__14881__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14881.cljs$core$IFn$_invoke$arity$0 = G__14881__0;
G__14881.cljs$core$IFn$_invoke$arity$1 = G__14881__1;
G__14881.cljs$core$IFn$_invoke$arity$2 = G__14881__2;
return G__14881;
})()
;})(rf1))
});
/**
* Returns a lazy sequence removing consecutive duplicates in coll.
* Returns a transducer when no collection is provided.
*/
cljs.core.dedupe = (function() {
var dedupe = null;
var dedupe__0 = (function (){
return (function (rf){
var pa = (function (){var G__14889 = cljs.core.constant$keyword$15;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14889) : cljs.core.atom.call(null,G__14889));
})();
return ((function (pa){
return (function() {
var G__14896 = null;
var G__14896__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14896__1 = (function (result){
var G__14890 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14890) : rf.call(null,G__14890));
});
var G__14896__2 = (function (result,input){
var prior = (function (){var G__14891 = pa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14891) : cljs.core.deref.call(null,G__14891));
})();
var G__14892_14897 = pa;
var G__14893_14898 = input;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14892_14897,G__14893_14898) : cljs.core.reset_BANG_.call(null,G__14892_14897,G__14893_14898));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,input)){
return result;
} else {
var G__14894 = result;
var G__14895 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14894,G__14895) : rf.call(null,G__14894,G__14895));
}
});
G__14896 = function(result,input){
switch(arguments.length){
case 0:
return G__14896__0.call(this);
case 1:
return G__14896__1.call(this,result);
case 2:
return G__14896__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14896.cljs$core$IFn$_invoke$arity$0 = G__14896__0;
G__14896.cljs$core$IFn$_invoke$arity$1 = G__14896__1;
G__14896.cljs$core$IFn$_invoke$arity$2 = G__14896__2;
return G__14896;
})()
;})(pa))
});
});
var dedupe__1 = (function (coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(dedupe.cljs$core$IFn$_invoke$arity$0(),coll);
});
dedupe = function(coll){
switch(arguments.length){
case 0:
return dedupe__0.call(this);
case 1:
return dedupe__1.call(this,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dedupe.cljs$core$IFn$_invoke$arity$0 = dedupe__0;
dedupe.cljs$core$IFn$_invoke$arity$1 = dedupe__1;
return dedupe;
})()
;
/**
* Returns items from coll with random probability of prob (0.0 -
* 1.0).  Returns a transducer when no collection is provided.
*/
cljs.core.random_sample = (function() {
var random_sample = null;
var random_sample__1 = (function (prob){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (_){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}));
});
var random_sample__2 = (function (prob,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (_){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}),coll);
});
random_sample = function(prob,coll){
switch(arguments.length){
case 1:
return random_sample__1.call(this,prob);
case 2:
return random_sample__2.call(this,prob,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_sample.cljs$core$IFn$_invoke$arity$1 = random_sample__1;
random_sample.cljs$core$IFn$_invoke$arity$2 = random_sample__2;
return random_sample;
})()
;

/**
* @constructor
*/
cljs.core.Eduction = (function (xform,coll){
this.xform = xform;
this.coll = coll;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2173173760;
})
cljs.core.Eduction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll__$1,writer,opts){
var self__ = this;
var coll__$2 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$2);
});

cljs.core.Eduction.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(self__.xform,f,init,self__.coll);
});

cljs.core.Eduction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(self__.xform,self__.coll));
});

cljs.core.Eduction.cljs$lang$type = true;

cljs.core.Eduction.cljs$lang$ctorStr = "cljs.core/Eduction";

cljs.core.Eduction.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/Eduction");
});

cljs.core.__GT_Eduction = (function __GT_Eduction(xform,coll){
return (new cljs.core.Eduction(xform,coll));
});

(cljs.core.Eduction.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4581__auto__ = this;
return cljs.core.es6_iterator(this__4581__auto__);
}));
/**
* Returns a reducible/iterable/seqable application of
* the transducer to the items in coll. Note that these applications
* will be performed every time iterator/seq/reduce is called.
*/
cljs.core.eduction = (function eduction(xform,coll){
return (new cljs.core.Eduction(xform,coll));
});
/**
* Runs the supplied procedure (via reduce), for purposes of side
* effects, on successive items in the collection. Returns nil
*/
cljs.core.run_BANG_ = (function run_BANG_(proc,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14900_SHARP_,p2__14899_SHARP_){
var G__14902 = p2__14899_SHARP_;
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(G__14902) : proc.call(null,G__14902));
}),null,coll);
});

cljs.core.IEncodeJS = (function (){var obj14904 = {};
return obj14904;
})();

cljs.core._clj__GT_js = (function _clj__GT_js(x){
if((function (){var and__3596__auto__ = x;
if(and__3596__auto__){
return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;
} else {
return and__3596__auto__;
}
})()){
return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else {
var x__4247__auto__ = (((x == null))?null:x);
return (function (){var or__3608__auto__ = (cljs.core._clj__GT_js[(function (){var G__14908 = x__4247__auto__;
return goog.typeOf(G__14908);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._clj__GT_js["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeJS.-clj->js",x);
}
}
})().call(null,x);
}
});

cljs.core._key__GT_js = (function _key__GT_js(x){
if((function (){var and__3596__auto__ = x;
if(and__3596__auto__){
return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;
} else {
return and__3596__auto__;
}
})()){
return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else {
var x__4247__auto__ = (((x == null))?null:x);
return (function (){var or__3608__auto__ = (cljs.core._key__GT_js[(function (){var G__14912 = x__4247__auto__;
return goog.typeOf(G__14912);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._key__GT_js["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeJS.-key->js",x);
}
}
})().call(null,x);
}
});

cljs.core.key__GT_js = (function key__GT_js(k){
if((function (){var G__14915 = k;
if(G__14915){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__14915.cljs$core$IEncodeJS$;
}
})())){
return true;
} else {
if((!G__14915.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__14915);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__14915);
}
})()){
return cljs.core._clj__GT_js(k);
} else {
if((typeof k === 'string') || (typeof k === 'number') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))){
var G__14916 = k;
return (cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(G__14916) : cljs.core.clj__GT_js.call(null,G__14916));
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k], 0));
}
}
});
/**
* Recursively transforms ClojureScript values to JavaScript.
* sets/vectors/lists become Arrays, Keywords and Symbol become Strings,
* Maps become Objects. Arbitrary keys are encoded to by key->js.
*/
cljs.core.clj__GT_js = (function clj__GT_js(x){
if((x == null)){
return null;
} else {
if((function (){var G__14932 = x;
if(G__14932){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__14932.cljs$core$IEncodeJS$;
}
})())){
return true;
} else {
if((!G__14932.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__14932);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__14932);
}
})()){
return cljs.core._clj__GT_js(x);
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name(x);
} else {
if((x instanceof cljs.core.Symbol)){
return [cljs.core.str(x)].join('');
} else {
if(cljs.core.map_QMARK_(x)){
var m = (function (){var obj14934 = {};
return obj14934;
})();
var seq__14935_14945 = cljs.core.seq(x);
var chunk__14936_14946 = null;
var count__14937_14947 = (0);
var i__14938_14948 = (0);
while(true){
if((i__14938_14948 < count__14937_14947)){
var vec__14939_14949 = chunk__14936_14946.cljs$core$IIndexed$_nth$arity$2(null,i__14938_14948);
var k_14950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14939_14949,(0),null);
var v_14951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14939_14949,(1),null);
(m[cljs.core.key__GT_js(k_14950)] = clj__GT_js(v_14951));

var G__14952 = seq__14935_14945;
var G__14953 = chunk__14936_14946;
var G__14954 = count__14937_14947;
var G__14955 = (i__14938_14948 + (1));
seq__14935_14945 = G__14952;
chunk__14936_14946 = G__14953;
count__14937_14947 = G__14954;
i__14938_14948 = G__14955;
continue;
} else {
var temp__4126__auto___14956 = cljs.core.seq(seq__14935_14945);
if(temp__4126__auto___14956){
var seq__14935_14957__$1 = temp__4126__auto___14956;
if(cljs.core.chunked_seq_QMARK_(seq__14935_14957__$1)){
var c__4390__auto___14958 = cljs.core.chunk_first(seq__14935_14957__$1);
var G__14959 = cljs.core.chunk_rest(seq__14935_14957__$1);
var G__14960 = c__4390__auto___14958;
var G__14961 = cljs.core.count(c__4390__auto___14958);
var G__14962 = (0);
seq__14935_14945 = G__14959;
chunk__14936_14946 = G__14960;
count__14937_14947 = G__14961;
i__14938_14948 = G__14962;
continue;
} else {
var vec__14940_14963 = cljs.core.first(seq__14935_14957__$1);
var k_14964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14940_14963,(0),null);
var v_14965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14940_14963,(1),null);
(m[cljs.core.key__GT_js(k_14964)] = clj__GT_js(v_14965));

var G__14966 = cljs.core.next(seq__14935_14957__$1);
var G__14967 = null;
var G__14968 = (0);
var G__14969 = (0);
seq__14935_14945 = G__14966;
chunk__14936_14946 = G__14967;
count__14937_14947 = G__14968;
i__14938_14948 = G__14969;
continue;
}
} else {
}
}
break;
}

return m;
} else {
if(cljs.core.coll_QMARK_(x)){
var arr = [];
var seq__14941_14970 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clj__GT_js,x));
var chunk__14942_14971 = null;
var count__14943_14972 = (0);
var i__14944_14973 = (0);
while(true){
if((i__14944_14973 < count__14943_14972)){
var x_14974__$1 = chunk__14942_14971.cljs$core$IIndexed$_nth$arity$2(null,i__14944_14973);
arr.push(x_14974__$1);

var G__14975 = seq__14941_14970;
var G__14976 = chunk__14942_14971;
var G__14977 = count__14943_14972;
var G__14978 = (i__14944_14973 + (1));
seq__14941_14970 = G__14975;
chunk__14942_14971 = G__14976;
count__14943_14972 = G__14977;
i__14944_14973 = G__14978;
continue;
} else {
var temp__4126__auto___14979 = cljs.core.seq(seq__14941_14970);
if(temp__4126__auto___14979){
var seq__14941_14980__$1 = temp__4126__auto___14979;
if(cljs.core.chunked_seq_QMARK_(seq__14941_14980__$1)){
var c__4390__auto___14981 = cljs.core.chunk_first(seq__14941_14980__$1);
var G__14982 = cljs.core.chunk_rest(seq__14941_14980__$1);
var G__14983 = c__4390__auto___14981;
var G__14984 = cljs.core.count(c__4390__auto___14981);
var G__14985 = (0);
seq__14941_14970 = G__14982;
chunk__14942_14971 = G__14983;
count__14943_14972 = G__14984;
i__14944_14973 = G__14985;
continue;
} else {
var x_14986__$1 = cljs.core.first(seq__14941_14980__$1);
arr.push(x_14986__$1);

var G__14987 = cljs.core.next(seq__14941_14980__$1);
var G__14988 = null;
var G__14989 = (0);
var G__14990 = (0);
seq__14941_14970 = G__14987;
chunk__14942_14971 = G__14988;
count__14943_14972 = G__14989;
i__14944_14973 = G__14990;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
return x;

}
}
}
}
}
}
});

cljs.core.IEncodeClojure = (function (){var obj14992 = {};
return obj14992;
})();

cljs.core._js__GT_clj = (function _js__GT_clj(x,options){
if((function (){var and__3596__auto__ = x;
if(and__3596__auto__){
return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;
} else {
return and__3596__auto__;
}
})()){
return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);
} else {
var x__4247__auto__ = (((x == null))?null:x);
return (function (){var or__3608__auto__ = (cljs.core._js__GT_clj[(function (){var G__14996 = x__4247__auto__;
return goog.typeOf(G__14996);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._js__GT_clj["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeClojure.-js->clj",x);
}
}
})().call(null,x,options);
}
});

/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() {
var js__GT_clj = null;
var js__GT_clj__1 = (function (x){
return js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$16,false], null)], 0));
});
var js__GT_clj__2 = (function() { 
var G__15053__delegate = function (x,opts){
var map__15026 = opts;
var map__15026__$1 = ((cljs.core.seq_QMARK_(map__15026))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15026):map__15026);
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15026__$1,cljs.core.constant$keyword$16);
var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);
var f = ((function (map__15026,map__15026__$1,keywordize_keys,keyfn){
return (function thisfn(x__$1){
if((function (){var G__15042 = x__$1;
if(G__15042){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__15042.cljs$core$IEncodeClojure$;
}
})())){
return true;
} else {
if((!G__15042.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__15042);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__15042);
}
})()){
return cljs.core._js__GT_clj(x__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,opts));
} else {
if(cljs.core.seq_QMARK_(x__$1)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else {
if(cljs.core.coll_QMARK_(x__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(x__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else {
if(x__$1 instanceof Array){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else {
if((cljs.core.type(x__$1) === Object)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4359__auto__ = ((function (map__15026,map__15026__$1,keywordize_keys,keyfn){
return (function iter__15043(s__15044){
return (new cljs.core.LazySeq(null,((function (map__15026,map__15026__$1,keywordize_keys,keyfn){
return (function (){
var s__15044__$1 = s__15044;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__15044__$1);
if(temp__4126__auto__){
var s__15044__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15044__$2)){
var c__4357__auto__ = cljs.core.chunk_first(s__15044__$2);
var size__4358__auto__ = cljs.core.count(c__4357__auto__);
var b__15046 = cljs.core.chunk_buffer(size__4358__auto__);
if((function (){var i__15045 = (0);
while(true){
if((i__15045 < size__4358__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4357__auto__,i__15045);
cljs.core.chunk_append(b__15046,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15051 = k;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__15051) : keyfn.call(null,G__15051));
})(),thisfn((x__$1[k]))], null));

var G__15054 = (i__15045 + (1));
i__15045 = G__15054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15046),iter__15043(cljs.core.chunk_rest(s__15044__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15046),null);
}
} else {
var k = cljs.core.first(s__15044__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15052 = k;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__15052) : keyfn.call(null,G__15052));
})(),thisfn((x__$1[k]))], null),iter__15043(cljs.core.rest(s__15044__$2)));
}
} else {
return null;
}
break;
}
});})(map__15026,map__15026__$1,keywordize_keys,keyfn))
,null,null));
});})(map__15026,map__15026__$1,keywordize_keys,keyfn))
;
return iter__4359__auto__(cljs.core.js_keys(x__$1));
})());
} else {
return x__$1;

}
}
}
}
}
});})(map__15026,map__15026__$1,keywordize_keys,keyfn))
;
return f(x);
};
var G__15053 = function (x,var_args){
var opts = null;
if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15053__delegate.call(this,x,opts);};
G__15053.cljs$lang$maxFixedArity = 1;
G__15053.cljs$lang$applyTo = (function (arglist__15055){
var x = cljs.core.first(arglist__15055);
var opts = cljs.core.rest(arglist__15055);
return G__15053__delegate(x,opts);
});
G__15053.cljs$core$IFn$_invoke$arity$variadic = G__15053__delegate;
return G__15053;
})()
;
js__GT_clj = function(x,var_args){
var opts = var_args;
switch(arguments.length){
case 1:
return js__GT_clj__1.call(this,x);
default:
return js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = js__GT_clj__2.cljs$lang$applyTo;
js__GT_clj.cljs$core$IFn$_invoke$arity$1 = js__GT_clj__1;
js__GT_clj.cljs$core$IFn$_invoke$arity$variadic = js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem = (function (){var G__15058 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15058) : cljs.core.atom.call(null,G__15058));
})();
return ((function (mem){
return (function() { 
var G__15060__delegate = function (args){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__15059 = mem;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15059) : cljs.core.deref.call(null,G__15059));
})(),args,cljs.core.lookup_sentinel);
if((v === cljs.core.lookup_sentinel)){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args,ret);

return ret;
} else {
return v;
}
};
var G__15060 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15060__delegate.call(this,args);};
G__15060.cljs$lang$maxFixedArity = 0;
G__15060.cljs$lang$applyTo = (function (arglist__15061){
var args = cljs.core.seq(arglist__15061);
return G__15060__delegate(args);
});
G__15060.cljs$core$IFn$_invoke$arity$variadic = G__15060__delegate;
return G__15060;
})()
;
;})(mem))
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();
if(cljs.core.fn_QMARK_(ret)){
var G__15063 = ret;
f = G__15063;
continue;
} else {
return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__15064__delegate = function (f,args){
return trampoline.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));
};
var G__15064 = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15064__delegate.call(this,f,args);};
G__15064.cljs$lang$maxFixedArity = 1;
G__15064.cljs$lang$applyTo = (function (arglist__15065){
var f = cljs.core.first(arglist__15065);
var args = cljs.core.rest(arglist__15065);
return G__15064__delegate(f,args);
});
G__15064.cljs$core$IFn$_invoke$arity$variadic = G__15064__delegate;
return G__15064;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$core$IFn$_invoke$arity$1 = trampoline__1;
trampoline.cljs$core$IFn$_invoke$arity$variadic = trampoline__2.cljs$core$IFn$_invoke$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.cljs$core$IFn$_invoke$arity$1((1));
});
var rand__1 = (function (n){
return ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
var G__15068 = ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__15068) : Math.floor.call(null,G__15068));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (function (){var G__15070 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15070) : f.call(null,G__15070));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$17,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$18,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$19,cljs.core.PersistentArrayMap.EMPTY], null);
});
cljs.core._global_hierarchy = null;
cljs.core.get_global_hierarchy = (function get_global_hierarchy(){
if((cljs.core._global_hierarchy == null)){
cljs.core._global_hierarchy = (function (){var G__15072 = cljs.core.make_hierarchy();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15072) : cljs.core.atom.call(null,G__15072));
})();
} else {
}

return cljs.core._global_hierarchy;
});
/**
* @param {...*} var_args
*/
cljs.core.swap_global_hierarchy_BANG_ = (function() { 
var swap_global_hierarchy_BANG___delegate = function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,cljs.core.get_global_hierarchy(),f,args);
};
var swap_global_hierarchy_BANG_ = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return swap_global_hierarchy_BANG___delegate.call(this,f,args);};
swap_global_hierarchy_BANG_.cljs$lang$maxFixedArity = 1;
swap_global_hierarchy_BANG_.cljs$lang$applyTo = (function (arglist__15073){
var f = cljs.core.first(arglist__15073);
var args = cljs.core.rest(arglist__15073);
return swap_global_hierarchy_BANG___delegate(f,args);
});
swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_global_hierarchy_BANG___delegate;
return swap_global_hierarchy_BANG_;
})()
;
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__15138 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15138) : cljs.core.deref.call(null,G__15138));
})(),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3608__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child,parent);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = cljs.core.contains_QMARK_(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h).call(null,child),parent);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
var and__3596__auto__ = cljs.core.vector_QMARK_(parent);
if(and__3596__auto__){
var and__3596__auto____$1 = cljs.core.vector_QMARK_(child);
if(and__3596__auto____$1){
var and__3596__auto____$2 = (cljs.core.count(parent) === cljs.core.count(child));
if(and__3596__auto____$2){
var ret = true;
var i = (0);
while(true){
if((!(ret)) || ((i === cljs.core.count(parent)))){
return ret;
} else {
var G__15163 = isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,(function (){var G__15161 = i;
return (child.cljs$core$IFn$_invoke$arity$1 ? child.cljs$core$IFn$_invoke$arity$1(G__15161) : child.call(null,G__15161));
})(),(function (){var G__15162 = i;
return (parent.cljs$core$IFn$_invoke$arity$1 ? parent.cljs$core$IFn$_invoke$arity$1(G__15162) : parent.call(null,G__15162));
})());
var G__15164 = (i + (1));
ret = G__15163;
i = G__15164;
continue;
}
break;
}
} else {
return and__3596__auto____$2;
}
} else {
return and__3596__auto____$1;
}
} else {
return and__3596__auto__;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa_QMARK_.cljs$core$IFn$_invoke$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$core$IFn$_invoke$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.cljs$core$IFn$_invoke$arity$2((function (){var G__15168 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15168) : cljs.core.deref.call(null,G__15168));
})(),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$core$IFn$_invoke$arity$1 = parents__1;
parents.cljs$core$IFn$_invoke$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.cljs$core$IFn$_invoke$arity$2((function (){var G__15172 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15172) : cljs.core.deref.call(null,G__15172));
})(),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestors.cljs$core$IFn$_invoke$arity$1 = ancestors__1;
ancestors.cljs$core$IFn$_invoke$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.cljs$core$IFn$_invoke$arity$2((function (){var G__15176 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15176) : cljs.core.deref.call(null,G__15176));
})(),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
descendants.cljs$core$IFn$_invoke$arity$1 = descendants__1;
descendants.cljs$core$IFn$_invoke$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace(parent))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0)))].join('')));
}

cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(derive,cljs.core.array_seq([tag,parent], 0));

return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tag,parent)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0)))].join('')));
}

var tp = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h);
var td = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(h);
var ta = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h);
var tf = ((function (tp,td,ta){
return (function (m,source,sources,target,targets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tp,td,ta){
return (function (ret,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.get.cljs$core$IFn$_invoke$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(function (){var G__15185 = target;
return (targets.cljs$core$IFn$_invoke$arity$1 ? targets.cljs$core$IFn$_invoke$arity$1(G__15185) : targets.call(null,G__15185));
})())));
});})(tp,td,ta))
,m,cljs.core.cons(source,(function (){var G__15186 = source;
return (sources.cljs$core$IFn$_invoke$arity$1 ? sources.cljs$core$IFn$_invoke$arity$1(G__15186) : sources.call(null,G__15186));
})()));
});})(tp,td,ta))
;
var or__3608__auto__ = ((cljs.core.contains_QMARK_((function (){var G__15190 = tag;
return (tp.cljs$core$IFn$_invoke$arity$1 ? tp.cljs$core$IFn$_invoke$arity$1(G__15190) : tp.call(null,G__15190));
})(),parent))?null:(function (){
if(cljs.core.contains_QMARK_((function (){var G__15191 = tag;
return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__15191) : ta.call(null,G__15191));
})(),parent)){
throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else {
}

if(cljs.core.contains_QMARK_((function (){var G__15192 = parent;
return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__15192) : ta.call(null,G__15192));
})(),tag)){
throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$17,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h),tag,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),cljs.core.constant$keyword$19,tf(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h),tag,td,parent,ta),cljs.core.constant$keyword$18,tf(cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(h),parent,ta,tag,td)], null);
})()
);
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
derive.cljs$core$IFn$_invoke$arity$2 = derive__2;
derive.cljs$core$IFn$_invoke$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(underive,cljs.core.array_seq([tag,parent], 0));

return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h);
var childsParents = (cljs.core.truth_((function (){var G__15199 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__15199) : parentMap.call(null,G__15199));
})())?cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var G__15200 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__15200) : parentMap.call(null,G__15200));
})(),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents = (cljs.core.truth_(cljs.core.not_empty(childsParents))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parentMap,tag,childsParents):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parentMap,tag));
var deriv_seq = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parentMap,childsParents,newParents){
return (function (p1__15193_SHARP_){
return cljs.core.cons(cljs.core.first(p1__15193_SHARP_),cljs.core.interpose(cljs.core.first(p1__15193_SHARP_),cljs.core.second(p1__15193_SHARP_)));
});})(parentMap,childsParents,newParents))
,cljs.core.seq(newParents)));
if(cljs.core.contains_QMARK_((function (){var G__15201 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__15201) : parentMap.call(null,G__15201));
})(),parent)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parentMap,childsParents,newParents,deriv_seq){
return (function (p1__15194_SHARP_,p2__15195_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.derive,p1__15194_SHARP_,p2__15195_SHARP_);
});})(parentMap,childsParents,newParents,deriv_seq))
,cljs.core.make_hierarchy(),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),deriv_seq));
} else {
return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
underive.cljs$core$IFn$_invoke$arity$2 = underive__2;
underive.cljs$core$IFn$_invoke$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(method_cache,(function (_){
var G__15204 = method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15204) : cljs.core.deref.call(null,G__15204));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cached_hierarchy,(function (_){
var G__15205 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15205) : cljs.core.deref.call(null,G__15205));
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs = (function (){var G__15221 = prefer_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15221) : cljs.core.deref.call(null,G__15221));
})().call(null,x);
var or__3608__auto__ = (cljs.core.truth_((function (){var and__3596__auto__ = xprefs;
if(cljs.core.truth_(and__3596__auto__)){
var G__15223 = y;
return (xprefs.cljs$core$IFn$_invoke$arity$1 ? xprefs.cljs$core$IFn$_invoke$arity$1(G__15223) : xprefs.call(null,G__15223));
} else {
return and__3596__auto__;
}
})())?true:null);
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(y);
while(true){
if((cljs.core.count(ps) > (0))){
if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps),prefer_table))){
} else {
}

var G__15224 = cljs.core.rest(ps);
ps = G__15224;
continue;
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__3608__auto____$1)){
return or__3608__auto____$1;
} else {
var or__3608__auto____$2 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(x);
while(true){
if((cljs.core.count(ps) > (0))){
if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps),y,prefer_table))){
} else {
}

var G__15225 = cljs.core.rest(ps);
ps = G__15225;
continue;
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__3608__auto____$2)){
return or__3608__auto____$2;
} else {
return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3608__auto__ = cljs.core.prefers_STAR_(x,y,prefer_table);
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (be,p__15239){
var vec__15240 = p__15239;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15240,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15240,(1),null);
var e = vec__15240;
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__15241 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15241) : cljs.core.deref.call(null,G__15241));
})(),dispatch_val,k)){
var be2 = (cljs.core.truth_((function (){var or__3608__auto__ = (be == null);
if(or__3608__auto__){
return or__3608__auto__;
} else {
return cljs.core.dominates(k,cljs.core.first(be),prefer_table);
}
})())?e:be);
if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2),k,prefer_table))){
} else {
throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k),cljs.core.str(" and "),cljs.core.str(cljs.core.first(be2)),cljs.core.str(", and neither is preferred")].join('')));
}

return be2;
} else {
return be;
}
}),null,(function (){var G__15242 = method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15242) : cljs.core.deref.call(null,G__15242));
})());
if(cljs.core.truth_(best_entry)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__15243 = cached_hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15243) : cljs.core.deref.call(null,G__15243));
})(),(function (){var G__15244 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15244) : cljs.core.deref.call(null,G__15244));
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(method_cache,cljs.core.assoc,dispatch_val,cljs.core.second(best_entry));

return cljs.core.second(best_entry);
} else {
cljs.core.reset_cache(method_cache,method_table,cached_hierarchy,hierarchy);

return find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else {
return null;
}
});

cljs.core.IMultiFn = (function (){var obj15246 = {};
return obj15246;
})();

cljs.core._reset = (function _reset(mf){
if((function (){var and__3596__auto__ = mf;
if(and__3596__auto__){
return mf.cljs$core$IMultiFn$_reset$arity$1;
} else {
return and__3596__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else {
var x__4247__auto__ = (((mf == null))?null:mf);
return (function (){var or__3608__auto__ = (cljs.core._reset[(function (){var G__15250 = x__4247__auto__;
return goog.typeOf(G__15250);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._reset["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});

cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3596__auto__ = mf;
if(and__3596__auto__){
return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else {
return and__3596__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else {
var x__4247__auto__ = (((mf == null))?null:mf);
return (function (){var or__3608__auto__ = (cljs.core._add_method[(function (){var G__15254 = x__4247__auto__;
return goog.typeOf(G__15254);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._add_method["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});

cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3596__auto__ = mf;
if(and__3596__auto__){
return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else {
return and__3596__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else {
var x__4247__auto__ = (((mf == null))?null:mf);
return (function (){var or__3608__auto__ = (cljs.core._remove_method[(function (){var G__15258 = x__4247__auto__;
return goog.typeOf(G__15258);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._remove_method["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});

cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3596__auto__ = mf;
if(and__3596__auto__){
return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else {
return and__3596__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else {
var x__4247__auto__ = (((mf == null))?null:mf);
return (function (){var or__3608__auto__ = (cljs.core._prefer_method[(function (){var G__15262 = x__4247__auto__;
return goog.typeOf(G__15262);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._prefer_method["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});

cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3596__auto__ = mf;
if(and__3596__auto__){
return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else {
return and__3596__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else {
var x__4247__auto__ = (((mf == null))?null:mf);
return (function (){var or__3608__auto__ = (cljs.core._get_method[(function (){var G__15266 = x__4247__auto__;
return goog.typeOf(G__15266);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._get_method["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});

cljs.core._methods = (function _methods(mf){
if((function (){var and__3596__auto__ = mf;
if(and__3596__auto__){
return mf.cljs$core$IMultiFn$_methods$arity$1;
} else {
return and__3596__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else {
var x__4247__auto__ = (((mf == null))?null:mf);
return (function (){var or__3608__auto__ = (cljs.core._methods[(function (){var G__15270 = x__4247__auto__;
return goog.typeOf(G__15270);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._methods["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});

cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3596__auto__ = mf;
if(and__3596__auto__){
return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else {
return and__3596__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else {
var x__4247__auto__ = (((mf == null))?null:mf);
return (function (){var or__3608__auto__ = (cljs.core._prefers[(function (){var G__15274 = x__4247__auto__;
return goog.typeOf(G__15274);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core._prefers["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});

cljs.core.throw_no_method_error = (function throw_no_method_error(name,dispatch_val){
throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val)].join('')));
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194305;
this.cljs$lang$protocol_mask$partition1$ = 4352;
})
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__15276 = this$__$1;
return goog.getUid(G__15276);
});

cljs.core.MultiFn.prototype.cljs$core$INamed$_name$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._name(self__.name);
});

cljs.core.MultiFn.prototype.cljs$core$INamed$_namespace$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._namespace(self__.name);
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_table,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_cache,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cached_hierarchy,((function (mf__$1){
return (function (mf__$2){
return null;
});})(mf__$1))
);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.method_table,cljs.core.assoc,dispatch_val,method);

cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.method_table,cljs.core.dissoc,dispatch_val);

cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
var mf__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__15277 = self__.cached_hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15277) : cljs.core.deref.call(null,G__15277));
})(),(function (){var G__15278 = self__.hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15278) : cljs.core.deref.call(null,G__15278));
})())){
} else {
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}

var temp__4124__auto__ = (function (){var G__15279 = self__.method_cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15279) : cljs.core.deref.call(null,G__15279));
})().call(null,dispatch_val);
if(cljs.core.truth_(temp__4124__auto__)){
var target_fn = temp__4124__auto__;
return target_fn;
} else {
var temp__4124__auto____$1 = cljs.core.find_and_cache_best_method(self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);
if(cljs.core.truth_(temp__4124__auto____$1)){
var target_fn = temp__4124__auto____$1;
return target_fn;
} else {
return (function (){var G__15280 = self__.method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15280) : cljs.core.deref.call(null,G__15280));
})().call(null,self__.default_dispatch_val);
}
}
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var self__ = this;
var mf__$1 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x,dispatch_val_y,self__.prefer_table))){
throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(self__.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (old){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
});})(mf__$1))
);

return cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
var G__15281 = self__.method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15281) : cljs.core.deref.call(null,G__15281));
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
var G__15282 = self__.prefer_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15282) : cljs.core.deref.call(null,G__15282));
});

cljs.core.MultiFn.prototype.call = (function() {
var G__16123 = null;
var G__16123__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0() : self__.dispatch_fn.call(null));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$0 ? target_fn.cljs$core$IFn$_invoke$arity$0() : target_fn.call(null));
});
var G__16123__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15283 = a;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__15283) : self__.dispatch_fn.call(null,G__15283));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15284 = a;
return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__15284) : target_fn.call(null,G__15284));
});
var G__16123__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15285 = a;
var G__15286 = b;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__15285,G__15286) : self__.dispatch_fn.call(null,G__15285,G__15286));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15287 = a;
var G__15288 = b;
return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__15287,G__15288) : target_fn.call(null,G__15287,G__15288));
});
var G__16123__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15289 = a;
var G__15290 = b;
var G__15291 = c;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__15289,G__15290,G__15291) : self__.dispatch_fn.call(null,G__15289,G__15290,G__15291));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15292 = a;
var G__15293 = b;
var G__15294 = c;
return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__15292,G__15293,G__15294) : target_fn.call(null,G__15292,G__15293,G__15294));
});
var G__16123__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15295 = a;
var G__15296 = b;
var G__15297 = c;
var G__15298 = d;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__15295,G__15296,G__15297,G__15298) : self__.dispatch_fn.call(null,G__15295,G__15296,G__15297,G__15298));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15299 = a;
var G__15300 = b;
var G__15301 = c;
var G__15302 = d;
return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__15299,G__15300,G__15301,G__15302) : target_fn.call(null,G__15299,G__15300,G__15301,G__15302));
});
var G__16123__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15303 = a;
var G__15304 = b;
var G__15305 = c;
var G__15306 = d;
var G__15307 = e;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__15303,G__15304,G__15305,G__15306,G__15307) : self__.dispatch_fn.call(null,G__15303,G__15304,G__15305,G__15306,G__15307));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15308 = a;
var G__15309 = b;
var G__15310 = c;
var G__15311 = d;
var G__15312 = e;
return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__15308,G__15309,G__15310,G__15311,G__15312) : target_fn.call(null,G__15308,G__15309,G__15310,G__15311,G__15312));
});
var G__16123__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15313 = a;
var G__15314 = b;
var G__15315 = c;
var G__15316 = d;
var G__15317 = e;
var G__15318 = f;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__15313,G__15314,G__15315,G__15316,G__15317,G__15318) : self__.dispatch_fn.call(null,G__15313,G__15314,G__15315,G__15316,G__15317,G__15318));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15319 = a;
var G__15320 = b;
var G__15321 = c;
var G__15322 = d;
var G__15323 = e;
var G__15324 = f;
return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__15319,G__15320,G__15321,G__15322,G__15323,G__15324) : target_fn.call(null,G__15319,G__15320,G__15321,G__15322,G__15323,G__15324));
});
var G__16123__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15325 = a;
var G__15326 = b;
var G__15327 = c;
var G__15328 = d;
var G__15329 = e;
var G__15330 = f;
var G__15331 = g;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__15325,G__15326,G__15327,G__15328,G__15329,G__15330,G__15331) : self__.dispatch_fn.call(null,G__15325,G__15326,G__15327,G__15328,G__15329,G__15330,G__15331));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15332 = a;
var G__15333 = b;
var G__15334 = c;
var G__15335 = d;
var G__15336 = e;
var G__15337 = f;
var G__15338 = g;
return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__15332,G__15333,G__15334,G__15335,G__15336,G__15337,G__15338) : target_fn.call(null,G__15332,G__15333,G__15334,G__15335,G__15336,G__15337,G__15338));
});
var G__16123__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15339 = a;
var G__15340 = b;
var G__15341 = c;
var G__15342 = d;
var G__15343 = e;
var G__15344 = f;
var G__15345 = g;
var G__15346 = h;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__15339,G__15340,G__15341,G__15342,G__15343,G__15344,G__15345,G__15346) : self__.dispatch_fn.call(null,G__15339,G__15340,G__15341,G__15342,G__15343,G__15344,G__15345,G__15346));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15347 = a;
var G__15348 = b;
var G__15349 = c;
var G__15350 = d;
var G__15351 = e;
var G__15352 = f;
var G__15353 = g;
var G__15354 = h;
return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__15347,G__15348,G__15349,G__15350,G__15351,G__15352,G__15353,G__15354) : target_fn.call(null,G__15347,G__15348,G__15349,G__15350,G__15351,G__15352,G__15353,G__15354));
});
var G__16123__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15355 = a;
var G__15356 = b;
var G__15357 = c;
var G__15358 = d;
var G__15359 = e;
var G__15360 = f;
var G__15361 = g;
var G__15362 = h;
var G__15363 = i;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__15355,G__15356,G__15357,G__15358,G__15359,G__15360,G__15361,G__15362,G__15363) : self__.dispatch_fn.call(null,G__15355,G__15356,G__15357,G__15358,G__15359,G__15360,G__15361,G__15362,G__15363));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15364 = a;
var G__15365 = b;
var G__15366 = c;
var G__15367 = d;
var G__15368 = e;
var G__15369 = f;
var G__15370 = g;
var G__15371 = h;
var G__15372 = i;
return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__15364,G__15365,G__15366,G__15367,G__15368,G__15369,G__15370,G__15371,G__15372) : target_fn.call(null,G__15364,G__15365,G__15366,G__15367,G__15368,G__15369,G__15370,G__15371,G__15372));
});
var G__16123__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15373 = a;
var G__15374 = b;
var G__15375 = c;
var G__15376 = d;
var G__15377 = e;
var G__15378 = f;
var G__15379 = g;
var G__15380 = h;
var G__15381 = i;
var G__15382 = j;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__15373,G__15374,G__15375,G__15376,G__15377,G__15378,G__15379,G__15380,G__15381,G__15382) : self__.dispatch_fn.call(null,G__15373,G__15374,G__15375,G__15376,G__15377,G__15378,G__15379,G__15380,G__15381,G__15382));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15383 = a;
var G__15384 = b;
var G__15385 = c;
var G__15386 = d;
var G__15387 = e;
var G__15388 = f;
var G__15389 = g;
var G__15390 = h;
var G__15391 = i;
var G__15392 = j;
return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__15383,G__15384,G__15385,G__15386,G__15387,G__15388,G__15389,G__15390,G__15391,G__15392) : target_fn.call(null,G__15383,G__15384,G__15385,G__15386,G__15387,G__15388,G__15389,G__15390,G__15391,G__15392));
});
var G__16123__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15393 = a;
var G__15394 = b;
var G__15395 = c;
var G__15396 = d;
var G__15397 = e;
var G__15398 = f;
var G__15399 = g;
var G__15400 = h;
var G__15401 = i;
var G__15402 = j;
var G__15403 = k;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__15393,G__15394,G__15395,G__15396,G__15397,G__15398,G__15399,G__15400,G__15401,G__15402,G__15403) : self__.dispatch_fn.call(null,G__15393,G__15394,G__15395,G__15396,G__15397,G__15398,G__15399,G__15400,G__15401,G__15402,G__15403));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15404 = a;
var G__15405 = b;
var G__15406 = c;
var G__15407 = d;
var G__15408 = e;
var G__15409 = f;
var G__15410 = g;
var G__15411 = h;
var G__15412 = i;
var G__15413 = j;
var G__15414 = k;
return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__15404,G__15405,G__15406,G__15407,G__15408,G__15409,G__15410,G__15411,G__15412,G__15413,G__15414) : target_fn.call(null,G__15404,G__15405,G__15406,G__15407,G__15408,G__15409,G__15410,G__15411,G__15412,G__15413,G__15414));
});
var G__16123__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15415 = a;
var G__15416 = b;
var G__15417 = c;
var G__15418 = d;
var G__15419 = e;
var G__15420 = f;
var G__15421 = g;
var G__15422 = h;
var G__15423 = i;
var G__15424 = j;
var G__15425 = k;
var G__15426 = l;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__15415,G__15416,G__15417,G__15418,G__15419,G__15420,G__15421,G__15422,G__15423,G__15424,G__15425,G__15426) : self__.dispatch_fn.call(null,G__15415,G__15416,G__15417,G__15418,G__15419,G__15420,G__15421,G__15422,G__15423,G__15424,G__15425,G__15426));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15427 = a;
var G__15428 = b;
var G__15429 = c;
var G__15430 = d;
var G__15431 = e;
var G__15432 = f;
var G__15433 = g;
var G__15434 = h;
var G__15435 = i;
var G__15436 = j;
var G__15437 = k;
var G__15438 = l;
return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__15427,G__15428,G__15429,G__15430,G__15431,G__15432,G__15433,G__15434,G__15435,G__15436,G__15437,G__15438) : target_fn.call(null,G__15427,G__15428,G__15429,G__15430,G__15431,G__15432,G__15433,G__15434,G__15435,G__15436,G__15437,G__15438));
});
var G__16123__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15439 = a;
var G__15440 = b;
var G__15441 = c;
var G__15442 = d;
var G__15443 = e;
var G__15444 = f;
var G__15445 = g;
var G__15446 = h;
var G__15447 = i;
var G__15448 = j;
var G__15449 = k;
var G__15450 = l;
var G__15451 = m;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__15439,G__15440,G__15441,G__15442,G__15443,G__15444,G__15445,G__15446,G__15447,G__15448,G__15449,G__15450,G__15451) : self__.dispatch_fn.call(null,G__15439,G__15440,G__15441,G__15442,G__15443,G__15444,G__15445,G__15446,G__15447,G__15448,G__15449,G__15450,G__15451));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15452 = a;
var G__15453 = b;
var G__15454 = c;
var G__15455 = d;
var G__15456 = e;
var G__15457 = f;
var G__15458 = g;
var G__15459 = h;
var G__15460 = i;
var G__15461 = j;
var G__15462 = k;
var G__15463 = l;
var G__15464 = m;
return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__15452,G__15453,G__15454,G__15455,G__15456,G__15457,G__15458,G__15459,G__15460,G__15461,G__15462,G__15463,G__15464) : target_fn.call(null,G__15452,G__15453,G__15454,G__15455,G__15456,G__15457,G__15458,G__15459,G__15460,G__15461,G__15462,G__15463,G__15464));
});
var G__16123__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15465 = a;
var G__15466 = b;
var G__15467 = c;
var G__15468 = d;
var G__15469 = e;
var G__15470 = f;
var G__15471 = g;
var G__15472 = h;
var G__15473 = i;
var G__15474 = j;
var G__15475 = k;
var G__15476 = l;
var G__15477 = m;
var G__15478 = n;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__15465,G__15466,G__15467,G__15468,G__15469,G__15470,G__15471,G__15472,G__15473,G__15474,G__15475,G__15476,G__15477,G__15478) : self__.dispatch_fn.call(null,G__15465,G__15466,G__15467,G__15468,G__15469,G__15470,G__15471,G__15472,G__15473,G__15474,G__15475,G__15476,G__15477,G__15478));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15479 = a;
var G__15480 = b;
var G__15481 = c;
var G__15482 = d;
var G__15483 = e;
var G__15484 = f;
var G__15485 = g;
var G__15486 = h;
var G__15487 = i;
var G__15488 = j;
var G__15489 = k;
var G__15490 = l;
var G__15491 = m;
var G__15492 = n;
return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__15479,G__15480,G__15481,G__15482,G__15483,G__15484,G__15485,G__15486,G__15487,G__15488,G__15489,G__15490,G__15491,G__15492) : target_fn.call(null,G__15479,G__15480,G__15481,G__15482,G__15483,G__15484,G__15485,G__15486,G__15487,G__15488,G__15489,G__15490,G__15491,G__15492));
});
var G__16123__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15493 = a;
var G__15494 = b;
var G__15495 = c;
var G__15496 = d;
var G__15497 = e;
var G__15498 = f;
var G__15499 = g;
var G__15500 = h;
var G__15501 = i;
var G__15502 = j;
var G__15503 = k;
var G__15504 = l;
var G__15505 = m;
var G__15506 = n;
var G__15507 = o;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__15493,G__15494,G__15495,G__15496,G__15497,G__15498,G__15499,G__15500,G__15501,G__15502,G__15503,G__15504,G__15505,G__15506,G__15507) : self__.dispatch_fn.call(null,G__15493,G__15494,G__15495,G__15496,G__15497,G__15498,G__15499,G__15500,G__15501,G__15502,G__15503,G__15504,G__15505,G__15506,G__15507));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15508 = a;
var G__15509 = b;
var G__15510 = c;
var G__15511 = d;
var G__15512 = e;
var G__15513 = f;
var G__15514 = g;
var G__15515 = h;
var G__15516 = i;
var G__15517 = j;
var G__15518 = k;
var G__15519 = l;
var G__15520 = m;
var G__15521 = n;
var G__15522 = o;
return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__15508,G__15509,G__15510,G__15511,G__15512,G__15513,G__15514,G__15515,G__15516,G__15517,G__15518,G__15519,G__15520,G__15521,G__15522) : target_fn.call(null,G__15508,G__15509,G__15510,G__15511,G__15512,G__15513,G__15514,G__15515,G__15516,G__15517,G__15518,G__15519,G__15520,G__15521,G__15522));
});
var G__16123__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15523 = a;
var G__15524 = b;
var G__15525 = c;
var G__15526 = d;
var G__15527 = e;
var G__15528 = f;
var G__15529 = g;
var G__15530 = h;
var G__15531 = i;
var G__15532 = j;
var G__15533 = k;
var G__15534 = l;
var G__15535 = m;
var G__15536 = n;
var G__15537 = o;
var G__15538 = p;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__15523,G__15524,G__15525,G__15526,G__15527,G__15528,G__15529,G__15530,G__15531,G__15532,G__15533,G__15534,G__15535,G__15536,G__15537,G__15538) : self__.dispatch_fn.call(null,G__15523,G__15524,G__15525,G__15526,G__15527,G__15528,G__15529,G__15530,G__15531,G__15532,G__15533,G__15534,G__15535,G__15536,G__15537,G__15538));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15539 = a;
var G__15540 = b;
var G__15541 = c;
var G__15542 = d;
var G__15543 = e;
var G__15544 = f;
var G__15545 = g;
var G__15546 = h;
var G__15547 = i;
var G__15548 = j;
var G__15549 = k;
var G__15550 = l;
var G__15551 = m;
var G__15552 = n;
var G__15553 = o;
var G__15554 = p;
return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__15539,G__15540,G__15541,G__15542,G__15543,G__15544,G__15545,G__15546,G__15547,G__15548,G__15549,G__15550,G__15551,G__15552,G__15553,G__15554) : target_fn.call(null,G__15539,G__15540,G__15541,G__15542,G__15543,G__15544,G__15545,G__15546,G__15547,G__15548,G__15549,G__15550,G__15551,G__15552,G__15553,G__15554));
});
var G__16123__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15555 = a;
var G__15556 = b;
var G__15557 = c;
var G__15558 = d;
var G__15559 = e;
var G__15560 = f;
var G__15561 = g;
var G__15562 = h;
var G__15563 = i;
var G__15564 = j;
var G__15565 = k;
var G__15566 = l;
var G__15567 = m;
var G__15568 = n;
var G__15569 = o;
var G__15570 = p;
var G__15571 = q;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__15555,G__15556,G__15557,G__15558,G__15559,G__15560,G__15561,G__15562,G__15563,G__15564,G__15565,G__15566,G__15567,G__15568,G__15569,G__15570,G__15571) : self__.dispatch_fn.call(null,G__15555,G__15556,G__15557,G__15558,G__15559,G__15560,G__15561,G__15562,G__15563,G__15564,G__15565,G__15566,G__15567,G__15568,G__15569,G__15570,G__15571));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15572 = a;
var G__15573 = b;
var G__15574 = c;
var G__15575 = d;
var G__15576 = e;
var G__15577 = f;
var G__15578 = g;
var G__15579 = h;
var G__15580 = i;
var G__15581 = j;
var G__15582 = k;
var G__15583 = l;
var G__15584 = m;
var G__15585 = n;
var G__15586 = o;
var G__15587 = p;
var G__15588 = q;
return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__15572,G__15573,G__15574,G__15575,G__15576,G__15577,G__15578,G__15579,G__15580,G__15581,G__15582,G__15583,G__15584,G__15585,G__15586,G__15587,G__15588) : target_fn.call(null,G__15572,G__15573,G__15574,G__15575,G__15576,G__15577,G__15578,G__15579,G__15580,G__15581,G__15582,G__15583,G__15584,G__15585,G__15586,G__15587,G__15588));
});
var G__16123__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15589 = a;
var G__15590 = b;
var G__15591 = c;
var G__15592 = d;
var G__15593 = e;
var G__15594 = f;
var G__15595 = g;
var G__15596 = h;
var G__15597 = i;
var G__15598 = j;
var G__15599 = k;
var G__15600 = l;
var G__15601 = m;
var G__15602 = n;
var G__15603 = o;
var G__15604 = p;
var G__15605 = q;
var G__15606 = r;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__15589,G__15590,G__15591,G__15592,G__15593,G__15594,G__15595,G__15596,G__15597,G__15598,G__15599,G__15600,G__15601,G__15602,G__15603,G__15604,G__15605,G__15606) : self__.dispatch_fn.call(null,G__15589,G__15590,G__15591,G__15592,G__15593,G__15594,G__15595,G__15596,G__15597,G__15598,G__15599,G__15600,G__15601,G__15602,G__15603,G__15604,G__15605,G__15606));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15607 = a;
var G__15608 = b;
var G__15609 = c;
var G__15610 = d;
var G__15611 = e;
var G__15612 = f;
var G__15613 = g;
var G__15614 = h;
var G__15615 = i;
var G__15616 = j;
var G__15617 = k;
var G__15618 = l;
var G__15619 = m;
var G__15620 = n;
var G__15621 = o;
var G__15622 = p;
var G__15623 = q;
var G__15624 = r;
return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__15607,G__15608,G__15609,G__15610,G__15611,G__15612,G__15613,G__15614,G__15615,G__15616,G__15617,G__15618,G__15619,G__15620,G__15621,G__15622,G__15623,G__15624) : target_fn.call(null,G__15607,G__15608,G__15609,G__15610,G__15611,G__15612,G__15613,G__15614,G__15615,G__15616,G__15617,G__15618,G__15619,G__15620,G__15621,G__15622,G__15623,G__15624));
});
var G__16123__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15625 = a;
var G__15626 = b;
var G__15627 = c;
var G__15628 = d;
var G__15629 = e;
var G__15630 = f;
var G__15631 = g;
var G__15632 = h;
var G__15633 = i;
var G__15634 = j;
var G__15635 = k;
var G__15636 = l;
var G__15637 = m;
var G__15638 = n;
var G__15639 = o;
var G__15640 = p;
var G__15641 = q;
var G__15642 = r;
var G__15643 = s;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__15625,G__15626,G__15627,G__15628,G__15629,G__15630,G__15631,G__15632,G__15633,G__15634,G__15635,G__15636,G__15637,G__15638,G__15639,G__15640,G__15641,G__15642,G__15643) : self__.dispatch_fn.call(null,G__15625,G__15626,G__15627,G__15628,G__15629,G__15630,G__15631,G__15632,G__15633,G__15634,G__15635,G__15636,G__15637,G__15638,G__15639,G__15640,G__15641,G__15642,G__15643));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15644 = a;
var G__15645 = b;
var G__15646 = c;
var G__15647 = d;
var G__15648 = e;
var G__15649 = f;
var G__15650 = g;
var G__15651 = h;
var G__15652 = i;
var G__15653 = j;
var G__15654 = k;
var G__15655 = l;
var G__15656 = m;
var G__15657 = n;
var G__15658 = o;
var G__15659 = p;
var G__15660 = q;
var G__15661 = r;
var G__15662 = s;
return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__15644,G__15645,G__15646,G__15647,G__15648,G__15649,G__15650,G__15651,G__15652,G__15653,G__15654,G__15655,G__15656,G__15657,G__15658,G__15659,G__15660,G__15661,G__15662) : target_fn.call(null,G__15644,G__15645,G__15646,G__15647,G__15648,G__15649,G__15650,G__15651,G__15652,G__15653,G__15654,G__15655,G__15656,G__15657,G__15658,G__15659,G__15660,G__15661,G__15662));
});
var G__16123__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__15663 = a;
var G__15664 = b;
var G__15665 = c;
var G__15666 = d;
var G__15667 = e;
var G__15668 = f;
var G__15669 = g;
var G__15670 = h;
var G__15671 = i;
var G__15672 = j;
var G__15673 = k;
var G__15674 = l;
var G__15675 = m;
var G__15676 = n;
var G__15677 = o;
var G__15678 = p;
var G__15679 = q;
var G__15680 = r;
var G__15681 = s;
var G__15682 = t;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__15663,G__15664,G__15665,G__15666,G__15667,G__15668,G__15669,G__15670,G__15671,G__15672,G__15673,G__15674,G__15675,G__15676,G__15677,G__15678,G__15679,G__15680,G__15681,G__15682) : self__.dispatch_fn.call(null,G__15663,G__15664,G__15665,G__15666,G__15667,G__15668,G__15669,G__15670,G__15671,G__15672,G__15673,G__15674,G__15675,G__15676,G__15677,G__15678,G__15679,G__15680,G__15681,G__15682));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15683 = a;
var G__15684 = b;
var G__15685 = c;
var G__15686 = d;
var G__15687 = e;
var G__15688 = f;
var G__15689 = g;
var G__15690 = h;
var G__15691 = i;
var G__15692 = j;
var G__15693 = k;
var G__15694 = l;
var G__15695 = m;
var G__15696 = n;
var G__15697 = o;
var G__15698 = p;
var G__15699 = q;
var G__15700 = r;
var G__15701 = s;
var G__15702 = t;
return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__15683,G__15684,G__15685,G__15686,G__15687,G__15688,G__15689,G__15690,G__15691,G__15692,G__15693,G__15694,G__15695,G__15696,G__15697,G__15698,G__15699,G__15700,G__15701,G__15702) : target_fn.call(null,G__15683,G__15684,G__15685,G__15686,G__15687,G__15688,G__15689,G__15690,G__15691,G__15692,G__15693,G__15694,G__15695,G__15696,G__15697,G__15698,G__15699,G__15700,G__15701,G__15702));
});
var G__16123__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__16123 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__16123__1.call(this,self__);
case 2:
return G__16123__2.call(this,self__,a);
case 3:
return G__16123__3.call(this,self__,a,b);
case 4:
return G__16123__4.call(this,self__,a,b,c);
case 5:
return G__16123__5.call(this,self__,a,b,c,d);
case 6:
return G__16123__6.call(this,self__,a,b,c,d,e);
case 7:
return G__16123__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__16123__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__16123__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__16123__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__16123__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__16123__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__16123__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__16123__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__16123__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__16123__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__16123__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__16123__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__16123__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__16123__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__16123__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__16123__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16123.cljs$core$IFn$_invoke$arity$1 = G__16123__1;
G__16123.cljs$core$IFn$_invoke$arity$2 = G__16123__2;
G__16123.cljs$core$IFn$_invoke$arity$3 = G__16123__3;
G__16123.cljs$core$IFn$_invoke$arity$4 = G__16123__4;
G__16123.cljs$core$IFn$_invoke$arity$5 = G__16123__5;
G__16123.cljs$core$IFn$_invoke$arity$6 = G__16123__6;
G__16123.cljs$core$IFn$_invoke$arity$7 = G__16123__7;
G__16123.cljs$core$IFn$_invoke$arity$8 = G__16123__8;
G__16123.cljs$core$IFn$_invoke$arity$9 = G__16123__9;
G__16123.cljs$core$IFn$_invoke$arity$10 = G__16123__10;
G__16123.cljs$core$IFn$_invoke$arity$11 = G__16123__11;
G__16123.cljs$core$IFn$_invoke$arity$12 = G__16123__12;
G__16123.cljs$core$IFn$_invoke$arity$13 = G__16123__13;
G__16123.cljs$core$IFn$_invoke$arity$14 = G__16123__14;
G__16123.cljs$core$IFn$_invoke$arity$15 = G__16123__15;
G__16123.cljs$core$IFn$_invoke$arity$16 = G__16123__16;
G__16123.cljs$core$IFn$_invoke$arity$17 = G__16123__17;
G__16123.cljs$core$IFn$_invoke$arity$18 = G__16123__18;
G__16123.cljs$core$IFn$_invoke$arity$19 = G__16123__19;
G__16123.cljs$core$IFn$_invoke$arity$20 = G__16123__20;
G__16123.cljs$core$IFn$_invoke$arity$21 = G__16123__21;
G__16123.cljs$core$IFn$_invoke$arity$22 = G__16123__22;
return G__16123;
})()
;

cljs.core.MultiFn.prototype.apply = (function (self__,args15275){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15275)));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var mf = this;
var dispatch_val = (function (){return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0() : self__.dispatch_fn.call(null));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$0 ? target_fn.cljs$core$IFn$_invoke$arity$0() : target_fn.call(null));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15703 = a;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__15703) : self__.dispatch_fn.call(null,G__15703));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15704 = a;
return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__15704) : target_fn.call(null,G__15704));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15705 = a;
var G__15706 = b;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__15705,G__15706) : self__.dispatch_fn.call(null,G__15705,G__15706));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15707 = a;
var G__15708 = b;
return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__15707,G__15708) : target_fn.call(null,G__15707,G__15708));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15709 = a;
var G__15710 = b;
var G__15711 = c;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__15709,G__15710,G__15711) : self__.dispatch_fn.call(null,G__15709,G__15710,G__15711));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15712 = a;
var G__15713 = b;
var G__15714 = c;
return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__15712,G__15713,G__15714) : target_fn.call(null,G__15712,G__15713,G__15714));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15715 = a;
var G__15716 = b;
var G__15717 = c;
var G__15718 = d;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__15715,G__15716,G__15717,G__15718) : self__.dispatch_fn.call(null,G__15715,G__15716,G__15717,G__15718));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15719 = a;
var G__15720 = b;
var G__15721 = c;
var G__15722 = d;
return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__15719,G__15720,G__15721,G__15722) : target_fn.call(null,G__15719,G__15720,G__15721,G__15722));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15723 = a;
var G__15724 = b;
var G__15725 = c;
var G__15726 = d;
var G__15727 = e;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__15723,G__15724,G__15725,G__15726,G__15727) : self__.dispatch_fn.call(null,G__15723,G__15724,G__15725,G__15726,G__15727));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15728 = a;
var G__15729 = b;
var G__15730 = c;
var G__15731 = d;
var G__15732 = e;
return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__15728,G__15729,G__15730,G__15731,G__15732) : target_fn.call(null,G__15728,G__15729,G__15730,G__15731,G__15732));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15733 = a;
var G__15734 = b;
var G__15735 = c;
var G__15736 = d;
var G__15737 = e;
var G__15738 = f;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__15733,G__15734,G__15735,G__15736,G__15737,G__15738) : self__.dispatch_fn.call(null,G__15733,G__15734,G__15735,G__15736,G__15737,G__15738));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15739 = a;
var G__15740 = b;
var G__15741 = c;
var G__15742 = d;
var G__15743 = e;
var G__15744 = f;
return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__15739,G__15740,G__15741,G__15742,G__15743,G__15744) : target_fn.call(null,G__15739,G__15740,G__15741,G__15742,G__15743,G__15744));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15745 = a;
var G__15746 = b;
var G__15747 = c;
var G__15748 = d;
var G__15749 = e;
var G__15750 = f;
var G__15751 = g;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__15745,G__15746,G__15747,G__15748,G__15749,G__15750,G__15751) : self__.dispatch_fn.call(null,G__15745,G__15746,G__15747,G__15748,G__15749,G__15750,G__15751));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15752 = a;
var G__15753 = b;
var G__15754 = c;
var G__15755 = d;
var G__15756 = e;
var G__15757 = f;
var G__15758 = g;
return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__15752,G__15753,G__15754,G__15755,G__15756,G__15757,G__15758) : target_fn.call(null,G__15752,G__15753,G__15754,G__15755,G__15756,G__15757,G__15758));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15759 = a;
var G__15760 = b;
var G__15761 = c;
var G__15762 = d;
var G__15763 = e;
var G__15764 = f;
var G__15765 = g;
var G__15766 = h;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__15759,G__15760,G__15761,G__15762,G__15763,G__15764,G__15765,G__15766) : self__.dispatch_fn.call(null,G__15759,G__15760,G__15761,G__15762,G__15763,G__15764,G__15765,G__15766));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15767 = a;
var G__15768 = b;
var G__15769 = c;
var G__15770 = d;
var G__15771 = e;
var G__15772 = f;
var G__15773 = g;
var G__15774 = h;
return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__15767,G__15768,G__15769,G__15770,G__15771,G__15772,G__15773,G__15774) : target_fn.call(null,G__15767,G__15768,G__15769,G__15770,G__15771,G__15772,G__15773,G__15774));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15775 = a;
var G__15776 = b;
var G__15777 = c;
var G__15778 = d;
var G__15779 = e;
var G__15780 = f;
var G__15781 = g;
var G__15782 = h;
var G__15783 = i;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__15775,G__15776,G__15777,G__15778,G__15779,G__15780,G__15781,G__15782,G__15783) : self__.dispatch_fn.call(null,G__15775,G__15776,G__15777,G__15778,G__15779,G__15780,G__15781,G__15782,G__15783));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15784 = a;
var G__15785 = b;
var G__15786 = c;
var G__15787 = d;
var G__15788 = e;
var G__15789 = f;
var G__15790 = g;
var G__15791 = h;
var G__15792 = i;
return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__15784,G__15785,G__15786,G__15787,G__15788,G__15789,G__15790,G__15791,G__15792) : target_fn.call(null,G__15784,G__15785,G__15786,G__15787,G__15788,G__15789,G__15790,G__15791,G__15792));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15793 = a;
var G__15794 = b;
var G__15795 = c;
var G__15796 = d;
var G__15797 = e;
var G__15798 = f;
var G__15799 = g;
var G__15800 = h;
var G__15801 = i;
var G__15802 = j;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__15793,G__15794,G__15795,G__15796,G__15797,G__15798,G__15799,G__15800,G__15801,G__15802) : self__.dispatch_fn.call(null,G__15793,G__15794,G__15795,G__15796,G__15797,G__15798,G__15799,G__15800,G__15801,G__15802));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15803 = a;
var G__15804 = b;
var G__15805 = c;
var G__15806 = d;
var G__15807 = e;
var G__15808 = f;
var G__15809 = g;
var G__15810 = h;
var G__15811 = i;
var G__15812 = j;
return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__15803,G__15804,G__15805,G__15806,G__15807,G__15808,G__15809,G__15810,G__15811,G__15812) : target_fn.call(null,G__15803,G__15804,G__15805,G__15806,G__15807,G__15808,G__15809,G__15810,G__15811,G__15812));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15813 = a;
var G__15814 = b;
var G__15815 = c;
var G__15816 = d;
var G__15817 = e;
var G__15818 = f;
var G__15819 = g;
var G__15820 = h;
var G__15821 = i;
var G__15822 = j;
var G__15823 = k;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__15813,G__15814,G__15815,G__15816,G__15817,G__15818,G__15819,G__15820,G__15821,G__15822,G__15823) : self__.dispatch_fn.call(null,G__15813,G__15814,G__15815,G__15816,G__15817,G__15818,G__15819,G__15820,G__15821,G__15822,G__15823));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15824 = a;
var G__15825 = b;
var G__15826 = c;
var G__15827 = d;
var G__15828 = e;
var G__15829 = f;
var G__15830 = g;
var G__15831 = h;
var G__15832 = i;
var G__15833 = j;
var G__15834 = k;
return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__15824,G__15825,G__15826,G__15827,G__15828,G__15829,G__15830,G__15831,G__15832,G__15833,G__15834) : target_fn.call(null,G__15824,G__15825,G__15826,G__15827,G__15828,G__15829,G__15830,G__15831,G__15832,G__15833,G__15834));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15835 = a;
var G__15836 = b;
var G__15837 = c;
var G__15838 = d;
var G__15839 = e;
var G__15840 = f;
var G__15841 = g;
var G__15842 = h;
var G__15843 = i;
var G__15844 = j;
var G__15845 = k;
var G__15846 = l;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__15835,G__15836,G__15837,G__15838,G__15839,G__15840,G__15841,G__15842,G__15843,G__15844,G__15845,G__15846) : self__.dispatch_fn.call(null,G__15835,G__15836,G__15837,G__15838,G__15839,G__15840,G__15841,G__15842,G__15843,G__15844,G__15845,G__15846));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15847 = a;
var G__15848 = b;
var G__15849 = c;
var G__15850 = d;
var G__15851 = e;
var G__15852 = f;
var G__15853 = g;
var G__15854 = h;
var G__15855 = i;
var G__15856 = j;
var G__15857 = k;
var G__15858 = l;
return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__15847,G__15848,G__15849,G__15850,G__15851,G__15852,G__15853,G__15854,G__15855,G__15856,G__15857,G__15858) : target_fn.call(null,G__15847,G__15848,G__15849,G__15850,G__15851,G__15852,G__15853,G__15854,G__15855,G__15856,G__15857,G__15858));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15859 = a;
var G__15860 = b;
var G__15861 = c;
var G__15862 = d;
var G__15863 = e;
var G__15864 = f;
var G__15865 = g;
var G__15866 = h;
var G__15867 = i;
var G__15868 = j;
var G__15869 = k;
var G__15870 = l;
var G__15871 = m;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__15859,G__15860,G__15861,G__15862,G__15863,G__15864,G__15865,G__15866,G__15867,G__15868,G__15869,G__15870,G__15871) : self__.dispatch_fn.call(null,G__15859,G__15860,G__15861,G__15862,G__15863,G__15864,G__15865,G__15866,G__15867,G__15868,G__15869,G__15870,G__15871));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15872 = a;
var G__15873 = b;
var G__15874 = c;
var G__15875 = d;
var G__15876 = e;
var G__15877 = f;
var G__15878 = g;
var G__15879 = h;
var G__15880 = i;
var G__15881 = j;
var G__15882 = k;
var G__15883 = l;
var G__15884 = m;
return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__15872,G__15873,G__15874,G__15875,G__15876,G__15877,G__15878,G__15879,G__15880,G__15881,G__15882,G__15883,G__15884) : target_fn.call(null,G__15872,G__15873,G__15874,G__15875,G__15876,G__15877,G__15878,G__15879,G__15880,G__15881,G__15882,G__15883,G__15884));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15885 = a;
var G__15886 = b;
var G__15887 = c;
var G__15888 = d;
var G__15889 = e;
var G__15890 = f;
var G__15891 = g;
var G__15892 = h;
var G__15893 = i;
var G__15894 = j;
var G__15895 = k;
var G__15896 = l;
var G__15897 = m;
var G__15898 = n;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__15885,G__15886,G__15887,G__15888,G__15889,G__15890,G__15891,G__15892,G__15893,G__15894,G__15895,G__15896,G__15897,G__15898) : self__.dispatch_fn.call(null,G__15885,G__15886,G__15887,G__15888,G__15889,G__15890,G__15891,G__15892,G__15893,G__15894,G__15895,G__15896,G__15897,G__15898));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15899 = a;
var G__15900 = b;
var G__15901 = c;
var G__15902 = d;
var G__15903 = e;
var G__15904 = f;
var G__15905 = g;
var G__15906 = h;
var G__15907 = i;
var G__15908 = j;
var G__15909 = k;
var G__15910 = l;
var G__15911 = m;
var G__15912 = n;
return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__15899,G__15900,G__15901,G__15902,G__15903,G__15904,G__15905,G__15906,G__15907,G__15908,G__15909,G__15910,G__15911,G__15912) : target_fn.call(null,G__15899,G__15900,G__15901,G__15902,G__15903,G__15904,G__15905,G__15906,G__15907,G__15908,G__15909,G__15910,G__15911,G__15912));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15913 = a;
var G__15914 = b;
var G__15915 = c;
var G__15916 = d;
var G__15917 = e;
var G__15918 = f;
var G__15919 = g;
var G__15920 = h;
var G__15921 = i;
var G__15922 = j;
var G__15923 = k;
var G__15924 = l;
var G__15925 = m;
var G__15926 = n;
var G__15927 = o;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__15913,G__15914,G__15915,G__15916,G__15917,G__15918,G__15919,G__15920,G__15921,G__15922,G__15923,G__15924,G__15925,G__15926,G__15927) : self__.dispatch_fn.call(null,G__15913,G__15914,G__15915,G__15916,G__15917,G__15918,G__15919,G__15920,G__15921,G__15922,G__15923,G__15924,G__15925,G__15926,G__15927));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15928 = a;
var G__15929 = b;
var G__15930 = c;
var G__15931 = d;
var G__15932 = e;
var G__15933 = f;
var G__15934 = g;
var G__15935 = h;
var G__15936 = i;
var G__15937 = j;
var G__15938 = k;
var G__15939 = l;
var G__15940 = m;
var G__15941 = n;
var G__15942 = o;
return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__15928,G__15929,G__15930,G__15931,G__15932,G__15933,G__15934,G__15935,G__15936,G__15937,G__15938,G__15939,G__15940,G__15941,G__15942) : target_fn.call(null,G__15928,G__15929,G__15930,G__15931,G__15932,G__15933,G__15934,G__15935,G__15936,G__15937,G__15938,G__15939,G__15940,G__15941,G__15942));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15943 = a;
var G__15944 = b;
var G__15945 = c;
var G__15946 = d;
var G__15947 = e;
var G__15948 = f;
var G__15949 = g;
var G__15950 = h;
var G__15951 = i;
var G__15952 = j;
var G__15953 = k;
var G__15954 = l;
var G__15955 = m;
var G__15956 = n;
var G__15957 = o;
var G__15958 = p;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__15943,G__15944,G__15945,G__15946,G__15947,G__15948,G__15949,G__15950,G__15951,G__15952,G__15953,G__15954,G__15955,G__15956,G__15957,G__15958) : self__.dispatch_fn.call(null,G__15943,G__15944,G__15945,G__15946,G__15947,G__15948,G__15949,G__15950,G__15951,G__15952,G__15953,G__15954,G__15955,G__15956,G__15957,G__15958));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15959 = a;
var G__15960 = b;
var G__15961 = c;
var G__15962 = d;
var G__15963 = e;
var G__15964 = f;
var G__15965 = g;
var G__15966 = h;
var G__15967 = i;
var G__15968 = j;
var G__15969 = k;
var G__15970 = l;
var G__15971 = m;
var G__15972 = n;
var G__15973 = o;
var G__15974 = p;
return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__15959,G__15960,G__15961,G__15962,G__15963,G__15964,G__15965,G__15966,G__15967,G__15968,G__15969,G__15970,G__15971,G__15972,G__15973,G__15974) : target_fn.call(null,G__15959,G__15960,G__15961,G__15962,G__15963,G__15964,G__15965,G__15966,G__15967,G__15968,G__15969,G__15970,G__15971,G__15972,G__15973,G__15974));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__15975 = a;
var G__15976 = b;
var G__15977 = c;
var G__15978 = d;
var G__15979 = e;
var G__15980 = f;
var G__15981 = g;
var G__15982 = h;
var G__15983 = i;
var G__15984 = j;
var G__15985 = k;
var G__15986 = l;
var G__15987 = m;
var G__15988 = n;
var G__15989 = o;
var G__15990 = p;
var G__15991 = q;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__15975,G__15976,G__15977,G__15978,G__15979,G__15980,G__15981,G__15982,G__15983,G__15984,G__15985,G__15986,G__15987,G__15988,G__15989,G__15990,G__15991) : self__.dispatch_fn.call(null,G__15975,G__15976,G__15977,G__15978,G__15979,G__15980,G__15981,G__15982,G__15983,G__15984,G__15985,G__15986,G__15987,G__15988,G__15989,G__15990,G__15991));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__15992 = a;
var G__15993 = b;
var G__15994 = c;
var G__15995 = d;
var G__15996 = e;
var G__15997 = f;
var G__15998 = g;
var G__15999 = h;
var G__16000 = i;
var G__16001 = j;
var G__16002 = k;
var G__16003 = l;
var G__16004 = m;
var G__16005 = n;
var G__16006 = o;
var G__16007 = p;
var G__16008 = q;
return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__15992,G__15993,G__15994,G__15995,G__15996,G__15997,G__15998,G__15999,G__16000,G__16001,G__16002,G__16003,G__16004,G__16005,G__16006,G__16007,G__16008) : target_fn.call(null,G__15992,G__15993,G__15994,G__15995,G__15996,G__15997,G__15998,G__15999,G__16000,G__16001,G__16002,G__16003,G__16004,G__16005,G__16006,G__16007,G__16008));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16009 = a;
var G__16010 = b;
var G__16011 = c;
var G__16012 = d;
var G__16013 = e;
var G__16014 = f;
var G__16015 = g;
var G__16016 = h;
var G__16017 = i;
var G__16018 = j;
var G__16019 = k;
var G__16020 = l;
var G__16021 = m;
var G__16022 = n;
var G__16023 = o;
var G__16024 = p;
var G__16025 = q;
var G__16026 = r;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__16009,G__16010,G__16011,G__16012,G__16013,G__16014,G__16015,G__16016,G__16017,G__16018,G__16019,G__16020,G__16021,G__16022,G__16023,G__16024,G__16025,G__16026) : self__.dispatch_fn.call(null,G__16009,G__16010,G__16011,G__16012,G__16013,G__16014,G__16015,G__16016,G__16017,G__16018,G__16019,G__16020,G__16021,G__16022,G__16023,G__16024,G__16025,G__16026));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16027 = a;
var G__16028 = b;
var G__16029 = c;
var G__16030 = d;
var G__16031 = e;
var G__16032 = f;
var G__16033 = g;
var G__16034 = h;
var G__16035 = i;
var G__16036 = j;
var G__16037 = k;
var G__16038 = l;
var G__16039 = m;
var G__16040 = n;
var G__16041 = o;
var G__16042 = p;
var G__16043 = q;
var G__16044 = r;
return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__16027,G__16028,G__16029,G__16030,G__16031,G__16032,G__16033,G__16034,G__16035,G__16036,G__16037,G__16038,G__16039,G__16040,G__16041,G__16042,G__16043,G__16044) : target_fn.call(null,G__16027,G__16028,G__16029,G__16030,G__16031,G__16032,G__16033,G__16034,G__16035,G__16036,G__16037,G__16038,G__16039,G__16040,G__16041,G__16042,G__16043,G__16044));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16045 = a;
var G__16046 = b;
var G__16047 = c;
var G__16048 = d;
var G__16049 = e;
var G__16050 = f;
var G__16051 = g;
var G__16052 = h;
var G__16053 = i;
var G__16054 = j;
var G__16055 = k;
var G__16056 = l;
var G__16057 = m;
var G__16058 = n;
var G__16059 = o;
var G__16060 = p;
var G__16061 = q;
var G__16062 = r;
var G__16063 = s;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__16045,G__16046,G__16047,G__16048,G__16049,G__16050,G__16051,G__16052,G__16053,G__16054,G__16055,G__16056,G__16057,G__16058,G__16059,G__16060,G__16061,G__16062,G__16063) : self__.dispatch_fn.call(null,G__16045,G__16046,G__16047,G__16048,G__16049,G__16050,G__16051,G__16052,G__16053,G__16054,G__16055,G__16056,G__16057,G__16058,G__16059,G__16060,G__16061,G__16062,G__16063));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16064 = a;
var G__16065 = b;
var G__16066 = c;
var G__16067 = d;
var G__16068 = e;
var G__16069 = f;
var G__16070 = g;
var G__16071 = h;
var G__16072 = i;
var G__16073 = j;
var G__16074 = k;
var G__16075 = l;
var G__16076 = m;
var G__16077 = n;
var G__16078 = o;
var G__16079 = p;
var G__16080 = q;
var G__16081 = r;
var G__16082 = s;
return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__16064,G__16065,G__16066,G__16067,G__16068,G__16069,G__16070,G__16071,G__16072,G__16073,G__16074,G__16075,G__16076,G__16077,G__16078,G__16079,G__16080,G__16081,G__16082) : target_fn.call(null,G__16064,G__16065,G__16066,G__16067,G__16068,G__16069,G__16070,G__16071,G__16072,G__16073,G__16074,G__16075,G__16076,G__16077,G__16078,G__16079,G__16080,G__16081,G__16082));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16083 = a;
var G__16084 = b;
var G__16085 = c;
var G__16086 = d;
var G__16087 = e;
var G__16088 = f;
var G__16089 = g;
var G__16090 = h;
var G__16091 = i;
var G__16092 = j;
var G__16093 = k;
var G__16094 = l;
var G__16095 = m;
var G__16096 = n;
var G__16097 = o;
var G__16098 = p;
var G__16099 = q;
var G__16100 = r;
var G__16101 = s;
var G__16102 = t;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__16083,G__16084,G__16085,G__16086,G__16087,G__16088,G__16089,G__16090,G__16091,G__16092,G__16093,G__16094,G__16095,G__16096,G__16097,G__16098,G__16099,G__16100,G__16101,G__16102) : self__.dispatch_fn.call(null,G__16083,G__16084,G__16085,G__16086,G__16087,G__16088,G__16089,G__16090,G__16091,G__16092,G__16093,G__16094,G__16095,G__16096,G__16097,G__16098,G__16099,G__16100,G__16101,G__16102));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16103 = a;
var G__16104 = b;
var G__16105 = c;
var G__16106 = d;
var G__16107 = e;
var G__16108 = f;
var G__16109 = g;
var G__16110 = h;
var G__16111 = i;
var G__16112 = j;
var G__16113 = k;
var G__16114 = l;
var G__16115 = m;
var G__16116 = n;
var G__16117 = o;
var G__16118 = p;
var G__16119 = q;
var G__16120 = r;
var G__16121 = s;
var G__16122 = t;
return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__16103,G__16104,G__16105,G__16106,G__16107,G__16108,G__16109,G__16110,G__16111,G__16112,G__16113,G__16114,G__16115,G__16116,G__16117,G__16118,G__16119,G__16120,G__16121,G__16122) : target_fn.call(null,G__16103,G__16104,G__16105,G__16106,G__16107,G__16108,G__16109,G__16110,G__16111,G__16112,G__16113,G__16114,G__16115,G__16116,G__16117,G__16118,G__16119,G__16120,G__16121,G__16122));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var mf = this;
var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});

cljs.core.MultiFn.cljs$lang$type = true;

cljs.core.MultiFn.cljs$lang$ctorStr = "cljs.core/MultiFn";

cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/MultiFn");
});

cljs.core.__GT_MultiFn = (function __GT_MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
return (new cljs.core.MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy));
});

/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset(multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method(multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method(multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods(multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method(multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers(multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
})
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__16124 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0));
return goog.string.hashCode(G__16124);
});

cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(self__.uuid),cljs.core.str("\"")].join(''));
});

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof cljs.core.UUID)) && ((self__.uuid === other.uuid));
});

cljs.core.UUID.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.uuid;
});

cljs.core.UUID.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.UUID.cljs$lang$type = true;

cljs.core.UUID.cljs$lang$ctorStr = "cljs.core/UUID";

cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/UUID");
});

cljs.core.__GT_UUID = (function __GT_UUID(uuid){
return (new cljs.core.UUID(uuid));
});


/**
* @constructor
*/
cljs.core.ExceptionInfo = (function (message,data,cause){
this.message = message;
this.data = data;
this.cause = cause;
})

cljs.core.ExceptionInfo.cljs$lang$type = true;

cljs.core.ExceptionInfo.cljs$lang$ctorStr = "cljs.core/ExceptionInfo";

cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write(writer__4191__auto__,"cljs.core/ExceptionInfo");
});

cljs.core.__GT_ExceptionInfo = (function __GT_ExceptionInfo(message,data,cause){
return (new cljs.core.ExceptionInfo(message,data,cause));
});

cljs.core.ExceptionInfo.prototype = (new Error());
cljs.core.ExceptionInfo.prototype.constructor = cljs.core.ExceptionInfo;
/**
* Alpha - subject to change.
* Create an instance of ExceptionInfo, an Error type that carries a
* map of additional data.
*/
cljs.core.ex_info = (function() {
var ex_info = null;
var ex_info__2 = (function (msg,map){
return (new cljs.core.ExceptionInfo(msg,map,null));
});
var ex_info__3 = (function (msg,map,cause){
return (new cljs.core.ExceptionInfo(msg,map,cause));
});
ex_info = function(msg,map,cause){
switch(arguments.length){
case 2:
return ex_info__2.call(this,msg,map);
case 3:
return ex_info__3.call(this,msg,map,cause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ex_info.cljs$core$IFn$_invoke$arity$2 = ex_info__2;
ex_info.cljs$core$IFn$_invoke$arity$3 = ex_info__3;
return ex_info;
})()
;
/**
* Alpha - subject to change.
* Returns exception data (a map) if ex is an ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_data = (function ex_data(ex){
if((ex instanceof cljs.core.ExceptionInfo)){
return ex.data;
} else {
return null;
}
});
/**
* Alpha - subject to change.
* Returns the message attached to the given Error / ExceptionInfo object.
* For non-Errors returns nil.
*/
cljs.core.ex_message = (function ex_message(ex){
if((ex instanceof Error)){
return ex.message;
} else {
return null;
}
});
/**
* Alpha - subject to change.
* Returns exception cause (an Error / ExceptionInfo) if ex is an
* ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_cause = (function ex_cause(ex){
if((ex instanceof cljs.core.ExceptionInfo)){
return ex.cause;
} else {
return null;
}
});
/**
* Returns an JavaScript compatible comparator based upon pred.
*/
cljs.core.comparator = (function comparator(pred){
return (function (x,y){
if(cljs.core.truth_((function (){var G__16129 = x;
var G__16130 = y;
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__16129,G__16130) : pred.call(null,G__16129,G__16130));
})())){
return (-1);
} else {
if(cljs.core.truth_((function (){var G__16131 = y;
var G__16132 = x;
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__16131,G__16132) : pred.call(null,G__16131,G__16132));
})())){
return (1);
} else {
return (0);

}
}
});
});
cljs.core.special_symbol_QMARK_ = (function special_symbol_QMARK_(x){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,new cljs.core.Symbol(null,".",".",1975675962,null),null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,new cljs.core.Symbol(null,"def","def",597100991,null),null], null), null),x);
});
