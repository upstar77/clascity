import R from 'ramda';
import { isNilOrEmpty } from './utils';

export default class ClassAddress {
  constructor() {
    this.bindEvents();
  }

  bindEvents() {
    this.addAddress = this.addAddress.bind(this);
    $('.js-add-class-address').click(this.addAddress);
  }

  addAddress() {
    // COCOON
    $('.js-add-address-cocoon-btn').click();


    // FILLING
    const addressBlocks$ = $('.js-class-form-add-address');

    const firstEmptyBlock = R.find(function(elem) {
      const addressField = $(elem).find('.js-address-form-raw-address');
      return isNilOrEmpty(addressField.val());
    }, addressBlocks$.toArray());

    $(firstEmptyBlock).find('.js-address-form-raw-address').val('Garbage');

    this.dismissModal();
  }

  dismissModal() {
    $('#class-form-add-address-modal').modal('hide');
  }
}
