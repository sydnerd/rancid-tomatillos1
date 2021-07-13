import React from 'react';
import { Link } from 'react-router-dom';
import './MoviePoster.css';

const MoviePoster = ({title, rating, image, findMovie, id}) => {
  return (
    <Link to={`/${id}`}>
      <div className="poster" onClick={() => findMovie(id)}>
        <img className="movie-poster" src={image}/>
        <h2>{title}</h2>
        <h3>{rating}</h3>
      </div>
    </Link>
  )
}

export default MoviePoster