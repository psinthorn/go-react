package main

import (
	"encoding/json"
	"errors"
	"io"
	"net/http"
)

type JSONResponse struct {
	Error   bool        `json:"error"`
	Message string      `json:"message"`
	Data    interface{} `json:"data,omitempty"` //omitempty mean data not spacify or doesn't have any value then not include this in json

}

func (app *application) writeJSON(w http.ResponseWriter, status int, data interface{}, headers ...http.Header) error {
	// check data and marshal to json
	out, err := json.Marshal(data)
	if err != nil {
		return err
	}

	// check and add headers
	if len(headers) > 0 {
		for key, value := range headers[0] {
			w.Header()[key] = value
		}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	_, err = w.Write(out)
	if err != nil {
		return err
	}

	// if no error return nil
	return nil

}

func (app *application) readJSON(w http.ResponseWriter, r *http.Request, data interface{}) error {
	maxBytes := 1024 * 1024 // = 1mb
	r.Body = http.MaxBytesReader(w, r.Body, int64(maxBytes))

	jsonDecode := json.NewDecoder(r.Body)
	jsonDecode.DisallowUnknownFields()

	err := jsonDecode.Decode(data)
	if err != nil {
		return err
	}

	err = jsonDecode.Decode(&struct{}{})
	if err != io.EOF {
		return errors.New("Body must contain a single JSON value")
	}

	return nil
}
