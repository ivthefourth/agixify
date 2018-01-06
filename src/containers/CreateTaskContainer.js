import { connect } from 'react-redux';
import CreateTask from '../components/CreateTask';

const CreateTaskContainer = connect(
  (state) => ({default_status: state.board.columns[0]}),
  (dispatch) => ({
  	createTask: (story_id, default_status) => dispatch(createTask(story_id, default_status))
  })
)(CreateTask);

function createTask(story_id, default_status) {
  return {type: 'CREATE_TASK', 
  		  task: {storyId: story_id, 
  				 status: default_status} };
}

export default CreateTaskContainer;