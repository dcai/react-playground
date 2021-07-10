import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './reducers';

// eslint-disable-next-line no-underscore-dangle
const defaultStore = { version: '1.0.0' };
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  preloadedState: defaultStore,
  devTools: true,
});
