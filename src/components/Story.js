import React, { Component } from 'react';
import StoryCol1 from './StoryCol1';
import StoryToDo from './StoryToDo';
import StoryInProgress from './StoryInProgress';
import StoryDone from './StoryDone';
import AccCriteriaContainer from '../containers/AccCriteriaContainer';
import StoryActions from './StoryActions';
import StoryTitleContainer from '../containers/StoryTitleContainer';

// set state here for story status


class Story extends Component {
  render() {
    return (
     <div className="storyMain">
        <div className="story-heading">
          <StoryTitleContainer  title={this.props.story_title} />
          <StoryActions id={this.props.id}/>
        </div>

      {/* beginnging of story columns*/}
        <div className="container-fluid">
          <div className="col-md-12 story-content">
            <StoryCol1 status={this.props.status} points={this.props.points} 
                      id={this.props.id} />
            <StoryToDo />
            <StoryInProgress />
            <StoryDone />
            <AccCriteriaContainer className="AcceptanceCriteria"/>
          </div>
        </div>
        <hr />
      {/* end of story columns */}
    </div>
    )
  }
};

export default Story;