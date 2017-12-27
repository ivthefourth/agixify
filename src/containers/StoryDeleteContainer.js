import { connect } from 'react-redux';
import StoryDelete from '../components/StoryDelete';

const StoryDeleteContainer = connect(
  (state) => ({id: state.stories.id}),
  (dispatch) => ({
    storyDelete: id => dispatch(storyDelete(id))
  })
)(StoryDelete);

function storyDelete(number) {
  return {type: 'STORY_DELETED', story: number };
}

export default StoryDeleteContainer;