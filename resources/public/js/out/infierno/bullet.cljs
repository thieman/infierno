;; Damn near everything in this module is a crazy ugly hack
;; that, for one reason or another, is much faster than doing
;; it "the proper way"

(ns infierno.bullet
  (:require [clojure.string :as string]
            [infierno.protocol :refer [Renderable Movable Collidable render! hide!
                                       move-frame collides-with out-of-bounds?]]
            [infierno.sprite :refer [make-sprite!]]))

(def friendly-bullets (atom (array)))
(def enemy-bullets (atom (array)))

(defrecord Bullet [sprite hostile dx dy]
  Renderable
  (render! [self]
    (assoc self :sprite (render! (:sprite self))))

  (hide! [self]
    (assoc self :sprite (hide! (:sprite self))))

  Movable
  (move-frame [self]
    (move-frame (:sprite self) (:dx self) (:dy self)))

  (out-of-bounds? [self max-x max-y]
    (out-of-bounds? (:sprite self) max-x max-y))

  Collidable
  (collides-with [self character]
    (collides-with (:sprite self) (:sprite character))))

(defn spawn-bullet! [{:keys [team dom-parent spritesheet sprite-x sprite-y px py dx dy]}]
  (let [coll (if (= :enemy team) @enemy-bullets @friendly-bullets)
        sprite (render! (make-sprite! dom-parent spritesheet sprite-x sprite-y px py))
        bullet (Bullet. sprite true dx dy)]
    (.push coll bullet)))

(defn reap-bullets! [max-x max-y]
  (doseq [coll-atom [friendly-bullets enemy-bullets]
          :let [coll @coll-atom]]
    (when-not (zero? (alength coll))
      (let [new-array (array)]
        (loop [n 0]
          (let [bullet (aget coll n)]
            (if (out-of-bounds? bullet max-x max-y)
              (hide! bullet)
              (.push new-array bullet)))
          (when (< n (dec (alength coll)))
            (recur (inc n))))
        (reset! coll-atom new-array)))))
