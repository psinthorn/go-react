import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem'

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    console.log("useEffect Fired!");

    const movieList = [
      {
        id: 1,
        title: "Blackhawk Down",
        mpaa_rate: "PG-18",
        score: "5"
      },
      {
        id: 2,
        title: "Green Mile",
        mpaa_rate: "PG-13",
        score: "4"
      },
      {
        id: 3,
        title: "Shawshank",
        mpaa_rate: "PG-13",
        score: "5"
      },
      {
        id: 4,
        title: "The Mattrix",
        mpaa_rate: "PG-18",
        score: "4"
      },
    ]
    setMovies(movieList);
  }, [])
  
  return (
    <div className='text-center'>
      {
        movies.map((m) => {
          return <MovieItem key={m.id} id={m.id} title={m.title} mpaa_rate={m.mpaa_rate} score={m.score} />

        })
      }
    </div>
  )
}

export default Movies;