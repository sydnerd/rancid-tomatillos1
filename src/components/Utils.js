export const formatMovieDetails = (data) => {
  console.log(data, "THIS IS DATA")
  data.movie.genres = data.movie.genres.join(' ')
  data.movie.average_rating = data.movie.average_rating.toFixed(2)
  console.log(data.movie.genres, "this is the data after join")
  return data
}

