import { combineReducers } from 'redux';

const bookmarks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      return state.concat(action.payload);
    case 'REMOVE_BOOKMARK':

      return state.filter(b => b !== action.payload);
    default:
      return state;
  }
};

const reducers = combineReducers({bookmarks});

export default reducers;
