const { combineReducers } = require('redux');

const {
   INIT_STATE,
} = require('./actionTypes');

const reducers = combineReducers({
   board: require('./reducers/boards'),
   stories: require('./reducers/stories'),
   tasks: require('./reducers/tasks'),
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