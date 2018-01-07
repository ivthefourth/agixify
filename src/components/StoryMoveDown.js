import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

class MoveStoryDown extends Component {

	render() {
 		return(
	      	<div className="story-move-down">

		        <FlatButton label="Move Down" 
		        	disabled={this.props.isLastStory}
		          	onClick={(e) => {e.preventDefault();
		            this.props.moveStoryDown(this.props.id); }} />

		    </div>
 		)
	}
};

export default MoveStoryDown;