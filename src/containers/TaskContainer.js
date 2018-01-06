import { connect } from 'react-redux';
import Task from '../components/Task';

const TaskContainer = connect(
  (state) => ({}),
  (dispatch) => ({
    modifyTaskText: (text, id) => dispatch(modifyTaskText(text, id))
  })
)(Task);

function modifyTaskText( newText, id) {
  return {type: 'EDIT_TASK_TEXT', newText: newText, id: id };
}

export default TaskContainer;