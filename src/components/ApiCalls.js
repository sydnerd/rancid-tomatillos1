import { formatMovieDetails } from "./Utils"

export const findMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    // .then(data => console.log(data.movie.genres, 'data inside of api calls'))
    // .then(data => formatMovieDetails(data.movie.genres))
}

export const allMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
}