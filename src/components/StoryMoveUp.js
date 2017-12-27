import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';

// We need a function that will do read from an array? that will re-order the 
// story by moving it -1 position

class MoveStoryUp extends Component {
	constructor (props) {
		super(props)
		this.state = {
			move_up: true
		}
	}

		render() {
			return(
			    <div className="story-move-up">

			        <FlatButton label="Move Up" value={this.props.move_up} 
			       		onClick={(e) => {e.preventDefault();
			            this.props.moveStoryUp(e.target.value); console.log("Hey it worked");}} />

			    </div>
			)
		}
 };

export default MoveStoryUp;