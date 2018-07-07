import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Memory Game</h1>
        </header>
        <p className="App-intro">
          Click on an image to earn points. Click and image more than once and you lose!
          Good Luck!
        </p>
      </div>
    );
  }
}

export default App;
