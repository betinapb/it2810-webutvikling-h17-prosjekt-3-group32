import React, { Component } from 'react';
import Notes from 'containers';
class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Mine notater</h1>
                </header>
                <Notes />
            </div>
        );
    }
}

export default App;
