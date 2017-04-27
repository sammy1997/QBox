
(function($) {
  "use strict";
    $(window).load(function (){

            function preHeight() {
                var wh = $(window).height();
                $('#boss-preloader').css({height: wh});
            }

            preHeight();
            $(window).bind('resize',function () {
                preHeight();
            });
            
            
                $('#boss-preloader').fadeOut(); // will first fade out the loading animation
                $('body').delay(1500).css({'overflow':'visible'});
        $(".boss-owl").owlCarousel({
            pagination: false,
            autoPlay : true,
            stopOnHover : true,
            responsiveClass: true,
            items: 3,
            itemsDesktop: 3,
            itemsDesktopSmall: 3,
            itemsTablet: 1,
            autoHeight : true
        });
    });


    $( document ).ready(function() {
     $(".boss-home-area").backstretch([
            "https://cdn.pixabay.com/photo/2016/01/09/18/28/old-1130743_960_720.jpg",
            "https://cdn.pixabay.com/photo/2015/10/22/17/28/stack-of-books-1001655_960_720.jpg",
            "https://cdn.pixabay.com/photo/2015/11/19/21/10/knowledge-1052010_960_720.jpg"
          ],{duration: 4000, fade: 1000});

      var endDate = "May 19, 2015 20:39:00";
        $('.boss-countdown').countdown({
          date: endDate,
          render: function(data) {
            $(this.el).html('<div><div><span>' + this.leadingZeros(data.days, 2) + '</span><span>days</span></div><div><span>' + this.leadingZeros(data.hours, 2) + '</span><span>hours</span></div></div><div class="boss-countdown"><div><span>' + this.leadingZeros(data.min, 2) + '</span><span>minutes</span></div><div><span>' + this.leadingZeros(data.sec, 2) + '</span><span>seconds</span></div></div>');
          }
        });


     $("html").niceScroll({
        cursorcolor: '#fff',
        cursorborder: '1px solid #fff',
        mousescrollstep: 50,
        autohidemode: false 
     });

     $(function () {
        $.scrollUp({
          scrollImg: true,
          scrollSpeed: 650,
          topDistance: '1500'
        });
    });

    });

})(jQuery);