import React from 'react';
import IconButton from 'material-ui/IconButton';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import '../App.css';

const styles = {
	largeIcon: {
		width: 50,
		height: 50,
		color: 'orangered',
	},
	large: {
		width: 110,
		height: 110,
	}
}

const CreateStory = (props) => (
		<IconButton className="story-button"
			style={styles.large}  iconStyle={styles.largeIcon}
		    tooltip="Add New Story"	    tooltipPosition="top-right"
		    onClick={(e) => {e.preventDefault();
		    props.addStory();  }}  >
      		<AddCircle />
	    </IconButton>

);

export default CreateStory;