(ns infierno.controller)

(defn input-from-controller [gamepad]
  (let [axes (aget gamepad "axes")]
    {:x1 (aget axes 0) :y1 (aget axes 1)
     :x2 (aget axes 2) :y2 (aget axes 3)}))

(defn input-from-keyboard []
  (let [keys (.activeKeys js/KeyboardJS)]
    {:x1 (cond
          (some #{"left"} keys) -1
          (some #{"right"} keys) 1
          :else 0)
     :y1 (cond
          (some #{"up"} keys) -1
          (some #{"down"} keys) 1
          :else 0)
     :shot (boolean (some #{"space"} keys))}))

(defn get-input []
  (if-let [gamepad (aget (.getGamepads js/navigator) 0)]
    (input-from-controller gamepad)
    (input-from-keyboard)))
