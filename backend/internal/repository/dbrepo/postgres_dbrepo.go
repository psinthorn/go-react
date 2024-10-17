package dbrepo

import (
	"context"
	"database/sql"
	"time"

	"githup.com/psinthorn/go-react/internal/models"
)

type PostgresDBRepo struct {
	DB *sql.DB
}

// Set timeout for database connection
const dbTimeout = time.Second * 3

func (m *PostgresDBRepo) Connection() *sql.DB {
	return m.DB
}

// GET: All movies and return as json
func (m *PostgresDBRepo) Movies() ([]*models.Movie, error) {
	var movies []*models.Movie

	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	defer cancel()

	query := `
		select 
			id, title, release_date, runtime, mpaa_rating, description, coalesce(image, ''), created_at, updated_at
		from 
			movies
		order by
			title 
	`

	rows, err := m.DB.QueryContext(ctx, query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		var movie models.Movie
		err := rows.Scan(
			&movie.ID,
			&movie.Title,
			&movie.ReleaseDate,
			&movie.RunTime,
			&movie.MPAARating,
			&movie.Description,
			&movie.Image,
			&movie.CreatedAt,
			&movie.UpdatedAt,
		)
		if err != nil {
			return nil, err
		}

		movies = append(movies, &movie)

	}

	return movies, nil
}
