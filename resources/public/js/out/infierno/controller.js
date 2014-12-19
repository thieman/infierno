// Compiled by ClojureScript 0.0-2411
goog.provide('infierno.controller');
goog.require('cljs.core');
infierno.controller.input_from_controller = (function input_from_controller(gamepad){
var axes = (gamepad["axes"]);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(axes[(0)]),new cljs.core.Keyword(null,"y1","y1",589123466),(axes[(1)]),new cljs.core.Keyword(null,"x2","x2",-1362513475),(axes[(2)]),new cljs.core.Keyword(null,"y2","y2",-718691301),(axes[(3)])], null);
});
infierno.controller.input_from_keyboard = (function input_from_keyboard(){
var keys = KeyboardJS.activeKeys();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["left",null], null), null),keys))?(-1):(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["right",null], null), null),keys))?(1):(0)
)),new cljs.core.Keyword(null,"y1","y1",589123466),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["up",null], null), null),keys))?(-1):(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["down",null], null), null),keys))?(1):(0)
)),new cljs.core.Keyword(null,"shot","shot",1961298790),cljs.core.boolean$.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["space",null], null), null),keys))], null);
});
infierno.controller.get_input = (function get_input(){
var temp__4124__auto__ = (navigator.getGamepads()[(0)]);
if(cljs.core.truth_(temp__4124__auto__)){
var gamepad = temp__4124__auto__;
return infierno.controller.input_from_controller.call(null,gamepad);
} else {
return infierno.controller.input_from_keyboard.call(null);
}
});
