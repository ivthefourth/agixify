import React, { Component } from 'react';
import StoryPointsContainer from '../containers/StoryPointsContainer';
import checkered_flag from '../images/checkered-flag.jpg';
import yellow_flag from '../images/yellow-flag.jpg'
import red_flag from '../images/red-flag.jpg';
import '../App.css';

let firstColStyle = {
	borderRight: "5px",
	borderColor: "blue"
}


let imageStyle = {
  height: "60px",
  width: "80px",
  marginTop: "5%",
  border: "0px solid",
}

class StoryCol1 extends Component { 
	render() {

    let flag;

    switch (this.props.status) {
         case "Completed": flag=checkered_flag;
              break;
         case "In Jeopardy": flag=yellow_flag;
              break;
         case "Failed": flag=red_flag;
              break;
         default: flag=null;
        }

		return(
  <div className="StoryCol1 col-sm-1" style={firstColStyle}>
      <StoryPointsContainer points={this.props.points} id={this.props.id}/>
      <img src={flag} alt="" style={imageStyle} />
  </div>
  )}
};


export default StoryCol1;