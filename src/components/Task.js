import React, { Component } from 'react';
import {Card, CardText} from 'material-ui/Card';
import TaskAction from './TaskAction';
import '../App.css';

class Task extends Component {

  render() {
    return (
      <Card >
	    	
		<CardText className="task-text" contentEditable="true" 
			value={this.props.text_field}
	      	input="Task"  onChange={(e) => {e.preventDefault(); 
		    this.props.modifyTask(e.target.value); }}/>



       </Card> 

    );
  }
}

export default Task;