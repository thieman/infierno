// Compiled by ClojureScript 0.0-2156
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
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.text = (function text(elem){var or__3403__auto__ = elem.textContent;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return elem.innerText;
}
});
dommy.core.html = (function html(elem){return elem.innerHTML;
});
dommy.core.value = (function value(elem){return elem.value;
});
dommy.core.class$ = (function class$(elem){return elem.className;
});
dommy.core.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else
{return null;
}
});
/**
* The computed style of `elem`, optionally specifying the key of
* a particular style to return
*/
dommy.core.style = (function() {
var style = null;
var style__1 = (function (elem){return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});
var style__2 = (function (elem,k){return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
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
dommy.core.px = (function px(elem,k){var pixels = dommy.core.style.call(null,elem,k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Does `elem` contain `c` in its class list
*/
dommy.core.has_class_QMARK_ = (function has_class_QMARK_(elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4090__auto__ = elem.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(c__$1);
} else
{var temp__4092__auto__ = dommy.core.class$.call(null,elem);if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
*/
dommy.core.hidden_QMARK_ = (function hidden_QMARK_(elem){return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",2685668404)) === "none");
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.core.bounding_client_rect = (function bounding_client_rect(elem){var r = elem.getBoundingClientRect();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",1014019271),r.top,new cljs.core.Keyword(null,"bottom","bottom",3925642653),r.bottom,new cljs.core.Keyword(null,"left","left",1017222009),r.left,new cljs.core.Keyword(null,"right","right",1122416014),r.right,new cljs.core.Keyword(null,"width","width",1127031096),r.width,new cljs.core.Keyword(null,"height","height",4087841945),r.height], null);
});
dommy.core.parent = (function parent(elem){return elem.parentNode;
});
dommy.core.children = (function children(elem){return elem.children;
});
/**
* Lazy seq of the ancestors of `elem`
*/
dommy.core.ancestors = (function ancestors(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
* Returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
});
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
var closest__2 = (function (elem,selector){return closest.call(null,document.body,elem,selector);
});
var closest__3 = (function (base,elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__6320_SHARP_){return !((p1__6320_SHARP_ === base));
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
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){if(cljs.core.truth_(ancestor.contains))
{return ancestor.contains(descendant);
} else
{if(cljs.core.truth_(ancestor.compareDocumentPosition))
{return ((ancestor.compareDocumentPosition(descendant) & (1 << 4)) != 0);
} else
{return null;
}
}
});
/**
* Set the textContent of `elem` to `text`, fall back to innerText
*/
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){if(!((void 0 === elem.textContent)))
{elem.textContent = text;
} else
{elem.innerText = text;
}
return elem;
});
/**
* Set the innerHTML of `elem` to `html`
*/
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){elem.innerHTML = html;
return elem;
});
/**
* Set the value of `elem` to `value`
*/
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){elem.value = value;
return elem;
});
/**
* Set the css class of `elem` to `elem`
*/
dommy.core.set_class_BANG_ = (function set_class_BANG_(elem,c){return elem.className = c;
});
/**
* Set the style of `elem` using key-value pairs:
* 
* (set-style! elem :display "block" :color "red")
* @param {...*} var_args
*/
dommy.core.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var style = elem.style;var seq__6327_6333 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__6328_6334 = null;var count__6329_6335 = 0;var i__6330_6336 = 0;while(true){
if((i__6330_6336 < count__6329_6335))
{var vec__6331_6337 = cljs.core._nth.call(null,chunk__6328_6334,i__6330_6336);var k_6338 = cljs.core.nth.call(null,vec__6331_6337,0,null);var v_6339 = cljs.core.nth.call(null,vec__6331_6337,1,null);style.setProperty(dommy.utils.as_str.call(null,k_6338),v_6339);
{
var G__6340 = seq__6327_6333;
var G__6341 = chunk__6328_6334;
var G__6342 = count__6329_6335;
var G__6343 = (i__6330_6336 + 1);
seq__6327_6333 = G__6340;
chunk__6328_6334 = G__6341;
count__6329_6335 = G__6342;
i__6330_6336 = G__6343;
continue;
}
} else
{var temp__4092__auto___6344 = cljs.core.seq.call(null,seq__6327_6333);if(temp__4092__auto___6344)
{var seq__6327_6345__$1 = temp__4092__auto___6344;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6327_6345__$1))
{var c__4151__auto___6346 = cljs.core.chunk_first.call(null,seq__6327_6345__$1);{
var G__6347 = cljs.core.chunk_rest.call(null,seq__6327_6345__$1);
var G__6348 = c__4151__auto___6346;
var G__6349 = cljs.core.count.call(null,c__4151__auto___6346);
var G__6350 = 0;
seq__6327_6333 = G__6347;
chunk__6328_6334 = G__6348;
count__6329_6335 = G__6349;
i__6330_6336 = G__6350;
continue;
}
} else
{var vec__6332_6351 = cljs.core.first.call(null,seq__6327_6345__$1);var k_6352 = cljs.core.nth.call(null,vec__6332_6351,0,null);var v_6353 = cljs.core.nth.call(null,vec__6332_6351,1,null);style.setProperty(dommy.utils.as_str.call(null,k_6352),v_6353);
{
var G__6354 = cljs.core.next.call(null,seq__6327_6345__$1);
var G__6355 = null;
var G__6356 = 0;
var G__6357 = 0;
seq__6327_6333 = G__6354;
chunk__6328_6334 = G__6355;
count__6329_6335 = G__6356;
i__6330_6336 = G__6357;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6358){
var elem = cljs.core.first(arglist__6358);
var kvs = cljs.core.rest(arglist__6358);
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
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var seq__6365_6371 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__6366_6372 = null;var count__6367_6373 = 0;var i__6368_6374 = 0;while(true){
if((i__6368_6374 < count__6367_6373))
{var vec__6369_6375 = cljs.core._nth.call(null,chunk__6366_6372,i__6368_6374);var k_6376 = cljs.core.nth.call(null,vec__6369_6375,0,null);var v_6377 = cljs.core.nth.call(null,vec__6369_6375,1,null);dommy.core.set_style_BANG_.call(null,elem,k_6376,[cljs.core.str(v_6377),cljs.core.str("px")].join(''));
{
var G__6378 = seq__6365_6371;
var G__6379 = chunk__6366_6372;
var G__6380 = count__6367_6373;
var G__6381 = (i__6368_6374 + 1);
seq__6365_6371 = G__6378;
chunk__6366_6372 = G__6379;
count__6367_6373 = G__6380;
i__6368_6374 = G__6381;
continue;
}
} else
{var temp__4092__auto___6382 = cljs.core.seq.call(null,seq__6365_6371);if(temp__4092__auto___6382)
{var seq__6365_6383__$1 = temp__4092__auto___6382;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6365_6383__$1))
{var c__4151__auto___6384 = cljs.core.chunk_first.call(null,seq__6365_6383__$1);{
var G__6385 = cljs.core.chunk_rest.call(null,seq__6365_6383__$1);
var G__6386 = c__4151__auto___6384;
var G__6387 = cljs.core.count.call(null,c__4151__auto___6384);
var G__6388 = 0;
seq__6365_6371 = G__6385;
chunk__6366_6372 = G__6386;
count__6367_6373 = G__6387;
i__6368_6374 = G__6388;
continue;
}
} else
{var vec__6370_6389 = cljs.core.first.call(null,seq__6365_6383__$1);var k_6390 = cljs.core.nth.call(null,vec__6370_6389,0,null);var v_6391 = cljs.core.nth.call(null,vec__6370_6389,1,null);dommy.core.set_style_BANG_.call(null,elem,k_6390,[cljs.core.str(v_6391),cljs.core.str("px")].join(''));
{
var G__6392 = cljs.core.next.call(null,seq__6365_6383__$1);
var G__6393 = null;
var G__6394 = 0;
var G__6395 = 0;
seq__6365_6371 = G__6392;
chunk__6366_6372 = G__6393;
count__6367_6373 = G__6394;
i__6368_6374 = G__6395;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__6396){
var elem = cljs.core.first(arglist__6396);
var kvs = cljs.core.rest(arglist__6396);
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
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,elem,k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){var k__$1 = dommy.utils.as_str.call(null,k);if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__6405 = elem;(G__6405[k__$1] = v);
return G__6405;
} else
{var G__6406 = elem;G__6406.setAttribute(k__$1,v);
return G__6406;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__6413__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var seq__6407_6414 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__6408_6415 = null;var count__6409_6416 = 0;var i__6410_6417 = 0;while(true){
if((i__6410_6417 < count__6409_6416))
{var vec__6411_6418 = cljs.core._nth.call(null,chunk__6408_6415,i__6410_6417);var k_6419__$1 = cljs.core.nth.call(null,vec__6411_6418,0,null);var v_6420__$1 = cljs.core.nth.call(null,vec__6411_6418,1,null);set_attr_BANG_.call(null,elem,k_6419__$1,v_6420__$1);
{
var G__6421 = seq__6407_6414;
var G__6422 = chunk__6408_6415;
var G__6423 = count__6409_6416;
var G__6424 = (i__6410_6417 + 1);
seq__6407_6414 = G__6421;
chunk__6408_6415 = G__6422;
count__6409_6416 = G__6423;
i__6410_6417 = G__6424;
continue;
}
} else
{var temp__4092__auto___6425 = cljs.core.seq.call(null,seq__6407_6414);if(temp__4092__auto___6425)
{var seq__6407_6426__$1 = temp__4092__auto___6425;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6407_6426__$1))
{var c__4151__auto___6427 = cljs.core.chunk_first.call(null,seq__6407_6426__$1);{
var G__6428 = cljs.core.chunk_rest.call(null,seq__6407_6426__$1);
var G__6429 = c__4151__auto___6427;
var G__6430 = cljs.core.count.call(null,c__4151__auto___6427);
var G__6431 = 0;
seq__6407_6414 = G__6428;
chunk__6408_6415 = G__6429;
count__6409_6416 = G__6430;
i__6410_6417 = G__6431;
continue;
}
} else
{var vec__6412_6432 = cljs.core.first.call(null,seq__6407_6426__$1);var k_6433__$1 = cljs.core.nth.call(null,vec__6412_6432,0,null);var v_6434__$1 = cljs.core.nth.call(null,vec__6412_6432,1,null);set_attr_BANG_.call(null,elem,k_6433__$1,v_6434__$1);
{
var G__6435 = cljs.core.next.call(null,seq__6407_6426__$1);
var G__6436 = null;
var G__6437 = 0;
var G__6438 = 0;
seq__6407_6414 = G__6435;
chunk__6408_6415 = G__6436;
count__6409_6416 = G__6437;
i__6410_6417 = G__6438;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__6413 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__6413__delegate.call(this,elem,k,v,kvs);};
G__6413.cljs$lang$maxFixedArity = 3;
G__6413.cljs$lang$applyTo = (function (arglist__6439){
var elem = cljs.core.first(arglist__6439);
arglist__6439 = cljs.core.next(arglist__6439);
var k = cljs.core.first(arglist__6439);
arglist__6439 = cljs.core.next(arglist__6439);
var v = cljs.core.first(arglist__6439);
var kvs = cljs.core.rest(arglist__6439);
return G__6413__delegate(elem,k,v,kvs);
});
G__6413.cljs$core$IFn$_invoke$arity$variadic = G__6413__delegate;
return G__6413;
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
var remove_attr_BANG___2 = (function (elem,k){var k_6448__$1 = dommy.utils.as_str.call(null,k);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["classes",null,"class",null], null), null).call(null,k_6448__$1)))
{dommy.core.set_class_BANG_.call(null,elem,"");
} else
{elem.removeAttribute(k_6448__$1);
}
return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__6449__delegate = function (elem,k,ks){var seq__6444_6450 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__6445_6451 = null;var count__6446_6452 = 0;var i__6447_6453 = 0;while(true){
if((i__6447_6453 < count__6446_6452))
{var k_6454__$1 = cljs.core._nth.call(null,chunk__6445_6451,i__6447_6453);remove_attr_BANG_.call(null,elem,k_6454__$1);
{
var G__6455 = seq__6444_6450;
var G__6456 = chunk__6445_6451;
var G__6457 = count__6446_6452;
var G__6458 = (i__6447_6453 + 1);
seq__6444_6450 = G__6455;
chunk__6445_6451 = G__6456;
count__6446_6452 = G__6457;
i__6447_6453 = G__6458;
continue;
}
} else
{var temp__4092__auto___6459 = cljs.core.seq.call(null,seq__6444_6450);if(temp__4092__auto___6459)
{var seq__6444_6460__$1 = temp__4092__auto___6459;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6444_6460__$1))
{var c__4151__auto___6461 = cljs.core.chunk_first.call(null,seq__6444_6460__$1);{
var G__6462 = cljs.core.chunk_rest.call(null,seq__6444_6460__$1);
var G__6463 = c__4151__auto___6461;
var G__6464 = cljs.core.count.call(null,c__4151__auto___6461);
var G__6465 = 0;
seq__6444_6450 = G__6462;
chunk__6445_6451 = G__6463;
count__6446_6452 = G__6464;
i__6447_6453 = G__6465;
continue;
}
} else
{var k_6466__$1 = cljs.core.first.call(null,seq__6444_6460__$1);remove_attr_BANG_.call(null,elem,k_6466__$1);
{
var G__6467 = cljs.core.next.call(null,seq__6444_6460__$1);
var G__6468 = null;
var G__6469 = 0;
var G__6470 = 0;
seq__6444_6450 = G__6467;
chunk__6445_6451 = G__6468;
count__6446_6452 = G__6469;
i__6447_6453 = G__6470;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__6449 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6449__delegate.call(this,elem,k,ks);};
G__6449.cljs$lang$maxFixedArity = 2;
G__6449.cljs$lang$applyTo = (function (arglist__6471){
var elem = cljs.core.first(arglist__6471);
arglist__6471 = cljs.core.next(arglist__6471);
var k = cljs.core.first(arglist__6471);
var ks = cljs.core.rest(arglist__6471);
return G__6449__delegate(elem,k,ks);
});
G__6449.cljs$core$IFn$_invoke$arity$variadic = G__6449__delegate;
return G__6449;
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
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){if(add_QMARK_)
{return dommy.core.set_attr_BANG_.call(null,elem,k);
} else
{return dommy.core.remove_attr_BANG_.call(null,elem,k);
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
var add_class_BANG___2 = (function (elem,classes){var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___6496 = elem.classList;if(cljs.core.truth_(temp__4090__auto___6496))
{var class_list_6497 = temp__4090__auto___6496;var seq__6484_6498 = cljs.core.seq.call(null,classes__$1);var chunk__6485_6499 = null;var count__6486_6500 = 0;var i__6487_6501 = 0;while(true){
if((i__6487_6501 < count__6486_6500))
{var c_6502 = cljs.core._nth.call(null,chunk__6485_6499,i__6487_6501);class_list_6497.add(c_6502);
{
var G__6503 = seq__6484_6498;
var G__6504 = chunk__6485_6499;
var G__6505 = count__6486_6500;
var G__6506 = (i__6487_6501 + 1);
seq__6484_6498 = G__6503;
chunk__6485_6499 = G__6504;
count__6486_6500 = G__6505;
i__6487_6501 = G__6506;
continue;
}
} else
{var temp__4092__auto___6507 = cljs.core.seq.call(null,seq__6484_6498);if(temp__4092__auto___6507)
{var seq__6484_6508__$1 = temp__4092__auto___6507;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6484_6508__$1))
{var c__4151__auto___6509 = cljs.core.chunk_first.call(null,seq__6484_6508__$1);{
var G__6510 = cljs.core.chunk_rest.call(null,seq__6484_6508__$1);
var G__6511 = c__4151__auto___6509;
var G__6512 = cljs.core.count.call(null,c__4151__auto___6509);
var G__6513 = 0;
seq__6484_6498 = G__6510;
chunk__6485_6499 = G__6511;
count__6486_6500 = G__6512;
i__6487_6501 = G__6513;
continue;
}
} else
{var c_6514 = cljs.core.first.call(null,seq__6484_6508__$1);class_list_6497.add(c_6514);
{
var G__6515 = cljs.core.next.call(null,seq__6484_6508__$1);
var G__6516 = null;
var G__6517 = 0;
var G__6518 = 0;
seq__6484_6498 = G__6515;
chunk__6485_6499 = G__6516;
count__6486_6500 = G__6517;
i__6487_6501 = G__6518;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__6488_6519 = cljs.core.seq.call(null,classes__$1);var chunk__6489_6520 = null;var count__6490_6521 = 0;var i__6491_6522 = 0;while(true){
if((i__6491_6522 < count__6490_6521))
{var c_6523 = cljs.core._nth.call(null,chunk__6489_6520,i__6491_6522);var class_name_6524 = dommy.core.class$.call(null,elem);if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_6524,c_6523)))
{} else
{dommy.core.set_class_BANG_.call(null,elem,(((class_name_6524 === ""))?c_6523:[cljs.core.str(class_name_6524),cljs.core.str(" "),cljs.core.str(c_6523)].join('')));
}
{
var G__6525 = seq__6488_6519;
var G__6526 = chunk__6489_6520;
var G__6527 = count__6490_6521;
var G__6528 = (i__6491_6522 + 1);
seq__6488_6519 = G__6525;
chunk__6489_6520 = G__6526;
count__6490_6521 = G__6527;
i__6491_6522 = G__6528;
continue;
}
} else
{var temp__4092__auto___6529 = cljs.core.seq.call(null,seq__6488_6519);if(temp__4092__auto___6529)
{var seq__6488_6530__$1 = temp__4092__auto___6529;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6488_6530__$1))
{var c__4151__auto___6531 = cljs.core.chunk_first.call(null,seq__6488_6530__$1);{
var G__6532 = cljs.core.chunk_rest.call(null,seq__6488_6530__$1);
var G__6533 = c__4151__auto___6531;
var G__6534 = cljs.core.count.call(null,c__4151__auto___6531);
var G__6535 = 0;
seq__6488_6519 = G__6532;
chunk__6489_6520 = G__6533;
count__6490_6521 = G__6534;
i__6491_6522 = G__6535;
continue;
}
} else
{var c_6536 = cljs.core.first.call(null,seq__6488_6530__$1);var class_name_6537 = dommy.core.class$.call(null,elem);if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_6537,c_6536)))
{} else
{dommy.core.set_class_BANG_.call(null,elem,(((class_name_6537 === ""))?c_6536:[cljs.core.str(class_name_6537),cljs.core.str(" "),cljs.core.str(c_6536)].join('')));
}
{
var G__6538 = cljs.core.next.call(null,seq__6488_6530__$1);
var G__6539 = null;
var G__6540 = 0;
var G__6541 = 0;
seq__6488_6519 = G__6538;
chunk__6489_6520 = G__6539;
count__6490_6521 = G__6540;
i__6491_6522 = G__6541;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem;
});
var add_class_BANG___3 = (function() { 
var G__6542__delegate = function (elem,classes,more_classes){var seq__6492_6543 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__6493_6544 = null;var count__6494_6545 = 0;var i__6495_6546 = 0;while(true){
if((i__6495_6546 < count__6494_6545))
{var c_6547 = cljs.core._nth.call(null,chunk__6493_6544,i__6495_6546);add_class_BANG_.call(null,elem,c_6547);
{
var G__6548 = seq__6492_6543;
var G__6549 = chunk__6493_6544;
var G__6550 = count__6494_6545;
var G__6551 = (i__6495_6546 + 1);
seq__6492_6543 = G__6548;
chunk__6493_6544 = G__6549;
count__6494_6545 = G__6550;
i__6495_6546 = G__6551;
continue;
}
} else
{var temp__4092__auto___6552 = cljs.core.seq.call(null,seq__6492_6543);if(temp__4092__auto___6552)
{var seq__6492_6553__$1 = temp__4092__auto___6552;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6492_6553__$1))
{var c__4151__auto___6554 = cljs.core.chunk_first.call(null,seq__6492_6553__$1);{
var G__6555 = cljs.core.chunk_rest.call(null,seq__6492_6553__$1);
var G__6556 = c__4151__auto___6554;
var G__6557 = cljs.core.count.call(null,c__4151__auto___6554);
var G__6558 = 0;
seq__6492_6543 = G__6555;
chunk__6493_6544 = G__6556;
count__6494_6545 = G__6557;
i__6495_6546 = G__6558;
continue;
}
} else
{var c_6559 = cljs.core.first.call(null,seq__6492_6553__$1);add_class_BANG_.call(null,elem,c_6559);
{
var G__6560 = cljs.core.next.call(null,seq__6492_6553__$1);
var G__6561 = null;
var G__6562 = 0;
var G__6563 = 0;
seq__6492_6543 = G__6560;
chunk__6493_6544 = G__6561;
count__6494_6545 = G__6562;
i__6495_6546 = G__6563;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__6542 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6542__delegate.call(this,elem,classes,more_classes);};
G__6542.cljs$lang$maxFixedArity = 2;
G__6542.cljs$lang$applyTo = (function (arglist__6564){
var elem = cljs.core.first(arglist__6564);
arglist__6564 = cljs.core.next(arglist__6564);
var classes = cljs.core.first(arglist__6564);
var more_classes = cljs.core.rest(arglist__6564);
return G__6542__delegate(elem,classes,more_classes);
});
G__6542.cljs$core$IFn$_invoke$arity$variadic = G__6542__delegate;
return G__6542;
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
var remove_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4090__auto___6573 = elem.classList;if(cljs.core.truth_(temp__4090__auto___6573))
{var class_list_6574 = temp__4090__auto___6573;class_list_6574.remove(c__$1);
} else
{var class_name_6575 = dommy.core.class$.call(null,elem);var new_class_name_6576 = dommy.utils.remove_class_str.call(null,class_name_6575,c__$1);if((class_name_6575 === new_class_name_6576))
{} else
{dommy.core.set_class_BANG_.call(null,elem,new_class_name_6576);
}
}
return elem;
});
var remove_class_BANG___3 = (function() { 
var G__6577__delegate = function (elem,class$,classes){var seq__6569 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__6570 = null;var count__6571 = 0;var i__6572 = 0;while(true){
if((i__6572 < count__6571))
{var c = cljs.core._nth.call(null,chunk__6570,i__6572);remove_class_BANG_.call(null,elem,c);
{
var G__6578 = seq__6569;
var G__6579 = chunk__6570;
var G__6580 = count__6571;
var G__6581 = (i__6572 + 1);
seq__6569 = G__6578;
chunk__6570 = G__6579;
count__6571 = G__6580;
i__6572 = G__6581;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6569);if(temp__4092__auto__)
{var seq__6569__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6569__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__6569__$1);{
var G__6582 = cljs.core.chunk_rest.call(null,seq__6569__$1);
var G__6583 = c__4151__auto__;
var G__6584 = cljs.core.count.call(null,c__4151__auto__);
var G__6585 = 0;
seq__6569 = G__6582;
chunk__6570 = G__6583;
count__6571 = G__6584;
i__6572 = G__6585;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__6569__$1);remove_class_BANG_.call(null,elem,c);
{
var G__6586 = cljs.core.next.call(null,seq__6569__$1);
var G__6587 = null;
var G__6588 = 0;
var G__6589 = 0;
seq__6569 = G__6586;
chunk__6570 = G__6587;
count__6571 = G__6588;
i__6572 = G__6589;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__6577 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6577__delegate.call(this,elem,class$,classes);};
G__6577.cljs$lang$maxFixedArity = 2;
G__6577.cljs$lang$applyTo = (function (arglist__6590){
var elem = cljs.core.first(arglist__6590);
arglist__6590 = cljs.core.next(arglist__6590);
var class$ = cljs.core.first(arglist__6590);
var classes = cljs.core.rest(arglist__6590);
return G__6577__delegate(elem,class$,classes);
});
G__6577.cljs$core$IFn$_invoke$arity$variadic = G__6577__delegate;
return G__6577;
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
var toggle_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4090__auto___6591 = elem.classList;if(cljs.core.truth_(temp__4090__auto___6591))
{var class_list_6592 = temp__4090__auto___6591;class_list_6592.toggle(c__$1);
} else
{toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}
return elem;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){if(add_QMARK_)
{dommy.core.add_class_BANG_.call(null,elem,class$);
} else
{dommy.core.remove_class_BANG_.call(null,elem,class$);
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
var toggle_BANG___1 = (function (elem){return toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});
var toggle_BANG___2 = (function (elem,show_QMARK_){return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",2685668404),((show_QMARK_)?"":"none"));
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
dommy.core.hide_BANG_ = (function hide_BANG_(elem){return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function show_BANG_(elem){return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));if((window.innerHeight < (top + elem.offsetHeight)))
{return elem.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
dommy.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (tag){return document.createElement(dommy.utils.as_str.call(null,tag));
});
var create_element__2 = (function (tag_ns,tag){return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
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
dommy.core.create_text_node = (function create_text_node(text){return document.createTextNode(text);
});
/**
* Clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
* Append `child` to `parent`
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__6598 = parent;G__6598.appendChild(child);
return G__6598;
});
var append_BANG___3 = (function() { 
var G__6603__delegate = function (parent,child,more_children){var seq__6599_6604 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6600_6605 = null;var count__6601_6606 = 0;var i__6602_6607 = 0;while(true){
if((i__6602_6607 < count__6601_6606))
{var c_6608 = cljs.core._nth.call(null,chunk__6600_6605,i__6602_6607);append_BANG_.call(null,parent,c_6608);
{
var G__6609 = seq__6599_6604;
var G__6610 = chunk__6600_6605;
var G__6611 = count__6601_6606;
var G__6612 = (i__6602_6607 + 1);
seq__6599_6604 = G__6609;
chunk__6600_6605 = G__6610;
count__6601_6606 = G__6611;
i__6602_6607 = G__6612;
continue;
}
} else
{var temp__4092__auto___6613 = cljs.core.seq.call(null,seq__6599_6604);if(temp__4092__auto___6613)
{var seq__6599_6614__$1 = temp__4092__auto___6613;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6599_6614__$1))
{var c__4151__auto___6615 = cljs.core.chunk_first.call(null,seq__6599_6614__$1);{
var G__6616 = cljs.core.chunk_rest.call(null,seq__6599_6614__$1);
var G__6617 = c__4151__auto___6615;
var G__6618 = cljs.core.count.call(null,c__4151__auto___6615);
var G__6619 = 0;
seq__6599_6604 = G__6616;
chunk__6600_6605 = G__6617;
count__6601_6606 = G__6618;
i__6602_6607 = G__6619;
continue;
}
} else
{var c_6620 = cljs.core.first.call(null,seq__6599_6614__$1);append_BANG_.call(null,parent,c_6620);
{
var G__6621 = cljs.core.next.call(null,seq__6599_6614__$1);
var G__6622 = null;
var G__6623 = 0;
var G__6624 = 0;
seq__6599_6604 = G__6621;
chunk__6600_6605 = G__6622;
count__6601_6606 = G__6623;
i__6602_6607 = G__6624;
continue;
}
}
} else
{}
}
break;
}
return parent;
};
var G__6603 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6603__delegate.call(this,parent,child,more_children);};
G__6603.cljs$lang$maxFixedArity = 2;
G__6603.cljs$lang$applyTo = (function (arglist__6625){
var parent = cljs.core.first(arglist__6625);
arglist__6625 = cljs.core.next(arglist__6625);
var child = cljs.core.first(arglist__6625);
var more_children = cljs.core.rest(arglist__6625);
return G__6603__delegate(parent,child,more_children);
});
G__6603.cljs$core$IFn$_invoke$arity$variadic = G__6603__delegate;
return G__6603;
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
var prepend_BANG___2 = (function (parent,child){var G__6631 = parent;G__6631.insertBefore(child,parent.firstChild);
return G__6631;
});
var prepend_BANG___3 = (function() { 
var G__6636__delegate = function (parent,child,more_children){var seq__6632_6637 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6633_6638 = null;var count__6634_6639 = 0;var i__6635_6640 = 0;while(true){
if((i__6635_6640 < count__6634_6639))
{var c_6641 = cljs.core._nth.call(null,chunk__6633_6638,i__6635_6640);prepend_BANG_.call(null,parent,c_6641);
{
var G__6642 = seq__6632_6637;
var G__6643 = chunk__6633_6638;
var G__6644 = count__6634_6639;
var G__6645 = (i__6635_6640 + 1);
seq__6632_6637 = G__6642;
chunk__6633_6638 = G__6643;
count__6634_6639 = G__6644;
i__6635_6640 = G__6645;
continue;
}
} else
{var temp__4092__auto___6646 = cljs.core.seq.call(null,seq__6632_6637);if(temp__4092__auto___6646)
{var seq__6632_6647__$1 = temp__4092__auto___6646;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6632_6647__$1))
{var c__4151__auto___6648 = cljs.core.chunk_first.call(null,seq__6632_6647__$1);{
var G__6649 = cljs.core.chunk_rest.call(null,seq__6632_6647__$1);
var G__6650 = c__4151__auto___6648;
var G__6651 = cljs.core.count.call(null,c__4151__auto___6648);
var G__6652 = 0;
seq__6632_6637 = G__6649;
chunk__6633_6638 = G__6650;
count__6634_6639 = G__6651;
i__6635_6640 = G__6652;
continue;
}
} else
{var c_6653 = cljs.core.first.call(null,seq__6632_6647__$1);prepend_BANG_.call(null,parent,c_6653);
{
var G__6654 = cljs.core.next.call(null,seq__6632_6647__$1);
var G__6655 = null;
var G__6656 = 0;
var G__6657 = 0;
seq__6632_6637 = G__6654;
chunk__6633_6638 = G__6655;
count__6634_6639 = G__6656;
i__6635_6640 = G__6657;
continue;
}
}
} else
{}
}
break;
}
return parent;
};
var G__6636 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6636__delegate.call(this,parent,child,more_children);};
G__6636.cljs$lang$maxFixedArity = 2;
G__6636.cljs$lang$applyTo = (function (arglist__6658){
var parent = cljs.core.first(arglist__6658);
arglist__6658 = cljs.core.next(arglist__6658);
var child = cljs.core.first(arglist__6658);
var more_children = cljs.core.rest(arglist__6658);
return G__6636__delegate(parent,child,more_children);
});
G__6636.cljs$core$IFn$_invoke$arity$variadic = G__6636__delegate;
return G__6636;
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
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var p = dommy.core.parent.call(null,other);if(cljs.core.truth_(p))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",-1640531415,null)))].join('')));
}
p.insertBefore(elem,other);
return elem;
});
/**
* Insert `elem` after `other`, `other` must have a parent
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var temp__4090__auto___6659 = other.nextSibling;if(cljs.core.truth_(temp__4090__auto___6659))
{var next_6660 = temp__4090__auto___6659;dommy.core.insert_before_BANG_.call(null,elem,next_6660);
} else
{dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}
return elem;
});
/**
* Replace `elem` with `new`, return `new`
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var p = dommy.core.parent.call(null,elem);if(cljs.core.truth_(p))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",-1640531415,null)))].join('')));
}
p.replaceChild(new$,elem);
return new$;
});
/**
* Replace children of `elem` with `child`
*/
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(p,child){return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
* Remove `elem` from `parent`, return `parent`
*/
dommy.core.remove_BANG_ = (function() {
var remove_BANG_ = null;
var remove_BANG___1 = (function (elem){var p = dommy.core.parent.call(null,elem);if(cljs.core.truth_(p))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",-1640531415,null)))].join('')));
}
return remove_BANG_.call(null,p,elem);
});
var remove_BANG___2 = (function (p,elem){var G__6662 = p;G__6662.removeChild(elem);
return G__6662;
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6663){var vec__6664 = p__6663;var special_mouse_event = cljs.core.nth.call(null,vec__6664,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__6664,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3403__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3391__auto__ = related_target;if(cljs.core.truth_(and__3391__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3391__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,elem,event.target,selector);if(cljs.core.truth_((function (){var and__3391__auto__ = selected_target;if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__3391__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `elem`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3403__auto__ = elem.dommyEventListeners;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = elem;return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__6665){
var elem = cljs.core.first(arglist__6665);
arglist__6665 = cljs.core.next(arglist__6665);
var f = cljs.core.first(arglist__6665);
var args = cljs.core.rest(arglist__6665);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
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
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__6689_6712 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6713 = cljs.core.nth.call(null,vec__6689_6712,0,null);var selector_6714 = cljs.core.nth.call(null,vec__6689_6712,1,null);var seq__6690_6715 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__6697_6716 = null;var count__6698_6717 = 0;var i__6699_6718 = 0;while(true){
if((i__6699_6718 < count__6698_6717))
{var vec__6706_6719 = cljs.core._nth.call(null,chunk__6697_6716,i__6699_6718);var orig_type_6720 = cljs.core.nth.call(null,vec__6706_6719,0,null);var f_6721 = cljs.core.nth.call(null,vec__6706_6719,1,null);var seq__6700_6722 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6720,new cljs.core.PersistentArrayMap.fromArray([orig_type_6720,cljs.core.identity], true, false)));var chunk__6702_6723 = null;var count__6703_6724 = 0;var i__6704_6725 = 0;while(true){
if((i__6704_6725 < count__6703_6724))
{var vec__6707_6726 = cljs.core._nth.call(null,chunk__6702_6723,i__6704_6725);var actual_type_6727 = cljs.core.nth.call(null,vec__6707_6726,0,null);var factory_6728 = cljs.core.nth.call(null,vec__6707_6726,1,null);var canonical_f_6729 = (cljs.core.truth_(selector_6714)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6713,selector_6714):cljs.core.identity).call(null,factory_6728.call(null,f_6721));dommy.core.update_event_listeners_BANG_.call(null,elem_6713,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6714,actual_type_6727,f_6721], null),canonical_f_6729);
if(cljs.core.truth_(elem_6713.addEventListener))
{elem_6713.addEventListener(cljs.core.name.call(null,actual_type_6727),canonical_f_6729);
} else
{elem_6713.attachEvent(cljs.core.name.call(null,actual_type_6727),canonical_f_6729);
}
{
var G__6730 = seq__6700_6722;
var G__6731 = chunk__6702_6723;
var G__6732 = count__6703_6724;
var G__6733 = (i__6704_6725 + 1);
seq__6700_6722 = G__6730;
chunk__6702_6723 = G__6731;
count__6703_6724 = G__6732;
i__6704_6725 = G__6733;
continue;
}
} else
{var temp__4092__auto___6734 = cljs.core.seq.call(null,seq__6700_6722);if(temp__4092__auto___6734)
{var seq__6700_6735__$1 = temp__4092__auto___6734;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6700_6735__$1))
{var c__4151__auto___6736 = cljs.core.chunk_first.call(null,seq__6700_6735__$1);{
var G__6737 = cljs.core.chunk_rest.call(null,seq__6700_6735__$1);
var G__6738 = c__4151__auto___6736;
var G__6739 = cljs.core.count.call(null,c__4151__auto___6736);
var G__6740 = 0;
seq__6700_6722 = G__6737;
chunk__6702_6723 = G__6738;
count__6703_6724 = G__6739;
i__6704_6725 = G__6740;
continue;
}
} else
{var vec__6708_6741 = cljs.core.first.call(null,seq__6700_6735__$1);var actual_type_6742 = cljs.core.nth.call(null,vec__6708_6741,0,null);var factory_6743 = cljs.core.nth.call(null,vec__6708_6741,1,null);var canonical_f_6744 = (cljs.core.truth_(selector_6714)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6713,selector_6714):cljs.core.identity).call(null,factory_6743.call(null,f_6721));dommy.core.update_event_listeners_BANG_.call(null,elem_6713,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6714,actual_type_6742,f_6721], null),canonical_f_6744);
if(cljs.core.truth_(elem_6713.addEventListener))
{elem_6713.addEventListener(cljs.core.name.call(null,actual_type_6742),canonical_f_6744);
} else
{elem_6713.attachEvent(cljs.core.name.call(null,actual_type_6742),canonical_f_6744);
}
{
var G__6745 = cljs.core.next.call(null,seq__6700_6735__$1);
var G__6746 = null;
var G__6747 = 0;
var G__6748 = 0;
seq__6700_6722 = G__6745;
chunk__6702_6723 = G__6746;
count__6703_6724 = G__6747;
i__6704_6725 = G__6748;
continue;
}
}
} else
{}
}
break;
}
{
var G__6749 = seq__6690_6715;
var G__6750 = chunk__6697_6716;
var G__6751 = count__6698_6717;
var G__6752 = (i__6699_6718 + 1);
seq__6690_6715 = G__6749;
chunk__6697_6716 = G__6750;
count__6698_6717 = G__6751;
i__6699_6718 = G__6752;
continue;
}
} else
{var temp__4092__auto___6753 = cljs.core.seq.call(null,seq__6690_6715);if(temp__4092__auto___6753)
{var seq__6690_6754__$1 = temp__4092__auto___6753;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6690_6754__$1))
{var c__4151__auto___6755 = cljs.core.chunk_first.call(null,seq__6690_6754__$1);{
var G__6756 = cljs.core.chunk_rest.call(null,seq__6690_6754__$1);
var G__6757 = c__4151__auto___6755;
var G__6758 = cljs.core.count.call(null,c__4151__auto___6755);
var G__6759 = 0;
seq__6690_6715 = G__6756;
chunk__6697_6716 = G__6757;
count__6698_6717 = G__6758;
i__6699_6718 = G__6759;
continue;
}
} else
{var vec__6709_6760 = cljs.core.first.call(null,seq__6690_6754__$1);var orig_type_6761 = cljs.core.nth.call(null,vec__6709_6760,0,null);var f_6762 = cljs.core.nth.call(null,vec__6709_6760,1,null);var seq__6691_6763 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6761,new cljs.core.PersistentArrayMap.fromArray([orig_type_6761,cljs.core.identity], true, false)));var chunk__6693_6764 = null;var count__6694_6765 = 0;var i__6695_6766 = 0;while(true){
if((i__6695_6766 < count__6694_6765))
{var vec__6710_6767 = cljs.core._nth.call(null,chunk__6693_6764,i__6695_6766);var actual_type_6768 = cljs.core.nth.call(null,vec__6710_6767,0,null);var factory_6769 = cljs.core.nth.call(null,vec__6710_6767,1,null);var canonical_f_6770 = (cljs.core.truth_(selector_6714)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6713,selector_6714):cljs.core.identity).call(null,factory_6769.call(null,f_6762));dommy.core.update_event_listeners_BANG_.call(null,elem_6713,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6714,actual_type_6768,f_6762], null),canonical_f_6770);
if(cljs.core.truth_(elem_6713.addEventListener))
{elem_6713.addEventListener(cljs.core.name.call(null,actual_type_6768),canonical_f_6770);
} else
{elem_6713.attachEvent(cljs.core.name.call(null,actual_type_6768),canonical_f_6770);
}
{
var G__6771 = seq__6691_6763;
var G__6772 = chunk__6693_6764;
var G__6773 = count__6694_6765;
var G__6774 = (i__6695_6766 + 1);
seq__6691_6763 = G__6771;
chunk__6693_6764 = G__6772;
count__6694_6765 = G__6773;
i__6695_6766 = G__6774;
continue;
}
} else
{var temp__4092__auto___6775__$1 = cljs.core.seq.call(null,seq__6691_6763);if(temp__4092__auto___6775__$1)
{var seq__6691_6776__$1 = temp__4092__auto___6775__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6691_6776__$1))
{var c__4151__auto___6777 = cljs.core.chunk_first.call(null,seq__6691_6776__$1);{
var G__6778 = cljs.core.chunk_rest.call(null,seq__6691_6776__$1);
var G__6779 = c__4151__auto___6777;
var G__6780 = cljs.core.count.call(null,c__4151__auto___6777);
var G__6781 = 0;
seq__6691_6763 = G__6778;
chunk__6693_6764 = G__6779;
count__6694_6765 = G__6780;
i__6695_6766 = G__6781;
continue;
}
} else
{var vec__6711_6782 = cljs.core.first.call(null,seq__6691_6776__$1);var actual_type_6783 = cljs.core.nth.call(null,vec__6711_6782,0,null);var factory_6784 = cljs.core.nth.call(null,vec__6711_6782,1,null);var canonical_f_6785 = (cljs.core.truth_(selector_6714)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6713,selector_6714):cljs.core.identity).call(null,factory_6784.call(null,f_6762));dommy.core.update_event_listeners_BANG_.call(null,elem_6713,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6714,actual_type_6783,f_6762], null),canonical_f_6785);
if(cljs.core.truth_(elem_6713.addEventListener))
{elem_6713.addEventListener(cljs.core.name.call(null,actual_type_6783),canonical_f_6785);
} else
{elem_6713.attachEvent(cljs.core.name.call(null,actual_type_6783),canonical_f_6785);
}
{
var G__6786 = cljs.core.next.call(null,seq__6691_6776__$1);
var G__6787 = null;
var G__6788 = 0;
var G__6789 = 0;
seq__6691_6763 = G__6786;
chunk__6693_6764 = G__6787;
count__6694_6765 = G__6788;
i__6695_6766 = G__6789;
continue;
}
}
} else
{}
}
break;
}
{
var G__6790 = cljs.core.next.call(null,seq__6690_6754__$1);
var G__6791 = null;
var G__6792 = 0;
var G__6793 = 0;
seq__6690_6715 = G__6790;
chunk__6697_6716 = G__6791;
count__6698_6717 = G__6792;
i__6699_6718 = G__6793;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__6794){
var elem_sel = cljs.core.first(arglist__6794);
var type_fs = cljs.core.rest(arglist__6794);
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
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__6818_6841 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6842 = cljs.core.nth.call(null,vec__6818_6841,0,null);var selector_6843 = cljs.core.nth.call(null,vec__6818_6841,1,null);var seq__6819_6844 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__6826_6845 = null;var count__6827_6846 = 0;var i__6828_6847 = 0;while(true){
if((i__6828_6847 < count__6827_6846))
{var vec__6835_6848 = cljs.core._nth.call(null,chunk__6826_6845,i__6828_6847);var orig_type_6849 = cljs.core.nth.call(null,vec__6835_6848,0,null);var f_6850 = cljs.core.nth.call(null,vec__6835_6848,1,null);var seq__6829_6851 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6849,new cljs.core.PersistentArrayMap.fromArray([orig_type_6849,cljs.core.identity], true, false)));var chunk__6831_6852 = null;var count__6832_6853 = 0;var i__6833_6854 = 0;while(true){
if((i__6833_6854 < count__6832_6853))
{var vec__6836_6855 = cljs.core._nth.call(null,chunk__6831_6852,i__6833_6854);var actual_type_6856 = cljs.core.nth.call(null,vec__6836_6855,0,null);var __6857 = cljs.core.nth.call(null,vec__6836_6855,1,null);var keys_6858 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6843,actual_type_6856,f_6850], null);var canonical_f_6859 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6842),keys_6858);dommy.core.update_event_listeners_BANG_.call(null,elem_6842,dommy.utils.dissoc_in,keys_6858);
if(cljs.core.truth_(elem_6842.removeEventListener))
{elem_6842.removeEventListener(cljs.core.name.call(null,actual_type_6856),canonical_f_6859);
} else
{elem_6842.detachEvent(cljs.core.name.call(null,actual_type_6856),canonical_f_6859);
}
{
var G__6860 = seq__6829_6851;
var G__6861 = chunk__6831_6852;
var G__6862 = count__6832_6853;
var G__6863 = (i__6833_6854 + 1);
seq__6829_6851 = G__6860;
chunk__6831_6852 = G__6861;
count__6832_6853 = G__6862;
i__6833_6854 = G__6863;
continue;
}
} else
{var temp__4092__auto___6864 = cljs.core.seq.call(null,seq__6829_6851);if(temp__4092__auto___6864)
{var seq__6829_6865__$1 = temp__4092__auto___6864;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6829_6865__$1))
{var c__4151__auto___6866 = cljs.core.chunk_first.call(null,seq__6829_6865__$1);{
var G__6867 = cljs.core.chunk_rest.call(null,seq__6829_6865__$1);
var G__6868 = c__4151__auto___6866;
var G__6869 = cljs.core.count.call(null,c__4151__auto___6866);
var G__6870 = 0;
seq__6829_6851 = G__6867;
chunk__6831_6852 = G__6868;
count__6832_6853 = G__6869;
i__6833_6854 = G__6870;
continue;
}
} else
{var vec__6837_6871 = cljs.core.first.call(null,seq__6829_6865__$1);var actual_type_6872 = cljs.core.nth.call(null,vec__6837_6871,0,null);var __6873 = cljs.core.nth.call(null,vec__6837_6871,1,null);var keys_6874 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6843,actual_type_6872,f_6850], null);var canonical_f_6875 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6842),keys_6874);dommy.core.update_event_listeners_BANG_.call(null,elem_6842,dommy.utils.dissoc_in,keys_6874);
if(cljs.core.truth_(elem_6842.removeEventListener))
{elem_6842.removeEventListener(cljs.core.name.call(null,actual_type_6872),canonical_f_6875);
} else
{elem_6842.detachEvent(cljs.core.name.call(null,actual_type_6872),canonical_f_6875);
}
{
var G__6876 = cljs.core.next.call(null,seq__6829_6865__$1);
var G__6877 = null;
var G__6878 = 0;
var G__6879 = 0;
seq__6829_6851 = G__6876;
chunk__6831_6852 = G__6877;
count__6832_6853 = G__6878;
i__6833_6854 = G__6879;
continue;
}
}
} else
{}
}
break;
}
{
var G__6880 = seq__6819_6844;
var G__6881 = chunk__6826_6845;
var G__6882 = count__6827_6846;
var G__6883 = (i__6828_6847 + 1);
seq__6819_6844 = G__6880;
chunk__6826_6845 = G__6881;
count__6827_6846 = G__6882;
i__6828_6847 = G__6883;
continue;
}
} else
{var temp__4092__auto___6884 = cljs.core.seq.call(null,seq__6819_6844);if(temp__4092__auto___6884)
{var seq__6819_6885__$1 = temp__4092__auto___6884;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6819_6885__$1))
{var c__4151__auto___6886 = cljs.core.chunk_first.call(null,seq__6819_6885__$1);{
var G__6887 = cljs.core.chunk_rest.call(null,seq__6819_6885__$1);
var G__6888 = c__4151__auto___6886;
var G__6889 = cljs.core.count.call(null,c__4151__auto___6886);
var G__6890 = 0;
seq__6819_6844 = G__6887;
chunk__6826_6845 = G__6888;
count__6827_6846 = G__6889;
i__6828_6847 = G__6890;
continue;
}
} else
{var vec__6838_6891 = cljs.core.first.call(null,seq__6819_6885__$1);var orig_type_6892 = cljs.core.nth.call(null,vec__6838_6891,0,null);var f_6893 = cljs.core.nth.call(null,vec__6838_6891,1,null);var seq__6820_6894 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6892,new cljs.core.PersistentArrayMap.fromArray([orig_type_6892,cljs.core.identity], true, false)));var chunk__6822_6895 = null;var count__6823_6896 = 0;var i__6824_6897 = 0;while(true){
if((i__6824_6897 < count__6823_6896))
{var vec__6839_6898 = cljs.core._nth.call(null,chunk__6822_6895,i__6824_6897);var actual_type_6899 = cljs.core.nth.call(null,vec__6839_6898,0,null);var __6900 = cljs.core.nth.call(null,vec__6839_6898,1,null);var keys_6901 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6843,actual_type_6899,f_6893], null);var canonical_f_6902 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6842),keys_6901);dommy.core.update_event_listeners_BANG_.call(null,elem_6842,dommy.utils.dissoc_in,keys_6901);
if(cljs.core.truth_(elem_6842.removeEventListener))
{elem_6842.removeEventListener(cljs.core.name.call(null,actual_type_6899),canonical_f_6902);
} else
{elem_6842.detachEvent(cljs.core.name.call(null,actual_type_6899),canonical_f_6902);
}
{
var G__6903 = seq__6820_6894;
var G__6904 = chunk__6822_6895;
var G__6905 = count__6823_6896;
var G__6906 = (i__6824_6897 + 1);
seq__6820_6894 = G__6903;
chunk__6822_6895 = G__6904;
count__6823_6896 = G__6905;
i__6824_6897 = G__6906;
continue;
}
} else
{var temp__4092__auto___6907__$1 = cljs.core.seq.call(null,seq__6820_6894);if(temp__4092__auto___6907__$1)
{var seq__6820_6908__$1 = temp__4092__auto___6907__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6820_6908__$1))
{var c__4151__auto___6909 = cljs.core.chunk_first.call(null,seq__6820_6908__$1);{
var G__6910 = cljs.core.chunk_rest.call(null,seq__6820_6908__$1);
var G__6911 = c__4151__auto___6909;
var G__6912 = cljs.core.count.call(null,c__4151__auto___6909);
var G__6913 = 0;
seq__6820_6894 = G__6910;
chunk__6822_6895 = G__6911;
count__6823_6896 = G__6912;
i__6824_6897 = G__6913;
continue;
}
} else
{var vec__6840_6914 = cljs.core.first.call(null,seq__6820_6908__$1);var actual_type_6915 = cljs.core.nth.call(null,vec__6840_6914,0,null);var __6916 = cljs.core.nth.call(null,vec__6840_6914,1,null);var keys_6917 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6843,actual_type_6915,f_6893], null);var canonical_f_6918 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6842),keys_6917);dommy.core.update_event_listeners_BANG_.call(null,elem_6842,dommy.utils.dissoc_in,keys_6917);
if(cljs.core.truth_(elem_6842.removeEventListener))
{elem_6842.removeEventListener(cljs.core.name.call(null,actual_type_6915),canonical_f_6918);
} else
{elem_6842.detachEvent(cljs.core.name.call(null,actual_type_6915),canonical_f_6918);
}
{
var G__6919 = cljs.core.next.call(null,seq__6820_6908__$1);
var G__6920 = null;
var G__6921 = 0;
var G__6922 = 0;
seq__6820_6894 = G__6919;
chunk__6822_6895 = G__6920;
count__6823_6896 = G__6921;
i__6824_6897 = G__6922;
continue;
}
}
} else
{}
}
break;
}
{
var G__6923 = cljs.core.next.call(null,seq__6819_6885__$1);
var G__6924 = null;
var G__6925 = 0;
var G__6926 = 0;
seq__6819_6844 = G__6923;
chunk__6826_6845 = G__6924;
count__6827_6846 = G__6925;
i__6828_6847 = G__6926;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__6927){
var elem_sel = cljs.core.first(arglist__6927);
var type_fs = cljs.core.rest(arglist__6927);
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
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__6935_6942 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6943 = cljs.core.nth.call(null,vec__6935_6942,0,null);var selector_6944 = cljs.core.nth.call(null,vec__6935_6942,1,null);var seq__6936_6945 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__6937_6946 = null;var count__6938_6947 = 0;var i__6939_6948 = 0;while(true){
if((i__6939_6948 < count__6938_6947))
{var vec__6940_6949 = cljs.core._nth.call(null,chunk__6937_6946,i__6939_6948);var type_6950 = cljs.core.nth.call(null,vec__6940_6949,0,null);var f_6951 = cljs.core.nth.call(null,vec__6940_6949,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_6950,((function (seq__6936_6945,chunk__6937_6946,count__6938_6947,i__6939_6948,vec__6940_6949,type_6950,f_6951){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_6950,this_fn);
return f_6951.call(null,e);
});})(seq__6936_6945,chunk__6937_6946,count__6938_6947,i__6939_6948,vec__6940_6949,type_6950,f_6951))
);
{
var G__6952 = seq__6936_6945;
var G__6953 = chunk__6937_6946;
var G__6954 = count__6938_6947;
var G__6955 = (i__6939_6948 + 1);
seq__6936_6945 = G__6952;
chunk__6937_6946 = G__6953;
count__6938_6947 = G__6954;
i__6939_6948 = G__6955;
continue;
}
} else
{var temp__4092__auto___6956 = cljs.core.seq.call(null,seq__6936_6945);if(temp__4092__auto___6956)
{var seq__6936_6957__$1 = temp__4092__auto___6956;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6936_6957__$1))
{var c__4151__auto___6958 = cljs.core.chunk_first.call(null,seq__6936_6957__$1);{
var G__6959 = cljs.core.chunk_rest.call(null,seq__6936_6957__$1);
var G__6960 = c__4151__auto___6958;
var G__6961 = cljs.core.count.call(null,c__4151__auto___6958);
var G__6962 = 0;
seq__6936_6945 = G__6959;
chunk__6937_6946 = G__6960;
count__6938_6947 = G__6961;
i__6939_6948 = G__6962;
continue;
}
} else
{var vec__6941_6963 = cljs.core.first.call(null,seq__6936_6957__$1);var type_6964 = cljs.core.nth.call(null,vec__6941_6963,0,null);var f_6965 = cljs.core.nth.call(null,vec__6941_6963,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_6964,((function (seq__6936_6945,chunk__6937_6946,count__6938_6947,i__6939_6948,vec__6941_6963,type_6964,f_6965,seq__6936_6957__$1,temp__4092__auto___6956){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_6964,this_fn);
return f_6965.call(null,e);
});})(seq__6936_6945,chunk__6937_6946,count__6938_6947,i__6939_6948,vec__6941_6963,type_6964,f_6965,seq__6936_6957__$1,temp__4092__auto___6956))
);
{
var G__6966 = cljs.core.next.call(null,seq__6936_6957__$1);
var G__6967 = null;
var G__6968 = 0;
var G__6969 = 0;
seq__6936_6945 = G__6966;
chunk__6937_6946 = G__6967;
count__6938_6947 = G__6968;
i__6939_6948 = G__6969;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__6970){
var elem_sel = cljs.core.first(arglist__6970);
var type_fs = cljs.core.rest(arglist__6970);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;

//# sourceMappingURL=core.js.map