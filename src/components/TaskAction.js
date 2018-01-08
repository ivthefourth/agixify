import React, { Component } from 'react';
import Popover from 'material-ui/Popover';
import Menu, { MenuItem } from 'material-ui/Menu';
import FlatButton from 'material-ui/FlatButton';


const taskMenu = {
	fontSize: '14px',
	margin: '0px',
	padding: '0px 0px',
	border: '0px',
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

   statusChanged = (status) => {
      this.props.updateCol(status, this.props.id);

   }


   deleteTask = () => {
      this.props.deleteTask(this.props.id);
   }

  render() {
    return (
    	<div style={{backgroundColor: "rgb(0,180,240)"}} >
			<FlatButton label="Task Actions..."   style={{color: 'white'}}
			    className="TaskActions" onClick={this.handleClick} /> 

				<Popover 
        	open={this.state.open }
        	anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
	      	targetOrigin={{horizontal: 'left', vertical: 'top'}}
	      	onRequestClose={this.handleClose} >

          <Menu />
		      	<MenuItem primaryText="To Do" style={taskMenu} onClick={ () => this.statusChanged("To Do")}  />
		      	<MenuItem primaryText="In Progress"  style={taskMenu} onClick={ () => this.statusChanged("In Progress")} />
		      	<MenuItem primaryText="Done"  style={taskMenu} onClick={ () => this.statusChanged("Done")} />
            <MenuItem primaryText="Delete"  style={taskMenu} onClick={this.deleteTask} />
		    </Popover>
		</div>
    );
  }
}

export default TaskAction;