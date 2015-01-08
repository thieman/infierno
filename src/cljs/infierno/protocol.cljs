(ns infierno.protocol)

(defprotocol Renderable
  (render! [self])
  (hide! [self]))

(defprotocol Movable
  (move-frame [self] [self dx dy])
  (out-of-bounds? [self max-x max-y]))

(defprotocol Collidable
  (collides-with [self sprite]))

(defprotocol Shoots
  (shoot [self]))
