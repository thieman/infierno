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
crate.compiler.xmlns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xhtml","xhtml",1912943770),"http://www.w3.org/1999/xhtml",new cljs.core.Keyword(null,"svg","svg",856789142),"http://www.w3.org/2000/svg"], null);


crate.compiler.group_id = cljs.core.atom.call(null,(0));
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function capture_binding(tag,b){
return cljs.core.swap_BANG_.call(null,crate.compiler.bindings,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,b], null));
});

crate.compiler.Element = (function (){var obj7592 = {};
return obj7592;
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
return (function (){var or__3608__auto__ = (crate.compiler._elem[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (crate.compiler._elem["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Element.-elem",this$);
}
}
})().call(null,this$);
}
});

crate.compiler.as_content = (function as_content(parent,content){
var seq__7599 = cljs.core.seq.call(null,content);
var chunk__7600 = null;
var count__7601 = (0);
var i__7602 = (0);
while(true){
if((i__7602 < count__7601)){
var c = cljs.core._nth.call(null,chunk__7600,i__7602);
var child_7605 = (((function (){var G__7603 = c;
if(G__7603){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__7603.crate$compiler$Element$;
}
})())){
return true;
} else {
if((!G__7603.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,crate.compiler.Element,G__7603);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,crate.compiler.Element,G__7603);
}
})())?crate.compiler._elem.call(null,c):(((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),c);

return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:((crate.binding.binding_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),c);

return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.createTextNode([cljs.core.str(c)].join(''))
))))))))));
if(cljs.core.truth_(child_7605)){
goog.dom.appendChild(parent,child_7605);
} else {
}

var G__7606 = seq__7599;
var G__7607 = chunk__7600;
var G__7608 = count__7601;
var G__7609 = (i__7602 + (1));
seq__7599 = G__7606;
chunk__7600 = G__7607;
count__7601 = G__7608;
i__7602 = G__7609;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7599);
if(temp__4126__auto__){
var seq__7599__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7599__$1)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,seq__7599__$1);
var G__7610 = cljs.core.chunk_rest.call(null,seq__7599__$1);
var G__7611 = c__4390__auto__;
var G__7612 = cljs.core.count.call(null,c__4390__auto__);
var G__7613 = (0);
seq__7599 = G__7610;
chunk__7600 = G__7611;
count__7601 = G__7612;
i__7602 = G__7613;
continue;
} else {
var c = cljs.core.first.call(null,seq__7599__$1);
var child_7614 = (((function (){var G__7604 = c;
if(G__7604){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__7604.crate$compiler$Element$;
}
})())){
return true;
} else {
if((!G__7604.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,crate.compiler.Element,G__7604);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,crate.compiler.Element,G__7604);
}
})())?crate.compiler._elem.call(null,c):(((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),c);

return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:((crate.binding.binding_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),c);

return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.createTextNode([cljs.core.str(c)].join(''))
))))))))));
if(cljs.core.truth_(child_7614)){
goog.dom.appendChild(parent,child_7614);
} else {
}

var G__7615 = cljs.core.next.call(null,seq__7599__$1);
var G__7616 = null;
var G__7617 = (0);
var G__7618 = (0);
seq__7599 = G__7615;
chunk__7600 = G__7616;
count__7601 = G__7617;
i__7602 = G__7618;
continue;
}
} else {
return null;
}
}
break;
}
});
crate.compiler.dom_binding = (function (){var method_table__4500__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4501__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4502__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4503__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4504__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"crate.compiler","dom-binding"),((function (method_table__4500__auto__,prefer_table__4501__auto__,method_cache__4502__auto__,cached_hierarchy__4503__auto__,hierarchy__4504__auto__){
return (function (type,_,___$1){
return type;
});})(method_table__4500__auto__,prefer_table__4501__auto__,method_cache__4502__auto__,cached_hierarchy__4503__auto__,hierarchy__4504__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4504__auto__,method_table__4500__auto__,prefer_table__4501__auto__,method_cache__4502__auto__,cached_hierarchy__4503__auto__));
})();
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"text","text",-1790561697),(function (_,b,elem){
return crate.binding.on_change.call(null,b,(function (v){
goog.dom.removeChildren(elem);

return crate.compiler.as_content.call(null,elem,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (_,p__7619,elem){
var vec__7620 = p__7619;
var k = cljs.core.nth.call(null,vec__7620,(0),null);
var b = cljs.core.nth.call(null,vec__7620,(1),null);
return crate.binding.on_change.call(null,b,((function (vec__7620,k,b){
return (function (v){
return crate.compiler.dom_attr.call(null,elem,k,v);
});})(vec__7620,k,b))
);
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"style","style",-496642736),(function (_,p__7621,elem){
var vec__7622 = p__7621;
var k = cljs.core.nth.call(null,vec__7622,(0),null);
var b = cljs.core.nth.call(null,vec__7622,(1),null);
return crate.binding.on_change.call(null,b,((function (vec__7622,k,b){
return (function (v){
if(cljs.core.truth_(k)){
return crate.compiler.dom_style.call(null,elem,k,v);
} else {
return crate.compiler.dom_style.call(null,elem,v);
}
});})(vec__7622,k,b))
);
}));
crate.compiler.dom_add = (function dom_add(bc,parent,elem,v){
var temp__4124__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"add","add",235287739));
if(cljs.core.truth_(temp__4124__auto__)){
var adder = temp__4124__auto__;
return adder.call(null,parent,elem,v);
} else {
return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function dom_remove(bc,elem){
var temp__4124__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"remove","remove",-131428414));
if(cljs.core.truth_(temp__4124__auto__)){
var remover = temp__4124__auto__;
return remover.call(null,elem);
} else {
return goog.dom.removeNode(elem);
}
});
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"coll","coll",1647737163),(function (_,bc,parent){
return crate.binding.on_change.call(null,bc,(function (type,elem,v){
var pred__7623 = cljs.core._EQ_;
var expr__7624 = type;
if(cljs.core.truth_(pred__7623.call(null,new cljs.core.Keyword(null,"add","add",235287739),expr__7624))){
return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else {
if(cljs.core.truth_(pred__7623.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__7624))){
return crate.compiler.dom_remove.call(null,bc,elem);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7624)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){
var seq__7632 = cljs.core.seq.call(null,bs);
var chunk__7633 = null;
var count__7634 = (0);
var i__7635 = (0);
while(true){
if((i__7635 < count__7634)){
var vec__7636 = cljs.core._nth.call(null,chunk__7633,i__7635);
var type = cljs.core.nth.call(null,vec__7636,(0),null);
var b = cljs.core.nth.call(null,vec__7636,(1),null);
crate.compiler.dom_binding.call(null,type,b,elem);

var G__7638 = seq__7632;
var G__7639 = chunk__7633;
var G__7640 = count__7634;
var G__7641 = (i__7635 + (1));
seq__7632 = G__7638;
chunk__7633 = G__7639;
count__7634 = G__7640;
i__7635 = G__7641;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7632);
if(temp__4126__auto__){
var seq__7632__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7632__$1)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,seq__7632__$1);
var G__7642 = cljs.core.chunk_rest.call(null,seq__7632__$1);
var G__7643 = c__4390__auto__;
var G__7644 = cljs.core.count.call(null,c__4390__auto__);
var G__7645 = (0);
seq__7632 = G__7642;
chunk__7633 = G__7643;
count__7634 = G__7644;
i__7635 = G__7645;
continue;
} else {
var vec__7637 = cljs.core.first.call(null,seq__7632__$1);
var type = cljs.core.nth.call(null,vec__7637,(0),null);
var b = cljs.core.nth.call(null,vec__7637,(1),null);
crate.compiler.dom_binding.call(null,type,b,elem);

var G__7646 = cljs.core.next.call(null,seq__7632__$1);
var G__7647 = null;
var G__7648 = (0);
var G__7649 = (0);
seq__7632 = G__7646;
chunk__7633 = G__7647;
count__7634 = G__7648;
i__7635 = G__7649;
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
if(cljs.core.map_QMARK_.call(null,v)){
var seq__7656_7662 = cljs.core.seq.call(null,v);
var chunk__7657_7663 = null;
var count__7658_7664 = (0);
var i__7659_7665 = (0);
while(true){
if((i__7659_7665 < count__7658_7664)){
var vec__7660_7666 = cljs.core._nth.call(null,chunk__7657_7663,i__7659_7665);
var k_7667 = cljs.core.nth.call(null,vec__7660_7666,(0),null);
var v_7668__$1 = cljs.core.nth.call(null,vec__7660_7666,(1),null);
dom_style.call(null,elem,k_7667,v_7668__$1);

var G__7669 = seq__7656_7662;
var G__7670 = chunk__7657_7663;
var G__7671 = count__7658_7664;
var G__7672 = (i__7659_7665 + (1));
seq__7656_7662 = G__7669;
chunk__7657_7663 = G__7670;
count__7658_7664 = G__7671;
i__7659_7665 = G__7672;
continue;
} else {
var temp__4126__auto___7673 = cljs.core.seq.call(null,seq__7656_7662);
if(temp__4126__auto___7673){
var seq__7656_7674__$1 = temp__4126__auto___7673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7656_7674__$1)){
var c__4390__auto___7675 = cljs.core.chunk_first.call(null,seq__7656_7674__$1);
var G__7676 = cljs.core.chunk_rest.call(null,seq__7656_7674__$1);
var G__7677 = c__4390__auto___7675;
var G__7678 = cljs.core.count.call(null,c__4390__auto___7675);
var G__7679 = (0);
seq__7656_7662 = G__7676;
chunk__7657_7663 = G__7677;
count__7658_7664 = G__7678;
i__7659_7665 = G__7679;
continue;
} else {
var vec__7661_7680 = cljs.core.first.call(null,seq__7656_7674__$1);
var k_7681 = cljs.core.nth.call(null,vec__7661_7680,(0),null);
var v_7682__$1 = cljs.core.nth.call(null,vec__7661_7680,(1),null);
dom_style.call(null,elem,k_7681,v_7682__$1);

var G__7683 = cljs.core.next.call(null,seq__7656_7674__$1);
var G__7684 = null;
var G__7685 = (0);
var G__7686 = (0);
seq__7656_7662 = G__7683;
chunk__7657_7663 = G__7684;
count__7658_7664 = G__7685;
i__7659_7665 = G__7686;
continue;
}
} else {
}
}
break;
}
} else {
if(crate.binding.binding_QMARK_.call(null,v)){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));

dom_style.call(null,elem,crate.binding.value.call(null,v));
} else {
}
}
}

return elem;
});
var dom_style__3 = (function (elem,k,v){
var v__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value.call(null,v);
})()
:v);
return goog.style.setStyle(elem,cljs.core.name.call(null,k),v__$1);
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
if(!(cljs.core.map_QMARK_.call(null,attrs))){
return elem.getAttribute(cljs.core.name.call(null,attrs));
} else {
var seq__7693_7699 = cljs.core.seq.call(null,attrs);
var chunk__7694_7700 = null;
var count__7695_7701 = (0);
var i__7696_7702 = (0);
while(true){
if((i__7696_7702 < count__7695_7701)){
var vec__7697_7703 = cljs.core._nth.call(null,chunk__7694_7700,i__7696_7702);
var k_7704 = cljs.core.nth.call(null,vec__7697_7703,(0),null);
var v_7705 = cljs.core.nth.call(null,vec__7697_7703,(1),null);
dom_attr.call(null,elem,k_7704,v_7705);

var G__7706 = seq__7693_7699;
var G__7707 = chunk__7694_7700;
var G__7708 = count__7695_7701;
var G__7709 = (i__7696_7702 + (1));
seq__7693_7699 = G__7706;
chunk__7694_7700 = G__7707;
count__7695_7701 = G__7708;
i__7696_7702 = G__7709;
continue;
} else {
var temp__4126__auto___7710 = cljs.core.seq.call(null,seq__7693_7699);
if(temp__4126__auto___7710){
var seq__7693_7711__$1 = temp__4126__auto___7710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7693_7711__$1)){
var c__4390__auto___7712 = cljs.core.chunk_first.call(null,seq__7693_7711__$1);
var G__7713 = cljs.core.chunk_rest.call(null,seq__7693_7711__$1);
var G__7714 = c__4390__auto___7712;
var G__7715 = cljs.core.count.call(null,c__4390__auto___7712);
var G__7716 = (0);
seq__7693_7699 = G__7713;
chunk__7694_7700 = G__7714;
count__7695_7701 = G__7715;
i__7696_7702 = G__7716;
continue;
} else {
var vec__7698_7717 = cljs.core.first.call(null,seq__7693_7711__$1);
var k_7718 = cljs.core.nth.call(null,vec__7698_7717,(0),null);
var v_7719 = cljs.core.nth.call(null,vec__7698_7717,(1),null);
dom_attr.call(null,elem,k_7718,v_7719);

var G__7720 = cljs.core.next.call(null,seq__7693_7711__$1);
var G__7721 = null;
var G__7722 = (0);
var G__7723 = (0);
seq__7693_7699 = G__7720;
chunk__7694_7700 = G__7721;
count__7695_7701 = G__7722;
i__7696_7702 = G__7723;
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
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736))){
crate.compiler.dom_style.call(null,elem,v);
} else {
var v_7724__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value.call(null,v);
})()
:v);
elem.setAttribute(cljs.core.name.call(null,k),v_7724__$1);
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__7727){
var vec__7728 = p__7727;
var n = cljs.core.nth.call(null,vec__7728,(0),null);
var v = cljs.core.nth.call(null,vec__7728,(1),null);
if(v === true){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.name.call(null,n)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,v], null);
}
}),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.compiler.normalize_element = (function normalize_element(p__7730){
var vec__7735 = p__7730;
var tag = cljs.core.nth.call(null,vec__7735,(0),null);
var content = cljs.core.nthnext.call(null,vec__7735,(1));
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else {
}

var vec__7736 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag));
var _ = cljs.core.nth.call(null,vec__7736,(0),null);
var tag__$1 = cljs.core.nth.call(null,vec__7736,(1),null);
var id = cljs.core.nth.call(null,vec__7736,(2),null);
var class$ = cljs.core.nth.call(null,vec__7736,(3),null);
var vec__7737 = (function (){var vec__7738 = clojure.string.split.call(null,tag__$1,/:/);
var nsp = cljs.core.nth.call(null,vec__7738,(0),null);
var t = cljs.core.nth.call(null,vec__7738,(1),null);
var ns_xmlns = crate.compiler.xmlns.call(null,cljs.core.keyword.call(null,nsp));
if(cljs.core.truth_(t)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3608__auto__ = ns_xmlns;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return nsp;
}
})(),t], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhtml","xhtml",1912943770).cljs$core$IFn$_invoke$arity$1(crate.compiler.xmlns),nsp], null);
}
})();
var nsp = cljs.core.nth.call(null,vec__7737,(0),null);
var tag__$2 = cljs.core.nth.call(null,vec__7737,(1),null);
var tag_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (vec__7736,_,tag__$1,id,class$,vec__7737,nsp,tag__$2,vec__7735,tag,content){
return (function (p1__7729_SHARP_){
return !((cljs.core.second.call(null,p1__7729_SHARP_) == null));
});})(vec__7736,_,tag__$1,id,class$,vec__7737,nsp,tag__$2,vec__7735,tag,content))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__3608__auto__ = id;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return null;
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null)], null)));
var map_attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,map_attrs)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,cljs.core.merge.call(null,tag_attrs,crate.compiler.normalize_map_attrs.call(null,map_attrs)),cljs.core.next.call(null,content)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,tag_attrs,content], null);
}
});
crate.compiler.parse_content = (function parse_content(elem,content){
var attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,attrs)){
crate.compiler.dom_attr.call(null,elem,attrs);

return cljs.core.rest.call(null,content);
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
var bindings7741 = crate.compiler.bindings;
try{crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);

var vec__7742 = crate.compiler.normalize_element.call(null,tag_def);
var nsp = cljs.core.nth.call(null,vec__7742,(0),null);
var tag = cljs.core.nth.call(null,vec__7742,(1),null);
var attrs = cljs.core.nth.call(null,vec__7742,(2),null);
var content = cljs.core.nth.call(null,vec__7742,(3),null);
var elem = crate.compiler.create_elem.call(null,nsp,tag);
crate.compiler.dom_attr.call(null,elem,attrs);

crate.compiler.as_content.call(null,elem,content);

crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem);

return elem;
}finally {crate.compiler.bindings = bindings7741;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__7745__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__7744 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__7744,(0),null);
var body = cljs.core.nthnext.call(null,vec__7744,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__7745 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7745__delegate.call(this,args);};
G__7745.cljs$lang$maxFixedArity = 0;
G__7745.cljs$lang$applyTo = (function (arglist__7746){
var args = cljs.core.seq(arglist__7746);
return G__7745__delegate(args);
});
G__7745.cljs$core$IFn$_invoke$arity$variadic = G__7745__delegate;
return G__7745;
})()
;
});
