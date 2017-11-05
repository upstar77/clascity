/* eslint-disable react/prop-types */
import R from 'ramda';
import React from 'react';
import { connect } from 'react-redux';
import ClasseMap from 'components/classe_search/map';
import Selectors from 'pages/classe_search/selectors';
import { performSearch, updatePosition } from 'pages/classe_search/actions';

function mapStateToProps(state) {
  return {
    filters: Selectors.filters(state),
    classes: Selectors.classes(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPositionUpdate(filters, args) {
      dispatch(updatePosition(args.newPosition));

      if (args.shouldPerformSearch) {
        const filtersWithNewPosition = R.merge(filters, args.newPosition);
        dispatch(performSearch(filtersWithNewPosition));
      }
    },
  };
}

const Container = (props) => {
  const { filters, onPositionUpdate } = props;

  const onPositionUpdateWithFilters = onPositionUpdate.bind(null, filters);

  return (<ClasseMap
    {...props}
    onPositionUpdate={onPositionUpdateWithFilters}
  />);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);

