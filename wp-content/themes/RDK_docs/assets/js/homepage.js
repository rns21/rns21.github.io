$(document).ready(function () {
    var owlCarouselTimeout = 2000;
    var loop = false;
    var updatesCount = $('.updates-wrapper-outer .updts-item').length;
    if($(window).width() >= 1200 && updatesCount > 3 || $(window).width() >= 769 && updatesCount > 2 || $(window).width() < 769 && updatesCount > 1){
        loop = true;
    }
    $('.owl-carousel').owlCarousel({
        loop: loop,
        center: true,
        nav: true,
        responsiveClass:true,
        dots: true,
        autoplay:true,
        autoplayTimeout:owlCarouselTimeout,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1,
                slideBy: 1,
                startPosition: 0,
                stagePadding: 30,
            },
            769: {
                items: 2,
                slideBy: 1,
                center: false,
                startPosition: 1,
            },
            1200: {
                items: 3,
                slideBy: 1,
                startPosition: 1,
            }
        }
    })
    $('.owl-carousel').on('mouseleave',function(){
        $('.owl-carousel').trigger('stop.owl.autoplay');
        $('.owl-carousel').trigger('play.owl.autoplay', [owlCarouselTimeout]);
     })
});
