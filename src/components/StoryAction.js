import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu, { MenuItem } from 'material-ui/Menu';
import '../App.css';

class StoryAction extends Component {
	constructor (props) {
		super(props);
		this.state = {
			open: false
		}
	}

   handleClick = (event) => {
  	console.log("this is clicked");
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

   handleClose = () => {
   	console.log("this is closed")
    this.setState({ open: false });
  };

	render() {
		return(
			<div className="story-status">
		      <RaisedButton label="Story Status..."
		      className="StoryActions" onClick={this.handleClick} />

			  <Popover
		        label="Set Status..." 
	          	open={this.state.open }
	          	anchorEl={this.state.anchorEl}
	          	anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
		        targetOrigin={{horizontal: 'left', vertical: 'top'}}
		        onRequestClose={this.handleClose} >

		      <Menu class="story-status-menu"/>
		      	<MenuItem primaryText="Completed" />
		      	<MenuItem primaryText="In Jeopardy"/>
		      	<MenuItem primaryText="Failed"/>
		      </Popover>
		     </div>
 		)
	}
};

export default StoryAction;