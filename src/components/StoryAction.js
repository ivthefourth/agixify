import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import '../App.css';

class StoryAction extends Component {
	constructor (props) {
		super(props);
		this.state = {
			open: false,
			anchorEl: null
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
	      <div className="StoryActions">

	          <FlatButton label="Set Status..." 
	          	aria-owns={this.state.open ? "story-status" : null}
	          	aria-haspopup="true"
	          	onClick={this.handleClick} />

		      <Menu id="story-status"
		      	anchorEl={this.state.anchorEl}
		      	open={this.state.open}
		      	onClose={this.handleClose} >

		      	<MenuItem onClick={this.handleClose}>Completed</MenuItem>
		      	<MenuItem onClick={this.handleClose}>In Jeopardy</MenuItem>
		      	<MenuItem onClick={this.handleClose}>Failed</MenuItem>
		      	</Menu>
	      </div>
 		)
	}
};

export default StoryAction;