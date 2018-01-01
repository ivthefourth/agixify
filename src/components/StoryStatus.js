import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu, { MenuItem } from 'material-ui/Menu';
import '../App.css';


class StoryStatus extends Component {
	constructor (props) {
		super(props);
		this.state = {
			open: false,
			flag: '',
			alt: '',
		}
	}


   handleClick = (event) => {
    this.setState({ 
    	open: true,
    	anchorEl: event.currentTarget 
    });
   };

   handleClose = (event) => {
    this.setState({ open: false });
   };

   completedClicked = (event) => {
   		event.preventDefault();
   		this.props.updateCol("Completed", this.props.id);
   };

   jeopardyClicked = (event) => {
   		event.preventDefault();
   		this.props.updateCol("In Jeopardy", this.props.id);
   };

   failedClicked = (event) => {
   		event.preventDefault();
   		this.props.updateCol("Failed", this.props.id);
   };

	render() {
		return(
			<div className="story-status">
			    <FlatButton label="Story Status..."
			    className="StoryActions" onClick={this.handleClick} />

				<Popover
		        	open={this.state.open }
		        	anchorEl={this.state.anchorEl}
		          	anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
			      	targetOrigin={{horizontal: 'left', vertical: 'top'}}
			      	onRequestClose={this.handleClose} >

			    <Menu className="story-status-menu"/>
			      	<MenuItem primaryText="Completed" onClick={this.completedClicked}  />
			      	<MenuItem primaryText="In Jeopardy" onClick={this.jeopardyClicked} />
			      	<MenuItem primaryText="Failed" onClick={this.failedClicked} />
			    </Popover>
		     </div>
 		)
	}
};

export default StoryStatus;