import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';

// We need a function that will do read from an array? that will re-order the 
// story by moving it -1 position

class MoveStoryDown extends Component {
	constructor (props) {
		super(props)
		this.state = {
			move_down: true
		}
	}

	render() {
 		return(
	      	<div className="story-move-down">

		        <FlatButton label="Move Down" value={this.props.move_down} 
		          	onClick={(e) => {e.preventDefault();
		            this.props.MoveStoryDown(e.target.value); console.log("Hey it worked");}} />

		      </div>
 		)
	}
};

export default MoveStoryDown;