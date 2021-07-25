import React from 'react';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { Route } from "wouter";
import MainPage from './pages/MainPage'
import FormUserPage from './pages/FormUserPage';

export function App() {
  const theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="App">
      <Route path="/main" component={MainPage}></Route>
      <Route path="/" component={FormUserPage}></Route>
      </div>
    </ThemeProvider>
  );
}
