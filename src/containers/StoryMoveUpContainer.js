import { connect } from 'react-redux';
import StoryMoveUp from '../components/StoryMoveUp';

const StoryMoveUpContainer = connect(
  (state) => ({id: state.stories.id}),
  (dispatch) => ({
    moveStoryUp: id => dispatch(moveStoryUp(id))
  })
)(StoryMoveUp);

function moveStoryUp(number) {
  return {type: 'STORY_MOVED_UP', story: number };
}

export default StoryMoveUpContainer;