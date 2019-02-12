import React, { Component } from 'react';
import './app.css';
import Adventure from '../Adventure';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Adventure dimension="C-137" />
      </div>
    );
  }
}

export default App;
