import { connect } from 'react-redux';
import FreeForm from '../components/FreeForm';

const FreeFormContainer = connect(
  (state) => ({freeTextAreas: state.board.freeTextAreas}),
  (dispatch) => ({
    modifyFreeText: freeTextAreas => dispatch(modifyFreeText(freeTextAreas))
  })
)(FreeForm);

function modifyFreeText(newTextAreas, index) {
  return {type: 'EDIT_BOARD_FREE_TEXT', newTextAreas: [index]};
}

export default FreeFormContainer;