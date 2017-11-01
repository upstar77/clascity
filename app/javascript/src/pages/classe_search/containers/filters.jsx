/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import ClasseFilters from 'components/classe_search/filters';
import Selectors from 'pages/classe_search/selectors';
import { performSearch, updateFilters } from 'pages/classe_search/actions';

function mapStateToProps(state) {
  return {
    filters:         Selectors.filters(state),
    searchStr:       Selectors.searchStrFilter(state),
    isPrivateClasse: Selectors.isPrivateClasseFilter(state),
    certified:       Selectors.certifiedFilter(state),
    availability:    Selectors.availabilityFilter(state),
    experience:      Selectors.experienceFilter(state),
    backgroundCheck: Selectors.backgroundCheckFilter(state),
    hasReview:       Selectors.hasReviewFilter(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateFilters(args) {
      dispatch(updateFilters(args));
    },
    submit(args) {
      dispatch(performSearch(args));
    },
  };
}

const Container = (props) => {
  const { filters, submit } = props;

  const boundedSubmit = submit.bind(null, filters);

  return (<ClasseFilters
    {...props}
    submit={boundedSubmit}
  />);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);

