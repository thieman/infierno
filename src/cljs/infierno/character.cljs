(ns infierno.character
  (:require [infierno.protocol :refer [Renderable Movable Collidable Shoots
                                       render! hide! move-frame collides-with]]))

(defrecord Character [sprite team]

  Renderable
  (render! [self]
    (assoc self :sprite (render! sprite)))

  (hide! [self]
    (assoc self :sprite (hide! sprite)))

  Movable
  (move-frame [self dx dy]
    (move-frame (:sprite self) dx dy))

  (out-of-bounds? [self max-x max-y]
    (out-of-bounds? (:sprite self) max-x max-y))

  Collidable
  (collides-with [self bullet]
    (collides-with (:sprite self) (:sprite bullet)))

  Shoots
  (shoot [self] self))
