import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Movie = ({ title, mpaa_rate, score}) => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let myMovie = {
      id: 1,
      title: "Black Hawk Down",
      release_date: "11-12-2023",
      runtime: "148",
      mpaa_rating: "18+",
      description: "Operation on Mogadishu",
      status: true,
    }

    setMovie(myMovie);

  }, [id]);

  return (
    <div>
      <h2 className='text-center'><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h2>
      <small><em>{movie.release_date}, {movie.runtime} minutes, Rated: {movie.mpaa_rating}</em></small>
      <hr/>
      <p>
        {movie.description}
      </p>
        <div className='row'>
        <div className='col'>{mpaa_rate}</div>
        <div className='col'>{score}</div>
        </div>
        
    </div>
  )
}

export default Movie