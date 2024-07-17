import React from 'react'

const Movie = ({ title, mpaa_rate, score}) => {
  return (
    <div>
      <p className='text-center'>{title}</p>
        <div className='row'>
        <div className='col'>{mpaa_rate}</div>
        <div className='col'>{score}</div>
        </div>
        
    </div>
  )
}

export default Movie