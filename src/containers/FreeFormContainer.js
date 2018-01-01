import { connect } from 'react-redux';
import FreeForm from '../components/FreeForm';

const FreeFormContainer = connect(
  (state) => ({freeTextAreas: state.board.freeTextAreas}),
  (dispatch) => ({
    modifyFreeText: (text, index) => dispatch(modifyFreeText(text, index))
  })
)(FreeForm);

function modifyFreeText(text, index) {
  return {type: 'EDIT_BOARD_FREE_TEXT',text , index};
}

export default FreeFormContainer;