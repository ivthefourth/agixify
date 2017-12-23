import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoryCol1 from '../components/StoryCol1';

const StoryCol1Container = connect(
  (state) => ({colOne: state.colOne}),
  (dispatch) => ({
    updateCol: colOne => dispatch(updateCol(colOne))
  })
)(StoryCol1);

function updateCol(new_state) {
  return {type: 'EDIT_TITLE', new_state: new_state };
}

export default StoryCol1Container;