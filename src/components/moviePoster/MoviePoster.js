import React from 'react';
import { Link } from 'react-router-dom';
import './MoviePoster.css';

const MoviePoster = ({image, findMovie, id}) => {
  console.log(findMovie, ' :updateMovieId inside MoviePoster.js')
  return (
    <Link to={`/${id}`}>
      <div className="poster" id={id} onClick={() => findMovie(id)}>
        <img className="movie-poster" src={image}/>
      </div>
    </Link>
  )
}

export default MoviePoster