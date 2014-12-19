// Compiled by ClojureScript 0.0-2411
goog.provide('infierno.main');
goog.require('cljs.core');
goog.require('infierno.bullet');
goog.require('infierno.character');
goog.require('infierno.sprite');
goog.require('infierno.protocol');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('infierno.protocol');
goog.require('infierno.character');
goog.require('infierno.bullet');
goog.require('infierno.controller');
goog.require('infierno.controller');
goog.require('infierno.sprite');
infierno.main.renders = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
infierno.main.sprites = (new infierno.sprite.Spritesheet("img/test-spritesheet.png",(32),(32),(8),(8)));
infierno.main.rand_float = (function rand_float(max){
return ((((0.5 < Math.random()))?(1):(-1)) * (max * Math.random()));
});
infierno.main.all_bullets = cljs.core.to_array.call(null,(function (){var iter__4359__auto__ = (function iter__8016(s__8017){
return (new cljs.core.LazySeq(null,(function (){
var s__8017__$1 = s__8017;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8017__$1);
if(temp__4126__auto__){
var s__8017__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8017__$2)){
var c__4357__auto__ = cljs.core.chunk_first.call(null,s__8017__$2);
var size__4358__auto__ = cljs.core.count.call(null,c__4357__auto__);
var b__8019 = cljs.core.chunk_buffer.call(null,size__4358__auto__);
if((function (){var i__8018 = (0);
while(true){
if((i__8018 < size__4358__auto__)){
var n = cljs.core._nth.call(null,c__4357__auto__,i__8018);
cljs.core.chunk_append.call(null,b__8019,(function (){var sprite = infierno.protocol.render.call(null,infierno.sprite.make_sprite_BANG_.call(null,infierno.main.sprites,(8),(5),((5) * n),(0)));
return (new infierno.bullet.Bullet(sprite,true,infierno.main.rand_float.call(null,(5)),Math.abs(infierno.main.rand_float.call(null,(5)))));
})());

var G__8020 = (i__8018 + (1));
i__8018 = G__8020;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8019),iter__8016.call(null,cljs.core.chunk_rest.call(null,s__8017__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8019),null);
}
} else {
var n = cljs.core.first.call(null,s__8017__$2);
return cljs.core.cons.call(null,(function (){var sprite = infierno.protocol.render.call(null,infierno.sprite.make_sprite_BANG_.call(null,infierno.main.sprites,(8),(5),((5) * n),(0)));
return (new infierno.bullet.Bullet(sprite,true,infierno.main.rand_float.call(null,(5)),Math.abs(infierno.main.rand_float.call(null,(5)))));
})(),iter__8016.call(null,cljs.core.rest.call(null,s__8017__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4359__auto__.call(null,cljs.core.range.call(null,(500)));
})());
infierno.main.player = (new infierno.character.Character(infierno.protocol.render.call(null,infierno.sprite.make_sprite_BANG_.call(null,infierno.main.sprites,(4),(5),(300),(600))),new cljs.core.Keyword(null,"player","player",-97687400)));
infierno.main.move = (function move(player,input){
console.log(player);

return infierno.protocol.move_frame.call(null,player,((5) * new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(input)),((5) * new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(input)));
});
infierno.main.record_frame_completion = (function record_frame_completion(){
return cljs.core.swap_BANG_.call(null,infierno.main.renders,cljs.core.conj,Date.now());
});
infierno.main.log_frame_rate = (function log_frame_rate(){
var in_last_second = (function (ms){
return (Date.now() <= (ms + (1000)));
});
cljs.core.swap_BANG_.call(null,infierno.main.renders,((function (in_last_second){
return (function (p1__8021_SHARP_){
return cljs.core.filter.call(null,in_last_second,p1__8021_SHARP_);
});})(in_last_second))
);

return console.log(cljs.core.count.call(null,cljs.core.deref.call(null,infierno.main.renders)));
});
infierno.main.animate = (function animate(){
infierno.main.record_frame_completion.call(null);

var temp__4126__auto___8022 = infierno.controller.get_input.call(null);
if(cljs.core.truth_(temp__4126__auto___8022)){
var input_8023 = temp__4126__auto___8022;
infierno.main.move.call(null,infierno.main.player,input_8023);
} else {
}

var n_8024 = (0);
while(true){
infierno.protocol.move_frame.call(null,(infierno.main.all_bullets[n_8024]));

if(cljs.core.truth_(infierno.protocol.collides_with.call(null,(infierno.main.all_bullets[n_8024]),infierno.main.player))){
new cljs.core.Keyword(null,"dom-element","dom-element",-1359955914).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(infierno.main.player)).style.setProperty("background-color","red");
} else {
}

if((n_8024 < (infierno.main.all_bullets.length - (1)))){
var G__8025 = (n_8024 + (1));
n_8024 = G__8025;
continue;
} else {
}
break;
}

if((0.05 > Math.random())){
infierno.main.log_frame_rate.call(null);
} else {
}

return window.requestAnimationFrame(animate);
});
infierno.main.animate.call(null);
