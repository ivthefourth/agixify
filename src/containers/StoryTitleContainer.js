import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoryTitle from '../components/StoryTitle';

const StoryTitleContainer = connect(
  (state) => ({stitle: state.stitle}),
  (dispatch) => ({
    modifyText: title => dispatch(modifyText(stitle))
  })
)(StoryTitle);

function modifyText(newTitle) {
  return {type: 'EDIT_TITLE', new_stitle: newSTitle };
}

export default StoryTitleContainer;