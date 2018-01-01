import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';

class MoveStoryDown extends Component {

	render() {
 		return(
	      	<div className="story-move-down">

		        <FlatButton label="Move Down" 
		          	onClick={(e) => {e.preventDefault();
		            this.props.moveStoryDown(this.props.id); }} />

		    </div>
 		)
	}
};

export default MoveStoryDown;