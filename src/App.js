import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies/Movies';
import MoviePoster from './components/moviePoster/MoviePoster';
import MovieDetail from './components/movieDetail/MovieDetail';
import Header from './components/header/Header';
import { Route, Redirect } from 'react-router-dom';

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
    
    findMovie = (id) => {
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => {if (response.ok) {return response.json()}})
      .then(data => this.setState({movieID: data.movie}))
      .then(console.log(this.state.movieID, ' :this.state.movieID isndie app.js'))
      .then(console.log('findmovie inside fetch call working'))
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
          findMovie = {this.findMovie}
          />
          {!this.state.movies.length && !this.state.error.length &&
            <h2>Loading movies ...</h2>
          }
          {!!this.state.error.length && 
          <h2>{this.state.error}</h2>
          }
          <Route exact path="/" render={({ match }) => {
            return <Movies findMovie={this.findMovie} movies={this.state.movies}/>
          }}/>
          <Route path={`/:id`}  render={({ match }) => {
            console.log(match.params.id, ' :match inside app.js')
            console.log(this.state.movieID, ' :this.state.movieID inside app.js');
            return <MovieDetail movieInfo = {this.state.movieID} />
          }}/>
          <Redirect to={'/'} />
        </main>
      )
    };
}
  

export default App;