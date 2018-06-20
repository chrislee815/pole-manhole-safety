import {createStore, combineReducers} from 'redux';
import {formReducer, recordsReducer, selectedPointReducer, filterByReducer} from './reducers';

/**
 * Store Factory
 */
export default (initialState={}) =>
  createStore(
    combineReducers({
      formReducer,
      recordsReducer,
      selectedPointReducer,
      filterByReducer}),
    initialState
  );