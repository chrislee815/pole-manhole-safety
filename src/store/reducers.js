import {ACTION_TYPE, FILTER_TYPE} from '../constants';

/**
 * Reducer for template form
 */
export const formReducer = (state={}, action) => {
  switch (action.type) {
    case ACTION_TYPE.FETCH_FORM:
      return {
        ...state,
        ...action.form
      }
    default:
      return state;
  }
};

/**
 * Reducer for a record
 */
export const recordReducer = (state={}, action) => {
  switch (action.type) {
    case ACTION_TYPE.EDIT_RECORD:
      return (state.id !== action.id) ?
        state :
        {
          ...state,
          status: action.status,
          form_values: action.form_values
        };
    default:
      return state;
  }
}

/**
 * Reducer for records
 */
export const recordsReducer = (state=[], action) => {
  switch (action.type) {
    case ACTION_TYPE.FETCH_RECORDS:
      return [
        ...action.records
      ];
    case ACTION_TYPE.EDIT_RECORD:
      return state.map(record =>
        recordReducer(record, action)
      );
    default:
      return state;
  }
};

/**
 * Reducer for selected point marker on the map
 */
export const selectedPointReducer = (state=-1, action) => {
  switch (action.type) {
    case ACTION_TYPE.SELECT_POINT:
      return action.recordIdx;
    default:
      return state;
  }
};

/**
 * Reducer for Structure Type filter
 */
export const filterByReducer = (state=FILTER_TYPE.ALL, action) => {
  switch (action.type) {
    case ACTION_TYPE.SELECT_FILTER:
      return action.filterBy;
    default:
      return state;
  }
};