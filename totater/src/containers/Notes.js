import React, { Component } from 'react';

class Notes extends Component {
  render() {
    return (
      <div className="Notes">
        <header className="Notes-header">
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
