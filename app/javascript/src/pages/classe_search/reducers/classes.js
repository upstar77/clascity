import { actionTypes } from '../actions';

export default function(stateParam, actionParam) {
  const state = stateParam || null;
  const action = actionParam || {};

  if (action.error) {
    return state;
  }

  switch (action.type) {
    case actionTypes.LOAD_CLASSES:
      return action.payload;
    default:
      return state;
  }
}
