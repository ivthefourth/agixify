import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';

// We need a function that will do read from an array? that will re-order the 
// story by moving it -1 position

const MoveStoryUp = () => (
      <div className="MoveStoryUp">

          <FlatButton label="Move Up" value={this.props.moveUp} 
          		onClick={e => e.preventDefault();
                this.props.moveStoryUp(e.target.value); console.log("Hey it worked");}} />

      </div>
 );

export default MoveStoryUp;