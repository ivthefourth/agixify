import React, { Component } from 'react';
import CreateTask from './CreateTask';
import '../App.css';

class StoryToDoCol extends Component {
  render() {
    return (
      <div className="StoryToDoCol col-sm-2 flex-box">

          <CreateTask />

       </div> 

    );
  }
}

export default StoryToDoCol;