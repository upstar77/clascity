/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import ClasseMap from 'components/classe_search/map';
import Selectors from 'pages/classe_search/selectors';
import { updatePosition } from 'pages/classe_search/actions';

function mapStateToProps(state) {
  return {
    classes: Selectors.classes(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPositionUpdate(args) {
      dispatch(updatePosition(args));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClasseMap);

