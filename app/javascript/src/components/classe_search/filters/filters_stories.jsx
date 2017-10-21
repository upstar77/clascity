/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SearchFilters from './index';

function updateFilters({ prop, value }) {
  action(`Update filter: ${prop} to ${value}`)();
}

const props = {
  isPrivateClasse: true,
  updateFilters,
};

storiesOf('ClasseSearchFilters', module)
  .add('display', () => (
    <SearchFilters {...props} />
  ));

