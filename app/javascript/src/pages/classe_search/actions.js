import { createAction } from 'redux-actions';
import { addActionPrefix } from 'redux_utils';
import { searchClasses } from 'requests';
import { getDistanceFromLatLonInM } from 'distances';

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
    const centerLng = args.center.longitude;
    const centerLat = args.center.latitude;
    const swLng = args.bounds.sw.longitude;
    const swLat = args.bounds.sw.latitude;
    const radius = getDistanceFromLatLonInM(centerLat, centerLng, swLat, swLng);
    searchClasses({
      longitude: centerLng,
      latitude: centerLat,
      radius,
      experience: args.experience,
      certified: args.certified,
      private: args.isPrivateClasse,
      searchStr: args.searchStr,
    }).then((classes) => {
      dispatch(loadClasses(classes));
    });
  }
);

export const updateFilters = createAction(actionTypes.UPDATE_FILTERS);

export const updatePosition = createAction(actionTypes.UPDATE_POSITION);

