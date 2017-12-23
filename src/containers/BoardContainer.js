import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardTitle from '../components/BoardTitle';

const BoardContainer = connect(
  (state) => ({title: state.title}),
  (dispatch) => ({
    modifyText: title => dispatch(modifyText(title))
  })
)(BoardTitle);

function modifyText(newTitle) {
  return {type: 'EDIT_TITLE', new_title: newTitle };
}

export default BoardContainer;