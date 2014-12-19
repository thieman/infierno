// Compiled by ClojureScript 0.0-2411
goog.provide('crate.core');
goog.require('cljs.core');
goog.require('crate.util');
goog.require('crate.util');
goog.require('crate.compiler');
goog.require('crate.compiler');
goog.require('goog.dom');
goog.require('goog.dom');
crate.core.group_id = (function (){var G__16899 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16899) : cljs.core.atom.call(null,G__16899));
})();
crate.core.raw = (function raw(html_str){
var G__16901 = html_str;
return goog.dom.htmlToDocumentFragment(G__16901);
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res = cljs.core.map.cljs$core$IFn$_invoke$arity$2(crate.compiler.elem_factory,tags);
if(cljs.core.truth_(cljs.core.second(res))){
return res;
} else {
return cljs.core.first(res);
}
};
var html = function (var_args){
var tags = null;
if (arguments.length > 0) {
  tags = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return html__delegate.call(this,tags);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__16902){
var tags = cljs.core.seq(arglist__16902);
return html__delegate(tags);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* Alias for crate.util/escape-html
*/
crate.core.h = crate.util.escape_html;
