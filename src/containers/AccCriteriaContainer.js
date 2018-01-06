import { connect } from 'react-redux';
import AC from '../components/AcceptanceCriteria';

const AccCriteriaContainer = connect(
  (state) => ({}),
  (dispatch) => ({
    modifyAC: (acceptanceCriteria, id) => dispatch(modifyAC(acceptanceCriteria, id))
  })
)(AC);

function modifyAC(newAcceptanceCriteria, id) {
  return {type: 'EDIT_STORY_ACCEPTANCE_CRITERIA', newAcceptanceCriteria: newAcceptanceCriteria, id: id };
}

export default AccCriteriaContainer;