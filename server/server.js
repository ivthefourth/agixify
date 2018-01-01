const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const reducers = require('../src/data/reducers');
const epics = require('./serverEpics');
const { createStore, applyMiddleware } = require('redux');
const { createEpicMiddleware } = require('redux-observable');
require('rxjs');
const { getInitialState } = require('./mongo');

const epicMiddleware = createEpicMiddleware(epics(io));
const store = createStore(
  reducers,
    applyMiddleware(epicMiddleware)
);


const INIT_STATE = 'INIT_STATE';

io.on('connection', function(socket){
   socket.emit('message', {type: INIT_STATE, state: store.getState()})
   socket.on('message', function(msg){
      //console.log(msg);
      msg.socket = socket;
      store.dispatch(msg);
   });
});
    

getInitialState()
   .then(state => store.dispatch({
      type: INIT_STATE,
      state
   }))
   .then(() => {
      http.listen(8000, () => {
        console.log('listening on *:8000');
      });
   })
   .catch(console.log)
;
