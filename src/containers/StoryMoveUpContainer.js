import { connect } from 'react-redux';
import StoryMoveUp from '../components/StoryMoveUp';

const StoryMoveUpContainer = connect(
  (state) => ({}),
  (dispatch) => ({
    moveStoryUp: id => dispatch(moveStoryUp(id))
  })
)(StoryMoveUp);

function moveStoryUp(id) {
  return {type: 'MOVE_STORY_UP', id: id };
}

export default StoryMoveUpContainer;