/**
 * @Date:   2019-11-06T22:52:00+00:00
 * @Last modified time: 2019-11-07T22:25:25+00:00
 */

import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import MovieList from './MovieList';
import Pagination from './Pagination';
import MovieInfo from './MovieInfo';
import About from './About';
import Home from './Home';
import {  BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: '',
      totalResult: 0,
      currentPage: 1,
      currentMovie: null
    }
    this.apiKey = 'd4092defdb526bb49dad441d491ff65e';
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=${this.state.searchTerm}&page=1&include_adult=false`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ movies: [...data.results], totalResult: data.total_results})   //spreading out the contents
      })
  }

  handleInput = (evt) => {
    this.setState({ searchTerm: evt.target.value })
  }

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=${this.state.searchTerm}&page=${pageNumber}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ movies: [...data.results], currentPage: pageNumber })
      })
  }

  movieInfo = (id) => {
    const selectedMovie = this.state.movies.filter(movie => movie.id == id)
    const newCurrentMovie = selectedMovie.length > 0 ? selectedMovie[0] : null
    this.setState({ currentMovie: newCurrentMovie })
  }

  movieInfoBack = () => {
    this.setState({ currentMovie: null})
  }

  render() {
    const numberOfPages = Math.floor(this.state.totalResult / 20);
    return (
      <div className="App">

        <Router>
        <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/home" component={Home} />
        </Switch>
        </div>
        </Router>

        { this.state.currentMovie == null ? <div>
          <Search handleSubmit={this.handleSubmit} handleInput= {this.handleInput}/>
          <MovieList movieInfo={this.movieInfo} movies={this.state.movies} />
        </div> : <MovieInfo currentMovie={this.state.currentMovie} movieInfoBack={this.movieInfoBack} />}
        { this.state.totalResult > 20 && this.state.currentMovie == null ? <Pagination pages={numberOfPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : '' }
      </div>
    );
  }
}

export default App;
