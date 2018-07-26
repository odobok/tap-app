//secrete message ssshhhh!!
//secret message II: electric boogaloo
import React, { Component } from 'react';
import './App.css';
import Search from './containers/search';
import image from './beer.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={image} width="100" />
          <h1 className="App-title">Tap App </h1>
        </header>
        <p className="App-intro">
          Find the closest brewery!
        </p>
        <Search />
      </div>
    );
  }
}

export default App;
