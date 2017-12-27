import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';

// Need a function that will perform a delete from an array

class StoryDelete extends Component { 

	render() {
		return(
		    <div className="story-move-up">

		        <FlatButton label="Delete Story" value={this.props.number}
		          	onClick={(e) => {e.preventDefault(); 
		            this.props.deleteStory(e.target.value);}} />

		    </div>
 		)
 	}
};

export default StoryDelete;