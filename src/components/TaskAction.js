import React, { Component } from 'react';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';


const taskMenu = {
	fontSize: '9px',
	textAlight: 'right',
	margin: '0px',
	padding: '0px',
	border: '0px',
	borderWidth: '1px',
}

class TaskAction extends Component {
	constructor (props) {
		super(props);
		this.state = {
			open: false,
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

   toDoClicked = (event) => {
   		event.preventDefault();
   		this.props.updateCol("To Do", this.props.id);
   };

   inProgressClicked = (event) => {
   		event.preventDefault();
   		this.props.updateCol("In Progress", this.props.id);
   };

   doneClicked = (event) => {
   		event.preventDefault();
   		this.props.updateCol("Done", this.props.id);
   };


  render() {
    return (
    	<div>
			<FlatButton label="Move Task..."
			    className="TaskActions" onClick={this.handleClick} /> 

				<Popover 
		        	open={this.state.open }
		        	anchorEl={this.state.anchorEl}
		          	anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
			      	targetOrigin={{horizontal: 'left', vertical: 'top'}}
			      	onRequestClose={this.handleClose} >

				      	<Menu.MenuItem primaryText="To Do" style={taskMenu} onClick={this.toDoClicked}  />
				      	<Menu.MenuItem primaryText="In Progress"  style={taskMenu} onClick={this.inProgressClicked} />
				      	<Menu.MenuItem primaryText="Done"  style={taskMenu} onClick={this.doneClicked} />
		    	</Popover>
		</div>
    );
  }
}

export default TaskAction;