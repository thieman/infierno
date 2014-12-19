(defproject infierno "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2411"]
                 [ring "1.2.1"]
                 [crate "0.2.5"]
                 [prismatic/dommy "1.0.0"]
                 [cljs-uuid "0.0.4"]]
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-ring "0.8.10"]]
  :hooks [leiningen.cljsbuild]
  :source-paths ["src/clj"]
  :cljsbuild {
    :builds {
      :main {
        :source-paths ["src/cljs"]
        :compiler {:optimizations :simple
                   :output-to "resources/public/js/infierno.js"
                   :output-dir "resources/public/js/out"
                   :source-map "resources/public/js/infierno.js.map"
                   :externs ["resources/externs/navigator.js"
                             "resources/externs/keyboard.js"]}
        :jar true}}}
  :main infierno.server
  :ring {:handler infierno.server/app})
