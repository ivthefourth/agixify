import { connect } from 'react-redux';
import StoryTitle from '../components/StoryTitle';

const StoryTitleContainer = connect(
  (state) => ({}),
  (dispatch) => ({
    modifyStoryTitle: title => dispatch(modifyStoryTitle(title))
  })
)(StoryTitle);

function modifyStoryTitle(newTitle) {
  return {type: 'EDIT_STORY_TITLE', newTitle: newTitle };
}

export default StoryTitleContainer;