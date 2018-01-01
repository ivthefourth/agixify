import { connect } from 'react-redux';
import StoryDelete from '../components/StoryDelete';

const StoryDeleteContainer = connect(
  (state) => ({}),
  (dispatch) => ({
    deleteStory: id => dispatch(deleteStory(id))
  })
)(StoryDelete);

function deleteStory(id) {
  return {type: 'DELETE_STORY', id: id };
}

export default StoryDeleteContainer;