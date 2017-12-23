import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';

// Need a function that will perform a delete from an array

const StoryDelete = () => (
      <div className="StoryDelete">

          <FlatButton label="Delete Story" value={this.props.delete_story}
          			onClick={(e) => {e.preventDefault(); 
                    this.props.deleteStory(e.target.value); />

      </div>
 );

export default StoryDelete;