import React from 'react'

const MovieItem = () => {
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

export default MovieItem