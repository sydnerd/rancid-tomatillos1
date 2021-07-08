import React from 'react';
import './MoviePoster.css';

const MoviePoster = ({title, rating, image}) => {
  return (
    <div className="poster">
      <img src={image}/>
      <h2>{title}</h2>
      <h3>{rating.toFixed(2)}</h3>
    </div>
  )
}

export default MoviePoster