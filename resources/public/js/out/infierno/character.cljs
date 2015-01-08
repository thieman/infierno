(ns infierno.character
  (:require [infierno.protocol :refer [Renderable Movable Collidable Controllable
                                       render! hide! move-frame collides-with out-of-bounds?
                                       control-move! register-shot-fn! shoot!]]))

(def shot-fns (atom {}))

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
  (control-move! [self input max-x max-y]
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

  (register-shot-fn! [self shot-fn]
    (swap! shot-fns assoc self shot-fn))

  (shoot! [self]
    (let [shot-fn (@shot-fns self)
          top (-> self :sprite :dom-element .-style .-top js/parseFloat)
          left (-> self :sprite :dom-element .-style .-left js/parseFloat)
          width (-> self :sprite :dom-element .-style .-width js/parseFloat)
          center-x (+ left (/ width 2))]
      (shot-fn self top center-x))))
