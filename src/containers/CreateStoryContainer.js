import { connect } from 'react-redux';
import CreateStory from '../components/CreateStory';

const CreateStoryContainer = connect(
  (state) => ({}),
  (dispatch) => ({
    addStory: id => dispatch(addStory(id))
  })
)(CreateStory);

function addStory(id) {
  return {type: 'CREATE_STORY', id: id };
}

export default CreateStoryContainer;