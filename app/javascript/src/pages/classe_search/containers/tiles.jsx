/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import ClasseTile from 'components/classe_search/tile';
import Selectors from 'pages/classe_search/selectors';

function mapStateToProps(state) {
  return {
    classes: Selectors.classes(state),
  };
}

const Container = ({ classes }) => (
  <div>
    {classes.map(classe => (
      <ClasseTile key={classe.id} {...classe} />
    ))}
  </div>
);

export default connect(mapStateToProps)(Container);

