/* eslint-disable function-paren-newline */
import R from 'ramda';
import { createSelector } from 'reselect';
import { filterByBounds } from 'distances';

const classes = R.path(['classes']);
const filters = R.path(['filters']);
const swBounds = R.path(['filters', 'bounds', 'sw']);
const neBounds = R.path(['filters', 'bounds', 'ne']);
const searchStrFilter = R.path(['filters', 'searchStr']);
const isPrivateClasseFilter = R.path(['filters', 'isPrivateClasse']);
const certifiedFilter = R.path(['filters', 'certified']);
const availabilityFilter = R.path(['filters', 'availability']);
const experienceFilter = R.path(['filters', 'experience']);
const backgroundCheckFilter = R.path(['filters', 'backgroundCheck']);
const hasReviewFilter = R.path(['filters', 'hasReviews']);

const classesInBounds = createSelector(
  classes, swBounds, neBounds, filters, (c, sw, ne) => {
    if (!c || !sw || !ne) {
      return [];
    }
    return filterByBounds(c, sw, ne);
  });

export default {
  classes,
  filters,
  searchStrFilter,
  isPrivateClasseFilter,
  certifiedFilter,
  availabilityFilter,
  experienceFilter,
  backgroundCheckFilter,
  hasReviewFilter,
  classesInBounds,
};
