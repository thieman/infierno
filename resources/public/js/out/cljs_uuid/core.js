// Compiled by ClojureScript 0.0-2411
goog.provide('cljs_uuid.core');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
/**
* Returns a new randomly generated (version 4) cljs.core/UUID,
* like: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
* as per http://www.ietf.org/rfc/rfc4122.txt.
* Usage:
* (UUIDv4)  =>  #uuid "305e764d-b451-47ae-a90d-5db782ac1f2e"
* (type (UUIDv4)) => cljs.core/UUID
*/
cljs_uuid.core.make_random = (function make_random(){
var f = (function f(){
return cljs.core.rand_int((16)).toString((16));
});
var g = (function g(){
return ((8) | ((3) & cljs.core.rand_int((15)))).toString((16));
});
return (new cljs.core.UUID((new goog.string.StringBuffer(f(),f(),f(),f(),f(),f(),f(),f(),"-",f(),f(),f(),f(),"-4",f(),f(),f(),"-",g(),f(),f(),f(),"-",f(),f(),f(),f(),f(),f(),f(),f(),f(),f(),f(),f())).toString()));
});
cljs_uuid.core.make_v4 = cljs_uuid.core.make_random;
