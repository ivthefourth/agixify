import React, { Component } from 'react';
import '../App.css';

let pointsBox = {
  textAlign: 'center',
  color: 'blue',
  width: '50%',
}; 

class StoryPoints extends Component {

	render() {
		console.log("points is", this.props.points);

	return(
	  <div className="StoryPoints">
	    <input    value={this.props.points}  	style={pointsBox}
	    	onChange={(e) => {e.preventDefault(); 
	    	this.props.pointsEdited(e.target.value); }} />
	  </div>

	  );
	}
};

export default StoryPoints;
