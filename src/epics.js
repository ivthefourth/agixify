import { combineEpics } from 'redux-observable';

const CREATE_TASK = 'CREATE_TASK';
//const TASK_WAS_CREATED = 'TASK_WAS_CREATED';
 const DELETE_TASK = 'DELETE_TASK';
// const TASK_WAS_DELETED = 'TASK_WAS_DELETED';
 const EDIT_TASK_TEXT = 'EDIT_TASK_TEXT';
// const TASK_TEXT_EDITED = 'TASK_TEXT_EDITED';
// const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
// const TASK_STATUS_CHANGED = 'TASK_STATUS_CHANGED';


// function mapActionTypes(typeMap) {
//    return action => ({
//       ...action,
//       type: typeMap[action.type]
//    });
// }

// //throttles and maps text editing events to send to server
// function liveEditEpic(socket, typeMap) {
//    return action$ => 
//       action$.ofType(...Object.keys(typeMap))
//          .map(mapActionTypes(typeMap))
// }

//throttles actions before sending them to server
function throttledEpic(socket, types) {
   return action$ => 
      action$.ofType(...types)
         .throttleTime(100, undefined, {leading: true, trailing: true})
         .do(action => socket.emit('message', action))
         .ignoreElements()
}

//sends one-off actions to server
function singleMessageEpic(socket, types) {
   return action$ =>
      action$.ofType(...types)
         .do(action => socket.emit('message', action))
         .ignoreElements()
}


export default function(socket) {
   return combineEpics(
      //liveEditEpic(socket, {[CREATE_TASK]: TASK_WAS_CREATED}),
      throttledEpic(socket, [EDIT_TASK_TEXT]),
      singleMessageEpic(socket, [DELETE_TASK, CREATE_TASK])
   )
}
