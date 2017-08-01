import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import FontIcon from 'material-ui/FontIcon';
import Task from './Task.js';
import './App.css';

const TaskList = (props) => {
  const handleDelete = (e) => {
  }
  return (
      <Table>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn className='center'>Task</TableHeaderColumn>
        <TableHeaderColumn className='center'>Complete?</TableHeaderColumn>
        <TableHeaderColumn className='center'>Remove</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {props.tasks.map((item, i) => {
        return (
          <Task item={item} key={i} deleteItem={props.deleteItem} completeTask={props.completeTask}/>
        )
      })}
    </TableBody>
  </Table>
  )
}

export default TaskList;
