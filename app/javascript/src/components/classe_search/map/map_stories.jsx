import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import Map from './index';

const props = {
  onPositionUpdate: action('onPositionUpdate'),
  classes: [],
};

storiesOf('ClasseSearchMap', module)
  .add('display', () => (
    <Map {...props} />
  ));

