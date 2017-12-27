import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';

class MoveStoryDown extends Component {

	render() {
 		return(
	      	<div className="story-move-down">

		        <FlatButton label="Move Down" value={this.props.number} 
		          	onClick={(e) => {e.preventDefault();
		            this.props.MoveStoryDown(e.target.value); console.log("Hey it worked");}} />

		    </div>
 		)
	}
};

export default MoveStoryDown;