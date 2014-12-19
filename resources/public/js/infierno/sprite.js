// Compiled by ClojureScript 0.0-2156
goog.provide('infierno.sprite');
goog.require('cljs.core');
goog.require('hipo');

/**
* @constructor
* @param {*} url
* @param {*} height
* @param {*} width
* @param {*} rows
* @param {*} columns
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
infierno.sprite.Spritesheet = (function (url,height,width,rows,columns,__meta,__extmap){
this.url = url;
this.height = height;
this.width = width;
this.rows = rows;
this.columns = columns;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
infierno.sprite.Spritesheet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3984__auto__){var self__ = this;
var this__3984__auto____$1 = this;var h__3814__auto__ = self__.__hash;if(!((h__3814__auto__ == null)))
{return h__3814__auto__;
} else
{var h__3814__auto____$1 = cljs.core.hash_imap.call(null,this__3984__auto____$1);self__.__hash = h__3814__auto____$1;
return h__3814__auto____$1;
}
});
infierno.sprite.Spritesheet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3989__auto__,k__3990__auto__){var self__ = this;
var this__3989__auto____$1 = this;return cljs.core._lookup.call(null,this__3989__auto____$1,k__3990__auto__,null);
});
infierno.sprite.Spritesheet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3991__auto__,k5272,else__3992__auto__){var self__ = this;
var this__3991__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k5272,new cljs.core.Keyword(null,"url","url",1014020321)))
{return self__.url;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5272,new cljs.core.Keyword(null,"height","height",4087841945)))
{return self__.height;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5272,new cljs.core.Keyword(null,"width","width",1127031096)))
{return self__.width;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5272,new cljs.core.Keyword(null,"rows","rows",1017410891)))
{return self__.rows;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5272,new cljs.core.Keyword(null,"columns","columns",1963625295)))
{return self__.columns;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k5272,else__3992__auto__);
} else
{return null;
}
}
}
}
}
}
});
infierno.sprite.Spritesheet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3996__auto__,k__3997__auto__,G__5271){var self__ = this;
var this__3996__auto____$1 = this;var pred__5274 = cljs.core.keyword_identical_QMARK_;var expr__5275 = k__3997__auto__;if(cljs.core.truth_(pred__5274.call(null,new cljs.core.Keyword(null,"url","url",1014020321),expr__5275)))
{return (new infierno.sprite.Spritesheet(G__5271,self__.height,self__.width,self__.rows,self__.columns,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5274.call(null,new cljs.core.Keyword(null,"height","height",4087841945),expr__5275)))
{return (new infierno.sprite.Spritesheet(self__.url,G__5271,self__.width,self__.rows,self__.columns,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5274.call(null,new cljs.core.Keyword(null,"width","width",1127031096),expr__5275)))
{return (new infierno.sprite.Spritesheet(self__.url,self__.height,G__5271,self__.rows,self__.columns,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5274.call(null,new cljs.core.Keyword(null,"rows","rows",1017410891),expr__5275)))
{return (new infierno.sprite.Spritesheet(self__.url,self__.height,self__.width,G__5271,self__.columns,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5274.call(null,new cljs.core.Keyword(null,"columns","columns",1963625295),expr__5275)))
{return (new infierno.sprite.Spritesheet(self__.url,self__.height,self__.width,self__.rows,G__5271,self__.__meta,self__.__extmap,null));
} else
{return (new infierno.sprite.Spritesheet(self__.url,self__.height,self__.width,self__.rows,self__.columns,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3997__auto__,G__5271),null));
}
}
}
}
}
});
infierno.sprite.Spritesheet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4003__auto__,writer__4004__auto__,opts__4005__auto__){var self__ = this;
var this__4003__auto____$1 = this;var pr_pair__4006__auto__ = (function (keyval__4007__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4004__auto__,cljs.core.pr_writer,""," ","",opts__4005__auto__,keyval__4007__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__4004__auto__,pr_pair__4006__auto__,"#infierno.sprite.Spritesheet{",", ","}",opts__4005__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",1014020321),self__.url],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",4087841945),self__.height],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",1127031096),self__.width],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rows","rows",1017410891),self__.rows],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"columns","columns",1963625295),self__.columns],null))], null),self__.__extmap));
});
infierno.sprite.Spritesheet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3994__auto__,entry__3995__auto__){var self__ = this;
var this__3994__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__3995__auto__))
{return cljs.core._assoc.call(null,this__3994__auto____$1,cljs.core._nth.call(null,entry__3995__auto__,0),cljs.core._nth.call(null,entry__3995__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3994__auto____$1,entry__3995__auto__);
}
});
infierno.sprite.Spritesheet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4001__auto__){var self__ = this;
var this__4001__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",1014020321),self__.url],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",4087841945),self__.height],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",1127031096),self__.width],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rows","rows",1017410891),self__.rows],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"columns","columns",1963625295),self__.columns],null))], null),self__.__extmap));
});
infierno.sprite.Spritesheet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3993__auto__){var self__ = this;
var this__3993__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
infierno.sprite.Spritesheet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3985__auto__,other__3986__auto__){var self__ = this;
var this__3985__auto____$1 = this;if(cljs.core.truth_((function (){var and__3391__auto__ = other__3986__auto__;if(cljs.core.truth_(and__3391__auto__))
{return ((this__3985__auto____$1.constructor === other__3986__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__3985__auto____$1,other__3986__auto__));
} else
{return and__3391__auto__;
}
})()))
{return true;
} else
{return false;
}
});
infierno.sprite.Spritesheet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3988__auto__,G__5271){var self__ = this;
var this__3988__auto____$1 = this;return (new infierno.sprite.Spritesheet(self__.url,self__.height,self__.width,self__.rows,self__.columns,G__5271,self__.__extmap,self__.__hash));
});
infierno.sprite.Spritesheet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__3983__auto__){var self__ = this;
var this__3983__auto____$1 = this;return (new infierno.sprite.Spritesheet(self__.url,self__.height,self__.width,self__.rows,self__.columns,self__.__meta,self__.__extmap,self__.__hash));
});
infierno.sprite.Spritesheet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3987__auto__){var self__ = this;
var this__3987__auto____$1 = this;return self__.__meta;
});
infierno.sprite.Spritesheet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3998__auto__,k__3999__auto__){var self__ = this;
var this__3998__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",1127031096),null,new cljs.core.Keyword(null,"columns","columns",1963625295),null,new cljs.core.Keyword(null,"rows","rows",1017410891),null,new cljs.core.Keyword(null,"url","url",1014020321),null,new cljs.core.Keyword(null,"height","height",4087841945),null], null), null),k__3999__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3998__auto____$1),self__.__meta),k__3999__auto__);
} else
{return (new infierno.sprite.Spritesheet(self__.url,self__.height,self__.width,self__.rows,self__.columns,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3999__auto__)),null));
}
});
infierno.sprite.Spritesheet.cljs$lang$type = true;
infierno.sprite.Spritesheet.cljs$lang$ctorPrSeq = (function (this__4023__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"infierno.sprite/Spritesheet");
});
infierno.sprite.Spritesheet.cljs$lang$ctorPrWriter = (function (this__4023__auto__,writer__4024__auto__){return cljs.core._write.call(null,writer__4024__auto__,"infierno.sprite/Spritesheet");
});
infierno.sprite.__GT_Spritesheet = (function __GT_Spritesheet(url,height,width,rows,columns){return (new infierno.sprite.Spritesheet(url,height,width,rows,columns));
});
infierno.sprite.map__GT_Spritesheet = (function map__GT_Spritesheet(G__5273){return (new infierno.sprite.Spritesheet(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(G__5273),new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(G__5273),new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(G__5273),new cljs.core.Keyword(null,"rows","rows",1017410891).cljs$core$IFn$_invoke$arity$1(G__5273),new cljs.core.Keyword(null,"columns","columns",1963625295).cljs$core$IFn$_invoke$arity$1(G__5273),null,cljs.core.dissoc.call(null,G__5273,new cljs.core.Keyword(null,"url","url",1014020321),new cljs.core.Keyword(null,"height","height",4087841945),new cljs.core.Keyword(null,"width","width",1127031096),new cljs.core.Keyword(null,"rows","rows",1017410891),new cljs.core.Keyword(null,"columns","columns",1963625295))));
});
infierno.sprite.make_sprite_BANG_ = (function make_sprite_BANG_(spritesheet,row,column){var options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(spritesheet),new cljs.core.Keyword(null,"height","height",4087841945),new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(spritesheet),new cljs.core.Keyword(null,"background-image","background-image",1624697710),new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(spritesheet)], null);var el5278 = document.createElement("div");el5278.className = "sprite";
hipo.interpreter.append_to_parent.call(null,el5278,options);
return el5278;
});

//# sourceMappingURL=sprite.js.map