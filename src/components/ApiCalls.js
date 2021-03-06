import { formatMovieDetails } from "./Utils"

export const findMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => formatMovieDetails(data))
}

export const allMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
}