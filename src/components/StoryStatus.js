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


	statusClicked = (status) => {

		this.props.updateCol(status, this.props.id);

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
			    	<MenuItem primaryText="Reset" onClick={ () => this.statusClicked(null)}  />
			      	<MenuItem primaryText="Completed" onClick={ () => this.statusClicked("Completed")}  />
			      	<MenuItem primaryText="In Jeopardy" onClick={ () => this.statusClicked("In Jeopardy")} />
			      	<MenuItem primaryText="Failed" onClick={ () => this.statusClicked("Failed")} />
			    </Popover>
		     </div>
 		)
	}
};

export default StoryStatus;