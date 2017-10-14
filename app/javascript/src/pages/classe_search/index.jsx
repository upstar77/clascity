import React from 'react';
import ReactDOM from 'react-dom';
import Hello from 'components/hello/hello';

const PROPS_ATTRIBUTE_NAME = 'data-react-props';

// const data = JSON.parse(node.getAttribute('data')
function render() {
  const node = $af('div.js-react-classe-search')[0];
  const propsJson = node.getAttribute(PROPS_ATTRIBUTE_NAME);
  const props = propsJson && JSON.parse(propsJson);

  ReactDOM.render(
    <Hello {...props} />,
    node,
  );
}

export default class ClasseAddress {
  constructor() {
    render();
  }
}

