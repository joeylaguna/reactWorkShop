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
import './App.css';

class Task extends Component {
  constructor(props) {
    super();
    this.state = {
      complete: false
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleDelete() {
    this.props.deleteItem(this.props.rowNumber);
  }

  handleComplete() {
    this.setState({
      complete: !this.state.complete
    })
  }

  render() {
    return (
      <TableRow key={this.props.key}>
        {this.state.complete ? <TableRowColumn className='complete'>{this.props.item.taskName}</TableRowColumn> : <TableRowColumn>{this.props.item.taskName}</TableRowColumn>}
        <TableRowColumn><Checkbox onClick={this.handleComplete}/></TableRowColumn>
        <TableRowColumn><FontIcon className='material-icons' hoverColor={'#00bcd4'} onClick={this.handleDelete}>delete</FontIcon></TableRowColumn>
      </TableRow>
    )
  }

}

export default Task;
