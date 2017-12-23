import React, { Component } from 'react';
import {createStore} from 'redux';
import { Provider, connect } from 'react-redux';

//reducer
export function Board(state = {title: "Some Title"}, action){
	console.log(action);
  switch(action.type){
    case 'EDIT_TITLE': {
      return { title: action.newTitle};
    }
    default: {
      return state;
    }
  }
}


export function STitle(state = {stitle: "Story Title"}, action) {
	console.log(action);
	switch(action.type){
		case 'EDIT_STITLE': {
			return { title: action.newSTitle};
		}
		default: {
			return state;
		}
	}
}

export function FreeFormText(state = {text_field: "Some text"}, action) {
	console.log(action);
	  switch(action.type){
    case 'EDIT_FREEFORM': {
      return { text_field: action.new_text};
    }
    default: {
      return state;
    }
  }
}


export function ACText(state = {text_field: "AC Text"}, action) {
	console.log(action);
	switch(action.type) {
		case 'EDIT_AC': {
			return { text_field: action.new_ac};
		}
		default: {
			return state;
		}
	}
}


export function FirstCol(state = {col: "This is the first column in a story"}, action) {
	console.log(action);
	  switch(action.type){
    case 'UPDATE_FIRSTCOL': {
      return { col: action.new_col};
    }
    default: {
      return state;
    }
  }
}

//Is this status enough for 
export function StatusColmn(state = {sticky_status: "Here's the status"}, action) {
	console.log(action);
	switch(action.type) {
		case 'UPDATE_STORY_STATUS': {
			return {sticky_status: action.new_sticky};
		}
		default: {
			return state;
		}
	}
}



