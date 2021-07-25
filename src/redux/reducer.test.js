import bookmarkReducer from './reducers';

test('should return initial state', () => {
  const previousState = { bookmarks: [] };
  expect(bookmarkReducer(previousState, {})).toEqual({ bookmarks: [] });
});

test('should add new bookmark', () => {
  const previousState = { bookmarks: [] };
  expect(bookmarkReducer(previousState, { type: 'ADD_BOOKMARK', payload: 'new.url' })).toEqual({
    bookmarks: ['new.url']
  });
});

test('should remove bookmark', () => {
  const previousState = { bookmarks: ['new.url'] };
  expect(bookmarkReducer(previousState, { type: 'REMOVE_BOOKMARK', payload: 'new.url' })).toEqual({
    bookmarks: []
  });
});
