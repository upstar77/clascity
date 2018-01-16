// Catch verticle scroll
$(document).ready(function() {
    $(window).on("scroll", function() {
        var fromTop = $(window).scrollTop();
        $(".header-search").toggleClass("down", (fromTop > 1380));
        $(".searchPage-topSearch, .map-view-wrap, .classNumber-outter-wrap, .pinned-class-outter-wrap ").toggleClass("shrink", (fromTop > 60));
        $(".class-booking").toggleClass("booking-stick", (fromTop > 1120));
    });
});
// Nav menu for mobile
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-item") {
        x.className += " responsive";
    } else {
        x.className = "nav-item";
    }
}

// add class to another class on click or hover
$(document).ready(function(){
    $(".pinClass").click(function(){
        $(".pinned-class-outter-wrap").addClass("pinned-class-active");
        $(".map-view-wrap").addClass("half");
    });
    $(".hide-pinned-column").click(function(){
        $(".pinned-class-outter-wrap").addClass("hidden");
        $(".map-view-wrap").addClass("full-width");
    });
    $(".location-edit").click(function(){
        $(".location-edit, .location-edit-content").addClass("active");
    });
    $(".sun").hover(function(){
        $(".sun-available").toggleClass("active");
    });
    $(".mon").hover(function(){
        $(".mon-available").toggleClass("active");
    });
    $(".tue").hover(function(){
        $(".tue-available").toggleClass("active");
    });
    $(".wed").hover(function(){
        $(".wed-available").toggleClass("active");
    });
    $(".thur").hover(function(){
        $(".thur-available").toggleClass("active");
    });
    $(".fri").hover(function(){
        $(".fri-available").toggleClass("active");
    });
    $(".sat").hover(function(){
        $(".sat-available").toggleClass("active");
    });
    $("#range-day").click(function(){
        $('#range-day, .calendar-day-view').addClass("active");
        $('#range-week, .calendar-week-view').removeClass("active");
        $('#range-month, .calendar-month-view').removeClass("active");
    });
    $("#range-week").click(function(){
        $('#range-day, .calendar-day-view').removeClass("active");
        $('#range-week, .calendar-week-view').addClass("active");
        $('#range-month, .calendar-month-view').removeClass("active");
    });
    $("#range-month").click(function(){
        $('#range-day, .calendar-day-view').removeClass("active");
        $('#range-week, .calendar-week-view').removeClass("active");
        $('#range-month, .calendar-month-view').addClass("active");
    });
    $(".payout-paypal").click(function(){
        $(this).addClass("active");
        $('.payout-bank').removeClass("active");
    });
    $(".payout-bank").click(function(){
        $(this).addClass("active");
        $('.payout-paypal').removeClass("active");
    });
    $(".toggle-tab-right").click(function(){
      $('.toggle-tab-left').removeClass("active");
      $('.toggle-tab-left-content').addClass("hide");
      $('.toggle-tab-right-content').removeClass("hide");
      $(this).addClass("active");
    });
    $(".toggle-tab-left").click(function(){
      $('.toggle-tab-right').removeClass("active");
      $('.toggle-tab-right-content').addClass("hide");
      $('.toggle-tab-left-content').removeClass("hide");
      $(this).addClass("active");
    });
    $(".button-option-toggle-two").click(function(){
      $('.button-option-toggle-one').addClass("line");
      $('.button-option-toggle-one-content').addClass("hide");
      $('.button-option-toggle-two-content').removeClass("hide");
      $(this).removeClass("line");
    });
    $(".button-option-toggle-one").click(function(){
      $('.button-option-toggle-two').addClass("line");
      $('.button-option-toggle-two-content').addClass("hide");
      $('.button-option-toggle-one-content').removeClass("hide");
      $(this).removeClass("line");
    });
});

// owl carousel
$(document).ready(function() {
  $('.class-slider').owlCarousel({
    items: 1,
    loop: false,
    center: true,
    margin: 0,
    nav:true,
    callbacks: true,
    autoHeight:false,
    URLhashListener: true,
    autoplayHoverPause: false,
    startPosition: 'URLHash',
    autoplay:false,
    autoplayTimeout:6000,
    autoplaySpeed:1500,
    autoplayHoverPause:false,
    smartSpeed:800,
  });
})
$(document).ready(function() {
  $('.onboarding-slider').owlCarousel({
    items: 1,
    loop: false,
    center: true,
    margin: 0,
    nav:true,
    callbacks: true,
    autoHeight:false,
    URLhashListener: true,
    autoplayHoverPause: false,
    startPosition: 'URLHash',
    autoplay:false,
    autoplayTimeout:6000,
    autoplaySpeed:1500,
    autoplayHoverPause:false,
    smartSpeed:800,
  });
})
$(document).ready(function() {
  $('.add-new-photo').owlCarousel({
    items: 1,
    loop: false,
    center: true,
    margin: 0,
    nav:true,
    callbacks: true,
    autoHeight:false,
    URLhashListener: true,
    autoplayHoverPause: false,
    startPosition: 'URLHash',
    autoplay:false,
    autoplayTimeout:6000,
    autoplaySpeed:1500,
    autoplayHoverPause:false,
    smartSpeed:800,
  });
})
$(document).ready(function() {
  $('.feature-slider').owlCarousel({
    items: 1,
    loop: true,
    center: true,
    margin: 0,
    nav:true,
    callbacks: true,
    autoHeight:false,
    animateOut: 'fadeOut',
    URLhashListener: true,
    autoplayHoverPause: false,
    startPosition: 'URLHash',
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1500,
    autoplayHoverPause:false,
    smartSpeed:800,
  });
})
// search bar category expand
$(function() {
  $(".tags").on("click", function(e) {
    $(".category, .tags").addClass("open");
    e.stopPropagation()
  });
  $(document).on("click", function(e) {
    if ($(e.target).is(".category") === false) {
      $(".category, .tags").removeClass("open");
    }
  });
});

// price range slider
$(function() {
  $('.price-slider').limitslider({
    values:     [10, 50],
    gap:        0,
    left:       0,
    right:      0,
    step:       1,
    label:      true,
    title:      function (value) {
                    return 'Pricing set to $'+value+'';
                },
    showRanges: true,
    ranges:     [false, { styleClass: 'range-glow' }, false, true]
   });
});

// Content slide open
$(document).ready(function () {
  $('.card-classDetail-title').click(function(){
      $(this).siblings('.card-classDetail-content, .card-classDetail-brief').slideToggle(700, 'easeOutSine');
  });
  $('.showMore').click(function(){
      $(this).siblings('.more-filters').slideToggle(400, 'easeOutSine');
  });
  $('.card-classDetail-group-title').click(function(){
      $(this).siblings('.card-classDetail-group-content').slideToggle(700, 'easeOutSine');
  });
  $('.toggle-title').click(function(){
      $(this).siblings('.toggle-content').slideToggle(300, 'easeOutSine');
  });
  $('.load-more-footer').click(function(){
      $(this).siblings('.load-more-content').slideDown(700, 'easeOutSine');
  });
  $(".toggle-title").click(function() {
      $(this).toggleClass("active");
  });
  $(".card-classDetail-group-title").click(function() {
      $(this).toggleClass("active");
  });
  $(".showMore").click(function() {
      $(this).toggleClass("active");
  });
  $(".class-filter-row a").click(function() {
      $(this).toggleClass("selected");
  });
  $('.btn-new-course').click(function(){
      $('.add-new-course').show('fast');
  });
  $('.btn-cancel-new-course').click(function(){
      $('.add-new-course').hide('fast');
  });
  $('.edit-address').click(function(){
      $(this).parent().siblings('.confirm-location-edit').show('fast');
  });
  $('.edit-address').click(function(){
      $(this).addClass('inactive');
      $(this).removeClass('line');
  });
  $('.menu-button').click(function(){
      $('.navbar-mobile .nav-item').slideToggle(300, 'easeOutSine');
  });
})

// duplicate element on click

$(document).ready(function () {
document.getElementById('duplicate-button').onclick = duplicate;

var i = 0;
var original = document.getElementById('duplicate-content');

function duplicate() {
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "duplicate-content" + ++i; // there can only be one element with an ID
    original.parentNode.appendChild(clone);
}
} );  

$(document).ready(function () {
document.getElementById('duplicate-location').onclick = duplicate;

var i = 0;
var original = document.getElementById('duplicate-content-location');

function duplicate() {
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "duplicate-content-location" + ++i; // there can only be one element with an ID
    original.parentNode.appendChild(clone);
}
} );  

$(document).ready(function () {
document.getElementById('duplicate-price').onclick = duplicate;

var i = 0;
var original = document.getElementById('duplicate-content-price');

function duplicate() {
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "duplicate-content-price" + ++i; // there can only be one element with an ID
    original.parentNode.appendChild(clone);
}
} );  

// Change text
$(document).ready(function () {
  $(".showMore").click(function () {
        $(".showMore-label").ready(function () {
            $(".showMore-label").text(($(".showMore-label").text() == 'More filter options') ? 'Less filter options' : 'More filter options');
        })
    })
} );                  

// fix object-fit on IE
$(document).ready(function () {
  var userAgent, ieReg, ie;
  userAgent = window.navigator.userAgent;
  ieReg = /msie|Trident.*rv[ :]*11\./gi;
  ie = ieReg.test(userAgent);

  if(ie) {
    $(".image, .user-image").each(function () {
      var $container = $(this),
          imgUrl = $container.find("img").prop("src");
      if (imgUrl) {
        $container.css("backgroundImage", 'url(' + imgUrl + ')').addClass("custom-object-fit");
      }
    });
  }
})

// catch element width
$(document).ready(function () {
  var bookingAnchor = $('#class-booking-anchor');
  $('.mini').css({ width: bookingAnchor.width() });
});

// smooth scroll
$(document).ready(function() {
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});

// select
$(document).ready(function() {
  [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {  
    new SelectFx(el);
  } );
});

// Date picker
$(function(){
  $.datepicker.setDefaults(
    $.extend( $.datepicker.regional[ '' ] )
  );
  $( '.datepicker' ).datepicker();
});

// tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// file-upload
$(document).ready(function() {
$('#file-upload').change(function() {
  var i = $(this).prev('label').clone();
  var file = $('#file-upload')[0].files[0].name;
  $(this).prev('label').text(file);
});
});


//trigger the scroll
$(window).scroll();//ensure if you're in current position when page is refreshed
