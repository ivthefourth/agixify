import React from 'react';
import IconButton from 'material-ui/IconButton';
import AddSign from 'material-ui/svg-icons/content/add';
import '../App.css';


const CreateTask = (props) => (
  		<IconButton className="task-button col-sm-1"
		    tooltip="Add New Task"	    tooltipPosition="top-center"
		    onClick={(e) => {e.preventDefault();
		    props.createTask(props.story_id, props.default_status); }}  >
	  		<AddSign />
    	</IconButton>

);

export default CreateTask;