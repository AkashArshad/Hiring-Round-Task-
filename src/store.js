import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './reducers';

const store = configureStore({
  reducer: {
    items: itemReducer
  }
});

export default store;
