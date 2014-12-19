// Compiled by ClojureScript 0.0-2156
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
hipo.interpreter._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
hipo.interpreter._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["polyline",null,"rect",null,"svg",null,"path",null,"g",null,"text",null,"circle",null,"textPath",null,"line",null,"clipPath",null,"polygon",null], null), null);
hipo.interpreter.literal_QMARK_ = (function literal_QMARK_(o){return (typeof o === 'string') || (typeof o === 'number') || (o === true) || (o === false);
});
hipo.interpreter.create_element = (function create_element(namespace_uri,tag,is){if(cljs.core.truth_(namespace_uri))
{if(cljs.core.truth_(is))
{return document.createElementNS(namespace_uri,tag,is);
} else
{return document.createElementNS(namespace_uri,tag);
}
} else
{if(cljs.core.truth_(is))
{return document.createElement(tag,is);
} else
{return document.createElement(tag);
}
}
});
/**
* return pair [tag class-str id] where tag is dom tag and attrs
* are key-value attribute pairs from css-style dom selector
*/
hipo.interpreter.parse_keyword = (function parse_keyword(node_key){var node_str = cljs.core.name.call(null,node_key);var node_tag = cljs.core.second.call(null,cljs.core.re_find.call(null,/^([^.\#]+)[.\#]?/,node_str));var classes = cljs.core.map.call(null,((function (node_str,node_tag){
return (function (p1__6992_SHARP_){return p1__6992_SHARP_.substring(1);
});})(node_str,node_tag))
,cljs.core.re_seq.call(null,/\.[^.*]*/,node_str));var id = cljs.core.first.call(null,cljs.core.map.call(null,((function (node_str,node_tag,classes){
return (function (p1__6993_SHARP_){return p1__6993_SHARP_.substring(1);
});})(node_str,node_tag,classes))
,cljs.core.re_seq.call(null,/#[^.*]*/,node_str)));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.empty_QMARK_.call(null,node_tag))?"div":node_tag),((cljs.core.empty_QMARK_.call(null,classes))?null:clojure.string.join.call(null," ",classes)),id], null);
});
hipo.interpreter.set_attribute_BANG_ = (function (){var method_table__4261__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("set-attribute!",(function (p1__6994_SHARP_){return cljs.core.second.call(null,p1__6994_SHARP_);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
cljs.core._add_method.call(null,hipo.interpreter.set_attribute_BANG_,new cljs.core.Keyword(null,"default","default",2558708147),(function (p__6995){var vec__6996 = p__6995;var el = cljs.core.nth.call(null,vec__6996,0,null);var a = cljs.core.nth.call(null,vec__6996,1,null);var v = cljs.core.nth.call(null,vec__6996,2,null);if(cljs.core._EQ_.call(null,0,a.indexOf("on-")))
{var e = a.substring(3);return el.addEventListener(e,v);
} else
{return el.setAttribute(a,v);
}
}));
hipo.interpreter.append_children_BANG_ = (function append_children_BANG_(el,o){if(cljs.core.seq_QMARK_.call(null,o))
{var seq__7001 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.identity,o));var chunk__7002 = null;var count__7003 = 0;var i__7004 = 0;while(true){
if((i__7004 < count__7003))
{var c = cljs.core._nth.call(null,chunk__7002,i__7004);append_children_BANG_.call(null,el,c);
{
var G__7005 = seq__7001;
var G__7006 = chunk__7002;
var G__7007 = count__7003;
var G__7008 = (i__7004 + 1);
seq__7001 = G__7005;
chunk__7002 = G__7006;
count__7003 = G__7007;
i__7004 = G__7008;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7001);if(temp__4092__auto__)
{var seq__7001__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7001__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__7001__$1);{
var G__7009 = cljs.core.chunk_rest.call(null,seq__7001__$1);
var G__7010 = c__4151__auto__;
var G__7011 = cljs.core.count.call(null,c__4151__auto__);
var G__7012 = 0;
seq__7001 = G__7009;
chunk__7002 = G__7010;
count__7003 = G__7011;
i__7004 = G__7012;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__7001__$1);append_children_BANG_.call(null,el,c);
{
var G__7013 = cljs.core.next.call(null,seq__7001__$1);
var G__7014 = null;
var G__7015 = 0;
var G__7016 = 0;
seq__7001 = G__7013;
chunk__7002 = G__7014;
count__7003 = G__7015;
i__7004 = G__7016;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return el.appendChild(hipo.interpreter.create_child.call(null,o));
}
});
hipo.interpreter.create_vector = (function create_vector(p__7017){var vec__7026 = p__7017;var node_key = cljs.core.nth.call(null,vec__7026,0,null);var rest = cljs.core.nthnext.call(null,vec__7026,1);var literal_attrs = (function (){var temp__4092__auto__ = cljs.core.first.call(null,rest);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;if(cljs.core.map_QMARK_.call(null,f))
{return f;
} else
{return null;
}
} else
{return null;
}
})();var children = (cljs.core.truth_(literal_attrs)?cljs.core.drop.call(null,1,rest):rest);var vec__7027 = hipo.interpreter.parse_keyword.call(null,node_key);var tag = cljs.core.nth.call(null,vec__7027,0,null);var class_str = cljs.core.nth.call(null,vec__7027,1,null);var id = cljs.core.nth.call(null,vec__7027,2,null);var class_str__$1 = (function (){var temp__4090__auto__ = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(literal_attrs);if(cljs.core.truth_(temp__4090__auto__))
{var c = temp__4090__auto__;return [cljs.core.str(class_str),cljs.core.str(" "),cljs.core.str(c)].join('');
} else
{return class_str;
}
})();var element_ns = (cljs.core.truth_(hipo.interpreter._PLUS_svg_tags_PLUS_.call(null,tag))?hipo.interpreter._PLUS_svg_ns_PLUS_:null);var is = new cljs.core.Keyword(null,"is","is",1013907612).cljs$core$IFn$_invoke$arity$1(literal_attrs);var el = hipo.interpreter.create_element.call(null,element_ns,tag,is);if(cljs.core.empty_QMARK_.call(null,class_str__$1))
{} else
{el.className = class_str__$1;
}
if(cljs.core.truth_(id))
{el.id = id;
} else
{}
var seq__7028_7034 = cljs.core.seq.call(null,cljs.core.dissoc.call(null,literal_attrs,new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"is","is",1013907612)));var chunk__7029_7035 = null;var count__7030_7036 = 0;var i__7031_7037 = 0;while(true){
if((i__7031_7037 < count__7030_7036))
{var vec__7032_7038 = cljs.core._nth.call(null,chunk__7029_7035,i__7031_7037);var k_7039 = cljs.core.nth.call(null,vec__7032_7038,0,null);var v_7040 = cljs.core.nth.call(null,vec__7032_7038,1,null);if(cljs.core.truth_(v_7040))
{hipo.interpreter.set_attribute_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.name.call(null,k_7039),v_7040], null));
} else
{}
{
var G__7041 = seq__7028_7034;
var G__7042 = chunk__7029_7035;
var G__7043 = count__7030_7036;
var G__7044 = (i__7031_7037 + 1);
seq__7028_7034 = G__7041;
chunk__7029_7035 = G__7042;
count__7030_7036 = G__7043;
i__7031_7037 = G__7044;
continue;
}
} else
{var temp__4092__auto___7045 = cljs.core.seq.call(null,seq__7028_7034);if(temp__4092__auto___7045)
{var seq__7028_7046__$1 = temp__4092__auto___7045;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7028_7046__$1))
{var c__4151__auto___7047 = cljs.core.chunk_first.call(null,seq__7028_7046__$1);{
var G__7048 = cljs.core.chunk_rest.call(null,seq__7028_7046__$1);
var G__7049 = c__4151__auto___7047;
var G__7050 = cljs.core.count.call(null,c__4151__auto___7047);
var G__7051 = 0;
seq__7028_7034 = G__7048;
chunk__7029_7035 = G__7049;
count__7030_7036 = G__7050;
i__7031_7037 = G__7051;
continue;
}
} else
{var vec__7033_7052 = cljs.core.first.call(null,seq__7028_7046__$1);var k_7053 = cljs.core.nth.call(null,vec__7033_7052,0,null);var v_7054 = cljs.core.nth.call(null,vec__7033_7052,1,null);if(cljs.core.truth_(v_7054))
{hipo.interpreter.set_attribute_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.name.call(null,k_7053),v_7054], null));
} else
{}
{
var G__7055 = cljs.core.next.call(null,seq__7028_7046__$1);
var G__7056 = null;
var G__7057 = 0;
var G__7058 = 0;
seq__7028_7034 = G__7055;
chunk__7029_7035 = G__7056;
count__7030_7036 = G__7057;
i__7031_7037 = G__7058;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(children))
{hipo.interpreter.append_children_BANG_.call(null,el,children);
} else
{}
return el;
});
hipo.interpreter.mark_as_partially_compiled_BANG_ = (function mark_as_partially_compiled_BANG_(el){var el__$1 = el;while(true){
var temp__4090__auto__ = el__$1.parentElement;if(cljs.core.truth_(temp__4090__auto__))
{var pel = temp__4090__auto__;{
var G__7059 = pel;
el__$1 = G__7059;
continue;
}
} else
{(el__$1["hipo-partially-compiled"] = true);
return el__$1;
}
break;
}
});
hipo.interpreter.create_child = (function create_child(o){if(hipo.interpreter.literal_QMARK_.call(null,o))
{return document.createTextNode(o);
} else
{if(cljs.core.vector_QMARK_.call(null,o))
{return hipo.interpreter.create_vector.call(null,o);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,o))].join('');
} else
{return null;
}
}
}
});
hipo.interpreter.append_to_parent = (function append_to_parent(el,o){if(!((o == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"o","o",-1640531416,null)))))].join('')));
}
hipo.interpreter.mark_as_partially_compiled_BANG_.call(null,el);
return hipo.interpreter.append_children_BANG_.call(null,el,o);
});
hipo.interpreter.create = (function create(o){if(!((o == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"o","o",-1640531416,null)))))].join('')));
}
return hipo.interpreter.mark_as_partially_compiled_BANG_.call(null,((cljs.core.seq_QMARK_.call(null,o))?(function (){var f = document.createDocumentFragment();hipo.interpreter.append_children_BANG_.call(null,f,o);
return f;
})():hipo.interpreter.create_child.call(null,o)));
});

//# sourceMappingURL=interpreter.js.map