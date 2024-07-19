import React, { useState } from 'react';
import { Link } from "react-router-dom"

const MovieItem = ({id, title, mpaa_rate, score}) => {
    const [movie, setMovie] = useState({});
    // const id = useParams({id});
    return (
      <div>
        <p className='text-center'><Link to={`/movie/${id}`}>{title}</Link></p>
          <div className='row'>
          <div className='col'>{mpaa_rate}</div>
          <div className='col'>{score}</div>
          </div> 
      </div>
    )
  }

export default MovieItem