/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react';

import R from 'ramda';

// To dynamically load the stories, we need to set the `components` path as
// the context to webpack and make it load the files matching the `Stories*.js`
// regular expression.
const req = require.context('../app/javascript/src/components', true, /.*_stories.jsx$/);

function loadStories() {
  require('./setup');
  const storyPaths = req.keys();
  R.forEach(req, storyPaths);
}

configure(loadStories, module);
