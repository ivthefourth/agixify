const {
   EDIT_STORY_TITLE,
   STORY_TITLE_EDITED,
   EDIT_STORY_POINTS,
   STORY_POINTS_EDITED,
   STORY_STATUS_CHANGED,
   EDIT_STORY_ACCEPTANCE_CRITERIA,
   STORY_ACCEPTANCE_CRITERIA_EDITED,
   STORY_CREATED,
   STORY_DELETED,
   STORY_MOVED_UP,
   STORY_MOVED_DOWN,
} = require('../actionTypes');

function findIndex(object, callback) {
   return Object.entries(object).find(entry => callback(entry[1]))[0];
}

module.exports = (state = {}, action) => {
      switch (action.type) {
         case STORY_CREATED: {
            return {...state, [action.story.id]: action.story};
         }
         case STORY_DELETED: {
            const {[action.id]: storyToRemove, ...storiesToKeep} = state;
            const removedNumber = storyToRemove.number;
            return Object.entries(storiesToKeep).reduce((acc, story) => {
               acc[story[0]] = {
                  ...story[1],
                  number: story[1].number > removedNumber ? story[1].number - 1 : story[1].number
               };
               return acc;
            }, {});
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
         case EDIT_STORY_POINTS:
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
   }