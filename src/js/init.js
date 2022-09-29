
let heightNav;
let heightWindow;

(function ($) {
  $(function () {

    windowResize()
    positionNav();
    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


//after
$(window).resize(function () {
  heightNav = $('nav').outerHeight(true);
  heightWindow = $(window).height();
  $('.slider').slider({ indicators: false, height: heightWindow });
  
  console.log('ASDASDASD')
});

$(window).scroll(function () {
  positionNav();
});

function windowResize() {
  heightNav = $('nav').outerHeight(true);
  heightWindow = $(window).height();

  $('.slider').slider({ indicators: false, height: heightWindow });
}

function positionNav() {
  if ($(window).scrollTop() >= heightWindow) {
    $('nav').addClass('fixed white').removeClass('shadowDelete');
    $('nav ul a').removeClass('hoverDelete');
  } else {
    $('nav').removeClass('fixed white').addClass('shadowDelete');
    $('nav ul a').addClass('hoverDelete');
  } 
}
