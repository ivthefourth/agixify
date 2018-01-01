import { connect } from 'react-redux';
import StoryStatus from '../components/StoryStatus';

const StoryStatusContainer = connect(
  (state) => ({}),
  (dispatch) => ({
    updateCol: (status,id) => dispatch(updateCol(status, id))
  })
)(StoryStatus);

function updateCol(newStatus, id) {
  return {type: 'CHANGE_STORY_STATUS', 
  			newStatus: newStatus,
  			id: id };
}

export default StoryStatusContainer;