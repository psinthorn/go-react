package main

import (
	"fmt"
	"net/http"
)

func (app *application) Home(w http.ResponseWriter, r *http.Request) {

	payload := struct {
		Status  string `json:"status"`
		Message string `json:"message"`
		Version string `json:"version"`
	}{
		Status:  "active",
		Message: "Gomies is up and running",
		Version: "1.0.0",
	}

	// Marshal payload to json with helper
	app.writeJSON(w, http.StatusOK, payload)

}

func (app *application) Movies(w http.ResponseWriter, r *http.Request) {
	movies, err := app.DB.Movies()
	if err != nil {
		fmt.Println(err)
		return
	}

	// Marshal payload to json with helper
	app.writeJSON(w, http.StatusOK, movies)

}
