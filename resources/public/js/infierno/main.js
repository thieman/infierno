// Compiled by ClojureScript 0.0-2156
goog.provide('infierno.main');
goog.require('cljs.core');
goog.require('infierno.sprite');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('infierno.sprite');
infierno.main.sprites = (new infierno.sprite.Spritesheet("http://buildnewgames.com/assets/article//dom-sprites/spritesheet.png",32,32,8,8));
infierno.main.crystal = (function (){var sprite = infierno.sprite.make_sprite_BANG_.call(null,infierno.main.sprites,8,5);return dommy.core.append_BANG_.call(null,document.body,sprite);
})();

//# sourceMappingURL=main.js.map