;; Damn near everything in this module is a crazy ugly hack
;; that, for one reason or another, is much faster than doing
;; it "the proper way"

(ns infierno.bullet
  (:require [clojure.string :as string]))

(defprotocol Movable
  (move-frame [self]))

(defprotocol Collidable
  (collides-with [self object]))

(defn bounding [dom-element]
  {:top (js/parseFloat (-> dom-element .-style .-top))
   :left (js/parseFloat (-> dom-element .-style .-left))
   :width (js/parseFloat (-> dom-element .-style .-width))
   :height (js/parseFloat (-> dom-element .-style .-height))})

(defn add-px [current-value amount]
  ;; All glory to the jankiness of JavaScript
  (let [new-val-int (+ (js/parseFloat current-value) amount)]
    (+ new-val-int "px")))

(defrecord Bullet [sprite hostile vector-x vector-y]
  Movable
  (move-frame [self]
    (let [sprite (:sprite self)
          current-top (-> (:dom-element sprite) .-style .-top)
          current-left (-> (:dom-element sprite) .-style .-left)]
      (.setProperty (.-style (:dom-element sprite)) "top" (add-px current-top (:vector-y self)))
      (.setProperty (.-style (:dom-element sprite)) "left" (add-px current-left (:vector-x self)))))

  Collidable
  (collides-with [self sprite]
    (let [self-box (bounding (-> self :sprite :dom-element))
          object-box (bounding (:dom-element sprite))]
      (not (or (> (:left object-box) (+ (:width self-box) (:left self-box)))
               (< (+ (:left object-box) (:width object-box)) (:left self-box))
               (> (:top object-box) (+ (:top self-box) (:height self-box)))
               (< (+ (:top object-box) (:height object-box)) (:top self-box)))))))
