import { createAction } from 'redux-actions';
import { addActionPrefix } from 'redux_utils';

const actionSuffix = [
  'LOAD_CLASSES',
  'FETCH_CLASSES',
  'UPDATE_FILTERS',
];

export const actionTypes = Object.freeze(addActionPrefix('CLASSE_SEARCH_')(actionSuffix));

/* Load classes into store */
export const loadClasses = createAction(actionTypes.LOAD_CLASSES);
/* Fetch from back-end */
export const fetchClasses = createAction(actionTypes.FETCH_CLASSES);

export const updateFilters = createAction(actionTypes.UPDATE_FILTERS);

