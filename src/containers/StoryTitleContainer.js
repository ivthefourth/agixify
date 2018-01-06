import { connect } from 'react-redux';
import StoryTitle from '../components/StoryTitle';

const StoryTitleContainer = connect(
  (state) => ({}),
  (dispatch) => ({
    modifyStoryTitle: (title, id) => dispatch(modifyStoryTitle(title, id))
  })
)(StoryTitle);

function modifyStoryTitle(newTitle, id) {
  return {type: 'EDIT_STORY_TITLE', newTitle: newTitle, id: id };
}

export default StoryTitleContainer;