// Compiled by ClojureScript 0.0-2411
goog.provide('infierno.bullet');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');

infierno.bullet.Movable = (function (){var obj9492 = {};
return obj9492;
})();

infierno.bullet.move_frame = (function move_frame(self){
if((function (){var and__3596__auto__ = self;
if(and__3596__auto__){
return self.infierno$bullet$Movable$move_frame$arity$1;
} else {
return and__3596__auto__;
}
})()){
return self.infierno$bullet$Movable$move_frame$arity$1(self);
} else {
var x__4247__auto__ = (((self == null))?null:self);
return (function (){var or__3608__auto__ = (infierno.bullet.move_frame[(function (){var G__9496 = x__4247__auto__;
return goog.typeOf(G__9496);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (infierno.bullet.move_frame["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("Movable.move-frame",self);
}
}
})().call(null,self);
}
});


infierno.bullet.Collidable = (function (){var obj9498 = {};
return obj9498;
})();

infierno.bullet.collides_with = (function collides_with(self,object){
if((function (){var and__3596__auto__ = self;
if(and__3596__auto__){
return self.infierno$bullet$Collidable$collides_with$arity$2;
} else {
return and__3596__auto__;
}
})()){
return self.infierno$bullet$Collidable$collides_with$arity$2(self,object);
} else {
var x__4247__auto__ = (((self == null))?null:self);
return (function (){var or__3608__auto__ = (infierno.bullet.collides_with[(function (){var G__9502 = x__4247__auto__;
return goog.typeOf(G__9502);
})()]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (infierno.bullet.collides_with["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol("Collidable.collides-with",self);
}
}
})().call(null,self,object);
}
});

infierno.bullet.bounding = (function bounding(dom_element){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,(function (){var G__9507 = dom_element.style.top;
return parseFloat(G__9507);
})(),cljs.core.constant$keyword$21,(function (){var G__9508 = dom_element.style.left;
return parseFloat(G__9508);
})(),cljs.core.constant$keyword$22,(function (){var G__9509 = dom_element.style.width;
return parseFloat(G__9509);
})(),cljs.core.constant$keyword$23,(function (){var G__9510 = dom_element.style.height;
return parseFloat(G__9510);
})()], null);
});
infierno.bullet.add_px = (function add_px(current_value,amount){
var new_val_int = ((function (){var G__9512 = current_value;
return parseFloat(G__9512);
})() + amount);
return (new_val_int + "px");
});

/**
* @constructor
* @param {*} sprite
* @param {*} hostile
* @param {*} vector_x
* @param {*} vector_y
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
infierno.bullet.Bullet = (function (sprite,hostile,vector_x,vector_y,__meta,__extmap){
this.sprite = sprite;
this.hostile = hostile;
this.vector_x = vector_x;
this.vector_y = vector_y;
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
infierno.bullet.Bullet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4206__auto__,k__4207__auto__){
var self__ = this;
var this__4206__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4206__auto____$1,k__4207__auto__,null);
});

infierno.bullet.Bullet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4208__auto__,k9514,else__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
var G__9516 = (((k9514 instanceof cljs.core.Keyword))?k9514.fqn:null);
switch (G__9516) {
case "vector-y":
return self__.vector_y;

break;
case "vector-x":
return self__.vector_x;

break;
case "hostile":
return self__.hostile;

break;
case "sprite":
return self__.sprite;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k9514,else__4209__auto__);

}
});

infierno.bullet.Bullet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4220__auto__,writer__4221__auto__,opts__4222__auto__){
var self__ = this;
var this__4220__auto____$1 = this;
var pr_pair__4223__auto__ = ((function (this__4220__auto____$1){
return (function (keyval__4224__auto__){
return cljs.core.pr_sequential_writer(writer__4221__auto__,cljs.core.pr_writer,""," ","",opts__4222__auto__,keyval__4224__auto__);
});})(this__4220__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4221__auto__,pr_pair__4223__auto__,"#infierno.bullet.Bullet{",", ","}",opts__4222__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$24,self__.sprite],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$25,self__.hostile],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$26,self__.vector_x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$27,self__.vector_y],null))], null),self__.__extmap));
});

infierno.bullet.Bullet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4204__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
return self__.__meta;
});

infierno.bullet.Bullet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4200__auto__){
var self__ = this;
var this__4200__auto____$1 = this;
return (new infierno.bullet.Bullet(self__.sprite,self__.hostile,self__.vector_x,self__.vector_y,self__.__meta,self__.__extmap,self__.__hash));
});

infierno.bullet.Bullet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4210__auto__){
var self__ = this;
var this__4210__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

infierno.bullet.Bullet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4201__auto__){
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

infierno.bullet.Bullet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4202__auto__,other__4203__auto__){
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

infierno.bullet.Bullet.prototype.infierno$bullet$Movable$ = true;

infierno.bullet.Bullet.prototype.infierno$bullet$Movable$move_frame$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
var sprite__$1 = cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(self__$1);
var current_top = cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(sprite__$1).style.top;
var current_left = cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(sprite__$1).style.left;
cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(sprite__$1).style.setProperty("top",infierno.bullet.add_px(current_top,cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(self__$1)));

return cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(sprite__$1).style.setProperty("left",infierno.bullet.add_px(current_left,cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(self__$1)));
});

infierno.bullet.Bullet.prototype.infierno$bullet$Collidable$ = true;

infierno.bullet.Bullet.prototype.infierno$bullet$Collidable$collides_with$arity$2 = (function (self,sprite__$1){
var self__ = this;
var self__$1 = this;
var self_box = infierno.bullet.bounding(cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(self__$1)));
var object_box = infierno.bullet.bounding(cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(sprite__$1));
return !(((cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(object_box) > (cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(self_box) + cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(self_box)))) || (((cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(object_box) + cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(object_box)) < cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(self_box))) || ((cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(object_box) > (cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(self_box) + cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(self_box)))) || (((cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(object_box) + cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(object_box)) < cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(self_box))));
});

infierno.bullet.Bullet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4215__auto__,k__4216__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$25,null,cljs.core.constant$keyword$27,null,cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$26,null], null), null),k__4216__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4215__auto____$1),self__.__meta),k__4216__auto__);
} else {
return (new infierno.bullet.Bullet(self__.sprite,self__.hostile,self__.vector_x,self__.vector_y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4216__auto__)),null));
}
});

infierno.bullet.Bullet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4213__auto__,k__4214__auto__,G__9513){
var self__ = this;
var this__4213__auto____$1 = this;
var pred__9517 = cljs.core.keyword_identical_QMARK_;
var expr__9518 = k__4214__auto__;
if(cljs.core.truth_((function (){var G__9520 = cljs.core.constant$keyword$24;
var G__9521 = expr__9518;
return (pred__9517.cljs$core$IFn$_invoke$arity$2 ? pred__9517.cljs$core$IFn$_invoke$arity$2(G__9520,G__9521) : pred__9517.call(null,G__9520,G__9521));
})())){
return (new infierno.bullet.Bullet(G__9513,self__.hostile,self__.vector_x,self__.vector_y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__9522 = cljs.core.constant$keyword$25;
var G__9523 = expr__9518;
return (pred__9517.cljs$core$IFn$_invoke$arity$2 ? pred__9517.cljs$core$IFn$_invoke$arity$2(G__9522,G__9523) : pred__9517.call(null,G__9522,G__9523));
})())){
return (new infierno.bullet.Bullet(self__.sprite,G__9513,self__.vector_x,self__.vector_y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__9524 = cljs.core.constant$keyword$26;
var G__9525 = expr__9518;
return (pred__9517.cljs$core$IFn$_invoke$arity$2 ? pred__9517.cljs$core$IFn$_invoke$arity$2(G__9524,G__9525) : pred__9517.call(null,G__9524,G__9525));
})())){
return (new infierno.bullet.Bullet(self__.sprite,self__.hostile,G__9513,self__.vector_y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__9526 = cljs.core.constant$keyword$27;
var G__9527 = expr__9518;
return (pred__9517.cljs$core$IFn$_invoke$arity$2 ? pred__9517.cljs$core$IFn$_invoke$arity$2(G__9526,G__9527) : pred__9517.call(null,G__9526,G__9527));
})())){
return (new infierno.bullet.Bullet(self__.sprite,self__.hostile,self__.vector_x,G__9513,self__.__meta,self__.__extmap,null));
} else {
return (new infierno.bullet.Bullet(self__.sprite,self__.hostile,self__.vector_x,self__.vector_y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4214__auto__,G__9513),null));
}
}
}
}
});

infierno.bullet.Bullet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4218__auto__){
var self__ = this;
var this__4218__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$24,self__.sprite],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$25,self__.hostile],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$26,self__.vector_x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$27,self__.vector_y],null))], null),self__.__extmap));
});

infierno.bullet.Bullet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4205__auto__,G__9513){
var self__ = this;
var this__4205__auto____$1 = this;
return (new infierno.bullet.Bullet(self__.sprite,self__.hostile,self__.vector_x,self__.vector_y,G__9513,self__.__extmap,self__.__hash));
});

infierno.bullet.Bullet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4211__auto__,entry__4212__auto__){
var self__ = this;
var this__4211__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4212__auto__)){
return cljs.core._assoc(this__4211__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4212__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4212__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4211__auto____$1,entry__4212__auto__);
}
});

infierno.bullet.Bullet.cljs$lang$type = true;

infierno.bullet.Bullet.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"infierno.bullet/Bullet");
});

infierno.bullet.Bullet.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"infierno.bullet/Bullet");
});

infierno.bullet.__GT_Bullet = (function __GT_Bullet(sprite,hostile,vector_x,vector_y){
return (new infierno.bullet.Bullet(sprite,hostile,vector_x,vector_y));
});

infierno.bullet.map__GT_Bullet = (function map__GT_Bullet(G__9515){
return (new infierno.bullet.Bullet(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(G__9515),cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(G__9515),cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(G__9515),cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(G__9515),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__9515,cljs.core.constant$keyword$24,cljs.core.array_seq([cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27], 0))));
});

