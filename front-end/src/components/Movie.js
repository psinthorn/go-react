import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Movie = ({ title, id, mpaa_rate, score}) => {
  const [movie, setMovie] = useState({});
  // const id = useParams({id});
  return (
    <div>
      <p className='text-center'><Link to={`/movies/${id}`}>{title}</Link></p>
        <div className='row'>
        <div className='col'>{mpaa_rate}</div>
        <div className='col'>{score}</div>
        </div>
        
    </div>
  )
}

export default Movie