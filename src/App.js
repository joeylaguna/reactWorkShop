import React, { Component } from 'react';
import logo from './logo.svg';
import TaskList from './TaskList.js';
import InputArea from './InputArea.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Card from 'material-ui/Card';
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
    this.deleteItem = this.deleteItem.bind(this);
    this.completeTask = this.completeTask.bind(this);
  }

  addTask(task) {
    let newObj = {};
    newObj.taskName = task;
    newObj.taskComplete = false;
    this.setState({
      incompleteTasks: this.state.incompleteTasks.concat(newObj)
    });
  }

  completeTask(index) {
    let newState = this.state.incompleteTasks.slice();
    newState[index].taskComplete = !newState[index].taskComplete;
    this.setState({
      incompleteTasks: newState
    });
  }

  deleteItem(index) {
    let newTaskList = this.state.incompleteTasks.slice();
    newTaskList.splice(index, 1);
    this.setState({
      incompleteTasks: newTaskList
    });
  }

  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <Card>
        <InputArea addTask={this.addTask}/>
        {this.state.showIncompleted ? <TaskList tasks={this.state.incompleteTasks}deleteItem={this.deleteItem} completeTask={this.completeTask}/> : ''}
        </Card>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
