import {ACTION_TYPE} from '../constants';

/**
 * Fetch a template form from Fulcrum DB
 */
export const fetchForm = form =>
({
  type: ACTION_TYPE.FETCH_FORM,
  form
});

/**
 * Fetch all records from Fulcrum DB
 */
export const fetchRecords = records =>
({
  type: ACTION_TYPE.FETCH_RECORDS,
  records
});

/**
 * Select a point marker in google map
 */
export const selectPoint = recordIdx =>
({
  type: ACTION_TYPE.SELECT_POINT,
  recordIdx
});

/**
 * Select filter type on Input Editor
 */
export const selectFilter = filterBy =>
({
  type: ACTION_TYPE.SELECT_FILTER,
  filterBy
});

/**
 * Created when edit pressed on Input Editor
 */
export const editRecord = (id, newInfo) =>
({
  type: ACTION_TYPE.EDIT_RECORD,
  id,
  ...newInfo
})