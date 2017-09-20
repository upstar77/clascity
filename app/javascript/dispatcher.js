import HelloWorld from './helloworld';

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
        case 'users:show':
          new HelloWorld();
          break;
      }
    };

   return Dispatcher;
  })();

  // TODO Replace by constant
  $(document).on("turbolinks:load", function(){
    new Dispatcher();
  });

}).call(window);


