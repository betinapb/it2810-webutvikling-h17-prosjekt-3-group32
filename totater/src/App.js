import React, { Component } from 'react';
import Notes, {TodoList} from 'containers';
class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Totater</h1>
                </header>
                <div className="App-parts">
                    <Notes />
                    <TodoList />
                </div>
            </div>
        );
    }
}

export default App;
