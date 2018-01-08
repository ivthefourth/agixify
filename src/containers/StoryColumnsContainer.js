import { connect } from 'react-redux';
import StoryColumns from '../components/StoryColumns';

const StoryColumnsContainer = connect(
  (state) => ({columns: state.board.columns}),
  (dispatch) => ({})
)(StoryColumns);

export default StoryColumnsContainer;