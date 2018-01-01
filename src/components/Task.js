import React, { Component } from 'react';
import '../App.css';

class Task extends Component {
  render() {
    return (
      <div className="Task flex-box" value={this.props.text_field}
      	input="Task"  onChange={(e) => {e.preventDefault(); 
	    this.props.modifyTask(e.target.value); console.log("here's my task");}}>
	    	Task
       </div> 

    );
  }
}

export default Task;