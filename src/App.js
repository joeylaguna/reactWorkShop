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
  }

  addTask(task) {
    let newObj = {};
    newObj.taskName = task;
    this.setState({
      incompleteTasks: this.state.incompleteTasks.concat(newObj)
    });
  }

  deleteItem(index) {
    console.log('here');
    let newTaskList = this.state.incompleteTasks.slice();
    console.log(newTaskList);
    newTaskList.splice(index, 1);
    console.log(newTaskList);
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
        {this.state.showIncompleted ? <TaskList tasks={this.state.incompleteTasks}deleteItem={this.deleteItem} /> : ''}
        </Card>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
