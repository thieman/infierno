(ns infierno.protocol)

(defprotocol Renderable
  (render [self]))

(defprotocol Movable
  (move-frame [self] [self dx dy]))

(defprotocol Collidable
  (collides-with [self sprite]))

(defprotocol Shoots
  (shoot [self]))
