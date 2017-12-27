import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu, { MenuItem } from 'material-ui/Menu';
import '../App.css';

class StoryStatus extends Component {
	constructor (props) {
		super(props);
		this.state = {
			open: false
		}
	}

   handleClick = (event) => {
    this.setState({ 
    	open: true,
    	anchorEl: event.currentTarget 
    });
  };

   handleClose = () => {
    this.setState({ open: false });
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
			      	<MenuItem primaryText="Completed" />
			      	<MenuItem primaryText="In Jeopardy"/>
			      	<MenuItem primaryText="Failed"/>
			    </Popover>
		     </div>
 		)
	}
};

export default StoryStatus;