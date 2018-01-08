import React from 'react';
import IconButton from 'material-ui/IconButton';
import AddSign from 'material-ui/svg-icons/content/add-circle';

const styles = {
	largeIcon: {
		color: 'orangered',
	},
}

const CreateTask = (props) => (
  		<IconButton className="task-button col-sm-1"   
  			iconStyle={styles.largeIcon}   style={{textAlign: 'center', width: '100%'}}
		    tooltip="Add New Task"	    tooltipPosition="top-center"
		    onClick={(e) => {e.preventDefault();
		    props.createTask(props.story_id, props.default_status); }}  >
	  		<AddSign />
    	</IconButton>

);

export default CreateTask;