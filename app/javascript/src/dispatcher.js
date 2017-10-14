/* eslint-disable no-shadow */
import { onPageLoad } from './page';
import ClassLocation from './class_location';

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

      switch (page) {
        case 'classes:new':
        case 'classes:edit':
          new ClassLocation();
          break;
        default:
          break;
      }
    };

    return Dispatcher;
  })();

  onPageLoad(() => {
    new Dispatcher();
  });
}).call(window);

