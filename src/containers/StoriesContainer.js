import { connect } from 'react-redux';
import Stories from '../components/Stories';

const StoriesContainer = connect(
   (state) => ({stories: Object.values(state.stories).map(
      story => ({
         ...story, 
         tasks: Object.values(state.tasks).filter(task => task.storyId === story.id)
      })
   )}),
   (dispatch) => ({})
)(Stories);

export default StoriesContainer;