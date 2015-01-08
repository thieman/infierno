(ns infierno.sprite
  (:require [clojure.string :as string]
            [cljs-uuid.core :as uuid]
            [crate.core :as crate]
            [infierno.protocol :refer [Renderable Movable Collidable]])
  (:require-macros [crate.def-macros :refer [defpartial]]))

(defrecord Spritesheet [url height width rows columns])

(defpartial sprite-template [id style]
  [:div {:id id :class "infierno-sprite" :style style}])

(defn style-options [options]
  (let [pairs (for [[option value] options]
                (string/join "" [(name option) ": " value ";"]))]
    (string/join pairs)))

(defn add-px [current-value amount]
  ;; All glory to the jankiness of the JavaScript + operator
  (let [new-val-int (+ (js/parseFloat current-value) amount)]
    (+ new-val-int "px")))

(defn bounding [dom-element]
  {:top (-> dom-element .-style .-top js/parseFloat)
   :left (-> dom-element .-style .-left js/parseFloat)
   :width (-> dom-element .-style .-width js/parseFloat)
   :height (-> dom-element .-style .-height js/parseFloat)})

(defrecord Sprite [dom-parent spritesheet row column render-options]
  Renderable
  (render! [self]
    (let [dom-id (uuid/make-random)
          dom-element (sprite-template dom-id (style-options (:render-options self)))]
      (.appendChild (:dom-parent self) dom-element)
      (assoc self :dom-id dom-id :dom-element dom-element)))

  (hide! [self]
    (.setProperty (.-style (:dom-element self)) "display" "none")
    self)

  Movable
  (move-frame [self dx dy]
    (let [current-top (-> (:dom-element self) .-style .-top)
          current-left (-> (:dom-element self) .-style .-left)]
      (.setProperty (.-style (:dom-element self)) "top" (add-px current-top dy))
      (.setProperty (.-style (:dom-element self)) "left" (add-px current-left dx))))

  (out-of-bounds? [self max-x max-y]
    (let [current-top (-> (:dom-element self) .-style .-top js/parseFloat)
          current-left (-> (:dom-element self) .-style .-left js/parseFloat)
          width (-> (:dom-element self) .-style .-width js/parseFloat)
          height (-> (:dom-element self) .-style .-height js/parseFloat)]
      (or (< (+ current-top height) 0)
          (> current-top max-y)
          (< (+ current-left width) 0)
          (> current-left max-x))))

  Collidable
  (collides-with [self sprite]
    (let [self-box (bounding (:dom-element self))
          object-box (bounding (:dom-element sprite))]
      (not (or (> (:left object-box) (+ (:width self-box) (:left self-box)))
               (< (+ (:left object-box) (:width object-box)) (:left self-box))
               (> (:top object-box) (+ (:top self-box) (:height self-box)))
               (< (+ (:top object-box) (:height object-box)) (:top self-box)))))))

(defn make-sprite! [dom-parent spritesheet column row start-x start-y]
  (let [options {:width (string/join "" [(:width spritesheet) "px"])
                 :height (string/join "" [(:height spritesheet) "px"])
                 :position "absolute"
                 :top (string/join "" [start-y "px"])
                 :left (string/join [start-x "px"])
                 :background-image (string/join "" ["url(" (:url spritesheet) ")"])
                 :background-position (string/join "" ["-" (* (dec column) (:width spritesheet)) "px "
                                                       "-" (* (dec row) (:height spritesheet)) "px"])}]
    (Sprite. dom-parent spritesheet row column options)))
