import { connect } from 'react-redux';
import ManyFreeForms from '../components/ManyFreeForms';

const FreeFormContainer = connect(
  (state) => ({freeTextAreas: state.board.freeTextAreas}),
  (dispatch) => ({
    modifyFreeText: freeTextAreas => dispatch(modifyFreeText(freeTextAreas))
  })
)(ManyFreeForms);

function modifyFreeText(newTextAreas, index) {
  return {type: 'EDIT_BOARD_FREE_TEXT', freeTextAreas: newTextAreas[index] };
}

export default FreeFormContainer;