import React from 'react';
import './MovieDetail.css';
import movieData from '../../movieData';


// const MovieDetail = () => {
  
//   console.log(movieData.movies[0])
//   return (
//     <section>
//       <h2>Title:</h2>
//     </section>
//   )
// }
// {selectedDetails && <button onClick={clearSelection}>HOME</button>}

const MovieDetail = ({movieInfo}) => {
  return (
    <section>
      
      <img className="backdrop" src={movieInfo.backdrop_path}/>
      <h2>Title: {movieInfo.title}</h2>
      <h3>Tagline: {movieInfo.tagline}</h3>
      <p>Overview: {movieInfo.overview}</p>
      <p>Genre: {movieInfo.genres}</p>
      <p>Average Rating: {movieInfo.average_rating}</p>
      <p>Budget: {movieInfo.budget}</p>
      <p>Revenue: {movieInfo.revenue}</p>
      <p>Runtime: {movieInfo.runtime}</p>
      <p>Relase Date: {movieInfo.release_date}</p>
    </section>
  )
}

export default MovieDetail;