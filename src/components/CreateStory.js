import React from 'react';
import IconButton from 'material-ui/IconButton';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import '../App.css';

const styles = {
	largeIcon: {
		width: 50,
		height: 50,
	},
	large: {
		width: 110,
		height: 110,
	}
}

const CreateStory = () => (
		<IconButton className="story-button"
			style={styles.large}  iconStyle={styles.largeIcon}
		    tooltip="Add New Story"	    tooltipPosition="top-right"
		    onChange={(e) => {e.preventDefault();
		    this.props.addStory(this.props.id); }}  >
      		<AddCircle />
	    </IconButton>

);

export default CreateStory;