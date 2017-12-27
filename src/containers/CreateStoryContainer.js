import { connect } from 'react-redux';
import CreateStory from '../components/CreateStory';

const CreateStoryContainer = connect(
  (state) => ({id: state.stories.id}),
  (dispatch) => ({
    addStory: id => dispatch(addStory(id))
  })
)(CreateStory);

function addStory(story) {
  return {type: 'STORY_CREATED', new_story: story };
}

export default CreateStoryContainer;