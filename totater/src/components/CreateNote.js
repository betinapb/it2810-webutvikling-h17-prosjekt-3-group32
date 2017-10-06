import React, { Component } from 'react';
import 'App.css';
import Textarea from 'react-textarea-autosize';

export default class CreateNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            note: '',
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
        const { title, note } = this.state;

        this.props.createNote(title, note)
        this.setState({
            title: '',
            note: '',
         });
         e.preventDefault();
    }

    render() {

        const { title, note } = this.state;

        return (
            <div className="Form-container">
                <form onSubmit={this.onSubmit}>
                    <div className="Label-box">
                        <label>
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={this.onChange}
                        />
                        </label>
                    </div>
                    <div className="Text-box">
                        <Textarea
                            minRows={3}
                            maxRows={6}
                            placeholder="Take a note..."
                            value={note}
                            onChange={this.onNoteChange}
                            maxLength='150'
                        />
                    </div>
                    <div className="Button-box">
                        <input type="submit" value="DONE" />
                    </div>
                </form>
            </div>
        );
    }
}
