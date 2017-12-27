import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';

// Need a function that will perform a delete from an array

class StoryDelete extends Component { 
	constructor (props) {
		super(props);
		this.state = {
			delete_story: true
		}
	}

	render() {
		return(
		    <div className="story-move-up">

		        <FlatButton label="Delete Story" value={this.props.delete_story}
		          	onClick={(e) => {e.preventDefault(); 
		            this.props.deleteStory(e.target.value);}} />

		    </div>
 		)
 	}
};

export default StoryDelete;