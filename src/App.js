import React, { Component } from 'react';
import logo from './logo.svg';
import TaskList from './TaskList.js';
import InputArea from './InputArea.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      incompleteTasks: [],
      completedTasks: [],
      showIncompleted: true
    }
    this.addTask = this.addTask.bind(this);
    this.showCompleted = this.showCompleted.bind(this);
    this.showIncompleted = this.showIncompleted.bind(this);
  }

  addTask(task) {
    console.log('working');
    let newObj = {};
    newObj.taskName = task;
    this.setState({
      incompleteTasks: this.state.incompleteTasks.concat(newObj)
    });
  }

  showCompleted() {
    this.setState({
      showIncompleted: false
    });
  }

  showIncompleted() {
    this.setState({
      showIncompleted: true
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.showIncompleted ? <TaskList tasks={this.state.incompleteTasks}/> : ''}
        <InputArea addTask={this.addTask}/>
        <button onClick={this.showIncompleted}>Incomplete</button>
        <button onClick={this.showCompleted}>Completed</button>
      </div>
    );
  }
}

export default App;
