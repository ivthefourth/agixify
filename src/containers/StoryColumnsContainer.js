import { connect } from 'react-redux';
import StoryColumns from '../components/StoryColumns';

const StoryColumnsContainer = connect(
  (state) => ({columns: state.board.columns}),
  (dispatch) => ({})
)(StoryColumns);

// function updateCol(newStatus, id) {
//   return {type: 'CHANGE_STORY_STATUS', 
//   			newStatus: newStatus,
//   			id: id };
// }

export default StoryColumnsContainer;