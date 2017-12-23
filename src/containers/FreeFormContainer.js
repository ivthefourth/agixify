//import React, { Component } from 'react';
import { connect } from 'react-redux';
import FreeForm from '../components/FreeForm';

const FreeFormContainer = connect(
  (state) => ({text_field: state.text_field}),
  (dispatch) => ({
    modifyText: text_field => dispatch(modifyText(text_field))
  })
)(FreeForm);

function modifyText(new_text) {
  return {type: 'EDIT_TITLE', new_text: new_text };
}

export default FreeFormContainer;