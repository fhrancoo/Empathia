
let heightNav;
let heightWindow;

windowResize()
positionNav();
$('.sidenav').sidenav();
$('.parallax').parallax();
$('.tooltipped').tooltip();
$('.modal').modal();
const carousel = $('.carousel').carousel();
const tabs = $('.tabs').tabs();

//after
$(window).resize(function () {
  heightNav = $('nav').outerHeight(true);
  heightWindow = $(window).height();
  
  if ($(window).width() <= 600) {
    $("#banner").attr("src", "./src/img/logo-vertical.jpg");
    $("#banner2").attr("src","./src/img/mobile2.jpg");
  } else {
    $("#banner").attr("src", "./src/img/Empathia-slogan.png");
    $("#banner2").attr("src","./src/img/branding.jpg");
  }

  $('.slider').slider({ indicators: false, height: heightWindow });
});

$(window).scroll(function () {
  positionNav();
});

function windowResize() {
  heightNav = $('nav').outerHeight(true);
  heightWindow = $(window).height();

  if ($(window).width() <= 600) {
    $("#banner").attr("src", "./src/img/logo-vertical.jpg");
    $("#banner2").attr("src","./src/img/mobile2.jpg");
  } else {
    $("#banner").attr("src", "./src/img/Empathia-slogan.png");
    $("#banner2").attr("src","./src/img/branding.jpg");

  }

  $('.slider').slider({ indicators: false, height: heightWindow });
}

function positionNav() {
  if ($(window).scrollTop() >= heightNav) {
    $('nav').css({ opacity: 0 });
  } else $('nav').css({ opacity: 1 });
  if ($(window).scrollTop() >= heightWindow) {
    $('nav').css({ transition: 'background-color, opacity .1s ease-in-out', opacity: 1 }).addClass('fixed white').removeClass('shadowDelete');
    $('nav ul a').removeClass('hoverDelete');
  } else {
    $('nav').removeClass('fixed white').addClass('shadowDelete');
    $('nav ul a').addClass('hoverDelete');
  }
}
