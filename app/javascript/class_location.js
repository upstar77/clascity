import R from 'ramda';
import { isNilOrEmpty } from './utils';

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

    $(firstEmptyBlock).find('.js-location-raw-address').val('Garbage');

    this.dismissModal();
  }

  dismissModal() {
    $('#class-add-location-modal').modal('hide');
  }

  replaceContentBySearchResult(ev, data) {
    $('#class-add-location-modal .modal-body').html(data);
  }
}
