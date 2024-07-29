package main

import (
	"fmt"
	"log"
	"net/http"
)

const port = 8080

type application struct {
	Domain string
}

func main() {
	// set Application config struct
	var app application
	app.Domain = "localhost.local"

	// read from command line

	// connect to database

	// start a web server
	log.Println("A Web Server is started on port: ", port)

	// http.HandleFunc("/", Hello)

	err := http.ListenAndServe(fmt.Sprintf(":%d", port), app.Routes())
	if err != nil {
		log.Fatal(err)
	}

}
