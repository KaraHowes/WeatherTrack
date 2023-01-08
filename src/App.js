import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from '@reduxjs/toolkit';
import styled from 'styled-components';

import Search from './components/Search';
import Header from './components/Header'

import search from './reducers/search';

const reducer = combineReducers({
  search: search.reducer
});

const Main = styled.div`
width: 100%;
height: 100vh;
;`

// this is necessary for local storage usage
const persistedStatesJSON = localStorage.getItem('weatherReduxState');
let persistedState = {};
if (persistedStatesJSON) {
  persistedState = JSON.parse(persistedStatesJSON);
}
const store = createStore(reducer, persistedState);

store.subscribe(() => {
  localStorage.setItem('weatherReduxState', JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <Main>
        <Header />
        <Search />
      </Main>
    </Provider>
  );
};
