import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';

const StoryAction = () => (
      <div className="StoryActions">

          <FlatButton label="Set Status..." />
          <FlatButton label="Move Up" />
          <FlatButton label="Move Down" />
          <FlatButton label="Delete Story" />

      </div>
 );

export default StoryAction;