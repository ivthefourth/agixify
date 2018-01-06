import { connect } from 'react-redux';
import ManyTasks from '../components/ManyTasks';

const ManyTasksContainer = connect(
  (state) => ({}),
  (dispatch) => ({
    modifyTaskText: (tasks, id) => dispatch(modifyTaskText(tasks, id))
  })
)(ManyTasks);

function modifyTaskText(newText, id) {
  return {type: 'EDIT_TASK_TEXT', newText: newText, id: id };
}

export default ManyTasksContainer;