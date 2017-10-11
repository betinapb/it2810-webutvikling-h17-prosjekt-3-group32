import React, { Component } from 'react';
import 'App.css';

class Task extends Component {
    render() {
        return (
            <tr className="Todo-container">
                <td className="Todo-left">
                    <p>{this.props.taskDesc}</p>
                </td>
                <td className="Todo-right">
                    <div className="Delete-task"
                    onClick={() => this.props.deleteTask(this.props.taskDesc)} />
                </td>
            </tr>
        );
    } // }
}

export default Task;
