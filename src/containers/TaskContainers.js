import { connect } from 'react-redux';
import Task from '../components/Task';

const TaskContainer = connect(
  (state) => ({text_field: state.text_field}),
  (dispatch) => ({
    modifyTask: text_field => dispatch(modifyTask(text_field))
  })
)(Task);

function modifyTask(new_task) {
  return {type: 'EDIT_TASK_TEXT', new_task: new_task };
}

export default TaskContainer;