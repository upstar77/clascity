// homepage scroll into view shadow
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $('.img-calendar').toggleClass('active',
      scroll >= $('.feature-calendar').offset().top
    );
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $('.feature-slider').toggleClass('active',
      scroll >= $('.feature-class').offset().top
    );
}); 