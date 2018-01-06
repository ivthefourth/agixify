import React, { Component } from 'react';
import '../App.css';

let pointsBox = {
  textAlign: 'center',
  color: 'blue',
  width: '50%',
}; 

class StoryPoints extends Component {

	render() {

		return(
		  <div className="StoryPoints">
		    <input value={this.props.points}
		      	key={this.props.id}   style={pointsBox}
		    	onChange={(e) => {e.preventDefault(); 
		    	this.props.editPoints(e.target.value, this.props.id); }} />
		  </div>

		);
	}
};

export default StoryPoints;
