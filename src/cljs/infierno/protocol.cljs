(ns infierno.protocol)

(defprotocol Renderable
  (render! [self])
  (hide! [self]))

(defprotocol Movable
  (move-frame [self] [self dx dy])
  (out-of-bounds? [self max-x max-y]))

(defprotocol Collidable
  (collides-with [self sprite]))

(defprotocol Controllable
  (control-move [self input max-x max-y])
  (shoot [self]))
