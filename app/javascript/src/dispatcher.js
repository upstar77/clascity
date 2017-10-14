/* eslint-disable no-shadow */
import { onPageLoad } from './page';
import ClasseLocation from './classe_location';
import ClasseSearchPage from './pages/classe_search';

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
          new ClasseLocation();
          break;
        case 'classes:index':
          new ClasseSearchPage();
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

