import React from 'react';
import './MovieDetail.css';

const MovieDetail = ({movieInfo}) => {
  let budget = movieInfo.budget ? `Budget: $${movieInfo.budget}` : false
  let revenue = movieInfo.revenue ? `Revenue: $${movieInfo.revenue}` : false
  let genre = movieInfo.genres ? `Genre(s): ${movieInfo.genres}` : false

  return (
    <section className='movie-detail-section'> 
      <div className="movie-detail-backdrop">
        <img className="backdrop" src={movieInfo.backdrop_path}/>
      </div>
      <div className="movie-detail-list">
        <h2 className="title">{movieInfo.title}</h2>
        <h3 className="tagline">{movieInfo.tagline}</h3>
        <p className="overview">{movieInfo.overview}</p>
        <p className="genre">{genre}</p>
        <p className="average-rating">Average Rating: {movieInfo.average_rating}</p> 
        <p className="budget">{budget}</p>
        <p className="revenue">{revenue}</p>
        <p className="runtime">Runtime: {movieInfo.runtime} min</p>
        <p className="release-date">Release Date: {movieInfo.release_date}</p>
      </div>
    </section> 
  )
}

export default MovieDetail;