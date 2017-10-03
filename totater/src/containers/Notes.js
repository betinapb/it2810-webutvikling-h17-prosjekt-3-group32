import React, { Component } from 'react';
import 'App.css';
import Textarea from 'react-textarea-autosize';

class Notes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            note: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onNoteChange = this.onNoteChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ title: e.target.value });
    }

    onNoteChange(e) {
        this.setState({ note: e.target.value });
    }

    onSubmit(e) {
        //Save to HTML Local Storage
        alert("hei")
        e.preventDefault();
    }

    render() {
        return (
            <div className="Notes-container">
                <p className="App-intro">
                    Her kan man legge inn notater
                </p>
                <div className="Form-container">
                    <form onSubmit={this.onSubmit}>
                        <div className="Label-box">
                            <label>
                            <input
                                placeholder="Title"
                                onChange={this.onChange}
                            />
                            </label>
                        </div>
                        <div className="Text-box">
                            <Textarea
                                minRows={2}
                                maxRows={6}
                                placeholder="Take a note..."
                                onChange={this.onNoteChange}
                                maxLength='150'
                            />
                        </div>
                        <div className="Button-box">
                            <input type="submit" value="DONE" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Notes;
