import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';

class MoveStoryUp extends Component {

	render() {
		return(
		    <div className="story-move-up">

		        <FlatButton label="Move Up" value={this.props.number} 
		       		onClick={(e) => {e.preventDefault();
		            this.props.moveStoryUp(e.target.value); console.log("Hey it worked");}} />

		    </div>
		)
	}
 };

export default MoveStoryUp;