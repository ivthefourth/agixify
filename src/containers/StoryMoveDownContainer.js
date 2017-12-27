import { connect } from 'react-redux';
import StoryMoveDown from '../components/StoryMoveDown';

const StoryMoveDownContainer = connect(
  (state) => ({id: state.stories.id}),
  (dispatch) => ({
    moveStoryDown: id => dispatch(moveStoryDown(id))
  })
)(StoryMoveDown);

function moveStoryDown(number) {
  return {type: 'STORY_MOVED_DOWN', story: number };
}

export default StoryMoveDownContainer;