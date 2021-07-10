import React from 'react';
import './MoviePoster.css';

const MoviePoster = ({title, rating, image, findMovie, id}) => {
  return (
    <div className="poster" onClick={() => findMovie(id)}>
      <img className="movie-poster" src={image}/>
      <h2>{title}</h2>
      <h3>{rating.toFixed(2)}</h3>
    </div>
  )
}

export default MoviePoster