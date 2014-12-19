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
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name(data);
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
return elem.getAttribute(dommy.utils.as_str(k));
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
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
});
var style__2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
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

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
var G__16169 = pixels;
return parseInt(G__16169);
} else {
return null;
}
});
/**
* Does `elem` contain `c` in its class list
*/
dommy.core.has_class_QMARK_ = (function has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4124__auto__ = elem.classList;
if(cljs.core.truth_(temp__4124__auto__)){
var class_list = temp__4124__auto__;
return class_list.contains(c__$1);
} else {
var temp__4126__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__4126__auto__)){
var class_name = temp__4126__auto__;
var temp__4126__auto____$1 = dommy.utils.class_index(class_name,c__$1);
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
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,cljs.core.constant$keyword$49) === "none");
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.core.bounding_client_rect = (function bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$20,r.top,cljs.core.constant$keyword$50,r.bottom,cljs.core.constant$keyword$21,r.left,cljs.core.constant$keyword$51,r.right,cljs.core.constant$keyword$22,r.width,cljs.core.constant$keyword$23,r.height], null);
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
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
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
return matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
});
var matches_pred__2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
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
return closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
});
var closest__3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__16172_SHARP_){
return !((p1__16172_SHARP_ === base));
}),dommy.core.ancestors(elem))));
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
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0)))].join('')));
}

var style = elem.style;
var seq__16182_16188 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__16183_16189 = null;
var count__16184_16190 = (0);
var i__16185_16191 = (0);
while(true){
if((i__16185_16191 < count__16184_16190)){
var vec__16186_16192 = chunk__16183_16189.cljs$core$IIndexed$_nth$arity$2(null,i__16185_16191);
var k_16193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16186_16192,(0),null);
var v_16194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16186_16192,(1),null);
style.setProperty(dommy.utils.as_str(k_16193),v_16194);

var G__16195 = seq__16182_16188;
var G__16196 = chunk__16183_16189;
var G__16197 = count__16184_16190;
var G__16198 = (i__16185_16191 + (1));
seq__16182_16188 = G__16195;
chunk__16183_16189 = G__16196;
count__16184_16190 = G__16197;
i__16185_16191 = G__16198;
continue;
} else {
var temp__4126__auto___16199 = cljs.core.seq(seq__16182_16188);
if(temp__4126__auto___16199){
var seq__16182_16200__$1 = temp__4126__auto___16199;
if(cljs.core.chunked_seq_QMARK_(seq__16182_16200__$1)){
var c__4390__auto___16201 = cljs.core.chunk_first(seq__16182_16200__$1);
var G__16202 = cljs.core.chunk_rest(seq__16182_16200__$1);
var G__16203 = c__4390__auto___16201;
var G__16204 = cljs.core.count(c__4390__auto___16201);
var G__16205 = (0);
seq__16182_16188 = G__16202;
chunk__16183_16189 = G__16203;
count__16184_16190 = G__16204;
i__16185_16191 = G__16205;
continue;
} else {
var vec__16187_16206 = cljs.core.first(seq__16182_16200__$1);
var k_16207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16187_16206,(0),null);
var v_16208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16187_16206,(1),null);
style.setProperty(dommy.utils.as_str(k_16207),v_16208);

var G__16209 = cljs.core.next(seq__16182_16200__$1);
var G__16210 = null;
var G__16211 = (0);
var G__16212 = (0);
seq__16182_16188 = G__16209;
chunk__16183_16189 = G__16210;
count__16184_16190 = G__16211;
i__16185_16191 = G__16212;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16213){
var elem = cljs.core.first(arglist__16213);
var kvs = cljs.core.rest(arglist__16213);
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

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0)))].join('')));
}

var seq__16220_16226 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__16221_16227 = null;
var count__16222_16228 = (0);
var i__16223_16229 = (0);
while(true){
if((i__16223_16229 < count__16222_16228)){
var vec__16224_16230 = chunk__16221_16227.cljs$core$IIndexed$_nth$arity$2(null,i__16223_16229);
var k_16231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16224_16230,(0),null);
var v_16232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16224_16230,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_16231,[cljs.core.str(v_16232),cljs.core.str("px")].join('')], 0));

var G__16233 = seq__16220_16226;
var G__16234 = chunk__16221_16227;
var G__16235 = count__16222_16228;
var G__16236 = (i__16223_16229 + (1));
seq__16220_16226 = G__16233;
chunk__16221_16227 = G__16234;
count__16222_16228 = G__16235;
i__16223_16229 = G__16236;
continue;
} else {
var temp__4126__auto___16237 = cljs.core.seq(seq__16220_16226);
if(temp__4126__auto___16237){
var seq__16220_16238__$1 = temp__4126__auto___16237;
if(cljs.core.chunked_seq_QMARK_(seq__16220_16238__$1)){
var c__4390__auto___16239 = cljs.core.chunk_first(seq__16220_16238__$1);
var G__16240 = cljs.core.chunk_rest(seq__16220_16238__$1);
var G__16241 = c__4390__auto___16239;
var G__16242 = cljs.core.count(c__4390__auto___16239);
var G__16243 = (0);
seq__16220_16226 = G__16240;
chunk__16221_16227 = G__16241;
count__16222_16228 = G__16242;
i__16223_16229 = G__16243;
continue;
} else {
var vec__16225_16244 = cljs.core.first(seq__16220_16238__$1);
var k_16245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16225_16244,(0),null);
var v_16246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16225_16244,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_16245,[cljs.core.str(v_16246),cljs.core.str("px")].join('')], 0));

var G__16247 = cljs.core.next(seq__16220_16238__$1);
var G__16248 = null;
var G__16249 = (0);
var G__16250 = (0);
seq__16220_16226 = G__16247;
chunk__16221_16227 = G__16248;
count__16222_16228 = G__16249;
i__16223_16229 = G__16250;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__16251){
var elem = cljs.core.first(arglist__16251);
var kvs = cljs.core.rest(arglist__16251);
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
return set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__16269 = elem;
(G__16269[k__$1] = v);

return G__16269;
} else {
var G__16270 = elem;
G__16270.setAttribute(k__$1,v);

return G__16270;
}
} else {
return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__16277__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0)))].join('')));
}

var seq__16271_16278 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__16272_16279 = null;
var count__16273_16280 = (0);
var i__16274_16281 = (0);
while(true){
if((i__16274_16281 < count__16273_16280)){
var vec__16275_16282 = chunk__16272_16279.cljs$core$IIndexed$_nth$arity$2(null,i__16274_16281);
var k_16283__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16275_16282,(0),null);
var v_16284__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16275_16282,(1),null);
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_16283__$1,v_16284__$1);

var G__16285 = seq__16271_16278;
var G__16286 = chunk__16272_16279;
var G__16287 = count__16273_16280;
var G__16288 = (i__16274_16281 + (1));
seq__16271_16278 = G__16285;
chunk__16272_16279 = G__16286;
count__16273_16280 = G__16287;
i__16274_16281 = G__16288;
continue;
} else {
var temp__4126__auto___16289 = cljs.core.seq(seq__16271_16278);
if(temp__4126__auto___16289){
var seq__16271_16290__$1 = temp__4126__auto___16289;
if(cljs.core.chunked_seq_QMARK_(seq__16271_16290__$1)){
var c__4390__auto___16291 = cljs.core.chunk_first(seq__16271_16290__$1);
var G__16292 = cljs.core.chunk_rest(seq__16271_16290__$1);
var G__16293 = c__4390__auto___16291;
var G__16294 = cljs.core.count(c__4390__auto___16291);
var G__16295 = (0);
seq__16271_16278 = G__16292;
chunk__16272_16279 = G__16293;
count__16273_16280 = G__16294;
i__16274_16281 = G__16295;
continue;
} else {
var vec__16276_16296 = cljs.core.first(seq__16271_16290__$1);
var k_16297__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16276_16296,(0),null);
var v_16298__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16276_16296,(1),null);
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_16297__$1,v_16298__$1);

var G__16299 = cljs.core.next(seq__16271_16290__$1);
var G__16300 = null;
var G__16301 = (0);
var G__16302 = (0);
seq__16271_16278 = G__16299;
chunk__16272_16279 = G__16300;
count__16273_16280 = G__16301;
i__16274_16281 = G__16302;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__16277 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16277__delegate.call(this,elem,k,v,kvs);};
G__16277.cljs$lang$maxFixedArity = 3;
G__16277.cljs$lang$applyTo = (function (arglist__16303){
var elem = cljs.core.first(arglist__16303);
arglist__16303 = cljs.core.next(arglist__16303);
var k = cljs.core.first(arglist__16303);
arglist__16303 = cljs.core.next(arglist__16303);
var v = cljs.core.first(arglist__16303);
var kvs = cljs.core.rest(arglist__16303);
return G__16277__delegate(elem,k,v,kvs);
});
G__16277.cljs$core$IFn$_invoke$arity$variadic = G__16277__delegate;
return G__16277;
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
var k_16316__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_16316__$1))){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_16316__$1);
}

return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__16317__delegate = function (elem,k,ks){
var seq__16312_16318 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__16313_16319 = null;
var count__16314_16320 = (0);
var i__16315_16321 = (0);
while(true){
if((i__16315_16321 < count__16314_16320)){
var k_16322__$1 = chunk__16313_16319.cljs$core$IIndexed$_nth$arity$2(null,i__16315_16321);
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_16322__$1);

var G__16323 = seq__16312_16318;
var G__16324 = chunk__16313_16319;
var G__16325 = count__16314_16320;
var G__16326 = (i__16315_16321 + (1));
seq__16312_16318 = G__16323;
chunk__16313_16319 = G__16324;
count__16314_16320 = G__16325;
i__16315_16321 = G__16326;
continue;
} else {
var temp__4126__auto___16327 = cljs.core.seq(seq__16312_16318);
if(temp__4126__auto___16327){
var seq__16312_16328__$1 = temp__4126__auto___16327;
if(cljs.core.chunked_seq_QMARK_(seq__16312_16328__$1)){
var c__4390__auto___16329 = cljs.core.chunk_first(seq__16312_16328__$1);
var G__16330 = cljs.core.chunk_rest(seq__16312_16328__$1);
var G__16331 = c__4390__auto___16329;
var G__16332 = cljs.core.count(c__4390__auto___16329);
var G__16333 = (0);
seq__16312_16318 = G__16330;
chunk__16313_16319 = G__16331;
count__16314_16320 = G__16332;
i__16315_16321 = G__16333;
continue;
} else {
var k_16334__$1 = cljs.core.first(seq__16312_16328__$1);
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_16334__$1);

var G__16335 = cljs.core.next(seq__16312_16328__$1);
var G__16336 = null;
var G__16337 = (0);
var G__16338 = (0);
seq__16312_16318 = G__16335;
chunk__16313_16319 = G__16336;
count__16314_16320 = G__16337;
i__16315_16321 = G__16338;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__16317 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16317__delegate.call(this,elem,k,ks);};
G__16317.cljs$lang$maxFixedArity = 2;
G__16317.cljs$lang$applyTo = (function (arglist__16339){
var elem = cljs.core.first(arglist__16339);
arglist__16339 = cljs.core.next(arglist__16339);
var k = cljs.core.first(arglist__16339);
var ks = cljs.core.rest(arglist__16339);
return G__16317__delegate(elem,k,ks);
});
G__16317.cljs$core$IFn$_invoke$arity$variadic = G__16317__delegate;
return G__16317;
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
return toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
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
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__4124__auto___16371 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___16371)){
var class_list_16372 = temp__4124__auto___16371;
var seq__16359_16373 = cljs.core.seq(classes__$1);
var chunk__16360_16374 = null;
var count__16361_16375 = (0);
var i__16362_16376 = (0);
while(true){
if((i__16362_16376 < count__16361_16375)){
var c_16377 = chunk__16360_16374.cljs$core$IIndexed$_nth$arity$2(null,i__16362_16376);
class_list_16372.add(c_16377);

var G__16378 = seq__16359_16373;
var G__16379 = chunk__16360_16374;
var G__16380 = count__16361_16375;
var G__16381 = (i__16362_16376 + (1));
seq__16359_16373 = G__16378;
chunk__16360_16374 = G__16379;
count__16361_16375 = G__16380;
i__16362_16376 = G__16381;
continue;
} else {
var temp__4126__auto___16382 = cljs.core.seq(seq__16359_16373);
if(temp__4126__auto___16382){
var seq__16359_16383__$1 = temp__4126__auto___16382;
if(cljs.core.chunked_seq_QMARK_(seq__16359_16383__$1)){
var c__4390__auto___16384 = cljs.core.chunk_first(seq__16359_16383__$1);
var G__16385 = cljs.core.chunk_rest(seq__16359_16383__$1);
var G__16386 = c__4390__auto___16384;
var G__16387 = cljs.core.count(c__4390__auto___16384);
var G__16388 = (0);
seq__16359_16373 = G__16385;
chunk__16360_16374 = G__16386;
count__16361_16375 = G__16387;
i__16362_16376 = G__16388;
continue;
} else {
var c_16389 = cljs.core.first(seq__16359_16383__$1);
class_list_16372.add(c_16389);

var G__16390 = cljs.core.next(seq__16359_16383__$1);
var G__16391 = null;
var G__16392 = (0);
var G__16393 = (0);
seq__16359_16373 = G__16390;
chunk__16360_16374 = G__16391;
count__16361_16375 = G__16392;
i__16362_16376 = G__16393;
continue;
}
} else {
}
}
break;
}
} else {
var seq__16363_16394 = cljs.core.seq(classes__$1);
var chunk__16364_16395 = null;
var count__16365_16396 = (0);
var i__16366_16397 = (0);
while(true){
if((i__16366_16397 < count__16365_16396)){
var c_16398 = chunk__16364_16395.cljs$core$IIndexed$_nth$arity$2(null,i__16366_16397);
var class_name_16399 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_16399,c_16398))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_16399 === ""))?c_16398:[cljs.core.str(class_name_16399),cljs.core.str(" "),cljs.core.str(c_16398)].join('')));
}

var G__16400 = seq__16363_16394;
var G__16401 = chunk__16364_16395;
var G__16402 = count__16365_16396;
var G__16403 = (i__16366_16397 + (1));
seq__16363_16394 = G__16400;
chunk__16364_16395 = G__16401;
count__16365_16396 = G__16402;
i__16366_16397 = G__16403;
continue;
} else {
var temp__4126__auto___16404 = cljs.core.seq(seq__16363_16394);
if(temp__4126__auto___16404){
var seq__16363_16405__$1 = temp__4126__auto___16404;
if(cljs.core.chunked_seq_QMARK_(seq__16363_16405__$1)){
var c__4390__auto___16406 = cljs.core.chunk_first(seq__16363_16405__$1);
var G__16407 = cljs.core.chunk_rest(seq__16363_16405__$1);
var G__16408 = c__4390__auto___16406;
var G__16409 = cljs.core.count(c__4390__auto___16406);
var G__16410 = (0);
seq__16363_16394 = G__16407;
chunk__16364_16395 = G__16408;
count__16365_16396 = G__16409;
i__16366_16397 = G__16410;
continue;
} else {
var c_16411 = cljs.core.first(seq__16363_16405__$1);
var class_name_16412 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_16412,c_16411))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_16412 === ""))?c_16411:[cljs.core.str(class_name_16412),cljs.core.str(" "),cljs.core.str(c_16411)].join('')));
}

var G__16413 = cljs.core.next(seq__16363_16405__$1);
var G__16414 = null;
var G__16415 = (0);
var G__16416 = (0);
seq__16363_16394 = G__16413;
chunk__16364_16395 = G__16414;
count__16365_16396 = G__16415;
i__16366_16397 = G__16416;
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
var G__16417__delegate = function (elem,classes,more_classes){
var seq__16367_16418 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__16368_16419 = null;
var count__16369_16420 = (0);
var i__16370_16421 = (0);
while(true){
if((i__16370_16421 < count__16369_16420)){
var c_16422 = chunk__16368_16419.cljs$core$IIndexed$_nth$arity$2(null,i__16370_16421);
add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_16422);

var G__16423 = seq__16367_16418;
var G__16424 = chunk__16368_16419;
var G__16425 = count__16369_16420;
var G__16426 = (i__16370_16421 + (1));
seq__16367_16418 = G__16423;
chunk__16368_16419 = G__16424;
count__16369_16420 = G__16425;
i__16370_16421 = G__16426;
continue;
} else {
var temp__4126__auto___16427 = cljs.core.seq(seq__16367_16418);
if(temp__4126__auto___16427){
var seq__16367_16428__$1 = temp__4126__auto___16427;
if(cljs.core.chunked_seq_QMARK_(seq__16367_16428__$1)){
var c__4390__auto___16429 = cljs.core.chunk_first(seq__16367_16428__$1);
var G__16430 = cljs.core.chunk_rest(seq__16367_16428__$1);
var G__16431 = c__4390__auto___16429;
var G__16432 = cljs.core.count(c__4390__auto___16429);
var G__16433 = (0);
seq__16367_16418 = G__16430;
chunk__16368_16419 = G__16431;
count__16369_16420 = G__16432;
i__16370_16421 = G__16433;
continue;
} else {
var c_16434 = cljs.core.first(seq__16367_16428__$1);
add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_16434);

var G__16435 = cljs.core.next(seq__16367_16428__$1);
var G__16436 = null;
var G__16437 = (0);
var G__16438 = (0);
seq__16367_16418 = G__16435;
chunk__16368_16419 = G__16436;
count__16369_16420 = G__16437;
i__16370_16421 = G__16438;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__16417 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16417__delegate.call(this,elem,classes,more_classes);};
G__16417.cljs$lang$maxFixedArity = 2;
G__16417.cljs$lang$applyTo = (function (arglist__16439){
var elem = cljs.core.first(arglist__16439);
arglist__16439 = cljs.core.next(arglist__16439);
var classes = cljs.core.first(arglist__16439);
var more_classes = cljs.core.rest(arglist__16439);
return G__16417__delegate(elem,classes,more_classes);
});
G__16417.cljs$core$IFn$_invoke$arity$variadic = G__16417__delegate;
return G__16417;
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
var c__$1 = dommy.utils.as_str(c);
var temp__4124__auto___16452 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___16452)){
var class_list_16453 = temp__4124__auto___16452;
class_list_16453.remove(c__$1);
} else {
var class_name_16454 = dommy.core.class$(elem);
var new_class_name_16455 = dommy.utils.remove_class_str(class_name_16454,c__$1);
if((class_name_16454 === new_class_name_16455)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_16455);
}
}

return elem;
});
var remove_class_BANG___3 = (function() { 
var G__16456__delegate = function (elem,class$,classes){
var seq__16448 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__16449 = null;
var count__16450 = (0);
var i__16451 = (0);
while(true){
if((i__16451 < count__16450)){
var c = chunk__16449.cljs$core$IIndexed$_nth$arity$2(null,i__16451);
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__16457 = seq__16448;
var G__16458 = chunk__16449;
var G__16459 = count__16450;
var G__16460 = (i__16451 + (1));
seq__16448 = G__16457;
chunk__16449 = G__16458;
count__16450 = G__16459;
i__16451 = G__16460;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__16448);
if(temp__4126__auto__){
var seq__16448__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16448__$1)){
var c__4390__auto__ = cljs.core.chunk_first(seq__16448__$1);
var G__16461 = cljs.core.chunk_rest(seq__16448__$1);
var G__16462 = c__4390__auto__;
var G__16463 = cljs.core.count(c__4390__auto__);
var G__16464 = (0);
seq__16448 = G__16461;
chunk__16449 = G__16462;
count__16450 = G__16463;
i__16451 = G__16464;
continue;
} else {
var c = cljs.core.first(seq__16448__$1);
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__16465 = cljs.core.next(seq__16448__$1);
var G__16466 = null;
var G__16467 = (0);
var G__16468 = (0);
seq__16448 = G__16465;
chunk__16449 = G__16466;
count__16450 = G__16467;
i__16451 = G__16468;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__16456 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16456__delegate.call(this,elem,class$,classes);};
G__16456.cljs$lang$maxFixedArity = 2;
G__16456.cljs$lang$applyTo = (function (arglist__16469){
var elem = cljs.core.first(arglist__16469);
arglist__16469 = cljs.core.next(arglist__16469);
var class$ = cljs.core.first(arglist__16469);
var classes = cljs.core.rest(arglist__16469);
return G__16456__delegate(elem,class$,classes);
});
G__16456.cljs$core$IFn$_invoke$arity$variadic = G__16456__delegate;
return G__16456;
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
var c__$1 = dommy.utils.as_str(c);
var temp__4124__auto___16473 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___16473)){
var class_list_16474 = temp__4124__auto___16473;
class_list_16474.toggle(c__$1);
} else {
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,!(dommy.core.has_class_QMARK_(elem,c__$1)));
}

return elem;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
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
return toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
});
var toggle_BANG___2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([cljs.core.constant$keyword$49,((show_QMARK_)?"":"none")], 0));
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
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){
var top = cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
});
var create_element__2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
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
return dommy.core.set_html_BANG_(elem,"");
});
/**
* Append `child` to `parent`
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){
var G__16486 = parent;
G__16486.appendChild(child);

return G__16486;
});
var append_BANG___3 = (function() { 
var G__16491__delegate = function (parent,child,more_children){
var seq__16487_16492 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__16488_16493 = null;
var count__16489_16494 = (0);
var i__16490_16495 = (0);
while(true){
if((i__16490_16495 < count__16489_16494)){
var c_16496 = chunk__16488_16493.cljs$core$IIndexed$_nth$arity$2(null,i__16490_16495);
append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_16496);

var G__16497 = seq__16487_16492;
var G__16498 = chunk__16488_16493;
var G__16499 = count__16489_16494;
var G__16500 = (i__16490_16495 + (1));
seq__16487_16492 = G__16497;
chunk__16488_16493 = G__16498;
count__16489_16494 = G__16499;
i__16490_16495 = G__16500;
continue;
} else {
var temp__4126__auto___16501 = cljs.core.seq(seq__16487_16492);
if(temp__4126__auto___16501){
var seq__16487_16502__$1 = temp__4126__auto___16501;
if(cljs.core.chunked_seq_QMARK_(seq__16487_16502__$1)){
var c__4390__auto___16503 = cljs.core.chunk_first(seq__16487_16502__$1);
var G__16504 = cljs.core.chunk_rest(seq__16487_16502__$1);
var G__16505 = c__4390__auto___16503;
var G__16506 = cljs.core.count(c__4390__auto___16503);
var G__16507 = (0);
seq__16487_16492 = G__16504;
chunk__16488_16493 = G__16505;
count__16489_16494 = G__16506;
i__16490_16495 = G__16507;
continue;
} else {
var c_16508 = cljs.core.first(seq__16487_16502__$1);
append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_16508);

var G__16509 = cljs.core.next(seq__16487_16502__$1);
var G__16510 = null;
var G__16511 = (0);
var G__16512 = (0);
seq__16487_16492 = G__16509;
chunk__16488_16493 = G__16510;
count__16489_16494 = G__16511;
i__16490_16495 = G__16512;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__16491 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16491__delegate.call(this,parent,child,more_children);};
G__16491.cljs$lang$maxFixedArity = 2;
G__16491.cljs$lang$applyTo = (function (arglist__16513){
var parent = cljs.core.first(arglist__16513);
arglist__16513 = cljs.core.next(arglist__16513);
var child = cljs.core.first(arglist__16513);
var more_children = cljs.core.rest(arglist__16513);
return G__16491__delegate(parent,child,more_children);
});
G__16491.cljs$core$IFn$_invoke$arity$variadic = G__16491__delegate;
return G__16491;
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
var G__16523 = parent;
G__16523.insertBefore(child,parent.firstChild);

return G__16523;
});
var prepend_BANG___3 = (function() { 
var G__16528__delegate = function (parent,child,more_children){
var seq__16524_16529 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__16525_16530 = null;
var count__16526_16531 = (0);
var i__16527_16532 = (0);
while(true){
if((i__16527_16532 < count__16526_16531)){
var c_16533 = chunk__16525_16530.cljs$core$IIndexed$_nth$arity$2(null,i__16527_16532);
prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_16533);

var G__16534 = seq__16524_16529;
var G__16535 = chunk__16525_16530;
var G__16536 = count__16526_16531;
var G__16537 = (i__16527_16532 + (1));
seq__16524_16529 = G__16534;
chunk__16525_16530 = G__16535;
count__16526_16531 = G__16536;
i__16527_16532 = G__16537;
continue;
} else {
var temp__4126__auto___16538 = cljs.core.seq(seq__16524_16529);
if(temp__4126__auto___16538){
var seq__16524_16539__$1 = temp__4126__auto___16538;
if(cljs.core.chunked_seq_QMARK_(seq__16524_16539__$1)){
var c__4390__auto___16540 = cljs.core.chunk_first(seq__16524_16539__$1);
var G__16541 = cljs.core.chunk_rest(seq__16524_16539__$1);
var G__16542 = c__4390__auto___16540;
var G__16543 = cljs.core.count(c__4390__auto___16540);
var G__16544 = (0);
seq__16524_16529 = G__16541;
chunk__16525_16530 = G__16542;
count__16526_16531 = G__16543;
i__16527_16532 = G__16544;
continue;
} else {
var c_16545 = cljs.core.first(seq__16524_16539__$1);
prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_16545);

var G__16546 = cljs.core.next(seq__16524_16539__$1);
var G__16547 = null;
var G__16548 = (0);
var G__16549 = (0);
seq__16524_16529 = G__16546;
chunk__16525_16530 = G__16547;
count__16526_16531 = G__16548;
i__16527_16532 = G__16549;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__16528 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16528__delegate.call(this,parent,child,more_children);};
G__16528.cljs$lang$maxFixedArity = 2;
G__16528.cljs$lang$applyTo = (function (arglist__16550){
var parent = cljs.core.first(arglist__16550);
arglist__16550 = cljs.core.next(arglist__16550);
var child = cljs.core.first(arglist__16550);
var more_children = cljs.core.rest(arglist__16550);
return G__16528__delegate(parent,child,more_children);
});
G__16528.cljs$core$IFn$_invoke$arity$variadic = G__16528__delegate;
return G__16528;
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
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"p","p",1791580836,null)], 0)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
* Insert `elem` after `other`, `other` must have a parent
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){
var temp__4124__auto___16551 = other.nextSibling;
if(cljs.core.truth_(temp__4124__auto___16551)){
var next_16552 = temp__4124__auto___16551;
dommy.core.insert_before_BANG_(elem,next_16552);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
* Replace `elem` with `new`, return `new`
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"p","p",1791580836,null)], 0)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
* Replace children of `elem` with `child`
*/
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
* Remove `elem` from `parent`, return `parent`
*/
dommy.core.remove_BANG_ = (function() {
var remove_BANG_ = null;
var remove_BANG___1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"p","p",1791580836,null)], 0)))].join('')));
}

return remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
});
var remove_BANG___2 = (function (p,elem){
var G__16556 = p;
G__16556.removeChild(elem);

return G__16556;
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
dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16557){
var vec__16558 = p__16557;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16558,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16558,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__16558,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__16558,special_mouse_event,real_mouse_event){
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
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__3596__auto__;
}
})())){
return null;
} else {
var G__16559 = event;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16559) : f.call(null,G__16559));
}
});
;})(vec__16558,special_mouse_event,real_mouse_event))
});})(vec__16558,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$52,cljs.core.constant$keyword$54,cljs.core.constant$keyword$53,cljs.core.constant$keyword$55], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__3596__auto__ = selected_target;
if(cljs.core.truth_(and__3596__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,cljs.core.constant$keyword$56));
} else {
return and__3596__auto__;
}
})())){
event.selectedTarget = selected_target;

var G__16561 = event;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16561) : f.call(null,G__16561));
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
return elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__16562){
var elem = cljs.core.first(arglist__16562);
arglist__16562 = cljs.core.next(arglist__16562);
var f = cljs.core.first(arglist__16562);
var args = cljs.core.rest(arglist__16562);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest).call(null,elem_sel);
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
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))], 0)))].join('')));
}

var vec__16590_16617 = dommy.core.elem_and_selector(elem_sel);
var elem_16618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16590_16617,(0),null);
var selector_16619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16590_16617,(1),null);
var seq__16591_16620 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__16598_16621 = null;
var count__16599_16622 = (0);
var i__16600_16623 = (0);
while(true){
if((i__16600_16623 < count__16599_16622)){
var vec__16607_16624 = chunk__16598_16621.cljs$core$IIndexed$_nth$arity$2(null,i__16600_16623);
var orig_type_16625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16607_16624,(0),null);
var f_16626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16607_16624,(1),null);
var seq__16601_16627 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_16625,new cljs.core.PersistentArrayMap.fromArray([orig_type_16625,cljs.core.identity], true, false)));
var chunk__16603_16628 = null;
var count__16604_16629 = (0);
var i__16605_16630 = (0);
while(true){
if((i__16605_16630 < count__16604_16629)){
var vec__16608_16631 = chunk__16603_16628.cljs$core$IIndexed$_nth$arity$2(null,i__16605_16630);
var actual_type_16632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16608_16631,(0),null);
var factory_16633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16608_16631,(1),null);
var canonical_f_16634 = (cljs.core.truth_(selector_16619)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_16618,selector_16619):cljs.core.identity).call(null,(function (){var G__16609 = f_16626;
return (factory_16633.cljs$core$IFn$_invoke$arity$1 ? factory_16633.cljs$core$IFn$_invoke$arity$1(G__16609) : factory_16633.call(null,G__16609));
})());
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16618,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16619,actual_type_16632,f_16626], null),canonical_f_16634], 0));

if(cljs.core.truth_(elem_16618.addEventListener)){
elem_16618.addEventListener(cljs.core.name(actual_type_16632),canonical_f_16634);
} else {
elem_16618.attachEvent(cljs.core.name(actual_type_16632),canonical_f_16634);
}

var G__16635 = seq__16601_16627;
var G__16636 = chunk__16603_16628;
var G__16637 = count__16604_16629;
var G__16638 = (i__16605_16630 + (1));
seq__16601_16627 = G__16635;
chunk__16603_16628 = G__16636;
count__16604_16629 = G__16637;
i__16605_16630 = G__16638;
continue;
} else {
var temp__4126__auto___16639 = cljs.core.seq(seq__16601_16627);
if(temp__4126__auto___16639){
var seq__16601_16640__$1 = temp__4126__auto___16639;
if(cljs.core.chunked_seq_QMARK_(seq__16601_16640__$1)){
var c__4390__auto___16641 = cljs.core.chunk_first(seq__16601_16640__$1);
var G__16642 = cljs.core.chunk_rest(seq__16601_16640__$1);
var G__16643 = c__4390__auto___16641;
var G__16644 = cljs.core.count(c__4390__auto___16641);
var G__16645 = (0);
seq__16601_16627 = G__16642;
chunk__16603_16628 = G__16643;
count__16604_16629 = G__16644;
i__16605_16630 = G__16645;
continue;
} else {
var vec__16610_16646 = cljs.core.first(seq__16601_16640__$1);
var actual_type_16647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16610_16646,(0),null);
var factory_16648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16610_16646,(1),null);
var canonical_f_16649 = (cljs.core.truth_(selector_16619)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_16618,selector_16619):cljs.core.identity).call(null,(function (){var G__16611 = f_16626;
return (factory_16648.cljs$core$IFn$_invoke$arity$1 ? factory_16648.cljs$core$IFn$_invoke$arity$1(G__16611) : factory_16648.call(null,G__16611));
})());
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16618,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16619,actual_type_16647,f_16626], null),canonical_f_16649], 0));

if(cljs.core.truth_(elem_16618.addEventListener)){
elem_16618.addEventListener(cljs.core.name(actual_type_16647),canonical_f_16649);
} else {
elem_16618.attachEvent(cljs.core.name(actual_type_16647),canonical_f_16649);
}

var G__16650 = cljs.core.next(seq__16601_16640__$1);
var G__16651 = null;
var G__16652 = (0);
var G__16653 = (0);
seq__16601_16627 = G__16650;
chunk__16603_16628 = G__16651;
count__16604_16629 = G__16652;
i__16605_16630 = G__16653;
continue;
}
} else {
}
}
break;
}

var G__16654 = seq__16591_16620;
var G__16655 = chunk__16598_16621;
var G__16656 = count__16599_16622;
var G__16657 = (i__16600_16623 + (1));
seq__16591_16620 = G__16654;
chunk__16598_16621 = G__16655;
count__16599_16622 = G__16656;
i__16600_16623 = G__16657;
continue;
} else {
var temp__4126__auto___16658 = cljs.core.seq(seq__16591_16620);
if(temp__4126__auto___16658){
var seq__16591_16659__$1 = temp__4126__auto___16658;
if(cljs.core.chunked_seq_QMARK_(seq__16591_16659__$1)){
var c__4390__auto___16660 = cljs.core.chunk_first(seq__16591_16659__$1);
var G__16661 = cljs.core.chunk_rest(seq__16591_16659__$1);
var G__16662 = c__4390__auto___16660;
var G__16663 = cljs.core.count(c__4390__auto___16660);
var G__16664 = (0);
seq__16591_16620 = G__16661;
chunk__16598_16621 = G__16662;
count__16599_16622 = G__16663;
i__16600_16623 = G__16664;
continue;
} else {
var vec__16612_16665 = cljs.core.first(seq__16591_16659__$1);
var orig_type_16666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16612_16665,(0),null);
var f_16667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16612_16665,(1),null);
var seq__16592_16668 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_16666,new cljs.core.PersistentArrayMap.fromArray([orig_type_16666,cljs.core.identity], true, false)));
var chunk__16594_16669 = null;
var count__16595_16670 = (0);
var i__16596_16671 = (0);
while(true){
if((i__16596_16671 < count__16595_16670)){
var vec__16613_16672 = chunk__16594_16669.cljs$core$IIndexed$_nth$arity$2(null,i__16596_16671);
var actual_type_16673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16613_16672,(0),null);
var factory_16674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16613_16672,(1),null);
var canonical_f_16675 = (cljs.core.truth_(selector_16619)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_16618,selector_16619):cljs.core.identity).call(null,(function (){var G__16614 = f_16667;
return (factory_16674.cljs$core$IFn$_invoke$arity$1 ? factory_16674.cljs$core$IFn$_invoke$arity$1(G__16614) : factory_16674.call(null,G__16614));
})());
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16618,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16619,actual_type_16673,f_16667], null),canonical_f_16675], 0));

if(cljs.core.truth_(elem_16618.addEventListener)){
elem_16618.addEventListener(cljs.core.name(actual_type_16673),canonical_f_16675);
} else {
elem_16618.attachEvent(cljs.core.name(actual_type_16673),canonical_f_16675);
}

var G__16676 = seq__16592_16668;
var G__16677 = chunk__16594_16669;
var G__16678 = count__16595_16670;
var G__16679 = (i__16596_16671 + (1));
seq__16592_16668 = G__16676;
chunk__16594_16669 = G__16677;
count__16595_16670 = G__16678;
i__16596_16671 = G__16679;
continue;
} else {
var temp__4126__auto___16680__$1 = cljs.core.seq(seq__16592_16668);
if(temp__4126__auto___16680__$1){
var seq__16592_16681__$1 = temp__4126__auto___16680__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16592_16681__$1)){
var c__4390__auto___16682 = cljs.core.chunk_first(seq__16592_16681__$1);
var G__16683 = cljs.core.chunk_rest(seq__16592_16681__$1);
var G__16684 = c__4390__auto___16682;
var G__16685 = cljs.core.count(c__4390__auto___16682);
var G__16686 = (0);
seq__16592_16668 = G__16683;
chunk__16594_16669 = G__16684;
count__16595_16670 = G__16685;
i__16596_16671 = G__16686;
continue;
} else {
var vec__16615_16687 = cljs.core.first(seq__16592_16681__$1);
var actual_type_16688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16615_16687,(0),null);
var factory_16689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16615_16687,(1),null);
var canonical_f_16690 = (cljs.core.truth_(selector_16619)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_16618,selector_16619):cljs.core.identity).call(null,(function (){var G__16616 = f_16667;
return (factory_16689.cljs$core$IFn$_invoke$arity$1 ? factory_16689.cljs$core$IFn$_invoke$arity$1(G__16616) : factory_16689.call(null,G__16616));
})());
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16618,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16619,actual_type_16688,f_16667], null),canonical_f_16690], 0));

if(cljs.core.truth_(elem_16618.addEventListener)){
elem_16618.addEventListener(cljs.core.name(actual_type_16688),canonical_f_16690);
} else {
elem_16618.attachEvent(cljs.core.name(actual_type_16688),canonical_f_16690);
}

var G__16691 = cljs.core.next(seq__16592_16681__$1);
var G__16692 = null;
var G__16693 = (0);
var G__16694 = (0);
seq__16592_16668 = G__16691;
chunk__16594_16669 = G__16692;
count__16595_16670 = G__16693;
i__16596_16671 = G__16694;
continue;
}
} else {
}
}
break;
}

var G__16695 = cljs.core.next(seq__16591_16659__$1);
var G__16696 = null;
var G__16697 = (0);
var G__16698 = (0);
seq__16591_16620 = G__16695;
chunk__16598_16621 = G__16696;
count__16599_16622 = G__16697;
i__16600_16623 = G__16698;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__16699){
var elem_sel = cljs.core.first(arglist__16699);
var type_fs = cljs.core.rest(arglist__16699);
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
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))], 0)))].join('')));
}

var vec__16723_16746 = dommy.core.elem_and_selector(elem_sel);
var elem_16747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16723_16746,(0),null);
var selector_16748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16723_16746,(1),null);
var seq__16724_16749 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__16731_16750 = null;
var count__16732_16751 = (0);
var i__16733_16752 = (0);
while(true){
if((i__16733_16752 < count__16732_16751)){
var vec__16740_16753 = chunk__16731_16750.cljs$core$IIndexed$_nth$arity$2(null,i__16733_16752);
var orig_type_16754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16740_16753,(0),null);
var f_16755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16740_16753,(1),null);
var seq__16734_16756 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_16754,new cljs.core.PersistentArrayMap.fromArray([orig_type_16754,cljs.core.identity], true, false)));
var chunk__16736_16757 = null;
var count__16737_16758 = (0);
var i__16738_16759 = (0);
while(true){
if((i__16738_16759 < count__16737_16758)){
var vec__16741_16760 = chunk__16736_16757.cljs$core$IIndexed$_nth$arity$2(null,i__16738_16759);
var actual_type_16761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16741_16760,(0),null);
var __16762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16741_16760,(1),null);
var keys_16763 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16748,actual_type_16761,f_16755], null);
var canonical_f_16764 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_16747),keys_16763);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16747,dommy.utils.dissoc_in,cljs.core.array_seq([keys_16763], 0));

if(cljs.core.truth_(elem_16747.removeEventListener)){
elem_16747.removeEventListener(cljs.core.name(actual_type_16761),canonical_f_16764);
} else {
elem_16747.detachEvent(cljs.core.name(actual_type_16761),canonical_f_16764);
}

var G__16765 = seq__16734_16756;
var G__16766 = chunk__16736_16757;
var G__16767 = count__16737_16758;
var G__16768 = (i__16738_16759 + (1));
seq__16734_16756 = G__16765;
chunk__16736_16757 = G__16766;
count__16737_16758 = G__16767;
i__16738_16759 = G__16768;
continue;
} else {
var temp__4126__auto___16769 = cljs.core.seq(seq__16734_16756);
if(temp__4126__auto___16769){
var seq__16734_16770__$1 = temp__4126__auto___16769;
if(cljs.core.chunked_seq_QMARK_(seq__16734_16770__$1)){
var c__4390__auto___16771 = cljs.core.chunk_first(seq__16734_16770__$1);
var G__16772 = cljs.core.chunk_rest(seq__16734_16770__$1);
var G__16773 = c__4390__auto___16771;
var G__16774 = cljs.core.count(c__4390__auto___16771);
var G__16775 = (0);
seq__16734_16756 = G__16772;
chunk__16736_16757 = G__16773;
count__16737_16758 = G__16774;
i__16738_16759 = G__16775;
continue;
} else {
var vec__16742_16776 = cljs.core.first(seq__16734_16770__$1);
var actual_type_16777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16742_16776,(0),null);
var __16778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16742_16776,(1),null);
var keys_16779 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16748,actual_type_16777,f_16755], null);
var canonical_f_16780 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_16747),keys_16779);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16747,dommy.utils.dissoc_in,cljs.core.array_seq([keys_16779], 0));

if(cljs.core.truth_(elem_16747.removeEventListener)){
elem_16747.removeEventListener(cljs.core.name(actual_type_16777),canonical_f_16780);
} else {
elem_16747.detachEvent(cljs.core.name(actual_type_16777),canonical_f_16780);
}

var G__16781 = cljs.core.next(seq__16734_16770__$1);
var G__16782 = null;
var G__16783 = (0);
var G__16784 = (0);
seq__16734_16756 = G__16781;
chunk__16736_16757 = G__16782;
count__16737_16758 = G__16783;
i__16738_16759 = G__16784;
continue;
}
} else {
}
}
break;
}

var G__16785 = seq__16724_16749;
var G__16786 = chunk__16731_16750;
var G__16787 = count__16732_16751;
var G__16788 = (i__16733_16752 + (1));
seq__16724_16749 = G__16785;
chunk__16731_16750 = G__16786;
count__16732_16751 = G__16787;
i__16733_16752 = G__16788;
continue;
} else {
var temp__4126__auto___16789 = cljs.core.seq(seq__16724_16749);
if(temp__4126__auto___16789){
var seq__16724_16790__$1 = temp__4126__auto___16789;
if(cljs.core.chunked_seq_QMARK_(seq__16724_16790__$1)){
var c__4390__auto___16791 = cljs.core.chunk_first(seq__16724_16790__$1);
var G__16792 = cljs.core.chunk_rest(seq__16724_16790__$1);
var G__16793 = c__4390__auto___16791;
var G__16794 = cljs.core.count(c__4390__auto___16791);
var G__16795 = (0);
seq__16724_16749 = G__16792;
chunk__16731_16750 = G__16793;
count__16732_16751 = G__16794;
i__16733_16752 = G__16795;
continue;
} else {
var vec__16743_16796 = cljs.core.first(seq__16724_16790__$1);
var orig_type_16797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16743_16796,(0),null);
var f_16798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16743_16796,(1),null);
var seq__16725_16799 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_16797,new cljs.core.PersistentArrayMap.fromArray([orig_type_16797,cljs.core.identity], true, false)));
var chunk__16727_16800 = null;
var count__16728_16801 = (0);
var i__16729_16802 = (0);
while(true){
if((i__16729_16802 < count__16728_16801)){
var vec__16744_16803 = chunk__16727_16800.cljs$core$IIndexed$_nth$arity$2(null,i__16729_16802);
var actual_type_16804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16744_16803,(0),null);
var __16805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16744_16803,(1),null);
var keys_16806 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16748,actual_type_16804,f_16798], null);
var canonical_f_16807 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_16747),keys_16806);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16747,dommy.utils.dissoc_in,cljs.core.array_seq([keys_16806], 0));

if(cljs.core.truth_(elem_16747.removeEventListener)){
elem_16747.removeEventListener(cljs.core.name(actual_type_16804),canonical_f_16807);
} else {
elem_16747.detachEvent(cljs.core.name(actual_type_16804),canonical_f_16807);
}

var G__16808 = seq__16725_16799;
var G__16809 = chunk__16727_16800;
var G__16810 = count__16728_16801;
var G__16811 = (i__16729_16802 + (1));
seq__16725_16799 = G__16808;
chunk__16727_16800 = G__16809;
count__16728_16801 = G__16810;
i__16729_16802 = G__16811;
continue;
} else {
var temp__4126__auto___16812__$1 = cljs.core.seq(seq__16725_16799);
if(temp__4126__auto___16812__$1){
var seq__16725_16813__$1 = temp__4126__auto___16812__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16725_16813__$1)){
var c__4390__auto___16814 = cljs.core.chunk_first(seq__16725_16813__$1);
var G__16815 = cljs.core.chunk_rest(seq__16725_16813__$1);
var G__16816 = c__4390__auto___16814;
var G__16817 = cljs.core.count(c__4390__auto___16814);
var G__16818 = (0);
seq__16725_16799 = G__16815;
chunk__16727_16800 = G__16816;
count__16728_16801 = G__16817;
i__16729_16802 = G__16818;
continue;
} else {
var vec__16745_16819 = cljs.core.first(seq__16725_16813__$1);
var actual_type_16820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16745_16819,(0),null);
var __16821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16745_16819,(1),null);
var keys_16822 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16748,actual_type_16820,f_16798], null);
var canonical_f_16823 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_16747),keys_16822);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_16747,dommy.utils.dissoc_in,cljs.core.array_seq([keys_16822], 0));

if(cljs.core.truth_(elem_16747.removeEventListener)){
elem_16747.removeEventListener(cljs.core.name(actual_type_16820),canonical_f_16823);
} else {
elem_16747.detachEvent(cljs.core.name(actual_type_16820),canonical_f_16823);
}

var G__16824 = cljs.core.next(seq__16725_16813__$1);
var G__16825 = null;
var G__16826 = (0);
var G__16827 = (0);
seq__16725_16799 = G__16824;
chunk__16727_16800 = G__16825;
count__16728_16801 = G__16826;
i__16729_16802 = G__16827;
continue;
}
} else {
}
}
break;
}

var G__16828 = cljs.core.next(seq__16724_16790__$1);
var G__16829 = null;
var G__16830 = (0);
var G__16831 = (0);
seq__16724_16749 = G__16828;
chunk__16731_16750 = G__16829;
count__16732_16751 = G__16830;
i__16733_16752 = G__16831;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__16832){
var elem_sel = cljs.core.first(arglist__16832);
var type_fs = cljs.core.rest(arglist__16832);
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
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))], 0)))].join('')));
}

var vec__16844_16855 = dommy.core.elem_and_selector(elem_sel);
var elem_16856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16844_16855,(0),null);
var selector_16857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16844_16855,(1),null);
var seq__16845_16858 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__16846_16859 = null;
var count__16847_16860 = (0);
var i__16848_16861 = (0);
while(true){
if((i__16848_16861 < count__16847_16860)){
var vec__16849_16862 = chunk__16846_16859.cljs$core$IIndexed$_nth$arity$2(null,i__16848_16861);
var type_16863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16849_16862,(0),null);
var f_16864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16849_16862,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_16863,((function (seq__16845_16858,chunk__16846_16859,count__16847_16860,i__16848_16861,vec__16849_16862,type_16863,f_16864,vec__16844_16855,elem_16856,selector_16857){
return (function this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_16863,this_fn], 0));

var G__16851 = e;
return (f_16864.cljs$core$IFn$_invoke$arity$1 ? f_16864.cljs$core$IFn$_invoke$arity$1(G__16851) : f_16864.call(null,G__16851));
});})(seq__16845_16858,chunk__16846_16859,count__16847_16860,i__16848_16861,vec__16849_16862,type_16863,f_16864,vec__16844_16855,elem_16856,selector_16857))
], 0));

var G__16865 = seq__16845_16858;
var G__16866 = chunk__16846_16859;
var G__16867 = count__16847_16860;
var G__16868 = (i__16848_16861 + (1));
seq__16845_16858 = G__16865;
chunk__16846_16859 = G__16866;
count__16847_16860 = G__16867;
i__16848_16861 = G__16868;
continue;
} else {
var temp__4126__auto___16869 = cljs.core.seq(seq__16845_16858);
if(temp__4126__auto___16869){
var seq__16845_16870__$1 = temp__4126__auto___16869;
if(cljs.core.chunked_seq_QMARK_(seq__16845_16870__$1)){
var c__4390__auto___16871 = cljs.core.chunk_first(seq__16845_16870__$1);
var G__16872 = cljs.core.chunk_rest(seq__16845_16870__$1);
var G__16873 = c__4390__auto___16871;
var G__16874 = cljs.core.count(c__4390__auto___16871);
var G__16875 = (0);
seq__16845_16858 = G__16872;
chunk__16846_16859 = G__16873;
count__16847_16860 = G__16874;
i__16848_16861 = G__16875;
continue;
} else {
var vec__16852_16876 = cljs.core.first(seq__16845_16870__$1);
var type_16877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16852_16876,(0),null);
var f_16878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16852_16876,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_16877,((function (seq__16845_16858,chunk__16846_16859,count__16847_16860,i__16848_16861,vec__16852_16876,type_16877,f_16878,seq__16845_16870__$1,temp__4126__auto___16869,vec__16844_16855,elem_16856,selector_16857){
return (function this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_16877,this_fn], 0));

var G__16854 = e;
return (f_16878.cljs$core$IFn$_invoke$arity$1 ? f_16878.cljs$core$IFn$_invoke$arity$1(G__16854) : f_16878.call(null,G__16854));
});})(seq__16845_16858,chunk__16846_16859,count__16847_16860,i__16848_16861,vec__16852_16876,type_16877,f_16878,seq__16845_16870__$1,temp__4126__auto___16869,vec__16844_16855,elem_16856,selector_16857))
], 0));

var G__16879 = cljs.core.next(seq__16845_16870__$1);
var G__16880 = null;
var G__16881 = (0);
var G__16882 = (0);
seq__16845_16858 = G__16879;
chunk__16846_16859 = G__16880;
count__16847_16860 = G__16881;
i__16848_16861 = G__16882;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__16883){
var elem_sel = cljs.core.first(arglist__16883);
var type_fs = cljs.core.rest(arglist__16883);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
