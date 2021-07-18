import React from 'react';
import { Link } from 'react-router-dom';
import './MoviePoster.css';

const MoviePoster = ({image, findMovie, id}) => {
  return (
    <Link to={`/${id}`}>
      <div className="poster" id={id} onClick={() => findMovie(id)}>
        <img alt="movie-poster" className="movie-poster" src={image}/>
      </div>
    </Link>
  )
}

export default MoviePoster