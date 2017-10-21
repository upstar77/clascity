import React from 'react';
import ClasseFilters from './filters';
import ClasseTiles from './tiles';
import ClasseMap from './map';

const Container = () => (
  <div className="row">
    <div className="col-4">
      <ClasseFilters />
      <ClasseTiles />
    </div>
    <div className="col-8">
      <ClasseMap />
    </div>
  </div>
);

export default Container;

