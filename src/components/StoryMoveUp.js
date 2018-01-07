import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';

	let disabled;

class MoveStoryUp extends Component {

	change(number) {
		if (number === 1) {
			disabled = true;
		} else {
			disabled = false;
		}
	}

	render() {
		return(
		    <div className="story-move-up">

		        <FlatButton label="Move Up"  
		        	disabled={this.change(this.props.number)}
		       		onClick={(e) => {e.preventDefault();
		            this.props.moveStoryUp(this.props.id)}}  />

		    </div>
		)
	}
 };

export default MoveStoryUp;