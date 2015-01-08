// Compiled by ClojureScript 0.0-2411
goog.provide('infierno.bullet');
goog.require('cljs.core');
goog.require('infierno.sprite');
goog.require('infierno.protocol');
goog.require('infierno.sprite');
goog.require('infierno.protocol');
goog.require('clojure.string');
goog.require('clojure.string');
infierno.bullet.friendly_bullets = cljs.core.atom.call(null,[]);
infierno.bullet.enemy_bullets = cljs.core.atom.call(null,[]);

/**
* @constructor
* @param {*} sprite
* @param {*} hostile
* @param {*} dx
* @param {*} dy
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
infierno.bullet.Bullet = (function (sprite,hostile,dx,dy,__meta,__extmap){
this.sprite = sprite;
this.hostile = hostile;
this.dx = dx;
this.dy = dy;
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
return cljs.core._lookup.call(null,this__4206__auto____$1,k__4207__auto__,null);
});

infierno.bullet.Bullet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4208__auto__,k10487,else__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
var G__10489 = (((k10487 instanceof cljs.core.Keyword))?k10487.fqn:null);
switch (G__10489) {
case "dy":
return self__.dy;

break;
case "dx":
return self__.dx;

break;
case "hostile":
return self__.hostile;

break;
case "sprite":
return self__.sprite;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10487,else__4209__auto__);

}
});

infierno.bullet.Bullet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4220__auto__,writer__4221__auto__,opts__4222__auto__){
var self__ = this;
var this__4220__auto____$1 = this;
var pr_pair__4223__auto__ = ((function (this__4220__auto____$1){
return (function (keyval__4224__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4221__auto__,cljs.core.pr_writer,""," ","",opts__4222__auto__,keyval__4224__auto__);
});})(this__4220__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4221__auto__,pr_pair__4223__auto__,"#infierno.bullet.Bullet{",", ","}",opts__4222__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sprite","sprite",172516848),self__.sprite],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hostile","hostile",858836778),self__.hostile],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dx","dx",-381796732),self__.dx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dy","dy",1719547243),self__.dy],null))], null),self__.__extmap));
});

infierno.bullet.Bullet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4204__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
return self__.__meta;
});

infierno.bullet.Bullet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4200__auto__){
var self__ = this;
var this__4200__auto____$1 = this;
return (new infierno.bullet.Bullet(self__.sprite,self__.hostile,self__.dx,self__.dy,self__.__meta,self__.__extmap,self__.__hash));
});

infierno.bullet.Bullet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4210__auto__){
var self__ = this;
var this__4210__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

infierno.bullet.Bullet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4201__auto__){
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

infierno.bullet.Bullet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4202__auto__,other__4203__auto__){
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

infierno.bullet.Bullet.prototype.infierno$protocol$Movable$ = true;

infierno.bullet.Bullet.prototype.infierno$protocol$Movable$move_frame$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return infierno.protocol.move_frame.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(self__$1),new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(self__$1),new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(self__$1));
});

infierno.bullet.Bullet.prototype.infierno$protocol$Movable$out_of_bounds_QMARK_$arity$3 = (function (self,max_x,max_y){
var self__ = this;
var self__$1 = this;
return infierno.protocol.out_of_bounds_QMARK_.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(self__$1),max_x,max_y);
});

infierno.bullet.Bullet.prototype.infierno$protocol$Collidable$ = true;

infierno.bullet.Bullet.prototype.infierno$protocol$Collidable$collides_with$arity$2 = (function (self,character){
var self__ = this;
var self__$1 = this;
return infierno.protocol.collides_with.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(self__$1),new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(character));
});

infierno.bullet.Bullet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4215__auto__,k__4216__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dx","dx",-381796732),null,new cljs.core.Keyword(null,"hostile","hostile",858836778),null,new cljs.core.Keyword(null,"dy","dy",1719547243),null,new cljs.core.Keyword(null,"sprite","sprite",172516848),null], null), null),k__4216__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4215__auto____$1),self__.__meta),k__4216__auto__);
} else {
return (new infierno.bullet.Bullet(self__.sprite,self__.hostile,self__.dx,self__.dy,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4216__auto__)),null));
}
});

infierno.bullet.Bullet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4213__auto__,k__4214__auto__,G__10486){
var self__ = this;
var this__4213__auto____$1 = this;
var pred__10490 = cljs.core.keyword_identical_QMARK_;
var expr__10491 = k__4214__auto__;
if(cljs.core.truth_(pred__10490.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848),expr__10491))){
return (new infierno.bullet.Bullet(G__10486,self__.hostile,self__.dx,self__.dy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10490.call(null,new cljs.core.Keyword(null,"hostile","hostile",858836778),expr__10491))){
return (new infierno.bullet.Bullet(self__.sprite,G__10486,self__.dx,self__.dy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10490.call(null,new cljs.core.Keyword(null,"dx","dx",-381796732),expr__10491))){
return (new infierno.bullet.Bullet(self__.sprite,self__.hostile,G__10486,self__.dy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10490.call(null,new cljs.core.Keyword(null,"dy","dy",1719547243),expr__10491))){
return (new infierno.bullet.Bullet(self__.sprite,self__.hostile,self__.dx,G__10486,self__.__meta,self__.__extmap,null));
} else {
return (new infierno.bullet.Bullet(self__.sprite,self__.hostile,self__.dx,self__.dy,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4214__auto__,G__10486),null));
}
}
}
}
});

infierno.bullet.Bullet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4218__auto__){
var self__ = this;
var this__4218__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sprite","sprite",172516848),self__.sprite],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hostile","hostile",858836778),self__.hostile],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dx","dx",-381796732),self__.dx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dy","dy",1719547243),self__.dy],null))], null),self__.__extmap));
});

infierno.bullet.Bullet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4205__auto__,G__10486){
var self__ = this;
var this__4205__auto____$1 = this;
return (new infierno.bullet.Bullet(self__.sprite,self__.hostile,self__.dx,self__.dy,G__10486,self__.__extmap,self__.__hash));
});

infierno.bullet.Bullet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4211__auto__,entry__4212__auto__){
var self__ = this;
var this__4211__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4212__auto__)){
return cljs.core._assoc.call(null,this__4211__auto____$1,cljs.core._nth.call(null,entry__4212__auto__,(0)),cljs.core._nth.call(null,entry__4212__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4211__auto____$1,entry__4212__auto__);
}
});

infierno.bullet.Bullet.prototype.infierno$protocol$Renderable$ = true;

infierno.bullet.Bullet.prototype.infierno$protocol$Renderable$render_BANG_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return cljs.core.assoc.call(null,self__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848),infierno.protocol.render_BANG_.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(self__$1)));
});

infierno.bullet.Bullet.prototype.infierno$protocol$Renderable$hide_BANG_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return cljs.core.assoc.call(null,self__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848),infierno.protocol.hide_BANG_.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(self__$1)));
});

infierno.bullet.Bullet.cljs$lang$type = true;

infierno.bullet.Bullet.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"infierno.bullet/Bullet");
});

infierno.bullet.Bullet.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"infierno.bullet/Bullet");
});

infierno.bullet.__GT_Bullet = (function __GT_Bullet(sprite,hostile,dx,dy){
return (new infierno.bullet.Bullet(sprite,hostile,dx,dy));
});

infierno.bullet.map__GT_Bullet = (function map__GT_Bullet(G__10488){
return (new infierno.bullet.Bullet(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(G__10488),new cljs.core.Keyword(null,"hostile","hostile",858836778).cljs$core$IFn$_invoke$arity$1(G__10488),new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(G__10488),new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(G__10488),null,cljs.core.dissoc.call(null,G__10488,new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"hostile","hostile",858836778),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"dy","dy",1719547243))));
});

infierno.bullet.spawn_bullet_BANG_ = (function spawn_bullet_BANG_(p__10494){
var map__10496 = p__10494;
var map__10496__$1 = ((cljs.core.seq_QMARK_.call(null,map__10496))?cljs.core.apply.call(null,cljs.core.hash_map,map__10496):map__10496);
var dy = cljs.core.get.call(null,map__10496__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
var dx = cljs.core.get.call(null,map__10496__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var py = cljs.core.get.call(null,map__10496__$1,new cljs.core.Keyword(null,"py","py",1397985916));
var px = cljs.core.get.call(null,map__10496__$1,new cljs.core.Keyword(null,"px","px",281329899));
var sprite_y = cljs.core.get.call(null,map__10496__$1,new cljs.core.Keyword(null,"sprite-y","sprite-y",-191628319));
var sprite_x = cljs.core.get.call(null,map__10496__$1,new cljs.core.Keyword(null,"sprite-x","sprite-x",1115150190));
var spritesheet = cljs.core.get.call(null,map__10496__$1,new cljs.core.Keyword(null,"spritesheet","spritesheet",-542003038));
var dom_parent = cljs.core.get.call(null,map__10496__$1,new cljs.core.Keyword(null,"dom-parent","dom-parent",-1899682061));
var team = cljs.core.get.call(null,map__10496__$1,new cljs.core.Keyword(null,"team","team",1355747699));
var coll = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"enemy","enemy",-956472047),team))?cljs.core.deref.call(null,infierno.bullet.enemy_bullets):cljs.core.deref.call(null,infierno.bullet.friendly_bullets));
var sprite = infierno.protocol.render_BANG_.call(null,infierno.sprite.make_sprite_BANG_.call(null,dom_parent,spritesheet,sprite_x,sprite_y,px,py));
var bullet = (new infierno.bullet.Bullet(sprite,true,dx,dy));
return coll.push(bullet);
});
infierno.bullet.reap_bullets_BANG_ = (function reap_bullets_BANG_(max_x,max_y){
var seq__10503 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [infierno.bullet.friendly_bullets,infierno.bullet.enemy_bullets], null));
var chunk__10505 = null;
var count__10506 = (0);
var i__10507 = (0);
while(true){
if((i__10507 < count__10506)){
var coll_atom = cljs.core._nth.call(null,chunk__10505,i__10507);
var coll_10509 = cljs.core.deref.call(null,coll_atom);
if((coll_10509.length === (0))){
} else {
var new_array_10510 = [];
var n_10511 = (0);
while(true){
var bullet_10512 = (coll_10509[n_10511]);
if(cljs.core.truth_(infierno.protocol.out_of_bounds_QMARK_.call(null,bullet_10512,max_x,max_y))){
infierno.protocol.hide_BANG_.call(null,bullet_10512);
} else {
new_array_10510.push(bullet_10512);
}

if((n_10511 < (coll_10509.length - (1)))){
var G__10513 = (n_10511 + (1));
n_10511 = G__10513;
continue;
} else {
}
break;
}

cljs.core.reset_BANG_.call(null,coll_atom,new_array_10510);
}

var G__10514 = seq__10503;
var G__10515 = chunk__10505;
var G__10516 = count__10506;
var G__10517 = (i__10507 + (1));
seq__10503 = G__10514;
chunk__10505 = G__10515;
count__10506 = G__10516;
i__10507 = G__10517;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__10503);
if(temp__4126__auto__){
var seq__10503__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10503__$1)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,seq__10503__$1);
var G__10518 = cljs.core.chunk_rest.call(null,seq__10503__$1);
var G__10519 = c__4390__auto__;
var G__10520 = cljs.core.count.call(null,c__4390__auto__);
var G__10521 = (0);
seq__10503 = G__10518;
chunk__10505 = G__10519;
count__10506 = G__10520;
i__10507 = G__10521;
continue;
} else {
var coll_atom = cljs.core.first.call(null,seq__10503__$1);
var coll_10522 = cljs.core.deref.call(null,coll_atom);
if((coll_10522.length === (0))){
} else {
var new_array_10523 = [];
var n_10524 = (0);
while(true){
var bullet_10525 = (coll_10522[n_10524]);
if(cljs.core.truth_(infierno.protocol.out_of_bounds_QMARK_.call(null,bullet_10525,max_x,max_y))){
infierno.protocol.hide_BANG_.call(null,bullet_10525);
} else {
new_array_10523.push(bullet_10525);
}

if((n_10524 < (coll_10522.length - (1)))){
var G__10526 = (n_10524 + (1));
n_10524 = G__10526;
continue;
} else {
}
break;
}

cljs.core.reset_BANG_.call(null,coll_atom,new_array_10523);
}

var G__10527 = cljs.core.next.call(null,seq__10503__$1);
var G__10528 = null;
var G__10529 = (0);
var G__10530 = (0);
seq__10503 = G__10527;
chunk__10505 = G__10528;
count__10506 = G__10529;
i__10507 = G__10530;
continue;
}
} else {
return null;
}
}
break;
}
});
