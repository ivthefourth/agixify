import React, { Component } from 'react';

let numberStyle = {
	margin: '0.5rem',
  	textAlign: 'center',
 	color: 'rgb(0,180,240)',
 	fontWeight: 'bold',
 	fontSize: '5rem',
}; 

class StoryNumber extends Component {

	render() {

		return(
		  <div className="StoryNumber"   style={numberStyle}  >
		    	#{this.props.number}
		        
		  </div>

		);
	}
};

export default StoryNumber;
