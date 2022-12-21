// home banner
$('.banner-slider').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false
        }
    }
});

// sticky navbar
if ($(window).width() > 767) {
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $('.header-bottom-area').addClass("fixed");
        }
        else {
            $('.header-bottom-area').removeClass("fixed");
        }
    });
}


if ($(window).width() < 767) {
    $('.header-bottom-area').addClass("fixed");
    $('body').css("margin-top", "85px")
}