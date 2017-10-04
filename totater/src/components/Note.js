import React, { Component } from 'react';
import 'App.css';

const Note = ({title, note}) => (
    <div className="Note-container">
        <h3 className="Note-title">
            {title}
        </h3>
        <p>
            {note}
        </p>
    </div>
);

export default Note;
