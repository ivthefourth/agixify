import { combineEpics } from 'redux-observable';

const EDIT_BOARD_TITLE = 'EDIT_BOARD_TITLE';
const EDIT_BOARD_FREE_TEXT = 'EDIT_BOARD_FREE_TEXT';

const EDIT_STORY_TITLE = 'EDIT_STORY_TITLE';
const EDIT_STORY_POINTS = 'EDIT_STORY_POINTS';
const CHANGE_STORY_STATUS = 'CHANGE_STORY_STATUS';
const EDIT_STORY_ACCEPTANCE_CRITERIA = 'EDIT_STORY_ACCEPTANCE_CRITERIA';
const CREATE_STORY = 'CREATE_STORY';
const DELETE_STORY = 'DELETE_STORY';
const MOVE_STORY_UP = 'MOVE_STORY_UP';
const MOVE_STORY_DOWN = 'MOVE_STORY_DOWN';

const CREATE_TASK = 'CREATE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const EDIT_TASK_TEXT = 'EDIT_TASK_TEXT';
const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';


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
      throttledEpic(socket, [
         EDIT_BOARD_TITLE,
         EDIT_BOARD_FREE_TEXT,
         EDIT_STORY_TITLE,
         CHANGE_STORY_STATUS,
         EDIT_STORY_ACCEPTANCE_CRITERIA,
         EDIT_TASK_TEXT,
      ]),
      singleMessageEpic(socket, [
         CREATE_STORY,
         DELETE_STORY,
         CHANGE_TASK_STATUS,
         CREATE_TASK,
         DELETE_TASK,
         MOVE_STORY_UP,
         MOVE_STORY_DOWN,
         EDIT_STORY_POINTS,
      ]),
   )
}
