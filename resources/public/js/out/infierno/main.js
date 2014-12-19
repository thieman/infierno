// Compiled by ClojureScript 0.0-2411
goog.provide('infierno.main');
goog.require('cljs.core');
goog.require('infierno.sprite');
goog.require('infierno.bullet');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('infierno.bullet');
goog.require('infierno.controller');
goog.require('infierno.controller');
goog.require('infierno.sprite');
infierno.main.renders = (function (){var G__17663 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17663) : cljs.core.atom.call(null,G__17663));
})();
infierno.main.sprites = (new infierno.sprite.Spritesheet("http://buildnewgames.com/assets/article//dom-sprites/spritesheet.png",(32),(32),(8),(8)));
infierno.main.rand_float = (function rand_float(max){
return ((((0.5 < Math.random()))?(1):(-1)) * (max * Math.random()));
});
infierno.main.all_bullets = cljs.core.to_array((function (){var iter__4359__auto__ = (function iter__17664(s__17665){
return (new cljs.core.LazySeq(null,(function (){
var s__17665__$1 = s__17665;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__17665__$1);
if(temp__4126__auto__){
var s__17665__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17665__$2)){
var c__4357__auto__ = cljs.core.chunk_first(s__17665__$2);
var size__4358__auto__ = cljs.core.count(c__4357__auto__);
var b__17667 = cljs.core.chunk_buffer(size__4358__auto__);
if((function (){var i__17666 = (0);
while(true){
if((i__17666 < size__4358__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4357__auto__,i__17666);
cljs.core.chunk_append(b__17667,(function (){var sprite = infierno.sprite.make_sprite_BANG_(infierno.main.sprites,(8),(5),((5) * n),(0),"purple").infierno$sprite$Renderable$render$arity$1(null);
return (new infierno.bullet.Bullet(sprite,true,infierno.main.rand_float((5)),Math.abs(infierno.main.rand_float((5)))));
})());

var G__17670 = (i__17666 + (1));
i__17666 = G__17670;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17667),iter__17664(cljs.core.chunk_rest(s__17665__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17667),null);
}
} else {
var n = cljs.core.first(s__17665__$2);
return cljs.core.cons((function (){var sprite = infierno.sprite.make_sprite_BANG_(infierno.main.sprites,(8),(5),((5) * n),(0),"purple").infierno$sprite$Renderable$render$arity$1(null);
return (new infierno.bullet.Bullet(sprite,true,infierno.main.rand_float((5)),Math.abs(infierno.main.rand_float((5)))));
})(),iter__17664(cljs.core.rest(s__17665__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4359__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((500)));
})());
infierno.main.player = infierno.sprite.make_sprite_BANG_(infierno.main.sprites,(4),(5),(300),(600),"blue").infierno$sprite$Renderable$render$arity$1(null);
infierno.main.move = (function move(sprite,input){
var current_top = cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(sprite).style.top;
var current_left = cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(sprite).style.left;
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(sprite),cljs.core.array_seq([cljs.core.constant$keyword$20,infierno.bullet.add_px(current_top,((5) * cljs.core.constant$keyword$30.cljs$core$IFn$_invoke$arity$1(input))),cljs.core.constant$keyword$21,infierno.bullet.add_px(current_left,((5) * cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(input)))], 0));
});
infierno.main.record_frame_completion = (function record_frame_completion(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(infierno.main.renders,cljs.core.conj,Date.now());
});
infierno.main.log_frame_rate = (function log_frame_rate(){
var in_last_second = (function (ms){
return (Date.now() <= (ms + (1000)));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(infierno.main.renders,((function (in_last_second){
return (function (p1__17671_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(in_last_second,p1__17671_SHARP_);
});})(in_last_second))
);

return console.log(cljs.core.count((function (){var G__17673 = infierno.main.renders;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17673) : cljs.core.deref.call(null,G__17673));
})()));
});
infierno.main.animate = (function animate(){
infierno.main.record_frame_completion();

var temp__4126__auto___17674 = infierno.controller.get_input();
if(cljs.core.truth_(temp__4126__auto___17674)){
var input_17675 = temp__4126__auto___17674;
infierno.main.move(infierno.main.player,input_17675);
} else {
}

var n_17676 = (0);
while(true){
infierno.bullet.move_frame((infierno.main.all_bullets[n_17676]));

if(cljs.core.truth_(infierno.bullet.collides_with((infierno.main.all_bullets[n_17676]),infierno.main.player))){
cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(infierno.main.player).style.setProperty("background-color","red");
} else {
}

if((n_17676 < (infierno.main.all_bullets.length - (1)))){
var G__17677 = (n_17676 + (1));
n_17676 = G__17677;
continue;
} else {
}
break;
}

if((0.05 > Math.random())){
infierno.main.log_frame_rate();
} else {
}

return window.requestAnimationFrame(animate);
});
infierno.main.animate();
