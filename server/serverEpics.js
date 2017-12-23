const { combineEpics } = require('redux-observable');

const EDIT_BOARD_TITLE = 'EDIT_BOARD_TITLE';
const BOARD_TITLE_EDITED = 'BOARD_TITLE_EDITED';
const CREATE_TASK = 'CREATE_TASK';
const TASK_CREATED = 'TASK_CREATED';
const DELETE_TASK = 'DELETE_TASK';
const TASK_DELETED = 'TASK_DELETED';
const EDIT_TASK_TEXT = 'EDIT_TASK_TEXT';
const TASK_TEXT_EDITED = 'TASK_TEXT_EDITED';
// const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
// const TASK_STATUS_CHANGED = 'TASK_STATUS_CHANGED';


function mapActionTypes(typeMap) {
   return action => ({
      ...action,
      type: typeMap[action.type]
   });
}

function emitWithoutSocket(action, io, broadcast) {
   const newAction = {...action};
   delete newAction.socket;
   if (broadcast)
      action.socket.broadcast.emit('message', newAction);
   else
      io.emit('message', newAction);
}


function liveEditEpic(io, typeMap) {
   return action$ => 
      action$.ofType(...Object.keys(typeMap))
         .map(mapActionTypes(typeMap))
         .do(action => emitWithoutSocket(action, io, true))
         .ignoreElements()
}


function singleMessageEpic(io, typeMap) {
   return action$ =>
      action$.ofType(...Object.keys(typeMap))
         .map(mapActionTypes(typeMap))
         .do(action => emitWithoutSocket(action, io, false))
         .ignoreElements()
}


module.exports = function(socket) {
   return combineEpics(
      liveEditEpic(socket, {[EDIT_TASK_TEXT]: TASK_TEXT_EDITED, [EDIT_BOARD_TITLE]: BOARD_TITLE_EDITED}),
      singleMessageEpic(socket, {[DELETE_TASK]: TASK_DELETED, [CREATE_TASK]: TASK_CREATED})
   )
}
