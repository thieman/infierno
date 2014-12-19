(ns infierno.sprite
  (:require [clojure.string :as string]
            [cljs-uuid.core :as uuid]
            [crate.core :as crate]
            [infierno.protocol :refer [Renderable Movable Collidable]]
            [dommy.core :as dommy :include-macros true])
  (:require-macros [crate.def-macros :refer [defpartial]]))

(defrecord Spritesheet [url height width rows columns])

(defpartial sprite-template [id style]
  [:div {:id id :class "infierno-sprite" :style style}])

(defn style-options [options]
  (let [pairs (for [[option value] options]
                (string/join "" [(name option) ": " value ";"]))]
    (string/join pairs)))

(defn add-px [current-value amount]
  ;; All glory to the jankiness of JavaScript
  (let [new-val-int (+ (js/parseFloat current-value) amount)]
    (+ new-val-int "px")))

(defn bounding [dom-element]
  {:top (js/parseFloat (-> dom-element .-style .-top))
   :left (js/parseFloat (-> dom-element .-style .-left))
   :width (js/parseFloat (-> dom-element .-style .-width))
   :height (js/parseFloat (-> dom-element .-style .-height))})

(defrecord Sprite [spritesheet row column render-options]
  Renderable
  (render [self]
    (let [dom-id (uuid/make-random)
          dom-element (sprite-template dom-id (style-options (:render-options self)))]
      (dommy/append! (dommy/sel1 :body) dom-element)
      (assoc self :dom-id dom-id :dom-element dom-element)))

  Movable
  (move-frame [self dx dy]
    (let [current-top (-> (:dom-element self) .-style .-top)
          current-left (-> (:dom-element self) .-style .-left)]
      (.setProperty (.-style (:dom-element self)) "top" (add-px current-top dy))
      (.setProperty (.-style (:dom-element self)) "left" (add-px current-left dx))))

  Collidable
  (collides-with [self sprite]
    (let [self-box (bounding (:dom-element self))
          object-box (bounding (:dom-element sprite))]
      (not (or (> (:left object-box) (+ (:width self-box) (:left self-box)))
               (< (+ (:left object-box) (:width object-box)) (:left self-box))
               (> (:top object-box) (+ (:top self-box) (:height self-box)))
               (< (+ (:top object-box) (:height object-box)) (:top self-box)))))))

(defn make-sprite! [spritesheet row column start-x start-y]
  (let [options {:width (string/join "" [(:width spritesheet) "px"])
                 :height (string/join "" [(:height spritesheet) "px"])
                 :position "absolute"
                 :top (string/join "" [start-y "px"])
                 :left (string/join [start-x "px"])
                 :background-image (string/join "" ["url(" (:url spritesheet) ")"])
                 :background-position (string/join "" ["-" (* (dec column) (:width spritesheet)) "px "
                                                       "-" (* (dec row) (:height spritesheet)) "px"])}]
    (Sprite. spritesheet row column options)))
