import { connect } from 'react-redux';
import StoryMoveUp from '../components/StoryMoveUp';

const StoryMoveUpContainer = connect(
  (state) => ({}),
  (dispatch) => ({
    moveStoryUp: (id, number) => dispatch(moveStoryUp(id, number))
  })
)(StoryMoveUp);

function moveStoryUp(id, number) {
  return {type: 'MOVE_STORY_UP', id: id, number: number };
}

export default StoryMoveUpContainer;