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
infierno.main.player = (new infierno.character.Character(infierno.protocol.render_BANG_.call(null,infierno.sprite.make_sprite_BANG_.call(null,infierno.main.dom_parent,infierno.main.sprites,(4),(5),(300),(600))),new cljs.core.Keyword(null,"player","player",-97687400),(5)));
infierno.main.record_frame_completion = (function record_frame_completion(){
return cljs.core.swap_BANG_.call(null,infierno.main.renders,cljs.core.conj,Date.now());
});
infierno.main.log_frame_rate = (function log_frame_rate(){
var in_last_second = (function (ms){
return (Date.now() <= (ms + (1000)));
});
cljs.core.swap_BANG_.call(null,infierno.main.renders,((function (in_last_second){
return (function (p1__10990_SHARP_){
return cljs.core.filter.call(null,in_last_second,p1__10990_SHARP_);
});})(in_last_second))
);

return console.log(cljs.core.count.call(null,cljs.core.deref.call(null,infierno.main.renders)));
});
infierno.main.animate = (function animate(){
var seq__10995_10999 = cljs.core.seq.call(null,cljs.core.range.call(null,(2)));
var chunk__10996_11000 = null;
var count__10997_11001 = (0);
var i__10998_11002 = (0);
while(true){
if((i__10998_11002 < count__10997_11001)){
var n_11003 = cljs.core._nth.call(null,chunk__10996_11000,i__10998_11002);
infierno.bullet.spawn_bullet_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sprite-y","sprite-y",-191628319),new cljs.core.Keyword(null,"spritesheet","spritesheet",-542003038),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"sprite-x","sprite-x",1115150190),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"dom-parent","dom-parent",-1899682061),new cljs.core.Keyword(null,"py","py",1397985916)],[(cljs.core.rand_int.call(null,(8)) + (1)),infierno.main.sprites,infierno.main.rand_float.call(null,(5)),infierno.main.rand_float.call(null,(600)),Math.abs(infierno.main.rand_float.call(null,(5))),(cljs.core.rand_int.call(null,(8)) + (1)),new cljs.core.Keyword(null,"enemy","enemy",-956472047),infierno.main.dom_parent,(0)]));

var G__11004 = seq__10995_10999;
var G__11005 = chunk__10996_11000;
var G__11006 = count__10997_11001;
var G__11007 = (i__10998_11002 + (1));
seq__10995_10999 = G__11004;
chunk__10996_11000 = G__11005;
count__10997_11001 = G__11006;
i__10998_11002 = G__11007;
continue;
} else {
var temp__4126__auto___11008 = cljs.core.seq.call(null,seq__10995_10999);
if(temp__4126__auto___11008){
var seq__10995_11009__$1 = temp__4126__auto___11008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10995_11009__$1)){
var c__4390__auto___11010 = cljs.core.chunk_first.call(null,seq__10995_11009__$1);
var G__11011 = cljs.core.chunk_rest.call(null,seq__10995_11009__$1);
var G__11012 = c__4390__auto___11010;
var G__11013 = cljs.core.count.call(null,c__4390__auto___11010);
var G__11014 = (0);
seq__10995_10999 = G__11011;
chunk__10996_11000 = G__11012;
count__10997_11001 = G__11013;
i__10998_11002 = G__11014;
continue;
} else {
var n_11015 = cljs.core.first.call(null,seq__10995_11009__$1);
infierno.bullet.spawn_bullet_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sprite-y","sprite-y",-191628319),new cljs.core.Keyword(null,"spritesheet","spritesheet",-542003038),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"sprite-x","sprite-x",1115150190),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"dom-parent","dom-parent",-1899682061),new cljs.core.Keyword(null,"py","py",1397985916)],[(cljs.core.rand_int.call(null,(8)) + (1)),infierno.main.sprites,infierno.main.rand_float.call(null,(5)),infierno.main.rand_float.call(null,(600)),Math.abs(infierno.main.rand_float.call(null,(5))),(cljs.core.rand_int.call(null,(8)) + (1)),new cljs.core.Keyword(null,"enemy","enemy",-956472047),infierno.main.dom_parent,(0)]));

var G__11016 = cljs.core.next.call(null,seq__10995_11009__$1);
var G__11017 = null;
var G__11018 = (0);
var G__11019 = (0);
seq__10995_10999 = G__11016;
chunk__10996_11000 = G__11017;
count__10997_11001 = G__11018;
i__10998_11002 = G__11019;
continue;
}
} else {
}
}
break;
}

infierno.main.record_frame_completion.call(null);

var temp__4126__auto___11020 = infierno.controller.get_input.call(null);
if(cljs.core.truth_(temp__4126__auto___11020)){
var input_11021 = temp__4126__auto___11020;
infierno.protocol.control_move.call(null,infierno.main.player,input_11021,infierno.main.parent_max_x,infierno.main.parent_max_y);
} else {
}

var n_11022 = (0);
while(true){
infierno.protocol.move_frame.call(null,(cljs.core.deref.call(null,infierno.bullet.enemy_bullets)[n_11022]));

if(cljs.core.truth_(infierno.protocol.collides_with.call(null,(cljs.core.deref.call(null,infierno.bullet.enemy_bullets)[n_11022]),infierno.main.player))){
new cljs.core.Keyword(null,"dom-element","dom-element",-1359955914).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(infierno.main.player)).style.setProperty("background-color","red");
} else {
}

if((n_11022 < (cljs.core.deref.call(null,infierno.bullet.enemy_bullets).length - (1)))){
var G__11023 = (n_11022 + (1));
n_11022 = G__11023;
continue;
} else {
}
break;
}

if((0.05 > Math.random())){
infierno.bullet.reap_bullets_BANG_.call(null,infierno.main.parent_max_x,infierno.main.parent_max_y);
} else {
}

return window.requestAnimationFrame(animate);
});
infierno.main.animate.call(null);
