import R from 'ramda';
import GoogleMapsLoader from 'google-maps';
import { isNilOrEmpty } from './utils';

const locationFields = [
  'address',
  'city',
  'postal_code',
  'state',
  'state_code',
  'country_code',
  'longitude',
  'latitude',
];

export default class ClassAddress {
  constructor() {
    this.bindEvents();
  }

  bindEvents() {
    this.addAddress = this.addAddress.bind(this);
    this.replaceContentBySearchResult = this.replaceContentBySearchResult.bind(this);
    $('.js-add-class-location').click(this.addAddress);
    $('.js-search-location').data('type', 'html').on('ajax:success', this.replaceContentBySearchResult);
  }

  addAddress() {
    // COCOON
    $('.js-add-location-cocoon-btn').click();

    // FILLING
    const addressBlocks$ = $('.js-class-location');

    const firstEmptyBlock = R.find((elem) => {
      const addressField = $(elem).find('.js-location-raw-address');
      return isNilOrEmpty(addressField.val());
    }, addressBlocks$.toArray());

    const result = this.getSearchResult();
    const locationBlock$ = $(firstEmptyBlock);

    R.forEach((field) => {
      locationBlock$.find(`.js-location-${field}`).val(result[field]);
    }, locationFields);

    this.dismissModal();
  }

  dismissModal() {
    $('#class-add-location-modal').modal('hide');
  }

  replaceContentBySearchResult(ev, data) {
    $('#class-add-location-modal .modal-body').html(data);
    this.showMap();
  }

  showMap() {
    // TODO Assert
    const mapNode = $('.js-location-map')[0];
    // TODO Shouldn't be here
    const result = this.getSearchResult();
    const longitude = parseFloat(result.longitude);
    const latitude = parseFloat(result.latitude);

    const foundLocation = { lng: longitude, lat: latitude };

    GoogleMapsLoader.load((google) => {
      const map = new google.maps.Map(mapNode, {
        zoom: 17,
        center: foundLocation,
      });

      new google.maps.Marker({
        position: foundLocation,
        map,
      });
    });
  }

  getSearchResult() {
    return R.reduce((acc, field) => {
      const val = $(`.js-location-result-${field}`).text();
      return R.assoc(field, val, acc);
    }, {}, locationFields);
  }
}
