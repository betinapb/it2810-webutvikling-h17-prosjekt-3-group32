import React, { Component } from 'react';
import 'App.css';
import { CreateNote, Note } from 'components';

class Notes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: localStorage
        };
        this.noteList = this.noteList.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.createNote = this.createNote.bind(this);
    }

    createNote(title, note) {
        let key = "n" + title
        localStorage.setItem(key, note)
        this.setState({
            notes: localStorage
        });
    }

    removeNote(title) {
        localStorage.removeItem("n" + title);
        this.setState({
            notes: localStorage
        });
    }

    noteList() {
        const { notes } = this.state
        let list = []
        for (var i=0; i < notes.length; i++) {
            let key = notes.key(i);
            if (key[0] === "n"){
                let title = key.slice(1)
                let note = notes.getItem(key);
                list.push(
                    <Note
                        key={i}
                        className="Note-container"
                        title={title}
                        note={note}
                        removeNote={this.removeNote}
                    />);
            }
        }
        return (list);
    }

    render() {
        return (
            <div className="Notes-container">
                <div className="Create-container">
                    <CreateNote
                        createNote={this.createNote}
                    />
                </div>
                <div className="Notelist-container">
                    {this.noteList()}
                </div>
            </div>
        );
    }
}

export default Notes;
