import React, { Component } from 'react';
import StoryPointsContainer from '../containers/StoryPointsContainer';
import StoryNumber from './StoryNumber'
import CreateTaskContainer from '../containers/CreateTaskContainer';
import checkered_flag from '../images/checkered-flag.jpg';
import yellow_flag from '../images/yellow-flag.jpg'
import red_flag from '../images/red-flag.jpg';
import '../App.css';

let firstColStyle = {
  textAlign: "center",
}


let imageStyle = {
  height: "60px",
  width: "80px",
  marginTop: "5%",
  border: "solid 0px transparent",
  marginTop: '1rem',
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
      <StoryNumber number={this.props.number}  />

            <CreateTaskContainer story_id={this.props.id} />
      <StoryPointsContainer points={this.props.points} id={this.props.id}/>
      {flag ? <img src={flag} alt="" style={imageStyle} />: null}
  </div>
  )}
};


export default StoryCol1;