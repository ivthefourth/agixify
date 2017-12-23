const { combineReducers } = require('redux');
const EDIT_BOARD_TITLE = 'EDIT_BOARD_TITLE';
const BOARD_TITLE_EDITED = 'BOARD_TITLE_EDITED';


module.exports = combineReducers({
   board: (state = {title: 'Board Title'}, action) => {
      switch (action.type) {
         case EDIT_BOARD_TITLE:
            return {...state, title: action.newTitle}
          case BOARD_TITLE_EDITED:
            return {...state, title: action.newTitle}
         default:
            return state;
      }
   },
})