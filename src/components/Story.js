
import React, { Component } from 'react';
import StoryCol1 from './StoryCol1';
import StoryStatusCol from './StoryStatusCol';
import AcceptanceCriteria from './AcceptanceCriteria';
import CreateStory from './CreateStory';
import StoryActions from './StoryActions';

class Story extends Component {
  render() {
    return(
   <div className="storyBoard">

      <CreateStory />
      <input className="StoryTitle" placeholder="Some title" />
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