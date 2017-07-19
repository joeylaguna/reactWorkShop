import React, { Component } from 'react';
import Task from './Task.js';
import './App.css';

class TaskList extends Component {
  render() {
    return (
      <div className="App">
        {this.props.tasks.map((item, index) => {
          {console.log(index)}
          return (
            <Task task={item.taskName} key={index}/>
          );
        })}
      </div>
    );
  }
}

export default TaskList;
