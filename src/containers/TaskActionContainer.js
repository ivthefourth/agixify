import { connect } from 'react-redux';
import TaskAction from '../components/TaskAction';

const TaskActionContainer = connect(
  (state) => ({}),
  (dispatch) => ({
    updateCol: (status,id) => dispatch(updateCol(status, id)), 
    deleteTask: (id) => dispatch(deleteTask(id))
  })
)(TaskAction);

function updateCol(newStatus, id) {
  return {type: 'CHANGE_TASK_STATUS', 
  			newStatus: newStatus,
  			id: id };
}

function deleteTask(id) {
	return {type: 'DELETE_TASK', id: id}
}

export default TaskActionContainer;