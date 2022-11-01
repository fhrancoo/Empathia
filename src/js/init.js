//Init
let heightNav;
let heightWindow;

windowResize()
positionNav();
$('.parallax').parallax();
$('.modal').modal();
const sidenav = $('.sidenav').sidenav();
const carousel = $('.carousel').carousel();
const tabs = $('.tabs').tabs();
const instanceTabs = M.Tabs.getInstance(tabs);
const instanceSidenav = M.Sidenav.getInstance(sidenav);


//Functions
$(window).resize(function () {
  heightNav = $('nav').outerHeight(true);
  heightWindow = $(window).height();
  
  if ($(window).width() <= 600) {
    $("#banner").attr("src", "./src/img/logo-vertical.jpg");
    $("#banner2").attr("src","./src/img/banner2-phone.jpg");
  } else {
    $("#banner").attr("src", "./src/img/Empathia-slogan.png");
    $("#banner2").attr("src","./src/img/banner2.jpg");
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
    $("#banner2").attr("src","./src/img/banner2-phone.jpg");
  } else {
    $("#banner").attr("src", "./src/img/Empathia-slogan.png");
    $("#banner2").attr("src","./src/img/banner2.jpg");
  }

  $('.slider').slider({ indicators: false, height: heightWindow });
}

function positionNav() {
  if ($(window).scrollTop() >= heightNav) {
    $('nav').css({ opacity: 0 });
  } else $('nav').css({ opacity: 1 });
  if ($(window).scrollTop() >= heightWindow -2) {
    $('nav').css({ transition: 'background-color, opacity .1s ease-in-out', opacity: 1 }).addClass('fixed white').removeClass('shadowDelete');
    $('nav ul a').removeClass('hoverDelete');
  } else {
    $('nav').removeClass('fixed white').addClass('shadowDelete');
    $('nav ul a').addClass('hoverDelete');
  }
}

function redes(params) {
  switch (params) {
      case "ig":
        window.open("https://www.instagram.com/empathia.agencia/", "_blank");
      break;
      case "fb":
        window.open("https://www.facebook.com/profile.php?id=100086478524870","_blank");
      break;
    case "tw":
      window.open("https://twitter.com/EmpathiaAgencia","_blank");
      break;
    case "ln":
      break;
    default:
      break;
  }
}

function pageTabs(params) {
  switch (params) {
    case "home":
      instanceTabs.select('home')
      instanceSidenav.close();
      break;
    case "nosotros":
      instanceTabs.select('nosotros')
      instanceSidenav.close();
      break;
    case "servis":
      instanceTabs.select('servis')
      instanceSidenav.close();
      break;
    default:
      instanceTabs.select('home')
      instanceSidenav.close();
      break;
  }
}