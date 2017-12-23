import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';

// We need a function that will do read from an array? that will re-order the 
// story by moving it -1 position

const MoveStoryDown = () => (
      <div className="MoveStoryDown">

          <FlatButton label="Move Down" value={this.props.moveUp} 
          		onClick={e => e.preventDefault();
                this.props.MoveStoryDown(e.target.value); console.log("Hey it worked");}} />

      </div>
 );

export default MoveStoryDown;