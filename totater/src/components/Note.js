import React from 'react';
import 'App.css';

const Note = ({title, note, removeNote}) => (
    <div className="Note-container">
        <h3 className="Note-title">
            {title}
        </h3>
        <p>
            {note}
        </p>
        <div className="Button-box">
            <button onClick={() => removeNote(title)}>DELETE</button>
        </div>
    </div>
);

export default Note;
