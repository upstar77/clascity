import { onPageLoad } from './page';
import ClassAddress from './classAddress';

(function() {
  const Dispatcher = (function() {
    function Dispatcher() {
      this.initPageScripts();
    }

    Dispatcher.prototype.initPageScripts = function() {
      const page = $('body').attr('data-page');
      if (!page) {
        return false;
      }

      const path = page.split(':');

      switch (page) {
        case 'classes:new':
        case 'classes:edit':
          new ClassAddress();
          break;
      }
    };

   return Dispatcher;
  })();

  onPageLoad(function() {
    new Dispatcher();
  });

}).call(window);


