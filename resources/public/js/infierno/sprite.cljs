(ns infierno.sprite
  (:require [hipo :as hipo :include-macros true]))

(defrecord Spritesheet [url height width rows columns])

(defn make-sprite! [spritesheet row column]
  (let [options {:width (:width spritesheet)
                 :height (:height spritesheet)
                 :background-image (:url spritesheet)}]
                 ;; :background-position (format "-%dpx -%dpx"
                 ;;                              (* (dec row) (:height spritesheet))
                 ;;                              (* (dec column) (:width spritesheet)))}]
    (hipo/create [:div.sprite options])))
