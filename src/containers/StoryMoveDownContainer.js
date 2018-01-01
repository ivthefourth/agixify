import { connect } from 'react-redux';
import StoryMoveDown from '../components/StoryMoveDown';

const StoryMoveDownContainer = connect(
  (state) => ({}),
  (dispatch) => ({
    moveStoryDown: id => dispatch(moveStoryDown(id))
  })
)(StoryMoveDown);

function moveStoryDown(id) {
  return {type: 'MOVE_STORY_DOWN', id: id };
}

export default StoryMoveDownContainer;