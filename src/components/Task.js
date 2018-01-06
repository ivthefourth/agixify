import React, { Component } from 'react';
import Textarea from "react-textarea-autosize";

let textStyle = {
  float: "left",
  resize: "none",
  fontSize: "14px",
  minRows: "10",
  width: "100%",
  outline: "none",
};

class Task extends Component {

  render() {
    return (
	    	<div className="TaskComponent">
      		<Textarea className="task-text" style={textStyle}  minRows={3}
      			  value={this.props.text} key={this.props.id}
      	      input="Task"  onChange={(e) => {e.preventDefault(); 
      		    this.props.modifyTaskText(e.target.value, this.props.id); }}/>


        </div>
    );
  }
}

export default Task;