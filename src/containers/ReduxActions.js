import React, { Component } from 'react';
import './App.css';
import {createStore} from 'redux';
import { Provider, connect } from 'react-redux';


class ReduxActions extends Component {
    //reducer
    function array(state = [], action){
      switch(action.type){
        case 'CREATE': {
          let id = state.reduce( (maxId, item) => item.id >= maxId ? item.id : maxId, 0);
          id += 1;
          let newItem = {id, ...action.item}
          return [...state, newItem];
        }
        case 'DELETE': {
          let index = state.findIndex(item => item.id === action.id);
          return [...state.slice(0, index), ...state.slice(index + 1)];
        }
        case 'EDIT_TEXT': {
          let index = state.findIndex(item => item.id === action.id);
          var newState = state.slice(0);
          newState[index].text = action.text;
          return newState;
        }
        default: {
          return state;
        }
      }
    }

    //store
    let store = createStore(array);
    store.subscribe(() =>
      console.log(store.getState())
    )

    store.dispatch({ type: 'CREATE', item: {text:'hello'} });
    store.dispatch({ type: 'CREATE', item: {text:'wow pow zim zam'} });
    store.dispatch({ type: 'CREATE', item: {text:'woo redux is cool!'} })

    window.store = store;

    function deleteItem(id) {
      return {
        type: 'DELETE',
        id
      }
    }

    function editItem(item) {
      return {
        type: 'EDIT_TEXT',
        id: item.id,
        text: item.text
      }
    }


    componentWillReceiveProps(nextProps){
      //console.log('receive props');
      //only if next props are diff, need to add if statement... maybe need should component update? 
      this.setState({text: nextProps.text});
    }

    handleChange(event) {
      //console.log('handleChange')
      let val = event.target.value
      this.setState({text: val});
    }
};

export default ReduxActions;