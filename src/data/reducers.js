const { combineReducers } = require('redux');
const EDIT_BOARD_TITLE = 'EDIT_BOARD_TITLE';


module.exports = combineReducers({
   board: (state = {title: 'Board Title'}, action) => {
      switch (action.type) {
         case EDIT_BOARD_TITLE:
            return {...state, title: action.newTitle}
         default:
            return state;
      }
   },
})