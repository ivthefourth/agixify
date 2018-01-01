import React from 'react';
import IconButton from 'material-ui/IconButton';
import AddSign from 'material-ui/svg-icons/content/add';
import '../App.css';


const CreateTask = () => (
  		<IconButton className="task-button"
		    tooltip="Add New Task"	    tooltipPosition="top-center"
		    onChange={(e) => {e.preventDefault();
		    this.props.task(e.target.value); }}  >
	  		<AddSign />
    	</IconButton>

);

export default CreateTask;