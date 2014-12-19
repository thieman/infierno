;; Damn near everything in this module is a crazy ugly hack
;; that, for one reason or another, is much faster than doing
;; it "the proper way"

(ns infierno.bullet
  (:require [clojure.string :as string]
            [infierno.protocol :refer [Movable Collidable move-frame collides-with]]))

(defrecord Bullet [sprite hostile vector-x vector-y]
  Movable
  (move-frame [self]
    (move-frame (:sprite self) (:vector-x self) (:vector-y self)))

  Collidable
  (collides-with [self character]
    (collides-with (:sprite self) (:sprite character))))
