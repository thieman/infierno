// Compiled by ClojureScript 0.0-2411
goog.provide('infierno.protocol');
goog.require('cljs.core');

infierno.protocol.Renderable = (function (){var obj11195 = {};
return obj11195;
})();

infierno.protocol.render_BANG_ = (function render_BANG_(self){
if((function (){var and__3596__auto__ = self;
if(and__3596__auto__){
return self.infierno$protocol$Renderable$render_BANG_$arity$1;
} else {
return and__3596__auto__;
}
})()){
return self.infierno$protocol$Renderable$render_BANG_$arity$1(self);
} else {
var x__4247__auto__ = (((self == null))?null:self);
return (function (){var or__3608__auto__ = (infierno.protocol.render_BANG_[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (infierno.protocol.render_BANG_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Renderable.render!",self);
}
}
})().call(null,self);
}
});

infierno.protocol.hide_BANG_ = (function hide_BANG_(self){
if((function (){var and__3596__auto__ = self;
if(and__3596__auto__){
return self.infierno$protocol$Renderable$hide_BANG_$arity$1;
} else {
return and__3596__auto__;
}
})()){
return self.infierno$protocol$Renderable$hide_BANG_$arity$1(self);
} else {
var x__4247__auto__ = (((self == null))?null:self);
return (function (){var or__3608__auto__ = (infierno.protocol.hide_BANG_[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (infierno.protocol.hide_BANG_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Renderable.hide!",self);
}
}
})().call(null,self);
}
});


infierno.protocol.Movable = (function (){var obj11197 = {};
return obj11197;
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

infierno.protocol.out_of_bounds_QMARK_ = (function out_of_bounds_QMARK_(self,max_x,max_y){
if((function (){var and__3596__auto__ = self;
if(and__3596__auto__){
return self.infierno$protocol$Movable$out_of_bounds_QMARK_$arity$3;
} else {
return and__3596__auto__;
}
})()){
return self.infierno$protocol$Movable$out_of_bounds_QMARK_$arity$3(self,max_x,max_y);
} else {
var x__4247__auto__ = (((self == null))?null:self);
return (function (){var or__3608__auto__ = (infierno.protocol.out_of_bounds_QMARK_[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (infierno.protocol.out_of_bounds_QMARK_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Movable.out-of-bounds?",self);
}
}
})().call(null,self,max_x,max_y);
}
});


infierno.protocol.Collidable = (function (){var obj11199 = {};
return obj11199;
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


infierno.protocol.Controllable = (function (){var obj11201 = {};
return obj11201;
})();

infierno.protocol.control_move_BANG_ = (function control_move_BANG_(self,input,max_x,max_y){
if((function (){var and__3596__auto__ = self;
if(and__3596__auto__){
return self.infierno$protocol$Controllable$control_move_BANG_$arity$4;
} else {
return and__3596__auto__;
}
})()){
return self.infierno$protocol$Controllable$control_move_BANG_$arity$4(self,input,max_x,max_y);
} else {
var x__4247__auto__ = (((self == null))?null:self);
return (function (){var or__3608__auto__ = (infierno.protocol.control_move_BANG_[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (infierno.protocol.control_move_BANG_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Controllable.control-move!",self);
}
}
})().call(null,self,input,max_x,max_y);
}
});

infierno.protocol.register_shot_fn_BANG_ = (function register_shot_fn_BANG_(self,shot_fn){
if((function (){var and__3596__auto__ = self;
if(and__3596__auto__){
return self.infierno$protocol$Controllable$register_shot_fn_BANG_$arity$2;
} else {
return and__3596__auto__;
}
})()){
return self.infierno$protocol$Controllable$register_shot_fn_BANG_$arity$2(self,shot_fn);
} else {
var x__4247__auto__ = (((self == null))?null:self);
return (function (){var or__3608__auto__ = (infierno.protocol.register_shot_fn_BANG_[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (infierno.protocol.register_shot_fn_BANG_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Controllable.register-shot-fn!",self);
}
}
})().call(null,self,shot_fn);
}
});

infierno.protocol.shoot_BANG_ = (function shoot_BANG_(self){
if((function (){var and__3596__auto__ = self;
if(and__3596__auto__){
return self.infierno$protocol$Controllable$shoot_BANG_$arity$1;
} else {
return and__3596__auto__;
}
})()){
return self.infierno$protocol$Controllable$shoot_BANG_$arity$1(self);
} else {
var x__4247__auto__ = (((self == null))?null:self);
return (function (){var or__3608__auto__ = (infierno.protocol.shoot_BANG_[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (infierno.protocol.shoot_BANG_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Controllable.shoot!",self);
}
}
})().call(null,self);
}
});

