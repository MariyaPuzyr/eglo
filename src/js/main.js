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
var $slick = $('.product-slider');
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
/* product items slider end */

/* */
$('.promotional-offers-slide').slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  // useTransform: false,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 610,
      settings: {
        variableWidth: false,
        slidesToShow: 2
      }
    }
  ]
});

/* news slider */
var width = window.innerWidth || document.body.clientWidth;

if (width < 992) {
  $('.news-slider').slick({
    dots: false,
    arrows: true,
    variableWidth: true,
    slidesToShow: 1,
    useTransform: false,
    adaptiveHeight: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 610,
        settings: {
          variableWidth: false,
          slidesToShow: 1
        }
      }
    ]
  });
}
/* news slider end */

/* show cart popup */
$('.cart-item').click(function () {
  $('body').addClass('show-cart-popup');
  $('.cart-popup').addClass('open');
});
$('.cart-close').click(function () {
  $('body').removeClass('show-cart-popup');
  $('.cart-popup').removeClass('open');
});
/* show cart popup end */

/* tabs */
$('.tabs__header--title, .login-form--registration').on('click', function () {
  var openTab = $(this).data('tab');

  $('.tabs__header--title').removeClass('active');
  $(this).addClass('active');
  $('.tabs__content').removeClass('active');
  $(openTab).addClass('active');
  $('.recovery-password').removeClass('open');
  $('.form-item').show();
});
/* tabs end */

/* show recovery password tab */
$('.login-form--restore-pass').click(function () {
  $(this).parents('.form-item').hide();
  $('.recovery-password').addClass('open');
});
$('.login-form--remembered-pass').click(function () {
  $('.form-item').show();
  $('.recovery-password').removeClass('open');
});
/* show recovery password tab end */

/* show login popup on click */
$('.login').click(function () {
  $('.sign').addClass('open');
});
/* show login popup on click end */