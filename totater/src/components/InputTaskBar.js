import React, { Component } from 'react';
import 'App.css';


class InputTaskBar extends Component {
    constructor(props) {
    super(props);
    this.state = {value: ''};

  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.value === ''){
        return
    }
    else {
    this.sendToParent(this.state.value);
    this.setState({value: ''});
    }
  }


   sendToParent = (task) => {
       this.props.addTask(task);
   }

   render() {
      return (
          <form onSubmit={this.handleSubmit}>
              <label className="Todo-label-box">
                  <input
                      placeholder='Todo'
                      type="text"
                      value={this.state.value}
                      onChange={this.handleChange} />
              </label>
          </form>
      )
  }

}

export default InputTaskBar;
