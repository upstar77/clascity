exports.pageLoadEvent = 'turbolinks:load';

exports.onPageLoad = function(fn) {
  $(document).on(exports.pageLoadEvent, fn);
};

