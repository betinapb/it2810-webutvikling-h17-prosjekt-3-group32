import React, { Component } from 'react';
import 'App.css';
import { InputTaskBar, Task } from 'components';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
           tasks: localStorage,
           isShown: false
       };
    }

    addTask = (task) => {
        let key = "t" + task
        localStorage.setItem(key, task)
        this.setState({
            tasks: localStorage
        });
    }

    deleteTask = (taskDesc) => {
        localStorage.removeItem("t" + taskDesc);
        this.setState({
            tasks: localStorage
        });
    }

    todoListList = () => {
        const { tasks } = this.state
        let list = []
        for (var i=0; i < tasks.length; i++) {
            let key = tasks.key(i);
            if (key[0] === "t"){
                let task = tasks.getItem(key);
                list.push(<Task
                    taskDesc={task}
                    key={i}
                    deleteTask={this.deleteTask}
                />);
            }
        }
        return (list);
    }
    ShowHideTodoList = (boolean) => {
        this.setState({
            isShown: boolean
        });
    }
    render() {
        if (this.state.isShown===true){
            return (
                <div className="Todo-list">
                    <div className="Todo-list-spacer">
                        <div className="Hide-todo-list" onClick={() => this.ShowHideTodoList(false)}></div>
                    </div>
                    <InputTaskBar addTask={this.addTask} />
                    <table className="Todo-table">
                        <tbody>
                            {this.todoListList()}
                        </tbody>
                    </table>
                </div>
            );
        }
        else{
            return(
                <div className ="Todo-list">
                    <div className="Todo-list-spacer">
                        <div className="Hide-todo-list" onClick={() => this.ShowHideTodoList(true)}></div>
                    </div>
                </div>
            );
        }
    }
}

export default TodoList;
