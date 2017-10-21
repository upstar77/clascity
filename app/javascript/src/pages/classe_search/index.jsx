import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initStore } from 'redux_utils';
import baseReducer from './reducers';
import ClasseSearch from './containers';
import { loadClasses } from './actions';

const PROPS_ATTRIBUTE_NAME = 'data-react-props';

function init() {
  const node = $af('div.js-react-classe-search')[0];
  const propsJson = node.getAttribute(PROPS_ATTRIBUTE_NAME);
  const props = propsJson && JSON.parse(propsJson);

  const store = initStore(baseReducer);

  store.dispatch(loadClasses(props.classes));

  const component = (
    <Provider store={store}>
      <ClasseSearch {...props} />
    </Provider>
  );

  ReactDOM.render(
    component,
    node,
  );
}

export default class ClasseAddress {
  constructor() {
    init();
  }
}

