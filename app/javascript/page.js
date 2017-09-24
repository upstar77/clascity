exports.pageLoadEvent = 'turbolinks:load';
exports.pageUnloadEvent =

exports.onPageLoad = function(fn) {
  $(document).on(exports.pageLoadEvent, fn);
};

