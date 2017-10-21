import React from 'react';
import { storiesOf } from '@storybook/react';

import Tile from './index';

storiesOf('ClasseSearchTile', module)
  .add('display', () => (
    <Tile />
  ));

