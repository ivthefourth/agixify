const mongo = require("promised-mongo");

const collections = ['boards', 'stories', 'tasks'];
const url = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/agixify';
const db = mongo(url, collections);


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


class NoBoardsError extends Error{
   constructor(){
      super('No Board')
   }
}

const strip_id = (obj) => {
   const {_id, ...newObj} = obj;
   return newObj;
}

const arrayToObject = (arr) => arr.reduce(
   (acc, item) => {
      acc[item._id] = {id: item._id, ...strip_id(item)};
      return acc;
   },
   {}
)

module.exports.getInitialState = () => {
   const board = db.boards.find()
      .then(boards => boards[0])
      .then(board => {
         if(board == undefined){
            throw new NoBoardsError();
         }
         return board;
      })
      .catch(e => {
         if(e instanceof NoBoardsError){
            return db.boards.insert({
               title: 'Story Board', 
               freeTextAreas: ['', '', ''], 
               columns: ['To Do', 'In Progress', 'Done']
            })
         }
         else{
            throw e;
         }
      })
      .then(strip_id)

   const stories = db.stories.find()
      .then(arrayToObject)

   const tasks = db.tasks.find()
      .then(arrayToObject)

   return Promise.all([board, stories, tasks])
      .then(values => ({
         board: values[0],
         stories: values[1],
         tasks: values[2]
      }))
}

module.exports.ohAreEm = (action) => {
   let promise;
   const returnAction = (data) => {
      console.log(data);
      switch(action.type) {
         case CREATE_STORY:
            return {
               ...action,
               story: {
                  ...strip_id(data),
                  id: data._id
               }
            }
         case CREATE_TASK:
            return {
               ...action,
               task: {
                  ...strip_id(data),
                  id: data._id
               }
            }
         default: 
            return action;
      }
   };
   switch (action.type) {
      case BOARD_TITLE_EDITED: {
         promise = db.boards.update({}, {$set: {title: action.newTitle}})
         break;
      }
      case BOARD_FREE_TEXT_EDITED: {
         promise = db.boards.update({}, {$set: {
            [`freeTextAreas.${action.index}`]: action.text
         }});
         break;
      }
      case CREATE_STORY: {
         promise = db.stories.find().sort({number:-1}).limit(1)
            .then(lastStory => db.stories.insert({
               title: action.story.title || '',
               //need to work for 0 stories
               number: lastStory[0] ? lastStory[0].number + 1 : 1,
               points: action.story.points || 0,
               status: action.story.status || null,
               acceptanceCriteria: action.story.acceptanceCriteria || ''
            }));
         break;
      }
      case DELETE_STORY: {
         promise = db.stories.findOne({_id: mongo.ObjectId(action.id)})
            .then(story => {
               return db.stories.remove({_id: mongo.ObjectId(action.id)})
               .then(db.stories.update({
                  number: {$gt: story.number}
               }, {
                  $inc: {number: -1}
               }, {
                  multi: true
               }))
               .then(db.tasks.remove({storyId: action.id}));
            });
         break;
      }
      case MOVE_STORY_UP: {
         promise = db.stories.findOne({_id: mongo.ObjectId(action.id)})
            .then(story => db.stories.update({
               number: story.number - 1
            }, {
               $inc: {number: 1}
            }))
            .then(db.stories.update({
               _id: mongo.ObjectId(action.id)
            }, {
               $inc: {number: -1}
            }));
         break;
      }
      case MOVE_STORY_DOWN: {
         promise = db.stories.findOne({_id: mongo.ObjectId(action.id)})
            .then(story => db.stories.update({
               number: story.number + 1
            }, {
               $inc: {number: -1}
            }))
            .then(() => db.stories.update({
               _id: mongo.ObjectId(action.id)
            }, {
               $inc: {number: 1}
            }));
         break;
      }
      case STORY_TITLE_EDITED: {
         promise = db.stories.update({_id: mongo.ObjectId(action.id)}, {$set: {title: action.newTitle}})
         break;
      }
      case STORY_POINTS_EDITED: {
         promise = db.stories.update({_id: mongo.ObjectId(action.id)}, {$set: {points: action.newPoints}})
         break;
      }
      case CHANGE_STORY_STATUS: {
         promise = db.stories.update({_id: mongo.ObjectId(action.id)}, {$set: {status: action.newStatus}})
         break;
      }
      case STORY_ACCEPTANCE_CRITERIA_EDITED: {
         promise = db.stories.update({_id: mongo.ObjectId(action.id)}, {$set: {acceptanceCriteria: action.newAcceptanceCriteria}})
         break;
      }
      case CREATE_TASK: {
         promise = db.tasks.insert({
            storyId: action.task.storyId,
            status: action.task.status,
            text: action.task.text || '',
         })
         break;
      }
      case DELETE_TASK: {
         promise = db.tasks.remove({_id: mongo.ObjectId(action.id)})
         break;
      }
      case TASK_TEXT_EDITED: {
         promise = db.tasks.update({_id: mongo.ObjectId(action.id)}, {$set: {text: action.newText}})
         break;
      }
      case CHANGE_TASK_STATUS: {
         promise = db.tasks.update({_id: mongo.ObjectId(action.id)}, {$set: {status: action.newStatus}})
         break;
      }
      default: {
         return Promise.resolve(action);
      }
   }
   return promise.then(returnAction);
}


