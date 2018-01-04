import React, { Component } from 'react';
import Task from './Task';

class ManyTasks extends Component {
	render() {
		return(<div className="TaskColumn col-sm-2 flex-box" >

			 {this.props.column_name}
			 {this.props.tasks.map((task_object) => <Task key={task_object.id}
			 	id={task_object.id}
			 	status={task_object.status}
			 	text_field={task_object.text}
			 	
			 	/> )}
		</div>)
	}
};

export default ManyTasks;