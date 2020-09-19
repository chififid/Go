var burgermenu = false;
function burgerMenu(x) {
    if (burgermenu == false) {
        x.classList.toggle("change");
        $('nav.top__menu').addClass('on')
        $('.main').addClass('on')
        burgermenu = true;
    }
    else {
        x.classList.toggle("change");
        $('nav.top__menu').removeClass('on')
        $('.main').removeClass('on')
        burgermenu = false;
    }
}

$('.slider').slick({
    prevArrow: "<img src='img/slider-arrow-left.png' class='next__arrow' alt='arrow'>",
    nextArrow: "<img src='img/slider-arrow-right.png' class='last__arrow' alt='arrow'>",
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
        {
          breakpoint: 1920,
          settings: {
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            arrows: false
          }
        },
    ]
});