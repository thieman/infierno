// Compiled by ClojureScript 0.0-2411
goog.provide('infierno.controller');
goog.require('cljs.core');
infierno.controller.input_from_controller = (function input_from_controller(gamepad){
var axes = (gamepad["axes"]);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$29,(axes[(0)]),cljs.core.constant$keyword$30,(axes[(1)]),cljs.core.constant$keyword$31,(axes[(2)]),cljs.core.constant$keyword$32,(axes[(3)])], null);
});
infierno.controller.input_from_keyboard = (function input_from_keyboard(){
var keys = KeyboardJS.activeKeys();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$29,(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["left",null], null), null),keys))?(-1):(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["right",null], null), null),keys))?(1):(0)
)),cljs.core.constant$keyword$30,(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["up",null], null), null),keys))?(-1):(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["down",null], null), null),keys))?(1):(0)
))], null);
});
infierno.controller.get_input = (function get_input(){
var temp__4124__auto__ = (navigator.getGamepads()[(0)]);
if(cljs.core.truth_(temp__4124__auto__)){
var gamepad = temp__4124__auto__;
return infierno.controller.input_from_controller(gamepad);
} else {
return infierno.controller.input_from_keyboard();
}
});
