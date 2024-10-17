package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"

	"githup.com/psinthorn/go-react/internal/repository"
	"githup.com/psinthorn/go-react/internal/repository/dbrepo"
)

const port = 80

type application struct {
	DSN    string
	Domain string
	DB     repository.DatabaseRepo
}

func main() {
	// set Application config struct
	var app application
	app.Domain = "localhost.local"

	// read from command line
	// * if you run all the app on docker contaniner with docker-compose host name must reference to service name on  docker-compose
	flag.StringVar(&app.DSN, "dsn", "host=postgres port=5432 user=postgres password=postgres dbname=movies sslmode=disable timezone=UTC connect_timeout=5", "Postgres connection string")
	flag.Parse()

	// connect to database
	conn, err := app.connectToDB()
	if err != nil {
		log.Fatal(err)
	}

	app.DB = &dbrepo.PostgresDBRepo{DB: conn}
	defer app.DB.Connection().Close()

	// start a web server
	log.Println("A Web Server is started on port: ", port)

	// http.HandleFunc("/", Hello)

	err = http.ListenAndServe(fmt.Sprintf(":%d", port), app.Routes())
	if err != nil {
		log.Fatal(err)
	}
}
