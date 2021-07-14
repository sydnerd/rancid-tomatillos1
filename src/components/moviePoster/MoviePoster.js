import React from 'react';
import { Link } from 'react-router-dom';
import './MoviePoster.css';

const MoviePoster = ({title, rating, image, findMovie, id}) => {
  console.log(id, ' :ID inside MoviePoster.js')
  return (
    <Link to={`/${id}`}>
      <div className="poster" id={id} onClick={() => findMovie(id)}>
        <img className="movie-poster" src={image}/>
        <h2 className='movie-poster-title'>{title}</h2>
        <h3 className='movie-poster-rating'>{rating.toFixed(1)}</h3>
      </div>
    </Link>
  )
}

export default MoviePoster