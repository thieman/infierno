// Compiled by ClojureScript 0.0-2411
goog.provide('infierno.protocol');
goog.require('cljs.core');

infierno.protocol.Renderable = (function (){var obj5655 = {};
return obj5655;
})();

infierno.protocol.render = (function render(self){
if((function (){var and__3596__auto__ = self;
if(and__3596__auto__){
return self.infierno$protocol$Renderable$render$arity$1;
} else {
return and__3596__auto__;
}
})()){
return self.infierno$protocol$Renderable$render$arity$1(self);
} else {
var x__4247__auto__ = (((self == null))?null:self);
return (function (){var or__3608__auto__ = (infierno.protocol.render[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (infierno.protocol.render["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Renderable.render",self);
}
}
})().call(null,self);
}
});


infierno.protocol.Movable = (function (){var obj5657 = {};
return obj5657;
})();

infierno.protocol.move_frame = (function() {
var move_frame = null;
var move_frame__1 = (function (self){
if((function (){var and__3596__auto__ = self;
if(and__3596__auto__){
return self.infierno$protocol$Movable$move_frame$arity$1;
} else {
return and__3596__auto__;
}
})()){
return self.infierno$protocol$Movable$move_frame$arity$1(self);
} else {
var x__4247__auto__ = (((self == null))?null:self);
return (function (){var or__3608__auto__ = (infierno.protocol.move_frame[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (infierno.protocol.move_frame["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Movable.move-frame",self);
}
}
})().call(null,self);
}
});
var move_frame__3 = (function (self,dx,dy){
if((function (){var and__3596__auto__ = self;
if(and__3596__auto__){
return self.infierno$protocol$Movable$move_frame$arity$3;
} else {
return and__3596__auto__;
}
})()){
return self.infierno$protocol$Movable$move_frame$arity$3(self,dx,dy);
} else {
var x__4247__auto__ = (((self == null))?null:self);
return (function (){var or__3608__auto__ = (infierno.protocol.move_frame[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (infierno.protocol.move_frame["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Movable.move-frame",self);
}
}
})().call(null,self,dx,dy);
}
});
move_frame = function(self,dx,dy){
switch(arguments.length){
case 1:
return move_frame__1.call(this,self);
case 3:
return move_frame__3.call(this,self,dx,dy);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
move_frame.cljs$core$IFn$_invoke$arity$1 = move_frame__1;
move_frame.cljs$core$IFn$_invoke$arity$3 = move_frame__3;
return move_frame;
})()
;


infierno.protocol.Collidable = (function (){var obj5659 = {};
return obj5659;
})();

infierno.protocol.collides_with = (function collides_with(self,sprite){
if((function (){var and__3596__auto__ = self;
if(and__3596__auto__){
return self.infierno$protocol$Collidable$collides_with$arity$2;
} else {
return and__3596__auto__;
}
})()){
return self.infierno$protocol$Collidable$collides_with$arity$2(self,sprite);
} else {
var x__4247__auto__ = (((self == null))?null:self);
return (function (){var or__3608__auto__ = (infierno.protocol.collides_with[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (infierno.protocol.collides_with["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Collidable.collides-with",self);
}
}
})().call(null,self,sprite);
}
});


infierno.protocol.Shoots = (function (){var obj5661 = {};
return obj5661;
})();

infierno.protocol.shoot = (function shoot(self){
if((function (){var and__3596__auto__ = self;
if(and__3596__auto__){
return self.infierno$protocol$Shoots$shoot$arity$1;
} else {
return and__3596__auto__;
}
})()){
return self.infierno$protocol$Shoots$shoot$arity$1(self);
} else {
var x__4247__auto__ = (((self == null))?null:self);
return (function (){var or__3608__auto__ = (infierno.protocol.shoot[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (infierno.protocol.shoot["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Shoots.shoot",self);
}
}
})().call(null,self);
}
});

