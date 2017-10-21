import R from 'ramda';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

const middlewares = [thunkMiddleware, loggerMiddleware];

export function initStore(baseReducer, initialState) {
  return createStore(
    baseReducer,
    initialState || baseReducer(),
    applyMiddleware(...middlewares),
  );
}

export function addActionPrefix(prefix) {
  return R.reduce((acc, action) => (
    R.assoc(action, prefix + action, acc)
  ), {});
}

