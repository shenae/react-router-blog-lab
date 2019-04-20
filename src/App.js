import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import Home from './components/Home.js';
import About from './components/About.js';
import Blog from './components/Blog.js';
import FavoriteFood from './components/FavoriteFood.js';
import FavoriteMovie from './components/FavoriteMovie.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/FavoriteFood">Favorite Food</Link>
            <Link to="/FavoriteMovie">Favorite Movie</Link>
      </nav>
      <main>
        <Route path="/" exact component={Home}/> 
        <Route path="/About" render={About}/>
        <Route path="/Blog" render={Blog}/>
        <Route path="/FavoriteFood" render={FavoriteFood}/>
        <Route path="/FavoriteMovie" render={FavoriteMovie}/>
      </main>
    </div>
    );
  }
}

export default App
