const { combineReducers } = require('redux');
const EDIT_BOARD_TITLE = 'EDIT_BOARD_TITLE';
const BOARD_TITLE_EDITED = 'BOARD_TITLE_EDITED';
const EDIT_BOARD_FREE_TEXT = 'EDIT_BOARD_FREE_TEXT';
const BOARD_FREE_TEXT_EDITED = 'BOARD_FREE_TEXT_EDITED';

const EDIT_STORY_TITLE = 'EDIT_STORY_TITLE';
const STORY_TITLE_EDITED = 'STORY_TITLE_EDITED';
const STORY_POINTS_EDITED = 'STORY_POINTS_EDITED';
const STORY_STATUS_CHANGED = 'STORY_STATUS_CHANGED';
const EDIT_STORY_ACCEPTANCE_CRITERIA = 'EDIT_STORY_ACCEPTANCE_CRITERIA';
const STORY_ACCEPTANCE_CRITERIA_EDITED = 'STORY_ACCEPTANCE_CRITERIA_EDITED';
const STORY_CREATED = 'STORY_CREATED';
const STORY_DELETED = 'STORY_DELETED';
const STORY_MOVED_UP = 'STORY_MOVED_UP';
const STORY_MOVED_DOWN = 'STORY_MOVED_DOWN';

const TASK_CREATED = 'TASK_CREATED';
const TASK_DELETED = 'TASK_DELETED';
const EDIT_TASK_TEXT = 'EDIT_TASK_TEXT';
const TASK_TEXT_EDITED = 'TASK_TEXT_EDITED';
const TASK_STATUS_CHANGED = 'TASK_STATUS_CHANGED';



const INIT_STATE = 'INIT_STATE';


function findIndex(object, callback) {
   return Object.entries(object).find(entry => callback(entry[1]))[0];
}

const reducers = combineReducers({
   board: (state = {
      title: 'Board Title',
      freeTextAreas: ['Free Text','Free Text','Free Text'],
      columns: ['To Do', 'In Progress', 'Done'],
   }, action) => {
      switch (action.type) {
         case EDIT_BOARD_TITLE:
         case BOARD_TITLE_EDITED: {
            return {...state, title: action.newTitle}
         }
         case EDIT_BOARD_FREE_TEXT:
         case BOARD_FREE_TEXT_EDITED: {
            const index = action.index;
            const newTextAreas = state.freeTextAreas.slice(0);
            newTextAreas[index] = action.text;
            return {...state, freeTextAreas: newTextAreas}
         }
         default: {
            return state;
         }
      }
   },
   stories: (state = {
      'story1': {
         id: 'story1',
         title: 'Story Title',
         number: 1,
         points: 5,
         status: null,
         acceptanceCriteria: 'whole project done'
      }
   }, action) => {
      switch (action.type) {
         case STORY_CREATED:{
            return {...state, [action.story.id]: action.story};
         }
         case STORY_DELETED: {
            const {[action.id]: storyToRemove, ...storiesToKeep} = state;
            //need to change story numbers!
            return storiesToKeep;
         }
         case STORY_MOVED_UP: {
            const idA = action.id;
            const storyA = {...state[idA], number: state[idA].number - 1};
            const idB = findIndex(state, story => story.number === storyA.number);
            const storyB = {...state[idB], number: state[idB].number + 1};
            return {...state, [idA]: storyA, [idB]: storyB};
         }
         case STORY_MOVED_DOWN: {
            const idA = action.id;
            const storyA = {...state[idA], number: state[idA].number + 1};
            const idB = findIndex(state, story => story.number === storyA.number);
            const storyB = {...state[idB], number: state[idB].number - 1};
            return {...state, [idA]: storyA, [idB]: storyB};
         }
         case EDIT_STORY_TITLE:
         case STORY_TITLE_EDITED: {
            const editedStory = {...state[action.id], title: action.newTitle};
            return {...state, [action.id]: editedStory};
         }
         //?case EDIT_STORY_POINTS:
         case STORY_POINTS_EDITED: {
            const editedStory = {...state[action.id], points: action.newPoints};
            return {...state, [action.id]: editedStory};
         }
         case STORY_STATUS_CHANGED: {
            const editedStory = {...state[action.id], status: action.newStatus};
            return {...state, [action.id]: editedStory};
         }
         case EDIT_STORY_ACCEPTANCE_CRITERIA:
         case STORY_ACCEPTANCE_CRITERIA_EDITED: {
            const editedStory = {...state[action.id], acceptanceCriteria: action.newAcceptanceCriteria};
            return {...state, [action.id]: editedStory};
         }
         default: {
            return state
         }
      }
   },
   tasks: (state = {
      'task1': {
         storyId: 'story1',
         status: 'To Do',
         text: '',
      }
   }, action) => {
      switch (action.type) {
         default: {
            return state
         }
      }
   },
});

module.exports = function rootReducer(state, action){  
   switch (action.type) {
      case INIT_STATE: {
         return action.state;
      }
      default: {
         return reducers(state, action);
      }
   }
}