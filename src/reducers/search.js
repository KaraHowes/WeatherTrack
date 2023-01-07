import { createSlice } from '@reduxjs/toolkit';

const search = createSlice({
  name: 'search',
  initialState: {
    startCityName: '',
    startTemp: '',
    startDescription: '',
    endCityName: '',
    endTemp: '',
    endDescription: ''
  },
  reducers: {
    setStartCityName: (store, action) => {
      store.startCityName = action.payload;
    },
    setStartTemp: (store, action) => {
      store.startTemp = action.payload;
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
    setEndDescription: (store, action) => {
      store.status = action.payload;
    }
  }
});

export default search;
