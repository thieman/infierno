(ns infierno.main
  (:require [infierno.sprite :refer [Spritesheet make-sprite!]]
            [dommy.core :as dommy :refer-macros [append! sel1]]))

(def sprites
  (Spritesheet. "http://buildnewgames.com/assets/article//dom-sprites/spritesheet.png"
                32 32 8 8))

(def crystal
  (let [sprite (make-sprite! sprites 8 5)]
    (dommy/append! (sel1 :body) sprite)))
