import { connect } from 'react-redux';
import StoryPoints from '../components/StoryPoints';

const StoryPointsContainer = connect(
  (state) => ({}),
  (dispatch) => ({
    pointsEdited: points => dispatch(pointsEdited(points))
  })
)(StoryPoints);

function pointsEdited(newPoints) {
  return {type: 'EDIT_STORY_POINTS', newPoints: newPoints };
}

export default StoryPointsContainer;