import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';


class StoryDelete extends Component { 

	render() {
		return(
		    <div className="story-move-up">

		        <FlatButton label="Delete Story" 
		          	onClick={(e) => {e.preventDefault(); 
		            this.props.deleteStory(this.props.id);}} />

		    </div>
 		)
 	}
};

export default StoryDelete;