import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';

class MoveStoryUp extends Component {

	render() {
		return(
		    <div className="story-move-up">

		        <FlatButton label="Move Up"  
		       		onClick={(e) => {e.preventDefault();
		            this.props.moveStoryUp(this.props.id); }} />

		    </div>
		)
	}
 };

export default MoveStoryUp;