import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies/Movies';
import MovieDetail from './components/movieDetail/MovieDetail';
import Header from './components/header/Header';
import { Route, Redirect } from 'react-router-dom';
import { findMovie, allMovies } from './components/ApiCalls'
import MoviePoster from './components/moviePoster/MoviePoster';
import {formatMovieDetails} from './components/Utils'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieID: 0,
      error: ''
    }
  }
  
    componentDidMount() {
      allMovies()
      .then(data=> {
        this.setState({movies: data.movies})
      })
      .catch(() => this.setState({error: "We're experiencing server technical difficulties, please check back again later!"}))
    }
    
    getMovies = (newMovie) => {
      this.setState({ movies: [...this.state.movies, newMovie] });
    }
    
    renderMainPage = () => {
      this.setState({movieID: 0})
    }

    updateMovieID = (id) => {
      findMovie(id)
        .then(data => this.setState({movieID: data.movie}))
        .catch(() => this.setState({error: "We're experiencing server technical difficulties, please check back again later!"}))
    }

    render() {
      return(
        <main className='App'>
          <Header className ='App-header' 
          findMovie = {this.findMovie}
          />
          {!this.state.movies.length && !this.state.error.length &&
            <h2>Loading movies ...</h2>
          }
          {!!this.state.error.length && 
            <h2>{this.state.error}</h2>
          }
          <Route exact path="/" render={ () => {
            return <Movies findMovie={this.updateMovieID} movies={this.state.movies}/>
          }}/>
          <Route path={`/:id`}  render={ () => {
            return <MovieDetail movieInfo = {this.state.movieID} />
          }}/>
          <Redirect to={'/'} />
        </main>
      )
    };
}

export default App;