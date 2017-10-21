import React from 'react';
import { storiesOf } from '@storybook/react';

import Map from './index';

storiesOf('ClasseSearchMap', module)
  .add('display', () => (
    <Map />
  ));

