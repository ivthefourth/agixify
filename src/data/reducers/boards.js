const {
   EDIT_BOARD_TITLE,
   BOARD_TITLE_EDITED,
   EDIT_BOARD_FREE_TEXT,
   BOARD_FREE_TEXT_EDITED,
} = require('../actionTypes');

module.exports = (state = {
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
   }