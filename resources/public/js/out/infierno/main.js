// Compiled by ClojureScript 0.0-2411
goog.provide('infierno.main');
goog.require('cljs.core');
goog.require('infierno.character');
goog.require('infierno.bullet');
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
infierno.main.dom_parent = document.getElementById("game");
infierno.main.parent_max_x = infierno.main.dom_parent.offsetWidth;
infierno.main.parent_max_y = infierno.main.dom_parent.offsetHeight;
infierno.main.renders = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
infierno.main.sprites = (new infierno.sprite.Spritesheet("img/test-spritesheet.png",(32),(32),(8),(8)));
infierno.main.rand_float = (function rand_float(max){
return ((((0.5 < Math.random()))?(1):(-1)) * (max * Math.random()));
});
infierno.main.player_fire_shot_BANG_ = (function player_fire_shot_BANG_(player,top,center_x){
var seq__12305 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(0),(3)], null));
var chunk__12306 = null;
var count__12307 = (0);
var i__12308 = (0);
while(true){
if((i__12308 < count__12307)){
var dx = cljs.core._nth.call(null,chunk__12306,i__12308);
infierno.bullet.spawn_bullet_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sprite-y","sprite-y",-191628319),new cljs.core.Keyword(null,"spritesheet","spritesheet",-542003038),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"sprite-x","sprite-x",1115150190),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"dom-parent","dom-parent",-1899682061),new cljs.core.Keyword(null,"py","py",1397985916)],[(7),infierno.main.sprites,dx,(center_x - (16)),(-15),(5),new cljs.core.Keyword(null,"player","player",-97687400),infierno.main.dom_parent,(top - (16))]));

var G__12309 = seq__12305;
var G__12310 = chunk__12306;
var G__12311 = count__12307;
var G__12312 = (i__12308 + (1));
seq__12305 = G__12309;
chunk__12306 = G__12310;
count__12307 = G__12311;
i__12308 = G__12312;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12305);
if(temp__4126__auto__){
var seq__12305__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12305__$1)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,seq__12305__$1);
var G__12313 = cljs.core.chunk_rest.call(null,seq__12305__$1);
var G__12314 = c__4390__auto__;
var G__12315 = cljs.core.count.call(null,c__4390__auto__);
var G__12316 = (0);
seq__12305 = G__12313;
chunk__12306 = G__12314;
count__12307 = G__12315;
i__12308 = G__12316;
continue;
} else {
var dx = cljs.core.first.call(null,seq__12305__$1);
infierno.bullet.spawn_bullet_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sprite-y","sprite-y",-191628319),new cljs.core.Keyword(null,"spritesheet","spritesheet",-542003038),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"sprite-x","sprite-x",1115150190),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"dom-parent","dom-parent",-1899682061),new cljs.core.Keyword(null,"py","py",1397985916)],[(7),infierno.main.sprites,dx,(center_x - (16)),(-15),(5),new cljs.core.Keyword(null,"player","player",-97687400),infierno.main.dom_parent,(top - (16))]));

var G__12317 = cljs.core.next.call(null,seq__12305__$1);
var G__12318 = null;
var G__12319 = (0);
var G__12320 = (0);
seq__12305 = G__12317;
chunk__12306 = G__12318;
count__12307 = G__12319;
i__12308 = G__12320;
continue;
}
} else {
return null;
}
}
break;
}
});
infierno.main.player = (new infierno.character.Character(infierno.protocol.render_BANG_.call(null,infierno.sprite.make_sprite_BANG_.call(null,infierno.main.dom_parent,infierno.main.sprites,(4),(5),(300),(600))),new cljs.core.Keyword(null,"player","player",-97687400),(5)));
infierno.protocol.register_shot_fn_BANG_.call(null,infierno.main.player,infierno.main.player_fire_shot_BANG_);
infierno.main.record_frame_completion = (function record_frame_completion(){
return cljs.core.swap_BANG_.call(null,infierno.main.renders,cljs.core.conj,Date.now());
});
infierno.main.log_frame_rate = (function log_frame_rate(){
var in_last_second = (function (ms){
return (Date.now() <= (ms + (1000)));
});
cljs.core.swap_BANG_.call(null,infierno.main.renders,((function (in_last_second){
return (function (p1__12321_SHARP_){
return cljs.core.filter.call(null,in_last_second,p1__12321_SHARP_);
});})(in_last_second))
);

return console.log(cljs.core.count.call(null,cljs.core.deref.call(null,infierno.main.renders)));
});
infierno.main.animate = (function animate(){
var seq__12326_12330 = cljs.core.seq.call(null,cljs.core.range.call(null,(2)));
var chunk__12327_12331 = null;
var count__12328_12332 = (0);
var i__12329_12333 = (0);
while(true){
if((i__12329_12333 < count__12328_12332)){
var n_12334 = cljs.core._nth.call(null,chunk__12327_12331,i__12329_12333);
infierno.bullet.spawn_bullet_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sprite-y","sprite-y",-191628319),new cljs.core.Keyword(null,"spritesheet","spritesheet",-542003038),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"sprite-x","sprite-x",1115150190),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"dom-parent","dom-parent",-1899682061),new cljs.core.Keyword(null,"py","py",1397985916)],[(cljs.core.rand_int.call(null,(8)) + (1)),infierno.main.sprites,infierno.main.rand_float.call(null,(5)),infierno.main.rand_float.call(null,(600)),Math.abs(infierno.main.rand_float.call(null,(5))),(cljs.core.rand_int.call(null,(8)) + (1)),new cljs.core.Keyword(null,"enemy","enemy",-956472047),infierno.main.dom_parent,(0)]));

var G__12335 = seq__12326_12330;
var G__12336 = chunk__12327_12331;
var G__12337 = count__12328_12332;
var G__12338 = (i__12329_12333 + (1));
seq__12326_12330 = G__12335;
chunk__12327_12331 = G__12336;
count__12328_12332 = G__12337;
i__12329_12333 = G__12338;
continue;
} else {
var temp__4126__auto___12339 = cljs.core.seq.call(null,seq__12326_12330);
if(temp__4126__auto___12339){
var seq__12326_12340__$1 = temp__4126__auto___12339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12326_12340__$1)){
var c__4390__auto___12341 = cljs.core.chunk_first.call(null,seq__12326_12340__$1);
var G__12342 = cljs.core.chunk_rest.call(null,seq__12326_12340__$1);
var G__12343 = c__4390__auto___12341;
var G__12344 = cljs.core.count.call(null,c__4390__auto___12341);
var G__12345 = (0);
seq__12326_12330 = G__12342;
chunk__12327_12331 = G__12343;
count__12328_12332 = G__12344;
i__12329_12333 = G__12345;
continue;
} else {
var n_12346 = cljs.core.first.call(null,seq__12326_12340__$1);
infierno.bullet.spawn_bullet_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sprite-y","sprite-y",-191628319),new cljs.core.Keyword(null,"spritesheet","spritesheet",-542003038),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"sprite-x","sprite-x",1115150190),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"dom-parent","dom-parent",-1899682061),new cljs.core.Keyword(null,"py","py",1397985916)],[(cljs.core.rand_int.call(null,(8)) + (1)),infierno.main.sprites,infierno.main.rand_float.call(null,(5)),infierno.main.rand_float.call(null,(600)),Math.abs(infierno.main.rand_float.call(null,(5))),(cljs.core.rand_int.call(null,(8)) + (1)),new cljs.core.Keyword(null,"enemy","enemy",-956472047),infierno.main.dom_parent,(0)]));

var G__12347 = cljs.core.next.call(null,seq__12326_12340__$1);
var G__12348 = null;
var G__12349 = (0);
var G__12350 = (0);
seq__12326_12330 = G__12347;
chunk__12327_12331 = G__12348;
count__12328_12332 = G__12349;
i__12329_12333 = G__12350;
continue;
}
} else {
}
}
break;
}

infierno.main.record_frame_completion.call(null);

var temp__4126__auto___12351 = infierno.controller.get_input.call(null);
if(cljs.core.truth_(temp__4126__auto___12351)){
var input_12352 = temp__4126__auto___12351;
infierno.protocol.control_move_BANG_.call(null,infierno.main.player,input_12352,infierno.main.parent_max_x,infierno.main.parent_max_y);

if(cljs.core.truth_(new cljs.core.Keyword(null,"shot","shot",1961298790).cljs$core$IFn$_invoke$arity$1(input_12352))){
infierno.protocol.shoot_BANG_.call(null,infierno.main.player);
} else {
}
} else {
}

if((cljs.core.deref.call(null,infierno.bullet.enemy_bullets).length === (0))){
} else {
var n_12353 = (0);
while(true){
infierno.protocol.move_frame.call(null,(cljs.core.deref.call(null,infierno.bullet.enemy_bullets)[n_12353]));

if(cljs.core.truth_(infierno.protocol.collides_with.call(null,(cljs.core.deref.call(null,infierno.bullet.enemy_bullets)[n_12353]),infierno.main.player))){
new cljs.core.Keyword(null,"dom-element","dom-element",-1359955914).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(infierno.main.player)).style.setProperty("background-color","red");
} else {
}

if((n_12353 < (cljs.core.deref.call(null,infierno.bullet.enemy_bullets).length - (1)))){
var G__12354 = (n_12353 + (1));
n_12353 = G__12354;
continue;
} else {
}
break;
}
}

if((cljs.core.deref.call(null,infierno.bullet.friendly_bullets).length === (0))){
} else {
var n_12355 = (0);
while(true){
infierno.protocol.move_frame.call(null,(cljs.core.deref.call(null,infierno.bullet.friendly_bullets)[n_12355]));

if((n_12355 < (cljs.core.deref.call(null,infierno.bullet.friendly_bullets).length - (1)))){
var G__12356 = (n_12355 + (1));
n_12355 = G__12356;
continue;
} else {
}
break;
}
}

if((0.05 > Math.random())){
infierno.bullet.reap_bullets_BANG_.call(null,infierno.main.parent_max_x,infierno.main.parent_max_y);
} else {
}

return window.requestAnimationFrame(animate);
});
infierno.main.animate.call(null);
