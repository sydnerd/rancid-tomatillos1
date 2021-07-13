import React from 'react';
import './MovieDetail.css';


const MovieDetail = ({movieInfo}) => {
  return (
    <section> 
      <img className="backdrop" src={movieInfo.backdrop_path}/>
      <h2>{movieInfo.title}</h2>
      <h3>{movieInfo.tagline}</h3>
      <p>{movieInfo.overview}</p>
      <p>Genre: {movieInfo.genres}</p>
      <p>Average Rating: {movieInfo.average_rating}</p>
      <p>Budget: ${movieInfo.budget}</p>
      <p>Revenue: ${movieInfo.revenue}</p>
      <p>Runtime: {movieInfo.runtime} min</p>
      <p>Relase Date: {movieInfo.release_date}</p>
    </section>
  )
}

export default MovieDetail;