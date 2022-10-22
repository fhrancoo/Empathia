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

const instanceTabs = M.Tabs.getInstance(tabs);
const instanceSidenav = M.Sidenav.getInstance(sidenav);

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