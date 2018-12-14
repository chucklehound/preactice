import React, { Component } from 'react';
import Textbox from './Textbox';
import Clock from './Clock';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello world</h1>
        </header>
        <Textbox ></Textbox>
        <Clock ></Clock>
      </div>
    );
  }
}

export default App;
