// Compiled by ClojureScript 0.0-2411
goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('crate.binding');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.style');
goog.require('goog.dom');
goog.require('goog.dom');
crate.compiler.xmlns = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$40,"http://www.w3.org/1999/xhtml",cljs.core.constant$keyword$41,"http://www.w3.org/2000/svg"], null);


crate.compiler.group_id = (function (){var G__16903 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16903) : cljs.core.atom.call(null,G__16903));
})();
crate.compiler.bindings = (function (){var G__16904 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16904) : cljs.core.atom.call(null,G__16904));
})();
crate.compiler.capture_binding = (function capture_binding(tag,b){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(crate.compiler.bindings,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,b], null));
});

crate.compiler.Element = (function (){var obj16906 = {};
return obj16906;
})();

crate.compiler._elem = (function _elem(this$){
if((function (){var and__3596__auto__ = this$;
if(and__3596__auto__){
return this$.crate$compiler$Element$_elem$arity$1;
} else {
return and__3596__auto__;
}
})()){
return this$.crate$compiler$Element$_elem$arity$1(this$);
} else {
var x__4247__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3608__auto__ = (crate.compiler._elem[(function (){var G__16910 = x__4247__auto__;
return goog.typeOf(G__16910);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (crate.compiler._elem["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("Element.-elem",this$);
}
}
})().call(null,this$);
}
});

crate.compiler.as_content = (function as_content(parent,content){
var seq__16939 = cljs.core.seq(content);
var chunk__16940 = null;
var count__16941 = (0);
var i__16942 = (0);
while(true){
if((i__16942 < count__16941)){
var c = chunk__16940.cljs$core$IIndexed$_nth$arity$2(null,i__16942);
var child_16955 = (((function (){var G__16943 = c;
if(G__16943){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__16943.crate$compiler$Element$;
}
})())){
return true;
} else {
if((!G__16943.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(crate.compiler.Element,G__16943);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(crate.compiler.Element,G__16943);
}
})())?crate.compiler._elem(c):(((c == null))?null:((cljs.core.map_QMARK_(c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?(function (){var G__16944 = c;
return goog.dom.createTextNode(G__16944);
})():((cljs.core.vector_QMARK_(c))?(function (){var G__16945 = c;
return (crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(G__16945) : crate.compiler.elem_factory.call(null,G__16945));
})():((cljs.core.seq_QMARK_(c))?as_content(parent,c):((crate.binding.binding_coll_QMARK_(c))?(function (){
crate.compiler.capture_binding(cljs.core.constant$keyword$42,c);

return as_content(parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value(c)], null));
})()
:((crate.binding.binding_QMARK_(c))?(function (){
crate.compiler.capture_binding(cljs.core.constant$keyword$43,c);

return as_content(parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value(c)], null));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):(function (){var G__16946 = [cljs.core.str(c)].join('');
return goog.dom.createTextNode(G__16946);
})()
))))))))));
if(cljs.core.truth_(child_16955)){
var G__16947_16956 = parent;
var G__16948_16957 = child_16955;
goog.dom.appendChild(G__16947_16956,G__16948_16957);
} else {
}

var G__16958 = seq__16939;
var G__16959 = chunk__16940;
var G__16960 = count__16941;
var G__16961 = (i__16942 + (1));
seq__16939 = G__16958;
chunk__16940 = G__16959;
count__16941 = G__16960;
i__16942 = G__16961;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__16939);
if(temp__4126__auto__){
var seq__16939__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16939__$1)){
var c__4390__auto__ = cljs.core.chunk_first(seq__16939__$1);
var G__16962 = cljs.core.chunk_rest(seq__16939__$1);
var G__16963 = c__4390__auto__;
var G__16964 = cljs.core.count(c__4390__auto__);
var G__16965 = (0);
seq__16939 = G__16962;
chunk__16940 = G__16963;
count__16941 = G__16964;
i__16942 = G__16965;
continue;
} else {
var c = cljs.core.first(seq__16939__$1);
var child_16966 = (((function (){var G__16949 = c;
if(G__16949){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__16949.crate$compiler$Element$;
}
})())){
return true;
} else {
if((!G__16949.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(crate.compiler.Element,G__16949);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(crate.compiler.Element,G__16949);
}
})())?crate.compiler._elem(c):(((c == null))?null:((cljs.core.map_QMARK_(c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?(function (){var G__16950 = c;
return goog.dom.createTextNode(G__16950);
})():((cljs.core.vector_QMARK_(c))?(function (){var G__16951 = c;
return (crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(G__16951) : crate.compiler.elem_factory.call(null,G__16951));
})():((cljs.core.seq_QMARK_(c))?as_content(parent,c):((crate.binding.binding_coll_QMARK_(c))?(function (){
crate.compiler.capture_binding(cljs.core.constant$keyword$42,c);

return as_content(parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value(c)], null));
})()
:((crate.binding.binding_QMARK_(c))?(function (){
crate.compiler.capture_binding(cljs.core.constant$keyword$43,c);

return as_content(parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value(c)], null));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):(function (){var G__16952 = [cljs.core.str(c)].join('');
return goog.dom.createTextNode(G__16952);
})()
))))))))));
if(cljs.core.truth_(child_16966)){
var G__16953_16967 = parent;
var G__16954_16968 = child_16966;
goog.dom.appendChild(G__16953_16967,G__16954_16968);
} else {
}

var G__16969 = cljs.core.next(seq__16939__$1);
var G__16970 = null;
var G__16971 = (0);
var G__16972 = (0);
seq__16939 = G__16969;
chunk__16940 = G__16970;
count__16941 = G__16971;
i__16942 = G__16972;
continue;
}
} else {
return null;
}
}
break;
}
});
crate.compiler.dom_binding = (function (){var method_table__4500__auto__ = (function (){var G__16973 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16973) : cljs.core.atom.call(null,G__16973));
})();
var prefer_table__4501__auto__ = (function (){var G__16974 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16974) : cljs.core.atom.call(null,G__16974));
})();
var method_cache__4502__auto__ = (function (){var G__16975 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16975) : cljs.core.atom.call(null,G__16975));
})();
var cached_hierarchy__4503__auto__ = (function (){var G__16976 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16976) : cljs.core.atom.call(null,G__16976));
})();
var hierarchy__4504__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$44,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("crate.compiler","dom-binding"),((function (method_table__4500__auto__,prefer_table__4501__auto__,method_cache__4502__auto__,cached_hierarchy__4503__auto__,hierarchy__4504__auto__){
return (function (type,_,___$1){
return type;
});})(method_table__4500__auto__,prefer_table__4501__auto__,method_cache__4502__auto__,cached_hierarchy__4503__auto__,hierarchy__4504__auto__))
,cljs.core.constant$keyword$7,hierarchy__4504__auto__,method_table__4500__auto__,prefer_table__4501__auto__,method_cache__4502__auto__,cached_hierarchy__4503__auto__));
})();
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$43,(function (_,b,elem){
return crate.binding.on_change(b,(function (v){
var G__16977_16978 = elem;
goog.dom.removeChildren(G__16977_16978);

return crate.compiler.as_content(elem,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}));
}));
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$45,(function (_,p__16979,elem){
var vec__16980 = p__16979;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16980,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16980,(1),null);
return crate.binding.on_change(b,((function (vec__16980,k,b){
return (function (v){
var G__16981 = elem;
var G__16982 = k;
var G__16983 = v;
return (crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3(G__16981,G__16982,G__16983) : crate.compiler.dom_attr.call(null,G__16981,G__16982,G__16983));
});})(vec__16980,k,b))
);
}));
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$46,(function (_,p__16984,elem){
var vec__16985 = p__16984;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16985,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16985,(1),null);
return crate.binding.on_change(b,((function (vec__16985,k,b){
return (function (v){
if(cljs.core.truth_(k)){
var G__16986 = elem;
var G__16987 = k;
var G__16988 = v;
return (crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3(G__16986,G__16987,G__16988) : crate.compiler.dom_style.call(null,G__16986,G__16987,G__16988));
} else {
var G__16989 = elem;
var G__16990 = v;
return (crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2(G__16989,G__16990) : crate.compiler.dom_style.call(null,G__16989,G__16990));
}
});})(vec__16985,k,b))
);
}));
crate.compiler.dom_add = (function dom_add(bc,parent,elem,v){
var temp__4124__auto__ = crate.binding.opt(bc,cljs.core.constant$keyword$36);
if(cljs.core.truth_(temp__4124__auto__)){
var adder = temp__4124__auto__;
var G__16996 = parent;
var G__16997 = elem;
var G__16998 = v;
return (adder.cljs$core$IFn$_invoke$arity$3 ? adder.cljs$core$IFn$_invoke$arity$3(G__16996,G__16997,G__16998) : adder.call(null,G__16996,G__16997,G__16998));
} else {
var G__16999 = parent;
var G__17000 = elem;
return goog.dom.appendChild(G__16999,G__17000);
}
});
crate.compiler.dom_remove = (function dom_remove(bc,elem){
var temp__4124__auto__ = crate.binding.opt(bc,cljs.core.constant$keyword$37);
if(cljs.core.truth_(temp__4124__auto__)){
var remover = temp__4124__auto__;
var G__17003 = elem;
return (remover.cljs$core$IFn$_invoke$arity$1 ? remover.cljs$core$IFn$_invoke$arity$1(G__17003) : remover.call(null,G__17003));
} else {
var G__17004 = elem;
return goog.dom.removeNode(G__17004);
}
});
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$42,(function (_,bc,parent){
return crate.binding.on_change(bc,(function (type,elem,v){
var pred__17005 = cljs.core._EQ_;
var expr__17006 = type;
if(cljs.core.truth_((function (){var G__17008 = cljs.core.constant$keyword$36;
var G__17009 = expr__17006;
return (pred__17005.cljs$core$IFn$_invoke$arity$2 ? pred__17005.cljs$core$IFn$_invoke$arity$2(G__17008,G__17009) : pred__17005.call(null,G__17008,G__17009));
})())){
return crate.compiler.dom_add(bc,parent,elem,v);
} else {
if(cljs.core.truth_((function (){var G__17010 = cljs.core.constant$keyword$37;
var G__17011 = expr__17006;
return (pred__17005.cljs$core$IFn$_invoke$arity$2 ? pred__17005.cljs$core$IFn$_invoke$arity$2(G__17010,G__17011) : pred__17005.call(null,G__17010,G__17011));
})())){
return crate.compiler.dom_remove(bc,elem);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__17006)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){
var seq__17024 = cljs.core.seq(bs);
var chunk__17025 = null;
var count__17026 = (0);
var i__17027 = (0);
while(true){
if((i__17027 < count__17026)){
var vec__17028 = chunk__17025.cljs$core$IIndexed$_nth$arity$2(null,i__17027);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17028,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17028,(1),null);
var G__17029_17036 = type;
var G__17030_17037 = b;
var G__17031_17038 = elem;
(crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(G__17029_17036,G__17030_17037,G__17031_17038) : crate.compiler.dom_binding.call(null,G__17029_17036,G__17030_17037,G__17031_17038));

var G__17039 = seq__17024;
var G__17040 = chunk__17025;
var G__17041 = count__17026;
var G__17042 = (i__17027 + (1));
seq__17024 = G__17039;
chunk__17025 = G__17040;
count__17026 = G__17041;
i__17027 = G__17042;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__17024);
if(temp__4126__auto__){
var seq__17024__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17024__$1)){
var c__4390__auto__ = cljs.core.chunk_first(seq__17024__$1);
var G__17043 = cljs.core.chunk_rest(seq__17024__$1);
var G__17044 = c__4390__auto__;
var G__17045 = cljs.core.count(c__4390__auto__);
var G__17046 = (0);
seq__17024 = G__17043;
chunk__17025 = G__17044;
count__17026 = G__17045;
i__17027 = G__17046;
continue;
} else {
var vec__17032 = cljs.core.first(seq__17024__$1);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17032,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17032,(1),null);
var G__17033_17047 = type;
var G__17034_17048 = b;
var G__17035_17049 = elem;
(crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(G__17033_17047,G__17034_17048,G__17035_17049) : crate.compiler.dom_binding.call(null,G__17033_17047,G__17034_17048,G__17035_17049));

var G__17050 = cljs.core.next(seq__17024__$1);
var G__17051 = null;
var G__17052 = (0);
var G__17053 = (0);
seq__17024 = G__17050;
chunk__17025 = G__17051;
count__17026 = G__17052;
i__17027 = G__17053;
continue;
}
} else {
return null;
}
}
break;
}
});
crate.compiler.dom_style = (function() {
var dom_style = null;
var dom_style__2 = (function (elem,v){
if(typeof v === 'string'){
elem.setAttribute("style",v);
} else {
if(cljs.core.map_QMARK_(v)){
var seq__17071_17080 = cljs.core.seq(v);
var chunk__17072_17081 = null;
var count__17073_17082 = (0);
var i__17074_17083 = (0);
while(true){
if((i__17074_17083 < count__17073_17082)){
var vec__17075_17084 = chunk__17072_17081.cljs$core$IIndexed$_nth$arity$2(null,i__17074_17083);
var k_17085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17075_17084,(0),null);
var v_17086__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17075_17084,(1),null);
dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_17085,v_17086__$1);

var G__17087 = seq__17071_17080;
var G__17088 = chunk__17072_17081;
var G__17089 = count__17073_17082;
var G__17090 = (i__17074_17083 + (1));
seq__17071_17080 = G__17087;
chunk__17072_17081 = G__17088;
count__17073_17082 = G__17089;
i__17074_17083 = G__17090;
continue;
} else {
var temp__4126__auto___17091 = cljs.core.seq(seq__17071_17080);
if(temp__4126__auto___17091){
var seq__17071_17092__$1 = temp__4126__auto___17091;
if(cljs.core.chunked_seq_QMARK_(seq__17071_17092__$1)){
var c__4390__auto___17093 = cljs.core.chunk_first(seq__17071_17092__$1);
var G__17094 = cljs.core.chunk_rest(seq__17071_17092__$1);
var G__17095 = c__4390__auto___17093;
var G__17096 = cljs.core.count(c__4390__auto___17093);
var G__17097 = (0);
seq__17071_17080 = G__17094;
chunk__17072_17081 = G__17095;
count__17073_17082 = G__17096;
i__17074_17083 = G__17097;
continue;
} else {
var vec__17076_17098 = cljs.core.first(seq__17071_17092__$1);
var k_17099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17076_17098,(0),null);
var v_17100__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17076_17098,(1),null);
dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_17099,v_17100__$1);

var G__17101 = cljs.core.next(seq__17071_17092__$1);
var G__17102 = null;
var G__17103 = (0);
var G__17104 = (0);
seq__17071_17080 = G__17101;
chunk__17072_17081 = G__17102;
count__17073_17082 = G__17103;
i__17074_17083 = G__17104;
continue;
}
} else {
}
}
break;
}
} else {
if(crate.binding.binding_QMARK_(v)){
crate.compiler.capture_binding(cljs.core.constant$keyword$46,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));

dom_style.cljs$core$IFn$_invoke$arity$2(elem,crate.binding.value(v));
} else {
}
}
}

return elem;
});
var dom_style__3 = (function (elem,k,v){
var v__$1 = ((crate.binding.binding_QMARK_(v))?(function (){
crate.compiler.capture_binding(cljs.core.constant$keyword$46,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value(v);
})()
:v);
var G__17077 = elem;
var G__17078 = cljs.core.name(k);
var G__17079 = v__$1;
return goog.style.setStyle(G__17077,G__17078,G__17079);
});
dom_style = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_style__2.call(this,elem,k);
case 3:
return dom_style__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_style.cljs$core$IFn$_invoke$arity$2 = dom_style__2;
dom_style.cljs$core$IFn$_invoke$arity$3 = dom_style__3;
return dom_style;
})()
;
crate.compiler.dom_attr = (function() {
var dom_attr = null;
var dom_attr__2 = (function (elem,attrs){
if(cljs.core.truth_(elem)){
if(!(cljs.core.map_QMARK_(attrs))){
return elem.getAttribute(cljs.core.name(attrs));
} else {
var seq__17117_17123 = cljs.core.seq(attrs);
var chunk__17118_17124 = null;
var count__17119_17125 = (0);
var i__17120_17126 = (0);
while(true){
if((i__17120_17126 < count__17119_17125)){
var vec__17121_17127 = chunk__17118_17124.cljs$core$IIndexed$_nth$arity$2(null,i__17120_17126);
var k_17128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17121_17127,(0),null);
var v_17129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17121_17127,(1),null);
dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_17128,v_17129);

var G__17130 = seq__17117_17123;
var G__17131 = chunk__17118_17124;
var G__17132 = count__17119_17125;
var G__17133 = (i__17120_17126 + (1));
seq__17117_17123 = G__17130;
chunk__17118_17124 = G__17131;
count__17119_17125 = G__17132;
i__17120_17126 = G__17133;
continue;
} else {
var temp__4126__auto___17134 = cljs.core.seq(seq__17117_17123);
if(temp__4126__auto___17134){
var seq__17117_17135__$1 = temp__4126__auto___17134;
if(cljs.core.chunked_seq_QMARK_(seq__17117_17135__$1)){
var c__4390__auto___17136 = cljs.core.chunk_first(seq__17117_17135__$1);
var G__17137 = cljs.core.chunk_rest(seq__17117_17135__$1);
var G__17138 = c__4390__auto___17136;
var G__17139 = cljs.core.count(c__4390__auto___17136);
var G__17140 = (0);
seq__17117_17123 = G__17137;
chunk__17118_17124 = G__17138;
count__17119_17125 = G__17139;
i__17120_17126 = G__17140;
continue;
} else {
var vec__17122_17141 = cljs.core.first(seq__17117_17135__$1);
var k_17142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17122_17141,(0),null);
var v_17143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17122_17141,(1),null);
dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_17142,v_17143);

var G__17144 = cljs.core.next(seq__17117_17135__$1);
var G__17145 = null;
var G__17146 = (0);
var G__17147 = (0);
seq__17117_17123 = G__17144;
chunk__17118_17124 = G__17145;
count__17119_17125 = G__17146;
i__17120_17126 = G__17147;
continue;
}
} else {
}
}
break;
}

return elem;
}
} else {
return null;
}
});
var dom_attr__3 = (function (elem,k,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.constant$keyword$46)){
crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2(elem,v);
} else {
var v_17148__$1 = ((crate.binding.binding_QMARK_(v))?(function (){
crate.compiler.capture_binding(cljs.core.constant$keyword$45,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value(v);
})()
:v);
elem.setAttribute(cljs.core.name(k),v_17148__$1);
}

return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_attr__2.call(this,elem,k);
case 3:
return dom_attr__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_attr.cljs$core$IFn$_invoke$arity$2 = dom_attr__2;
dom_attr.cljs$core$IFn$_invoke$arity$3 = dom_attr__3;
return dom_attr;
})()
;
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function normalize_map_attrs(map_attrs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17151){
var vec__17152 = p__17151;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17152,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17152,(1),null);
if(v === true){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.name(n)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,v], null);
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.compiler.normalize_element = (function normalize_element(p__17154){
var vec__17160 = p__17154;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17160,(0),null);
var content = cljs.core.nthnext(vec__17160,(1));
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else {
}

var vec__17161 = cljs.core.re_matches(crate.compiler.re_tag,cljs.core.name(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17161,(0),null);
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17161,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17161,(2),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17161,(3),null);
var vec__17162 = (function (){var vec__17163 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(tag__$1,/:/);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17163,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17163,(1),null);
var ns_xmlns = (function (){var G__17164 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(nsp);
return (crate.compiler.xmlns.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.xmlns.cljs$core$IFn$_invoke$arity$1(G__17164) : crate.compiler.xmlns.call(null,G__17164));
})();
if(cljs.core.truth_(t)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3608__auto__ = ns_xmlns;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return nsp;
}
})(),t], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(crate.compiler.xmlns),nsp], null);
}
})();
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17162,(0),null);
var tag__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17162,(1),null);
var tag_attrs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__17161,_,tag__$1,id,class$,vec__17162,nsp,tag__$2,vec__17160,tag,content){
return (function (p1__17153_SHARP_){
return !((cljs.core.second(p1__17153_SHARP_) == null));
});})(vec__17161,_,tag__$1,id,class$,vec__17162,nsp,tag__$2,vec__17160,tag,content))
,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$47,(function (){var or__3608__auto__ = id;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return null;
}
})(),cljs.core.constant$keyword$48,(cljs.core.truth_(class$)?clojure.string.replace(class$,/\./," "):null)], null)));
var map_attrs = cljs.core.first(content);
if(cljs.core.map_QMARK_(map_attrs)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tag_attrs,crate.compiler.normalize_map_attrs(map_attrs)], 0)),cljs.core.next(content)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,tag_attrs,content], null);
}
});
crate.compiler.parse_content = (function parse_content(elem,content){
var attrs = cljs.core.first(content);
if(cljs.core.map_QMARK_(attrs)){
crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2(elem,attrs);

return cljs.core.rest(content);
} else {
return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){
return document.createElementNS(nsp,tag);
}):(function (_,tag){
return document.createElement(tag);
}));
crate.compiler.elem_factory = (function elem_factory(tag_def){
var bindings17171 = crate.compiler.bindings;
try{crate.compiler.bindings = (function (){var G__17172 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17172) : cljs.core.atom.call(null,G__17172));
})();

var vec__17173 = crate.compiler.normalize_element(tag_def);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17173,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17173,(1),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17173,(2),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17173,(3),null);
var elem = (function (){var G__17174 = nsp;
var G__17175 = tag;
return (crate.compiler.create_elem.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.create_elem.cljs$core$IFn$_invoke$arity$2(G__17174,G__17175) : crate.compiler.create_elem.call(null,G__17174,G__17175));
})();
crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2(elem,attrs);

crate.compiler.as_content(elem,content);

crate.compiler.handle_bindings((function (){var G__17176 = crate.compiler.bindings;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17176) : cljs.core.deref.call(null,G__17176));
})(),elem);

return elem;
}finally {crate.compiler.bindings = bindings17171;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__17179__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__17178 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17178,(0),null);
var body = cljs.core.nthnext(vec__17178,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__17179 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17179__delegate.call(this,args);};
G__17179.cljs$lang$maxFixedArity = 0;
G__17179.cljs$lang$applyTo = (function (arglist__17180){
var args = cljs.core.seq(arglist__17180);
return G__17179__delegate(args);
});
G__17179.cljs$core$IFn$_invoke$arity$variadic = G__17179__delegate;
return G__17179;
})()
;
});
