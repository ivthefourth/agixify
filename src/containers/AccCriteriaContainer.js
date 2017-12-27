import { connect } from 'react-redux';
import AC from '../components/AcceptanceCriteria';

const AccCriteriaContainer = connect(
  (state) => ({text_field: state.text_field}),
  (dispatch) => ({
    modifyAC: text_field => dispatch(modifyAC(text_field))
  })
)(AC);

function modifyAC(new_ac) {
  return {type: 'EDIT_STORY_ACCEPTANCE_CRITERIA', new_ac: new_ac };
}

export default AccCriteriaContainer;