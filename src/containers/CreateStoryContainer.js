import { connect } from 'react-redux';
import CreateStory from '../components/CreateStory';

let id="newStory"

const CreateStoryContainer = connect(
  (state) => ({id: id}),
  (dispatch) => ({
    addStory: (id) => dispatch(addStory(id))
  })
)(CreateStory);

function addStory(id) {
  return {type: 'CREATE_STORY', id: id };
}

export default CreateStoryContainer;