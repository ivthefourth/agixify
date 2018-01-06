const { combineEpics } = require('redux-observable');
const {ohAreEm: orm} = require('./mongo.js');

const {
   EDIT_BOARD_TITLE,
   BOARD_TITLE_EDITED,
   EDIT_BOARD_FREE_TEXT,
   BOARD_FREE_TEXT_EDITED,

   EDIT_STORY_TITLE,
   STORY_TITLE_EDITED,
   EDIT_STORY_POINTS,
   STORY_POINTS_EDITED,
   CHANGE_STORY_STATUS,
   STORY_STATUS_CHANGED,
   EDIT_STORY_ACCEPTANCE_CRITERIA,
   STORY_ACCEPTANCE_CRITERIA_EDITED,
   CREATE_STORY,
   STORY_CREATED,
   DELETE_STORY,
   STORY_DELETED,
   MOVE_STORY_UP,
   STORY_MOVED_UP,
   MOVE_STORY_DOWN,
   STORY_MOVED_DOWN,

   CREATE_TASK,
   TASK_CREATED,
   DELETE_TASK,
   TASK_DELETED,
   EDIT_TASK_TEXT,
   TASK_TEXT_EDITED,
   CHANGE_TASK_STATUS,
   TASK_STATUS_CHANGED,
} = require('../src/data/actionTypes');


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
         //.debounceTime(6000)
         .flatMap(action => orm(action))
         .ignoreElements()
         .catch(err => (console.log(err), err))
         .ignoreElements()
}


function singleMessageEpic(io, typeMap) {
   return action$ =>
      action$.ofType(...Object.keys(typeMap))
         .flatMap(action => orm(action))
         .map(mapActionTypes(typeMap))
         .do(action => emitWithoutSocket(action, io, false))
         //maybe send an error action to user
}


module.exports = function(socket) {
   return combineEpics(
      liveEditEpic(socket, {
         [EDIT_BOARD_TITLE]: BOARD_TITLE_EDITED,
         [EDIT_BOARD_FREE_TEXT]: BOARD_FREE_TEXT_EDITED,
         [EDIT_STORY_TITLE]: STORY_TITLE_EDITED,
         [EDIT_STORY_POINTS]: STORY_POINTS_EDITED,
         [EDIT_STORY_ACCEPTANCE_CRITERIA]: STORY_ACCEPTANCE_CRITERIA_EDITED,
         [EDIT_TASK_TEXT]: TASK_TEXT_EDITED,
      }),
      singleMessageEpic(socket, {
         [CREATE_STORY]: STORY_CREATED,
         [DELETE_STORY]: STORY_DELETED,
         [CHANGE_TASK_STATUS]: TASK_STATUS_CHANGED,
         [CREATE_TASK]: TASK_CREATED,
         [DELETE_TASK]: TASK_DELETED,
         [MOVE_STORY_UP]: STORY_MOVED_UP,
         [MOVE_STORY_DOWN]: STORY_MOVED_DOWN,
         [CHANGE_STORY_STATUS]: STORY_STATUS_CHANGED,
      })
   )
}
