import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import movieData from './movieData.js';
import MoviePoster from './components/moviePoster/MoviePoster';
import Movies from './components/movies/Movies';
import MovieDetail from './components/movieDetail/MovieDetail';
import Header from './components/header/Header'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieID: 0
      // error: ''
    }
  }

    componentDidMount() {
      fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data=> {
        this.setState({movies: data.movies})
        console.log(data, "This is our data array")
      })
      .catch(() => this.setState({error: "Something went wrong!"}))
    }
    
    findMovie = (id) => {
      // this.setState({movieID: id})
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => {if (response.ok) {return response.json()}})
      .then(data => this.setState({movieID: data.movie}))
    }
    
    getMovies = (newMovie) => {
      this.setState({ movies: [...this.state.movies, newMovie] });
    }
    
    renderMainPage = () => {
      console.log('clicked page button rendering')
      // this.render()
      this.setState({movieID: 0})
    }

    render() {
      return(
        <main className='App'>
          <Header className ='App-header' 
          findMovie = {this.findMovie}
          renderMainPage = {this.renderMainPage}
          />
          { this.state.movieID ? <MovieDetail movieInfo={this.state.movieID}/> : 
            // { this.state.movieID ? <MovieDetail movieInfo={this.state.movies.find(movie => movie.id === this.state.movieID)}/> : 
            <Movies 
            movies = {this.state.movies} 
            findMovie = {this.findMovie}
            />
          }
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