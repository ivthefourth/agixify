const {
   AUTHENTICATE_SUCCESS,
} = require('../actionTypes');

module.exports = (state = {authenticated: false}, action) => {
      switch (action.type) {
         case AUTHENTICATE_SUCCESS: {
            return {authenticated: true};
         }
         default: {
            return state;
         }
      }
   }