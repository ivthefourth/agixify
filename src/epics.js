import { combineEpics } from 'redux-observable';

import {
   EDIT_BOARD_TITLE,
   EDIT_BOARD_FREE_TEXT,

   EDIT_STORY_TITLE,
   EDIT_STORY_POINTS,
   CHANGE_STORY_STATUS,
   EDIT_STORY_ACCEPTANCE_CRITERIA,
   CREATE_STORY,
   DELETE_STORY,
   MOVE_STORY_UP,
   MOVE_STORY_DOWN,

   CREATE_TASK,
   DELETE_TASK,
   EDIT_TASK_TEXT,
   CHANGE_TASK_STATUS,
} from '../src/data/actionTypes';


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
         EDIT_STORY_POINTS,
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
      ]),
   )
}
