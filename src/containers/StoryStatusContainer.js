import { connect } from 'react-redux';
import StoryStatus from '../components/StoryStatus';

const StoryStatusContainer = connect(
  (state) => ({colOne: state.colOne}),
  (dispatch) => ({
    updateCol: colOne => dispatch(updateCol(colOne))
  })
)(StoryStatus);

function updateCol(new_state) {
  return {type: 'STORY_STATUS_CHANGED', new_state: new_state };
}

export default StoryStatusContainer;