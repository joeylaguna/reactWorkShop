import React, { Component } from 'react';
import './App.css';

const Task = (task, key) => {
  console.log(key);
  const completeTask = (e) => {
    console.log(e.target.innerHTML);
  }

  return (
    <div>
      <p data={key} onClick={completeTask}>{task.task}</p>
    </div>
  )
}

export default Task;
