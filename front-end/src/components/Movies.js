import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem'
import { Link } from 'react-router-dom'

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const requestOptions = {
      method: "GET",
      headers: headers
    }

    fetch(`http://localhost:8080/movies`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      setMovies(data);
    })
    .catch(err => {
      console.log(err)
    })
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