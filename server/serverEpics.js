const { combineEpics } = require('redux-observable');
const {ohAreEm: orm} = require('./mongo.js');

const EDIT_BOARD_TITLE = 'EDIT_BOARD_TITLE';
const BOARD_TITLE_EDITED = 'BOARD_TITLE_EDITED';
const EDIT_BOARD_FREE_TEXT = 'EDIT_BOARD_FREE_TEXT';
const BOARD_FREE_TEXT_EDITED = 'BOARD_FREE_TEXT_EDITED';

const EDIT_STORY_TITLE = 'EDIT_STORY_TITLE';
const STORY_TITLE_EDITED = 'STORY_TITLE_EDITED';
const EDIT_STORY_POINTS = 'EDIT_STORY_POINTS';
const STORY_POINTS_EDITED = 'STORY_POINTS_EDITED';
const CHANGE_STORY_STATUS = 'CHANGE_STORY_STATUS';
const STORY_STATUS_CHANGED = 'STORY_STATUS_CHANGED';
const EDIT_STORY_ACCEPTANCE_CRITERIA = 'EDIT_STORY_ACCEPTANCE_CRITERIA';
const STORY_ACCEPTANCE_CRITERIA_EDITED = 'STORY_ACCEPTANCE_CRITERIA_EDITED';
const CREATE_STORY = 'CREATE_STORY';
const STORY_CREATED = 'STORY_CREATED';
const DELETE_STORY = 'DELETE_STORY';
const STORY_DELETED = 'STORY_DELETED';
const MOVE_STORY_UP = 'MOVE_STORY_UP';
const STORY_MOVED_UP = 'STORY_MOVED_UP';
const MOVE_STORY_DOWN = 'MOVE_STORY_DOWN';
const STORY_MOVED_DOWN = 'STORY_MOVED_DOWN';

const CREATE_TASK = 'CREATE_TASK';
const TASK_CREATED = 'TASK_CREATED';
const DELETE_TASK = 'DELETE_TASK';
const TASK_DELETED = 'TASK_DELETED';
const EDIT_TASK_TEXT = 'EDIT_TASK_TEXT';
const TASK_TEXT_EDITED = 'TASK_TEXT_EDITED';
const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
const TASK_STATUS_CHANGED = 'TASK_STATUS_CHANGED';


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
         .debounceTime(6000)
         .flatMap(action => orm(action))
         .ignoreElements()
         .catch(err => (console.log(err), err))
         //maybe send an error action to user
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
