import R from 'ramda';
import { actionTypes } from '../actions';

export default function(stateParam, actionParam) {
  const state = stateParam || {
    search:          null,
    isPrivateClasse: null,
    certified:       null,
    availability:    {},
    experience:      {},
    backgroungCheck: null,
    hasReviews:      null,
  };

  const action = actionParam || {};

  if (action.error) {
    return state;
  }

  switch (action.type) {
    case actionTypes.UPDATE_FILTERS: {
      const { prop, value } = action.payload;
      return R.assoc(prop, value, state);
    }
    default:
      return state;
  }
}
