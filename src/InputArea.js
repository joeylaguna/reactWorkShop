import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import './App.css';

class InputArea extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.addTask(this.refs.task.getValue());
    this.refs.toDoForm.reset();
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} ref='toDoForm'>
          <TextField hintText='Add task' ref='task' />
        </form>
      </div>
    );
  }
}

export default InputArea;