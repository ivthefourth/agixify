
import React, { Component } from 'react';
import StoryCol1 from './StoryCol1';
import StoryStatusCol from './StoryStatusCol';
import AccCriteriaContainer from '../containers/AccCriteriaContainer';
import StoryActions from './StoryActions';
import StoryTitleContainer from '../containers/StoryTitleContainer';

class Story extends Component {
  render() {
    return (
     <div className="storyBoard">

        <StoryTitleContainer  />
        <StoryActions />

      {/* beginnging of storybaord*/}
        <div className="container-fluid">
          <div className="row content">
            <StoryCol1 />
            <StoryStatusCol className="ToDo"/>
            <StoryStatusCol className="InProgress"/>
            <StoryStatusCol className="Done"/>
            <AccCriteriaContainer className="AcceptanceCriteria"/>
          </div>
        </div>
        <hr />
      {/* end of storyBoard */}
    </div>
    )
  }
};

export default Story;