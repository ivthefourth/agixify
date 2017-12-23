import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './data/reducers';
import epics from './epics';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import 'rxjs';
import { compose } from 'redux';
import io from 'socket.io-client';

const socket = window.socket = io('http://localhost:8000/');
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware(epics(socket));
const store = createStore(
 reducers,
   composeEnhancers(applyMiddleware(epicMiddleware))
);

socket.on('message', store.dispatch);

ReactDOM.render(
   <Provider store={window.store=store} >
      <App />
   </Provider>, 
   document.getElementById('root'));
registerServiceWorker();

