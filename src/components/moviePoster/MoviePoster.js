import React from 'react';
import { Link } from 'react-router-dom';
import './MoviePoster.css';
// import { findMovie } from './components/ApiCalls'

const MoviePoster = ({title, rating, image, findMovie, id}) => {
  // console.log(id, ' :ID inside MoviePoster.js')
  return (
    <Link to={`/${id}`}>
      <div className="poster" id={id} onClick={() => findMovie(id)}>
        <img className="movie-poster" src={image}/>
      </div>
    </Link>
  )
}

export default MoviePoster