import React from 'react';
import './MovieDetail.css';


const MovieDetail = ({movieInfo}) => {
  // console.log('movieInfo in movieDetails: ', movieInfo.average_rating);
  let averageRating = movieInfo.average_rating
  return (
    <section className='movie-detail-section'> 
      <div className="movie-detail-backdrop">
        <img className="backdrop" src={movieInfo.backdrop_path}/>
      </div>
      <div className="movie-detail-list">
        <h2 className="title">{movieInfo.title}</h2>
        <h3 className="tagline">{movieInfo.tagline}</h3>
        <p className="overview">{movieInfo.overview}</p>
        <p className="genre">Genre: {movieInfo.genres}</p>
        <p className="average-rating">Average Rating: {averageRating}</p>
        <p className="budget">Budget: ${movieInfo.budget}</p>
        <p className="revenue">Revenue: ${movieInfo.revenue}</p>
        <p className="runtime">Runtime: {movieInfo.runtime} min</p>
        <p className="release-date">Relase Date: {movieInfo.release_date}</p>
      </div>
    </section>
  )
}

export default MovieDetail;