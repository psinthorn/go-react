package main

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func (app *application) Routes() http.Handler {

	Mux := chi.NewRouter()
	Mux.Use(middleware.Recoverer)

	Mux.Get("/", app.Home)

	Mux.Get("/movies", app.Movies)

	return Mux
}
