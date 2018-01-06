import { connect } from 'react-redux';
import StoryPoints from '../components/StoryPoints';

const StoryPointsContainer = connect(
  (state) => ({}),
  (dispatch) => ({
    editPoints: (points, id) => dispatch(editPoints(points, id))
  })
)(StoryPoints);

function editPoints(newPoints, id) {
  return {type: 'EDIT_STORY_POINTS', newPoints: newPoints, id: id };
}

export default StoryPointsContainer;