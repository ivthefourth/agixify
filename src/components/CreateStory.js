import React from 'react';
import IconButton from 'material-ui/IconButton';
import AddBox from 'material-ui/svg-icons/content/add-box';
import '../App.css';


const CreateStory = () => (
	<div className="story-button">
		<IconButton
		    iconClassName="muidocs-icon-custom-github" tooltip="Add New Story"
		    tooltipPosition="top-center">
      		<AddBox />
	    </IconButton>
	</div>

);

export default CreateStory;