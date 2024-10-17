package repository

import (
	"database/sql"

	"githup.com/psinthorn/go-react/internal/models"
)

type DatabaseRepo interface {
	Connection() *sql.DB
	Movies() ([]*models.Movie, error)
}
