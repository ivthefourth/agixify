import React from 'react';
import IconButton from 'material-ui/IconButton';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import {blue500} from 'material-ui/styles/colors';
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
			color={blue500}    style={styles.large}  iconStyle={styles.largeIcon}
		    tooltip="Add New Story"	    tooltipPosition="top-right"
		    onChange={(e) => {e.preventDefault();
		    this.props.addStory(e.target.value); }}  >
      		<AddCircle />
	    </IconButton>

);

export default CreateStory;