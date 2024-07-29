package main

import (
	"backend/internal/models"
	"encoding/json"
	"fmt"
	"net/http"
	"time"
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
	var movies []models.Movie
	rd, _ := time.Parse("2006-01-02", "1980-11-12")

	matrix := models.Movie{
		ID:          1,
		Title:       "The Matrix",
		ReleaseDate: rd,
		RunTime:     180,
		MPAARating:  "R",
		Description: "The movie that compare to virus computer",
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}

	movies = append(movies, matrix)

	shawshang := models.Movie{
		ID:          2,
		Title:       "Shaw Shang",
		ReleaseDate: rd,
		RunTime:     180,
		MPAARating:  "PG13+",
		Description: "The movie that make me love to watch the movie",
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}

	movies = append(movies, shawshang)

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
