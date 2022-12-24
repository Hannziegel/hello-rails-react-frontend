import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { greetingsReducer } from '../reducers/greetings';

const store = configureStore({
  reducer: { greetings: greetingsReducer.reducer },
}, applyMiddleware(thunk));

export default store;