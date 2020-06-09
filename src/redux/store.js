import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import counterReducer from './slices/counter.slice';

const reducer = {
  counter: counterReducer,
};

const middleware = [...getDefaultMiddleware(), logger];

const preloadedState = {};

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
  enhancers: [],
});

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, and devtools enhancers were automatically composed together
export default store;
