(ns infierno.main
  (:require [infierno.sprite :refer [Spritesheet make-sprite! render]]
            [infierno.controller :as controller]
            [infierno.bullet :refer [Bullet add-px move-frame collides-with]]
            [dommy.core :as dommy :include-macros true]))

(def renders (atom []))

(def sprites
  (Spritesheet. "http://buildnewgames.com/assets/article//dom-sprites/spritesheet.png"
                32 32 8 8))

(defn rand-float [max]
  (* (if (< 0.5 (.random js/Math)) 1 -1) (* max (.random js/Math))))

(def all-bullets
  (to-array (for [n (range 500)]
              (let [sprite (render (make-sprite! sprites 8 5 (* 5 n) 0 "purple"))]
                (Bullet. sprite true (rand-float 5) (.abs js/Math (rand-float 5)))))))

(def player (render (make-sprite! sprites 4 5 300 600 "blue")))

(defn move [sprite input]
  (let [current-top (-> (:dom-element sprite) .-style .-top)
        current-left (-> (:dom-element sprite) .-style .-left)]
    (dommy/set-style! (:dom-element sprite)
                      :top (add-px current-top (* 5 (:y1 input)))
                      :left (add-px current-left (* 5 (:x1 input))))))

(defn record-frame-completion []
  (swap! renders conj (.now js/Date)))

(defn log-frame-rate []
  (let [in-last-second (fn [ms] (<= (.now js/Date) (+ ms 1000)))]
    (swap! renders #(filter in-last-second %))
    (.log js/console (count @renders))))

(defn animate []
  (record-frame-completion)
  (when-let [input (controller/get-input)]
    (move player input))
  (loop [n 0]
    (move-frame (aget all-bullets n))
    (when (collides-with (aget all-bullets n) player)
      (.setProperty (.-style (:dom-element player)) "background-color" "red"))
    (when (< n (dec (alength all-bullets)))
      (recur (inc n))))
  (when (> 0.05 (.random js/Math))
    (log-frame-rate))
  (.requestAnimationFrame js/window animate))

(animate)
