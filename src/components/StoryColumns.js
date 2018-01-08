import React, { Component } from 'react';
import ManyTasks from './ManyTasks';
import '../App.css';

class StoryToDoCol extends Component {
  render() {
    return (
      <div className="TaskStatusColumns col-sm-7" value={this.props.columns}>
      	
      	{this.props.columns.map((column_name) => <ManyTasks key={column_name}
  			column_name={column_name}  
  			tasks={this.props.tasks.filter((tasks) => tasks.status === column_name)} /> )}

      </div> 

    );
  }
}

export default StoryToDoCol;