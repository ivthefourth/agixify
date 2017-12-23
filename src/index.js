import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { Board, FreeFormText, ACText, FirstCol} from './data/Redux';

// var reducers;

// reducers = combineReducers({
// 	boardStore: Board,
// 	acStore: ACText,
// 	firstColStore: FirstCol
// })


 ReactDOM.render((
	<Provider store={window.store=createStore(Board)}>
		<App />
	</Provider>), document.getElementById('root'));  

