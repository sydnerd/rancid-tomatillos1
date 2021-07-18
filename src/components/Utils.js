export const formatMovieDetails = (data) => {
  data.movie.genres = data.movie.genres.join(', ')
  data.movie.average_rating = data.movie.average_rating.toFixed(1)
  data.movie.release_date = data.movie.release_date.split('-').shift();
  return data
}

