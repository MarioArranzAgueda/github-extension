import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
  bookmarks: []
};

const store = createStore(reducers, initialState);

export default store;
