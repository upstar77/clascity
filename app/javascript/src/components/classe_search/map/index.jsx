/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Marker,
  GoogleMap,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';

class SearchMap extends React.Component {
  constructor() {
    super();
    this.mapReady = false;
  }

  onTilesLoaded() {
    this.mapReady = true;
    this.updatePosition();
  }

  onMapMounted(ref) {
    this.map = ref;
  }

  updatePosition() {
    if (!this.mapReady) {
      return;
    }

    const center = this.map.getCenter();
    const bounds = this.map.getBounds();
    const boundNorthEast = bounds.getNorthEast();
    const boundSouthWest = bounds.getSouthWest();
    this.props.onPositionUpdate({
      center: {
        longitude: center.lng(),
        latitude:  center.lat(),
      },
      bounds: {
        ne: {
          longitude: boundNorthEast.lng(),
          latitude:  boundNorthEast.lat(),
        },
        sw: {
          longitude: boundSouthWest.lng(),
          latitude:  boundSouthWest.lat(),
        },
      },
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <GoogleMap
        ref={this.onMapMounted.bind(this)}
        defaultZoom={13}
        defaultCenter={{ lat: 49.2834121, lng: -123.1175606 } /* TODO CHANGE */}
        onTilesLoaded={this.onTilesLoaded.bind(this)}
        onDragEnd={this.updatePosition.bind(this)}
      >
        {classes.map(classe => (
          classe.locations.map(location => (
            <Marker
              key={location.id}
              position={{ lat: location.latitude, lng: location.longitude }}
            />
          ))
        ))}
      </GoogleMap>
    );
  }
}

const MapHOC = withScriptjs(withGoogleMap(props => (
  <SearchMap {...props} />
)));

MapHOC.defaultProps = {
  loadingElement: (<div style={{ height: '100%' }} />),
  containerElement: (<div style={{ height: '400px' }} />),
  mapElement: (<div style={{ height: '100%' }} />),
  googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
};

MapHOC.propTypes = {
  loadingElement: PropTypes.element,
  containerElement: PropTypes.element,
  mapElement: PropTypes.element,
  onPositionUpdate: PropTypes.func.isRequired,
  classes: PropTypes.array.isRequired,
};

export default MapHOC;
