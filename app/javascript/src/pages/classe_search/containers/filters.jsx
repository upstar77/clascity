import { connect } from 'react-redux';
import ClasseFilters from 'components/classe_search/filters';
import Selectors from 'pages/classe_search/selectors';
import { updateFilters } from 'pages/classe_search/actions';

function mapStateToProps(state) {
  return {
    search:          Selectors.searchFilter(state),
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
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClasseFilters);

