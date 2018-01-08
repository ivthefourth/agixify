import React, { Component } from 'react';
import TaskContainer from '../containers/TaskContainer';

class ManyTasks extends Component {
	render() {
		return(<div className="TaskColumn col-sm-4 flex-box" >

			 {this.props.column_name}
			 {this.props.tasks.map((task_object) => <TaskContainer key={task_object.id}
			 	id={task_object.id}
			 	status={task_object.status}
			 	text={task_object.text}
			 	newText={task_object.newText}
			 	/> )}
		</div>)
	}
};

export default ManyTasks;