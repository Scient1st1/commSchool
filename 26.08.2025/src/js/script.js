$(document).ready(function () {

    // slider
    $('.slider_in').owlCarousel({
        loop: true,
        margin: 5,
        autoplay: true,
        lazyload: true,
        navText: false,
        nav: true,
        dots: false,

        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                slideBy: 1,
                nav: false,
                loop: true
            },
            769: {
                items: 1,
                slideBy: 1,
                nav: false,
                loop: true
            },
            1000: {
                items: 2,
                slideBy: 1,
                nav: false,
                loop: true
            }
        }
    });

});


