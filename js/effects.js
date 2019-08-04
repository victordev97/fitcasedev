$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $('nav').addClass('nav-shadow');
    } else {
        $('nav').removeClass('nav-shadow');
    }
});

AOS.init();