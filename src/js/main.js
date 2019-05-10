$('.menu-call').click(function () {
  var classnow = $(this).parents().attr('class');
  $('.header-top-menu__menu-item li').removeClass('show');
  if(classnow != 'show')
    $(this).parents('.header-top-menu__menu-item li').toggleClass('show');
});

/*hide select list on document click*/
$(document).click(function (e) {
  if (!$(e.target).closest(".menu-call").length) {
    $('.header-top-menu__menu-item li').removeClass('show');
  }
  e.stopPropagation();
});

/* hide top info block */
$('.close').click(function () {
  $(this).parents('.top-info').hide();
});
