'use strict';

$('.menu a').on('click', function(e) {
  e.preventDefault();
  var target = this.hash;
  var $target = $(target);
  var targetOffset = $target.offset().top-55;

  $('html, body').stop().animate({
      'scrollTop': target.offset
  }, 1600, 'swing', function () {
      window.location.hash = target;
  });
});



// Source: http://www.paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
