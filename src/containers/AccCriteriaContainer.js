import React, { Component } from 'react';
import { connect } from 'react-redux';
import AC from '../components/AcceptanceCriteria';

const AccCriteriaContainer = connect(
  (state) => ({text_field: state.text_field}),
  (dispatch) => ({
    modifyText: text_field => dispatch(modifyText(text_field))
  })
)(AC);

function modifyText(new_ac) {
  return {type: 'EDIT_AC', new_ac: new_ac };
}

export default AccCriteriaContainer;