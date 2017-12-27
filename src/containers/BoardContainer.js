import { connect } from 'react-redux';
import BoardTitle from '../components/BoardTitle';

const BoardContainer = connect(
  (state) => ({title: state.board.title}),
  (dispatch) => ({
    modifyText: title => dispatch(modifyText(title))
  })
)(BoardTitle);

function modifyText(newTitle) {
  return {type: 'EDIT_BOARD_TITLE', newTitle: newTitle };
}

export default BoardContainer;