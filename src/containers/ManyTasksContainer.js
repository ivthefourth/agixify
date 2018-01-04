import { connect } from 'react-redux';
import ManyTasks from '../components/ManyTasks';

const ManyTasksContainer = connect(
  (state) => ({freeTextAreas: state.board.freeTextAreas}),
  (dispatch) => ({
    modifyFreeText: freeTextAreas => dispatch(modifyFreeText(freeTextAreas))
  })
)(ManyFreeForms);

function modifyFreeText(newTextAreas, index) {
  return {type: 'EDIT_BOARD_FREE_TEXT', freeTextAreas: newTextAreas[index] };
}

export default ManyTasksContainer;