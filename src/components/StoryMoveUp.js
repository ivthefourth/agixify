import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';


class MoveStoryUp extends Component {

	change(number) {
	
	let disabled;

		console.log(number);
		if (number === 1) {
			disabled = true;
		} else {
			disabled = false;
		}
		return(disabled);
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