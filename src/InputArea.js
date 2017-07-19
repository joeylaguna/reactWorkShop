import React, { Component } from 'react';
import './App.css';

class InputArea extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.addTask(this.refs.task.value);
    this.refs.toDoForm.reset();
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} ref='toDoForm'>
          <input type='text' onChange={this.handleChange} placeholder='Enter task!' ref='task'></input>
        </form>
      </div>
    );
  }
}


export default InputArea;