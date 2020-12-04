$(document).ready(function () {
  var breakpointSmall = 276;

  if ($(window).width() < breakpointSmall) {
    $('.js-slidein').removeClass('js-slidein');
  }

  // Check which of the elements with this class is visible on the page
  $('.js-slidein').each(function (i) {
    var bottomObject = $(this).offset().top;
    var bottomWindow = $(window).scrollTop() + $(window).height();

    if (bottomWindow > bottomObject) {
      $(this).removeClass('js-slidein');
    }
  });

  // Trigger the slide-in effect on scroll
  $(window).scroll(function () {
    $('.js-slidein').each(function (i) {
      var bottomObject = $(this).offset().top + $(this).outerHeight() / 3;
      var bottomWindow = $(window).scrollTop() + $(window).height();

      if (bottomWindow > bottomObject) {
        $(this).addClass('js-slidein-visible');
      }
    });
  });
});
