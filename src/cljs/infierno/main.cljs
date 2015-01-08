(ns infierno.main
  (:require [infierno.sprite :refer [Spritesheet make-sprite! add-px]]
            [infierno.controller :as controller]
            [infierno.bullet :refer [spawn-bullet! enemy-bullets friendly-bullets reap-bullets!]]
            [infierno.character :refer [Character]]
            [infierno.protocol :refer [render! move-frame collides-with control-move]]
            [dommy.core :as dommy :include-macros true]))

(def dom-parent (dommy/sel1 :#game))
(def parent-max-x (-> dom-parent .-offsetWidth))
(def parent-max-y (-> dom-parent .-offsetHeight))

(def renders (atom []))

(def sprites
  (Spritesheet. "img/test-spritesheet.png" 32 32 8 8))

(defn rand-float [max]
  (* (if (< 0.5 (.random js/Math)) 1 -1) (* max (.random js/Math))))

(def player (Character. (render! (make-sprite! dom-parent sprites 4 5 300 600)) :player 5))

(defn record-frame-completion []
  (swap! renders conj (.now js/Date)))

(defn log-frame-rate []
  (let [in-last-second (fn [ms] (<= (.now js/Date) (+ ms 1000)))]
    (swap! renders #(filter in-last-second %))
    (.log js/console (count @renders))))

(defn animate []
  (doseq [n (range 2)]
    (spawn-bullet! {:team :enemy
                    :dom-parent dom-parent
                    :spritesheet sprites
                    :sprite-x (inc (rand-int 8))
                    :sprite-y (inc (rand-int 8))
                    :px (rand-float 600)
                    :py 0
                    :dx (rand-float 5)
                    :dy (.abs js/Math (rand-float 5))}))
  (record-frame-completion)
  (when-let [input (controller/get-input)]
    (control-move player input parent-max-x parent-max-y))
  (loop [n 0]
    (move-frame (aget @enemy-bullets n))
    (when (collides-with (aget @enemy-bullets n) player)
      (.setProperty (.-style (-> player :sprite :dom-element)) "background-color" "red"))
    (when (< n (dec (alength @enemy-bullets)))
      (recur (inc n))))
  ;; (when (> 0.05 (.random js/Math))
  ;;   (log-frame-rate))
  (when (> 0.05 (.random js/Math))
    (reap-bullets! parent-max-x parent-max-y))
  (.requestAnimationFrame js/window animate))

(animate)
