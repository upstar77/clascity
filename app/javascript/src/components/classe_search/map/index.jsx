/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';

const ClasseSearchMap = withScriptjs(withGoogleMap(() => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
)));

ClasseSearchMap.defaultProps = {
  loadingElement: (<div style={{ height: '100%' }} />),
  containerElement: (<div style={{ height: '400px' }} />),
  mapElement: (<div style={{ height: '100%' }} />),
  googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
};

ClasseSearchMap.propTypes = {
  loadingElement: PropTypes.element,
  containerElement: PropTypes.element,
  mapElement: PropTypes.element,
};

export default ClasseSearchMap;
