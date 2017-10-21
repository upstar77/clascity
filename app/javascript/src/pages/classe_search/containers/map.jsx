/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import ClasseMap from 'components/classe_search/map';
import Selectors from 'pages/classe_search/selectors';

function mapStateToProps(state) {
  return {
    classes: Selectors.classes(state),
  };
}

const Container = props => (
  <ClasseMap {...props} />
);

export default connect(mapStateToProps)(Container);

