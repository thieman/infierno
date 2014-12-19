(ns infierno.sprite
  (:require [clojure.string :as string]
            [cljs-uuid.core :as uuid]
            [crate.core :as crate]
            [dommy.core :as dommy :include-macros true])
  (:require-macros [crate.def-macros :refer [defpartial]]))

(defprotocol Renderable
  (render [self]))

(defrecord Spritesheet [url height width rows columns])

(defpartial sprite-template [id style]
  [:div {:id id :class "infierno-sprite" :style style}])

(defn style-options [options]
  (let [pairs (for [[option value] options]
                (string/join "" [(name option) ": " value ";"]))]
    (string/join pairs)))

(defrecord Sprite [spritesheet row column render-options]
  Renderable
  (render [self]
    (let [dom-id (uuid/make-random)
          dom-element (sprite-template dom-id (style-options (:render-options self)))]
      (dommy/append! (dommy/sel1 :body) dom-element)
      (assoc self :dom-id dom-id :dom-element dom-element))))

(defn make-sprite! [spritesheet row column start-x start-y bg-color]
  (let [options {:width (string/join "" [(:width spritesheet) "px"])
                 :height (string/join "" [(:height spritesheet) "px"])
                 :position "absolute"
                 :top (string/join "" [start-y "px"])
                 :left (string/join [start-x "px"])
                 :background-color bg-color
                 :background-image (string/join "" ["url(" (:url spritesheet) ")"])
                 :background-position (string/join "" ["-" (* (dec column) (:width spritesheet)) "px "
                                                       "-" (* (dec row) (:height spritesheet)) "px"])}]
    (Sprite. spritesheet row column options)))
