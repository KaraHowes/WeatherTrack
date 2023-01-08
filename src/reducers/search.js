import { createSlice } from '@reduxjs/toolkit';

const search = createSlice({
  name: 'search',
  initialState: {
    startCityName: '',
    startTemp: '',
    startFeelsTemp: '',
    startDescription: '',
    endCityName: '',
    endTemp: '',
    endFeelsTemp: '',
    endDescription: ''
  },
  reducers: {
    setStartCityName: (store, action) => {
      store.startCityName = action.payload;
    },
    setStartTemp: (store, action) => {
      store.startTemp = action.payload;
    },
    setStartFeelsTemp: (store, action) => {
      store.startFeelsTemp = action.payload;
    },
    setStartDescription: (store, action) => {
      store.startDescription = action.payload;
    },
    setEndCityName: (store, action) => {
      store.endCityName = action.payload;
    },
    setEndTemp: (store, action) => {
      store.endTemp = action.payload;
    },
    setEndFeelsTemp: (store, action) => {
      store.endFeelsTemp = action.payload;
    },
    setEndDescription: (store, action) => {
      store.endDescription = action.payload;
    }
  }
});

export default search;
