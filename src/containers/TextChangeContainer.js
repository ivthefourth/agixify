import React, { Component } from 'react';
import './App.css';
import {createStore} from 'redux';
import { Provider, connect } from 'react-redux';
import  './ReduxActions';

class TextChangeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: props.text
		}
		this.handleChange = this.handleChange.bind(this);


    componentWillReceiveProps(nextProps){
      //console.log('receive props');
      //only if next props are diff, need to add if statement... maybe need should component update? 
      this.setState({text: nextProps.text});
    }

	store.dispatch({ type: 'CREATE', item: {text:'Title Shows!'} })  ;

	window.store = store;

    render: function() {
    	return (<BoardTitle text={this.state.text} />);
    }
};



export default TextChangeContainer;