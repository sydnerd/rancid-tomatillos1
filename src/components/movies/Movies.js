import React from 'react';
import MoviePoster from '../moviePoster/MoviePoster'
import './Movies.css';
// import movieData from '../../movieData';

const Movies = ({findMovie, movies}) => {
// let movies1 = findMovie.movies
  const movieCards = movies.map(movie => {
    return (
      <MoviePoster
        title={movie.title}
        rating={movie.average_rating}
        image={movie.poster_path}
        id={movie.id}
        key={movie.id}
        findMovie={findMovie}
      />
    )
  })

  return (
    <div className='movies-container'>
      {movieCards}
    </div>
  )
}

export default Movies;