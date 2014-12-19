// Compiled by ClojureScript 0.0-2411
goog.provide('infierno.sprite');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('crate.core');
goog.require('crate.core');
goog.require('cljs_uuid.core');
goog.require('cljs_uuid.core');
goog.require('clojure.string');
goog.require('clojure.string');

infierno.sprite.Renderable = (function (){var obj17587 = {};
return obj17587;
})();

infierno.sprite.render = (function render(self){
if((function (){var and__3596__auto__ = self;
if(and__3596__auto__){
return self.infierno$sprite$Renderable$render$arity$1;
} else {
return and__3596__auto__;
}
})()){
return self.infierno$sprite$Renderable$render$arity$1(self);
} else {
var x__4247__auto__ = (((self == null))?null:self);
return (function (){var or__3608__auto__ = (infierno.sprite.render[(function (){var G__17591 = x__4247__auto__;
return goog.typeOf(G__17591);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (infierno.sprite.render["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("Renderable.render",self);
}
}
})().call(null,self);
}
});


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
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4206__auto____$1,k__4207__auto__,null);
});

infierno.sprite.Spritesheet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4208__auto__,k17593,else__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
var G__17595 = (((k17593 instanceof cljs.core.Keyword))?k17593.fqn:null);
switch (G__17595) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17593,else__4209__auto__);

}
});

infierno.sprite.Spritesheet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4220__auto__,writer__4221__auto__,opts__4222__auto__){
var self__ = this;
var this__4220__auto____$1 = this;
var pr_pair__4223__auto__ = ((function (this__4220__auto____$1){
return (function (keyval__4224__auto__){
return cljs.core.pr_sequential_writer(writer__4221__auto__,cljs.core.pr_writer,""," ","",opts__4222__auto__,keyval__4224__auto__);
});})(this__4220__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4221__auto__,pr_pair__4223__auto__,"#infierno.sprite.Spritesheet{",", ","}",opts__4222__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$57,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$23,self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$58,self__.rows],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$59,self__.columns],null))], null),self__.__extmap));
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
return (5 + cljs.core.count(self__.__extmap));
});

infierno.sprite.Spritesheet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_imap(this__4201__auto____$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

infierno.sprite.Spritesheet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4202__auto__,other__4203__auto__){
var self__ = this;
var this__4202__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3596__auto__ = other__4203__auto__;
if(cljs.core.truth_(and__3596__auto__)){
return ((this__4202__auto____$1.constructor === other__4203__auto__.constructor)) && (cljs.core.equiv_map(this__4202__auto____$1,other__4203__auto__));
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
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$59,null,cljs.core.constant$keyword$22,null,cljs.core.constant$keyword$58,null,cljs.core.constant$keyword$57,null,cljs.core.constant$keyword$23,null], null), null),k__4216__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4215__auto____$1),self__.__meta),k__4216__auto__);
} else {
return (new infierno.sprite.Spritesheet(self__.url,self__.height,self__.width,self__.rows,self__.columns,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4216__auto__)),null));
}
});

infierno.sprite.Spritesheet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4213__auto__,k__4214__auto__,G__17592){
var self__ = this;
var this__4213__auto____$1 = this;
var pred__17596 = cljs.core.keyword_identical_QMARK_;
var expr__17597 = k__4214__auto__;
if(cljs.core.truth_((function (){var G__17599 = cljs.core.constant$keyword$57;
var G__17600 = expr__17597;
return (pred__17596.cljs$core$IFn$_invoke$arity$2 ? pred__17596.cljs$core$IFn$_invoke$arity$2(G__17599,G__17600) : pred__17596.call(null,G__17599,G__17600));
})())){
return (new infierno.sprite.Spritesheet(G__17592,self__.height,self__.width,self__.rows,self__.columns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17601 = cljs.core.constant$keyword$23;
var G__17602 = expr__17597;
return (pred__17596.cljs$core$IFn$_invoke$arity$2 ? pred__17596.cljs$core$IFn$_invoke$arity$2(G__17601,G__17602) : pred__17596.call(null,G__17601,G__17602));
})())){
return (new infierno.sprite.Spritesheet(self__.url,G__17592,self__.width,self__.rows,self__.columns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17603 = cljs.core.constant$keyword$22;
var G__17604 = expr__17597;
return (pred__17596.cljs$core$IFn$_invoke$arity$2 ? pred__17596.cljs$core$IFn$_invoke$arity$2(G__17603,G__17604) : pred__17596.call(null,G__17603,G__17604));
})())){
return (new infierno.sprite.Spritesheet(self__.url,self__.height,G__17592,self__.rows,self__.columns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17605 = cljs.core.constant$keyword$58;
var G__17606 = expr__17597;
return (pred__17596.cljs$core$IFn$_invoke$arity$2 ? pred__17596.cljs$core$IFn$_invoke$arity$2(G__17605,G__17606) : pred__17596.call(null,G__17605,G__17606));
})())){
return (new infierno.sprite.Spritesheet(self__.url,self__.height,self__.width,G__17592,self__.columns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17607 = cljs.core.constant$keyword$59;
var G__17608 = expr__17597;
return (pred__17596.cljs$core$IFn$_invoke$arity$2 ? pred__17596.cljs$core$IFn$_invoke$arity$2(G__17607,G__17608) : pred__17596.call(null,G__17607,G__17608));
})())){
return (new infierno.sprite.Spritesheet(self__.url,self__.height,self__.width,self__.rows,G__17592,self__.__meta,self__.__extmap,null));
} else {
return (new infierno.sprite.Spritesheet(self__.url,self__.height,self__.width,self__.rows,self__.columns,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4214__auto__,G__17592),null));
}
}
}
}
}
});

infierno.sprite.Spritesheet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4218__auto__){
var self__ = this;
var this__4218__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$57,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$23,self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$58,self__.rows],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$59,self__.columns],null))], null),self__.__extmap));
});

infierno.sprite.Spritesheet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4205__auto__,G__17592){
var self__ = this;
var this__4205__auto____$1 = this;
return (new infierno.sprite.Spritesheet(self__.url,self__.height,self__.width,self__.rows,self__.columns,G__17592,self__.__extmap,self__.__hash));
});

infierno.sprite.Spritesheet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4211__auto__,entry__4212__auto__){
var self__ = this;
var this__4211__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4212__auto__)){
return cljs.core._assoc(this__4211__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4212__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4212__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4211__auto____$1,entry__4212__auto__);
}
});

infierno.sprite.Spritesheet.cljs$lang$type = true;

infierno.sprite.Spritesheet.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"infierno.sprite/Spritesheet");
});

infierno.sprite.Spritesheet.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"infierno.sprite/Spritesheet");
});

infierno.sprite.__GT_Spritesheet = (function __GT_Spritesheet(url,height,width,rows,columns){
return (new infierno.sprite.Spritesheet(url,height,width,rows,columns));
});

infierno.sprite.map__GT_Spritesheet = (function map__GT_Spritesheet(G__17594){
return (new infierno.sprite.Spritesheet(cljs.core.constant$keyword$57.cljs$core$IFn$_invoke$arity$1(G__17594),cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(G__17594),cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(G__17594),cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(G__17594),cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(G__17594),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17594,cljs.core.constant$keyword$57,cljs.core.array_seq([cljs.core.constant$keyword$23,cljs.core.constant$keyword$22,cljs.core.constant$keyword$58,cljs.core.constant$keyword$59], 0))));
});

var group__10312__auto___17610 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(crate.core.group_id,cljs.core.inc);
infierno.sprite.sprite_template = ((function (group__10312__auto___17610){
return (function sprite_template(id,style){
var elem__10313__auto__ = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$60,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$47,id,cljs.core.constant$keyword$48,"infierno-sprite",cljs.core.constant$keyword$46,style], null)], null)], 0));
elem__10313__auto__.setAttribute("crateGroup",group__10312__auto___17610);

return elem__10313__auto__;
});})(group__10312__auto___17610))
;

infierno.sprite.sprite_template.prototype._crateGroup = group__10312__auto___17610;
infierno.sprite.style_options = (function style_options(options){
var pairs = (function (){var iter__4359__auto__ = (function iter__17621(s__17622){
return (new cljs.core.LazySeq(null,(function (){
var s__17622__$1 = s__17622;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__17622__$1);
if(temp__4126__auto__){
var s__17622__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17622__$2)){
var c__4357__auto__ = cljs.core.chunk_first(s__17622__$2);
var size__4358__auto__ = cljs.core.count(c__4357__auto__);
var b__17624 = cljs.core.chunk_buffer(size__4358__auto__);
if((function (){var i__17623 = (0);
while(true){
if((i__17623 < size__4358__auto__)){
var vec__17629 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4357__auto__,i__17623);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17629,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17629,(1),null);
cljs.core.chunk_append(b__17624,clojure.string.join.cljs$core$IFn$_invoke$arity$2("",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(option),": ",value,";"], null)));

var G__17631 = (i__17623 + (1));
i__17623 = G__17631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17624),iter__17621(cljs.core.chunk_rest(s__17622__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17624),null);
}
} else {
var vec__17630 = cljs.core.first(s__17622__$2);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17630,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17630,(1),null);
return cljs.core.cons(clojure.string.join.cljs$core$IFn$_invoke$arity$2("",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(option),": ",value,";"], null)),iter__17621(cljs.core.rest(s__17622__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4359__auto__(options);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(pairs);
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
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4206__auto____$1,k__4207__auto__,null);
});

infierno.sprite.Sprite.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4208__auto__,k17633,else__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
var G__17635 = (((k17633 instanceof cljs.core.Keyword))?k17633.fqn:null);
switch (G__17635) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17633,else__4209__auto__);

}
});

infierno.sprite.Sprite.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4220__auto__,writer__4221__auto__,opts__4222__auto__){
var self__ = this;
var this__4220__auto____$1 = this;
var pr_pair__4223__auto__ = ((function (this__4220__auto____$1){
return (function (keyval__4224__auto__){
return cljs.core.pr_sequential_writer(writer__4221__auto__,cljs.core.pr_writer,""," ","",opts__4222__auto__,keyval__4224__auto__);
});})(this__4220__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4221__auto__,pr_pair__4223__auto__,"#infierno.sprite.Sprite{",", ","}",opts__4222__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$61,self__.spritesheet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$62,self__.row],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$10,self__.column],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$63,self__.render_options],null))], null),self__.__extmap));
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
return (4 + cljs.core.count(self__.__extmap));
});

infierno.sprite.Sprite.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_imap(this__4201__auto____$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

infierno.sprite.Sprite.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4202__auto__,other__4203__auto__){
var self__ = this;
var this__4202__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3596__auto__ = other__4203__auto__;
if(cljs.core.truth_(and__3596__auto__)){
return ((this__4202__auto____$1.constructor === other__4203__auto__.constructor)) && (cljs.core.equiv_map(this__4202__auto____$1,other__4203__auto__));
} else {
return and__3596__auto__;
}
})())){
return true;
} else {
return false;
}
});

infierno.sprite.Sprite.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4215__auto__,k__4216__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$61,null,cljs.core.constant$keyword$63,null,cljs.core.constant$keyword$10,null,cljs.core.constant$keyword$62,null], null), null),k__4216__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4215__auto____$1),self__.__meta),k__4216__auto__);
} else {
return (new infierno.sprite.Sprite(self__.spritesheet,self__.row,self__.column,self__.render_options,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4216__auto__)),null));
}
});

infierno.sprite.Sprite.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4213__auto__,k__4214__auto__,G__17632){
var self__ = this;
var this__4213__auto____$1 = this;
var pred__17636 = cljs.core.keyword_identical_QMARK_;
var expr__17637 = k__4214__auto__;
if(cljs.core.truth_((function (){var G__17639 = cljs.core.constant$keyword$61;
var G__17640 = expr__17637;
return (pred__17636.cljs$core$IFn$_invoke$arity$2 ? pred__17636.cljs$core$IFn$_invoke$arity$2(G__17639,G__17640) : pred__17636.call(null,G__17639,G__17640));
})())){
return (new infierno.sprite.Sprite(G__17632,self__.row,self__.column,self__.render_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17641 = cljs.core.constant$keyword$62;
var G__17642 = expr__17637;
return (pred__17636.cljs$core$IFn$_invoke$arity$2 ? pred__17636.cljs$core$IFn$_invoke$arity$2(G__17641,G__17642) : pred__17636.call(null,G__17641,G__17642));
})())){
return (new infierno.sprite.Sprite(self__.spritesheet,G__17632,self__.column,self__.render_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17643 = cljs.core.constant$keyword$10;
var G__17644 = expr__17637;
return (pred__17636.cljs$core$IFn$_invoke$arity$2 ? pred__17636.cljs$core$IFn$_invoke$arity$2(G__17643,G__17644) : pred__17636.call(null,G__17643,G__17644));
})())){
return (new infierno.sprite.Sprite(self__.spritesheet,self__.row,G__17632,self__.render_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17645 = cljs.core.constant$keyword$63;
var G__17646 = expr__17637;
return (pred__17636.cljs$core$IFn$_invoke$arity$2 ? pred__17636.cljs$core$IFn$_invoke$arity$2(G__17645,G__17646) : pred__17636.call(null,G__17645,G__17646));
})())){
return (new infierno.sprite.Sprite(self__.spritesheet,self__.row,self__.column,G__17632,self__.__meta,self__.__extmap,null));
} else {
return (new infierno.sprite.Sprite(self__.spritesheet,self__.row,self__.column,self__.render_options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4214__auto__,G__17632),null));
}
}
}
}
});

infierno.sprite.Sprite.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4218__auto__){
var self__ = this;
var this__4218__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$61,self__.spritesheet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$62,self__.row],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$10,self__.column],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$63,self__.render_options],null))], null),self__.__extmap));
});

infierno.sprite.Sprite.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4205__auto__,G__17632){
var self__ = this;
var this__4205__auto____$1 = this;
return (new infierno.sprite.Sprite(self__.spritesheet,self__.row,self__.column,self__.render_options,G__17632,self__.__extmap,self__.__hash));
});

infierno.sprite.Sprite.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4211__auto__,entry__4212__auto__){
var self__ = this;
var this__4211__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4212__auto__)){
return cljs.core._assoc(this__4211__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4212__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4212__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4211__auto____$1,entry__4212__auto__);
}
});

infierno.sprite.Sprite.prototype.infierno$sprite$Renderable$ = true;

infierno.sprite.Sprite.prototype.infierno$sprite$Renderable$render$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
var dom_id = cljs_uuid.core.make_random();
var dom_element = infierno.sprite.sprite_template(dom_id,infierno.sprite.style_options(cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(self__$1)));
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(document.body,dom_element);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__$1,cljs.core.constant$keyword$64,dom_id,cljs.core.array_seq([cljs.core.constant$keyword$28,dom_element], 0));
});

infierno.sprite.Sprite.cljs$lang$type = true;

infierno.sprite.Sprite.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"infierno.sprite/Sprite");
});

infierno.sprite.Sprite.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"infierno.sprite/Sprite");
});

infierno.sprite.__GT_Sprite = (function __GT_Sprite(spritesheet,row,column,render_options){
return (new infierno.sprite.Sprite(spritesheet,row,column,render_options));
});

infierno.sprite.map__GT_Sprite = (function map__GT_Sprite(G__17634){
return (new infierno.sprite.Sprite(cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(G__17634),cljs.core.constant$keyword$62.cljs$core$IFn$_invoke$arity$1(G__17634),cljs.core.constant$keyword$10.cljs$core$IFn$_invoke$arity$1(G__17634),cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(G__17634),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17634,cljs.core.constant$keyword$61,cljs.core.array_seq([cljs.core.constant$keyword$62,cljs.core.constant$keyword$10,cljs.core.constant$keyword$63], 0))));
});

infierno.sprite.make_sprite_BANG_ = (function make_sprite_BANG_(spritesheet,row,column,start_x,start_y,bg_color){
var options = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$22,clojure.string.join.cljs$core$IFn$_invoke$arity$2("",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(spritesheet),"px"], null)),cljs.core.constant$keyword$23,clojure.string.join.cljs$core$IFn$_invoke$arity$2("",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(spritesheet),"px"], null)),cljs.core.constant$keyword$66,"absolute",cljs.core.constant$keyword$20,clojure.string.join.cljs$core$IFn$_invoke$arity$2("",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_y,"px"], null)),cljs.core.constant$keyword$21,clojure.string.join.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_x,"px"], null)),cljs.core.constant$keyword$69,bg_color,cljs.core.constant$keyword$67,clojure.string.join.cljs$core$IFn$_invoke$arity$2("",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["url(",cljs.core.constant$keyword$57.cljs$core$IFn$_invoke$arity$1(spritesheet),")"], null)),cljs.core.constant$keyword$68,clojure.string.join.cljs$core$IFn$_invoke$arity$2("",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",((column - (1)) * cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(spritesheet)),"px ","-",((row - (1)) * cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(spritesheet)),"px"], null))], null);
return (new infierno.sprite.Sprite(spritesheet,row,column,options));
});
