import React, { Component } from 'react';
import Textarea from "react-textarea-autosize";
import TaskActionContainer from '../containers/TaskActionContainer'

let textStyle = {
  float: "left",
  resize: "none",
  fontSize: "14px",
  minRows: "10",
  width: "100%",
  outline: "none",
};

let taskStyle = {
  border: "1px solid",
  margin: "0.5rem 0",
}

class Task extends Component {

  render() {
    return (
	    	<div className="TaskComponent" style={taskStyle}>
      		<Textarea className="task-text" style={textStyle}  minRows={3}
      			  value={this.props.text} key={this.props.id}   id={this.props.id}
      	      input="Task"  onChange={(e) => {e.preventDefault(); 
      		    this.props.modifyTaskText(e.target.value, this.props.id); }}/>

          <TaskActionContainer  id={this.props.id}/>

        </div>
    );
  }
}

export default Task;