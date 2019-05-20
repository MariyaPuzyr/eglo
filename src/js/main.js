/* show catalog menu */
$('.menu-call, .header-catalog-menu--items__link').click(function () {
  var classnow = $(this).parents().attr('class');
  $('.header-top-menu__menu-item li, .header-catalog-menu--items li').removeClass('show');
  if (classnow != 'show')
    $(this).parents('.header-top-menu__menu-item li, .header-catalog-menu--items li').toggleClass('show');
});
/* show catalog menu end */

/*hide select list on document click*/
$(document).click(function (e) {
  if (!$(e.target).closest(".menu-call, .header-catalog-menu--items__link").length) {
    $('.header-top-menu__menu-item li, .header-catalog-menu--items li').removeClass('show');
  }
  e.stopPropagation();
});

/* hide top info block */
$('.close').click(function () {
  $(this).parents('.top-info').hide();
});


/* show mobile list */
$('.mobile-menu--hamburger-icon').click(function () {
  $('.header-top-menu__menu-item').addClass('show');
});
$('.close-menu').click(function () {
  $('.header-top-menu__menu-item').removeClass('show');
});
/* show mobile list end */

/* slider */
$('.single-item').slick({
  dots: true,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: false,
        arrows: false,
      }
    }
  ]
});
/* slider end */

/* product items slider */
var $slick = $('.product');
$slick.slick({
  rows: 2,
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 610,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});