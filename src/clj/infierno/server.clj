(ns infierno.server
  (:require [ring.adapter.jetty :as jetty]
            [ring.middleware.resource :as resources]
            [ring.util.response :as response]
            [clojure.java.io :as io])
  (:gen-class))

(defn render-app []
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (slurp (io/file (io/resource "public/index.html")))})

(defn handler [request]
  (render-app))

(def app
  (-> handler
    (resources/wrap-resource "public")))

(defn -main [& args]
  (jetty/run-jetty app {:port 3000}))
