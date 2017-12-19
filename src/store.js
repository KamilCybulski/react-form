/* eslint-disable no-underscore-dangle */

import { createStore, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import animations from './reducers/animations';

const reducers = combineReducers({ form, animations });
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
