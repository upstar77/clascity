import R from 'ramda';
import GoogleMapsLoader from 'google-maps';
import { isNilOrEmpty } from './utils';
import Logger from './logger';
import { formatResult as formatGeocoderResult } from './google_geocode_formatter';

const geocoderErrors = {
  ZERO_RESULTS: 'The address submitted cannot be found. Try modifying your search.',
  OVER_QUERY_LIMIT: 'Too many search requests have been sent. Please try later or ' +
'contact the support if it persists.',
  REQUEST_DENIED: 'Request denied. Please contact the support.',
  INVALID_REQUEST: 'Invalid request. Please contact the support.',
  NOT_FOUND: 'Address search not available. Please contact the support.',
  ERROR_REQUEST: 'Unknown error. Please contact the support.',
};

function formatAddressFromGeocoderResult(result) {
  const data = formatGeocoderResult(result);
  return {
    address: data.formattedAddress,
    city: data.city,
    postal_code: data.zipcode,
    state: R.path(['administrativeLevels', 'level1long'], data),
    state_code: R.path(['administrativeLevels', 'level1short'], data),
    country_code: data.countryCode,
    longitude: data.longitude(),
    latitude: data.latitude(),
  };
}

export default class ClassAddress {
  constructor() {
    this.googleMapsP = this.initGoogleMaps();
    this.bindEvents();
    this.searchResult = null;
    this.selectedLongitude = null;
    this.selectedLatitude = null;
  }

  bindEvents() {
    this.searchAddress = this.searchAddress.bind(this);
    $('.js-search-location-form .js-submit').click(this.searchAddress);

    this.addAddress = this.addAddress.bind(this);
    $('.js-add-class-location').click(this.addAddress);
  }

  initGoogleMaps() {
    return new Promise((resolve) => {
      GoogleMapsLoader.load(resolve);
    });
  }

  getSearchFields() {
    return {
      streetAddress: $('.js-search-location-form .js-input-street_address').val(),
      city:          $('.js-search-location-form .js-input-city').val(),
      state:         $('.js-search-location-form .js-input-state').val(),
      postalCode:    $('.js-search-location-form .js-input-postal_code').val(),
      country:       $('.js-search-location-form .js-input-country').val(),
    };
  }

  getSearchQuery() {
    return R.pipe(
      R.values,
      R.join(' '),
    )(this.getSearchFields());
  }

  showError(errMessage) {
    $('.js-search-location-errors').text(errMessage);
    Logger.error(errMessage);
  }

  handleGeocoderError(results, status) {
    let errStatus = status;
    if (errStatus === 'OK' && (!results || results.length === 0)) {
      errStatus = 'ZERO_RESULTS';
    }
    Logger.error(`class_location.js - Status is ${status} .\
     ${results.error_message ? results.error_message : ''}`, { raw: results });
    this.showError(R.prop(errStatus, geocoderErrors));
  }

  processGeocoderResults(results, status) {
    // TODO Handle bonnecombe
    if (status === 'OK' && results && results.length > 0) {
      // TODO
      // if (R.contains('street_address', results[0].types)) {
      const formattedResult = formatAddressFromGeocoderResult(results[0]);
      this.searchResult = formattedResult;
      this.selectedLongitude = formattedResult.longitude;
      this.selectedLatitude = formattedResult.latitude;
      this.showSecondSearchScreen(formattedResult);
      return;
      // }
    }
    this.handleGeocoderError(results, status);
  }

  showSecondSearchScreen() {
    $('.js-search-location-search').hide();
    $('.js-search-location-result').show();
    this.showSearchResult(this.searchResult);
    this.showLocationOnMap(this.searchResult);
  }

  showSearchResult(location) {
    $('.js-search-location-result-label').text(location.address);
  }

  showLocationOnMap(location) {
    const me = this;

    const mapNode = $('.js-search-location-result-map')[0];
    const foundLocation = { lng: location.longitude, lat: location.latitude };

    this.googleMapsP.then((google) => {
      const map = new google.maps.Map(mapNode, {
        zoom: 17,
        center: foundLocation,
      });

      const circle = new google.maps.Circle({
        strokeColor: '#0000FF',
        strokeOpacity: 0.35,
        strokeWeight: 2,
        fillColor: '#0000FF',
        fillOpacity: 0.20,
        radius: 100,
        center: foundLocation,
        map,
      });

      const marker = new google.maps.Marker({
        position: foundLocation,
        title: 'Drag Me',
        visible: true,
        draggable: true,
        radius: 100,
        map,
      });

      map.addListener('bounds_changed', () => {
        marker.setPosition(map.center);
        circle.setCenter(map.center);
        me.selectedLongitude = map.center.lng();
        me.selectedLatitude = map.center.lat();
      });

      marker.addListener('dragend', () => {
        map.setCenter(marker.getPosition());
        circle.setCenter(marker.getPosition());
      });
    });
  }

  searchAddress() {
    this.googleMapsP.then((google) => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: this.getSearchQuery() }, (results, status) => {
        this.processGeocoderResults(results, status);
      });
    });
  }

  addAddress() {
    const location = this.searchResult;

    if (!location) {
      // TODO
    }

    // COCOON
    $('.js-add-location-cocoon-btn').click();

    // FILLING
    const addressBlocks$ = $('.js-class-location');

    const firstEmptyBlock = R.find((elem) => {
      const addressField = $(elem).find('.js-location-raw-address');
      return isNilOrEmpty(addressField.val());
    }, addressBlocks$.toArray());

    const locationBlock$ = $(firstEmptyBlock);

    R.forEach((field) => {
      locationBlock$.find(`.js-location-${field}`).val(R.prop(field, location));
    }, ['address', 'city', 'postal_code', 'state', 'state_code', 'country_code']);

    locationBlock$.find('.js-location-longitude').val(this.selectedLongitude);
    locationBlock$.find('.js-location-latitude').val(this.selectedLatitude);

    this.dismissModal();
  }

  dismissModal() {
    $('#class-add-location-modal').modal('hide');
  }
}
