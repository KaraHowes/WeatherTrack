import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import styled from 'styled-components';

import Search from './components/Search';
import Homescreen from './components/Homescreen'

import search from './reducers/search';

const reducer = combineReducers({
  search: search.reducer
});

const Main = styled.div`
width: 100%;
background-color: pink;
height: 100vh;`

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Main>
        <Homescreen />
        <Search />
      </Main>
    </Provider>
  );
};
