import React, { Component } from 'react';
import '../App.css';

class StoryCol1 extends Component { 
	render() {
		return(
  <div className="StoryCol1 col-sm-1 flex-box" value={this.props.colOne}

      />
  )}
};


  // For this one, when the Set Status option is selected, we need to do something
  // like change color of div here 

export default StoryCol1;