import React, { Component } from 'react';

let pointsBox = {
  textAlign: 'center',
  color: 'blue',
  width: '50%',
  margin: '20%',
  fontSize: '2.5rem'
}; 

class StoryPoints extends Component {

	render() {

		return(
		  <div className="StoryPoints">
		    <input type="number" title="Points"   value={this.props.points}
		      	key={this.props.id}   style={pointsBox}
		    	onChange={(e) => {e.preventDefault(); 
		    	this.props.editPoints(e.target.value, this.props.id); }} />
		  </div>

		);
	}
};

export default StoryPoints;
