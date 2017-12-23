
import React, { Component } from 'react';
//import {CardActions} from 'material-ui/Card';
//import FlatButton from 'material-ui/FlatButton';
import StoryAction from './StoryAction';
import StoryCol1 from './StoryCol1';
import StoryStatusCol from './StoryStatusCol';
import AcceptancCriteria from './AcceptanceCriteria';
import CreateButton from './CreateButton';

class Story extends Component {
  render() {
    return(
   <div className="storyBoard">

    <input className="StoryTitle" placeholder="Some title" />
      <StoryAction />

    {/* beginnging of storybaord*/}
      <div className="container-fluid">
        <div className="row content">
          <StoryCol1 />
          <StoryStatusCol className="ToDo"/>
          <StoryStatusCol className="InProgress"/>
          <StoryStatusCol className="Done"/>
          <AcceptancCriteria className="AcceptancCriteria"/>
        </div>
      </div>
      <CreateButton />
   {/* end of storyBoard */}
  </div>
)}};

export default Story;