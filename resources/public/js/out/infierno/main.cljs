(ns infierno.main
  (:require [infierno.sprite :refer [Spritesheet make-sprite! add-px]]
            [infierno.controller :as controller]
            [infierno.bullet :refer [spawn-bullet! enemy-bullets friendly-bullets reap-bullets!]]
            [infierno.character :refer [Character]]
            [infierno.protocol :refer [render! move-frame collides-with control-move!
                                       register-shot-fn! shoot!]]
            [dommy.core :as dommy :include-macros true]))

(def dom-parent (dommy/sel1 :#game))
(def parent-max-x (-> dom-parent .-offsetWidth))
(def parent-max-y (-> dom-parent .-offsetHeight))

(def renders (atom []))

(def sprites
  (Spritesheet. "img/test-spritesheet.png" 32 32 8 8))

(defn rand-float [max]
  (* (if (< 0.5 (.random js/Math)) 1 -1) (* max (.random js/Math))))

(defn player-fire-shot! [player top center-x]
  (doseq [dx [-3 0 3]]
    (spawn-bullet! {:team :player
                    :dom-parent dom-parent
                    :spritesheet sprites
                    :sprite-x 5
                    :sprite-y 7
                    :px (- center-x 16)
                    :py (- top 16)
                    :dx dx
                    :dy -15})))

(def player (Character. (render! (make-sprite! dom-parent sprites 4 5 300 600)) :player 5))
(register-shot-fn! player player-fire-shot!)

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
    (control-move! player input parent-max-x parent-max-y)
    (when (:shot input)
      (shoot! player)))

  (when-not (zero? (alength @enemy-bullets))
    (loop [n 0]
      (move-frame (aget @enemy-bullets n))
      (when (collides-with (aget @enemy-bullets n) player)
        (.setProperty (.-style (-> player :sprite :dom-element)) "background-color" "red"))
      (when (< n (dec (alength @enemy-bullets)))
        (recur (inc n)))))

  (when-not (zero? (alength @friendly-bullets))
    (loop [n 0]
      (move-frame (aget @friendly-bullets n))
      (when (< n (dec (alength @friendly-bullets)))
        (recur (inc n)))))

  ;; (when (> 0.05 (.random js/Math))
  ;;   (log-frame-rate))
  (when (> 0.05 (.random js/Math))
    (reap-bullets! parent-max-x parent-max-y))
  (.requestAnimationFrame js/window animate))

(animate)
