$(document).ready(function () {
    $('.slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 4000,
        cssEase: "linear",
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
