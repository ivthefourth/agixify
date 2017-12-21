
import React, { Component } from 'react';
import {CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import StoryAction from './StoryAction';
import StoryCol1 from './StoryCol1';
import StoryStatusCol from './StoryStatusCol';
import AcceptancCriteria from './AcceptancCriteria';
import CreateButton from './CreateButton';

class Story extends Component {
  render() {
    return(
 <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
   <div className="storyBoard">

    <div className="StoryTitle" contenteditable="true">Some title </div> 
      <StoryAction />

    {/* beginnging of storybaord*/}
      <div className="container-fluid">
        <div className="row content">
          <StoryCol1 />
          <StoryStatusCol className="ToDo"/>
          <StoryStatusCol className="InProgress"/>
          <StoryStatusCol className="Done"/>
          <AcceptancCriteria className="AcceptancCriteria"/>
        </div>
      </div>
      <CreateButton />

  </div>   {/* end of .storyBoard */}
  </MuiThemeProvider>
)}};

export default Story;