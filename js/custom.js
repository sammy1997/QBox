


jQuery(function($) {
  "use strict";
  var launchDay = new Date(2017, 12-1, 8);
  $('#timer').countdown({
  until: launchDay
  });

     new WOW().init();


    (function () {
        $('a.scroll').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }());



});