import React, { Component } from 'react';
import StoryCol1 from './StoryCol1';
import StoryColumnsContainer from '../containers/StoryColumnsContainer';
import AccCriteriaContainer from '../containers/AccCriteriaContainer';
import StoryActions from './StoryActions';
import StoryTitleContainer from '../containers/StoryTitleContainer';
import CreateTaskContainer from '../containers/CreateTaskContainer';


class Story extends Component {
  render() {
    return (
     <div className="storyMain">
        <div className="story-heading">
          <StoryTitleContainer  title={this.props.story_title} id={this.props.id} />
          <StoryActions id={this.props.id}  number={this.props.number}  
              isLastStory={this.props.isLastStory}/>
        </div>

      {/* beginnging of story columns*/}
        <div className="container-fluid">
          <div className="col-md-12 story-content">
            <StoryCol1 status={this.props.status} points={this.props.points} 
                      id={this.props.id} />

            <CreateTaskContainer story_id={this.props.id} />

            <StoryColumnsContainer tasks={this.props.tasks} />

            <AccCriteriaContainer className="AcceptanceCriteria"
                acceptanceCriteria={this.props.ac} id={this.props.id}/>
          </div>
        </div>
      {/* end of story columns */}
    </div>
    )
  }
};

export default Story;