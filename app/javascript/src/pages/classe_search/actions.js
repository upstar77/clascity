import { createAction } from 'redux-actions';
import { addActionPrefix } from 'redux_utils';
import { searchClasses } from 'requests';

const actionSuffix = [
  'LOAD_CLASSES',
  'FETCH_CLASSES',
  'UPDATE_FILTERS',
  'UPDATE_POSITION',
];

export const actionTypes = Object.freeze(addActionPrefix('CLASSE_SEARCH_')(actionSuffix));

/* Load classes into store */
export const loadClasses = createAction(actionTypes.LOAD_CLASSES);
/* Fetch from back-end */
export const performSearch = args => (
  (dispatch) => {
    searchClasses({
      longitude: -123.1175606,
      latitude: 49.2834121,
      radius: 10000,
      experience: null,
      certified: null,
      searchStr: args.searchStr,
    }).then((classes) => {
      dispatch(loadClasses(classes));
    });
  }
);

export const updateFilters = createAction(actionTypes.UPDATE_FILTERS);

export const updatePosition = createAction(actionTypes.UPDATE_POSITION);

