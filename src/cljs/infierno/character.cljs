(ns infierno.character
  (:require [infierno.protocol :refer [Renderable Movable Collidable Shoots
                                       render move-frame collides-with]]))

(defrecord Character [sprite team]

  Renderable
  (render [self]
    (assoc self :sprite (render sprite)))

  Movable
  (move-frame [self dx dy]
    (move-frame (:sprite self) dx dy))

  Collidable
  (collides-with [self bullet]
    (collides-with (:sprite self) (:sprite bullet)))

  Shoots
  (shoot [self] self))
