package main

import (
	"encoding/json"
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

	// Marshal payload to json
	out, err := json.Marshal(payload)
	if err != nil {
		fmt.Println(err)
	}

	// write header for http
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)
}

func (app *application) Movies(w http.ResponseWriter, r *http.Request) {
	movies, err := app.DB.Movies()
	if err != nil {
		fmt.Println(err)
		return
	}

	// Marshal payload to json
	out, err := json.Marshal(movies)
	if err != nil {
		fmt.Println(err)
	}

	// write header for http
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)

}
