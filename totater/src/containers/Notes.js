import React, { Component } from 'react';
import 'App.css';

class Notes extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mine notater</h1>
        </header>
        <p className="App-intro">
          Her kan man legge inn notater
        </p>
      </div>
    );
  }
}

export default Notes;
