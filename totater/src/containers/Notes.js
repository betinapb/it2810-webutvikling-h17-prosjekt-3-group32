import React, { Component } from 'react';
import 'App.css';
import { CreateNote, Note } from 'components';

class Notes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: localStorage
        };
    }

    render() {
        return (
            <div className="Notes-container">
                <div className="Create-container">
                    <CreateNote />
                </div>
                <div className="Notelist-container">
                    <Note
                        className="Note-container"
                        title="Husk"
                        note="Dette er det du skal huske"
                    />
                </div>
            </div>
        );
    }
}

export default Notes;
