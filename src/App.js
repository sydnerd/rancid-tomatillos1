import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies/Movies';
import MoviePoster from './components/moviePoster/MoviePoster';
import MovieDetail from './components/movieDetail/MovieDetail';
import Header from './components/header/Header';
import { Route, Redirect } from 'react-router-dom';
import { findMovie } from './components/ApiCalls'

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
      fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data=> {
        this.setState({movies: data.movies})
      })
      .catch(() => this.setState({error: "Something went wrong!"}))
    }
    
    getMovies = (newMovie) => {
      this.setState({ movies: [...this.state.movies, newMovie] });
    }
    
    renderMainPage = () => {
      this.setState({movieID: 0})
    }
    
    render() {
      return(
        <main className='App'>
          <Header className ='App-header' 
          findMovie = {findMovie}
          />
          {!this.state.movies.length && !this.state.error.length &&
            <h2>Loading movies ...</h2>
          }
          {!!this.state.error.length && 
            <h2>{this.state.error}</h2>
          }
          <Route exact path="/" render={ () => {
            return <Movies findMovie={findMovie} movies={this.state.movies}/>
          }}/>
          <Route path={`/:id`}  render={ () => {
            return <MovieDetail movieInfo = {this.state.movieID} />
          }}/>
          <Redirect to={'/'} />
        </main>
      )
    };
}
  // fetch data and send into cleaning function, then set state with the cleaned data
  //helper file for api calls to get logic outside of app.js then import the function that callls the api
  //inside the helper file is where to do the .toFixed / .join() -- this way info is coming to me in format i want
  //helper file to clean data before going into state
  //destructor state + movieInfo
//if on homepage, just refresh to {'/'} else go to this.state.movieID
export default App;