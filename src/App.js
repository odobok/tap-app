//secrete message ssshhhh!!
//secret message II: electric boogaloo
import React, { Component } from 'react';
import './App.css';
import Search from './containers/search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tap-App</h1>
        </header>
        <p className="App-intro">
          Find the closest brewery. Enter your zip.
        </p>
        <Search />
      </div>
    );
  }
}

export default App;
