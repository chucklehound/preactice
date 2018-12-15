import React, { Component } from 'react';
import Textbox from './Textbox';
import Clock from './Clock';
import Card from './Card/Card';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Card >
            <header className="App-header">
              <h1>Hello world</h1>
            </header>
            <Textbox ></Textbox>
            <Clock ></Clock>
          </Card>
      </div>
    );
  }
}

export default App;
