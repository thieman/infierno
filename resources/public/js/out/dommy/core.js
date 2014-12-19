// Compiled by ClojureScript 0.0-2411
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Returns a selector in string format.
* Accepts string, keyword, or collection.
*/
dommy.core.selector = (function selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function text(elem){
var or__3608__auto__ = elem.textContent;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function html(elem){
return elem.innerHTML;
});
dommy.core.value = (function value(elem){
return elem.value;
});
dommy.core.class$ = (function class$(elem){
return elem.className;
});
dommy.core.attr = (function attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
* The computed style of `elem`, optionally specifying the key of
* a particular style to return
*/
dommy.core.style = (function() {
var style = null;
var style__1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});
var style__2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});
style = function(elem,k){
switch(arguments.length){
case 1:
return style__1.call(this,elem);
case 2:
return style__2.call(this,elem,k);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
style.cljs$core$IFn$_invoke$arity$1 = style__1;
style.cljs$core$IFn$_invoke$arity$2 = style__2;
return style;
})()
;
dommy.core.px = (function px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
* Does `elem` contain `c` in its class list
*/
dommy.core.has_class_QMARK_ = (function has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto__ = elem.classList;
if(cljs.core.truth_(temp__4124__auto__)){
var class_list = temp__4124__auto__;
return class_list.contains(c__$1);
} else {
var temp__4126__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4126__auto__)){
var class_name = temp__4126__auto__;
var temp__4126__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4126__auto____$1)){
var i = temp__4126__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
*/
dommy.core.hidden_QMARK_ = (function hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.core.bounding_client_rect = (function bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function parent(elem){
return elem.parentNode;
});
dommy.core.children = (function children(elem){
return elem.children;
});
/**
* Lazy seq of the ancestors of `elem`
*/
dommy.core.ancestors = (function ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
* Returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){
return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* Closest ancestor of `elem` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){
return closest.call(null,document.body,elem,selector);
});
var closest__3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__6932_SHARP_){
return !((p1__6932_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* Is `descendant` a descendant of `ancestor`?
* (http://goo.gl/T8pgCX)
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
* Set the textContent of `elem` to `text`, fall back to innerText
*/
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
* Set the innerHTML of `elem` to `html`
*/
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
* Set the value of `elem` to `value`
*/
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
* Set the css class of `elem` to `elem`
*/
dommy.core.set_class_BANG_ = (function set_class_BANG_(elem,c){
return elem.className = c;
});
/**
* Set the style of `elem` using key-value pairs:
* 
* (set-style! elem :display "block" :color "red")
* @param {...*} var_args
*/
dommy.core.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__6939_6945 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__6940_6946 = null;
var count__6941_6947 = (0);
var i__6942_6948 = (0);
while(true){
if((i__6942_6948 < count__6941_6947)){
var vec__6943_6949 = cljs.core._nth.call(null,chunk__6940_6946,i__6942_6948);
var k_6950 = cljs.core.nth.call(null,vec__6943_6949,(0),null);
var v_6951 = cljs.core.nth.call(null,vec__6943_6949,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_6950),v_6951);

var G__6952 = seq__6939_6945;
var G__6953 = chunk__6940_6946;
var G__6954 = count__6941_6947;
var G__6955 = (i__6942_6948 + (1));
seq__6939_6945 = G__6952;
chunk__6940_6946 = G__6953;
count__6941_6947 = G__6954;
i__6942_6948 = G__6955;
continue;
} else {
var temp__4126__auto___6956 = cljs.core.seq.call(null,seq__6939_6945);
if(temp__4126__auto___6956){
var seq__6939_6957__$1 = temp__4126__auto___6956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6939_6957__$1)){
var c__4390__auto___6958 = cljs.core.chunk_first.call(null,seq__6939_6957__$1);
var G__6959 = cljs.core.chunk_rest.call(null,seq__6939_6957__$1);
var G__6960 = c__4390__auto___6958;
var G__6961 = cljs.core.count.call(null,c__4390__auto___6958);
var G__6962 = (0);
seq__6939_6945 = G__6959;
chunk__6940_6946 = G__6960;
count__6941_6947 = G__6961;
i__6942_6948 = G__6962;
continue;
} else {
var vec__6944_6963 = cljs.core.first.call(null,seq__6939_6957__$1);
var k_6964 = cljs.core.nth.call(null,vec__6944_6963,(0),null);
var v_6965 = cljs.core.nth.call(null,vec__6944_6963,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_6964),v_6965);

var G__6966 = cljs.core.next.call(null,seq__6939_6957__$1);
var G__6967 = null;
var G__6968 = (0);
var G__6969 = (0);
seq__6939_6945 = G__6966;
chunk__6940_6946 = G__6967;
count__6941_6947 = G__6968;
i__6942_6948 = G__6969;
continue;
}
} else {
}
}
break;
}

return elem;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6970){
var elem = cljs.core.first(arglist__6970);
var kvs = cljs.core.rest(arglist__6970);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__6977_6983 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__6978_6984 = null;
var count__6979_6985 = (0);
var i__6980_6986 = (0);
while(true){
if((i__6980_6986 < count__6979_6985)){
var vec__6981_6987 = cljs.core._nth.call(null,chunk__6978_6984,i__6980_6986);
var k_6988 = cljs.core.nth.call(null,vec__6981_6987,(0),null);
var v_6989 = cljs.core.nth.call(null,vec__6981_6987,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_6988,[cljs.core.str(v_6989),cljs.core.str("px")].join(''));

var G__6990 = seq__6977_6983;
var G__6991 = chunk__6978_6984;
var G__6992 = count__6979_6985;
var G__6993 = (i__6980_6986 + (1));
seq__6977_6983 = G__6990;
chunk__6978_6984 = G__6991;
count__6979_6985 = G__6992;
i__6980_6986 = G__6993;
continue;
} else {
var temp__4126__auto___6994 = cljs.core.seq.call(null,seq__6977_6983);
if(temp__4126__auto___6994){
var seq__6977_6995__$1 = temp__4126__auto___6994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6977_6995__$1)){
var c__4390__auto___6996 = cljs.core.chunk_first.call(null,seq__6977_6995__$1);
var G__6997 = cljs.core.chunk_rest.call(null,seq__6977_6995__$1);
var G__6998 = c__4390__auto___6996;
var G__6999 = cljs.core.count.call(null,c__4390__auto___6996);
var G__7000 = (0);
seq__6977_6983 = G__6997;
chunk__6978_6984 = G__6998;
count__6979_6985 = G__6999;
i__6980_6986 = G__7000;
continue;
} else {
var vec__6982_7001 = cljs.core.first.call(null,seq__6977_6995__$1);
var k_7002 = cljs.core.nth.call(null,vec__6982_7001,(0),null);
var v_7003 = cljs.core.nth.call(null,vec__6982_7001,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_7002,[cljs.core.str(v_7003),cljs.core.str("px")].join(''));

var G__7004 = cljs.core.next.call(null,seq__6977_6995__$1);
var G__7005 = null;
var G__7006 = (0);
var G__7007 = (0);
seq__6977_6983 = G__7004;
chunk__6978_6984 = G__7005;
count__6979_6985 = G__7006;
i__6980_6986 = G__7007;
continue;
}
} else {
}
}
break;
}

return elem;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__7008){
var elem = cljs.core.first(arglist__7008);
var kvs = cljs.core.rest(arglist__7008);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.core.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){
return set_attr_BANG_.call(null,elem,k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__7017 = elem;
(G__7017[k__$1] = v);

return G__7017;
} else {
var G__7018 = elem;
G__7018.setAttribute(k__$1,v);

return G__7018;
}
} else {
return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__7025__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__7019_7026 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__7020_7027 = null;
var count__7021_7028 = (0);
var i__7022_7029 = (0);
while(true){
if((i__7022_7029 < count__7021_7028)){
var vec__7023_7030 = cljs.core._nth.call(null,chunk__7020_7027,i__7022_7029);
var k_7031__$1 = cljs.core.nth.call(null,vec__7023_7030,(0),null);
var v_7032__$1 = cljs.core.nth.call(null,vec__7023_7030,(1),null);
set_attr_BANG_.call(null,elem,k_7031__$1,v_7032__$1);

var G__7033 = seq__7019_7026;
var G__7034 = chunk__7020_7027;
var G__7035 = count__7021_7028;
var G__7036 = (i__7022_7029 + (1));
seq__7019_7026 = G__7033;
chunk__7020_7027 = G__7034;
count__7021_7028 = G__7035;
i__7022_7029 = G__7036;
continue;
} else {
var temp__4126__auto___7037 = cljs.core.seq.call(null,seq__7019_7026);
if(temp__4126__auto___7037){
var seq__7019_7038__$1 = temp__4126__auto___7037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7019_7038__$1)){
var c__4390__auto___7039 = cljs.core.chunk_first.call(null,seq__7019_7038__$1);
var G__7040 = cljs.core.chunk_rest.call(null,seq__7019_7038__$1);
var G__7041 = c__4390__auto___7039;
var G__7042 = cljs.core.count.call(null,c__4390__auto___7039);
var G__7043 = (0);
seq__7019_7026 = G__7040;
chunk__7020_7027 = G__7041;
count__7021_7028 = G__7042;
i__7022_7029 = G__7043;
continue;
} else {
var vec__7024_7044 = cljs.core.first.call(null,seq__7019_7038__$1);
var k_7045__$1 = cljs.core.nth.call(null,vec__7024_7044,(0),null);
var v_7046__$1 = cljs.core.nth.call(null,vec__7024_7044,(1),null);
set_attr_BANG_.call(null,elem,k_7045__$1,v_7046__$1);

var G__7047 = cljs.core.next.call(null,seq__7019_7038__$1);
var G__7048 = null;
var G__7049 = (0);
var G__7050 = (0);
seq__7019_7026 = G__7047;
chunk__7020_7027 = G__7048;
count__7021_7028 = G__7049;
i__7022_7029 = G__7050;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__7025 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7025__delegate.call(this,elem,k,v,kvs);};
G__7025.cljs$lang$maxFixedArity = 3;
G__7025.cljs$lang$applyTo = (function (arglist__7051){
var elem = cljs.core.first(arglist__7051);
arglist__7051 = cljs.core.next(arglist__7051);
var k = cljs.core.first(arglist__7051);
arglist__7051 = cljs.core.next(arglist__7051);
var v = cljs.core.first(arglist__7051);
var kvs = cljs.core.rest(arglist__7051);
return G__7025__delegate(elem,k,v,kvs);
});
G__7025.cljs$core$IFn$_invoke$arity$variadic = G__7025__delegate;
return G__7025;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* Removes dom attributes on and returns `elem`.
* `class` and `classes` are special cases which clear
* out the class name on removal.
* @param {...*} var_args
*/
dommy.core.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){
var k_7060__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_7060__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_7060__$1);
}

return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__7061__delegate = function (elem,k,ks){
var seq__7056_7062 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__7057_7063 = null;
var count__7058_7064 = (0);
var i__7059_7065 = (0);
while(true){
if((i__7059_7065 < count__7058_7064)){
var k_7066__$1 = cljs.core._nth.call(null,chunk__7057_7063,i__7059_7065);
remove_attr_BANG_.call(null,elem,k_7066__$1);

var G__7067 = seq__7056_7062;
var G__7068 = chunk__7057_7063;
var G__7069 = count__7058_7064;
var G__7070 = (i__7059_7065 + (1));
seq__7056_7062 = G__7067;
chunk__7057_7063 = G__7068;
count__7058_7064 = G__7069;
i__7059_7065 = G__7070;
continue;
} else {
var temp__4126__auto___7071 = cljs.core.seq.call(null,seq__7056_7062);
if(temp__4126__auto___7071){
var seq__7056_7072__$1 = temp__4126__auto___7071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7056_7072__$1)){
var c__4390__auto___7073 = cljs.core.chunk_first.call(null,seq__7056_7072__$1);
var G__7074 = cljs.core.chunk_rest.call(null,seq__7056_7072__$1);
var G__7075 = c__4390__auto___7073;
var G__7076 = cljs.core.count.call(null,c__4390__auto___7073);
var G__7077 = (0);
seq__7056_7062 = G__7074;
chunk__7057_7063 = G__7075;
count__7058_7064 = G__7076;
i__7059_7065 = G__7077;
continue;
} else {
var k_7078__$1 = cljs.core.first.call(null,seq__7056_7072__$1);
remove_attr_BANG_.call(null,elem,k_7078__$1);

var G__7079 = cljs.core.next.call(null,seq__7056_7072__$1);
var G__7080 = null;
var G__7081 = (0);
var G__7082 = (0);
seq__7056_7062 = G__7079;
chunk__7057_7063 = G__7080;
count__7058_7064 = G__7081;
i__7059_7065 = G__7082;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__7061 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7061__delegate.call(this,elem,k,ks);};
G__7061.cljs$lang$maxFixedArity = 2;
G__7061.cljs$lang$applyTo = (function (arglist__7083){
var elem = cljs.core.first(arglist__7083);
arglist__7083 = cljs.core.next(arglist__7083);
var k = cljs.core.first(arglist__7083);
var ks = cljs.core.rest(arglist__7083);
return G__7061__delegate(elem,k,ks);
});
G__7061.cljs$core$IFn$_invoke$arity$variadic = G__7061__delegate;
return G__7061;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
/**
* Toggles a dom attribute `k` on `elem`, optionally specifying
* the boolean value with `add?`
*/
dommy.core.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){
return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
/**
* Add `classes` to `elem`, trying to use Element::classList, and
* falling back to fast string parsing/manipulation
* @param {...*} var_args
*/
dommy.core.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4124__auto___7108 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___7108)){
var class_list_7109 = temp__4124__auto___7108;
var seq__7096_7110 = cljs.core.seq.call(null,classes__$1);
var chunk__7097_7111 = null;
var count__7098_7112 = (0);
var i__7099_7113 = (0);
while(true){
if((i__7099_7113 < count__7098_7112)){
var c_7114 = cljs.core._nth.call(null,chunk__7097_7111,i__7099_7113);
class_list_7109.add(c_7114);

var G__7115 = seq__7096_7110;
var G__7116 = chunk__7097_7111;
var G__7117 = count__7098_7112;
var G__7118 = (i__7099_7113 + (1));
seq__7096_7110 = G__7115;
chunk__7097_7111 = G__7116;
count__7098_7112 = G__7117;
i__7099_7113 = G__7118;
continue;
} else {
var temp__4126__auto___7119 = cljs.core.seq.call(null,seq__7096_7110);
if(temp__4126__auto___7119){
var seq__7096_7120__$1 = temp__4126__auto___7119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7096_7120__$1)){
var c__4390__auto___7121 = cljs.core.chunk_first.call(null,seq__7096_7120__$1);
var G__7122 = cljs.core.chunk_rest.call(null,seq__7096_7120__$1);
var G__7123 = c__4390__auto___7121;
var G__7124 = cljs.core.count.call(null,c__4390__auto___7121);
var G__7125 = (0);
seq__7096_7110 = G__7122;
chunk__7097_7111 = G__7123;
count__7098_7112 = G__7124;
i__7099_7113 = G__7125;
continue;
} else {
var c_7126 = cljs.core.first.call(null,seq__7096_7120__$1);
class_list_7109.add(c_7126);

var G__7127 = cljs.core.next.call(null,seq__7096_7120__$1);
var G__7128 = null;
var G__7129 = (0);
var G__7130 = (0);
seq__7096_7110 = G__7127;
chunk__7097_7111 = G__7128;
count__7098_7112 = G__7129;
i__7099_7113 = G__7130;
continue;
}
} else {
}
}
break;
}
} else {
var seq__7100_7131 = cljs.core.seq.call(null,classes__$1);
var chunk__7101_7132 = null;
var count__7102_7133 = (0);
var i__7103_7134 = (0);
while(true){
if((i__7103_7134 < count__7102_7133)){
var c_7135 = cljs.core._nth.call(null,chunk__7101_7132,i__7103_7134);
var class_name_7136 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_7136,c_7135))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_7136 === ""))?c_7135:[cljs.core.str(class_name_7136),cljs.core.str(" "),cljs.core.str(c_7135)].join('')));
}

var G__7137 = seq__7100_7131;
var G__7138 = chunk__7101_7132;
var G__7139 = count__7102_7133;
var G__7140 = (i__7103_7134 + (1));
seq__7100_7131 = G__7137;
chunk__7101_7132 = G__7138;
count__7102_7133 = G__7139;
i__7103_7134 = G__7140;
continue;
} else {
var temp__4126__auto___7141 = cljs.core.seq.call(null,seq__7100_7131);
if(temp__4126__auto___7141){
var seq__7100_7142__$1 = temp__4126__auto___7141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7100_7142__$1)){
var c__4390__auto___7143 = cljs.core.chunk_first.call(null,seq__7100_7142__$1);
var G__7144 = cljs.core.chunk_rest.call(null,seq__7100_7142__$1);
var G__7145 = c__4390__auto___7143;
var G__7146 = cljs.core.count.call(null,c__4390__auto___7143);
var G__7147 = (0);
seq__7100_7131 = G__7144;
chunk__7101_7132 = G__7145;
count__7102_7133 = G__7146;
i__7103_7134 = G__7147;
continue;
} else {
var c_7148 = cljs.core.first.call(null,seq__7100_7142__$1);
var class_name_7149 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_7149,c_7148))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_7149 === ""))?c_7148:[cljs.core.str(class_name_7149),cljs.core.str(" "),cljs.core.str(c_7148)].join('')));
}

var G__7150 = cljs.core.next.call(null,seq__7100_7142__$1);
var G__7151 = null;
var G__7152 = (0);
var G__7153 = (0);
seq__7100_7131 = G__7150;
chunk__7101_7132 = G__7151;
count__7102_7133 = G__7152;
i__7103_7134 = G__7153;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});
var add_class_BANG___3 = (function() { 
var G__7154__delegate = function (elem,classes,more_classes){
var seq__7104_7155 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__7105_7156 = null;
var count__7106_7157 = (0);
var i__7107_7158 = (0);
while(true){
if((i__7107_7158 < count__7106_7157)){
var c_7159 = cljs.core._nth.call(null,chunk__7105_7156,i__7107_7158);
add_class_BANG_.call(null,elem,c_7159);

var G__7160 = seq__7104_7155;
var G__7161 = chunk__7105_7156;
var G__7162 = count__7106_7157;
var G__7163 = (i__7107_7158 + (1));
seq__7104_7155 = G__7160;
chunk__7105_7156 = G__7161;
count__7106_7157 = G__7162;
i__7107_7158 = G__7163;
continue;
} else {
var temp__4126__auto___7164 = cljs.core.seq.call(null,seq__7104_7155);
if(temp__4126__auto___7164){
var seq__7104_7165__$1 = temp__4126__auto___7164;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7104_7165__$1)){
var c__4390__auto___7166 = cljs.core.chunk_first.call(null,seq__7104_7165__$1);
var G__7167 = cljs.core.chunk_rest.call(null,seq__7104_7165__$1);
var G__7168 = c__4390__auto___7166;
var G__7169 = cljs.core.count.call(null,c__4390__auto___7166);
var G__7170 = (0);
seq__7104_7155 = G__7167;
chunk__7105_7156 = G__7168;
count__7106_7157 = G__7169;
i__7107_7158 = G__7170;
continue;
} else {
var c_7171 = cljs.core.first.call(null,seq__7104_7165__$1);
add_class_BANG_.call(null,elem,c_7171);

var G__7172 = cljs.core.next.call(null,seq__7104_7165__$1);
var G__7173 = null;
var G__7174 = (0);
var G__7175 = (0);
seq__7104_7155 = G__7172;
chunk__7105_7156 = G__7173;
count__7106_7157 = G__7174;
i__7107_7158 = G__7175;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__7154 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7154__delegate.call(this,elem,classes,more_classes);};
G__7154.cljs$lang$maxFixedArity = 2;
G__7154.cljs$lang$applyTo = (function (arglist__7176){
var elem = cljs.core.first(arglist__7176);
arglist__7176 = cljs.core.next(arglist__7176);
var classes = cljs.core.first(arglist__7176);
var more_classes = cljs.core.rest(arglist__7176);
return G__7154__delegate(elem,classes,more_classes);
});
G__7154.cljs$core$IFn$_invoke$arity$variadic = G__7154__delegate;
return G__7154;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
/**
* Remove `c` from `elem` class list
* @param {...*} var_args
*/
dommy.core.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto___7185 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___7185)){
var class_list_7186 = temp__4124__auto___7185;
class_list_7186.remove(c__$1);
} else {
var class_name_7187 = dommy.core.class$.call(null,elem);
var new_class_name_7188 = dommy.utils.remove_class_str.call(null,class_name_7187,c__$1);
if((class_name_7187 === new_class_name_7188)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_7188);
}
}

return elem;
});
var remove_class_BANG___3 = (function() { 
var G__7189__delegate = function (elem,class$,classes){
var seq__7181 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__7182 = null;
var count__7183 = (0);
var i__7184 = (0);
while(true){
if((i__7184 < count__7183)){
var c = cljs.core._nth.call(null,chunk__7182,i__7184);
remove_class_BANG_.call(null,elem,c);

var G__7190 = seq__7181;
var G__7191 = chunk__7182;
var G__7192 = count__7183;
var G__7193 = (i__7184 + (1));
seq__7181 = G__7190;
chunk__7182 = G__7191;
count__7183 = G__7192;
i__7184 = G__7193;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7181);
if(temp__4126__auto__){
var seq__7181__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7181__$1)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,seq__7181__$1);
var G__7194 = cljs.core.chunk_rest.call(null,seq__7181__$1);
var G__7195 = c__4390__auto__;
var G__7196 = cljs.core.count.call(null,c__4390__auto__);
var G__7197 = (0);
seq__7181 = G__7194;
chunk__7182 = G__7195;
count__7183 = G__7196;
i__7184 = G__7197;
continue;
} else {
var c = cljs.core.first.call(null,seq__7181__$1);
remove_class_BANG_.call(null,elem,c);

var G__7198 = cljs.core.next.call(null,seq__7181__$1);
var G__7199 = null;
var G__7200 = (0);
var G__7201 = (0);
seq__7181 = G__7198;
chunk__7182 = G__7199;
count__7183 = G__7200;
i__7184 = G__7201;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__7189 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7189__delegate.call(this,elem,class$,classes);};
G__7189.cljs$lang$maxFixedArity = 2;
G__7189.cljs$lang$applyTo = (function (arglist__7202){
var elem = cljs.core.first(arglist__7202);
arglist__7202 = cljs.core.next(arglist__7202);
var class$ = cljs.core.first(arglist__7202);
var classes = cljs.core.rest(arglist__7202);
return G__7189__delegate(elem,class$,classes);
});
G__7189.cljs$core$IFn$_invoke$arity$variadic = G__7189__delegate;
return G__7189;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.core.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto___7203 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___7203)){
var class_list_7204 = temp__4124__auto___7203;
class_list_7204.toggle(c__$1);
} else {
toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
/**
* Display or hide the given `elem` (using display: none).
* Takes an optional boolean `show?`
*/
dommy.core.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){
return toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});
var toggle_BANG___2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.core.hide_BANG_ = (function hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});
var create_element__2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});
create_element = function(tag_ns,tag){
switch(arguments.length){
case 1:
return create_element__1.call(this,tag_ns);
case 2:
return create_element__2.call(this,tag_ns,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_element.cljs$core$IFn$_invoke$arity$1 = create_element__1;
create_element.cljs$core$IFn$_invoke$arity$2 = create_element__2;
return create_element;
})()
;
dommy.core.create_text_node = (function create_text_node(text){
return document.createTextNode(text);
});
/**
* Clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
* Append `child` to `parent`
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){
var G__7210 = parent;
G__7210.appendChild(child);

return G__7210;
});
var append_BANG___3 = (function() { 
var G__7215__delegate = function (parent,child,more_children){
var seq__7211_7216 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__7212_7217 = null;
var count__7213_7218 = (0);
var i__7214_7219 = (0);
while(true){
if((i__7214_7219 < count__7213_7218)){
var c_7220 = cljs.core._nth.call(null,chunk__7212_7217,i__7214_7219);
append_BANG_.call(null,parent,c_7220);

var G__7221 = seq__7211_7216;
var G__7222 = chunk__7212_7217;
var G__7223 = count__7213_7218;
var G__7224 = (i__7214_7219 + (1));
seq__7211_7216 = G__7221;
chunk__7212_7217 = G__7222;
count__7213_7218 = G__7223;
i__7214_7219 = G__7224;
continue;
} else {
var temp__4126__auto___7225 = cljs.core.seq.call(null,seq__7211_7216);
if(temp__4126__auto___7225){
var seq__7211_7226__$1 = temp__4126__auto___7225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7211_7226__$1)){
var c__4390__auto___7227 = cljs.core.chunk_first.call(null,seq__7211_7226__$1);
var G__7228 = cljs.core.chunk_rest.call(null,seq__7211_7226__$1);
var G__7229 = c__4390__auto___7227;
var G__7230 = cljs.core.count.call(null,c__4390__auto___7227);
var G__7231 = (0);
seq__7211_7216 = G__7228;
chunk__7212_7217 = G__7229;
count__7213_7218 = G__7230;
i__7214_7219 = G__7231;
continue;
} else {
var c_7232 = cljs.core.first.call(null,seq__7211_7226__$1);
append_BANG_.call(null,parent,c_7232);

var G__7233 = cljs.core.next.call(null,seq__7211_7226__$1);
var G__7234 = null;
var G__7235 = (0);
var G__7236 = (0);
seq__7211_7216 = G__7233;
chunk__7212_7217 = G__7234;
count__7213_7218 = G__7235;
i__7214_7219 = G__7236;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__7215 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7215__delegate.call(this,parent,child,more_children);};
G__7215.cljs$lang$maxFixedArity = 2;
G__7215.cljs$lang$applyTo = (function (arglist__7237){
var parent = cljs.core.first(arglist__7237);
arglist__7237 = cljs.core.next(arglist__7237);
var child = cljs.core.first(arglist__7237);
var more_children = cljs.core.rest(arglist__7237);
return G__7215__delegate(parent,child,more_children);
});
G__7215.cljs$core$IFn$_invoke$arity$variadic = G__7215__delegate;
return G__7215;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* Prepend `child` to `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){
var G__7243 = parent;
G__7243.insertBefore(child,parent.firstChild);

return G__7243;
});
var prepend_BANG___3 = (function() { 
var G__7248__delegate = function (parent,child,more_children){
var seq__7244_7249 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__7245_7250 = null;
var count__7246_7251 = (0);
var i__7247_7252 = (0);
while(true){
if((i__7247_7252 < count__7246_7251)){
var c_7253 = cljs.core._nth.call(null,chunk__7245_7250,i__7247_7252);
prepend_BANG_.call(null,parent,c_7253);

var G__7254 = seq__7244_7249;
var G__7255 = chunk__7245_7250;
var G__7256 = count__7246_7251;
var G__7257 = (i__7247_7252 + (1));
seq__7244_7249 = G__7254;
chunk__7245_7250 = G__7255;
count__7246_7251 = G__7256;
i__7247_7252 = G__7257;
continue;
} else {
var temp__4126__auto___7258 = cljs.core.seq.call(null,seq__7244_7249);
if(temp__4126__auto___7258){
var seq__7244_7259__$1 = temp__4126__auto___7258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7244_7259__$1)){
var c__4390__auto___7260 = cljs.core.chunk_first.call(null,seq__7244_7259__$1);
var G__7261 = cljs.core.chunk_rest.call(null,seq__7244_7259__$1);
var G__7262 = c__4390__auto___7260;
var G__7263 = cljs.core.count.call(null,c__4390__auto___7260);
var G__7264 = (0);
seq__7244_7249 = G__7261;
chunk__7245_7250 = G__7262;
count__7246_7251 = G__7263;
i__7247_7252 = G__7264;
continue;
} else {
var c_7265 = cljs.core.first.call(null,seq__7244_7259__$1);
prepend_BANG_.call(null,parent,c_7265);

var G__7266 = cljs.core.next.call(null,seq__7244_7259__$1);
var G__7267 = null;
var G__7268 = (0);
var G__7269 = (0);
seq__7244_7249 = G__7266;
chunk__7245_7250 = G__7267;
count__7246_7251 = G__7268;
i__7247_7252 = G__7269;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__7248 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7248__delegate.call(this,parent,child,more_children);};
G__7248.cljs$lang$maxFixedArity = 2;
G__7248.cljs$lang$applyTo = (function (arglist__7270){
var parent = cljs.core.first(arglist__7270);
arglist__7270 = cljs.core.next(arglist__7270);
var child = cljs.core.first(arglist__7270);
var more_children = cljs.core.rest(arglist__7270);
return G__7248__delegate(parent,child,more_children);
});
G__7248.cljs$core$IFn$_invoke$arity$variadic = G__7248__delegate;
return G__7248;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* Insert `elem` before `other`, `other` must have a parent
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
* Insert `elem` after `other`, `other` must have a parent
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){
var temp__4124__auto___7271 = other.nextSibling;
if(cljs.core.truth_(temp__4124__auto___7271)){
var next_7272 = temp__4124__auto___7271;
dommy.core.insert_before_BANG_.call(null,elem,next_7272);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
* Replace `elem` with `new`, return `new`
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
* Replace children of `elem` with `child`
*/
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
* Remove `elem` from `parent`, return `parent`
*/
dommy.core.remove_BANG_ = (function() {
var remove_BANG_ = null;
var remove_BANG___1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return remove_BANG_.call(null,p,elem);
});
var remove_BANG___2 = (function (p,elem){
var G__7274 = p;
G__7274.removeChild(elem);

return G__7274;
});
remove_BANG_ = function(p,elem){
switch(arguments.length){
case 1:
return remove_BANG___1.call(this,p);
case 2:
return remove_BANG___2.call(this,p,elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_BANG_.cljs$core$IFn$_invoke$arity$1 = remove_BANG___1;
remove_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_BANG___2;
return remove_BANG_;
})()
;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__7275){
var vec__7276 = p__7275;
var special_mouse_event = cljs.core.nth.call(null,vec__7276,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__7276,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__7276,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__7276,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__3608__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__3596__auto__ = related_target;
if(cljs.core.truth_(and__3596__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__3596__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__7276,special_mouse_event,real_mouse_event))
});})(vec__7276,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__3596__auto__ = selected_target;
if(cljs.core.truth_(and__3596__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__3596__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
* Returns a nested map of event listeners on `elem`
*/
dommy.core.event_listeners = (function event_listeners(elem){
var or__3608__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__7277){
var elem = cljs.core.first(arglist__7277);
arglist__7277 = cljs.core.next(arglist__7277);
var f = cljs.core.first(arglist__7277);
var args = cljs.core.rest(arglist__7277);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__7301_7324 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_7325 = cljs.core.nth.call(null,vec__7301_7324,(0),null);
var selector_7326 = cljs.core.nth.call(null,vec__7301_7324,(1),null);
var seq__7302_7327 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__7309_7328 = null;
var count__7310_7329 = (0);
var i__7311_7330 = (0);
while(true){
if((i__7311_7330 < count__7310_7329)){
var vec__7318_7331 = cljs.core._nth.call(null,chunk__7309_7328,i__7311_7330);
var orig_type_7332 = cljs.core.nth.call(null,vec__7318_7331,(0),null);
var f_7333 = cljs.core.nth.call(null,vec__7318_7331,(1),null);
var seq__7312_7334 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7332,new cljs.core.PersistentArrayMap.fromArray([orig_type_7332,cljs.core.identity], true, false)));
var chunk__7314_7335 = null;
var count__7315_7336 = (0);
var i__7316_7337 = (0);
while(true){
if((i__7316_7337 < count__7315_7336)){
var vec__7319_7338 = cljs.core._nth.call(null,chunk__7314_7335,i__7316_7337);
var actual_type_7339 = cljs.core.nth.call(null,vec__7319_7338,(0),null);
var factory_7340 = cljs.core.nth.call(null,vec__7319_7338,(1),null);
var canonical_f_7341 = (cljs.core.truth_(selector_7326)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7325,selector_7326):cljs.core.identity).call(null,factory_7340.call(null,f_7333));
dommy.core.update_event_listeners_BANG_.call(null,elem_7325,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7326,actual_type_7339,f_7333], null),canonical_f_7341);

if(cljs.core.truth_(elem_7325.addEventListener)){
elem_7325.addEventListener(cljs.core.name.call(null,actual_type_7339),canonical_f_7341);
} else {
elem_7325.attachEvent(cljs.core.name.call(null,actual_type_7339),canonical_f_7341);
}

var G__7342 = seq__7312_7334;
var G__7343 = chunk__7314_7335;
var G__7344 = count__7315_7336;
var G__7345 = (i__7316_7337 + (1));
seq__7312_7334 = G__7342;
chunk__7314_7335 = G__7343;
count__7315_7336 = G__7344;
i__7316_7337 = G__7345;
continue;
} else {
var temp__4126__auto___7346 = cljs.core.seq.call(null,seq__7312_7334);
if(temp__4126__auto___7346){
var seq__7312_7347__$1 = temp__4126__auto___7346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7312_7347__$1)){
var c__4390__auto___7348 = cljs.core.chunk_first.call(null,seq__7312_7347__$1);
var G__7349 = cljs.core.chunk_rest.call(null,seq__7312_7347__$1);
var G__7350 = c__4390__auto___7348;
var G__7351 = cljs.core.count.call(null,c__4390__auto___7348);
var G__7352 = (0);
seq__7312_7334 = G__7349;
chunk__7314_7335 = G__7350;
count__7315_7336 = G__7351;
i__7316_7337 = G__7352;
continue;
} else {
var vec__7320_7353 = cljs.core.first.call(null,seq__7312_7347__$1);
var actual_type_7354 = cljs.core.nth.call(null,vec__7320_7353,(0),null);
var factory_7355 = cljs.core.nth.call(null,vec__7320_7353,(1),null);
var canonical_f_7356 = (cljs.core.truth_(selector_7326)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7325,selector_7326):cljs.core.identity).call(null,factory_7355.call(null,f_7333));
dommy.core.update_event_listeners_BANG_.call(null,elem_7325,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7326,actual_type_7354,f_7333], null),canonical_f_7356);

if(cljs.core.truth_(elem_7325.addEventListener)){
elem_7325.addEventListener(cljs.core.name.call(null,actual_type_7354),canonical_f_7356);
} else {
elem_7325.attachEvent(cljs.core.name.call(null,actual_type_7354),canonical_f_7356);
}

var G__7357 = cljs.core.next.call(null,seq__7312_7347__$1);
var G__7358 = null;
var G__7359 = (0);
var G__7360 = (0);
seq__7312_7334 = G__7357;
chunk__7314_7335 = G__7358;
count__7315_7336 = G__7359;
i__7316_7337 = G__7360;
continue;
}
} else {
}
}
break;
}

var G__7361 = seq__7302_7327;
var G__7362 = chunk__7309_7328;
var G__7363 = count__7310_7329;
var G__7364 = (i__7311_7330 + (1));
seq__7302_7327 = G__7361;
chunk__7309_7328 = G__7362;
count__7310_7329 = G__7363;
i__7311_7330 = G__7364;
continue;
} else {
var temp__4126__auto___7365 = cljs.core.seq.call(null,seq__7302_7327);
if(temp__4126__auto___7365){
var seq__7302_7366__$1 = temp__4126__auto___7365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7302_7366__$1)){
var c__4390__auto___7367 = cljs.core.chunk_first.call(null,seq__7302_7366__$1);
var G__7368 = cljs.core.chunk_rest.call(null,seq__7302_7366__$1);
var G__7369 = c__4390__auto___7367;
var G__7370 = cljs.core.count.call(null,c__4390__auto___7367);
var G__7371 = (0);
seq__7302_7327 = G__7368;
chunk__7309_7328 = G__7369;
count__7310_7329 = G__7370;
i__7311_7330 = G__7371;
continue;
} else {
var vec__7321_7372 = cljs.core.first.call(null,seq__7302_7366__$1);
var orig_type_7373 = cljs.core.nth.call(null,vec__7321_7372,(0),null);
var f_7374 = cljs.core.nth.call(null,vec__7321_7372,(1),null);
var seq__7303_7375 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7373,new cljs.core.PersistentArrayMap.fromArray([orig_type_7373,cljs.core.identity], true, false)));
var chunk__7305_7376 = null;
var count__7306_7377 = (0);
var i__7307_7378 = (0);
while(true){
if((i__7307_7378 < count__7306_7377)){
var vec__7322_7379 = cljs.core._nth.call(null,chunk__7305_7376,i__7307_7378);
var actual_type_7380 = cljs.core.nth.call(null,vec__7322_7379,(0),null);
var factory_7381 = cljs.core.nth.call(null,vec__7322_7379,(1),null);
var canonical_f_7382 = (cljs.core.truth_(selector_7326)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7325,selector_7326):cljs.core.identity).call(null,factory_7381.call(null,f_7374));
dommy.core.update_event_listeners_BANG_.call(null,elem_7325,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7326,actual_type_7380,f_7374], null),canonical_f_7382);

if(cljs.core.truth_(elem_7325.addEventListener)){
elem_7325.addEventListener(cljs.core.name.call(null,actual_type_7380),canonical_f_7382);
} else {
elem_7325.attachEvent(cljs.core.name.call(null,actual_type_7380),canonical_f_7382);
}

var G__7383 = seq__7303_7375;
var G__7384 = chunk__7305_7376;
var G__7385 = count__7306_7377;
var G__7386 = (i__7307_7378 + (1));
seq__7303_7375 = G__7383;
chunk__7305_7376 = G__7384;
count__7306_7377 = G__7385;
i__7307_7378 = G__7386;
continue;
} else {
var temp__4126__auto___7387__$1 = cljs.core.seq.call(null,seq__7303_7375);
if(temp__4126__auto___7387__$1){
var seq__7303_7388__$1 = temp__4126__auto___7387__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7303_7388__$1)){
var c__4390__auto___7389 = cljs.core.chunk_first.call(null,seq__7303_7388__$1);
var G__7390 = cljs.core.chunk_rest.call(null,seq__7303_7388__$1);
var G__7391 = c__4390__auto___7389;
var G__7392 = cljs.core.count.call(null,c__4390__auto___7389);
var G__7393 = (0);
seq__7303_7375 = G__7390;
chunk__7305_7376 = G__7391;
count__7306_7377 = G__7392;
i__7307_7378 = G__7393;
continue;
} else {
var vec__7323_7394 = cljs.core.first.call(null,seq__7303_7388__$1);
var actual_type_7395 = cljs.core.nth.call(null,vec__7323_7394,(0),null);
var factory_7396 = cljs.core.nth.call(null,vec__7323_7394,(1),null);
var canonical_f_7397 = (cljs.core.truth_(selector_7326)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7325,selector_7326):cljs.core.identity).call(null,factory_7396.call(null,f_7374));
dommy.core.update_event_listeners_BANG_.call(null,elem_7325,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7326,actual_type_7395,f_7374], null),canonical_f_7397);

if(cljs.core.truth_(elem_7325.addEventListener)){
elem_7325.addEventListener(cljs.core.name.call(null,actual_type_7395),canonical_f_7397);
} else {
elem_7325.attachEvent(cljs.core.name.call(null,actual_type_7395),canonical_f_7397);
}

var G__7398 = cljs.core.next.call(null,seq__7303_7388__$1);
var G__7399 = null;
var G__7400 = (0);
var G__7401 = (0);
seq__7303_7375 = G__7398;
chunk__7305_7376 = G__7399;
count__7306_7377 = G__7400;
i__7307_7378 = G__7401;
continue;
}
} else {
}
}
break;
}

var G__7402 = cljs.core.next.call(null,seq__7302_7366__$1);
var G__7403 = null;
var G__7404 = (0);
var G__7405 = (0);
seq__7302_7327 = G__7402;
chunk__7309_7328 = G__7403;
count__7310_7329 = G__7404;
i__7311_7330 = G__7405;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__7406){
var elem_sel = cljs.core.first(arglist__7406);
var type_fs = cljs.core.rest(arglist__7406);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__7430_7453 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_7454 = cljs.core.nth.call(null,vec__7430_7453,(0),null);
var selector_7455 = cljs.core.nth.call(null,vec__7430_7453,(1),null);
var seq__7431_7456 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__7438_7457 = null;
var count__7439_7458 = (0);
var i__7440_7459 = (0);
while(true){
if((i__7440_7459 < count__7439_7458)){
var vec__7447_7460 = cljs.core._nth.call(null,chunk__7438_7457,i__7440_7459);
var orig_type_7461 = cljs.core.nth.call(null,vec__7447_7460,(0),null);
var f_7462 = cljs.core.nth.call(null,vec__7447_7460,(1),null);
var seq__7441_7463 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7461,new cljs.core.PersistentArrayMap.fromArray([orig_type_7461,cljs.core.identity], true, false)));
var chunk__7443_7464 = null;
var count__7444_7465 = (0);
var i__7445_7466 = (0);
while(true){
if((i__7445_7466 < count__7444_7465)){
var vec__7448_7467 = cljs.core._nth.call(null,chunk__7443_7464,i__7445_7466);
var actual_type_7468 = cljs.core.nth.call(null,vec__7448_7467,(0),null);
var __7469 = cljs.core.nth.call(null,vec__7448_7467,(1),null);
var keys_7470 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7455,actual_type_7468,f_7462], null);
var canonical_f_7471 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7454),keys_7470);
dommy.core.update_event_listeners_BANG_.call(null,elem_7454,dommy.utils.dissoc_in,keys_7470);

if(cljs.core.truth_(elem_7454.removeEventListener)){
elem_7454.removeEventListener(cljs.core.name.call(null,actual_type_7468),canonical_f_7471);
} else {
elem_7454.detachEvent(cljs.core.name.call(null,actual_type_7468),canonical_f_7471);
}

var G__7472 = seq__7441_7463;
var G__7473 = chunk__7443_7464;
var G__7474 = count__7444_7465;
var G__7475 = (i__7445_7466 + (1));
seq__7441_7463 = G__7472;
chunk__7443_7464 = G__7473;
count__7444_7465 = G__7474;
i__7445_7466 = G__7475;
continue;
} else {
var temp__4126__auto___7476 = cljs.core.seq.call(null,seq__7441_7463);
if(temp__4126__auto___7476){
var seq__7441_7477__$1 = temp__4126__auto___7476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7441_7477__$1)){
var c__4390__auto___7478 = cljs.core.chunk_first.call(null,seq__7441_7477__$1);
var G__7479 = cljs.core.chunk_rest.call(null,seq__7441_7477__$1);
var G__7480 = c__4390__auto___7478;
var G__7481 = cljs.core.count.call(null,c__4390__auto___7478);
var G__7482 = (0);
seq__7441_7463 = G__7479;
chunk__7443_7464 = G__7480;
count__7444_7465 = G__7481;
i__7445_7466 = G__7482;
continue;
} else {
var vec__7449_7483 = cljs.core.first.call(null,seq__7441_7477__$1);
var actual_type_7484 = cljs.core.nth.call(null,vec__7449_7483,(0),null);
var __7485 = cljs.core.nth.call(null,vec__7449_7483,(1),null);
var keys_7486 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7455,actual_type_7484,f_7462], null);
var canonical_f_7487 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7454),keys_7486);
dommy.core.update_event_listeners_BANG_.call(null,elem_7454,dommy.utils.dissoc_in,keys_7486);

if(cljs.core.truth_(elem_7454.removeEventListener)){
elem_7454.removeEventListener(cljs.core.name.call(null,actual_type_7484),canonical_f_7487);
} else {
elem_7454.detachEvent(cljs.core.name.call(null,actual_type_7484),canonical_f_7487);
}

var G__7488 = cljs.core.next.call(null,seq__7441_7477__$1);
var G__7489 = null;
var G__7490 = (0);
var G__7491 = (0);
seq__7441_7463 = G__7488;
chunk__7443_7464 = G__7489;
count__7444_7465 = G__7490;
i__7445_7466 = G__7491;
continue;
}
} else {
}
}
break;
}

var G__7492 = seq__7431_7456;
var G__7493 = chunk__7438_7457;
var G__7494 = count__7439_7458;
var G__7495 = (i__7440_7459 + (1));
seq__7431_7456 = G__7492;
chunk__7438_7457 = G__7493;
count__7439_7458 = G__7494;
i__7440_7459 = G__7495;
continue;
} else {
var temp__4126__auto___7496 = cljs.core.seq.call(null,seq__7431_7456);
if(temp__4126__auto___7496){
var seq__7431_7497__$1 = temp__4126__auto___7496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7431_7497__$1)){
var c__4390__auto___7498 = cljs.core.chunk_first.call(null,seq__7431_7497__$1);
var G__7499 = cljs.core.chunk_rest.call(null,seq__7431_7497__$1);
var G__7500 = c__4390__auto___7498;
var G__7501 = cljs.core.count.call(null,c__4390__auto___7498);
var G__7502 = (0);
seq__7431_7456 = G__7499;
chunk__7438_7457 = G__7500;
count__7439_7458 = G__7501;
i__7440_7459 = G__7502;
continue;
} else {
var vec__7450_7503 = cljs.core.first.call(null,seq__7431_7497__$1);
var orig_type_7504 = cljs.core.nth.call(null,vec__7450_7503,(0),null);
var f_7505 = cljs.core.nth.call(null,vec__7450_7503,(1),null);
var seq__7432_7506 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7504,new cljs.core.PersistentArrayMap.fromArray([orig_type_7504,cljs.core.identity], true, false)));
var chunk__7434_7507 = null;
var count__7435_7508 = (0);
var i__7436_7509 = (0);
while(true){
if((i__7436_7509 < count__7435_7508)){
var vec__7451_7510 = cljs.core._nth.call(null,chunk__7434_7507,i__7436_7509);
var actual_type_7511 = cljs.core.nth.call(null,vec__7451_7510,(0),null);
var __7512 = cljs.core.nth.call(null,vec__7451_7510,(1),null);
var keys_7513 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7455,actual_type_7511,f_7505], null);
var canonical_f_7514 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7454),keys_7513);
dommy.core.update_event_listeners_BANG_.call(null,elem_7454,dommy.utils.dissoc_in,keys_7513);

if(cljs.core.truth_(elem_7454.removeEventListener)){
elem_7454.removeEventListener(cljs.core.name.call(null,actual_type_7511),canonical_f_7514);
} else {
elem_7454.detachEvent(cljs.core.name.call(null,actual_type_7511),canonical_f_7514);
}

var G__7515 = seq__7432_7506;
var G__7516 = chunk__7434_7507;
var G__7517 = count__7435_7508;
var G__7518 = (i__7436_7509 + (1));
seq__7432_7506 = G__7515;
chunk__7434_7507 = G__7516;
count__7435_7508 = G__7517;
i__7436_7509 = G__7518;
continue;
} else {
var temp__4126__auto___7519__$1 = cljs.core.seq.call(null,seq__7432_7506);
if(temp__4126__auto___7519__$1){
var seq__7432_7520__$1 = temp__4126__auto___7519__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7432_7520__$1)){
var c__4390__auto___7521 = cljs.core.chunk_first.call(null,seq__7432_7520__$1);
var G__7522 = cljs.core.chunk_rest.call(null,seq__7432_7520__$1);
var G__7523 = c__4390__auto___7521;
var G__7524 = cljs.core.count.call(null,c__4390__auto___7521);
var G__7525 = (0);
seq__7432_7506 = G__7522;
chunk__7434_7507 = G__7523;
count__7435_7508 = G__7524;
i__7436_7509 = G__7525;
continue;
} else {
var vec__7452_7526 = cljs.core.first.call(null,seq__7432_7520__$1);
var actual_type_7527 = cljs.core.nth.call(null,vec__7452_7526,(0),null);
var __7528 = cljs.core.nth.call(null,vec__7452_7526,(1),null);
var keys_7529 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7455,actual_type_7527,f_7505], null);
var canonical_f_7530 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7454),keys_7529);
dommy.core.update_event_listeners_BANG_.call(null,elem_7454,dommy.utils.dissoc_in,keys_7529);

if(cljs.core.truth_(elem_7454.removeEventListener)){
elem_7454.removeEventListener(cljs.core.name.call(null,actual_type_7527),canonical_f_7530);
} else {
elem_7454.detachEvent(cljs.core.name.call(null,actual_type_7527),canonical_f_7530);
}

var G__7531 = cljs.core.next.call(null,seq__7432_7520__$1);
var G__7532 = null;
var G__7533 = (0);
var G__7534 = (0);
seq__7432_7506 = G__7531;
chunk__7434_7507 = G__7532;
count__7435_7508 = G__7533;
i__7436_7509 = G__7534;
continue;
}
} else {
}
}
break;
}

var G__7535 = cljs.core.next.call(null,seq__7431_7497__$1);
var G__7536 = null;
var G__7537 = (0);
var G__7538 = (0);
seq__7431_7456 = G__7535;
chunk__7438_7457 = G__7536;
count__7439_7458 = G__7537;
i__7440_7459 = G__7538;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__7539){
var elem_sel = cljs.core.first(arglist__7539);
var type_fs = cljs.core.rest(arglist__7539);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* Behaves like `listen!`, but removes the listener after the first event occurs.
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__7547_7554 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_7555 = cljs.core.nth.call(null,vec__7547_7554,(0),null);
var selector_7556 = cljs.core.nth.call(null,vec__7547_7554,(1),null);
var seq__7548_7557 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__7549_7558 = null;
var count__7550_7559 = (0);
var i__7551_7560 = (0);
while(true){
if((i__7551_7560 < count__7550_7559)){
var vec__7552_7561 = cljs.core._nth.call(null,chunk__7549_7558,i__7551_7560);
var type_7562 = cljs.core.nth.call(null,vec__7552_7561,(0),null);
var f_7563 = cljs.core.nth.call(null,vec__7552_7561,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_7562,((function (seq__7548_7557,chunk__7549_7558,count__7550_7559,i__7551_7560,vec__7552_7561,type_7562,f_7563,vec__7547_7554,elem_7555,selector_7556){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_7562,this_fn);

return f_7563.call(null,e);
});})(seq__7548_7557,chunk__7549_7558,count__7550_7559,i__7551_7560,vec__7552_7561,type_7562,f_7563,vec__7547_7554,elem_7555,selector_7556))
);

var G__7564 = seq__7548_7557;
var G__7565 = chunk__7549_7558;
var G__7566 = count__7550_7559;
var G__7567 = (i__7551_7560 + (1));
seq__7548_7557 = G__7564;
chunk__7549_7558 = G__7565;
count__7550_7559 = G__7566;
i__7551_7560 = G__7567;
continue;
} else {
var temp__4126__auto___7568 = cljs.core.seq.call(null,seq__7548_7557);
if(temp__4126__auto___7568){
var seq__7548_7569__$1 = temp__4126__auto___7568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7548_7569__$1)){
var c__4390__auto___7570 = cljs.core.chunk_first.call(null,seq__7548_7569__$1);
var G__7571 = cljs.core.chunk_rest.call(null,seq__7548_7569__$1);
var G__7572 = c__4390__auto___7570;
var G__7573 = cljs.core.count.call(null,c__4390__auto___7570);
var G__7574 = (0);
seq__7548_7557 = G__7571;
chunk__7549_7558 = G__7572;
count__7550_7559 = G__7573;
i__7551_7560 = G__7574;
continue;
} else {
var vec__7553_7575 = cljs.core.first.call(null,seq__7548_7569__$1);
var type_7576 = cljs.core.nth.call(null,vec__7553_7575,(0),null);
var f_7577 = cljs.core.nth.call(null,vec__7553_7575,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_7576,((function (seq__7548_7557,chunk__7549_7558,count__7550_7559,i__7551_7560,vec__7553_7575,type_7576,f_7577,seq__7548_7569__$1,temp__4126__auto___7568,vec__7547_7554,elem_7555,selector_7556){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_7576,this_fn);

return f_7577.call(null,e);
});})(seq__7548_7557,chunk__7549_7558,count__7550_7559,i__7551_7560,vec__7553_7575,type_7576,f_7577,seq__7548_7569__$1,temp__4126__auto___7568,vec__7547_7554,elem_7555,selector_7556))
);

var G__7578 = cljs.core.next.call(null,seq__7548_7569__$1);
var G__7579 = null;
var G__7580 = (0);
var G__7581 = (0);
seq__7548_7557 = G__7578;
chunk__7549_7558 = G__7579;
count__7550_7559 = G__7580;
i__7551_7560 = G__7581;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__7582){
var elem_sel = cljs.core.first(arglist__7582);
var type_fs = cljs.core.rest(arglist__7582);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
