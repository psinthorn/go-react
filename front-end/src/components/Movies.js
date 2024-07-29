import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem'
import { Link } from 'react-router-dom'

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    console.log("useEffect Fired!");

    const movieList = [
      {
        id: 1,
        title: "Blackhawk Down",
        release_date: "11-12-2023",
        runtime: "148",
        mpaa_rate: "PG-18",
        score: "5",
        status: true,
      },
      {
        id: 2,
        title: "Green Mile",
        release_date: "11-12-2023",
        runtime: "148",
        mpaa_rate: "PG-13",
        score: "4",
        status: true,
      },
      {
        id: 3,
        title: "Shawshank",
        release_date: "11-12-2023",
        runtime: "148",
        mpaa_rate: "PG-13",
        score: "5",
        status: true,
      },
      {
        id: 4,
        title: "The Mattrix",
        release_date: "11-12-2023",
        runtime: "150",
        mpaa_rate: "PG-18",
        score: "4",
        status: true,
      },
    ]
    setMovies(movieList);
  }, [])
  
  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Release Date</th>
          <th>Run Time</th>
          <th>Rated</th>
        </tr>
      </thead>
      <tbody>     
        {movies.map((m) => {
            return (
            <tr key={m.title}>
              <th scope="row">{m.id}</th>
              <td className='decoration-none'><Link to={`/movie/${m.id}`}>{m.title}</Link></td>
              <td>{m.release_date}</td>
              <td>{m.runtime}</td>
              <td>{m.mpaa_rate}</td>
            </tr>
            )
          })
        }
      </tbody>
     
    </table>
  )
}

export default Movies;