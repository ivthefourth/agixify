import React, { Component } from 'react';
import Story from './Story';

class Stories extends Component {
  render()
   {
    return(
    	<div > {this.props.stories.map((story_object) => 
        <Story id={story_object.id}
      	key={story_object.id} 
      	story_title={story_object.title}
        number={story_object.number}
      	status={story_object.status} 
        points={story_object.points}
        ac={story_object.acceptanceCriteria}
        tasks={story_object.tasks} />)}

     
      </div>
    )
  }
};

export default Stories;