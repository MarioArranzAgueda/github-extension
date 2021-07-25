import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import store from './redux/store';
import {Provider} from 'react-redux';

describe('App', () => {
  test('check user constant is empty', () => {
    localStorage.setItem('user', 'test');
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const section = screen.getByText('Github Panel');
    expect(section).toBeInTheDocument();
  });
});
