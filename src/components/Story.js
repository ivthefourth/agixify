
import React, { Component } from 'react';
import StoryCol1 from './StoryCol1';
import StoryStatusCol from './StoryStatusCol';
import AcceptanceCriteria from './AcceptanceCriteria';
import StoryActions from './StoryActions';
import StoryTitle from './StoryTitle';

class Story extends Component {
  render() {
    return(
   <div className="storyBoard">

      <StoryTitle  />
      <StoryActions />

    {/* beginnging of storybaord*/}
      <div className="container-fluid">
        <div className="row content">
          <StoryCol1 />
          <StoryStatusCol className="ToDo"/>
          <StoryStatusCol className="InProgress"/>
          <StoryStatusCol className="Done"/>
          <AcceptanceCriteria className="AcceptanceCriteria"/>
        </div>
      </div>
      <hr />
   {/* end of storyBoard */}
  </div>
)}};

export default Story;