// Compiled by ClojureScript 0.0-2411
goog.provide('infierno.sprite');
goog.require('cljs.core');
goog.require('infierno.protocol');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('infierno.protocol');
goog.require('crate.core');
goog.require('crate.core');
goog.require('cljs_uuid.core');
goog.require('cljs_uuid.core');
goog.require('clojure.string');
goog.require('clojure.string');

/**
* @constructor
* @param {*} url
* @param {*} height
* @param {*} width
* @param {*} rows
* @param {*} columns
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
infierno.sprite.Spritesheet = (function (url,height,width,rows,columns,__meta,__extmap){
this.url = url;
this.height = height;
this.width = width;
this.rows = rows;
this.columns = columns;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
infierno.sprite.Spritesheet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4206__auto__,k__4207__auto__){
var self__ = this;
var this__4206__auto____$1 = this;
return cljs.core._lookup.call(null,this__4206__auto____$1,k__4207__auto__,null);
});

infierno.sprite.Spritesheet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4208__auto__,k7973,else__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
var G__7975 = (((k7973 instanceof cljs.core.Keyword))?k7973.fqn:null);
switch (G__7975) {
case "columns":
return self__.columns;

break;
case "rows":
return self__.rows;

break;
case "width":
return self__.width;

break;
case "height":
return self__.height;

break;
case "url":
return self__.url;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7973,else__4209__auto__);

}
});

infierno.sprite.Spritesheet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4220__auto__,writer__4221__auto__,opts__4222__auto__){
var self__ = this;
var this__4220__auto____$1 = this;
var pr_pair__4223__auto__ = ((function (this__4220__auto____$1){
return (function (keyval__4224__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4221__auto__,cljs.core.pr_writer,""," ","",opts__4222__auto__,keyval__4224__auto__);
});})(this__4220__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4221__auto__,pr_pair__4223__auto__,"#infierno.sprite.Spritesheet{",", ","}",opts__4222__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rows","rows",850049680),self__.rows],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"columns","columns",1998437288),self__.columns],null))], null),self__.__extmap));
});

infierno.sprite.Spritesheet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4204__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
return self__.__meta;
});

infierno.sprite.Spritesheet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4200__auto__){
var self__ = this;
var this__4200__auto____$1 = this;
return (new infierno.sprite.Spritesheet(self__.url,self__.height,self__.width,self__.rows,self__.columns,self__.__meta,self__.__extmap,self__.__hash));
});

infierno.sprite.Spritesheet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4210__auto__){
var self__ = this;
var this__4210__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

infierno.sprite.Spritesheet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_imap.call(null,this__4201__auto____$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

infierno.sprite.Spritesheet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4202__auto__,other__4203__auto__){
var self__ = this;
var this__4202__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3596__auto__ = other__4203__auto__;
if(cljs.core.truth_(and__3596__auto__)){
return ((this__4202__auto____$1.constructor === other__4203__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4202__auto____$1,other__4203__auto__));
} else {
return and__3596__auto__;
}
})())){
return true;
} else {
return false;
}
});

infierno.sprite.Spritesheet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4215__auto__,k__4216__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"columns","columns",1998437288),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"rows","rows",850049680),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__4216__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4215__auto____$1),self__.__meta),k__4216__auto__);
} else {
return (new infierno.sprite.Spritesheet(self__.url,self__.height,self__.width,self__.rows,self__.columns,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4216__auto__)),null));
}
});

infierno.sprite.Spritesheet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4213__auto__,k__4214__auto__,G__7972){
var self__ = this;
var this__4213__auto____$1 = this;
var pred__7976 = cljs.core.keyword_identical_QMARK_;
var expr__7977 = k__4214__auto__;
if(cljs.core.truth_(pred__7976.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__7977))){
return (new infierno.sprite.Spritesheet(G__7972,self__.height,self__.width,self__.rows,self__.columns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7976.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__7977))){
return (new infierno.sprite.Spritesheet(self__.url,G__7972,self__.width,self__.rows,self__.columns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7976.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__7977))){
return (new infierno.sprite.Spritesheet(self__.url,self__.height,G__7972,self__.rows,self__.columns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7976.call(null,new cljs.core.Keyword(null,"rows","rows",850049680),expr__7977))){
return (new infierno.sprite.Spritesheet(self__.url,self__.height,self__.width,G__7972,self__.columns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7976.call(null,new cljs.core.Keyword(null,"columns","columns",1998437288),expr__7977))){
return (new infierno.sprite.Spritesheet(self__.url,self__.height,self__.width,self__.rows,G__7972,self__.__meta,self__.__extmap,null));
} else {
return (new infierno.sprite.Spritesheet(self__.url,self__.height,self__.width,self__.rows,self__.columns,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4214__auto__,G__7972),null));
}
}
}
}
}
});

infierno.sprite.Spritesheet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4218__auto__){
var self__ = this;
var this__4218__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rows","rows",850049680),self__.rows],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"columns","columns",1998437288),self__.columns],null))], null),self__.__extmap));
});

infierno.sprite.Spritesheet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4205__auto__,G__7972){
var self__ = this;
var this__4205__auto____$1 = this;
return (new infierno.sprite.Spritesheet(self__.url,self__.height,self__.width,self__.rows,self__.columns,G__7972,self__.__extmap,self__.__hash));
});

infierno.sprite.Spritesheet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4211__auto__,entry__4212__auto__){
var self__ = this;
var this__4211__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4212__auto__)){
return cljs.core._assoc.call(null,this__4211__auto____$1,cljs.core._nth.call(null,entry__4212__auto__,(0)),cljs.core._nth.call(null,entry__4212__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4211__auto____$1,entry__4212__auto__);
}
});

infierno.sprite.Spritesheet.cljs$lang$type = true;

infierno.sprite.Spritesheet.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"infierno.sprite/Spritesheet");
});

infierno.sprite.Spritesheet.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"infierno.sprite/Spritesheet");
});

infierno.sprite.__GT_Spritesheet = (function __GT_Spritesheet(url,height,width,rows,columns){
return (new infierno.sprite.Spritesheet(url,height,width,rows,columns));
});

infierno.sprite.map__GT_Spritesheet = (function map__GT_Spritesheet(G__7974){
return (new infierno.sprite.Spritesheet(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__7974),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__7974),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__7974),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(G__7974),new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(G__7974),null,cljs.core.dissoc.call(null,G__7974,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"columns","columns",1998437288))));
});

var group__5595__auto___7980 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
infierno.sprite.sprite_template = ((function (group__5595__auto___7980){
return (function sprite_template(id,style){
var elem__5596__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),"infierno-sprite",new cljs.core.Keyword(null,"style","style",-496642736),style], null)], null));
elem__5596__auto__.setAttribute("crateGroup",group__5595__auto___7980);

return elem__5596__auto__;
});})(group__5595__auto___7980))
;

infierno.sprite.sprite_template.prototype._crateGroup = group__5595__auto___7980;
infierno.sprite.style_options = (function style_options(options){
var pairs = (function (){var iter__4359__auto__ = (function iter__7989(s__7990){
return (new cljs.core.LazySeq(null,(function (){
var s__7990__$1 = s__7990;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7990__$1);
if(temp__4126__auto__){
var s__7990__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7990__$2)){
var c__4357__auto__ = cljs.core.chunk_first.call(null,s__7990__$2);
var size__4358__auto__ = cljs.core.count.call(null,c__4357__auto__);
var b__7992 = cljs.core.chunk_buffer.call(null,size__4358__auto__);
if((function (){var i__7991 = (0);
while(true){
if((i__7991 < size__4358__auto__)){
var vec__7995 = cljs.core._nth.call(null,c__4357__auto__,i__7991);
var option = cljs.core.nth.call(null,vec__7995,(0),null);
var value = cljs.core.nth.call(null,vec__7995,(1),null);
cljs.core.chunk_append.call(null,b__7992,clojure.string.join.call(null,"",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,option),": ",value,";"], null)));

var G__7997 = (i__7991 + (1));
i__7991 = G__7997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7992),iter__7989.call(null,cljs.core.chunk_rest.call(null,s__7990__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7992),null);
}
} else {
var vec__7996 = cljs.core.first.call(null,s__7990__$2);
var option = cljs.core.nth.call(null,vec__7996,(0),null);
var value = cljs.core.nth.call(null,vec__7996,(1),null);
return cljs.core.cons.call(null,clojure.string.join.call(null,"",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,option),": ",value,";"], null)),iter__7989.call(null,cljs.core.rest.call(null,s__7990__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4359__auto__.call(null,options);
})();
return clojure.string.join.call(null,pairs);
});
infierno.sprite.add_px = (function add_px(current_value,amount){
var new_val_int = (parseFloat(current_value) + amount);
return (new_val_int + "px");
});
infierno.sprite.bounding = (function bounding(dom_element){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),parseFloat(dom_element.style.top),new cljs.core.Keyword(null,"left","left",-399115937),parseFloat(dom_element.style.left),new cljs.core.Keyword(null,"width","width",-384071477),parseFloat(dom_element.style.width),new cljs.core.Keyword(null,"height","height",1025178622),parseFloat(dom_element.style.height)], null);
});

/**
* @constructor
* @param {*} spritesheet
* @param {*} row
* @param {*} column
* @param {*} render_options
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
infierno.sprite.Sprite = (function (spritesheet,row,column,render_options,__meta,__extmap){
this.spritesheet = spritesheet;
this.row = row;
this.column = column;
this.render_options = render_options;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
infierno.sprite.Sprite.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4206__auto__,k__4207__auto__){
var self__ = this;
var this__4206__auto____$1 = this;
return cljs.core._lookup.call(null,this__4206__auto____$1,k__4207__auto__,null);
});

infierno.sprite.Sprite.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4208__auto__,k7999,else__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
var G__8001 = (((k7999 instanceof cljs.core.Keyword))?k7999.fqn:null);
switch (G__8001) {
case "render-options":
return self__.render_options;

break;
case "column":
return self__.column;

break;
case "row":
return self__.row;

break;
case "spritesheet":
return self__.spritesheet;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7999,else__4209__auto__);

}
});

infierno.sprite.Sprite.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4220__auto__,writer__4221__auto__,opts__4222__auto__){
var self__ = this;
var this__4220__auto____$1 = this;
var pr_pair__4223__auto__ = ((function (this__4220__auto____$1){
return (function (keyval__4224__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4221__auto__,cljs.core.pr_writer,""," ","",opts__4222__auto__,keyval__4224__auto__);
});})(this__4220__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4221__auto__,pr_pair__4223__auto__,"#infierno.sprite.Sprite{",", ","}",opts__4222__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"spritesheet","spritesheet",-542003038),self__.spritesheet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"row","row",-570139521),self__.row],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"column","column",2078222095),self__.column],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-options","render-options",686799147),self__.render_options],null))], null),self__.__extmap));
});

infierno.sprite.Sprite.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4204__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
return self__.__meta;
});

infierno.sprite.Sprite.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4200__auto__){
var self__ = this;
var this__4200__auto____$1 = this;
return (new infierno.sprite.Sprite(self__.spritesheet,self__.row,self__.column,self__.render_options,self__.__meta,self__.__extmap,self__.__hash));
});

infierno.sprite.Sprite.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4210__auto__){
var self__ = this;
var this__4210__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

infierno.sprite.Sprite.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_imap.call(null,this__4201__auto____$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

infierno.sprite.Sprite.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4202__auto__,other__4203__auto__){
var self__ = this;
var this__4202__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3596__auto__ = other__4203__auto__;
if(cljs.core.truth_(and__3596__auto__)){
return ((this__4202__auto____$1.constructor === other__4203__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4202__auto____$1,other__4203__auto__));
} else {
return and__3596__auto__;
}
})())){
return true;
} else {
return false;
}
});

infierno.sprite.Sprite.prototype.infierno$protocol$Movable$ = true;

infierno.sprite.Sprite.prototype.infierno$protocol$Movable$move_frame$arity$3 = (function (self,dx,dy){
var self__ = this;
var self__$1 = this;
var current_top = new cljs.core.Keyword(null,"dom-element","dom-element",-1359955914).cljs$core$IFn$_invoke$arity$1(self__$1).style.top;
var current_left = new cljs.core.Keyword(null,"dom-element","dom-element",-1359955914).cljs$core$IFn$_invoke$arity$1(self__$1).style.left;
new cljs.core.Keyword(null,"dom-element","dom-element",-1359955914).cljs$core$IFn$_invoke$arity$1(self__$1).style.setProperty("top",infierno.sprite.add_px.call(null,current_top,dy));

return new cljs.core.Keyword(null,"dom-element","dom-element",-1359955914).cljs$core$IFn$_invoke$arity$1(self__$1).style.setProperty("left",infierno.sprite.add_px.call(null,current_left,dx));
});

infierno.sprite.Sprite.prototype.infierno$protocol$Collidable$ = true;

infierno.sprite.Sprite.prototype.infierno$protocol$Collidable$collides_with$arity$2 = (function (self,sprite){
var self__ = this;
var self__$1 = this;
var self_box = infierno.sprite.bounding.call(null,new cljs.core.Keyword(null,"dom-element","dom-element",-1359955914).cljs$core$IFn$_invoke$arity$1(self__$1));
var object_box = infierno.sprite.bounding.call(null,new cljs.core.Keyword(null,"dom-element","dom-element",-1359955914).cljs$core$IFn$_invoke$arity$1(sprite));
return !(((new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(object_box) > (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(self_box) + new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(self_box)))) || (((new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(object_box) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(object_box)) < new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(self_box))) || ((new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(object_box) > (new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(self_box) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self_box)))) || (((new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(object_box) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(object_box)) < new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(self_box))));
});

infierno.sprite.Sprite.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4215__auto__,k__4216__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"spritesheet","spritesheet",-542003038),null,new cljs.core.Keyword(null,"render-options","render-options",686799147),null,new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"row","row",-570139521),null], null), null),k__4216__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4215__auto____$1),self__.__meta),k__4216__auto__);
} else {
return (new infierno.sprite.Sprite(self__.spritesheet,self__.row,self__.column,self__.render_options,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4216__auto__)),null));
}
});

infierno.sprite.Sprite.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4213__auto__,k__4214__auto__,G__7998){
var self__ = this;
var this__4213__auto____$1 = this;
var pred__8002 = cljs.core.keyword_identical_QMARK_;
var expr__8003 = k__4214__auto__;
if(cljs.core.truth_(pred__8002.call(null,new cljs.core.Keyword(null,"spritesheet","spritesheet",-542003038),expr__8003))){
return (new infierno.sprite.Sprite(G__7998,self__.row,self__.column,self__.render_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8002.call(null,new cljs.core.Keyword(null,"row","row",-570139521),expr__8003))){
return (new infierno.sprite.Sprite(self__.spritesheet,G__7998,self__.column,self__.render_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8002.call(null,new cljs.core.Keyword(null,"column","column",2078222095),expr__8003))){
return (new infierno.sprite.Sprite(self__.spritesheet,self__.row,G__7998,self__.render_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8002.call(null,new cljs.core.Keyword(null,"render-options","render-options",686799147),expr__8003))){
return (new infierno.sprite.Sprite(self__.spritesheet,self__.row,self__.column,G__7998,self__.__meta,self__.__extmap,null));
} else {
return (new infierno.sprite.Sprite(self__.spritesheet,self__.row,self__.column,self__.render_options,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4214__auto__,G__7998),null));
}
}
}
}
});

infierno.sprite.Sprite.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4218__auto__){
var self__ = this;
var this__4218__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"spritesheet","spritesheet",-542003038),self__.spritesheet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"row","row",-570139521),self__.row],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"column","column",2078222095),self__.column],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-options","render-options",686799147),self__.render_options],null))], null),self__.__extmap));
});

infierno.sprite.Sprite.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4205__auto__,G__7998){
var self__ = this;
var this__4205__auto____$1 = this;
return (new infierno.sprite.Sprite(self__.spritesheet,self__.row,self__.column,self__.render_options,G__7998,self__.__extmap,self__.__hash));
});

infierno.sprite.Sprite.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4211__auto__,entry__4212__auto__){
var self__ = this;
var this__4211__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4212__auto__)){
return cljs.core._assoc.call(null,this__4211__auto____$1,cljs.core._nth.call(null,entry__4212__auto__,(0)),cljs.core._nth.call(null,entry__4212__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4211__auto____$1,entry__4212__auto__);
}
});

infierno.sprite.Sprite.prototype.infierno$protocol$Renderable$ = true;

infierno.sprite.Sprite.prototype.infierno$protocol$Renderable$render$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
var dom_id = cljs_uuid.core.make_random.call(null);
var dom_element = infierno.sprite.sprite_template.call(null,dom_id,infierno.sprite.style_options.call(null,new cljs.core.Keyword(null,"render-options","render-options",686799147).cljs$core$IFn$_invoke$arity$1(self__$1)));
dommy.core.append_BANG_.call(null,document.body,dom_element);

return cljs.core.assoc.call(null,self__$1,new cljs.core.Keyword(null,"dom-id","dom-id",-1588236703),dom_id,new cljs.core.Keyword(null,"dom-element","dom-element",-1359955914),dom_element);
});

infierno.sprite.Sprite.cljs$lang$type = true;

infierno.sprite.Sprite.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"infierno.sprite/Sprite");
});

infierno.sprite.Sprite.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"infierno.sprite/Sprite");
});

infierno.sprite.__GT_Sprite = (function __GT_Sprite(spritesheet,row,column,render_options){
return (new infierno.sprite.Sprite(spritesheet,row,column,render_options));
});

infierno.sprite.map__GT_Sprite = (function map__GT_Sprite(G__8000){
return (new infierno.sprite.Sprite(new cljs.core.Keyword(null,"spritesheet","spritesheet",-542003038).cljs$core$IFn$_invoke$arity$1(G__8000),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(G__8000),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(G__8000),new cljs.core.Keyword(null,"render-options","render-options",686799147).cljs$core$IFn$_invoke$arity$1(G__8000),null,cljs.core.dissoc.call(null,G__8000,new cljs.core.Keyword(null,"spritesheet","spritesheet",-542003038),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"render-options","render-options",686799147))));
});

infierno.sprite.make_sprite_BANG_ = (function make_sprite_BANG_(spritesheet,row,column,start_x,start_y){
var options = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),clojure.string.join.call(null,"",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(spritesheet),"px"], null)),new cljs.core.Keyword(null,"height","height",1025178622),clojure.string.join.call(null,"",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(spritesheet),"px"], null)),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),clojure.string.join.call(null,"",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_y,"px"], null)),new cljs.core.Keyword(null,"left","left",-399115937),clojure.string.join.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_x,"px"], null)),new cljs.core.Keyword(null,"background-image","background-image",-1142314704),clojure.string.join.call(null,"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["url(",new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(spritesheet),")"], null)),new cljs.core.Keyword(null,"background-position","background-position",1112702746),clojure.string.join.call(null,"",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",((column - (1)) * new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(spritesheet)),"px ","-",((row - (1)) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(spritesheet)),"px"], null))], null);
return (new infierno.sprite.Sprite(spritesheet,row,column,options));
});
