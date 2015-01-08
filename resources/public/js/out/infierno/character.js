// Compiled by ClojureScript 0.0-2411
goog.provide('infierno.character');
goog.require('cljs.core');
goog.require('infierno.protocol');
goog.require('infierno.protocol');
infierno.character.shot_fns = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);

/**
* @constructor
* @param {*} sprite
* @param {*} team
* @param {*} speed
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
infierno.character.Character = (function (sprite,team,speed,__meta,__extmap){
this.sprite = sprite;
this.team = team;
this.speed = speed;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
infierno.character.Character.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4206__auto__,k__4207__auto__){
var self__ = this;
var this__4206__auto____$1 = this;
return cljs.core._lookup.call(null,this__4206__auto____$1,k__4207__auto__,null);
});

infierno.character.Character.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4208__auto__,k12014,else__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
var G__12016 = (((k12014 instanceof cljs.core.Keyword))?k12014.fqn:null);
switch (G__12016) {
case "speed":
return self__.speed;

break;
case "team":
return self__.team;

break;
case "sprite":
return self__.sprite;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12014,else__4209__auto__);

}
});

infierno.character.Character.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4220__auto__,writer__4221__auto__,opts__4222__auto__){
var self__ = this;
var this__4220__auto____$1 = this;
var pr_pair__4223__auto__ = ((function (this__4220__auto____$1){
return (function (keyval__4224__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4221__auto__,cljs.core.pr_writer,""," ","",opts__4222__auto__,keyval__4224__auto__);
});})(this__4220__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4221__auto__,pr_pair__4223__auto__,"#infierno.character.Character{",", ","}",opts__4222__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sprite","sprite",172516848),self__.sprite],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"team","team",1355747699),self__.team],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

infierno.character.Character.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4204__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
return self__.__meta;
});

infierno.character.Character.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4200__auto__){
var self__ = this;
var this__4200__auto____$1 = this;
return (new infierno.character.Character(self__.sprite,self__.team,self__.speed,self__.__meta,self__.__extmap,self__.__hash));
});

infierno.character.Character.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4210__auto__){
var self__ = this;
var this__4210__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

infierno.character.Character.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4201__auto__){
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

infierno.character.Character.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4202__auto__,other__4203__auto__){
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

infierno.character.Character.prototype.infierno$protocol$Movable$ = true;

infierno.character.Character.prototype.infierno$protocol$Movable$move_frame$arity$3 = (function (self,dx,dy){
var self__ = this;
var self__$1 = this;
return infierno.protocol.move_frame.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(self__$1),dx,dy);
});

infierno.character.Character.prototype.infierno$protocol$Movable$out_of_bounds_QMARK_$arity$3 = (function (self,max_x,max_y){
var self__ = this;
var self__$1 = this;
return infierno.protocol.out_of_bounds_QMARK_.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(self__$1),max_x,max_y);
});

infierno.character.Character.prototype.infierno$protocol$Collidable$ = true;

infierno.character.Character.prototype.infierno$protocol$Collidable$collides_with$arity$2 = (function (self,bullet){
var self__ = this;
var self__$1 = this;
return infierno.protocol.collides_with.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(self__$1),new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(bullet));
});

infierno.character.Character.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4215__auto__,k__4216__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"speed","speed",1257663751),null,new cljs.core.Keyword(null,"sprite","sprite",172516848),null,new cljs.core.Keyword(null,"team","team",1355747699),null], null), null),k__4216__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4215__auto____$1),self__.__meta),k__4216__auto__);
} else {
return (new infierno.character.Character(self__.sprite,self__.team,self__.speed,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4216__auto__)),null));
}
});

infierno.character.Character.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4213__auto__,k__4214__auto__,G__12013){
var self__ = this;
var this__4213__auto____$1 = this;
var pred__12017 = cljs.core.keyword_identical_QMARK_;
var expr__12018 = k__4214__auto__;
if(cljs.core.truth_(pred__12017.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848),expr__12018))){
return (new infierno.character.Character(G__12013,self__.team,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12017.call(null,new cljs.core.Keyword(null,"team","team",1355747699),expr__12018))){
return (new infierno.character.Character(self__.sprite,G__12013,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12017.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__12018))){
return (new infierno.character.Character(self__.sprite,self__.team,G__12013,self__.__meta,self__.__extmap,null));
} else {
return (new infierno.character.Character(self__.sprite,self__.team,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4214__auto__,G__12013),null));
}
}
}
});

infierno.character.Character.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4218__auto__){
var self__ = this;
var this__4218__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sprite","sprite",172516848),self__.sprite],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"team","team",1355747699),self__.team],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

infierno.character.Character.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4205__auto__,G__12013){
var self__ = this;
var this__4205__auto____$1 = this;
return (new infierno.character.Character(self__.sprite,self__.team,self__.speed,G__12013,self__.__extmap,self__.__hash));
});

infierno.character.Character.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4211__auto__,entry__4212__auto__){
var self__ = this;
var this__4211__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4212__auto__)){
return cljs.core._assoc.call(null,this__4211__auto____$1,cljs.core._nth.call(null,entry__4212__auto__,(0)),cljs.core._nth.call(null,entry__4212__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4211__auto____$1,entry__4212__auto__);
}
});

infierno.character.Character.prototype.infierno$protocol$Controllable$ = true;

infierno.character.Character.prototype.infierno$protocol$Controllable$control_move_BANG_$arity$4 = (function (self,input,max_x,max_y){
var self__ = this;
var self__$1 = this;
var dx = (new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(self__$1) * new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(input));
var dy = (new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(self__$1) * new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(input));
var width = parseFloat(new cljs.core.Keyword(null,"dom-element","dom-element",-1359955914).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(self__$1)).style.width);
var height = parseFloat(new cljs.core.Keyword(null,"dom-element","dom-element",-1359955914).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(self__$1)).style.height);
var current_x = parseFloat(new cljs.core.Keyword(null,"dom-element","dom-element",-1359955914).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(self__$1)).style.left);
var current_y = parseFloat(new cljs.core.Keyword(null,"dom-element","dom-element",-1359955914).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(self__$1)).style.top);
var actual_dx = (((dx > (0)))?(function (){var x__3927__auto__ = dx;
var y__3928__auto__ = ((max_x - width) - current_x);
return ((x__3927__auto__ < y__3928__auto__) ? x__3927__auto__ : y__3928__auto__);
})():(function (){var x__3920__auto__ = dx;
var y__3921__auto__ = ((-1) * current_x);
return ((x__3920__auto__ > y__3921__auto__) ? x__3920__auto__ : y__3921__auto__);
})());
var actual_dy = (((dy > (0)))?(function (){var x__3927__auto__ = dy;
var y__3928__auto__ = ((max_y - height) - current_y);
return ((x__3927__auto__ < y__3928__auto__) ? x__3927__auto__ : y__3928__auto__);
})():(function (){var x__3920__auto__ = dy;
var y__3921__auto__ = ((-1) * current_y);
return ((x__3920__auto__ > y__3921__auto__) ? x__3920__auto__ : y__3921__auto__);
})());
return infierno.protocol.move_frame.call(null,self__$1,actual_dx,actual_dy);
});

infierno.character.Character.prototype.infierno$protocol$Controllable$register_shot_fn_BANG_$arity$2 = (function (self,shot_fn){
var self__ = this;
var self__$1 = this;
return cljs.core.swap_BANG_.call(null,infierno.character.shot_fns,cljs.core.assoc,self__$1,shot_fn);
});

infierno.character.Character.prototype.infierno$protocol$Controllable$shoot_BANG_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
var shot_fn = cljs.core.deref.call(null,infierno.character.shot_fns).call(null,self__$1);
var top = parseFloat(new cljs.core.Keyword(null,"dom-element","dom-element",-1359955914).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(self__$1)).style.top);
var left = parseFloat(new cljs.core.Keyword(null,"dom-element","dom-element",-1359955914).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(self__$1)).style.left);
var width = parseFloat(new cljs.core.Keyword(null,"dom-element","dom-element",-1359955914).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(self__$1)).style.width);
var center_x = (left + (width / (2)));
return shot_fn.call(null,self__$1,top,center_x);
});

infierno.character.Character.prototype.infierno$protocol$Renderable$ = true;

infierno.character.Character.prototype.infierno$protocol$Renderable$render_BANG_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return cljs.core.assoc.call(null,self__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848),infierno.protocol.render_BANG_.call(null,self__.sprite));
});

infierno.character.Character.prototype.infierno$protocol$Renderable$hide_BANG_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return cljs.core.assoc.call(null,self__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848),infierno.protocol.hide_BANG_.call(null,self__.sprite));
});

infierno.character.Character.cljs$lang$type = true;

infierno.character.Character.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"infierno.character/Character");
});

infierno.character.Character.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"infierno.character/Character");
});

infierno.character.__GT_Character = (function __GT_Character(sprite,team,speed){
return (new infierno.character.Character(sprite,team,speed));
});

infierno.character.map__GT_Character = (function map__GT_Character(G__12015){
return (new infierno.character.Character(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(G__12015),new cljs.core.Keyword(null,"team","team",1355747699).cljs$core$IFn$_invoke$arity$1(G__12015),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__12015),null,cljs.core.dissoc.call(null,G__12015,new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"speed","speed",1257663751))));
});

