import R from 'ramda';

export default {
  classes: R.path(['classes']),
  filters: R.path(['filters']),
  searchStrFilter: R.path(['filters', 'searchStr']),
  isPrivateClasseFilter: R.path(['filters', 'isPrivateClasse']),
  certifiedFilter: R.path(['filters', 'certified']),
  availabilityFilter: R.path(['filters', 'availability']),
  experienceFilter: R.path(['filters', 'experience']),
  backgroundCheckFilter: R.path(['filters', 'backgroundCheck']),
  hasReviewFilter: R.path(['filters', 'hasReviews']),
};
