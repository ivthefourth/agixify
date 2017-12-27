import { connect } from 'react-redux';
import FreeForm from '../components/FreeForm';

const FreeFormContainer = connect(
  (state) => ({freeTextAreas: state.board.freeTextAreas}),
  (dispatch) => ({
    modifyFreeText: freeTextAreas => dispatch(modifyFreeText(freeTextAreas))
  })
)(FreeForm);

function modifyFreeText(newTextAreas) {
  return {type: 'EDIT_BOARD_FREE_TEXT', freeTextAreas: newTextAreas };
}

export default FreeFormContainer;