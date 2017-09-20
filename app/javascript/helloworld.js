/* eslint-disable class-methods-use-this, no-unneeded-ternary, quote-props */

export default class HelloWorld {
  constructor() {
    console.log('!!!!!!!! HelloWorld is loaded');
    this.bindEvents();

    this.cleanupWrapper = this.cleanup.bind(this);
    // TODO Before unload turbolink
    document.addEventListener('beforeunload', this.cleanupWrapper);
  }

  cleanup() {
    this.unbindEvents();
//    document.removeEventListener('beforeunload', this.cleanupWrapper);
  }

  unbindEvents() {
//    $('.js-done-todo, .js-undo-todo, .js-add-todo').off('click', this.updateRowStateClickedWrapper);
//    $('.js-todos-mark-all', '.js-todos-undo-all').off('click', this.updateallStateClickedWrapper);
//    $('.todo').off('click', this.goToTodoUrl);
  }

  bindEvents() {
//    this.updateRowStateClickedWrapper = this.updateRowStateClicked.bind(this);
//    this.updateAllStateClickedWrapper = this.updateAllStateClicked.bind(this);
//
//    $('.js-done-todo, .js-undo-todo, .js-add-todo').on('click', this.updateRowStateClickedWrapper);
//    $('.js-todos-mark-all, .js-todos-undo-all').on('click', this.updateAllStateClickedWrapper);
//    $('.todo').on('click', this.goToTodoUrl);
  }
}
