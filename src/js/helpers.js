function redes(params) {
  switch (params) {
      case "ig":
        window.open("https://www.instagram.com/empathia.agencia/", "_blank");
      break;
      case "fb":
        window.open("https://www.facebook.com/profile.php?id=100086478524870","_blank");
      break;
    case "tw":
      break;
    case "ln":
      break;
    default:
      break;
  }
}

function pageTabs(params) {
  console.log('params: ', params);
  switch (params) {
    case "home":
      tabs.tabs('select', 'home').updateTabIndicator();
      
      $('.slide').removeClass("hide");
      break;
    case "nosotros":
      tabs.tabs('select', 'nosotros').updateTabIndicator(); 
      $('.slide').addClass("hide");
      break;
    case "servicios":
      tabs.tabs('select', 'servicios').updateTabIndicator(); 
      $('.slide').addClass("hide");
    case "trabajos":
      tabs.tabs('select', 'home').updateTabIndicator(); 
      $('.slide').removeClass("hide");
    default:
      tabs.tabs('select', 'home').updateTabIndicator(); 
      $('.slide').removeClass("hide");
      break;
  }
}