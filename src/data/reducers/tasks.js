const {
   TASK_CREATED,
   TASK_DELETED,
   EDIT_TASK_TEXT,
   TASK_TEXT_EDITED,
   TASK_STATUS_CHANGED,
   STORY_DELETED,
} = require('../actionTypes');

module.exports = (state = {}, action) => {
      switch (action.type) {
         case TASK_CREATED: {
            return {...state, [action.task.id]: action.task};
         }
         case STORY_DELETED:{
            return Object.entries(state).filter(task => task[1].storyId !== action.id)
               .reduce((acc, task) => {
                  acc[task[0]] = task[1];
                  return acc; 
               }, {})
         }
         case TASK_DELETED: {
            const {[action.id]: taskToRemove, ...tasksToKeep} = state;
            return tasksToKeep;
         }
         case EDIT_TASK_TEXT:
         case TASK_TEXT_EDITED: {
            const editedTask = {...state[action.id], text: action.newText};
            return {...state, [action.id]: editedTask};
         }
         case TASK_STATUS_CHANGED: {
            const editedTask = {...state[action.id], status: action.newStatus};
            return {...state, [action.id]: editedTask};
         }
         default: {
            return state
         }
      }
   }