import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import movieData from './movieData.js';
import MoviePoster from './components/moviePoster/MoviePoster';
import Movies from './components/movies/Movies'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieID: 0
      // error: ''
    }
  }

    // componentDidMount() {
    //   fetch('http://localhost:3001/api/v1/ideas')
    //   .then(response => response.json())
    //   .then(data=> {
    //     this.setState({ideas: data})
    //     console.log(data, "This is our data array")
    //   })
    //   .catch(() => this.setState({error: "Something went wrong!"}))
    // }

    findMovie = id => {
      this.setState({movieID: id})
    }
    
    getMovies = (newMovie) => {
      this.setState({ movies: [...this.state.movies, newMovie] });
    }

    render() {
      return(
        <main className='App'>
          <h1>Rancid Tomatillos</h1>
          { this.state.movieID ? <MovieDetail movie={this.state.movies.find(movie => movie.id === this.state.movieID)}/> : <Movies movies={this.state.movies} />}
          <Movies movies={this.state.movies} />
          
          {/* {!this.state.movies.length && !this.state.error.length &&
            <h2>Loading ideas ...</h2>
          }
          {!!this.state.error.length && 
          <h2>{this.state.error}</h2>
          }
          <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} /> */}
        </main>
      )
    };
}
  

export default App;