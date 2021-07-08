import React from 'react';
import './MovieDetail.css';
import movieData from '../../movieData';


const MovieDetail = ({movie}) => {
  return (
    <section>
      console.log(movie)
      <h2>Title:</h2>
    </section>
  )
}
// const MovieDetail = ({movie}) => {
//   return (
//     <section>
//       <h2>Title: {movie.title}</h2>
//       <h3>Tagline: {movie.tagline}</h3>
//       <p>Overview: {movie.overview}</p>
//       <p>Genre: {movie.genres}</p>
//       <p>Average Rating: {movie.average_rating}</p>
//       <p>Budget: {movie.budget}</p>
//       <p>Revenue: {movie.revenue}</p>
//       <p>Runtime: {movie.runtime}</p>
//       <p>Relase Date: {movie.release_date}</p>
//     </section>
//   )
// }

export default MovieDetail;