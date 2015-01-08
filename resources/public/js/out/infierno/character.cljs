(ns infierno.character
  (:require [infierno.protocol :refer [Renderable Movable Collidable Controllable
                                       render! hide! move-frame collides-with out-of-bounds? control-move shoot]]))

(defrecord Character [sprite team speed]

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

  Controllable
  (control-move [self input max-x max-y]
    (let [dx (* (:speed self) (:x1 input))
          dy (* (:speed self) (:y1 input))
          width (-> self :sprite :dom-element .-style .-width js/parseFloat)
          height (-> self :sprite :dom-element .-style .-height js/parseFloat)
          current-x (-> self :sprite :dom-element .-style .-left js/parseFloat)
          current-y (-> self :sprite :dom-element .-style .-top js/parseFloat)
          actual-dx (if (pos? dx)
                      (min dx (- (- max-x width) current-x))
                      (max dx (* -1 current-x)))
          actual-dy (if (pos? dy)
                      (min dy (- (- max-y height) current-y))
                      (max dy (* -1 current-y)))]
      (move-frame self actual-dx actual-dy)))

  (shoot [self] self))
