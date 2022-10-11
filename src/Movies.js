import React from 'react'
import "./movies.css"

const Movies = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p className="ok">{movie.Year}</p>
      </div>
      <div className='image-div'>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} alt="" className="movie-p" />
      </div>
      <div className='desc'>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  )
}

export default Movies